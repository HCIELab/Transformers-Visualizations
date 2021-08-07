import { instructionType } from "../../../Util/Types/types";

export const letterC = (startTime: number, interval: number) => {
    let count = 0;
    const instructions : instructionType[] = [];

    for (let i = 0; i < 10; i+= 1) {
        instructions.push({cubeID: 18, axis: "z", isCounterclockwise: false, timeToStart: startTime + interval*count})
        count += 1;
    }
    for (let i = 0; i < 11; i+= 1) {
        instructions.push({cubeID: 47, axis: "z", isCounterclockwise: false, timeToStart: startTime + interval*count})
        count += 1;
    }
    for (let i = 0; i < 9; i+= 1) {
        instructions.push({cubeID: 33, axis: "z", isCounterclockwise: false, timeToStart: startTime + interval*count})
        count += 1;
    }
    for (let i = 0; i < 9; i+= 1) {
        instructions.push({cubeID: 19, axis: "z", isCounterclockwise: false, timeToStart: startTime + interval*count})
        count += 1;
    }

    for (let i = 0; i < 12; i+= 1) {
        instructions.push({cubeID: 48, axis: "z", isCounterclockwise: false, timeToStart: startTime + interval*count})
        count += 1;
    }
    for (let i = 0; i < 12; i+= 1) {
        instructions.push({cubeID: 34, axis: "z", isCounterclockwise: false, timeToStart: startTime + interval*count})
        count += 1;
    }
    for (let i = 0; i < 13; i+= 1) {
        instructions.push({cubeID: 20, axis: "z", isCounterclockwise: false, timeToStart: startTime + interval*count})
        count += 1;
    }

    for (let i = 0; i < 17; i+= 1) {
        instructions.push({cubeID: 49, axis: "z", isCounterclockwise: false, timeToStart: startTime + interval*count})
        count += 1;
    }
    for (let i = 0; i < 17; i+= 1) {
        instructions.push({cubeID: 35, axis: "z", isCounterclockwise: false, timeToStart: startTime + interval*count})
        count += 1;
    }

    return instructions;
}