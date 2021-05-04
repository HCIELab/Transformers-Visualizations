import React from 'react';

import styled from 'styled-components';

import {axisType, cornerType} from "../Types/types";

const PivotChooserContainer = styled.div<{corner: cornerType}>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;

    .MannequinSquare {
        position: relative;
        width: 80px;
        height: 80px;
        background-color: #eeeeee;
        border: 3px solid black;

        .Corner {
            position: absolute;
            background-color: #e9e9e9;
            border: 1px solid black;
            width: 20px;
            height: 20px;
            cursor: pointer;
            border-radius: 100%;

            font-weight: 600;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .Corner:hover {
            border: 2px solid red;
        }
        .NorthEast { 
            top: -10px;
            right: -10px;
        }
        .SouthEast { 
            bottom: -10px;
            right: -10px;
        }
        .SouthWest { 
            bottom: -10px;
            left: -10px;
        }
        .NorthWest { 
            top: -10px;
            left: -10px;
        }
        ${props => `
            .${props.corner} {
                background-color: #f58787;
                border: 2px solid red;
            }
        `}

    }
`;


const PivotChooser = (props: {
    corner: cornerType,
    setCorner: Function,
    rAxis: axisType,
}) => {
    
    return (
        <PivotChooserContainer corner={props.corner}>
            <p>
                Choose your pivot point here:
            </p>

            <div className="MannequinSquare">
                <CornerElement corner={"NorthEast"} handleClick={props.setCorner}/>
                <CornerElement corner={"SouthEast"} handleClick={props.setCorner}/>
                <CornerElement corner={"SouthWest"} handleClick={props.setCorner}/>
                <CornerElement corner={"NorthWest"} handleClick={props.setCorner}/>
            </div>

        </PivotChooserContainer>
    )
}


const CornerElement = (props: {
    corner: cornerType,
    handleClick: Function,
}) => {
    // TODO: make this work for all x/y/z, not just the z axis
    let label;
    switch(props.corner) {
        case "NorthEast":
            label = 1;
            break;
        case "SouthEast":
            label = 2;
            break;
        case "SouthWest":
            label = 3;
            break;
        default:
        // case "NorthWest":
            label = 4;
            break;
    }


    return (
        <div 
            className={`${props.corner} Corner`}
            onClick={() => props.handleClick(props.corner)}
        >
            {label}
        </div>
    )
} 

export default PivotChooser;