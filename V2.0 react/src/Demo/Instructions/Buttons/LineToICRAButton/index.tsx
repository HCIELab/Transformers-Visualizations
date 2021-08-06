import Button from '@material-ui/core/Button';

import { instructionType } from "../../../Util/Types/types";

import {initialPositions} from "./initialPositions";
import {letterR} from "./letterR";
import {letterA} from "./letterA";

const BUTTON_TITLE = "Line to ICRA";

export const LineToICRAButton = (props: {
    setInstructions: Function,
    setInitialCubeConfigs: Function,
    setIncrementAmount: Function,
    setIntervalAmount: Function,
    intervalAmount: number,
}) => (
    <Button variant="outlined" color="primary" onClick={() => {
        props.setInitialCubeConfigs(initialPositions())

        let instructions : instructionType[] = [];
        instructions = instructions.concat(letterR(1000 + props.intervalAmount*instructions.length, props.intervalAmount));
        instructions = instructions.concat(letterA(1000 + props.intervalAmount*instructions.length, props.intervalAmount));

        props.setInstructions(instructions);
    }}>
        {BUTTON_TITLE}
    </Button>
)



