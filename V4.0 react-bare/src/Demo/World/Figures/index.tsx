import React, { useEffect, useRef } from 'react';
import { Vector3 } from 'three';

import Box from "./Box";

export const Figure1 = (props: {
}) => {
    const ref = useRef<THREE.Group>(null!);

    return (
        <Box
            ref={ref}
            id={1}
            position={new Vector3(0, 0, 0)}
            color={"#ffffff"}
        />
    )
}



export const Figure2 = (props: {
}) => {
    const ref = useRef<THREE.Group>(null!);
    useEffect(() => {
        setTimeout(() => {
            ref.current.position.set(0, 1, 0);
        }, 1000)
    }, [])
    
    return (
        <Box
            ref={ref}
            id={2}
            position={new Vector3(1, 0, 0)}
            color={"#00f535"}
        />
    )
}




