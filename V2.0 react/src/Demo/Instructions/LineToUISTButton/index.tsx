import { Vector3 } from "three"
import Button from '@material-ui/core/Button';

import { instructionType } from "../../Util/Types/types";
import {letterI} from "./letterI";
import {letterS} from "./letterS";
import {letterU} from "./letterU";
import {letterT} from "./letterT";


const BUTTON_TITLE = "Line to UIST Letters";

export const LineToUISTButton = (props: {
    setInstructions: Function,
    setInitialCubeConfigs: Function,
    setIncrementAmount: Function,
    setIntervalAmount: Function,
    intervalAmount: number,
}) => (
    <Button variant="outlined" color="primary" onClick={() => {
        props.setInitialCubeConfigs([
            {id: 1, initialPosition: new Vector3(1-7, -2, 0),  },
            {id: 2, initialPosition: new Vector3(2-7, -2, 0),  },
            {id: 3, initialPosition: new Vector3(3-7, -2, 0),  },
            {id: 4, initialPosition: new Vector3(4-7, -2, 0),  },
            {id: 5, initialPosition: new Vector3(5-7, -2, 0),  },
            {id: 6, initialPosition: new Vector3(6-7, -2, 0),  },
            {id: 7, initialPosition: new Vector3(7-7, -2, 0),  },
            {id: 8, initialPosition: new Vector3(8-7, -2, 0),  },
            {id: 9, initialPosition: new Vector3(9-7, -2, 0),  },
            {id: 10, initialPosition: new Vector3(10-7, -2, 0),  },
            {id: 11, initialPosition: new Vector3(11-7, -2, 0),  },
            {id: 12, initialPosition: new Vector3(12-7, -2, 0),  },
            {id: 13, initialPosition: new Vector3(13-7, -2, 0),  },

            {id: 13+1, initialPosition: new Vector3(1-7, -1, 0),  },
            {id: 13+2, initialPosition: new Vector3(2-7, -1, 0),  },
            {id: 13+3, initialPosition: new Vector3(3-7, -1, 0),  },
            {id: 13+4, initialPosition: new Vector3(4-7, -1, 0),  },
            {id: 13+5, initialPosition: new Vector3(5-7, -1, 0),  },
            {id: 13+6, initialPosition: new Vector3(6-7, -1, 0),  },
            {id: 13+7, initialPosition: new Vector3(7-7, -1, 0),  },
            {id: 13+8, initialPosition: new Vector3(8-7, -1, 0),  },
            {id: 13+9, initialPosition: new Vector3(9-7, -1, 0),  },
            {id: 13+10, initialPosition: new Vector3(10-7, -1, 0),  },
            {id: 13+11, initialPosition: new Vector3(11-7, -1, 0),  },
            {id: 13+12, initialPosition: new Vector3(12-7, -1, 0),  },
            {id: 13+13, initialPosition: new Vector3(13-7, -1, 0),  },
            
            {id: 13*2+1, initialPosition: new Vector3(1-7, 0, 0),  },
            {id: 13*2+2, initialPosition: new Vector3(2-7, 0, 0),  },
            {id: 13*2+3, initialPosition: new Vector3(3-7, 0, 0),  },
            {id: 13*2+4, initialPosition: new Vector3(4-7, 0, 0),  },
            {id: 13*2+5, initialPosition: new Vector3(5-7, 0, 0),  },
            {id: 13*2+6, initialPosition: new Vector3(6-7, 0, 0),  },
            {id: 13*2+7, initialPosition: new Vector3(7-7, 0, 0),  },
            {id: 13*2+8, initialPosition: new Vector3(8-7, 0, 0),  },
            {id: 13*2+9, initialPosition: new Vector3(9-7, 0, 0),  },
            {id: 13*2+10, initialPosition: new Vector3(10-7, 0, 0),  },
            {id: 13*2+11, initialPosition: new Vector3(11-7, 0, 0),  },
            {id: 13*2+12, initialPosition: new Vector3(12-7, 0, 0),  },
            // {id: 13*2+13, initialPosition: new Vector3(13-7, 0, 0),  },
        ])


        let instructions : instructionType[] = [];
        instructions = instructions.concat(letterI(1500 + props.intervalAmount*instructions.length, props.intervalAmount));
        instructions = instructions.concat(letterS(1500 + props.intervalAmount*instructions.length, props.intervalAmount));
        instructions = instructions.concat(letterU(1500 + props.intervalAmount*instructions.length, props.intervalAmount));
        instructions = instructions.concat(letterT(1500 + props.intervalAmount*instructions.length, props.intervalAmount));

        props.setInstructions(instructions);
    }}>
        {BUTTON_TITLE}
    </Button>
)

