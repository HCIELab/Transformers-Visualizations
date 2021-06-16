import React, { useState } from 'react';

import styled from 'styled-components';

import Panel from "./Panel";
import Instructions from "./Instructions";
import { axisType, cornerType, cubeAndPropertiesType, instructionType } from './Types/types';
import World from "./World";

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

    const [cubesAndProperties, setCubesAndProperties] = useState<cubeAndPropertiesType[]>([]);
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
            </div>

            <Instructions
                setInstructions={setInstructions}
                setCubesAndProperties={setCubesAndProperties}
            />

            <div className="BottomSection">
                <World
                    cubesAndProperties={cubesAndProperties}
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