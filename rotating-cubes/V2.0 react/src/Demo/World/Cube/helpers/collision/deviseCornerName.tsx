import { cornerType, neighborType } from "../../../../Util/Types/types";

export const deviseCornerName = (isCounterclockwise : boolean, neighborOfRotation: neighborType) : cornerType => {
    let cornerValues : cornerType[] = ["NorthEast", "SouthEast", "SouthWest", "NorthWest"]
    
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
