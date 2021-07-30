import React from 'react';

import "@react-three/fiber";
import { axisType, cornerType } from '../../../Util/Types/types';
import { Quaternion } from 'three';
import { getPointOfRotation } from '../helpers/getPointOfRotation';

import { rotateCylinderToAxis } from "./rotateCylinderToAxis";
import { getNextCornerName } from "./getNextCornerName";


const Emags = (props: {
    showEmags: boolean,
    side: number,
    cornerName: cornerType,
    initialRotationAmount: Quaternion;
    axisOfRotationWorld: axisType,
}) => {
    
    // console.log("(Emags.tsx) pointOfRotation: ", props.pointOfRotation)

    const cylinderPositionForCorner = (cornerName : cornerType) => {
        return getPointOfRotation(cornerName, props.side, props.axisOfRotationWorld, props.initialRotationAmount);
    }

	return (
		<>	
            {props.showEmags &&
                <group>
                    <mesh position={cylinderPositionForCorner(props.cornerName)} rotation={rotateCylinderToAxis(props.axisOfRotationWorld)}>
                        <cylinderBufferGeometry args={[.19, .19, 1.1, 20]}/>
                        <meshPhongMaterial color={"#1975ee"} transparent={true} opacity={0.5}/>
                    </mesh>
                    <mesh position={cylinderPositionForCorner(getNextCornerName(props.cornerName))} rotation={rotateCylinderToAxis(props.axisOfRotationWorld)}>
                        <cylinderBufferGeometry args={[.19, .19, 1.1, 20]}/>
                        <meshPhongMaterial color={"#ff0000"} transparent={true} opacity={0.5}/>
                    </mesh>
                </group>
            }
		</>
    )
}

export default Emags;
