import React from 'react';

import { Canvas } from '@react-three/fiber';

import Box from "../Box";
import Controls from "../Controls";

const Demo = () => {


    return (
        <Canvas>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Controls/>
            <Box position={[-1.2, 0, 0]} />
            <Box position={[1.2, 0, 0]} />
        </Canvas>
    )
}


export default Demo;