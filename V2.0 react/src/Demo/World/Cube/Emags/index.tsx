import React from 'react';

import "@react-three/fiber";
import { axisType, cornerType } from '../../../Util/Types/types';
import { Quaternion } from 'three';
import { getPointOfRotation } from '../helpers/getPointOfRotation';

import { rotateCylinderToAxis } from "./rotateCylinderToAxis";
import { getNextCornerName } from "./getNextCornerName";
import { getPreviousCornerName } from "./getPreviousCornerName";


const Emags = (props: {
    showEmags: boolean,
    side: number,
    cornerName: cornerType,
    initialRotationAmount: Quaternion;
    axisOfRotationWorld: axisType,
    isCounterclockwise: boolean,
}) => {
    
    // console.log("(Emags.tsx) pointOfRotation: ", props.pointOfRotation)

    const cylinderPositionForCorner = (cornerName : cornerType) => {
        return getPointOfRotation(cornerName, props.side, props.axisOfRotationWorld, props.initialRotationAmount);
    }

	return (
		<>	
            {props.showEmags &&
                <group>
                    {/* Hinge Moving Cylinder */}
                    <mesh 
                        position={cylinderPositionForCorner(props.cornerName)} 
                        rotation={rotateCylinderToAxis(props.axisOfRotationWorld)}
                    >
                        <cylinderBufferGeometry args={[.19, .19, 1.1, 20]}/>
                        <meshPhongMaterial color={"#00367e"} transparent={true} opacity={0.5}/>
                    </mesh>

                    {/* Repulsion Moving Cylinder */}
                    <mesh 
                        position={cylinderPositionForCorner(!props.isCounterclockwise ? getNextCornerName(props.cornerName) : getPreviousCornerName(props.cornerName))} 
                        rotation={rotateCylinderToAxis(props.axisOfRotationWorld)}
                    >
                        <cylinderBufferGeometry args={[.19, .19, 1.1, 20]}/>
                        <meshPhongMaterial color={"#ff0000"} transparent={true} opacity={0.5}/>
                    </mesh>

                    {/* Catching Attraction Moving Cylinder */}
                    <mesh 
                        position={cylinderPositionForCorner(!props.isCounterclockwise ? getPreviousCornerName(props.cornerName) : getNextCornerName(props.cornerName))} 
                        rotation={rotateCylinderToAxis(props.axisOfRotationWorld)}
                    >
                        <cylinderBufferGeometry args={[.19, .19, 1.1, 20]}/>
                        <meshPhongMaterial color={"#00367e"} transparent={true} opacity={0.5}/>
                    </mesh>
                </group>
            }
		</>
    )
}

export default Emags;
