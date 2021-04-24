import React, { useEffect, useRef, useState } from 'react';

import { Color, useFrame, Vector3 } from "@react-three/fiber";
import { DoubleSide, FontLoader } from 'three';
import Roboto from "./Roboto_Regular.json";

const Cube = (props: {
	position: Vector3,
	color: Color,
}) => {
    const [hovered, setHover] = useState(false);

    // This reference will give us direct access to the mesh
	const group = useRef<THREE.Group>(null!);


	// Rotate every frame, this is outside of React without overhead
	useFrame(() => {
        // group.current.rotation.x += 0.01;
    })


	// Deal with the edge Numbering (using fonts)
	const font = new FontLoader().parse(Roboto);
	const textOptions = {
		font,
		size: 0.1,
		height: 0.02,
	};
	const letterOffset = 0.1;
	const side = 1;
	const half = side/2;
	const textMeshes = [
		<mesh position={[half-letterOffset, 0, half]}>
			<textGeometry args={["1", textOptions]} />
		</mesh>,
		<mesh position={[0, -half, half]}>
			<textGeometry args={["2", textOptions]} />
		</mesh>,
		<mesh position={[-half, 0, half]}>
			<textGeometry args={["3", textOptions]} />
		</mesh>,
		<mesh position={[0, half - letterOffset, half]}>
			<textGeometry args={["4", textOptions]} />
		</mesh>,
	]
	
	return (
		<group
			ref={group}	
			// onClick={(event) => console.log("click registered!")}
			onPointerOver={(event) => setHover(true)}
			onPointerOut={(event) => setHover(false)}
			position={props.position}
		>
			<mesh>
				<boxGeometry args={[side, side, side]}/>
				<meshPhongMaterial color={props.color} opacity={hovered ? 0.5 : 1} transparent={true} side={DoubleSide}/>
			</mesh>
			{textMeshes}
		</group>
	)
}

export default Cube;
