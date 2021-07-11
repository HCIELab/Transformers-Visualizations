import { Vector3 } from "three"

export const Button4 = (props: {
    setInstructions: Function,
    setInitialCubeConfigs: Function,
    setIncrementAmount: Function,
}) => (
    <button onClick={() => {
        props.setIncrementAmount(0.1);
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