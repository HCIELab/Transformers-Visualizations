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
// import {Button12} from "./button12";
// import {Button13} from "./button13";
// import {Button14} from "./button14";
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
}) => {

    return (
        <Container>
            <h2>Pre-defined Scripts </h2>
            <div className="Section">
                <Button1 {...props} />
                <Button2 {...props} />
                <Button3 {...props} />
                <Button4 {...props} />
                <Button10 {...props} />
                <Button11 {...props} />
                {/* <Button12 {...props} />
                <Button13 {...props} />
                <Button14 {...props}*/}
                <WalkInAllAxesButton {...props} />
                <p className={"Label"} style={{color: "rgb(63, 81, 181)"}}>
                    Scripts with Instructions
                </p>
            </div>
            <div className="Section">
                <Button5 {...props} />
                <Button6 {...props} />
                <Button7 {...props} />
                <Button8 {...props} />
                <p className={"Label"}>
                    Scripts with no Instructions
                </p>
            </div>
            {/* <Button9 {...props}*/}
        </Container>
    )
}

export default Instructions; 