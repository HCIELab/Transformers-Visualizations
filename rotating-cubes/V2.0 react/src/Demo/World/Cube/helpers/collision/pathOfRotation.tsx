import { Vector3 } from "three";
import { axisType, neighborType } from "../../../../Util/Types/types";
import { traversedPath } from "./path180degree";

export const pathOfRotation = (
    axisOfRotation: axisType, 
    isCounterclockwise: boolean, 
    cubePosition : Vector3, 
    neighborOfRotation: neighborType,
) : Vector3[] => {
    console.log("(pathOfRotation) params: ",axisOfRotation, isCounterclockwise, cubePosition, neighborOfRotation);


    /**
     * TODO
     */

    let pathCallback = traversedPath[axisOfRotation][neighborOfRotation][isCounterclockwise ? "COUNTERCLOCKWISE" : "CLOCKWISE"];
    const {x, y, z} = cubePosition;
    return pathCallback(x, y, z);
}
