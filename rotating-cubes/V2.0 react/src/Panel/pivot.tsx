import React from 'react';

import styled from 'styled-components';

const PivotContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;

    .MannequinSquare {
        width: 100px;
        height: 100px;
        background-color: #eeeeee;
        border: 5px solid black;
    }
`;

const Pivot = (props: {
}) => {
    
    return (
        <PivotContainer>
            <p>
                Choose your pivot point here:
            </p>

            <div className="MannequinSquare"></div>

        </PivotContainer>
    )
}


export default Pivot;