import React, { useEffect, useRef, useState } from 'react';

import { Color, useFrame } from "@react-three/fiber";
import { Euler, Vector3, Quaternion } from 'three';
import Labeling from "./Labeling/labeling";
import Model from "./Model/index";
import { axisType, cornerType, instructionType, rotationStep } from '../../Util/Types/types';
import { getPointOfRotation } from "./helpers/getPointOfRotation";
import { getAxisOfRotationLocal } from "./helpers/getAxisOfRotationLocal";
import { roundToRightAngle } from "./helpers/roundToRightAngle";
import { translateGroup } from "./helpers/translateGroup";
import { generateExplorePathOfRotation } from "./helpers/collision/generateExplorePathOfRotation";
import MovingEmags from './MovingEmags/index';


const Cube = (props: {
	instructions: instructionType[],
	id: number,
	initialPosition: Vector3,
	color: Color,
	isCounterclockwise: boolean,
	setIsCounterclockwise: Function,
	axisOfRotationWorld: axisType,
	setAxisOfRotationWorld: Function,
	updatePosition: Function,
	allPositions: {[cubeID: number]: Vector3},
	visualizePath: Function,

	incrementAmount: number,
	showPath: boolean,

	displayEmagIDs: boolean,
    displayCubeBox: boolean,
    displayCoilsAndCorners: boolean,
    displayBlueCubeBox: boolean,
	setStationaryEmagsPositions: Function,
}) => {
	const everything = useRef<THREE.Group>(null!);
	const forPivot = useRef<THREE.Group>(null!);
	const side = 1;

	const [step, setStep] = useState<rotationStep>("0_DEFAULT");
	const [cornerOfRotation, setCornerOfRotation] = useState<cornerType>("NorthEast");
	const [pointOfRotation, setPointOfRotation] = useState(new Vector3(0, 0, 0));
	const [initialRotationAmount, setInitialRotationAmount] = useState(new Quaternion());
	const [showMovingEmags, setShowEmags] = useState(false);

	// Debug
	useEffect(() => {
		console.log(`(Cube.tsx) (for cube ${props.id}) step: ${step}`);
	})


	///////////////////////////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////////////////
	///////////////////////////////--- HANDLING INITIAL THINGS ---/////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////////////////
	
	// Place cube at initial position and rotation on first render
	useEffect(() => {
		everything.current.position.x = props.initialPosition.x;
		everything.current.position.y = props.initialPosition.y;
		everything.current.position.z = props.initialPosition.z;
		// Just make sure forPivot is at its local center
		forPivot.current.position.x = 0;
		forPivot.current.position.y = 0;
		forPivot.current.position.z = 0;
		// Start with rotations being 0
		everything.current.rotation['x'] = 0;
		everything.current.rotation['y'] = 0;
		everything.current.rotation['z'] = 0;
		console.log("(Cube.tsx) Cubes set to initial positions");
	}, [props.initialPosition])

	// Update the position of the cube and store this information in the Parent component
	const updatePosition = props.updatePosition;
	useEffect(() => {
		if (step === "0_DEFAULT") {
			updatePosition(everything.current.position);
			setShowEmags(false);
		}
	}, [step, updatePosition])


	///////////////////////////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////////////////
	///////////////////////////////--- ROTATION ANIMATION ---/////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////////////////

	// 0. Click to start the rotation
	const handleClick = () => {
		if (step === "0_DEFAULT") {
			forPivot.current.position.x = 0;
			forPivot.current.position.y = 0;
			forPivot.current.position.z = 0;
			setInitialRotationAmount(everything.current.quaternion.clone());

			setStep("1_CLICKED");
		}
		else {
			alert("Before clicking again, wait until the current rotation has finished for this cube!");
		}
	}

	// 1. Move object to the pivot point
	// 1.1 Local - Subtract the pivot point from the object's original position
	const [maxIteration, setMaxIteration] = useState(0);
	const [iteration, setIteration] = useState(1);
	const {id, showPath, allPositions, visualizePath, isCounterclockwise} = props;
	useEffect(() => {
		if (step === "1_CLICKED") {
			// Analyze the collision path and find if it is a 90 or 180 degree rotation
			const {collisionResult, cornerName, displacementMagnitude} = generateExplorePathOfRotation(
				allPositions, 
				visualizePath, 
				isCounterclockwise, props.axisOfRotationWorld)
				(id);
			console.log("(Cube.tsx) collisionResult: ", collisionResult);
			if (showPath) {
				setStep("0_DEFAULT");
			}
			else {
				switch (collisionResult) {
					case "NO_NEIGHBORS":
						alert("Sorry there are no neighbors to this cube!")
						setStep("0_DEFAULT");
						break;
					case "HAS_COLLISION":
						alert("Sorry there is a collision in your path!")
						setStep("0_DEFAULT");
						break;
					case "NO_COLLISION":
						const piv = getPointOfRotation(cornerName, side, props.axisOfRotationWorld, initialRotationAmount);
						setCornerOfRotation(cornerName);				
						setPointOfRotation(piv);		
						let opp = piv.clone();
						opp.negate();

						translateGroup(everything, piv);
						translateGroup(forPivot, opp);
			
						setMaxIteration(Math.abs(displacementMagnitude / props.incrementAmount));
						setIteration(1);
						setStep("2_ROTATING");
		
						setShowEmags(true);
						break;
				}
			}
		}
	}, [step, props.axisOfRotationWorld, id, showPath, initialRotationAmount, props.incrementAmount, allPositions, visualizePath, isCounterclockwise])

	// 2. Apply the rotation
	useFrame(() => {
		if (step === "2_ROTATING") {
			// -- While Rotating --
			if (iteration < maxIteration) {
				console.log(`(Cube.tsx) iteration: ${iteration}, maxIteration: ${maxIteration}`)
				if (props.isCounterclockwise) {
					everything.current.rotateOnAxis(getAxisOfRotationLocal(props.axisOfRotationWorld, initialRotationAmount), props.incrementAmount)
				}
				else {
					everything.current.rotateOnAxis(getAxisOfRotationLocal(props.axisOfRotationWorld, initialRotationAmount), -props.incrementAmount)
				}
				setIteration(iteration+1);
			}
			else {
				setStep("3_END");
			}
		}
    })
	
	// After a rotation finishes, set the new permanent location of the cube	
	// 3. Add the pivot point back to the object's position
	// 3.1 Move the object back by the pivot 
	useEffect(() => {
		if (step === "3_END") {
			/**
			 * Also at the end of the rotation, snap it to the nearest 90 degrees
			 * Make sure to execute this step (of finishing the rotation) before 
			 * the positions are moved again.
			 */
			everything.current.setRotationFromEuler(new Euler(
				roundToRightAngle(everything.current.rotation.x),
				roundToRightAngle(everything.current.rotation.y),
				roundToRightAngle(everything.current.rotation.z)
			))
				
			let opp = pointOfRotation.clone();
			opp.negate();
			translateGroup(everything, opp);
			translateGroup(forPivot, pointOfRotation);

			// Make sure the position is rounded to the nearest integer
			const {x, y, z} = everything.current.position;
			everything.current.position.set(Math.round(x), Math.round(y), Math.round(z));

			setStep("0_DEFAULT");

			// console.log(`***** (for cube ${props.id}) quarternion:`);
			// console.log(everything.current.quaternion);
			// console.log(everything.current.rotation);
		}
	}, [step, props.axisOfRotationWorld, initialRotationAmount, pointOfRotation]) 

	///////////////////////////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////////////////
	///////////////////////////////--- HANDLING Instructions ---/////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////////////////
	const {instructions, setIsCounterclockwise, setAxisOfRotationWorld} = props;
	useEffect(() => {
		console.log("(Cube.tsx) Starting an Instructions Script");
		instructions
			.filter((ins) => ins.cubeID === id)
			.forEach((ins) => {
				setTimeout(() => {
					//Set the final angle, axis, corner when the user clicks the box
					setAxisOfRotationWorld(ins.axis);
					setIsCounterclockwise(ins.isCounterclockwise);
					handleClick();
				}, ins.timeToStart);
			})
	// eslint-disable-next-line 
	}, [id, instructions, setIsCounterclockwise, setAxisOfRotationWorld])


	///////////////////////////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////////////////
	///////////////////////////////--- RETURN AND RENDER ---/////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////////////////

	return (
		<group
			ref={everything}	
			onClick={handleClick}
		>
			<group ref={forPivot}>
				<Model
					side={side}
					color={props.color}
					displayCubeBox={props.displayCubeBox}
					displayCoilsAndCorners={props.displayCoilsAndCorners}
					displayBlueCubeBox={props.displayBlueCubeBox}
				/>
				<Labeling
					cubeID={props.id}
					letterOffset={0.1}
					side={side}
					axis={props.axisOfRotationWorld}
					displayEmagIDs={props.displayEmagIDs}
				/>
				<MovingEmags
					showMovingEmags={showMovingEmags}
					side={side}
					cornerName={cornerOfRotation}
					initialRotationAmount={initialRotationAmount}
					axisOfRotationWorld={props.axisOfRotationWorld}
					isCounterclockwise={props.isCounterclockwise}
					setStationaryEmagsPositions={props.setStationaryEmagsPositions}
				/>
				{/* <axesHelper scale={0.3}/> */}
			</group>
		</group>
	)
}



export default Cube;
