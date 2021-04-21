import React, { useRef, useState } from 'react';

import { MeshProps, useFrame } from "@react-three/fiber";

export default (props: MeshProps) => {
    const [hovered, setHover] = useState(false)
	const [active, setActive] = useState(false)

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
			scale={active ? 1.5 : 1}
			onClick={(event) => setActive(!active)}
			onPointerOver={(event) => setHover(true)}
			onPointerOut={(event) => setHover(false)}
		>
			<boxGeometry args={[1, 2, 3]} />
			<meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
		</mesh>
	)
}
