import React, { useEffect, useRef, useState } from 'react';

import "@react-three/fiber";
import { DoubleSide, Euler } from 'three';
import { Color } from "@react-three/fiber";

import { STLLoader } from "three/examples/jsm/loaders/STLLoader";

const Model = (props: {
    side: number,
    color: Color,
}) => {
    const meshRef = useRef<THREE.Mesh>(null!);
    const [hovered, setHover] = useState(false);


    const [obj, setObj] = useState<any>(null);
    // const filepath = "TFmodel-fake.stl";
    const filepath = "stl-assets/assem-Simul-coils.STL";
    useEffect(() => {
        new STLLoader().load(filepath, setObj)
    }, [filepath])

    useEffect(() => {
        if (obj) {
            meshRef.current.geometry.center()
        }
    }, [obj])

    return (
        <mesh 
            ref={meshRef}
            onPointerOver={() => setHover(true)} 
            onPointerOut={() => {setHover(false)}} 
            scale={0.015}
        >
            {obj ?
                <primitive object={obj} attach="geometry" />
                :
                <boxGeometry args={[props.side, props.side, props.side]} />
            }
            <meshStandardMaterial color={props.color} opacity={hovered ? 0.3 : 0.7} transparent={true} side={DoubleSide}/>
            {/* TODO: Note if using meshNormalMaterial, then the color prop is not useful */}
        </mesh>    
    )
}



export default Model;
