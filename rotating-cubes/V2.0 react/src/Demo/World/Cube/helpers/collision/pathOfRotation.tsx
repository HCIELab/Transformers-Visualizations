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

    const pathLocal = traversedPath[axisOfRotation][neighborOfRotation][isCounterclockwise ? "COUNTERCLOCKWISE" : "CLOCKWISE"];
    const pathWorld = pathLocal.map((vec) => new Vector3(vec.x + cubePosition.x, vec.y + cubePosition.y, vec.z + cubePosition.z))
    console.log("(pathOfRotation.tsx) pathWorld: ", pathWorld)
    return pathWorld;
}
