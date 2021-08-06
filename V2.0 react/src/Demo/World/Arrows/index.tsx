import React from 'react';
import { Euler, Vector3 } from 'three';
import { axisType } from '../../Util/Types/types';
import STLHelper from '../Cube/Model/STLhelper';

const Arrows = (props: {
    axisOfRotationWorld: axisType,
    setAxisOfRotationWorld: Function,
    isCounterclockwise: boolean,
    setIsCounterclockwise: Function,
    display3DArrows: boolean,
}) => {
    console.log("(Arrow.tsx) Rendering component");
    
    const arrowClick = (axis: axisType, isCounterclockwise: boolean) => {
        // console.log("arrowclick clicked!");
        // console.log(`${axis}, ${isCounterclockwise}`)
        props.setAxisOfRotationWorld(axis);
        props.setIsCounterclockwise(isCounterclockwise);
    }

    const getScale = (axis: axisType, isCounterclockwise: boolean) => {
        if (axis === props.axisOfRotationWorld && isCounterclockwise === props.isCounterclockwise) {
            return 0.4;
        } else {
            return 0.25;
        }
    }

    return (
        <group position={new Vector3(-2, -1, 0)} visible={props.display3DArrows}>
            <axesHelper/>

            {/* Z axis Arrows */}
            <group onClick={() => arrowClick('z',true)} scale={getScale('z',true)} position={new Vector3(0, 0.222, 0.5)} rotation={new Euler(0, Math.PI, 0)}>
                <STLHelper
                    side={1}
                    color={"#2483ff"}
                    filepath={"stl-assets/curved-arrow.stl"}
                    normalOpacity={0.7}
                    hoverOpacity={0.3}
                />
            </group>
            <group onClick={() => arrowClick('z',false)} scale={getScale('z',false)} position={new Vector3(0, -0.222, 0.5)} rotation={new Euler(0, 0, Math.PI)}>
                <STLHelper
                    side={1}
                    color={"#2483ff"}
                    filepath={"stl-assets/curved-arrow.stl"}
                    normalOpacity={0.7}
                    hoverOpacity={0.3}
                />
            </group>

            {/* Y axis Arrows */}
            <group onClick={() => arrowClick('y',true)} scale={getScale('y',true)} position={new Vector3(0, 0.5, -0.222)} rotation={new Euler(Math.PI/2, 0, Math.PI)}>
                <STLHelper
                    side={1}
                    color={"#24ff2f"}
                    filepath={"stl-assets/curved-arrow.stl"}
                    normalOpacity={0.7}
                    hoverOpacity={0.3}
                />
            </group>
            <group onClick={() => arrowClick('y',false)} scale={getScale('y',false)} position={new Vector3(0, 0.5, 0.222)} rotation={new Euler(Math.PI/2, Math.PI, 0)}>
                <STLHelper
                    side={1}
                    color={"#24ff2f"}
                    filepath={"stl-assets/curved-arrow.stl"}
                    normalOpacity={0.7}
                    hoverOpacity={0.3}
                />
            </group>

            {/* X axis Arrows */}
            <group onClick={() => arrowClick('x',true)} scale={getScale('x',true)} position={new Vector3(0.5, 0.222, 0)} rotation={new Euler(0, -Math.PI/2, 0)} >
                <STLHelper
                    side={1}
                    color={"#ff640a"}
                    filepath={"stl-assets/curved-arrow.stl"}
                    normalOpacity={0.7}
                    hoverOpacity={0.3}
                />
            </group>
            <group onClick={() => arrowClick('x',false)} scale={getScale('x',false)} position={new Vector3(0.5, -0.222, 0)} rotation={new Euler(0, Math.PI/2, Math.PI)}>
                <STLHelper
                    side={1}
                    color={"#ff640a"}
                    filepath={"stl-assets/curved-arrow.stl"}
                    normalOpacity={0.7}
                    hoverOpacity={0.3}
                />
            </group>

        </group>
    )
}


export default Arrows;