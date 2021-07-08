import React, { Suspense } from 'react';

import { Color } from "@react-three/fiber";

import STLHelper from "./STLhelper";
import { sideLength } from "../helpers/constants";

const Box = (props: {
    id: number,
    color: Color,
}) => {
	return (
        <Suspense 
            fallback={<FallbackBox/>}
            key={props.id}
        >
            <group
            >
                <STLHelper
                    side={sideLength}
                    color={props.color}
                    filepath={"stl-assets/assem-Simul-coils.STL"}
                />
                <STLHelper
                    side={sideLength}
                    color={"#000000"} // Color of the corners. Change this to a prop if you want greater customization over this color
                    filepath={"stl-assets/assem-Simul-corners.STL"}
                />
            </group>
        </Suspense>
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


export default Box;
