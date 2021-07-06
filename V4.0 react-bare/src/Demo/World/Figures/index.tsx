import React, { Suspense } from 'react';
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
    
    return (
        <Suspense 
            fallback={<FallbackBox/>}
            key={initialConfig.id}
        >
            <Box
                id={initialConfig.id}
                initialPosition={initialConfig.initialPosition}
                color={initialConfig.color}
            />
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
    
    return (
        <Suspense 
            fallback={<FallbackBox/>}
            key={initialConfig.id}
        >
            <Box
                id={initialConfig.id}
                initialPosition={initialConfig.initialPosition}
                color={initialConfig.color}
            />
        </Suspense>        
    )
}




