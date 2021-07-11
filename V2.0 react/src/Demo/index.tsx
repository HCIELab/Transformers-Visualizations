import React, { useState } from 'react';

import styled from 'styled-components';

import Panel from "./Panel";
import Instructions from "./Instructions";
import { axisType, initialCubeConfigType, instructionType } from './Util/Types/types';
import World from "./World";
import { Vector3 } from 'three';

const DemoContainer = styled.div`
    width: 100%;
    height: 100%;
    overflow: auto;
    border: 10px solid #ffffff;
    padding: 20px;

    .Inner {
        width: 100%;
        height: 100%;
        box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
        padding: 20px;

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
            background-color: #f0f0f0;
        }
    }
`;

const Demo = () => {    
    const [isCounterclockwise, setIsCounterclockwise] = useState(true);
    const [axisOfRotationWorld, setAxisOfRotationWorld] = useState<axisType>("z");

    const [incrementAmount, setIncrementAmount] = useState(0.1);

    const [initialCubeConfigs, setInitialCubeConfigs] = useState<initialCubeConfigType[]>([{id: 1, initialPosition: new Vector3(0, 0, 0), color: "#77410e"}]);
	const [instructions, setInstructions] = useState<instructionType[]>([]);

    const [showPath, setShowPath] = useState(false);

    return (
        <DemoContainer>
            <div className="Inner">
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
                        setIncrementAmount={setIncrementAmount}
                    />

                    <p>NOTE: please do not move the camera while a rotation is in motion</p>

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
                        incrementAmount={incrementAmount}
                    />
                </div>
            </div>
        </DemoContainer>
    )
}


export default Demo;