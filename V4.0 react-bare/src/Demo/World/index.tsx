import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from "@react-three/drei";
import { Euler } from 'three';
import { ResizeObserver } from '@juggle/resize-observer';
import Figures from "./Figures/index";


const World = (props: {
}) => {
    console.log("(World.tsx) Rendering the World component");
    
    return (
        <Canvas resize={{ polyfill: ResizeObserver }} >
            {/* Lights */}
            <ambientLight />
            <pointLight position={[10, 10, 10]} />

            {/* Orbit Controls */}
            <OrbitControls/>
            
            {/* Visual Helpers */}
            <axesHelper position={[-0.5, -0.5, 0]} scale={2}/>
            <gridHelper rotation={new Euler(Math.PI/2, 0, 0)} position={[0.5, 0.5, -0.5]}/>


            {/* ------- FIGURES -------- */}
            <Figures/>

        </Canvas>
    )
}


export default World;