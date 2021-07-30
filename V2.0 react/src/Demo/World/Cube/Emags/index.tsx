import React from 'react';

import "@react-three/fiber";
import { axisType, cornerType } from '../../../Util/Types/types';
import { Euler, Quaternion } from 'three';
import { getPointOfRotation } from '../helpers/getPointOfRotation';

const Emags = (props: {
    showEmags: boolean,
    side: number,
    cornerName: cornerType,
    initialRotationAmount: Quaternion;
    axisOfRotationWorld: axisType,
}) => {
    
    // console.log("(Emags.tsx) pointOfRotation: ", props.pointOfRotation)

    const rotateCylinderToAxis = () => {
        switch (props.axisOfRotationWorld) {
            case "x":
                return new Euler(0, 0, Math.PI/2);
            case "y":
                return new Euler(0, 0, 0);
            // case "z":
            default:
                return new Euler(Math.PI/2, 0, 0);
        }
    }

    const cylinderPosition = () => {
        return getPointOfRotation(props.cornerName, props.side, props.axisOfRotationWorld, props.initialRotationAmount);
    }

	return (
		<>	
            {props.showEmags &&
                <group>
                    <mesh position={cylinderPosition()} rotation={rotateCylinderToAxis()}>
                        <cylinderBufferGeometry args={[.19, .19, 1.1, 20]}/>
                        <meshPhongMaterial color={"#1975ee"} transparent={true} opacity={0.5}/>
                    </mesh>
                </group>
            }
		</>
    )
}

export default Emags;
