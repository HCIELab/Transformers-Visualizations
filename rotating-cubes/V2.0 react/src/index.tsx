import React, { useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { Canvas, MeshProps, useFrame } from '@react-three/fiber'

const Box: React.FC<MeshProps> = (props) => {
	// This reference will give us direct access to the mesh
	const mesh = useRef<THREE.Mesh>(null!)
	// Set up state for the hovered and active state
	const [hovered, setHover] = useState(false)
	const [active, setActive] = useState(false)
	// Rotate mesh every frame, this is outside of React without overhead
	useFrame(() => (mesh.current.rotation.x += 0.01))
	
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
	
ReactDOM.render(
	<React.StrictMode>
	<Canvas>
	<ambientLight />
	<pointLight position={[10, 10, 10]} />
	<Box position={[-1.2, 0, 0]} />
	<Box position={[1.2, 0, 0]} />
	</Canvas>
	</React.StrictMode>,
	document.getElementById('root'),
)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
