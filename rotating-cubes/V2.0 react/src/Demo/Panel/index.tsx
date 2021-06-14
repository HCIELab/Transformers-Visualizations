import React from 'react';

import styled from 'styled-components';
import { axisType, cornerType } from '../Types/types';

import PivotChooser from "./pivotchooser";
import {Clockwise180Icon, Clockwise90Icon, Counterclockwise90Icon, Counterclockwise180Icon} from "./arrowIcons";

const PanelContainer = styled.div`
    width: 100%;
    height: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;

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
    rAxis: axisType,
    setRAxis: Function,
    rDisplacement: number,
    setRDisplacement: Function,
    corner: cornerType,
    setCorner: Function,
}) => {
    
    const pi = Math.PI;

    return (
        <PanelContainer>
                        
            <PivotChooser
                corner={props.corner}
                setCorner={props.setCorner}
                rAxis={props.rAxis}
            />

            <div>
                <AxisButton
                    color={"#df5900"} 
                    onClick={() => props.setRAxis("x")}
                    className={props.rAxis === "x" ? "Selected" : ""}
                >
                    X
                </AxisButton>
                <AxisButton
                    color={"#07e000"} 
                    onClick={() => props.setRAxis("y")}
                    className={props.rAxis === "y" ? "Selected" : ""}
                >
                    Y
                </AxisButton>
                <AxisButton
                    color={"#0099ff"} 
                    onClick={() => props.setRAxis("z")}
                    className={props.rAxis === "z" ? "Selected" : ""}
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
                <p>Current rAxis: {props.rAxis}</p>
                <p>Current rDisplacement: {props.rDisplacement}</p>
            </div> */}
        </PanelContainer>
    )
}


export default Panel;