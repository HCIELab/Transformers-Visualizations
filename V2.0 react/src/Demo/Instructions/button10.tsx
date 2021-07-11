import { Vector3 } from "three"

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
        props.setInstructions([
            {
                cubeID: 4,
                axis: "x",
                isCounterclockwise: true,
                timeToStart: 1000,
            },
            {
                cubeID: 4,
                axis: "x",
                isCounterclockwise: true,
                timeToStart: 2000,
            },
            {
                cubeID: 4,
                axis: "x",
                isCounterclockwise: true,
                timeToStart: 3000,
            },
            {
                cubeID: 4,
                axis: "x",
                isCounterclockwise: true,
                timeToStart: 4000,
            },
            {
                cubeID: 4,
                axis: "x",
                isCounterclockwise: true,
                timeToStart: 5000,
            },

        ])
    }}>
        Chair to Table to Couch
    </button>
)
