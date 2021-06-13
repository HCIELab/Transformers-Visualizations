import React, { useEffect, useRef, useState } from 'react';

import { Color, useFrame } from "@react-three/fiber";
import { DoubleSide, Vector3, Vector4 } from 'three';
import Labeling from "./labeling";
import { axisType, cornerType, instructionType, rotationStep } from '../Types/types';
import { getPointOfRotation } from "./helpers/getPointOfRotation";


const Cube = (props: {
	instructions: instructionType[],
	id: number,
	initialPosition: Vector3,
	color: Color,
	rDisplacement: number,
	rAxis: axisType,
	corner: cornerType,
}) => {
	/**
	 * For how to have persistent rotations in ThreeJS, credit to:
	 * https://stackoverflow.com/questions/44287255/whats-the-right-way-to-rotate-an-object-around-a-point-in-three-js/44288885#:~:text=js%20suggest%20the%20way%20to,child%20rotates%20around%20the%20point.
	 */
	const everything = useRef<THREE.Group>(null!);
	const forPivot = useRef<THREE.Group>(null!);
	const side = 1;

	const [step, setStep] = useState<rotationStep>("0_DEFAULT");
	const [finalCorner, setFinalCorner] = useState<cornerType>("NorthEast");
	const [finalAxis, setFinalAxis] = useState<axisType>("x"); 
	const [finalDisplacement, setFinalDisplacement] = useState(Math.PI);
	const [finalAngle, setFinalAngle] = useState(0);

	// Debug
	useEffect(() => {
		console.log(`(for cube ${props.id}) step: ${step}`);
	})

	useEffect(() => {
		console.log("STARTING INSTRUCTIONS");
		// Start with rotations being 0
		everything.current.rotation['x'] = 0;
		everything.current.rotation['y'] = 0;
		everything.current.rotation['z'] = 0;
		props.instructions
			.filter((ins) => ins.cubeID === props.id)
			.forEach((ins) => {
				setTimeout(() => {
					//Set the final angle, axis, corner when the user clicks the box
					setFinalAxis(ins.axis);
					setFinalCorner(ins.corner);
					setFinalDisplacement(ins.displacement);
					setFinalAngle(everything.current.rotation[ins.axis] + ins.displacement);
		
					setStep("1_CLICKED");
				}, ins.timeToStart);
			})
	}, [props.id, props.instructions])

	// -1. Place cube at initial position on first render
	useEffect(() => {
		everything.current.position.x = props.initialPosition.x;
		everything.current.position.y = props.initialPosition.y;
		everything.current.position.z = props.initialPosition.z;
		forPivot.current.position.x = 0;
		forPivot.current.position.y = 0;
		forPivot.current.position.z = 0;
		console.log("CUBE POSITIONS WERE SET TO INITIAL");
	}, [props.initialPosition])

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
			setFinalAngle(everything.current.rotation[props.rAxis] + props.rDisplacement);

			setStep("1_CLICKED");
		}
		else {
			alert("Before clicking again, wait until the current rotation has finished for this cube!");
		}
	}

	// 1. Move object to the pivot point
	// 1.1 Local - Subtract the pivot point from the object's original position
	useEffect(() => {
		if (step === "1_CLICKED") {
			const [piv, opp] = getPointOfRotation(finalCorner, side, finalAxis);
			translateGroup(everything, piv);
			translateGroup(forPivot, opp);

			setStep("2_ROTATING");
		}
	}, [step, finalAxis, finalCorner])

	// 2. Apply the rotation
	useFrame(() => {
		if (step === "2_ROTATING") {
			// -- While Rotating --
			const INCREMENT_AMT = 0.06; //increase this number to make the cubes rotate faster
			if (finalDisplacement > 0) {
				everything.current.rotation[finalAxis] += INCREMENT_AMT;
			}
			else {
				everything.current.rotation[finalAxis] -= INCREMENT_AMT;
			}
			// // -- Done Rotating --
			if (finalDisplacement > 0) {
				if (everything.current.rotation[finalAxis] > finalAngle) {
					setStep("3_END");
				}
			}
			else {
				if (everything.current.rotation[finalAxis] < finalAngle) {
					setStep("3_END");
				}
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
			const countNumRightAngles = Math.round(
				everything.current.rotation[finalAxis] / (Math.PI / 2)
			); 
			const foo = countNumRightAngles * Math.PI / 2;
			everything.current.rotation[finalAxis] = foo;
				
			const [piv, opp] = getPointOfRotation(finalCorner, side, finalAxis);
			translateGroup(everything, opp);
			translateGroup(forPivot, piv);

			setStep("0_DEFAULT");

			console.log("****");
			console.log("finalAxis: ", finalAxis);
			console.log("pointOfRotation", getPointOfRotation(finalCorner, side, finalAxis));
		}
	}, [step, finalAxis, finalCorner]) 




	const [hovered, setHover] = useState(false);

	return (
		<group
			ref={everything}	
			onClick={handleClick}
			onPointerOver={(event) => setHover(true)}
			onPointerOut={(event) => setHover(false)}
			// position={props.initialPosition}
		>
			<axesHelper position={new Vector3(-0.5, 0, 0)} />
			<mesh>
				<boxGeometry args={[side+0.2, side+0.2, side+0.2]} />
				<meshPhongMaterial color={"rgb(0, 204, 255)"} opacity={0.2} transparent={true} side={DoubleSide}/>
			</mesh>
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
				<axesHelper/>
			</group>
		</group>
	)
}


const translateGroup = (object : React.MutableRefObject<THREE.Group>, vec : Vector3) => {
	object.current.translateX(vec.x);
	object.current.translateY(vec.y);
	object.current.translateZ(vec.z);
}

export default Cube;
