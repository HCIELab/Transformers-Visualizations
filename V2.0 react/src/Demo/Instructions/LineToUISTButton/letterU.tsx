import { instructionType } from "../../Util/Types/types";

export const letterU = (startTime: number, interval: number) => {
    let count = 0;
    const instructions : instructionType[] = [];

    for (let i = 0; i < 9; i+= 1) {
        instructions.push({cubeID: 5, axis: "z", isCounterclockwise: false, timeToStart: startTime + interval*count})
        count += 1;
    }

    for (let i = 0; i < 4; i+= 1) {
        instructions.push({cubeID: 14, axis: "z", isCounterclockwise: false, timeToStart: startTime + interval*count})
        count += 1;
    }
    for (let i = 0; i < 6; i+= 1) {
        instructions.push({cubeID: 15, axis: "z", isCounterclockwise: false, timeToStart: startTime + interval*count})
        count += 1;
    }
    for (let i = 0; i < 8; i+= 1) {
        instructions.push({cubeID: 16, axis: "z", isCounterclockwise: false, timeToStart: startTime + interval*count})
        count += 1;
    }

    for (let i = 0; i < 5; i+= 1) {
        instructions.push({cubeID: 17, axis: "z", isCounterclockwise: false, timeToStart: startTime + interval*count})
        count += 1;
    }
    for (let i = 0; i < 7; i+= 1) {
        instructions.push({cubeID: 18, axis: "z", isCounterclockwise: false, timeToStart: startTime + interval*count})
        count += 1;
    }
    for (let i = 0; i < 9; i+= 1) {
        instructions.push({cubeID: 19, axis: "z", isCounterclockwise: false, timeToStart: startTime + interval*count})
        count += 1;
    }
    for (let i = 0; i < 11; i+= 1) {
        instructions.push({cubeID: 20, axis: "z", isCounterclockwise: false, timeToStart: startTime + interval*count})
        count += 1;
    }


    return instructions;
}