import React from 'react';

import styled from 'styled-components';

import World from "./World";

const DemoContainer = styled.div`
    width: 100%;
    height: 100%;
    overflow: auto;
    border: 25px solid #ffffff;

    .Inner {
        width: 100%;
        height: 100%;
        border: 1px solid white;
        background-color: #f0f0f0;
        box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
        padding: 20px;
    }
`;

const Demo = () => {
    
    return (
        <DemoContainer>
            <div className="Inner">
                <World/>
            </div>
        </DemoContainer>
    )
}


export default Demo;