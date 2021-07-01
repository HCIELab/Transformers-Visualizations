import React, { useState } from 'react';

import "@react-three/fiber";
import { DoubleSide } from 'three';
import { Color } from "@react-three/fiber";




const Model = (props: {
    side: number,
    color: Color,
}) => {
    
    const [hovered, setHover] = useState(false);
	
    return (
        <mesh onPointerOver={() => setHover(true)} onPointerOut={() => {setHover(false)}}>
            <boxGeometry args={[props.side, props.side, props.side]} />
            <meshPhongMaterial color={props.color} opacity={hovered ? 0.2 : 0.6} transparent={true} side={DoubleSide}/>
        </mesh>
    )
}

export default Model;
