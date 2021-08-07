import Button from '@material-ui/core/Button';

import { instructionType } from "../../../Util/Types/types";

import {initialPositions} from "./initialPositions";
import {letters} from "./letters";

const BUTTON_TITLE = "Line to MIT";

export const LineToMITButton = (props: {
    setInstructions: Function,
    setInitialCubeConfigs: Function,
    setIncrementAmount: Function,
    setIntervalAmount: Function,
    intervalAmount: number,
}) => (
    <Button variant="outlined" color="primary" onClick={() => {
        props.setInitialCubeConfigs(initialPositions())

        let instructions : instructionType[] = [];
        instructions = instructions.concat(letters(1000 + props.intervalAmount*instructions.length, props.intervalAmount));

        props.setInstructions(instructions);
    }}>
        {BUTTON_TITLE}
    </Button>
)



