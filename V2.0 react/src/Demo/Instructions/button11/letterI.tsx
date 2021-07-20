import { instructionType } from "../../Util/Types/types";

export const letterI = (startTime: number, interval: number) => {
    let count = 0;
    const instructions : instructionType[] = [];

    for (let i = 0; i < 7; i+= 1) {
        instructions.push({cubeID: 1, axis: "z", isCounterclockwise: false, timeToStart: startTime + interval*count})
        count += 1;
    }

    for (let i = 0; i < 8; i+= 1) {
        instructions.push({cubeID: 2, axis: "z", isCounterclockwise: false, timeToStart: startTime + interval*count})
        count += 1;
    }

    for (let i = 0; i < 10; i+= 1) {
        instructions.push({cubeID: 3, axis: "z", isCounterclockwise: false, timeToStart: startTime + interval*count})
        count += 1;
    }

    for (let i = 0; i < 12; i+= 1) {
        instructions.push({cubeID: 4, axis: "z", isCounterclockwise: false, timeToStart: startTime + interval*count})
        count += 1;
    }

    return instructions;
}