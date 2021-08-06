import { Vector3 } from "three"
import Button from '@material-ui/core/Button';

import { instructionType } from "../../Util/Types/types";
import {chairToTableLeft} from "./chairToTableLeft";
import {chairToTableRight} from "./chairToTableRight";
import {chairToTableMiddle} from "./chairToTableMiddle";
import {tableToCouch} from "./tableToCouch";

export const Button10 = (props: {
    setInstructions: Function,
    setInitialCubeConfigs: Function,
    intervalAmount: number,
}) => (
    <Button variant="outlined" color="primary" onClick={() => {
        props.setInitialCubeConfigs([
            // Chair left side
            {id: 1, initialPosition: new Vector3(0, 0, 0),  },
            {id: 2, initialPosition: new Vector3(0, 1, 0),  },            
            {id: 3, initialPosition: new Vector3(0, 2, 0),  },            
            {id: 4, initialPosition: new Vector3(0, 3, 0),  },            
            
            {id: 5, initialPosition: new Vector3(0, 1, 1),  },            
            {id: 6, initialPosition: new Vector3(0, 1, 2),  },            
            {id: 7, initialPosition: new Vector3(0, 0, 2),  },            


            // Chair right side
            {id: 8, initialPosition: new Vector3(2, 0, 0),  },
            {id: 9, initialPosition: new Vector3(2, 1, 0),  },            
            {id: 10, initialPosition: new Vector3(2, 2, 0),  },            
            {id: 11, initialPosition: new Vector3(2, 3, 0),  },            
            
            {id: 12, initialPosition: new Vector3(2, 1, 1),  },            
            {id: 13, initialPosition: new Vector3(2, 1, 2),  },            
            {id: 14, initialPosition: new Vector3(2, 0, 2),  },            

            // Chair middle
            {id: 15, initialPosition: new Vector3(1, 1, 0),  },            
            {id: 16, initialPosition: new Vector3(1, 2, 0),  },            
            {id: 17, initialPosition: new Vector3(1, 3, 0),  },            
            {id: 18, initialPosition: new Vector3(1, 1, 1),  },            
            {id: 19, initialPosition: new Vector3(1, 1, 2),  },            
            // {id: 20, initialPosition: new Vector3(1, 4, 0),  },            

        ])

        let instructions : instructionType[] = [];
        instructions = instructions.concat(chairToTableLeft(1500 + props.intervalAmount*instructions.length, props.intervalAmount));
        instructions = instructions.concat(chairToTableMiddle(1500 + props.intervalAmount*instructions.length, props.intervalAmount));
        instructions = instructions.concat(chairToTableRight(1500 + props.intervalAmount*instructions.length, props.intervalAmount));
        instructions = instructions.concat(tableToCouch(3000 + props.intervalAmount*instructions.length, props.intervalAmount));

        props.setInstructions(instructions);
    }}>
        Chair to Table to Couch
    </Button>
)

