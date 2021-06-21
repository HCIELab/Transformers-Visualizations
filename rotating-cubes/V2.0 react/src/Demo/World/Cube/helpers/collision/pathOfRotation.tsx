import { Vector2, Vector3 } from "three";
import { axisType, neighborType } from "../../../../Util/Types/types";
import { traversedPath } from "./path180degree";

export const pathOfRotation = (
    axisOfRotation: axisType, 
    isCounterclockwise: boolean, 
    cubePosition : Vector3, 
    neighborOfRotation: neighborType,
) => {
    console.log("*****inside pathOfRotation");

    /**
     * TODO
     */

    let callbackFunc = traversedPath[neighborOfRotation].COUNTERCLOCKWISE;
    let path : Vector2[] = [];

    switch(axisOfRotation) {
        case "z":
            callbackFunc = traversedPath[neighborOfRotation][isCounterclockwise ? "COUNTERCLOCKWISE" : "CLOCKWISE"];
            path = callbackFunc(cubePosition.x, cubePosition.y);
            console.log("***********path:");
            console.log(path);
            break;
        case "x":
            console.log("***********path:");
            console.log("--PATH FOR THIS AXIS IS NOT YET IMPLEMENTED--");
            break;
        case "y":
            console.log("***********path:");
            console.log("--PATH FOR THIS AXIS IS NOT YET IMPLEMENTED--");
            break;
    }

    return path;
}
