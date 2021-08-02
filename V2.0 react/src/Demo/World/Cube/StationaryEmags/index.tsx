import React from 'react';

import "@react-three/fiber";
import { rotateCylinderToAxis } from './rotateCylinderToAxis';
import { Quaternion, Vector3 } from 'three';
import { axisType, cornerType } from '../../../Util/Types/types';
import { getLocations } from "./locations";

const StationaryEmags = (props: {
    cubePosition: Vector3,
    showEmags: boolean,
    side: number,
    cornerName: cornerType,
    initialRotationAmount: Quaternion;
    axisOfRotationWorld: axisType,
    isCounterclockwise: boolean,
}) => {
    // NOTE: The coordinates in this component are rendered in WORLD position

    const offset = 0.15;
    const {repulsionPosition, hingePosition, catchingPosition} = getLocations(props.side, offset, props.cornerName, props.isCounterclockwise);


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
                    <mesh 
                        position={hingePosition}  
                        rotation={rotateCylinderToAxis(props.axisOfRotationWorld)}
                    >
                        <cylinderBufferGeometry args={[.15, .15, 0.8, 20]}/>
                        <meshPhongMaterial color={"#00177e"} opacity={0.9}/>
                    </mesh>
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
