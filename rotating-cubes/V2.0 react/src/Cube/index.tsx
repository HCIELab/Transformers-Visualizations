import React, { useEffect, useRef, useState } from 'react';

import { Color, useFrame } from "@react-three/fiber";
import { DoubleSide, Vector3 } from 'three';
import Numbering from "./numbering";
import { axisType, cornerType } from '../Types/types';
import { group } from 'node:console';

const Cube = (props: {
	id: number,
	position: Vector3,
	color: Color,
	rDisplacement: number,
	rAxis: axisType,
	corner: cornerType,
}) => {
    const [hovered, setHover] = useState(false);
	
    // This reference will give us direct access to the mesh
	const everything = useRef<THREE.Group>(null!);
	const side = 1;
	
	const [isRotating, setIsRotating] = useState(false);
	const [finalPosition, setFinalPosition] = useState(0);
	useFrame(() => {
		if (isRotating) {
	        everything.current.rotation[props.rAxis] += props.rDisplacement > 0 ? 0.01 : -0.01;
			const delta = 0.01; //Threshold to consider for equality
			if (Math.abs(everything.current.rotation[props.rAxis] - finalPosition) < delta) {
				setIsRotating(false);
			}
		}
    })

	const handleClick = () => {
		const ninetyDegreeRotationCount = Math.round(everything.current.rotation[props.rAxis] / Math.PI * 2);
		// console.log(ninetyDegreeRotationCount);
		const initialPosition = ninetyDegreeRotationCount * Math.PI / 2;
		if (!isRotating) {
			setIsRotating(true);
			setFinalPosition(initialPosition + props.rDisplacement );
		}
		else {
			alert("Before clicking again, wait until the current rotation has finished for this cube!");
		}
	}

	const forPivot = useRef<THREE.Group>(null!);
	useEffect(() => {
		forPivot.current.position.x = 0;
		forPivot.current.position.y = 0;
		forPivot.current.position.z = 0;
		switch(props.corner) {
			case "NorthEast":
				forPivot.current.translateX(-side/2);
				forPivot.current.translateY(-side/2);
				everything.current.translateX(side/2);
				everything.current.translateY(side/2);
				break;
			case "SouthEast":
				forPivot.current.translateX(side/2);
				forPivot.current.translateY(-side/2);
				break;
			case "SouthWest":
				forPivot.current.translateX(side/2);
				forPivot.current.translateY(side/2);
				break;
			case "NorthWest":
				forPivot.current.translateX(side/2);
				forPivot.current.translateY(-side/2);
				break;
			default:
				forPivot.current.translateX(side/2);
				forPivot.current.translateY(-side/2);
		}
	}, [props.corner]) // TODO vary this based on the pivot point

	return (
		<group
			ref={everything}	
			onClick={handleClick}
			onPointerOver={(event) => setHover(true)}
			onPointerOut={(event) => setHover(false)}
			position={props.position}
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
