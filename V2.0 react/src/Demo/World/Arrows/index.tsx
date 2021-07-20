import React from 'react';
import { Euler, Vector3 } from 'three';
import STLHelper from '../Cube/Model/STLhelper';

const Arrows = (props: {
}) => {
    console.log("(Arrow.tsx) Rendering component");

    return (
        <group position={new Vector3(-2, -1, 0)}>
            <axesHelper/>
            <group scale={0.3} position={new Vector3(0, 0.222, 0.5)}>
                <STLHelper
                    side={1}
                    color={"#2483ff"}
                    filepath={"stl-assets/curved-arrow.stl"}
                />
            </group>
            <group scale={0.3} position={new Vector3(0, -0.222, 0.5)} rotation={new Euler(0, 0, Math.PI)}>
                <STLHelper
                    side={1}
                    color={"#2483ff"}
                    filepath={"stl-assets/curved-arrow.stl"}
                />
            </group>
        </group>
    )
}


export default Arrows;