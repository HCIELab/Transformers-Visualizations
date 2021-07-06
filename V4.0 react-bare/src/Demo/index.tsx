import React from 'react';

import styled from 'styled-components';

import World from "./World";

const DemoContainer = styled.div`
    width: 100%;
    height: 100%;
    overflow: auto;
    border: 25px solid #000000;
    background-color: #f0f0f0;

`;

const Demo = () => {
    
    return (
        <DemoContainer>
            <World/>
        </DemoContainer>
    )
}


export default Demo;