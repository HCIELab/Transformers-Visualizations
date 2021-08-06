import { Vector3 } from "three"
import Button from '@material-ui/core/Button';

const BUTTON_TITLE = "5x5x5 Cubes"

export const Button8 = (props: {
    setInstructions: Function,
    setInitialCubeConfigs: Function,
    setIncrementAmount: Function,
}) => (
    <Button variant="outlined" color="default" onClick={() => {
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

        props.setInitialCubeConfigs(foo)
        props.setInstructions([])
    }}>
        {BUTTON_TITLE}
    </Button>
)
