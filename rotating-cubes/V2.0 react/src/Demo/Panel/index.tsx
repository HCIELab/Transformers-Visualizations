import React from 'react';

import styled from 'styled-components';
import { axisType } from '../Util/Types/types';

// import PivotChooser from "./pivotchooser";
import {Clockwise180Icon, Clockwise90Icon, Counterclockwise90Icon, Counterclockwise180Icon} from "./arrowIcons";

const PanelContainer = styled.div`
    width: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    /* border: 10px solid lime; */

    button {
        margin: 4px 5px;
        cursor: pointer;
    }
    .Selected {
        border: 3px solid #f14b4b;
    }
`;

const AxisButton = styled.button`
    color: ${props => props.color};
    font-weight: 900;
    background-color: #252525;
`;

const Panel = (props: {
    axisOfRotationWorld: axisType,
    setAxisOfRotationWorld: Function,
    rDisplacement: number,
    setRDisplacement: Function,
}) => {
    
    const pi = Math.PI;

    return (
        <PanelContainer>
                        
            {/* <PivotChooser
                corner={props.corner}
                setCorner={props.setCorner}
                axisOfRotationWorld={props.axisOfRotationWorld}
            /> */}

            <div>
                <AxisButton
                    color={"#df5900"} 
                    onClick={() => props.setAxisOfRotationWorld("x")}
                    className={props.axisOfRotationWorld === "x" ? "Selected" : ""}
                >
                    X
                </AxisButton>
                <AxisButton
                    color={"#07e000"} 
                    onClick={() => props.setAxisOfRotationWorld("y")}
                    className={props.axisOfRotationWorld === "y" ? "Selected" : ""}
                >
                    Y
                </AxisButton>
                <AxisButton
                    color={"#0099ff"} 
                    onClick={() => props.setAxisOfRotationWorld("z")}
                    className={props.axisOfRotationWorld === "z" ? "Selected" : ""}
                >
                    Z
                </AxisButton>
            </div>
            
            <div>
                <button 
                    onClick={() => props.setRDisplacement(-pi)} 
                    className={props.rDisplacement === -pi ? "Selected" : ""}
                >
                    <Clockwise180Icon/>
                </button>
                <button 
                    onClick={() => props.setRDisplacement(-pi/2)}
                    className={props.rDisplacement === -pi/2 ? "Selected" : ""}
                >
                    <Clockwise90Icon/>
                </button>
                <button 
                    onClick={() => props.setRDisplacement(pi/2)}
                    className={props.rDisplacement === pi/2 ? "Selected" : ""}
                >
                    <Counterclockwise90Icon/>
                </button>
                <button 
                    onClick={() => props.setRDisplacement(pi)}
                    className={props.rDisplacement === pi ? "Selected" : ""}
                >
                    <Counterclockwise180Icon/>
                </button>
            </div>
            {/* <div>
                <p>Current axisOfRotationWorld: {props.axisOfRotationWorld}</p>
                <p>Current rDisplacement: {props.rDisplacement}</p>
            </div> */}
        </PanelContainer>
    )
}


export default Panel;