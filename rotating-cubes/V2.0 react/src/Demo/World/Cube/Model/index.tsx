import React, { useState, Suspense } from 'react';

import "@react-three/fiber";
import { DoubleSide } from 'three';
import { Color, useLoader } from "@react-three/fiber";

import { STLLoader } from "three/examples/jsm/loaders/STLLoader";

const Model = (props: {
    side: number,
    color: Color,
}) => {
    
    const [hovered, setHover] = useState(false);
	
    const obj = useLoader(STLLoader, "cube.stl");
      
    return (
            <mesh onPointerOver={() => setHover(true)} onPointerOut={() => {setHover(false)}}>
                {/* <boxGeometry args={[props.side, props.side, props.side]} /> */}
                <primitive object={obj} attach="geometry" />
                <meshPhongMaterial color={props.color} opacity={hovered ? 0.2 : 0.6} transparent={true} side={DoubleSide}/>
            </mesh>    
    )
}



export default Model;
