import { Vector3 } from "three";
import { deviseCornerOfRotation } from "./deviseCornerOfRotation";

test('deviseCornerOfRotation (counterclockwise, neighborOfRotation - top)', async () => {
    const isCounterclockwise = true;
    const neighborOfRotation = "TOP_NEIGHBOR";
    const cornerOfRotation = deviseCornerOfRotation(isCounterclockwise, neighborOfRotation)
    expect(cornerOfRotation).toBe("NorthEast");
})

test('deviseCornerOfRotation (counterclockwise, neighborOfRotation - left)', async () => {
    const isCounterclockwise = true;
    const neighborOfRotation = "LEFT_NEIGHBOR";
    const cornerOfRotation = deviseCornerOfRotation(isCounterclockwise, neighborOfRotation)
    expect(cornerOfRotation).toBe("NorthWest");
})


test('deviseCornerOfRotation (clockwise, neighborOfRotation - top)', async () => {
    const isCounterclockwise = false;
    const neighborOfRotation = "TOP_NEIGHBOR";
    const cornerOfRotation = deviseCornerOfRotation(isCounterclockwise, neighborOfRotation)
    expect(cornerOfRotation).toBe("NorthWest");
})

test('deviseCornerOfRotation (clockwise, neighborOfRotation - right)', async () => {
    const isCounterclockwise = false;
    const neighborOfRotation = "RIGHT_NEIGHBOR";
    const cornerOfRotation = deviseCornerOfRotation(isCounterclockwise, neighborOfRotation)
    expect(cornerOfRotation).toBe("NorthEast");
})

