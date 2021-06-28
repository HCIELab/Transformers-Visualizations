import React from 'react';

import "@react-three/fiber";
import { axisType } from '../../../Util/Types/types';
import { Euler, Vector3 } from 'three';

const Emags = (props: {
    showEmags: boolean,
    pointOfRotation: Vector3,
    axisOfRotationWorld: axisType,
}) => {

    const getRotation = () => {
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

	return (
		<>	
            {props.showEmags &&
                <group>
                    <mesh position={props.pointOfRotation} rotation={getRotation()}>
                        <cylinderBufferGeometry args={[.19, .19, 1.1, 20]}/>
                        <meshPhongMaterial color={"#c70fff"} transparent={true} opacity={0.5}/>
                    </mesh>
                </group>
            }
		</>
    )
}

export default Emags;
