import React from 'react';

import styled from 'styled-components';

import Pivot from "./pivot";

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
    rAxis: "x" | "y" | "z",
    rDisplacement: number,
    setRAxis: Function,
    setRDisplacement: Function,
}) => {
    
    const pi = Math.PI;

    return (
        <PanelContainer>
            
            <Pivot/>

            Buttons (only change these if cubes are not currently rotating)
            <div>
                <button onClick={() => props.setRAxis("x")}>x</button>
                <button onClick={() => props.setRAxis("y")}>y</button>
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