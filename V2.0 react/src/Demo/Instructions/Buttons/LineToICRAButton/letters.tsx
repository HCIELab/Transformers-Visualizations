import { instructionType } from "../../../Util/Types/types";

export const letters = (startTime: number, interval: number) => {
    let count = 0;
    const instructions : instructionType[] = [];

    // Letter A
    for (let i = 0; i < 3+2; i+= 1) {
        instructions.push({cubeID: 41, axis: "z", isCounterclockwise: true, timeToStart: startTime + interval*count})
        count += 1;
    }
    for (let i = 0; i < 4; i+= 1) {
        instructions.push({cubeID: 27, axis: "z", isCounterclockwise: true, timeToStart: startTime + interval*count})
        count += 1;
    }
    for (let i = 0; i < 6; i+= 1) {
        instructions.push({cubeID: 40, axis: "z", isCounterclockwise: true, timeToStart: startTime + interval*count})
        count += 1;
    }
    for (let i = 0; i < 7; i+= 1) {
        instructions.push({cubeID: 26, axis: "z", isCounterclockwise: true, timeToStart: startTime + interval*count})
        count += 1;
    }
    for (let i = 0; i < 10; i+= 1) {
        instructions.push({cubeID: 53, axis: "z", isCounterclockwise: true, timeToStart: startTime + interval*count})
        count += 1;
    }

    for (let i = 0; i < 9; i+= 1) {
        instructions.push({cubeID: 39, axis: "z", isCounterclockwise: true, timeToStart: startTime + interval*count})
        count += 1;
    }
    for (let i = 0; i < 7; i+= 1) {
        instructions.push({cubeID: 25, axis: "z", isCounterclockwise: true, timeToStart: startTime + interval*count})
        count += 1;
    }

    for (let i = 0; i < 6; i+= 1) {
        instructions.push({cubeID: 52, axis: "z", isCounterclockwise: true, timeToStart: startTime + interval*count})
        count += 1;
    }
    for (let i = 0; i < 6; i+= 1) {
        instructions.push({cubeID: 38, axis: "z", isCounterclockwise: true, timeToStart: startTime + interval*count})
        count += 1;
    }
    for (let i = 0; i < 7; i+= 1) {
        instructions.push({cubeID: 24, axis: "z", isCounterclockwise: true, timeToStart: startTime + interval*count})
        count += 1;
    }
    for (let i = 0; i < 10; i+= 1) {
        instructions.push({cubeID: 51, axis: "z", isCounterclockwise: true, timeToStart: startTime + interval*count})
        count += 1;
    }
    for (let i = 0; i < 10; i+= 1) {
        instructions.push({cubeID: 37, axis: "z", isCounterclockwise: true, timeToStart: startTime + interval*count})
        count += 1;
    }



    // letter R
    for (let i = 0; i < 18; i+= 1) {
        instructions.push({cubeID: 23, axis: "z", isCounterclockwise: true, timeToStart: startTime + interval*count})
        count += 1;
    }


    return instructions;
}