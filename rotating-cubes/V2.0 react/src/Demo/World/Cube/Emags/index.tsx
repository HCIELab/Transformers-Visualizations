import React from 'react';

import "@react-three/fiber";

const Emags = (props: {
    showEmags: boolean,
}) => {

	return (
		<>	
            {props.showEmags &&
                <group>
                    <mesh>
                        <cylinderBufferGeometry args={[.05, .05, .8, 20]}/>
                        <meshPhongMaterial/>
                    </mesh>
                </group>
            }
		</>
    )
}

export default Emags;
