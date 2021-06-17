import React, { useState } from 'react';

import styled from 'styled-components';

import Panel from "./Panel";
import Instructions from "./Instructions";
import { axisType, cornerType, initialCubeConfigType, instructionType } from './Util/Types/types';
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
    
    const [rDisplacement, setRDisplacement] = useState(Math.PI);
    const [rAxis, setRAxis] = useState<axisType>("z");
    const [corner, setCorner] = useState<cornerType>("NorthEast");

    const [initialCubeConfigs, setInitialCubeConfigs] = useState<initialCubeConfigType[]>([]);
	const [instructions, setInstructions] = useState<instructionType[]>([]);

    

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
                <br/>
                <Instructions
                    setInstructions={setInstructions}
                    setInitialCubeConfigs={setInitialCubeConfigs}
                />
            </div>



            <div className="BottomSection">
                <World
                    initialCubeConfigs={initialCubeConfigs}
                    instructions={instructions}
                    rDisplacement={rDisplacement}
                    rAxis={rAxis}
                    corner={corner}
                />
            </div>
        </DemoContainer>
    )
}


export default Demo;