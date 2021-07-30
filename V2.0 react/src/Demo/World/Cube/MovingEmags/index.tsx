import React, { useCallback, useEffect } from 'react';

import "@react-three/fiber";
import { axisType, cornerType } from '../../../Util/Types/types';
import { Quaternion, Vector3 } from 'three';
import { getPointOfRotation } from '../helpers/getPointOfRotation';

import { rotateCylinderToAxis } from "./rotateCylinderToAxis";
import { getNextCornerName } from "./getNextCornerName";
import { getPreviousCornerName } from "./getPreviousCornerName";


const MovingEmags = (props: {
    showEmags: boolean,
    side: number,
    cornerName: cornerType,
    initialRotationAmount: Quaternion;
    axisOfRotationWorld: axisType,
    isCounterclockwise: boolean,
    setStationaryEmagsPositions: Function,
}) => {
    
    const cylinderPositionForCorner = useCallback((cornerName : cornerType) => {
        return getPointOfRotation(cornerName, props.side, props.axisOfRotationWorld, props.initialRotationAmount);
    }, [props.axisOfRotationWorld, props.side, props.initialRotationAmount])

    const { setStationaryEmagsPositions, cornerName } = props;
    useEffect(() => {
        const {x, y, z} = cylinderPositionForCorner(cornerName);
        const vec = new Vector3(x, y, z+2);
        setStationaryEmagsPositions(vec)
        console.log("(Emags.tsx) calling setStationaryEmagsPositions with input", vec)
    }, [setStationaryEmagsPositions, cornerName, cylinderPositionForCorner])

	return (
		<>	
            {props.showEmags &&
                <group scale={0.75}>
                    {/* Hinge Moving Cylinder */}
                    <mesh 
                        position={cylinderPositionForCorner(props.cornerName)} 
                        rotation={rotateCylinderToAxis(props.axisOfRotationWorld)}
                    >
                        <cylinderBufferGeometry args={[.19, .19, 1.1, 20]}/>
                        <meshPhongMaterial color={"#00367e"} opacity={0.5}/>
                    </mesh>

                    {/* Repulsion Moving Cylinder */}
                    <mesh 
                        position={cylinderPositionForCorner(!props.isCounterclockwise ? getNextCornerName(props.cornerName) : getPreviousCornerName(props.cornerName))} 
                        rotation={rotateCylinderToAxis(props.axisOfRotationWorld)}
                    >
                        <cylinderBufferGeometry args={[.19, .19, 1.1, 20]}/>
                        <meshPhongMaterial color={"#ff0000"} opacity={0.5}/>
                    </mesh>

                    {/* Catching Attraction Moving Cylinder */}
                    <mesh 
                        position={cylinderPositionForCorner(!props.isCounterclockwise ? getPreviousCornerName(props.cornerName) : getNextCornerName(props.cornerName))} 
                        rotation={rotateCylinderToAxis(props.axisOfRotationWorld)}
                    >
                        <cylinderBufferGeometry args={[.19, .19, 1.1, 20]}/>
                        <meshPhongMaterial color={"#00367e"} opacity={0.5}/>
                    </mesh>
                </group>
            }
		</>
    )
}

export default MovingEmags;
