import { Vector3 } from "three"

export const Button8 = (props: {
    setInstructions: Function,
    setInitialCubeConfigs: Function,
    setIncrementAmount: Function,
}) => (
    <button onClick={() => {
        let foo = [];
        for (let a = 0; a < 5; a++) {
            for (let b = 0; b < 5; b++) {
                for (let c = 0; c < 5; c++) {
                    foo.push(
                        {id: a*100+b*10+c, initialPosition: new Vector3(a, b, c), color: "#77410e"}
                    )
                }
            }
        }

        props.setIncrementAmount(0.1);
        props.setInitialCubeConfigs(foo)
        props.setInstructions([])
    }}>
        5x5x5 cubes
    </button>
)
