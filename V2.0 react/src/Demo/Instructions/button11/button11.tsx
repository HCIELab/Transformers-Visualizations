import { Vector3 } from "three"
import Button from '@material-ui/core/Button';

import { instructionType } from "../../Util/Types/types";
import {letterI} from "./letterI";
import {letterS} from "./letterS";
import {letterU} from "./letterU";
import {letterT} from "./letterT";

export const Button11 = (props: {
    setInstructions: Function,
    setInitialCubeConfigs: Function,
    setIncrementAmount: Function,
}) => (
    <Button variant="outlined" color="primary" onClick={() => {
        props.setInitialCubeConfigs([
            {id: 1, initialPosition: new Vector3(1-7, -2, 0), color: "#77410e"},
            {id: 2, initialPosition: new Vector3(2-7, -2, 0), color: "#77410e"},
            {id: 3, initialPosition: new Vector3(3-7, -2, 0), color: "#77410e"},
            {id: 4, initialPosition: new Vector3(4-7, -2, 0), color: "#77410e"},
            {id: 5, initialPosition: new Vector3(5-7, -2, 0), color: "#77410e"},
            {id: 6, initialPosition: new Vector3(6-7, -2, 0), color: "#77410e"},
            {id: 7, initialPosition: new Vector3(7-7, -2, 0), color: "#77410e"},
            {id: 8, initialPosition: new Vector3(8-7, -2, 0), color: "#77410e"},
            {id: 9, initialPosition: new Vector3(9-7, -2, 0), color: "#77410e"},
            {id: 10, initialPosition: new Vector3(10-7, -2, 0), color: "#77410e"},
            {id: 11, initialPosition: new Vector3(11-7, -2, 0), color: "#77410e"},
            {id: 12, initialPosition: new Vector3(12-7, -2, 0), color: "#77410e"},
            {id: 13, initialPosition: new Vector3(13-7, -2, 0), color: "#77410e"},

            {id: 13+1, initialPosition: new Vector3(1-7, -1, 0), color: "#77410e"},
            {id: 13+2, initialPosition: new Vector3(2-7, -1, 0), color: "#77410e"},
            {id: 13+3, initialPosition: new Vector3(3-7, -1, 0), color: "#77410e"},
            {id: 13+4, initialPosition: new Vector3(4-7, -1, 0), color: "#77410e"},
            {id: 13+5, initialPosition: new Vector3(5-7, -1, 0), color: "#77410e"},
            {id: 13+6, initialPosition: new Vector3(6-7, -1, 0), color: "#77410e"},
            {id: 13+7, initialPosition: new Vector3(7-7, -1, 0), color: "#77410e"},
            {id: 13+8, initialPosition: new Vector3(8-7, -1, 0), color: "#77410e"},
            {id: 13+9, initialPosition: new Vector3(9-7, -1, 0), color: "#77410e"},
            {id: 13+10, initialPosition: new Vector3(10-7, -1, 0), color: "#77410e"},
            {id: 13+11, initialPosition: new Vector3(11-7, -1, 0), color: "#77410e"},
            {id: 13+12, initialPosition: new Vector3(12-7, -1, 0), color: "#77410e"},
            {id: 13+13, initialPosition: new Vector3(13-7, -1, 0), color: "#77410e"},
            
            {id: 13*2+1, initialPosition: new Vector3(1-7, 0, 0), color: "#77410e"},
            {id: 13*2+2, initialPosition: new Vector3(2-7, 0, 0), color: "#77410e"},
            {id: 13*2+3, initialPosition: new Vector3(3-7, 0, 0), color: "#77410e"},
            {id: 13*2+4, initialPosition: new Vector3(4-7, 0, 0), color: "#77410e"},
            {id: 13*2+5, initialPosition: new Vector3(5-7, 0, 0), color: "#77410e"},
            {id: 13*2+6, initialPosition: new Vector3(6-7, 0, 0), color: "#77410e"},
            {id: 13*2+7, initialPosition: new Vector3(7-7, 0, 0), color: "#77410e"},
            {id: 13*2+8, initialPosition: new Vector3(8-7, 0, 0), color: "#77410e"},
            {id: 13*2+9, initialPosition: new Vector3(9-7, 0, 0), color: "#77410e"},
            {id: 13*2+10, initialPosition: new Vector3(10-7, 0, 0), color: "#77410e"},
            {id: 13*2+11, initialPosition: new Vector3(11-7, 0, 0), color: "#77410e"},
            {id: 13*2+12, initialPosition: new Vector3(12-7, 0, 0), color: "#77410e"},
            // {id: 13*2+13, initialPosition: new Vector3(13-7, 0, 0), color: "#77410e"},
        ])

        props.setIncrementAmount(0.6);
        // props.setIncrementAmount(1.5);

        let instructions : instructionType[] = [];
        // const interval = 200;
        const interval = 1000;
        instructions = instructions.concat(letterI(1500 + interval*instructions.length, interval));
        instructions = instructions.concat(letterS(1500 + interval*instructions.length, interval));
        instructions = instructions.concat(letterU(1500 + interval*instructions.length, interval));
        instructions = instructions.concat(letterT(1500 + interval*instructions.length, interval));

        props.setInstructions(instructions);
    }}>
        Line to UIST Letters
    </Button>
)
