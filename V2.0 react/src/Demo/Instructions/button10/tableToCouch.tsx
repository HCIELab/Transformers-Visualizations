import { instructionType } from "../../Util/Types/types";

export const tableToCouch = (startTime: number, interval: number) => {
    let count = 0;
    const instructions : instructionType[] = [];

    instructions.push({cubeID: 3, axis: "x", isCounterclockwise: true, timeToStart: startTime + interval*count})
    count += 1;
    instructions.push({cubeID: 3, axis: "x", isCounterclockwise: true, timeToStart: startTime + interval*count})
    count += 1;
    instructions.push({cubeID: 3, axis: "x", isCounterclockwise: true, timeToStart: startTime + interval*count})
    count += 1;
    instructions.push({cubeID: 16, axis: "x", isCounterclockwise: true, timeToStart: startTime + interval*count})
    count += 1;
    instructions.push({cubeID: 16, axis: "x", isCounterclockwise: true, timeToStart: startTime + interval*count})
    count += 1;
    instructions.push({cubeID: 10, axis: "x", isCounterclockwise: true, timeToStart: startTime + interval*count})
    count += 1;
    instructions.push({cubeID: 10, axis: "x", isCounterclockwise: true, timeToStart: startTime + interval*count})
    count += 1;
    instructions.push({cubeID: 10, axis: "x", isCounterclockwise: true, timeToStart: startTime + interval*count})
    count += 1;

    return instructions;
}