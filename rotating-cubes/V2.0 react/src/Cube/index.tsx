import React, { useRef, useState } from 'react';

import { Color, useFrame, Vector3 } from "@react-three/fiber";
import { DoubleSide } from 'three';
import Numbering from "./numbering";

const Cube = (props: {
	position: Vector3,
	color: Color,
}) => {
    const [hovered, setHover] = useState(false);

    // This reference will give us direct access to the mesh
	const group = useRef<THREE.Group>(null!);
	const side = 1;

	// Rotate every frame, this is outside of React without overhead
	useFrame(() => {
        // group.current.rotation.x += 0.01;
    })

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
				<meshPhongMaterial color={props.color} opacity={hovered ? 0.2 : 0.6} transparent={true} side={DoubleSide}/>
			</mesh>
			<Numbering
				letterOffset={0.1}
				side={side}
			/>
		</group>
	)
}

export default Cube;
