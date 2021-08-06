import { instructionType } from "../../../Util/Types/types";

export const letters = (startTime: number, interval: number) => {
    let count = 0;
    const instructions : instructionType[] = [];

    // Letter A
    for (let i = 0; i < 1; i+= 1) {
        instructions.push({cubeID: 0, axis: "z", isCounterclockwise: false, timeToStart: startTime + interval*count})
        count += 1;
    }



    return instructions;
}