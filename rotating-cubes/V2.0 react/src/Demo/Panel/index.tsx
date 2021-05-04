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
    justify-content: center;
    align-items: center;

    button {
        margin: 4px 5px;
        cursor: pointer;
    }
    .Selected {
        border: 3px solid #f14b4b;
    }
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
                {/* TODO: implement x and y axis, for now they are disabled */}
                <button 
                    disabled 
                    onClick={() => props.setRAxis("x")}
                    className={props.rAxis === "x" ? "Selected" : ""}
                >
                    x
                </button>
                <button 
                    disabled 
                    onClick={() => props.setRAxis("y")}
                    className={props.rAxis === "y" ? "Selected" : ""}
                >
                    y
                </button>
                <button 
                    onClick={() => props.setRAxis("z")}
                    className={props.rAxis === "z" ? "Selected" : ""}
                >
                    z
                </button>
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