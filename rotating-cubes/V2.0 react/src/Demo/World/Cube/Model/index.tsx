import React, { Suspense, useEffect, useRef, useState } from 'react';

import "@react-three/fiber";
import { DoubleSide, Vector3 } from 'three';
import { Color, useLoader } from "@react-three/fiber";

import { STLLoader } from "three/examples/jsm/loaders/STLLoader";

const Model = (props: {
    side: number,
    color: Color,
}) => {
    
    const obj = useLoader(STLLoader, "cube.stl");
    
	const meshRef = useRef<THREE.Mesh>(null!);
    const [hovered, setHover] = useState(false);

    useEffect(() => {
        meshRef.current.geometry.center()
    }, [])

    return (
        <mesh 
            ref={meshRef}
            onPointerOver={() => setHover(true)} 
            onPointerOut={() => {setHover(false)}} 
            scale={0.05}
        >
            <Suspense
                fallback={<boxGeometry args={[props.side, props.side, props.side]} />}
            >
                <primitive object={obj} attach="geometry" />
            </Suspense>
            <meshNormalMaterial color={props.color} opacity={hovered ? 0.2 : 0.6} transparent={true} side={DoubleSide}/>
            {/* TODO: Note if using meshNormalMaterial, then the color prop is not useful */}
        </mesh>    
    )
}



export default Model;
