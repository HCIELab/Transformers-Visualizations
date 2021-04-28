import React, { useState } from 'react';

import styled from 'styled-components';

const PivotContainer = styled.div<{corner: cornerType}>`
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
    }
`;

type cornerType = "NorthEast" | "SouthEast" | "SouthWest" | "NorthWest";

const Pivot = (props: {
}) => {

    const [corner, setCorner] = useState<cornerType>("NorthEast");
    const cornerClick = (corner: cornerType) => {
        setCorner(corner);
    }
    
    return (
        <PivotContainer corner={corner}>
            <p>
                Choose your pivot point here:
            </p>

            <div className="MannequinSquare">
                <CornerElement corner={"NorthEast"} handleClick={cornerClick}/>
                <CornerElement corner={"SouthEast"} handleClick={cornerClick}/>
                <CornerElement corner={"SouthWest"} handleClick={cornerClick}/>
                <CornerElement corner={"NorthWest"} handleClick={cornerClick}/>
            </div>

        </PivotContainer>
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

export default Pivot;