import { Vector3 } from "three"
import Button from '@material-ui/core/Button';

const BUTTON_TITLE = "Traversal Z axis test";

export const TraversalTestZButton = (props: {
    setInstructions: Function,
    setInitialCubeConfigs: Function,
    intervalAmount: number,
}) => (
    <Button variant="outlined" color="primary" onClick={() => {
        props.setInitialCubeConfigs([
            {id: 1, initialPosition: new Vector3(1, 0, 0),  },
            {id: 2, initialPosition: new Vector3(0, 0, 0),  },            
            {id: 3, initialPosition: new Vector3(0, 1, 0),  },         
            {id: 4, initialPosition: new Vector3(-1, 0, 0),  },         
            {id: 5, initialPosition: new Vector3(-1, 1, 0),  },         
            {id: 6, initialPosition: new Vector3(-1, 2, 0),  },         
            {id: 7, initialPosition: new Vector3(-1, 3, 0),  },         
            {id: 8, initialPosition: new Vector3(0, 3, 0),  },         
            {id: 9, initialPosition: new Vector3(1, 3, 0),  },         
            {id: 10, initialPosition: new Vector3(2, 3, 0),  },         
            {id: 11, initialPosition: new Vector3(2, 2, 0),  },         
            {id: 12, initialPosition: new Vector3(2, 1, 0),  },         
            {id: 13, initialPosition: new Vector3(2, 0, 0),  },         
               
        ])
        props.setInstructions([
            {
                cubeID: 3,
                axis: "z",
                isCounterclockwise: true,
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
                isCounterclockwise: true,
                timeToStart: props.intervalAmount*3,
            },
            {
                cubeID: 3,
                axis: "z",
                isCounterclockwise: true,
                timeToStart: props.intervalAmount*4,
            },


            {
                cubeID: 3,
                axis: "z",
                isCounterclockwise: false,
                timeToStart: props.intervalAmount*5,
            },
            {
                cubeID: 3,
                axis: "z",
                isCounterclockwise: false,
                timeToStart: props.intervalAmount*6,
            },
            {
                cubeID: 3,
                axis: "z",
                isCounterclockwise: false,
                timeToStart: props.intervalAmount*7,
            },
            {
                cubeID: 3,
                axis: "z",
                isCounterclockwise: false,
                timeToStart: props.intervalAmount*8,
            },
        ])
    }}>
        {BUTTON_TITLE}
    </Button>
)
