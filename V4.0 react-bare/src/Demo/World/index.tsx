import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from "@react-three/drei";
import { Euler, Vector3 } from 'three';
import { ResizeObserver } from '@juggle/resize-observer';

import { initialCubeConfigType } from '../Util/Types/types';

import Box from "./Box";

const World = (props: {
}) => {
    console.log("(World.tsx) Rendering the World component");

    const initialCubeConfigs: initialCubeConfigType[] = [
        {
            id: 1,
            initialPosition: new Vector3(0, 0, 0),
            color: "#ffffff",
        }
    ]
    
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
            
            {/* Cubes */}
            {
                initialCubeConfigs.map((config) => 
                    <Suspense 
                        fallback={<FallbackBox/>}
                        key={config.id}
                    >
                        <Box
                            id={config.id}
                            initialPosition={config.initialPosition}
                            color={config.color}
                        />
                    </Suspense>        
                )
            }
        </Canvas>
    )
}


const FallbackBox = () => {
    return (
        <mesh>
            <boxGeometry/>
            <meshStandardMaterial color={"gray"}/>
        </mesh>
    ) 
}



export default World;