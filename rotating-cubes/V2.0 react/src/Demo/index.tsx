import React from 'react';

import styled from 'styled-components';
import { Canvas } from '@react-three/fiber';

import Cube from "../Cube";
import Controls from "../Controls";


const DemoContainer = styled.div`
    width: 100%;
    height: 100%;
    overflow: auto;
    border: 25px solid #000000;

    .TopSection {
        margin: 0;
        height: 20%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .CanvasContainer {
        margin: 0;
        height: 80%;
        width: 100%;
        background-color: gray;
    }
`;

const Demo = () => {

    return (
        <DemoContainer>
            <div className="TopSection">
                (add stuff here...)
            </div>
            <div className="CanvasContainer">
                <Canvas>
                    <ambientLight />
                    <pointLight position={[10, 10, 10]} />
                    <Controls/>
                    <Cube position={[0, 0, 0]} color={"#000000"}/>
                    <Cube position={[1, 0, 0]} color={"#000000"}/>
                </Canvas>
            </div>
        </DemoContainer>
    )
}


export default Demo;