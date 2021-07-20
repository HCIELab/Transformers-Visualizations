import React, { useState } from 'react';

import styled from 'styled-components';

import Panel from "./Panel";
import Instructions from "./Instructions";
import { axisType, initialCubeConfigType, instructionType } from './Util/Types/types';
import World from "./World";
import { Vector3 } from 'three';
import { FormControlLabel, Switch } from '@material-ui/core';

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
            height: 20%;
            background-color: #fdfdfd;
            overflow: auto;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
    
        .BottomSection {
            margin: 0;
            height: calc(100% - 20%);
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
                    {/* <Panel
                        axisOfRotationWorld={axisOfRotationWorld}
                        setAxisOfRotationWorld={setAxisOfRotationWorld}
                        isCounterclockwise={isCounterclockwise}
                        setIsCounterclockwise={setIsCounterclockwise}
                    />
                    <br/>
                    <br/> */}
                    
                    <div>
                        <Instructions
                            setInstructions={setInstructions}
                            setInitialCubeConfigs={setInitialCubeConfigs}
                            setIncrementAmount={setIncrementAmount}
                        />
                    </div>


                    <div>                        
                        <FormControlLabel
                            control={
                                <Switch
                                    checked={showPath}
                                    onChange={() => setShowPath(!showPath)}
                                    name="showPathToggle"
                                    color="primary"
                                />
                            }
                            label={showPath ? "Showing Path of Rotation without Movement" : "Simulating and Animating Cube Movement"}
                        />
                        <br/><br/>

                        <p> 💡 Please do not move the camera while a rotation is in motion</p>
                        <p> 💡 Please do not change to a different browser tab while a rotation is in motion</p>
                        <p> 💡 Refresh the page if an instruction script encounters an error</p>
                    </div>
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