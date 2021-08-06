import { Vector3 } from "three"

import Button from '@material-ui/core/Button';

const BUTTON_TITLE = "Walk in all Axes";

export const WalkInAllAxesButton = (props: {
    setInstructions: Function,
    setInitialCubeConfigs: Function,
    intervalAmount: number,
}) => (
    <Button variant="outlined" color="primary" onClick={() => {
        props.setInitialCubeConfigs([
            {id: 1, initialPosition: new Vector3(1, 0, 0),  },
            {id: 2, initialPosition: new Vector3(0, 0, 0),  },            
        ])
        props.setInstructions([
            // Z Counterclockwise
            {
                cubeID: 1,
                axis: "z",
                isCounterclockwise: true,
                timeToStart: props.intervalAmount*1,
            },
            {
                cubeID: 1,
                axis: "z",
                isCounterclockwise: true,
                timeToStart: props.intervalAmount*2,
            },
            {
                cubeID: 1,
                axis: "z",
                isCounterclockwise: true,
                timeToStart: props.intervalAmount*3,
            },
            {
                cubeID: 1,
                axis: "z",
                isCounterclockwise: true,
                timeToStart: props.intervalAmount*4,
            },
            // Z Clockwise
            {
                cubeID: 1,
                axis: "z",
                isCounterclockwise: false,
                timeToStart: props.intervalAmount*5,
            },
            {
                cubeID: 1,
                axis: "z",
                isCounterclockwise: false,
                timeToStart: props.intervalAmount*6,
            },
            {
                cubeID: 1,
                axis: "z",
                isCounterclockwise: false,
                timeToStart: props.intervalAmount*7,
            },
            {
                cubeID: 1,
                axis: "z",
                isCounterclockwise: false,
                timeToStart: props.intervalAmount*8,
            },
            // Y Counterclockwise
            {
                cubeID: 1,
                axis: "y",
                isCounterclockwise: true,
                timeToStart: props.intervalAmount*9,
            },
            {
                cubeID: 1,
                axis: "y",
                isCounterclockwise: true,
                timeToStart: props.intervalAmount*10,
            },
            {
                cubeID: 1,
                axis: "y",
                isCounterclockwise: true,
                timeToStart: props.intervalAmount*11,
            },
            {
                cubeID: 1,
                axis: "y",
                isCounterclockwise: true,
                timeToStart: props.intervalAmount*12,
            },
            // Y Clockwise
            {
                cubeID: 1,
                axis: "y",
                isCounterclockwise: false,
                timeToStart: props.intervalAmount*13,
            },
            {
                cubeID: 1,
                axis: "y",
                isCounterclockwise: false,
                timeToStart: props.intervalAmount*14,
            },
            {
                cubeID: 1,
                axis: "y",
                isCounterclockwise: false,
                timeToStart: props.intervalAmount*15,
            },
            {
                cubeID: 1,
                axis: "y",
                isCounterclockwise: false,
                timeToStart: props.intervalAmount*16,
            },
            // X Counterclockwise
            {
                cubeID: 1,
                axis: "y",
                isCounterclockwise: false,
                timeToStart: props.intervalAmount*17,
            },
            {
                cubeID: 1,
                axis: "x",
                isCounterclockwise: true,
                timeToStart: props.intervalAmount*18,
            },
            {
                cubeID: 1,
                axis: "x",
                isCounterclockwise: true,
                timeToStart: props.intervalAmount*19,
            },
            {
                cubeID: 1,
                axis: "x",
                isCounterclockwise: true,
                timeToStart: props.intervalAmount*20,
            },
            {
                cubeID: 1,
                axis: "x",
                isCounterclockwise: true,
                timeToStart: props.intervalAmount*21,
            },
            // X Clockwise
            {
                cubeID: 1,
                axis: "x",
                isCounterclockwise: false,
                timeToStart: props.intervalAmount*22,
            },
            {
                cubeID: 1,
                axis: "x",
                isCounterclockwise: false,
                timeToStart: props.intervalAmount*23,
            },
            {
                cubeID: 1,
                axis: "x",
                isCounterclockwise: false,
                timeToStart: props.intervalAmount*24,
            },
            {
                cubeID: 1,
                axis: "x",
                isCounterclockwise: false,
                timeToStart: props.intervalAmount*25,
            },

        ])
    }}>
        {BUTTON_TITLE}
    </Button>
)
