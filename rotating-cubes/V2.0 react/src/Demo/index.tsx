import React, { useState } from 'react';

import styled from 'styled-components';
import { Canvas } from '@react-three/fiber';

import Cube from "./Cube";
import ThreeControls from "./ThreeControls";
import Panel from "./Panel";
import { axisType, cornerType, instructionType } from './Types/types';
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

        .AddOrRemoveCubes {
            padding-top: 10px;
            display: flex;
            align-items: center;
            justify-content: center;

            button {
                margin: 0px 10px;
            }
        }
    }

    .BottomSection {
        margin: 0;
        height: 70%;
        width: 100%;
        background-color: #252525;
    }
`;

const Demo = () => {
    
    const [rDisplacement, setRDisplacement] = useState(Math.PI);
    const [rAxis, setRAxis] = useState<axisType>("y");
    const [corner, setCorner] = useState<cornerType>("NorthEast");

    const [cubesAndProperties, _] = useState([
        {id: 1, initialPosition: new Vector3(1, 0, 0), color: "#049101"},
        {id: 2, initialPosition: new Vector3(0, 0, 0), color: "#049101"},
    ])
	const instructions : instructionType[] = [
		{
			cubeID: 1,
			axis: "z",
			corner: "NorthWest",
			displacement: Math.PI/2,
			timeToStart: 1000,
		},
		{
			cubeID: 2,
			axis: "z",
			corner: "NorthEast",
			displacement: -Math.PI/2,
			timeToStart: 2000,
		}
	]

    

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

            <div className="BottomSection">
                <Canvas>
                    <ambientLight />
                    <pointLight position={[10, 10, 10]} />
                    <ThreeControls/>
                    <axesHelper position={[-2, -2, 0]} scale={0.5}/>
                    {
                        cubesAndProperties.map((config) => 
                            <Cube 
                                instructions={instructions}
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