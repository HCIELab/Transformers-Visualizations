import React from 'react';

import "@react-three/fiber";
import { Color } from "@react-three/fiber";
import STLHelper from "./STLhelper";

const Model = (props: {
    side: number,
    color: Color,
}) => {
    return (
        <group>
            <STLHelper
                side={props.side}
                color={props.color}
                filepath={"stl-assets/assem-Simul-coils.STL"}
            />
            <STLHelper
                side={props.side}
                color={"#000000"} // Color of the corners. Change this to a prop if you want greater customization over this color
                filepath={"stl-assets/assem-Simul-corners.STL"}
            />
        </group>
    )
}



export default Model;
