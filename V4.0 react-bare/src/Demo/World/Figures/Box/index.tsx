import React, { Suspense } from 'react';

import { Color } from "@react-three/fiber";

import STLHelper from "./STLhelper";
import { Vector3 } from 'three';
import { sideLength } from "../helpers/constants";

const Box = React.forwardRef<THREE.Group, {
    id: number,
    color: Color,
    position: Vector3,
}>( (props, ref) => {
	return (
        <Suspense 
            fallback={<FallbackBox/>}
            key={props.id}
        >

            <group
                ref={ref}
                position={props.position}
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
})



const FallbackBox = () => {
    return (
        <mesh>
            <boxGeometry/>
            <meshStandardMaterial color={"gray"}/>
        </mesh>
    ) 
}


export default Box;
