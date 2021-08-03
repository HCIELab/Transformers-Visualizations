import { Vector3 } from "three"

import Button from '@material-ui/core/Button';


const interval = 1000;

export const Button1 = (props: {
    setInstructions: Function,
    setInitialCubeConfigs: Function,
    setIncrementAmount: Function,
}) => (
    <Button variant="outlined" color="primary" onClick={() => {
        props.setIncrementAmount(0.1);
        props.setInitialCubeConfigs([
            {id: 1, initialPosition: new Vector3(1, 0, 0), color: "#77410e"},
            {id: 2, initialPosition: new Vector3(0, 0, 0), color: "#77410e"},            
        ])
        props.setInstructions([
            // Z Counterclockwise
            {
                cubeID: 1,
                axis: "z",
                isCounterclockwise: true,
                timeToStart: interval*1,
            },
            {
                cubeID: 1,
                axis: "z",
                isCounterclockwise: true,
                timeToStart: interval*2,
            },
            {
                cubeID: 1,
                axis: "z",
                isCounterclockwise: true,
                timeToStart: interval*3,
            },
            {
                cubeID: 1,
                axis: "z",
                isCounterclockwise: true,
                timeToStart: interval*4,
            },
            // Z Clockwise
            {
                cubeID: 1,
                axis: "z",
                isCounterclockwise: false,
                timeToStart: interval*5,
            },
            {
                cubeID: 1,
                axis: "z",
                isCounterclockwise: false,
                timeToStart: interval*6,
            },
            {
                cubeID: 1,
                axis: "z",
                isCounterclockwise: false,
                timeToStart: interval*7,
            },
            {
                cubeID: 1,
                axis: "z",
                isCounterclockwise: false,
                timeToStart: interval*8,
            },
            // Y Counterclockwise
            {
                cubeID: 1,
                axis: "y",
                isCounterclockwise: true,
                timeToStart: interval*9,
            },
            {
                cubeID: 1,
                axis: "y",
                isCounterclockwise: true,
                timeToStart: interval*10,
            },
            {
                cubeID: 1,
                axis: "y",
                isCounterclockwise: true,
                timeToStart: interval*11,
            },
            {
                cubeID: 1,
                axis: "y",
                isCounterclockwise: true,
                timeToStart: interval*12,
            },
            // Y Clockwise
            {
                cubeID: 1,
                axis: "y",
                isCounterclockwise: false,
                timeToStart: interval*13,
            },
            {
                cubeID: 1,
                axis: "y",
                isCounterclockwise: false,
                timeToStart: interval*14,
            },
            {
                cubeID: 1,
                axis: "y",
                isCounterclockwise: false,
                timeToStart: interval*15,
            },
            {
                cubeID: 1,
                axis: "y",
                isCounterclockwise: false,
                timeToStart: interval*16,
            },
            // X Counterclockwise
            {
                cubeID: 1,
                axis: "y",
                isCounterclockwise: false,
                timeToStart: interval*17,
            },
            {
                cubeID: 1,
                axis: "x",
                isCounterclockwise: true,
                timeToStart: interval*18,
            },
            {
                cubeID: 1,
                axis: "x",
                isCounterclockwise: true,
                timeToStart: interval*19,
            },
            {
                cubeID: 1,
                axis: "x",
                isCounterclockwise: true,
                timeToStart: interval*20,
            },
            {
                cubeID: 1,
                axis: "x",
                isCounterclockwise: true,
                timeToStart: interval*21,
            },
            // X Clockwise
            {
                cubeID: 1,
                axis: "x",
                isCounterclockwise: false,
                timeToStart: interval*22,
            },
            {
                cubeID: 1,
                axis: "x",
                isCounterclockwise: false,
                timeToStart: interval*23,
            },
            {
                cubeID: 1,
                axis: "x",
                isCounterclockwise: false,
                timeToStart: interval*24,
            },
            {
                cubeID: 1,
                axis: "x",
                isCounterclockwise: false,
                timeToStart: interval*25,
            },

        ])
    }}>
        Walking
    </Button>
)
