import React from 'react';
import styled from 'styled-components';

import {Button1} from "./button1";
import {Button2} from "./button2";
import {Button3} from "./button3";
import {Button4} from "./button4";
import {Button5} from "./button5";
import {Button6} from "./button6";
import {Button7} from "./button7";
import {Button8} from "./button8";
// import {Button9} from "./button9";
import {Button10} from "./button10";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    padding: 5px 0;

    .ScriptsHeading {
        font-weight: 600;
        padding: 0px 5px;
    }
    button {
        margin: 0 5px;
        cursor: pointer;
    }
`;

const Instructions = (props: {
    setInstructions: Function,
    setInitialCubeConfigs: Function,
    setIncrementAmount: Function,
}) => {

    return (
        <Container>
            <div className={"ScriptsHeading"}>
                Starter Scripts:
            </div>

            <div>
                With Instructions
                <Button1 setInstructions={props.setInstructions} setInitialCubeConfigs={props.setInitialCubeConfigs} setIncrementAmount={props.setIncrementAmount} />
                <Button2 setInstructions={props.setInstructions} setInitialCubeConfigs={props.setInitialCubeConfigs} setIncrementAmount={props.setIncrementAmount} />
                <Button3 setInstructions={props.setInstructions} setInitialCubeConfigs={props.setInitialCubeConfigs} setIncrementAmount={props.setIncrementAmount} />
                <Button4 setInstructions={props.setInstructions} setInitialCubeConfigs={props.setInitialCubeConfigs} setIncrementAmount={props.setIncrementAmount} />
            </div>
            <div>
                No Instructions
                <Button5 setInstructions={props.setInstructions} setInitialCubeConfigs={props.setInitialCubeConfigs} setIncrementAmount={props.setIncrementAmount} />
                <Button6 setInstructions={props.setInstructions} setInitialCubeConfigs={props.setInitialCubeConfigs} setIncrementAmount={props.setIncrementAmount} />
                <Button7 setInstructions={props.setInstructions} setInitialCubeConfigs={props.setInitialCubeConfigs} setIncrementAmount={props.setIncrementAmount} />
                <Button8 setInstructions={props.setInstructions} setInitialCubeConfigs={props.setInitialCubeConfigs} setIncrementAmount={props.setIncrementAmount} />
                {/* <Button9 setInstructions={props.setInstructions} setInitialCubeConfigs={props.setInitialCubeConfigs} setIncrementAmount={props.setIncrementAmount} /> */}
                <Button10 setInstructions={props.setInstructions} setInitialCubeConfigs={props.setInitialCubeConfigs} setIncrementAmount={props.setIncrementAmount} />
            </div>
        </Container>
    )
}

export default Instructions; 