import React from 'react';

import { Canvas } from '@react-three/fiber';

import Cube from "../Cube";
import Controls from "../Controls";

const Demo = () => {

    return (
        <Canvas>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Controls/>
            <Cube position={[0, 0, 0]} color={"blue"}/>
            <Cube position={[1, 0, 0]} color={"red"}/>
        </Canvas>
    )
}


export default Demo;