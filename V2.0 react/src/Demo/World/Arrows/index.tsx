import React from 'react';
import { Euler, Vector3 } from 'three';
import STLHelper from '../Cube/Model/STLhelper';

const Arrows = (props: {
}) => {
    console.log("(Arrow.tsx) Rendering component");

    return (
        <group position={new Vector3(-2, -1, 0)}>
            <axesHelper/>

            {/* Z axis Arrows */}
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

            {/* Y axis Arrows */}
            <group scale={0.3} position={new Vector3(0, 0.5, 0.222)} rotation={new Euler(Math.PI/2, 0, 0)}>
                <STLHelper
                    side={1}
                    color={"#24ff2f"}
                    filepath={"stl-assets/curved-arrow.stl"}
                />
            </group>
            <group scale={0.3} position={new Vector3(0, 0.5, -0.222)} rotation={new Euler(Math.PI/2, 0, Math.PI)}>
                <STLHelper
                    side={1}
                    color={"#24ff2f"}
                    filepath={"stl-assets/curved-arrow.stl"}
                />
            </group>

            {/* X axis Arrows */}
            <group scale={0.3} position={new Vector3(0.5, 0.222, 0)} rotation={new Euler(0, Math.PI/2, 0)} >
                <STLHelper
                    side={1}
                    color={"#ff640a"}
                    filepath={"stl-assets/curved-arrow.stl"}
                />
            </group>
            <group scale={0.3} position={new Vector3(0.5, -0.222, 0)} rotation={new Euler(0, Math.PI/2, Math.PI)}>
                <STLHelper
                    side={1}
                    color={"#ff640a"}
                    filepath={"stl-assets/curved-arrow.stl"}
                />
            </group>

        </group>
    )
}


export default Arrows;