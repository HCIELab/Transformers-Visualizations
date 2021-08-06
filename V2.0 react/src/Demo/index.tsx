import React, { useState } from 'react';

import styled from 'styled-components';

// import Panel from "./Panel";
import Instructions from "./Instructions";
import Toggles from "./Toggles";
import HelpModal from "./HelpModal";
import { axisType, initialCubeConfigType, instructionType } from './Util/Types/types';
import World from "./World";
import { Vector3 } from 'three';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

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
            height: 200px;
            background-color: #fdfdfd;
            display: flex;
            flex-direction: row;
            justify-content: space-between;

            .InstructionsContainer {
                width: 65%;
                height: 100%;
                overflow: auto;
            }

            .TogglesContainer {
                width: 32%;
                height: 100%;
                overflow: auto;
            }
        }
    
        .BottomSection {
            margin: 0;
            height: calc(100% - 200px);
            width: 100%;
            background-color: #f0f0f0;
        }
    }
`;

const HelpButtonStyler = styled.button`
    background-color: white;
    border-radius: 100%;
    border: none;
    cursor: pointer;

    &:hover {
        opacity: 0.6;
    }
`;

const Demo = () => {    
    const [isCounterclockwise, setIsCounterclockwise] = useState(true);
    const [axisOfRotationWorld, setAxisOfRotationWorld] = useState<axisType>("z");

    const [initialCubeConfigs, setInitialCubeConfigs] = useState<initialCubeConfigType[]>([{id: 1, initialPosition: new Vector3(0, 0, 0), color: "#77410e"}]);
	const [instructions, setInstructions] = useState<instructionType[]>([]);

    const [incrementAmount, setIncrementAmount] = useState(0.1);
    const [intervalAmount, setIntervalAmount] = useState(50);

    const [showPath, setShowPath] = useState(false);
    const [displayCubeBox, setDisplayCubeBox] = useState(true);
    const [displayCoilsAndCorners, setDisplayCoilsAndCorners] = useState(true);
    const [displayEmagIDs, setDisplayEmagIDs] = useState(false);
    const [displayGrayCubeBox, setDisplayGrayCubeBox] = useState(false);
    const [displayEmags, setDisplayEmags] = useState(true);
    const [displayCubeIDs, setDisplayCubeIDs] = useState(true);
    const [display3DArrows, setDisplay3DArrows] = useState(true);

    // ********************Max Speed (dev use only)
    // const [incrementAmount, setIncrementAmount] = useState(1.5);
    // const [intervalAmount, setIntervalAmount] = useState(200);
    // const [showPath, setShowPath] = useState(false);
    // const [displayCubeBox, setDisplayCubeBox] = useState(false);
    // const [displayCoilsAndCorners, setDisplayCoilsAndCorners] = useState(false);
    // const [displayEmagIDs, setDisplayEmagIDs] = useState(false);
    // const [displayGrayCubeBox, setDisplayGrayCubeBox] = useState(true);
    // const [displayEmags, setDisplayEmags] = useState(false);
    // const [displayCubeIDs, setDisplayCubeIDs] = useState(false);
    // const [display3DArrows, setDisplay3DArrows] = useState(false);
    // *********************

    const [modalOpenStatus, setModalOpenStatus] = useState(true);

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
                    
                    <div className="InstructionsContainer">
                        <Instructions
                            setInstructions={setInstructions}
                            setInitialCubeConfigs={setInitialCubeConfigs}
                            setIncrementAmount={setIncrementAmount}
                            setIntervalAmount={setIntervalAmount}
                            intervalAmount={intervalAmount}
                        />
                    </div>

                    <div className="TogglesContainer">
                        <Toggles
                            showPath={showPath}
                            setShowPath={setShowPath}
                            displayCubeBox={displayCubeBox}
                            setDisplayCubeBox={setDisplayCubeBox}
                            displayCoilsAndCorners={displayCoilsAndCorners}
                            setDisplayCoilsAndCorners={setDisplayCoilsAndCorners}
                            displayEmagIDs={displayEmagIDs}
                            setDisplayEmagIDs={setDisplayEmagIDs}
                            displayGrayCubeBox={displayGrayCubeBox}
                            setDisplayGrayCubeBox={setDisplayGrayCubeBox}
                            displayEmags={displayEmags}
                            setDisplayEmags={setDisplayEmags}
                            displayCubeIDs={displayCubeIDs}
                            setDisplayCubeIDs={setDisplayCubeIDs}
                            display3DArrows={display3DArrows}
                            setDisplay3DArrows={setDisplay3DArrows}

                            incrementAmount={incrementAmount}
                            setIncrementAmount={setIncrementAmount}
                            intervalAmount={intervalAmount}
                            setIntervalAmount={setIntervalAmount}
                        />
                    </div>

                    <br/> 
                    <HelpButtonStyler onClick={() => setModalOpenStatus(true)}>
                        <HelpOutlineIcon/>
                    </HelpButtonStyler>
                </div>



                <div className="BottomSection">
                    <World
                        axisOfRotationWorld={axisOfRotationWorld}
                        setAxisOfRotationWorld={setAxisOfRotationWorld}
                        isCounterclockwise={isCounterclockwise}
                        setIsCounterclockwise={setIsCounterclockwise}
                        initialCubeConfigs={initialCubeConfigs}
                        instructions={instructions}

                        incrementAmount={incrementAmount}
                        showPath={showPath}

                        displayEmagIDs={displayEmagIDs}
                        displayEmags={displayEmags}
                        displayCubeIDs={displayCubeIDs}
                        display3DArrows={display3DArrows}
                        displayCubeBox={displayCubeBox}
                        displayCoilsAndCorners={displayCoilsAndCorners}
                        displayGrayCubeBox={displayGrayCubeBox}
                    />
                </div>
            </div>


            <HelpModal
                modalOpenStatus={modalOpenStatus}
                setModalOpenStatus={setModalOpenStatus}
            />

        </DemoContainer>
    )
}


export default Demo;