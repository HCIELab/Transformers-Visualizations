import { instructionType } from "../../../Util/Types/types";

export const letters = (startTime: number, interval: number) => {
    let count = 0;
    const instructions : instructionType[] = [];

    // Letter M
    for (let i = 0; i < 4; i+= 1) {
        instructions.push({cubeID: 30, axis: "z", isCounterclockwise: false, timeToStart: startTime + interval*count})
        count += 1;
    }
    for (let i = 0; i < 6; i+= 1) {
        instructions.push({cubeID: 31, axis: "z", isCounterclockwise: false, timeToStart: startTime + interval*count})
        count += 1;
    }
    for (let i = 0; i < 8; i+= 1) {
        instructions.push({cubeID: 32, axis: "z", isCounterclockwise: false, timeToStart: startTime + interval*count})
        count += 1;
    }
    for (let i = 0; i < 10; i+= 1) {
        instructions.push({cubeID: 33, axis: "z", isCounterclockwise: false, timeToStart: startTime + interval*count})
        count += 1;
    }
    for (let i = 0; i < 12; i+= 1) {
        instructions.push({cubeID: 34, axis: "z", isCounterclockwise: false, timeToStart: startTime + interval*count})
        count += 1;
    }


    for (let i = 0; i < 14+1; i+= 1) {
        instructions.push({cubeID: 35, axis: "z", isCounterclockwise: false, timeToStart: startTime + interval*count})
        count += 1;
    }
    for (let i = 0; i < 16+1; i+= 1) {
        instructions.push({cubeID: 36, axis: "z", isCounterclockwise: false, timeToStart: startTime + interval*count})
        count += 1;
    }
    for (let i = 0; i < 12; i+= 1) {
        instructions.push({cubeID: 20, axis: "z", isCounterclockwise: false, timeToStart: startTime + interval*count})
        count += 1;
    }
    for (let i = 0; i < 14; i+= 1) {
        instructions.push({cubeID: 21, axis: "z", isCounterclockwise: false, timeToStart: startTime + interval*count})
        count += 1;
    }
    for (let i = 0; i < 13; i+= 1) {
        instructions.push({cubeID: 22, axis: "z", isCounterclockwise: false, timeToStart: startTime + interval*count})
        count += 1;
    }

    for (let i = 0; i < 15; i+= 1) {
        instructions.push({cubeID: 23, axis: "z", isCounterclockwise: true, timeToStart: startTime + interval*count})
        count += 1;
    }
    for (let i = 0; i < 14; i+= 1) {
        instructions.push({cubeID: 24, axis: "z", isCounterclockwise: true, timeToStart: startTime + interval*count})
        count += 1;
    }
    for (let i = 0; i < 14; i+= 1) {
        instructions.push({cubeID: 25, axis: "z", isCounterclockwise: true, timeToStart: startTime + interval*count})
        count += 1;
    }
    for (let i = 0; i < 14; i+= 1) {
        instructions.push({cubeID: 26, axis: "z", isCounterclockwise: true, timeToStart: startTime + interval*count})
        count += 1;
    }
    for (let i = 0; i < 14; i+= 1) {
        instructions.push({cubeID: 27, axis: "z", isCounterclockwise: true, timeToStart: startTime + interval*count})
        count += 1;
    }


    // Letter I
    for (let i = 0; i < 8; i+= 1) {
        instructions.push({cubeID: 28, axis: "z", isCounterclockwise: true, timeToStart: startTime + interval*count})
        count += 1;
    }
    for (let i = 0; i < 6; i+= 1) {
        instructions.push({cubeID: 29, axis: "z", isCounterclockwise: true, timeToStart: startTime + interval*count})
        count += 1;
    }
    for (let i = 0; i < 6; i+= 1) {
        instructions.push({cubeID: 19, axis: "z", isCounterclockwise: true, timeToStart: startTime + interval*count})
        count += 1;
    }
    for (let i = 0; i < 8; i+= 1) {
        instructions.push({cubeID: 18, axis: "z", isCounterclockwise: true, timeToStart: startTime + interval*count})
        count += 1;
    }
    for (let i = 0; i < 10; i+= 1) {
        instructions.push({cubeID: 17, axis: "z", isCounterclockwise: true, timeToStart: startTime + interval*count})
        count += 1;
    }

    // Letter T
    for (let i = 0; i < 5; i+= 1) {
        instructions.push({cubeID: 16, axis: "z", isCounterclockwise: true, timeToStart: startTime + interval*count})
        count += 1;
    }
    for (let i = 0; i < 7; i+= 1) {
        instructions.push({cubeID: 15, axis: "z", isCounterclockwise: true, timeToStart: startTime + interval*count})
        count += 1;
    }
    for (let i = 0; i < 9; i+= 1) {
        instructions.push({cubeID: 14, axis: "z", isCounterclockwise: true, timeToStart: startTime + interval*count})
        count += 1;
    }
    for (let i = 0; i < 11; i+= 1) {
        instructions.push({cubeID: 13, axis: "z", isCounterclockwise: true, timeToStart: startTime + interval*count})
        count += 1;
    }
    for (let i = 0; i < 13; i+= 1) {
        instructions.push({cubeID: 12, axis: "z", isCounterclockwise: true, timeToStart: startTime + interval*count})
        count += 1;
    }
    for (let i = 0; i < 15+1; i+= 1) {
        instructions.push({cubeID: 11, axis: "z", isCounterclockwise: true, timeToStart: startTime + interval*count})
        count += 1;
    }
    for (let i = 0; i < 16-1; i+= 1) {
        instructions.push({cubeID: 10, axis: "z", isCounterclockwise: true, timeToStart: startTime + interval*count})
        count += 1;
    }



    return instructions;
}