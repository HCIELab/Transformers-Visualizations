import { instructionType } from "../../Util/Types/types";

export const chairToTableRight = (startTime: number, interval: number) => {
    let count = 0;
    const instructions : instructionType[] = [];

    // Left Side
    instructions.push({
        cubeID: 11,
        axis: "x",
        isCounterclockwise: true,
        timeToStart: startTime + interval*count,
    })
    count += 1;
    instructions.push({
        cubeID: 11,
        axis: "x",
        isCounterclockwise: true,
        timeToStart: startTime + interval*1,
    })
    count += 1;
    instructions.push({
        cubeID: 11,
        axis: "x",
        isCounterclockwise: true,
        timeToStart: startTime + interval*2,
    })
    instructions.push({
        cubeID: 11,
        axis: "x",
        isCounterclockwise: true,
        timeToStart: startTime + interval*3,
    })
    count += 1;
    instructions.push({
        cubeID: 11,
        axis: "x",
        isCounterclockwise: true,
        timeToStart: startTime + interval*4,
    })
    count += 1;
    instructions.push({
        cubeID: 10,
        axis: "x",
        isCounterclockwise: false,
        timeToStart: startTime + interval*6,
    })
    count += 1;
    instructions.push({
        cubeID: 10,
        axis: "x",
        isCounterclockwise: false,
        timeToStart: startTime + interval*7,
    })
    count += 1;
    instructions.push({
        cubeID: 10,
        axis: "x",
        isCounterclockwise: false,
        timeToStart: startTime + interval*8,
    })
    count += 1;

    return instructions;
}