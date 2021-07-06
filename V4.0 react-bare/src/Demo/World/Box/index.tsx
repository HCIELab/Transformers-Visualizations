import React from 'react';

import { Color } from "@react-three/fiber";
import { Vector3 } from 'three';

import STLHelper from "./STLhelper";

const Cube = (props: {
	id: number,
	initialPosition: Vector3,
	color: Color,
}) => {
	const side = 1;


	///////////////////////////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////////////////
	///////////////////////////////--- RETURN AND RENDER ---/////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////////////////

	return (
		<group>
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
	)
}



export default Cube;
