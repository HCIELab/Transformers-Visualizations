import { Vector3 } from "three"

export const Button7 = (props: {
    setInstructions: Function,
    setInitialCubeConfigs: Function,
    setIncrementAmount: Function,
}) => (
    <button onClick={() => {
        props.setIncrementAmount(0.1);
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
