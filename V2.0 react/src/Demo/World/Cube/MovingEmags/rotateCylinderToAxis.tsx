import { Euler } from "three";
import { axisType } from "../../../Util/Types/types";

export const rotateCylinderToAxis = (axisOfRotationWorld: axisType) => {
    switch (axisOfRotationWorld) {
        case "x":
            return new Euler(0, 0, Math.PI/2);
        case "y":
            return new Euler(0, 0, 0);
        // case "z":
        default:
            return new Euler(Math.PI/2, 0, 0);
    }
}