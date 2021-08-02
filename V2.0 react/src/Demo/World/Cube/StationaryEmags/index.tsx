import React from 'react';

import "@react-three/fiber";
import { rotateCylinderToAxis } from './rotateCylinderToAxis';
import { Quaternion, Vector3 } from 'three';
import { axisType, cornerType } from '../../../Util/Types/types';

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

    // const getPosition = () => {
    //     // const {side, axisOfRotationWorld, isCounterclockwise, initialRotationAmount} = props;
    //     console.log("(StationaryEmags.tsx): cubePosition", props.cubePosition);
    //     return props.cubePosition;
    // }

    const half = props.side/2;
    const offset = 0.15;

    const getRepulsionCylinder = () => {
        const {x, y, z} = props.cubePosition;
        return new Vector3(x - half + offset, y - half - offset, z);
    }
    const getHingeCylinder = () => {
        const {x, y, z} = props.cubePosition;
        return new Vector3(x + half - offset, y - half - offset, z);
    }
    const getCatchingCylinder = () => {
        const {x, y, z} = props.cubePosition;
        return new Vector3(x + half*3 - offset, y - half - offset, z);
    }

	return (
		<>	
            {props.showEmags &&
                <group>
                    {/* Repsulsion Cylinder */}
                    <mesh 
                        position={getRepulsionCylinder()}  
                        rotation={rotateCylinderToAxis(props.axisOfRotationWorld)}
                    >
                        <cylinderBufferGeometry args={[.15, .15, 0.8, 20]}/>
                        <meshPhongMaterial color={"#ff0000"} opacity={0.9}/>
                    </mesh>
                    {/* Hinge Cylinder */}
                    <mesh 
                        position={getHingeCylinder()}  
                        rotation={rotateCylinderToAxis(props.axisOfRotationWorld)}
                    >
                        <cylinderBufferGeometry args={[.15, .15, 0.8, 20]}/>
                        <meshPhongMaterial color={"#00177e"} opacity={0.9}/>
                    </mesh>
                    {/* Catching Cylinder */}
                    <mesh 
                        position={getCatchingCylinder()}  
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
