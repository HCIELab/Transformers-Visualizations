import { Vector3 } from "three"

import Button from '@material-ui/core/Button';

const BUTTON_TITLE = "Walking";
const interval = 1000;

export const Button1 = (props: {
    setInstructions: Function,
    setInitialCubeConfigs: Function,
    setIncrementAmount: Function,
}) => (
    <Button variant="outlined" color="primary" onClick={() => {
        props.setIncrementAmount(0.15);
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
        ])
    }}>
        {BUTTON_TITLE}
    </Button>
)
