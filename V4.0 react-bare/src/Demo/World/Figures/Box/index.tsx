import React, { Suspense } from 'react';

import { Color } from "@react-three/fiber";

import STLHelper from "./STLhelper";
import { Vector3 } from 'three';

const Box = React.forwardRef<THREE.Group, {
    id: number,
    color: Color,
    position: Vector3,
}>( (props, ref) => {
	const side = 1;

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
                    side={side}
                    color={props.color}
                    filepath={"stl-assets/assem-Simul-coils.STL"}
                />
                <STLHelper
                    side={side}
                    color={"#007e9e"} // Color of the corners. Change this to a prop if you want greater customization over this color
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
