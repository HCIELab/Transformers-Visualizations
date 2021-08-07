import { instructionType } from "../../../Util/Types/types";

export const letterI = (startTime: number, interval: number) => {
    let count = 0;
    const instructions : instructionType[] = [];

    for (let i = 0; i < 9; i+= 1) {
        instructions.push({cubeID: 21, axis: "z", isCounterclockwise: false, timeToStart: startTime + interval*count})
        count += 1;
    }
    for (let i = 0; i < 12; i+= 1) {
        instructions.push({cubeID: 50, axis: "z", isCounterclockwise: false, timeToStart: startTime + interval*count})
        count += 1;
    }
    for (let i = 0; i < 12; i+= 1) {
        instructions.push({cubeID: 36, axis: "z", isCounterclockwise: false, timeToStart: startTime + interval*count})
        count += 1;
    }
    for (let i = 0; i < 13; i+= 1) {
        instructions.push({cubeID: 22, axis: "z", isCounterclockwise: false, timeToStart: startTime + interval*count})
        count += 1;
    }

    for (let i = 0; i < 15; i+= 1) {
        instructions.push({cubeID: 23, axis: "z", isCounterclockwise: false, timeToStart: startTime + interval*count})
        count += 1;
    }

    return instructions;
}