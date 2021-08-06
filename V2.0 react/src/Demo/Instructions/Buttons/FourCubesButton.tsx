import { Vector3 } from "three"
import Button from '@material-ui/core/Button';

const BUTTON_TITLE = "4 Cubes"

export const FourCubesButton = (props: {
    setInstructions: Function,
    setInitialCubeConfigs: Function,
}) => (
    <Button variant="outlined" color="default" onClick={() => {
        props.setInitialCubeConfigs([
            {id: 1, initialPosition: new Vector3(0, 0, 0),  },
            {id: 2, initialPosition: new Vector3(1, 0, 0),  },
            {id: 3, initialPosition: new Vector3(2, 0, 0),  },
            {id: 4, initialPosition: new Vector3(3, 0, 0),  },
        ])
        props.setInstructions([])
    }}>
        {BUTTON_TITLE}
    </Button>
)
