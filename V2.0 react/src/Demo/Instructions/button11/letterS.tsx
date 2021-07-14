import { instructionType } from "../../Util/Types/types";

export const letterS = (startTime: number, interval: number) => {
    let count = 0;
    const instructions : instructionType[] = [];

    for (let i = 0; i < 7; i+= 1) {
        instructions.push({cubeID: 13, axis: "z", isCounterclockwise: true, timeToStart: startTime + interval*count})
        count += 1;
    }
    for (let i = 0; i < 8; i+= 1) {
        instructions.push({cubeID: 12, axis: "z", isCounterclockwise: true, timeToStart: startTime + interval*count})
        count += 1;
    }

    for (let i = 0; i < 11; i+= 1) {
        instructions.push({cubeID: 11, axis: "z", isCounterclockwise: true, timeToStart: startTime + interval*count})
        count += 1;
    }
    for (let i = 0; i < 13; i+= 1) {
        instructions.push({cubeID: 10, axis: "z", isCounterclockwise: true, timeToStart: startTime + interval*count})
        count += 1;
    }
    for (let i = 0; i < 14; i+= 1) {
        instructions.push({cubeID: 9, axis: "z", isCounterclockwise: true, timeToStart: startTime + interval*count})
        count += 1;
    }


    for (let i = 0; i < 15; i+= 1) {
        instructions.push({cubeID: 8, axis: "z", isCounterclockwise: true, timeToStart: startTime + interval*count})
        count += 1;
    }
    for (let i = 0; i < 17; i+= 1) {
        instructions.push({cubeID: 7, axis: "z", isCounterclockwise: true, timeToStart: startTime + interval*count})
        count += 1;
    }
    for (let i = 0; i < 17; i+= 1) {
        instructions.push({cubeID: 6, axis: "z", isCounterclockwise: true, timeToStart: startTime + interval*count})
        count += 1;
    }
    for (let i = 0; i < 2; i+= 1) {
        instructions.push({cubeID: 7, axis: "z", isCounterclockwise: false, timeToStart: startTime + interval*count})
        count += 1;
    }


    return instructions;
}