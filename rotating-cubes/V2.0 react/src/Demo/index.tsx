import React, { useState } from 'react';

import styled from 'styled-components';
import { Canvas } from '@react-three/fiber';

import Cube from "../Cube";
import Controls from "../Controls";
import Panel from "../Panel";

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

        button {
            margin: 4px 5px;
        }
    }

    .CanvasContainer {
        margin: 0;
        height: 80%;
        width: 100%;
        background-color: gray;
    }
`;

const Demo = () => {
    
    const [rDisplacement, setRDisplacement] = useState(Math.PI/2);
    const [rAxis, setRAxis] = useState<"x" | "y" | "z">("z");

    return (
        <DemoContainer>
            <Panel
                rAxis={rAxis}
                rDisplacement={rDisplacement}
                setRAxis={setRAxis}
                setRDisplacement={setRDisplacement}
            />

            <div className="CanvasContainer">
                <Canvas>
                    <ambientLight />
                    <pointLight position={[10, 10, 10]} />
                    <Controls/>
                    <Cube 
                        id={1} 
                        position={[0, 0, 0]} 
                        color={"#000000"} 
                        rDisplacement={rDisplacement}
                        rAxis={rAxis}
                    />
                    <Cube 
                        id={2} 
                        position={[1, 0, 0]} 
                        color={"#000000"} 
                        rDisplacement={rDisplacement}
                        rAxis={rAxis}
                    />
                </Canvas>
            </div>
        </DemoContainer>
    )
}


export default Demo;