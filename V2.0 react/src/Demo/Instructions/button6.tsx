import { Vector3 } from "three"

export const Button6 = (props: {
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
        props.setInstructions([])
    }}>
        Just 2 cubes
    </button>
)
