import React, { useEffect, useRef, useState } from 'react';

import "@react-three/fiber";
import { DoubleSide } from 'three';
import { Color } from "@react-three/fiber";

import { STLLoader } from "three/examples/jsm/loaders/STLLoader";

const Model = (props: {
    side: number,
    color: Color,
}) => {
    // STL File One
    const [objOne, setObjOne] = useState<any>(null);
    const filepathOne = "stl-assets/assem-Simul-coils.STL";
    useEffect(() => {
        new STLLoader().load(filepathOne, setObjOne)
    }, [filepathOne])

    // STL File Two
    const [objTwo, setObjTwo] = useState<any>(null);
    const filepathTwo = "stl-assets/assem-Simul-corners.STL";
    useEffect(() => {
        new STLLoader().load(filepathTwo, setObjTwo)
    }, [filepathTwo])


    const meshRefOne = useRef<THREE.Mesh>(null!);
    useEffect(() => {
        if (objOne) {
            meshRefOne.current.geometry.center()
        }
    }, [objOne])
    const meshRefTwo = useRef<THREE.Mesh>(null!);
    useEffect(() => {
        if (objTwo) {
            meshRefTwo.current.geometry.center()
        }
    }, [objTwo])

    const [hovered, setHover] = useState(false);


    return (
        <group
            scale={0.015}
            onPointerOver={() => setHover(true)} 
            onPointerOut={() => {setHover(false)}} 
        >
            <mesh ref={meshRefOne}>
                {objOne ?
                    <primitive object={objOne} attach="geometry" /> :
                    <boxGeometry args={[props.side, props.side, props.side]} />
                }
                <meshStandardMaterial color={props.color} opacity={hovered ? 0.3 : 0.7} transparent={true} side={DoubleSide}/>
            </mesh>    
            <mesh ref={meshRefTwo}>
                {objTwo ?
                    <primitive object={objTwo} attach="geometry" /> :
                    <boxGeometry args={[props.side, props.side, props.side]} />
                }
                <meshStandardMaterial color={"#5f0020"} opacity={hovered ? 0.3 : 0.7} transparent={true} side={DoubleSide}/>
            </mesh>    
        </group>
    )
}



export default Model;
