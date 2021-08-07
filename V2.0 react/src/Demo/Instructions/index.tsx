import React from 'react';
import styled from 'styled-components';

import {WalkingButton} from "./Buttons/WalkingButton";
import {PivotBackForthButton} from "./Buttons/PivotBackForthButton";
import {PivotMultiAxisButton} from "./Buttons/PivotMultiAxisButton";
import {TraversalButton} from "./Buttons/TraversalButton";
import {OneCubeButton} from "./Buttons/OneCubeButton";
import {TwoCubesButton} from "./Buttons/TwoCubesButton";
import {FourCubesButton} from "./Buttons/FourCubesButton";
import {FiveByFiveByFiveButton} from "./Buttons/FiveByFiveByFiveButton";
// import {TenByTenByTenButton} from "./Buttons/TenByTenByTenButton";
import {ChairTableCouchButton} from "./Buttons/ChairTableCouchButton/";
import {LineToUISTButton} from "./Buttons/LineToUISTButton";
import {TraversalTestZButton} from "./Buttons/TraversalTestZButton";
import {TraversalTestYButton} from "./Buttons/TraversalTestYButton";
import {TraversalTestXButton} from "./Buttons/TraversalTestXButton";
import {WalkInAllAxesButton} from "./Buttons/WalkInAllAxesButton";

import {LineToMITButton} from "./Buttons/LineToMITButton";
import {LineToICRAButton} from "./Buttons/LineToICRAButton";

const Container = styled.div`
    padding: 0 5px;

    h2 {
        margin: 10px 5px;
    }

    .Section {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 4px 0;

        .Label {
            font-size: 16px;
            font-family: Roboto;
            margin: 0 12px;
        }
        button {
            margin: 0 5px;
            cursor: pointer;
            padding: 15px;
            font-size: 16px;
            font-weight: 500;
            text-transform: none;
        }
    }
`;

const Instructions = (props: {
    setInstructions: Function,
    setInitialCubeConfigs: Function,
    setIncrementAmount: Function,
    setIntervalAmount: Function,
    intervalAmount: number,
}) => {

    return (
        <Container>
            <h2>Pre-defined Scripts </h2>
            <div className="Section">
                <WalkingButton {...props} />
                <PivotBackForthButton {...props} />
                <PivotMultiAxisButton {...props} />
                <TraversalButton {...props} />
                <ChairTableCouchButton {...props} />
                <LineToUISTButton {...props} />
                <LineToMITButton {...props} />
                <LineToICRAButton {...props} />
                <TraversalTestZButton {...props} />
                <TraversalTestYButton {...props} />
                <TraversalTestXButton {...props} />
                <WalkInAllAxesButton {...props} />
                <p className={"Label"} style={{color: "rgb(63, 81, 181)"}}>
                    Scripts with Instructions
                </p>
            </div>
            <div className="Section">
                <OneCubeButton {...props} />
                <TwoCubesButton {...props} />
                <FourCubesButton {...props} />
                <FiveByFiveByFiveButton {...props} />
                {/* <TenByTenByTenButton {...props} /> */}
                <p className={"Label"}>
                    Scripts with no Instructions
                </p>
            </div>
        </Container>
    )
}

export default Instructions; 