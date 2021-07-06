import React from 'react';

import { Color, Vector3 } from "@react-three/fiber";
import { DoubleSide } from 'three';


const PathBlock = (props: {
	color: Color,
    placement: Vector3,
}) => {
	const side = 1;

	return (
        <mesh position={props.placement}>
            <boxGeometry args={[side, side, side]} />
            <meshPhongMaterial color={props.color} opacity={0.5} transparent={true} side={DoubleSide}/>
        </mesh>
	)
}



export default PathBlock;
