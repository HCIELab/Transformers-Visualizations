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
	const edgeMarkerOne = useRef<THREE.BoxGeometry>(null!);
	const edgeMarkerTwo = useRef<THREE.BoxGeometry>(null!);

	useEffect(() => {
		edgeMarkerOne.current.translate(.5, .5, 0);
		edgeMarkerTwo.current.translate(.5, -.5, 0);
	}, [])


	// Rotate every frame, this is outside of React without overhead
	useFrame(() => {
        group.current.rotation.x += 0.01;
    })


	const font = new FontLoader().parse(Roboto);
	const textOptions = {
		font,
		size: 0.2,
		height: 0.02,
	};
	const textMesh = (
		<mesh>
			<textGeometry args={["sometext", textOptions]} />
		</mesh>
	)
	
	return (
		<group
			ref={group}	
			// onClick={(event) => console.log("click registered!")}
			onPointerOver={(event) => setHover(true)}
			onPointerOut={(event) => setHover(false)}
			position={props.position}
		>
			<mesh>
				<boxGeometry args={[1, 1, 1]} />
				<meshPhongMaterial color={props.color} opacity={hovered ? 0.5 : 1} transparent={true} side={DoubleSide}/>
			</mesh>
			<mesh>
				<boxGeometry ref={edgeMarkerOne} args={[0.2, 0.2, 0.2]}/>
				<meshPhongMaterial color={props.color} />
			</mesh>
			<mesh>
				<boxGeometry ref={edgeMarkerTwo} args={[0.2, 0.2, 0.2]}/>
				<meshPhongMaterial color={props.color} />
			</mesh>
			{textMesh}
		</group>
	)
}

export default Cube;
