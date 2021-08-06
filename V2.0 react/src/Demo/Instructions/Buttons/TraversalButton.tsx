import { Vector3 } from "three"
import Button from '@material-ui/core/Button';

const BUTTON_TITLE = "Traversal";

export const TraversalButton = (props: {
    setInstructions: Function,
    setInitialCubeConfigs: Function,
    intervalAmount: number,
}) => (
    <Button variant="outlined" color="primary" onClick={() => {
        props.setInitialCubeConfigs([
            {id: 1, initialPosition: new Vector3(1, 0, 0),  },
            {id: 2, initialPosition: new Vector3(0, 0, 0),  },            
            {id: 3, initialPosition: new Vector3(0, 1, 0),  },            
        ])
        props.setInstructions([
            {
                cubeID: 3,
                axis: "z",
                isCounterclockwise: false,
                timeToStart: props.intervalAmount*1,
            },
            {
                cubeID: 3,
                axis: "z",
                isCounterclockwise: true,
                timeToStart: props.intervalAmount*2,
            },
            {
                cubeID: 3,
                axis: "z",
                isCounterclockwise: false,
                timeToStart: props.intervalAmount*3,
            },
            {
                cubeID: 3,
                axis: "z",
                isCounterclockwise: true,
                timeToStart: props.intervalAmount*4,
            },
        ])
    }}>
        {BUTTON_TITLE}
    </Button>
)
