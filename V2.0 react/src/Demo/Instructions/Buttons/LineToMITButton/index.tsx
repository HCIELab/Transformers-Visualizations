import { Vector3 } from "three"
import Button from '@material-ui/core/Button';

import { initialCubeConfigType, instructionType } from "../../../Util/Types/types";



const BUTTON_TITLE = "Line to MIT";

export const LineToMITButton = (props: {
    setInstructions: Function,
    setInitialCubeConfigs: Function,
    setIncrementAmount: Function,
    setIntervalAmount: Function,
    intervalAmount: number,
}) => (
    <Button variant="outlined" color="primary" onClick={() => {
        props.setInitialCubeConfigs(generateInitialCubeConfigs())

        let instructions : instructionType[] = [];
        // instructions = instructions.concat(letterI(1500 + props.intervalAmount*instructions.length, props.intervalAmount));

        props.setInstructions(instructions);
    }}>
        {BUTTON_TITLE}
    </Button>
)

const generateInitialCubeConfigs = () : initialCubeConfigType[] => {
    const result : initialCubeConfigType[] = [];

    const NUM_CUBES = 37;
    const width = 10;
    const height = 4;
    for (let r = 0; r < height; r += 1) {
        for (let c = 0; c < width; c += 1) {
            if (r*width + c < NUM_CUBES) {
                result.push(
                    {id: r*width + c, initialPosition: new Vector3(c - Math.round(width/2), -1*r, 0)}
                )
            }
        }        
    }
    return result;
}