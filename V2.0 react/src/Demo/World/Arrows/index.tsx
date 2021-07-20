import React from 'react';
import { Euler, Vector3 } from 'three';
import { axisType } from '../../Util/Types/types';
import STLHelper from '../Cube/Model/STLhelper';

const Arrows = (props: {
}) => {
    console.log("(Arrow.tsx) Rendering component");
    
    const arrowClick = (axis: axisType, isCounterclockwise: boolean) => {
        console.log("arrowclick clicked!");
        console.log(`${axis}, ${isCounterclockwise}`)
    }

    return (
        <group position={new Vector3(-2, -1, 0)}>
            <axesHelper/>

            {/* Z axis Arrows */}
            <group onClick={() => arrowClick('z', true)} scale={0.3} position={new Vector3(0, 0.222, 0.5)} rotation={new Euler(0, Math.PI, 0)}>
                <STLHelper
                    side={1}
                    color={"#2483ff"}
                    filepath={"stl-assets/curved-arrow.stl"}
                />
            </group>
            <group onClick={() => arrowClick('z', false)} scale={0.3} position={new Vector3(0, -0.222, 0.5)} rotation={new Euler(0, 0, Math.PI)}>
                <STLHelper
                    side={1}
                    color={"#2483ff"}
                    filepath={"stl-assets/curved-arrow.stl"}
                />
            </group>

            {/* Y axis Arrows */}
            <group onClick={() => arrowClick('y', true)} scale={0.3} position={new Vector3(0, 0.5, -0.222)} rotation={new Euler(Math.PI/2, 0, Math.PI)}>
                <STLHelper
                    side={1}
                    color={"#24ff2f"}
                    filepath={"stl-assets/curved-arrow.stl"}
                />
            </group>
            <group onClick={() => arrowClick('y', false)} scale={0.3} position={new Vector3(0, 0.5, 0.222)} rotation={new Euler(Math.PI/2, Math.PI, 0)}>
                <STLHelper
                    side={1}
                    color={"#24ff2f"}
                    filepath={"stl-assets/curved-arrow.stl"}
                />
            </group>

            {/* X axis Arrows */}
            <group onClick={() => arrowClick('x', true)} scale={0.3} position={new Vector3(0.5, 0.222, 0)} rotation={new Euler(0, -Math.PI/2, 0)} >
                <STLHelper
                    side={1}
                    color={"#ff640a"}
                    filepath={"stl-assets/curved-arrow.stl"}
                />
            </group>
            <group onClick={() => arrowClick('x', false)} scale={0.3} position={new Vector3(0.5, -0.222, 0)} rotation={new Euler(0, Math.PI/2, Math.PI)}>
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