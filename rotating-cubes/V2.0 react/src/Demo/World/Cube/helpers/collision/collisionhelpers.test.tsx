import { deviseCornerOfRotation } from "./deviseCornerOfRotation";

test('deviseCornerOfRotation (spinAmount - 0, neighborOfRotation - top, counterclockwise)', async () => {
    const isCounterclockwise = true;
    const neighborOfRotation = "TOP_NEIGHBOR";
    const spinAmount = 0;
    const cornerOfRotation = deviseCornerOfRotation(isCounterclockwise, neighborOfRotation, spinAmount)
    expect(cornerOfRotation).toBe("NorthEast");
})

test('deviseCornerOfRotation (spinAmount - pi/2, neighborOfRotation - top, counterclockwise)', async () => {
    const isCounterclockwise = true;
    const neighborOfRotation = "TOP_NEIGHBOR";
    const spinAmount = Math.PI/2;
    const cornerOfRotation = deviseCornerOfRotation(isCounterclockwise, neighborOfRotation, spinAmount)
    expect(cornerOfRotation).toBe("SouthEast");
})

test('deviseCornerOfRotation (spinAmount - pi, neighborOfRotation - top, counterclockwise)', async () => {
    const isCounterclockwise = true;
    const neighborOfRotation = "TOP_NEIGHBOR";
    const spinAmount = Math.PI;
    const cornerOfRotation = deviseCornerOfRotation(isCounterclockwise, neighborOfRotation, spinAmount)
    expect(cornerOfRotation).toBe("SouthWest");
})

test('deviseCornerOfRotation (spinAmount - 3*pi/2, neighborOfRotation - top, counterclockwise)', async () => {
    const isCounterclockwise = true;
    const neighborOfRotation = "TOP_NEIGHBOR";
    const spinAmount = 3*Math.PI/2;
    const cornerOfRotation = deviseCornerOfRotation(isCounterclockwise, neighborOfRotation, spinAmount)
    expect(cornerOfRotation).toBe("NorthWest");
})


test('deviseCornerOfRotation (spinAmount - -pi, neighborOfRotation - bottom, counterclockwise)', async () => {
    const isCounterclockwise = true;
    const neighborOfRotation = "BOTTOM_NEIGHBOR";
    const spinAmount = -Math.PI;
    const cornerOfRotation = deviseCornerOfRotation(isCounterclockwise, neighborOfRotation, spinAmount)
    expect(cornerOfRotation).toBe("NorthEast");
})
