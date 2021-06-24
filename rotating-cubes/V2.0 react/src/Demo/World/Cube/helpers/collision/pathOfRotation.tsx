import { Vector3 } from "three";
import { axisType, neighborType } from "../../../../Util/Types/types";
import { traversedPath180 } from "./path180degree";
import { traversedPath90 } from "./path90degree";

export const pathOfRotation = (
    axisOfRotation: axisType, 
    isCounterclockwise: boolean, 
    cubePosition : Vector3, 
    neighborOfRotation: neighborType,
) : Vector3[] => {
    console.log("(pathOfRotation) params: ",axisOfRotation, isCounterclockwise, cubePosition, neighborOfRotation);

    // const pathLocal = traversedPath180[axisOfRotation][neighborOfRotation][isCounterclockwise ? "COUNTERCLOCKWISE" : "CLOCKWISE"];
    const pathLocal = traversedPath90[axisOfRotation][neighborOfRotation][isCounterclockwise ? "COUNTERCLOCKWISE" : "CLOCKWISE"];
    const pathWorld = pathLocal.map((vec) => new Vector3(vec.x + cubePosition.x, vec.y + cubePosition.y, vec.z + cubePosition.z))
    
    const pathWorldRounded = pathWorld.map((vec) => {
        const {x, y, z} = vec;
        return new Vector3(Math.round(x), Math.round(y), Math.round(z));
    })
    console.log("(pathOfRotation.tsx) pathWorldRounded: ", pathWorldRounded);
    
    return pathWorldRounded;
}
