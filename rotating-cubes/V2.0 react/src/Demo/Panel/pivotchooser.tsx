import React from 'react';

import styled from 'styled-components';

import {axisType, cornerType} from "../Types/types";
import {numbers} from "../Numbering/numbers";

const PivotChooserContainer = styled.div<{corner: cornerType}>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
        margin: 0;
    }
    .Note {
        font-size: 12px;
        color: gray;
        padding-bottom: 10px;
    }
    .Instructions {
        font-size: 20px;
    }

    .MannequinSquare {
        margin: 20px;
        position: relative;
        width: 80px;
        height: 80px;
        background-color: #e8f9ff;
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
            <p className="Note">
                (notes here)
            </p>
            <p className="Instructions">
                Choose your pivot point here:
            </p>

            <div className="MannequinSquare">
                <CornerElement corner={"NorthEast"} handleClick={props.setCorner} rAxis={props.rAxis}/>
                <CornerElement corner={"SouthEast"} handleClick={props.setCorner} rAxis={props.rAxis}/>
                <CornerElement corner={"SouthWest"} handleClick={props.setCorner} rAxis={props.rAxis}/>
                <CornerElement corner={"NorthWest"} handleClick={props.setCorner} rAxis={props.rAxis}/>
            </div>

        </PivotChooserContainer>
    )
}


const CornerElement = (props: {
    corner: cornerType,
    handleClick: Function,
    rAxis: axisType,
}) => {
    let label;
    switch(props.rAxis) {
        case "z":
            switch(props.corner) {
                case "NorthEast":
                    label = numbers.z.NorthEast;
                    break;
                case "SouthEast":
                    label = numbers.z.SouthEast;
                    break;
                case "SouthWest":
                    label = numbers.z.SouthWest;
                    break;
                // case "NorthWest":
                default:
                    label = numbers.z.NorthWest;
                    break;
            }
            break;
        case "x":
            switch(props.corner) {
                case "NorthEast":
                    label = numbers.x.NorthEast;
                    break;
                case "SouthEast":
                    label = numbers.x.SouthEast;
                    break;
                case "SouthWest":
                    label = numbers.x.SouthWest;
                    break;
                // case "NorthWest":
                default:
                    label = numbers.x.NorthWest;
                    break;
            }
            break;
        // case "y":
        default:
            switch(props.corner) {
                case "NorthEast":
                    label = numbers.y.NorthEast;
                    break;
                case "SouthEast":
                    label = numbers.y.SouthEast;
                    break;
                case "SouthWest":
                    label = numbers.y.SouthWest;
                    break;
                // case "NorthWest":
                default:
                    label = numbers.y.NorthWest;
                    break;
            }
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