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
    const getPosition = () => {
        const {side, axisOfRotationWorld, isCounterclockwise, initialRotationAmount} = props;
        console.log("(StationaryEmags.tsx): cubePosition", props.cubePosition);
        return props.cubePosition;
    }

	return (
		<>	
            {props.showEmags &&
                <group>
                    {/* Some Cylinder */}
                    <mesh 
                        position={getPosition()}  //TODO: Edit this, note that this is in world position
                        rotation={rotateCylinderToAxis(props.axisOfRotationWorld)}
                    >
                        <cylinderBufferGeometry args={[.19, .19, 1.1, 20]}/>
                        <meshPhongMaterial color={"#007e06"} opacity={0.9}/>
                    </mesh>
                </group>
            }
		</>
    )
}

export default StationaryEmags;
