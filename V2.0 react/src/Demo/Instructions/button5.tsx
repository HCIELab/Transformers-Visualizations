import { Vector3 } from "three"

export const Button5 = (props: {
    setInstructions: Function,
    setInitialCubeConfigs: Function,
    setIncrementAmount: Function,
}) => (
    <button onClick={() => {
        props.setIncrementAmount(0.1);
        props.setInitialCubeConfigs([
            {id: 1, initialPosition: new Vector3(0, 0, 0), color: "#77410e"},
        ])
        props.setInstructions([
        ])
    }}>
        Just 1 cube
    </button>
)
