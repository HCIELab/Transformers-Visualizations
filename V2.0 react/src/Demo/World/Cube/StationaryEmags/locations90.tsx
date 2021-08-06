import { Euler, Vector3 } from "three"
import { axisType, cornerType } from "../../../Util/Types/types";

export type locationsType = {
    repulsionPosition: Vector3,
    hingePosition: Vector3,
    catchingPosition: Vector3,
    pwmOne: Vector3,
    pwmTwo: Vector3,
    pwmThree: Vector3,
    pwmFour: Vector3,
}

const pi = Math.PI;

export const getLocations90 = (side: number, offset: number, cornerName: cornerType, isCounterclockwise: boolean, axisOfRotation: axisType) : locationsType => {
    switch (axisOfRotation) {
        case "x":
            return getLocationsX(side, offset, cornerName, isCounterclockwise);
        case "y":
            return getLocationsY(side, offset, cornerName, isCounterclockwise);
        // case "z":
        default:
            return getLocationsZ(side, offset, cornerName, isCounterclockwise);
    }
}


const getLocationsX = (side: number, offset: number, cornerName: cornerType, isCounterclockwise: boolean) : locationsType => {
    const half = side/2;

    const template : locationsType = {
        // This template works for 180 deg, counterclockwise, northwest corner
        repulsionPosition:  new Vector3(0, -half+offset, half+offset),
        hingePosition:      new Vector3(0, half-offset, half+offset),
        catchingPosition:   new Vector3(0, 3*half-offset, half+offset),
        pwmOne:             new Vector3(-3, -3, -3),
        pwmTwo:             new Vector3(-3, -3, -3),
        pwmThree:             new Vector3(-3, -3, -3),
        pwmFour:             new Vector3(-3, -3, -3),
    }

    let euler = new Euler(0, 0, 0);
    switch (cornerName) {
        case "NorthEast":
            euler = isCounterclockwise ? new Euler(3*pi/2, 0, 0) : new Euler(pi, 0, pi);
            break;
        case "SouthEast":
            euler = isCounterclockwise ? new Euler(pi, 0, 0) : new Euler(pi/2, 0, pi);
            break;
        case "SouthWest":
            euler = isCounterclockwise ? new Euler(pi/2, 0, 0) : new Euler(0, 0, pi);
            break;
        // case "NorthWest":
        default:
            euler = isCounterclockwise ? new Euler(0, 0, 0) : new Euler(3*pi/2, 0, pi);
    }
    return {
        repulsionPosition: template.repulsionPosition.applyEuler(euler),
        hingePosition: template.hingePosition.applyEuler(euler),
        catchingPosition: template.catchingPosition.applyEuler(euler),
        pwmOne: template.pwmOne,
        pwmTwo: template.pwmOne,
        pwmThree: template.pwmOne,
        pwmFour: template.pwmOne,
    }
}




const getLocationsY = (side: number, offset: number, cornerName: cornerType, isCounterclockwise: boolean) : locationsType => {
    const half = side/2;

    const template : locationsType = {
        // This template works for 180 deg, counterclockwise, northwest corner
        repulsionPosition:  new Vector3(-half-offset, 0, half-offset),
        hingePosition:      new Vector3(-half-offset, 0, -half+offset),
        catchingPosition:   new Vector3(-half-offset, 0, -3*half+offset),
        pwmOne:             new Vector3(-3, -3, -3),
        pwmTwo:             new Vector3(-3, -3, -3),
        pwmThree:             new Vector3(-3, -3, -3),
        pwmFour:             new Vector3(-3, -3, -3),
    }

    let euler = new Euler(0, 0, 0);
    switch (cornerName) {
        case "NorthEast":
            euler = isCounterclockwise ? new Euler(0, 3*pi/2, 0) : new Euler(pi, pi, 0);
            break;
        case "SouthEast":
            euler = isCounterclockwise ? new Euler(0, pi, 0) : new Euler(pi, 3*pi/2, 0);
            break;
        case "SouthWest":
            euler = isCounterclockwise ? new Euler(0, pi/2, 0) : new Euler(pi, 0, 0);
            break;
        // case "NorthWest":
        default:
            euler = isCounterclockwise ? new Euler(0, 0, 0) : new Euler(pi, pi/2, 0);
    }
    return {
        repulsionPosition: template.repulsionPosition.applyEuler(euler),
        hingePosition: template.hingePosition.applyEuler(euler),
        catchingPosition: template.catchingPosition.applyEuler(euler),
        pwmOne: template.pwmOne,
        pwmTwo: template.pwmOne,
        pwmThree: template.pwmOne,
        pwmFour: template.pwmOne,
    }
}


const getLocationsZ = (side: number, offset: number, cornerName: cornerType, isCounterclockwise: boolean) : locationsType => {
    const half = side/2;

    const template : locationsType = {
        // This template works for 180 deg, counterclockwise, northwest corner
        repulsionPosition:  new Vector3(-half-offset, -half+offset, 0),
        hingePosition:      new Vector3(-half-offset, half+offset, 0),
        catchingPosition:   new Vector3(-half-offset, 3*half-offset, 0),
        pwmOne:             new Vector3(-3, -3, -3),
        pwmTwo:             new Vector3(-3, -3, -3),
        pwmThree:             new Vector3(-3, -3, -3),
        pwmFour:             new Vector3(-3, -3, -3),
    }

    let euler = new Euler(0, 0, 0);
    switch (cornerName) {
        case "NorthEast":
            euler = isCounterclockwise ? new Euler(0, 0, 3*pi/2) : new Euler(0, pi, 0);
            break;
        case "SouthEast":
            euler = isCounterclockwise ? new Euler(0, 0, pi) : new Euler(0, pi, pi/2);
            break;
        case "SouthWest":
            euler = isCounterclockwise ? new Euler(0, 0, pi/2) : new Euler(0, pi, pi);
            break;
        // case "NorthWest":
        default:
            euler = isCounterclockwise ? new Euler(0, 0, 0) : new Euler(0, pi, 3*pi/2);
        }
    return {
        repulsionPosition: template.repulsionPosition.applyEuler(euler),
        hingePosition: template.hingePosition.applyEuler(euler),
        catchingPosition: template.catchingPosition.applyEuler(euler),
        pwmOne: template.pwmOne,
        pwmTwo: template.pwmOne,
        pwmThree: template.pwmOne,
        pwmFour: template.pwmOne,
    }
}