import React, { useEffect, useRef, useState } from 'react';

import "@react-three/fiber";
import { DoubleSide } from 'three';
import { Color } from "@react-three/fiber";

import { STLLoader } from "three/examples/jsm/loaders/STLLoader";

const STLHelper = (props: {
    side: number,
    color: Color,
    filepath: string,
}) => {
    // Load STL File
    const [obj, setObj] = useState<any>(null);
    useEffect(() => {
        new STLLoader().load(props.filepath, setObj)
    }, [props.filepath])

    // Center the mesh
    const meshRefOne = useRef<THREE.Mesh>(null!);
    useEffect(() => {
        if (obj) {
            meshRefOne.current.geometry.center()
        }
    }, [obj])


    const [hovered, setHover] = useState(false);

    return (
        <group
            scale={0.015}
            onPointerOver={() => setHover(true)} 
            onPointerOut={() => {setHover(false)}} 
        >
            <mesh ref={meshRefOne}>
                {obj ?
                    <primitive object={obj} attach="geometry" /> :
                    <boxGeometry args={[props.side, props.side, props.side]} />
                }
                <meshStandardMaterial 
                    color={props.color} 
                    opacity={hovered ? 0.3 : 0.7} 
                    transparent={true} 
                    side={DoubleSide}
                />
            </mesh>    
        </group>
    )
}



export default STLHelper;
