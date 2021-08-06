import { Vector3 } from "three"
import Button from '@material-ui/core/Button';

const BUTTON_TITLE = "Just 1 cube";

export const Button5 = (props: {
    setInstructions: Function,
    setInitialCubeConfigs: Function,
}) => (
    <Button variant="outlined" color="default" onClick={() => {
        props.setInitialCubeConfigs([
            {id: 1, initialPosition: new Vector3(0, 0, 0),  },
        ])
        props.setInstructions([
        ])
    }}>
        {BUTTON_TITLE}
    </Button>
)
