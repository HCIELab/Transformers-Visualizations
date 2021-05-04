import React, { useState } from 'react';

import styled from 'styled-components';
import { Canvas } from '@react-three/fiber';

import Cube from "../Cube";
import ThreeControls from "../ThreeControls";
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
        background-color: #fdfdfd;
    }

    .CanvasContainer {
        margin: 0;
        height: 70%;
        width: 100%;
        background-color: #252525;
    }
`;

const Demo = () => {
    
    const [rDisplacement, setRDisplacement] = useState(Math.PI);
    const [rAxis, setRAxis] = useState<axisType>("z");

    const [corner, setCorner] = useState<cornerType>("NorthEast");

    // eslint-disable-next-line
    const [cubeConfig, _] = useState([
        {id: 1, initialPosition: new Vector3(0, 1, 0), color: "#049101"},
        {id: 2, initialPosition: new Vector3(0, 0, 0), color: "#211990"},
    ])

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
                    <ThreeControls/>
                    {
                        cubeConfig.map((config) => 
                            <Cube 
                                key={config.id}
                                id={config.id} 
                                initialPosition={config.initialPosition} 
                                color={config.color} 
                                rDisplacement={rDisplacement}
                                rAxis={rAxis}
                                corner={corner}
                            />
                        )
                    }
                </Canvas>
            </div>
        </DemoContainer>
    )
}


export default Demo;