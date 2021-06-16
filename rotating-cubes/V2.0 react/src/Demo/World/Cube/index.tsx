import React, { useEffect, useRef, useState } from 'react';

import { Color, useFrame } from "@react-three/fiber";
import { DoubleSide, Euler, Vector3 } from 'three';
import Labeling from "./labeling";
import { axisType, cornerType, instructionType, rotationStep } from '../../Util/Types/types';
import { getPointOfRotation } from "./helpers/getPointOfRotation";
import { getAxisFromText } from "./helpers/getAxisFromText";
import { roundToRightAngle } from "./helpers/roundToRightAngle";
import { translateGroup } from "./helpers/translateGroup";


const Cube = (props: {
	instructions: instructionType[],
	id: number,
	initialPosition: Vector3,
	color: Color,
	rDisplacement: number,
	rAxis: axisType,
	corner: cornerType,
	updatePosition: Function,
	allPositions: any,
}) => {
	const everything = useRef<THREE.Group>(null!);
	const forPivot = useRef<THREE.Group>(null!);
	const side = 1;

	const [step, setStep] = useState<rotationStep>("0_DEFAULT");
	const [finalCorner, setFinalCorner] = useState<cornerType>("NorthEast");
	const [finalAxis, setFinalAxis] = useState<axisType>("x"); 
	const [finalDisplacement, setFinalDisplacement] = useState(Math.PI);

	// Debug
	useEffect(() => {
		console.log(`(for cube ${props.id}) step: ${step}`);
	})

	// Handling instructions
	useEffect(() => {
		console.log("STARTING INSTRUCTIONS");
		props.instructions
			.filter((ins) => ins.cubeID === props.id)
			.forEach((ins) => {
				setTimeout(() => {
					//Set the final angle, axis, corner when the user clicks the box
					setFinalAxis(ins.axis);
					setFinalCorner(ins.corner);
					setFinalDisplacement(ins.displacement);
		
					setStep("1_CLICKED");
				}, ins.timeToStart);
			})
	}, [props.id, props.instructions])



	
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
		console.log("CUBE POSITIONS WERE SET TO INITIAL");
	}, [props.initialPosition])

	// Update the position of the cube and store this information in the Parent component
	const updatePosition = props.updatePosition;
	useEffect(() => {
		if (step === "0_DEFAULT") {
			updatePosition(everything.current.position);
		}
	}, [step, updatePosition])


	// 0. Click to start the rotation
	const handleClick = () => {
		if (step === "0_DEFAULT") {
			forPivot.current.position.x = 0;
			forPivot.current.position.y = 0;
			forPivot.current.position.z = 0;
				//Set the final angle, axis, corner when the user clicks the box
			setFinalAxis(props.rAxis);
			setFinalCorner(props.corner);
			setFinalDisplacement(props.rDisplacement);

			setStep("1_CLICKED");
		}
		else {
			alert("Before clicking again, wait until the current rotation has finished for this cube!");
		}
	}

	// 1. Move object to the pivot point
	// 1.1 Local - Subtract the pivot point from the object's original position
	const INCREMENT_AMT = 0.1; //increase this number to make the cubes rotate faster
	const [maxIteration, setMaxIteration] = useState(0);
	const [iteration, setIteration] = useState(0);
	useEffect(() => {
		if (step === "1_CLICKED") {
			const [piv, opp] = getPointOfRotation(finalCorner, side, finalAxis);
			translateGroup(everything, piv);
			translateGroup(forPivot, opp);

			setMaxIteration(Math.abs(finalDisplacement / INCREMENT_AMT));
			setIteration(0);
			setStep("2_ROTATING");
		}
	}, [step, finalAxis, finalCorner, finalDisplacement])

	// 2. Apply the rotation
	useFrame(() => {
		if (step === "2_ROTATING") {
			// -- While Rotating --
			if (finalDisplacement > 0) {
				everything.current.rotateOnAxis(getAxisFromText(finalAxis), INCREMENT_AMT)
			}
			else {
				everything.current.rotateOnAxis(getAxisFromText(finalAxis), -INCREMENT_AMT)
			}
			setIteration(iteration+1);
			if (iteration >= maxIteration) {
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
				
			const [piv, opp] = getPointOfRotation(finalCorner, side, finalAxis);
			translateGroup(everything, opp);
			translateGroup(forPivot, piv);

			setStep("0_DEFAULT");

			// console.log(`***** (for cube ${props.id}) quarternion:`);
			// console.log(everything.current.quaternion);
			// console.log(everything.current.rotation);
		}
	}, [step, finalAxis, finalCorner]) 




	const [hovered, setHover] = useState(false);

	return (
		<group
			ref={everything}	
			onClick={handleClick}
			onPointerOver={(event) => setHover(true)}
			onPointerOut={(event) => setHover(false)}
		>
			<group ref={forPivot}>
				<mesh>
					<boxGeometry args={[side, side, side]} />
					<meshPhongMaterial color={props.color} opacity={hovered ? 0.2 : 0.6} transparent={true} side={DoubleSide}/>
				</mesh>
				<Labeling
					cubeID={props.id}
					letterOffset={0.1}
					side={side}
					rAxis={props.rAxis}
				/>
				<axesHelper scale={0.3}/>
			</group>
		</group>
	)
}



export default Cube;
