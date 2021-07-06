import React, { Suspense, useEffect, useRef } from 'react';
import { Vector3 } from 'three';

import { initialCubeConfigType } from '../../Util/Types/types';

import Box from "./Box";

const FallbackBox = () => {
    return (
        <mesh>
            <boxGeometry/>
            <meshStandardMaterial color={"gray"}/>
        </mesh>
    ) 
}





export const Figure1 = (props: {
}) => {

    const initialConfig : initialCubeConfigType = {
        id: 1,
        initialPosition: new Vector3(0, 0, 0),
        color: "#ffffff",
    }
    
    const ref = useRef<THREE.Group>(null!);

    return (
        <Suspense 
            fallback={<FallbackBox/>}
            key={initialConfig.id}
        >
            <group
                position={initialConfig.initialPosition}
                ref={ref}
            >
                <Box
                    color={initialConfig.color}
                />
            </group>
        </Suspense>        
    )
}



export const Figure2 = (props: {
}) => {
    const initialConfig : initialCubeConfigType = {
        id: 1,
        initialPosition: new Vector3(1, 0, 0),
        color: "#00f535",
    }

    const ref = useRef<THREE.Group>(null!);

    useEffect(() => {
        setTimeout(() => {
            ref.current.position.set(0, 1, 0);
        }, 1000)
    }, [])
    
    return (
        <Suspense 
            fallback={<FallbackBox/>}
            key={initialConfig.id}
        >
            <group
                position={initialConfig.initialPosition}
                ref={ref}
            >
                <Box
                    color={initialConfig.color}
                />
            </group>
        </Suspense>        
    )
}




