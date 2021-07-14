import { instructionType } from "../../Util/Types/types";

export const letterT = (startTime: number, interval: number) => {
    let count = 0;
    const instructions : instructionType[] = [];

    for (let i = 0; i < 9-1; i+= 1) {
        instructions.push({cubeID: 21, axis: "z", isCounterclockwise: true, timeToStart: startTime + interval*count})
        count += 1;
    }
    for (let i = 0; i < 8; i+= 1) {
        instructions.push({cubeID: 22, axis: "z", isCounterclockwise: true, timeToStart: startTime + interval*count})
        count += 1;
    }
    for (let i = 0; i < 8; i+= 1) {
        instructions.push({cubeID: 23, axis: "z", isCounterclockwise: true, timeToStart: startTime + interval*count})
        count += 1;
    }
    for (let i = 0; i < 8; i+= 1) {
        instructions.push({cubeID: 24, axis: "z", isCounterclockwise: true, timeToStart: startTime + interval*count})
        count += 1;
    }
    for (let i = 0; i < 7; i+= 1) {
        instructions.push({cubeID: 26, axis: "z", isCounterclockwise: true, timeToStart: startTime + interval*count})
        count += 1;
    }
    for (let i = 0; i < 5; i+= 1) {
        instructions.push({cubeID: 25, axis: "z", isCounterclockwise: true, timeToStart: startTime + interval*count})
        count += 1;
    }

    return instructions;
}