import React, { useState } from 'react';

import "@react-three/fiber";
import { Color } from "@react-three/fiber";
import STLHelper from "./STLhelper";

const Model = (props: {
    side: number,
    color: Color,
    displayCubeBox: boolean,
    displayCoilsAndCorners: boolean,
    displayGrayCubeBox: boolean,
}) => {
    const [hovered, setHover] = useState(false);

    return (
        <group
            onPointerOver={() => setHover(true)} 
            onPointerOut={() => {setHover(false)}} 
        >
            <group visible={props.displayCoilsAndCorners}>
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
            </group>

            {/* Basic Solid White Cube */}
            <group visible={props.displayCubeBox}>
                <mesh>
                    <boxGeometry args={[props.side, props.side, props.side]} />
                    <meshStandardMaterial color={"#ffffff"} transparent={true} opacity={hovered ? 0.3 : 0.9} />
                </mesh>
            </group>
            {/* Basic Solid Blue Cube */}
            <group visible={props.displayGrayCubeBox}>
                <mesh>
                    <boxGeometry args={[props.side, props.side, props.side]} />
                    <meshStandardMaterial color={"#868686"} transparent={true} opacity={hovered ? 0.2 : 0.5} />
                </mesh>
            </group>
        </group>
    )
}



export default Model;
