import { Vector3 } from "three"

export const Button3 = (props: {
    setInstructions: Function,
    setInitialCubeConfigs: Function,
    setIncrementAmount: Function,
}) => (
    <button onClick={() => {
        props.setIncrementAmount(0.1);
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
