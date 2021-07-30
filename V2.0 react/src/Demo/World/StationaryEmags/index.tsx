import React from 'react';

import "@react-three/fiber";
import { rotateCylinderToAxis } from './rotateCylinderToAxis';
import { Vector3 } from 'three';
import { axisType } from '../../Util/Types/types';

const StationaryEmags = (props: {
}) => {

    // Replace these
    const somePosition = new Vector3(-2, 2, 0);
    const someAxis: axisType = "z";

	return (
		<>	
            <group scale={0.75}>
                {/* Some Cylinder */}
                <mesh 
                    position={somePosition} 
                    rotation={rotateCylinderToAxis(someAxis)}
                >
                    <cylinderBufferGeometry args={[.19, .19, 1.1, 20]}/>
                    <meshPhongMaterial color={"#00367e"} opacity={0.5}/>
                </mesh>
            </group>
		</>
    )
}

export default StationaryEmags;
