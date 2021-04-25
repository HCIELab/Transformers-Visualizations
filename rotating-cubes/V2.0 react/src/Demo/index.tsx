import React, { useState } from 'react';

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
    

    const pi = Math.PI;
    const [rDisplacement, setRDisplacement] = useState(pi/2);
    const [rAxis, setRAxis] = useState<"x" | "y" | "z">("z");


    return (
        <DemoContainer>
            <div className="TopSection">
                Buttons (only change these if cubes are not currently rotating)
                <div>
                    <button onClick={() => setRAxis("x")}>x</button>
                    <button onClick={() => setRAxis("y")}>y</button>
                    <button onClick={() => setRAxis("z")}>z</button>
                </div>
                <div>
                    <button onClick={() => setRDisplacement(-pi)}>-pi</button>
                    <button onClick={() => setRDisplacement(-pi/2)}>-pi/2</button>
                    <button onClick={() => setRDisplacement(pi/2)}>pi/2</button>
                    <button onClick={() => setRDisplacement(pi)}>pi</button>
                </div>
                <div>
                    <p>Current rAxis: {rAxis}</p>
                    <p>Current rDisplacement: {rDisplacement}</p>
                </div>
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