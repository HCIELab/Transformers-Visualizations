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
        flex-direction: column;
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
                <button onClick={() => console.log("click registered")}>x</button>
                <button onClick={() => console.log("click registered")}>y</button>
                <button onClick={() => console.log("click registered")}>z</button>
            </div>
            <div className="CanvasContainer">
                <Canvas>
                    <ambientLight />
                    <pointLight position={[10, 10, 10]} />
                    <Controls/>
                    <Cube 
                        id={1} 
                        position={[0, 0, 0]} 
                        color={"#000000"} 
                        rDisplacement={-Math.PI/2}
                        rAxis={"z"}
                    />
                    <Cube 
                        id={2} 
                        position={[1, 0, 0]} 
                        color={"#000000"} 
                        rDisplacement={-Math.PI/2}
                        rAxis={"z"}
                    />
                </Canvas>
            </div>
        </DemoContainer>
    )
}


export default Demo;