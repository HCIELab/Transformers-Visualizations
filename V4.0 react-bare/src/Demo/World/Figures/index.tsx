import React, { useEffect, useRef } from 'react';
import { Vector3 } from 'three';

import Box from "./Box";

const Figure1 = () => {
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



const Figure2 = () => {
    const ref = useRef<THREE.Group>(null!);
    // useEffect(() => {
    //     setTimeout(() => {
    //         ref.current.position.set(0, 1, 0);
    //     }, 1000)
    // }, [])
    
    return (
        <Box
            ref={ref}
            id={2}
            position={new Vector3(0, 1, 0)}
            color={"#ffffff"}
        />
    )
}




const Figure3 = () => {
    const ref = useRef<THREE.Group>(null!);
    
    return (
        <Box
            ref={ref}
            id={3}
            position={new Vector3(1, 0, 0)}
            color={"#00f535"}
        />
    )
}




const Figure4 = () => {
    const ref = useRef<THREE.Group>(null!);
    
    return (
        <Box
            ref={ref}
            id={4}
            position={new Vector3(1, 1, 0)}
            color={"#00f535"}
        />
    )
}




const Figures = (props: {}) => {
    return (
        <>
            <Figure1/>
            <Figure2/>
            <Figure3/>
            <Figure4/>
        </>
    )
}

export default Figures;