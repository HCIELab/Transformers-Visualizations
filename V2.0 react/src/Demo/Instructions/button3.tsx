import { Vector3 } from "three"
import Button from '@material-ui/core/Button';

const BUTTON_TITLE = "Pivot Multi-Axis";

export const Button3 = (props: {
    setInstructions: Function,
    setInitialCubeConfigs: Function,
    setIncrementAmount: Function,
}) => (
    <Button variant="outlined" color="primary" onClick={() => {
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
        {BUTTON_TITLE}
    </Button>
)
