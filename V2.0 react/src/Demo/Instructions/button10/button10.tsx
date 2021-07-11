import { Vector3 } from "three"
import { instructionType } from "../../Util/Types/types";
import {chairToTableLeft} from "./chairToTableLeft";
import {chairToTableRight} from "./chairToTableRight";

export const Button10 = (props: {
    setInstructions: Function,
    setInitialCubeConfigs: Function,
    setIncrementAmount: Function,
}) => (
    <button onClick={() => {
        props.setIncrementAmount(0.3);
        props.setInitialCubeConfigs([
            // Chair left side
            {id: 1, initialPosition: new Vector3(0, 0, 0), color: "#77410e"},
            {id: 2, initialPosition: new Vector3(0, 1, 0), color: "#77410e"},            
            {id: 3, initialPosition: new Vector3(0, 2, 0), color: "#77410e"},            
            {id: 4, initialPosition: new Vector3(0, 3, 0), color: "#77410e"},            
            
            {id: 5, initialPosition: new Vector3(0, 1, 1), color: "#77410e"},            
            {id: 6, initialPosition: new Vector3(0, 1, 2), color: "#77410e"},            
            {id: 7, initialPosition: new Vector3(0, 0, 2), color: "#77410e"},            


            // Chair right side
            {id: 8, initialPosition: new Vector3(2, 0, 0), color: "#77410e"},
            {id: 9, initialPosition: new Vector3(2, 1, 0), color: "#77410e"},            
            {id: 10, initialPosition: new Vector3(2, 2, 0), color: "#77410e"},            
            {id: 11, initialPosition: new Vector3(2, 3, 0), color: "#77410e"},            
            
            {id: 12, initialPosition: new Vector3(2, 1, 1), color: "#77410e"},            
            {id: 13, initialPosition: new Vector3(2, 1, 2), color: "#77410e"},            
            {id: 14, initialPosition: new Vector3(2, 0, 2), color: "#77410e"},            

            // Chair middle
            {id: 15, initialPosition: new Vector3(1, 1, 0), color: "#77410e"},            
            {id: 16, initialPosition: new Vector3(1, 2, 0), color: "#77410e"},            
            {id: 17, initialPosition: new Vector3(1, 3, 0), color: "#77410e"},            
            {id: 18, initialPosition: new Vector3(1, 1, 1), color: "#77410e"},            
            {id: 19, initialPosition: new Vector3(1, 1, 2), color: "#77410e"},            

        ])

        let instructions : instructionType[] = [];
        instructions = instructions.concat(chairToTableLeft(1000, 750));
        instructions = instructions.concat(chairToTableRight(1000 + 750*9, 750));
        props.setInstructions(instructions);
        console.log("****************");
        console.log(instructions);
    }}>
        Chair to Table to Couch
    </button>
)
