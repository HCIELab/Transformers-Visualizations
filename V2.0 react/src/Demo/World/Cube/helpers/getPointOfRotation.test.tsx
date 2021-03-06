import { Euler, Quaternion, Vector3 } from "three"
import {getPointOfRotation} from "./getPointOfRotation"

test('corner: NorthEast, axis: z, rotation: (0, 0, 0)', async () => {
    const point = getPointOfRotation("NorthEast", 1, "z", new Quaternion().setFromEuler( new Euler(0, 0, 0) ));
    expect(point).toEqual(new Vector3(0.5, 0.5, 0));
})

test('corner: NorthEast, axis: z, rotation: (0, 0, Math.PI)', async () => {
    const point = getPointOfRotation("NorthEast", 1, "z", new Quaternion().setFromEuler( new Euler(0, 0, Math.PI)) );
    expect(point).toEqual(new Vector3(-0.5, -0.5, 0));
})




test('corner: NorthEast, axis: x, rotation: (0, 0, 0)', async () => {
    const point = getPointOfRotation("NorthEast", 1, "x", new Quaternion().setFromEuler( new Euler(0, 0, 0)) );
    expect(point).toEqual(new Vector3(0, 0.5, -0.5));
})

test('corner: NorthEast, axis: x, rotation: (0, 0, -2*Math.PI)', async () => {
    const point = getPointOfRotation("NorthEast", 1, "x", new Quaternion().setFromEuler( new Euler(0, 0, -2*Math.PI)) );
    expect(point).toEqual(new Vector3(0, 0.5, -0.5));
})

test('corner: NorthEast, axis: x, rotation: (0, 0, -Math.PI)', async () => {
    const point = getPointOfRotation("NorthEast", 1, "x", new Quaternion().setFromEuler( new Euler(0, 0, -Math.PI)) );
    expect(point).toEqual(new Vector3(-0, -0.5, -0.5));
})



test('corner: NorthEast, axis: y, rotation: (0, 0, 0)', async () => {
    const point = getPointOfRotation("NorthEast", 1, "y", new Quaternion().setFromEuler( new Euler(0, 0, 0)) );
    expect(point).toEqual(new Vector3(0.5, 0, -0.5));
})

test('corner: NorthEast, axis: y, rotation: (-Math.PI, 0, -Math.PI)', async () => {
    const point = getPointOfRotation("NorthEast", 1, "y", new Quaternion().setFromEuler( new Euler(-Math.PI, 0, -Math.PI)) );
    expect(point).toEqual(new Vector3(-0.5, 0, 0.5));
})
