import React, { useState } from 'react';

import "@react-three/fiber";
import { Color } from "@react-three/fiber";
import STLHelper from "./STLhelper";

const Model = (props: {
    side: number,
    color: Color,
}) => {
    const [hovered, setHover] = useState(false);

    return (
        <group
            onPointerOver={() => setHover(true)} 
            onPointerOut={() => {setHover(false)}} 
        >
            {/* Hollow with Coils */}
            <STLHelper
                side={props.side}
                color={props.color}
                filepath={"stl-assets/assem-Simul-coils.STL"}
                normalOpacity={0.7}
                hoverOpacity={0.3}
            />
            {/* Corners */}
            <STLHelper
                side={props.side}
                color={"#000000"} // Color of the corners. Change this to a prop if you want greater customization over this color
                filepath={"stl-assets/assem-Simul-corners.STL"}
                normalOpacity={0.7}
                hoverOpacity={0.3}
            />
            {/* Alternative: Basic Solid Cube */}
            <mesh>
                <boxGeometry args={[props.side, props.side, props.side]} />
                <meshStandardMaterial color={"#ffffff"} transparent={true} opacity={hovered ? 0.3 : 0.9} />
            </mesh>
        </group>
    )
}



export default Model;
