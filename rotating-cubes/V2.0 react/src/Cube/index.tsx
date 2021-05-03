import React, { useEffect, useRef, useState } from 'react';

import { Color, useFrame } from "@react-three/fiber";
import { DoubleSide, Vector3 } from 'three';
import Numbering from "./numbering";
import { axisType, cornerType, rotationStep } from '../Types/types';

const Cube = (props: {
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
	const [isRotating, setIsRotating] = useState(false);
	const [globalPosition, setGlobalPosition] = useState(props.initialPosition);
	const [finalAngle, setFinalAngle] = useState(0);
	// const [finalAxis, setFinalAxis] = useState<axisType>("x"); //TODO: implement this

	// Debug
	useEffect(() => {
		console.log(`(for cube ${props.id}) step: ${step}`);
	})

	// -1. Place cube at initial position on first render
	useEffect(() => {
		everything.current.position.x = props.initialPosition.x;
		everything.current.position.y = props.initialPosition.y;
		everything.current.position.z = props.initialPosition.z;
		forPivot.current.position.x = 0;
		forPivot.current.position.y = 0;
		forPivot.current.position.z = 0;
	}, [])

	// 0. Click to start the rotation
	const handleClick = () => {
		const ninetyDegreeRotationCount = Math.round(
			everything.current.rotation[props.rAxis] / Math.PI * 2
		); //Help with rounding to the nearest 90 degree
		const initialAngle = ninetyDegreeRotationCount * Math.PI / 2;

		if (step === "0_DEFAULT") {
			// setIsRotating(true);
			setStep("1_CLICKED");
			setFinalAngle(initialAngle + props.rDisplacement ); //Set the final angle when the user clicks the box
			// setFinalAxis(props.rAxis); //TODO: implement me
		}
		else {
			alert("Before clicking again, wait until the current rotation has finished for this cube!");
		}
	}

	// 1. Move object to the pivot point
	// 1.1 Local - Subtract the pivot point from the object's original position
	useEffect(() => {
		if (step === "1_CLICKED") {
			switch(props.corner) {
				case "NorthEast": //(x+1, y+1)
					everything.current.translateX(side/2);
					everything.current.translateY(side/2);
					forPivot.current.translateX(-side/2);
					forPivot.current.translateY(-side/2);
					break;
				case "SouthEast": //(x+1, y-1)
					everything.current.translateX(side/2);
					everything.current.translateY(-side/2);
					forPivot.current.translateX(-side/2);
					forPivot.current.translateY(+side/2);
					break;
				case "SouthWest": //(x-1, y-1)
					everything.current.translateX(-side/2);
					everything.current.translateY(-side/2);
					forPivot.current.translateX(side/2);
					forPivot.current.translateY(side/2);
					break;
				case "NorthWest": //(x-1, y+1)
					everything.current.translateX(-side/2);
					everything.current.translateY(side/2);
					forPivot.current.translateX(side/2);
					forPivot.current.translateY(-side/2);
					break;
				default:
					everything.current.translateX(side/2);
					everything.current.translateY(side/2);
					forPivot.current.translateX(-side/2);
					forPivot.current.translateY(-side/2);
			}
			setStep("2_ROTATING");
		}
	}, [step, props.corner])

	// 2. Apply the rotation
	useFrame(() => {
		if (step === "2_ROTATING") {
			// -- While Rotating --
			const increment = 0.02;
			if (props.rDisplacement > 0) {
				everything.current.rotation[props.rAxis] += increment;
			}
			else {
				everything.current.rotation[props.rAxis] -= increment;
			}

			// -- Done Rotating --
			const delta = 0.01; // threshold to consider for equality
			if (Math.abs(everything.current.rotation[props.rAxis] - finalAngle) < delta) {
				setIsRotating(false);
				setGlobalPosition(new Vector3(globalPosition.x+1, globalPosition.y+1, globalPosition.z));
				setStep("3_END");
			}
		}
    })
	
	// After a rotation finishes, set the new permanent location of the cube	
	// 3. Add the pivot point back to the object's position
	// 3.1 Move the object back by the pivot 
	useEffect(() => {
		if (step === "3_END") {
			everything.current.position.x = globalPosition.x;
			everything.current.position.y = globalPosition.y;
			everything.current.position.z = globalPosition.z;
	
			forPivot.current.position.x = 0;
			forPivot.current.position.y = 0;
			forPivot.current.position.z = 0;

			setStep("0_DEFAULT");
		}
	}, [step]) 




	const [hovered, setHover] = useState(false);

	return (
		<group
			ref={everything}	
			onClick={handleClick}
			onPointerOver={(event) => setHover(true)}
			onPointerOut={(event) => setHover(false)}
			// position={props.initialPosition}
		>
			<group ref={forPivot}>
				<mesh>
					<boxGeometry args={[side, side, side]} />
					<meshPhongMaterial color={props.color} opacity={hovered ? 0.2 : 0.6} transparent={true} side={DoubleSide}/>
				</mesh>
				<Numbering
					letterOffset={0.1}
					side={side}
				/>
			</group>
		</group>
	)
}

export default Cube;
