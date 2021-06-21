import { cornerType, neighborType } from "../../../../Util/Types/types";

export const deviseCornerOfRotation = (isCounterclockwise : boolean, neighborOfRotation: neighborType) : cornerType => {
    switch (neighborOfRotation) {
        case "TOP_NEIGHBOR":
            return isCounterclockwise ? "NorthEast" : "NorthWest";
        case "RIGHT_NEIGHBOR":
            return isCounterclockwise ? "SouthEast" : "NorthEast";
        case "BOTTOM_NEIGHBOR":
            return isCounterclockwise ? "SouthWest" : "SouthEast";
        case "LEFT_NEIGHBOR":
            return isCounterclockwise ? "NorthWest" : "SouthWest";
        default:
            console.log("SHOULD NEVER REACH THIS PART OF THE CODE");
            return "NorthEast";
    }
}