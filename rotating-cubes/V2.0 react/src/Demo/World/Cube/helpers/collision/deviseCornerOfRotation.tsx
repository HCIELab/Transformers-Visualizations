import { Vector3 } from "three";
import { axisType, cornerType, neighborType } from "../../../../Util/Types/types";

export const deviseCornerOfRotation = (isCounterclockwise : boolean, neighborOfRotation: neighborType, rotation: Vector3, axisOfRotation: axisType) : cornerType => {
    let cornerValues : cornerType[] = ["NorthEast", "SouthEast", "SouthWest", "NorthWest"]
    
    const spinAmount = axisOfRotation === 'y' ? -1*rotation[axisOfRotation] : rotation[axisOfRotation];
    const numDiscreteSpins = spinAmount / (Math.PI / 2);
    if (numDiscreteSpins > 0) {
        for (let i = 0; i < numDiscreteSpins; i++) {
            cornerValues = shiftListLeft(cornerValues);
        }
    } else {
        for (let i = 0; i > numDiscreteSpins; i--) {
            cornerValues = shiftListRight(cornerValues);
        }
    }
    console.log("***********", cornerValues)

    switch (neighborOfRotation) {
        case "TOP_NEIGHBOR":
            return isCounterclockwise ? cornerValues[0] : cornerValues[3];
        case "RIGHT_NEIGHBOR":
            return isCounterclockwise ? cornerValues[1] : cornerValues[0];
        case "BOTTOM_NEIGHBOR":
            return isCounterclockwise ? cornerValues[2] : cornerValues[1];
        case "LEFT_NEIGHBOR":
            return isCounterclockwise ? cornerValues[3] : cornerValues[2];
        default:
            console.log("SHOULD NEVER REACH THIS PART OF THE CODE");
            return "NorthEast";
    }
}

const shiftListRight = (oldList: any[]) => {
    const newList = JSON.parse(JSON.stringify(oldList));
    newList.unshift(newList.pop());
    return newList;
}

const shiftListLeft = (oldList: any[]) => {
    const newList = JSON.parse(JSON.stringify(oldList));
    newList.push(newList.shift());
    return newList;
}