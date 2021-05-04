import React from 'react';

import styled from 'styled-components';

import {axisType, cornerType, edgeType} from "../Types/types";

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
            background-color: teal;
            opacity: 0.5;
            width: 20px;
            height: 20px;
            cursor: pointer;
            border-radius: 100%;
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
                background-color: red;
            }
        `}

        
        .Edge {
            position: absolute;
            font-weight: 600;
        }
        .North {
            top: -20px;
            left: 33px;
        }
        .East {
            right: -15px;
            top: 25px;
        }
        .South {
            left: 33px;
            bottom: -20px;
        }
        .West {
            left: -15px;
            top: 25px;
        }

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

                <EdgeNumberLabelElement edge={"North"} rAxis={props.rAxis} />
                <EdgeNumberLabelElement edge={"East"} rAxis={props.rAxis} />
                <EdgeNumberLabelElement edge={"South"} rAxis={props.rAxis} />
                <EdgeNumberLabelElement edge={"West"} rAxis={props.rAxis} />
            </div>

        </PivotChooserContainer>
    )
}


const CornerElement = (props: {
    corner: cornerType,
    handleClick: Function,
}) => {
    return (
        <div 
            className={`${props.corner} Corner`}
            onClick={() => props.handleClick(props.corner)}
        />
    )
} 

const EdgeNumberLabelElement = (props: {
    edge: edgeType,
    rAxis: axisType,
}) => {
    // TODO: make this work for all x/y/z, not just the z axis
    let label;
    switch(props.edge) {
        case "North":
            label = 1;
            break;
        case "East":
            label = 2;
            break;
        case "South":
            label = 3;
            break;
        default:
        // case "West":
            label = 4;
            break;
    }

    return (
        <div
            className={`${props.edge} Edge`}
        >
            {label}
        </div>
    )
}

export default PivotChooser;