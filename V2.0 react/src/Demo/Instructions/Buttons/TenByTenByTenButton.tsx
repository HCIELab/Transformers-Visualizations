import { Vector3 } from "three"

const BUTTON_TITLE = "10x10x10 Cubes (may crash)"

export const TenByTenByTenButton = (props: {
    setInstructions: Function,
    setInitialCubeConfigs: Function,
}) => (
    <button onClick={() => {
        let foo = [];
        for (let a = 0; a < 10; a++) {
            for (let b = 0; b < 10; b++) {
                for (let c = 0; c < 10; c++) {
                    foo.push(
                        {id: a*100+b*10+c, initialPosition: new Vector3(a, b, c),  }
                    )
                }
            }
        }

        props.setInitialCubeConfigs(foo)
        props.setInstructions([])
    }}>
        {BUTTON_TITLE}
    </button>
)
