import { instructionType } from "../../../Util/Types/types";

export const letterI = (startTime: number, interval: number) => {
    let count = 0;
    const instructions : instructionType[] = [];

    for (let i = 0; i < 10; i+= 1) {
        instructions.push({cubeID: 21, axis: "z", isCounterclockwise: false, timeToStart: startTime + interval*count})
        count += 1;
    }

    return instructions;
}