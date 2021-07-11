import { instructionType } from "../../Util/Types/types";

export const chairToTableRight = (startTime: number, interval: number) => {
    let count = 0;
    const instructions : instructionType[] = [];

    // Left Side
    instructions.push({cubeID: 11, axis: "x", isCounterclockwise: true, timeToStart: startTime + interval*count})
    count += 1;
    instructions.push({cubeID: 11, axis: "x", isCounterclockwise: true, timeToStart: startTime + interval*count})
    count += 1;
    instructions.push({cubeID: 11, axis: "x", isCounterclockwise: true, timeToStart: startTime + interval*count})
    count += 1;
    instructions.push({cubeID: 11, axis: "x", isCounterclockwise: true, timeToStart: startTime + interval*count})
    count += 1;
    instructions.push({cubeID: 11, axis: "x", isCounterclockwise: true, timeToStart: startTime + interval*count})
    count += 1;
    instructions.push({cubeID: 10, axis: "x", isCounterclockwise: false, timeToStart: startTime + interval*count})
    count += 1;
    instructions.push({cubeID: 10, axis: "x", isCounterclockwise: false, timeToStart: startTime + interval*count})
    count += 1;
    instructions.push({cubeID: 10, axis: "x", isCounterclockwise: false, timeToStart: startTime + interval*count})
    count += 1;

    return instructions;
}