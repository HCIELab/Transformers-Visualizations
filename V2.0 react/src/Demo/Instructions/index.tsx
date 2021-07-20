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
import {Button10} from "./button10/button10";
import {Button11} from "./button11/button11";

const Container = styled.div`
    padding: 5px 0;

    .Section {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 4px;

        .Label {
            font-size: 18px;
            font-family: Roboto;
            margin: 0 15px;
        }
        button {
            margin: 0 5px;
            cursor: pointer;
            padding: 15px;
            font-size: 18px;
            font-weight: 500;
            text-transform: none;
        }
    }
`;

const Instructions = (props: {
    setInstructions: Function,
    setInitialCubeConfigs: Function,
    setIncrementAmount: Function,
}) => {

    return (
        <Container>
            <div className="Section">
                <Button1 setInstructions={props.setInstructions} setInitialCubeConfigs={props.setInitialCubeConfigs} setIncrementAmount={props.setIncrementAmount} />
                <Button2 setInstructions={props.setInstructions} setInitialCubeConfigs={props.setInitialCubeConfigs} setIncrementAmount={props.setIncrementAmount} />
                <Button3 setInstructions={props.setInstructions} setInitialCubeConfigs={props.setInitialCubeConfigs} setIncrementAmount={props.setIncrementAmount} />
                <Button4 setInstructions={props.setInstructions} setInitialCubeConfigs={props.setInitialCubeConfigs} setIncrementAmount={props.setIncrementAmount} />
                <Button10 setInstructions={props.setInstructions} setInitialCubeConfigs={props.setInitialCubeConfigs} setIncrementAmount={props.setIncrementAmount} />
                <Button11 setInstructions={props.setInstructions} setInitialCubeConfigs={props.setInitialCubeConfigs} setIncrementAmount={props.setIncrementAmount} />
                <p className={"Label"} style={{color: "rgb(63, 81, 181)"}}>
                    Scripts with Instructions
                </p>
            </div>
            <div className="Section">
                <Button5 setInstructions={props.setInstructions} setInitialCubeConfigs={props.setInitialCubeConfigs} setIncrementAmount={props.setIncrementAmount} />
                <Button6 setInstructions={props.setInstructions} setInitialCubeConfigs={props.setInitialCubeConfigs} setIncrementAmount={props.setIncrementAmount} />
                <Button7 setInstructions={props.setInstructions} setInitialCubeConfigs={props.setInitialCubeConfigs} setIncrementAmount={props.setIncrementAmount} />
                <Button8 setInstructions={props.setInstructions} setInitialCubeConfigs={props.setInitialCubeConfigs} setIncrementAmount={props.setIncrementAmount} />
                <p className={"Label"}>
                    Scripts with no Instructions
                </p>
            </div>
            {/* <Button9 setInstructions={props.setInstructions} setInitialCubeConfigs={props.setInitialCubeConfigs} setIncrementAmount={props.setIncrementAmount} /> */}
        </Container>
    )
}

export default Instructions; 