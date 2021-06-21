import { Vector3 } from "three";
import { deviseCornerOfRotation } from "./deviseCornerOfRotation";

test('deviseCornerOfRotation (axis - z, rotation - 0, neighborOfRotation - top, counterclockwise)', async () => {
    const isCounterclockwise = true;
    const neighborOfRotation = "TOP_NEIGHBOR";
    const rotation = new Vector3(0, 0, 0);
    const axisOfRotation = 'z';
    const cornerOfRotation = deviseCornerOfRotation(isCounterclockwise, neighborOfRotation, rotation, axisOfRotation)
    expect(cornerOfRotation).toBe("NorthEast");
})

test('deviseCornerOfRotation (axis - z, rotation - pi/2, neighborOfRotation - top, counterclockwise)', async () => {
    const isCounterclockwise = true;
    const neighborOfRotation = "TOP_NEIGHBOR";
    const rotation = new Vector3(0, 0, Math.PI/2);
    const axisOfRotation = 'z';
    const cornerOfRotation = deviseCornerOfRotation(isCounterclockwise, neighborOfRotation, rotation, axisOfRotation)
    expect(cornerOfRotation).toBe("SouthEast");
})

test('deviseCornerOfRotation (axis - z, rotation - pi, neighborOfRotation - top, counterclockwise)', async () => {
    const isCounterclockwise = true;
    const neighborOfRotation = "TOP_NEIGHBOR";
    const rotation = new Vector3(0, 0, Math.PI);
    const axisOfRotation = 'z';
    const cornerOfRotation = deviseCornerOfRotation(isCounterclockwise, neighborOfRotation, rotation, axisOfRotation)
    expect(cornerOfRotation).toBe("SouthWest");
})

test('deviseCornerOfRotation (axis - z, rotation - 3*pi/2, neighborOfRotation - top, counterclockwise)', async () => {
    const isCounterclockwise = true;
    const neighborOfRotation = "TOP_NEIGHBOR";
    const rotation = new Vector3(0, 0, 3*Math.PI/2);
    const axisOfRotation = 'z';
    const cornerOfRotation = deviseCornerOfRotation(isCounterclockwise, neighborOfRotation, rotation, axisOfRotation)
    expect(cornerOfRotation).toBe("NorthWest");
})


test('deviseCornerOfRotation (axis - z, rotation - -pi, neighborOfRotation - bottom, counterclockwise)', async () => {
    const isCounterclockwise = true;
    const neighborOfRotation = "BOTTOM_NEIGHBOR";
    const rotation = new Vector3(0, 0, -Math.PI);
    const axisOfRotation = 'z';
    const cornerOfRotation = deviseCornerOfRotation(isCounterclockwise, neighborOfRotation, rotation, axisOfRotation)
    expect(cornerOfRotation).toBe("NorthEast");
})

test('deviseCornerOfRotation (axis - y, rotation - 0, neighborOfRotation - top, counterclockwise)', async () => {
    const isCounterclockwise = true;
    const neighborOfRotation = "TOP_NEIGHBOR";
    const rotation = new Vector3(0, 0, 0);
    const axisOfRotation = 'y';
    const cornerOfRotation = deviseCornerOfRotation(isCounterclockwise, neighborOfRotation, rotation, axisOfRotation)
    expect(cornerOfRotation).toBe("NorthEast");
})

test('deviseCornerOfRotation (axis - y, rotation - pi, neighborOfRotation - top, counterclockwise)', async () => {
    const isCounterclockwise = true;
    const neighborOfRotation = "TOP_NEIGHBOR";
    const rotation = new Vector3(0, Math.PI, 0);
    const axisOfRotation = 'y';
    const cornerOfRotation = deviseCornerOfRotation(isCounterclockwise, neighborOfRotation, rotation, axisOfRotation)
    expect(cornerOfRotation).toBe("SouthWest");
})
