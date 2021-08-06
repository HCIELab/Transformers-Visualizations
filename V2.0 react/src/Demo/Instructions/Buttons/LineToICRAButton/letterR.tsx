import { instructionType } from "../../../Util/Types/types";

export const letterR = (startTime: number, interval: number) => {
    let count = 0;
    const instructions : instructionType[] = [];

    for (let i = 0; i < 10; i+= 1) {
        instructions.push({cubeID: 42, axis: "z", isCounterclockwise: true, timeToStart: startTime + interval*count})
        count += 1;
    }

    return instructions;
}