import { instructionType } from "../../../Util/Types/types";

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

    instructions.push({cubeID: 8, axis: "z", isCounterclockwise: true, timeToStart: startTime + interval*count})
    count += 1;
    instructions.push({cubeID: 8, axis: "z", isCounterclockwise: true, timeToStart: startTime + interval*count})
    count += 1;

    instructions.push({cubeID: 11, axis: "z", isCounterclockwise: true, timeToStart: startTime + interval*count})
    count += 1;
    instructions.push({cubeID: 11, axis: "z", isCounterclockwise: true, timeToStart: startTime + interval*count})
    count += 1;
    instructions.push({cubeID: 11, axis: "y", isCounterclockwise: true, timeToStart: startTime + interval*count})
    count += 1;
    instructions.push({cubeID: 11, axis: "y", isCounterclockwise: true, timeToStart: startTime + interval*count})
    count += 1;

    instructions.push({cubeID: 14, axis: "z", isCounterclockwise: true, timeToStart: startTime + interval*count})
    count += 1;
    instructions.push({cubeID: 14, axis: "y", isCounterclockwise: true, timeToStart: startTime + interval*count})
    count += 1;
    instructions.push({cubeID: 14, axis: "x", isCounterclockwise: true, timeToStart: startTime + interval*count})
    count += 1;

    instructions.push({cubeID: 17, axis: "z", isCounterclockwise: true, timeToStart: startTime + interval*count})
    count += 1;
    instructions.push({cubeID: 17, axis: "z", isCounterclockwise: true, timeToStart: startTime + interval*count})
    count += 1;
    instructions.push({cubeID: 17, axis: "y", isCounterclockwise: true, timeToStart: startTime + interval*count})
    count += 1;

    instructions.push({cubeID: 4, axis: "z", isCounterclockwise: true, timeToStart: startTime + interval*count})
    count += 1;
    instructions.push({cubeID: 4, axis: "z", isCounterclockwise: true, timeToStart: startTime + interval*count})
    count += 1;
    instructions.push({cubeID: 4, axis: "z", isCounterclockwise: true, timeToStart: startTime + interval*count})
    count += 1;

    instructions.push({cubeID: 14, axis: "z", isCounterclockwise: true, timeToStart: startTime + interval*count})
    count += 1;
    instructions.push({cubeID: 14, axis: "z", isCounterclockwise: true, timeToStart: startTime + interval*count})
    count += 1;
    instructions.push({cubeID: 4, axis: "y", isCounterclockwise: true, timeToStart: startTime + interval*count})
    count += 1;
    instructions.push({cubeID: 4, axis: "y", isCounterclockwise: true, timeToStart: startTime + interval*count})
    count += 1;

    instructions.push({cubeID: 13, axis: "y", isCounterclockwise: true, timeToStart: startTime + interval*count})
    count += 1;
    instructions.push({cubeID: 13, axis: "y", isCounterclockwise: true, timeToStart: startTime + interval*count})
    count += 1;
    instructions.push({cubeID: 19, axis: "y", isCounterclockwise: true, timeToStart: startTime + interval*count})
    count += 1;
    instructions.push({cubeID: 19, axis: "y", isCounterclockwise: true, timeToStart: startTime + interval*count})
    count += 1;
    instructions.push({cubeID: 19, axis: "y", isCounterclockwise: true, timeToStart: startTime + interval*count})
    count += 1;
    instructions.push({cubeID: 19, axis: "x", isCounterclockwise: true, timeToStart: startTime + interval*count})
    count += 1;
    instructions.push({cubeID: 19, axis: "x", isCounterclockwise: true, timeToStart: startTime + interval*count})
    count += 1;

    instructions.push({cubeID: 7, axis: "x", isCounterclockwise: true, timeToStart: startTime + interval*count})
    count += 1;

    instructions.push({cubeID: 6, axis: "y", isCounterclockwise: true, timeToStart: startTime + interval*count})
    count += 1;
    instructions.push({cubeID: 6, axis: "y", isCounterclockwise: true, timeToStart: startTime + interval*count})
    count += 1;
    instructions.push({cubeID: 6, axis: "y", isCounterclockwise: true, timeToStart: startTime + interval*count})
    count += 1;
    instructions.push({cubeID: 6, axis: "y", isCounterclockwise: true, timeToStart: startTime + interval*count})
    count += 1;
    instructions.push({cubeID: 6, axis: "x", isCounterclockwise: true, timeToStart: startTime + interval*count})
    count += 1;


    return instructions;
}