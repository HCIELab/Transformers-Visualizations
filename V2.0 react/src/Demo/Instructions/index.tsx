import React from 'react';
import styled from 'styled-components';

import { Vector3 } from 'three';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    padding: 5px 0;

    .ScriptsHeading {
        font-weight: 600;
        padding: 0px 5px;
    }
    button {
        margin: 0 5px;
        cursor: pointer;
    }
`;

const Instructions = (props: {
    setInstructions: Function,
    setInitialCubeConfigs: Function,
}) => {

    const button1 = (
        <button onClick={() => {
            props.setInitialCubeConfigs([
                {id: 1, initialPosition: new Vector3(1, 0, 0), color: "#77410e"},
                {id: 2, initialPosition: new Vector3(0, 0, 0), color: "#77410e"},            
            ])
            props.setInstructions([
                {
                    cubeID: 1,
                    axis: "z",
                    isCounterclockwise: true,
                    timeToStart: 1000,
                },
        
                {
                    cubeID: 1,
                    axis: "z",
                    isCounterclockwise: true,
                    timeToStart: 3000,
                },
        
                {
                    cubeID: 1,
                    axis: "z",
                    isCounterclockwise: true,
                    timeToStart: 5000,
                },
        
                {
                    cubeID: 1,
                    axis: "z",
                    isCounterclockwise: true,
                    timeToStart: 7000,
                },
            ])
        }}>
            Walking (in the Z axis)
        </button>
    )

    const button2 = (
        <button onClick={() => {
            props.setInitialCubeConfigs([
                {id: 1, initialPosition: new Vector3(1, 0, 0), color: "#77410e"},
                {id: 2, initialPosition: new Vector3(0, 0, 0), color: "#77410e"},            
            ])
            props.setInstructions([
                {
                    cubeID: 1,
                    axis: "z",
                    isCounterclockwise: true,
                    timeToStart: 1000,
                },
                {
                    cubeID: 1,
                    axis: "z",
                    isCounterclockwise: false,
                    timeToStart: 3000,
                },
            ])
        }}>
            Pivot back and forth (in the Z axis)
        </button>
    )

    const button3 = (
        <button onClick={() => {
            props.setInitialCubeConfigs([
                {id: 1, initialPosition: new Vector3(0, 0, 0), color: "#77410e"},            
                {id: 2, initialPosition: new Vector3(1, 0, 0), color: "#77410e"},
            ])
            props.setInstructions([
                {
                    cubeID: 1,
                    axis: "z",
                    isCounterclockwise: false,
                    timeToStart: 1000,
                },
                {
                    cubeID: 1,
                    axis: "x",
                    isCounterclockwise: false,
                    timeToStart: 3000,
                },
                {
                    cubeID: 1,
                    axis: "y",
                    isCounterclockwise: false,
                    timeToStart: 5000,
                },
            ])
        }}>
            Pivot multi-axis (away, up, towards)
        </button>
    )


    const button4 = (
        <button onClick={() => {
            props.setInitialCubeConfigs([
                {id: 1, initialPosition: new Vector3(1, 0, 0), color: "#77410e"},
                {id: 2, initialPosition: new Vector3(0, 0, 0), color: "#77410e"},            
                {id: 3, initialPosition: new Vector3(0, 1, 0), color: "#77410e"},            
            ])
            props.setInstructions([
                {
                    cubeID: 3,
                    axis: "z",
                    isCounterclockwise: false,
                    timeToStart: 1000,
                },
                {
                    cubeID: 3,
                    axis: "z",
                    isCounterclockwise: true,
                    timeToStart: 3000,
                },
                {
                    cubeID: 3,
                    axis: "z",
                    isCounterclockwise: false,
                    timeToStart: 5000,
                },
                {
                    cubeID: 3,
                    axis: "z",
                    isCounterclockwise: true,
                    timeToStart: 7000,
                },
            ])
        }}>
            Traversal
        </button>
    )

    const button5 = (
        <button onClick={() => {
            props.setInitialCubeConfigs([
                {id: 1, initialPosition: new Vector3(0, 0, 0), color: "#77410e"},
            ])
            props.setInstructions([
            ])
        }}>
            Just 1 cube
        </button>
    )

    const button6 = (
        <button onClick={() => {
            props.setInitialCubeConfigs([
                {id: 1, initialPosition: new Vector3(0, 0, 0), color: "#77410e"},
                {id: 2, initialPosition: new Vector3(1, 0, 0), color: "#77410e"},
            ])
            props.setInstructions([])
        }}>
            Just 2 cubes
        </button>
    )

    const button7 = (
        <button onClick={() => {
            props.setInitialCubeConfigs([
                {id: 1, initialPosition: new Vector3(0, 0, 0), color: "#77410e"},
                {id: 2, initialPosition: new Vector3(1, 0, 0), color: "#77410e"},
                {id: 3, initialPosition: new Vector3(2, 0, 0), color: "#77410e"},
                {id: 4, initialPosition: new Vector3(3, 0, 0), color: "#77410e"},
            ])
            props.setInstructions([])
        }}>
            Just 4 cubes
        </button>
    )

    const button8 = (
        <button onClick={() => {
            let foo = [];
            for (let a = 0; a < 5; a++) {
                for (let b = 0; b < 5; b++) {
                    for (let c = 0; c < 5; c++) {
                        foo.push(
                            {id: a*100+b*10+c, initialPosition: new Vector3(a, b, c), color: "#77410e"}
                        )
                    }
                }
            }
            props.setInitialCubeConfigs(foo)
            props.setInstructions([])
        }}>
            5x5x5 cubes
        </button>
    )

    const button9 = (
        <button onClick={() => {
            let foo = [];
            for (let a = 0; a < 10; a++) {
                for (let b = 0; b < 10; b++) {
                    for (let c = 0; c < 10; c++) {
                        foo.push(
                            {id: a*100+b*10+c, initialPosition: new Vector3(a, b, c), color: "#77410e"}
                        )
                    }
                }
            }
            props.setInitialCubeConfigs(foo)
            props.setInstructions([])
        }}>
            10x10x10 cubes (may crash)
        </button>
    )


    return (
        <Container>
            <div className={"ScriptsHeading"}>
                Starter Scripts:
            </div>

            <div>
                With Instructions
                {button1}
                {button2}
                {button3}
                {button4}
            </div>
            <div>
                No Instructions
                {button5}
                {button6}
                {button7}
                {button8}
                {button9}
            </div>
        </Container>
    )
}

export default Instructions; 