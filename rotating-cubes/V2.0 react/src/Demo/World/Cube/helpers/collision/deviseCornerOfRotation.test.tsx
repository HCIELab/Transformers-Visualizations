import { deviseCornerOfRotation } from "./deviseCornerOfRotation";

test('(counterclockwise, neighborOfRotation - top)', async () => {
    const isCounterclockwise = true;
    const neighborOfRotation = "TOP_NEIGHBOR";
    const cornerOfRotation = deviseCornerOfRotation(isCounterclockwise, neighborOfRotation)
    expect(cornerOfRotation).toBe("NorthEast");
})

test('(counterclockwise, neighborOfRotation - left)', async () => {
    const isCounterclockwise = true;
    const neighborOfRotation = "LEFT_NEIGHBOR";
    const cornerOfRotation = deviseCornerOfRotation(isCounterclockwise, neighborOfRotation)
    expect(cornerOfRotation).toBe("NorthWest");
})


test('(clockwise, neighborOfRotation - top)', async () => {
    const isCounterclockwise = false;
    const neighborOfRotation = "TOP_NEIGHBOR";
    const cornerOfRotation = deviseCornerOfRotation(isCounterclockwise, neighborOfRotation)
    expect(cornerOfRotation).toBe("NorthWest");
})

test('(clockwise, neighborOfRotation - right)', async () => {
    const isCounterclockwise = false;
    const neighborOfRotation = "RIGHT_NEIGHBOR";
    const cornerOfRotation = deviseCornerOfRotation(isCounterclockwise, neighborOfRotation)
    expect(cornerOfRotation).toBe("NorthEast");
})

