import { instructionType } from "../../../Util/Types/types";

export const letterR = (startTime: number, interval: number) => {
    let count = 0;
    const instructions : instructionType[] = [];

    for (let i = 0; i < 10; i+= 1) {
        instructions.push({cubeID: 42, axis: "z", isCounterclockwise: false, timeToStart: startTime + interval*count})
        count += 1;
    }
    for (let i = 0; i < 9; i+= 1) {
        instructions.push({cubeID: 28, axis: "z", isCounterclockwise: false, timeToStart: startTime + interval*count})
        count += 1;
    }
    for (let i = 0; i < 9; i+= 1) {
        instructions.push({cubeID: 14, axis: "z", isCounterclockwise: false, timeToStart: startTime + interval*count})
        count += 1;
    }
    for (let i = 0; i < 12; i+= 1) {
        instructions.push({cubeID: 43, axis: "z", isCounterclockwise: false, timeToStart: startTime + interval*count})
        count += 1;
    }
    for (let i = 0; i < 12; i+= 1) {
        instructions.push({cubeID: 29, axis: "z", isCounterclockwise: false, timeToStart: startTime + interval*count})
        count += 1;
    }
    for (let i = 0; i < 16; i+= 1) {
        instructions.push({cubeID: 15, axis: "z", isCounterclockwise: false, timeToStart: startTime + interval*count})
        count += 1;
    }
    for (let i = 0; i < 18; i+= 1) {
        instructions.push({cubeID: 44, axis: "z", isCounterclockwise: false, timeToStart: startTime + interval*count})
        count += 1;
    }
    for (let i = 0; i < 19; i+= 1) {
        instructions.push({cubeID: 30, axis: "z", isCounterclockwise: false, timeToStart: startTime + interval*count})
        count += 1;
    }
    for (let i = 0; i < 18; i+= 1) {
        instructions.push({cubeID: 16, axis: "z", isCounterclockwise: false, timeToStart: startTime + interval*count})
        count += 1;
    }

    for (let i = 0; i < 18; i+= 1) {
        instructions.push({cubeID: 45, axis: "z", isCounterclockwise: true, timeToStart: startTime + interval*count})
        count += 1;
    }

    return instructions;
}