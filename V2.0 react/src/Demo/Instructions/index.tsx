import React from 'react';
import styled from 'styled-components';

import {WalkingButton} from "./WalkingButton";
import {PivotBackForthButton} from "./PivotBackForthButton";
import {PivotMultiAxisButton} from "./PivotMultiAxisButton";
import {TraversalButton} from "./TraversalButton";
import {OneCubeButton} from "./OneCubeButton";
import {TwoCubesButton} from "./TwoCubesButton";
import {FourCubesButton} from "./FourCubesButton";
import {FiveByFiveByFiveButton} from "./FiveByFiveByFiveButton";
import {TenByTenByTenButton} from "./TenByTenByTenButton";
import {ChairTableCouchButton} from "./ChairTableCouchButton/";
import {LineToUISTButton} from "./LineToUISTButton";
import {TraversalTestZButton} from "./TraversalTestZButton";
import {TraversalTestYButton} from "./TraversalTestYButton";
import {TraversalTestXButton} from "./TraversalTestXButton";
import {WalkInAllAxesButton} from "./WalkInAllAxesButton";

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
                <TenByTenByTenButton {...props} />
                <p className={"Label"}>
                    Scripts with no Instructions
                </p>
            </div>
        </Container>
    )
}

export default Instructions; 