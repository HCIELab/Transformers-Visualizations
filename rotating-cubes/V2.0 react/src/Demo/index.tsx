import React, { useState } from 'react';

import styled from 'styled-components';

import Panel from "./Panel";
import Instructions from "./Instructions";
import { axisType, initialCubeConfigType, instructionType } from './Util/Types/types';
import World from "./World";

const DemoContainer = styled.div`
    width: 100%;
    height: 100%;
    overflow: auto;
    border: 25px solid #000000;

    .TopSection {
        margin: 0;
        height: 35%;
        background-color: #fdfdfd;
        overflow: auto;
    }

    .BottomSection {
        margin: 0;
        height: calc(100% - 35%);
        width: 100%;
        background-color: #252525;
    }
`;

const Demo = () => {
    
    const [isCounterclockwise, setIsCounterclockwise] = useState(true);
    const [axisOfRotationWorld, setAxisOfRotationWorld] = useState<axisType>("z");

    const [initialCubeConfigs, setInitialCubeConfigs] = useState<initialCubeConfigType[]>([]);
	const [instructions, setInstructions] = useState<instructionType[]>([]);

    const [showPath, setShowPath] = useState(false);

    return (
        <DemoContainer>
            <div className="TopSection">
                <Panel
                    axisOfRotationWorld={axisOfRotationWorld}
                    setAxisOfRotationWorld={setAxisOfRotationWorld}
                    isCounterclockwise={isCounterclockwise}
                    setIsCounterclockwise={setIsCounterclockwise}
                />

                <br/>
                <br/>
                [ {showPath ? "Showing Path" : "Moving Cubes"} ]
                <button onClick={() => {
                    setShowPath(!showPath)
                }}>
                    Click to toggle
                </button>
                <br/>
                <br/>

                <Instructions
                    setInstructions={setInstructions}
                    setInitialCubeConfigs={setInitialCubeConfigs}
                />

                <br/>
                <p>NOTE: do NOT move the camera while cubes are in motion</p>
            </div>



            <div className="BottomSection">
                <World
                    initialCubeConfigs={initialCubeConfigs}
                    instructions={instructions}
                    isCounterclockwise={isCounterclockwise}
                    setIsCounterclockwise={setIsCounterclockwise}
                    axisOfRotationWorld={axisOfRotationWorld}
                    setAxisOfRotationWorld={setAxisOfRotationWorld}
                    showPath={showPath}
                />
            </div>
        </DemoContainer>
    )
}


export default Demo;