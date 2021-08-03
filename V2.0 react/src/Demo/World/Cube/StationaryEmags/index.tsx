import React from 'react';

import "@react-three/fiber";
import { Text } from "@react-three/drei";

import { rotateCylinderToAxis } from './rotateCylinderToAxis';
import { Vector3 } from 'three';
import { axisType, cornerType } from '../../../Util/Types/types';
import { getLocations180 } from "./locations180";
import { getLocations90 } from "./locations90";
import STLHelper from '../Model/STLhelper';



const StationaryEmags = (props: {
    cubePosition: Vector3,
    showEmags: boolean,
    side: number,
    cornerName: cornerType,
    // initialRotationAmount: Quaternion;
    axisOfRotationWorld: axisType,
    isCounterclockwise: boolean,
    rotationMagnitude: number,
}) => {
    // NOTE: The coordinates in this component are rendered in WORLD position

    const offset = 0.15;

    // console.log("(StationaryEmags.tsx) rotationMagnitude", props.rotationMagnitude)

    const getLocationsFunc = props.rotationMagnitude >= Math.PI ? getLocations180 : getLocations90;
    const {repulsionPosition, hingePosition, catchingPosition} = getLocationsFunc(props.side, offset, props.cornerName, props.isCounterclockwise, props.axisOfRotationWorld);

    // useEffect(() => {
    //     console.log("(StationaryEmags.tsx) something has changed *****")
    // }, [props.showEmags])

	return (
		<>	
            {props.showEmags &&
                <group position={props.cubePosition}>
                    {/* Repsulsion Cylinder */}
                    <mesh 
                        position={repulsionPosition}  
                        rotation={rotateCylinderToAxis(props.axisOfRotationWorld)}
                    >
                        <cylinderBufferGeometry args={[.15, .15, 0.8, 20]}/>
                        <meshPhongMaterial color={"#ff0000"} opacity={0.9}/>
                    </mesh>
                    {/* Hinge Cylinder */}
                    <group 
                        position={hingePosition}  
                        rotation={rotateCylinderToAxis(props.axisOfRotationWorld)}
                    >
                        <STLHelper
                            side={1}
                            color={"#00177e"}
                            filepath={"stl-assets/EmagArrow.stl"}
                            normalOpacity={0.7}
                            hoverOpacity={0.3}
                        />
                    </group>
                    {/* Catching Cylinder */}
                    <mesh 
                        position={catchingPosition}  
                        rotation={rotateCylinderToAxis(props.axisOfRotationWorld)}
                    >
                        <cylinderBufferGeometry args={[.15, .15, 0.8, 20]}/>
                        <meshPhongMaterial color={"#00177e"} opacity={0.9}/>
                    </mesh>
                </group>
            }
		</>
    )
}

export default StationaryEmags;
