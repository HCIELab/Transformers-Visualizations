import React, { useRef, useState } from 'react';

import { MeshProps, useFrame } from "@react-three/fiber";
import { DoubleSide } from 'three';

const Box = (props: MeshProps) => {
    const [hovered, setHover] = useState(false);

    // This reference will give us direct access to the mesh
	const mesh = useRef<THREE.Mesh>(null!)

	// Rotate mesh every frame, this is outside of React without overhead
	useFrame(() => {
        mesh.current.rotation.x += 0.01
    })
	
	return (
		<mesh
			{...props}
			ref={mesh}
			// onClick={(event) => console.log("click registered!")}
			onPointerOver={(event) => setHover(true)}
			onPointerOut={(event) => setHover(false)}
		>
			<boxGeometry args={[1, 1, 1]} />
			<meshPhongMaterial color={'blue'} opacity={hovered ? 0.5 : 1} transparent={true} side={DoubleSide}/>
		</mesh>
	)
}

export default Box;
