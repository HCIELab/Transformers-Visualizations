import React, { useEffect, useRef, useState } from 'react';

import { Color, useFrame, Vector3 } from "@react-three/fiber";
import { DoubleSide } from 'three';
import Numbering from "./numbering";

const Cube = (props: {
	id: number,
	position: Vector3,
	color: Color,
	rDisplacement: number,
	rAxis: "x" | "y" | "z",
}) => {
    const [hovered, setHover] = useState(false);
	
    // This reference will give us direct access to the mesh
	const group = useRef<THREE.Group>(null!);
	const side = 1;
	
	const [isRotating, setIsRotating] = useState(false);
	const [finalPosition, setFinalPosition] = useState(0);
	useFrame(() => {
		if (isRotating) {
	        group.current.rotation[props.rAxis] += props.rDisplacement > 0 ? 0.01 : -0.01;
			const delta = 0.01; //Threshold to consider for equality
			if (Math.abs(group.current.rotation[props.rAxis] - finalPosition) < delta) {
				setIsRotating(false);
			}
		}
    })

	const handleClick = () => {
		const ninetyDegreeRotationCount = Math.round(group.current.rotation[props.rAxis] / Math.PI * 2);
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
		forPivot.current.translateX(side/2);
		forPivot.current.translateY(-side/2);
	}, [])

	return (
		<group
			ref={group}	
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
