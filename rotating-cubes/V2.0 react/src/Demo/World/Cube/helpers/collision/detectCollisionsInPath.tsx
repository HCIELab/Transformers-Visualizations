import { Vector3 } from "three";
import { axisType, cornerType } from "../../../../Util/Types/types";

export const detectCollisionsInPath = (cornerOfRotation : cornerType, axisOfRotation: axisType, isCounterclockwise: boolean, cubePosition : Vector3, allPositions: Vector3) => {
    console.log("*****inside detectCollisionsInPath");

    /**
     * use the (cornerOfRotation, axisOfRotation, isCoutnerclockwise) to figure out what path (in local coordinates) the cube will be travelling in
     * use cubePosition to find the exact world coordinates of the path 
     * use allPositions to check that these positions in world space are not already occupied by another cube
     */

    return false;
}
