import React from 'react';

import "@react-three/fiber";
import { rotateCylinderToAxis } from './rotateCylinderToAxis';
import { Vector3 } from 'three';
import { axisType } from '../../../Util/Types/types';

const StationaryEmags = (props: {
    stationaryEmagsPositions: Vector3
    showEmags: boolean,
}) => {

    // TODO: Replace these
    const someAxis: axisType = "z";

	return (
		<>	
            {props.showEmags &&
                <group scale={0.75}>
                    {/* Some Cylinder */}
                    <mesh 
                        position={props.stationaryEmagsPositions}  //TODO: Edit this
                        rotation={rotateCylinderToAxis(someAxis)}
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
