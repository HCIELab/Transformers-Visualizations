import { Vector3 } from "three"
import Button from '@material-ui/core/Button';

const BUTTON_TITLE = "2 Cubes";

export const Button6 = (props: {
    setInstructions: Function,
    setInitialCubeConfigs: Function,
    setIncrementAmount: Function,
}) => (
    <Button variant="outlined" color="default" onClick={() => {
        props.setInitialCubeConfigs([
            {id: 1, initialPosition: new Vector3(0, 0, 0), color: "#77410e"},
            {id: 2, initialPosition: new Vector3(1, 0, 0), color: "#77410e"},
        ])
        props.setInstructions([])
    }}>
        {BUTTON_TITLE}
    </Button>
)
