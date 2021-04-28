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
        width: 100px;
        height: 100px;
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
                <div className="NorthEast Corner" onClick={() => cornerClick("NorthEast")}></div>
                <div className="SouthEast Corner" onClick={() => cornerClick("SouthEast")}></div>
                <div className="SouthWest Corner" onClick={() => cornerClick("SouthWest")}></div>
                <div className="NorthWest Corner" onClick={() => cornerClick("NorthWest")}></div>
            </div>

        </PivotContainer>
    )
}


export default Pivot;