import React from 'react';

import styled from 'styled-components';
import { axisType, cornerType } from '../Types/types';

import PivotChooser from "./pivotchooser";

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
                {/* <button onClick={() => props.setRAxis("x")}>x</button>
                <button onClick={() => props.setRAxis("y")}>y</button> */}
                <button onClick={() => props.setRAxis("z")}>z</button>
            </div>
            <div>
                <button onClick={() => props.setRDisplacement(-pi)}>-pi</button>
                <button onClick={() => props.setRDisplacement(-pi/2)}>-pi/2</button>
                <button onClick={() => props.setRDisplacement(pi/2)}>pi/2</button>
                <button onClick={() => props.setRDisplacement(pi)}>pi</button>
            </div>
            <div>
                <p>Current rAxis: {props.rAxis}</p>
                <p>Current rDisplacement: {props.rDisplacement}</p>
            </div>
        </PanelContainer>
    )
}


export default Panel;