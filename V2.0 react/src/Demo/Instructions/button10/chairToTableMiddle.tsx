import { instructionType } from "../../Util/Types/types";

export const chairToTableMiddle = (startTime: number, interval: number) => {
    let count = 0;
    const instructions : instructionType[] = [];

    instructions.push({cubeID: 17, axis: "x", isCounterclockwise: true, timeToStart: startTime + interval*count})
    count += 1;
    instructions.push({cubeID: 17, axis: "x", isCounterclockwise: true, timeToStart: startTime + interval*count})
    count += 1;
    instructions.push({cubeID: 17, axis: "x", isCounterclockwise: true, timeToStart: startTime + interval*count})
    count += 1;
    instructions.push({cubeID: 17, axis: "x", isCounterclockwise: true, timeToStart: startTime + interval*count})
    count += 1;

    instructions.push({cubeID: 16, axis: "x", isCounterclockwise: false, timeToStart: startTime + interval*count})
    count += 1;
    instructions.push({cubeID: 16, axis: "x", isCounterclockwise: false, timeToStart: startTime + interval*count})
    count += 1;

    return instructions;
}