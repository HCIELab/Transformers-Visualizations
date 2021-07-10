import { Vector3 } from "three"

export const Button10 = (props: {
    setInstructions: Function,
    setInitialCubeConfigs: Function,
}) => (
    <button onClick={() => {
        props.setInitialCubeConfigs([
            {id: 1, initialPosition: new Vector3(1, 0, 0), color: "#77410e"},
            {id: 2, initialPosition: new Vector3(0, 0, 0), color: "#77410e"},            
        ])
        props.setInstructions([
        ])
    }}>
        Chair to Table to Couch
    </button>
)
