import React, { useState } from 'react';

import styled from 'styled-components';
import { Canvas } from '@react-three/fiber';

import Cube from "../Cube";
import Controls from "../Controls";
import Panel from "../Panel";
import { axisType, cornerType } from '../Types/types';
import { Vector3 } from 'three';

const DemoContainer = styled.div`
    width: 100%;
    height: 100%;
    overflow: auto;
    border: 25px solid #000000;

    .TopSection {
        margin: 0;
        height: 30%;
    }

    .CanvasContainer {
        margin: 0;
        height: 70%;
        width: 100%;
        background-color: gray;
    }
`;

const Demo = () => {
    
    const [rDisplacement, setRDisplacement] = useState(Math.PI/2);
    const [rAxis, setRAxis] = useState<axisType>("z");

    const [corner, setCorner] = useState<cornerType>("NorthEast");


    return (
        <DemoContainer>
            <div className="TopSection">
                <Panel
                    rAxis={rAxis}
                    setRAxis={setRAxis}
                    rDisplacement={rDisplacement}
                    setRDisplacement={setRDisplacement}
                    corner={corner}
                    setCorner={setCorner}
                />
            </div>

            <div className="CanvasContainer">
                <Canvas>
                    <ambientLight />
                    <pointLight position={[10, 10, 10]} />
                    <Controls/>
                    <Cube 
                        id={1} 
                        initialPosition={new Vector3(0, 1, 0)} 
                        color={"#000000"} 
                        rDisplacement={rDisplacement}
                        rAxis={rAxis}
                        corner={corner}
                    />
                    <Cube 
                        id={2} 
                        initialPosition={new Vector3(0, 0, 0)} 
                        color={"#000000"} 
                        rDisplacement={rDisplacement}
                        rAxis={rAxis}
                        corner={corner}
                    />
                </Canvas>
            </div>
        </DemoContainer>
    )
}


export default Demo;