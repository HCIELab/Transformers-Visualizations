import React from 'react';

import "@react-three/fiber";

const Emags = (props: {
}) => {

	return (
		<>	
            <group>
				<mesh>
                    <cylinderBufferGeometry args={[.05, .05, .8, 20]}/>
					<meshPhongMaterial/>
				</mesh>
			</group>
		</>
    )
}

export default Emags;
