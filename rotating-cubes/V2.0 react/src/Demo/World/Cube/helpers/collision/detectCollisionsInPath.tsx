import { Vector3 } from "three";
import { axisType, cornerType } from "../../../../Util/Types/types";
import { traversedPath } from "./path180degree";

export const detectCollisionsInPath = (
    cornerOfRotation : cornerType, 
    axisOfRotation: axisType, 
    isCounterclockwise: boolean, 
    cubePosition : Vector3, 
    allPositions: Vector3
) => {
    console.log("*****inside detectCollisionsInPath");

    /**
     * TODO
     * use the (cornerOfRotation, axisOfRotation, isCoutnerclockwise) to figure out what path (in local coordinates) the cube will be travelling in
     * use cubePosition to find the exact world coordinates of the path 
     * use allPositions to check that these positions in world space are not already occupied by another cube
     */

    let callbackFunc = traversedPath.TOP_NEIGHBOR.COUNTERCLOCKWISE;

    switch(axisOfRotation) {
        case "z":
            switch (cornerOfRotation) {
                case "NorthEast":
                    if (isCounterclockwise) {
                        callbackFunc = traversedPath.TOP_NEIGHBOR.COUNTERCLOCKWISE;
                    }
                    else {
                        callbackFunc = traversedPath.RIGHT_NEIGHBOR.CLOCKWISE;
                    }
                    break; 
                case "SouthEast":
                    if (isCounterclockwise) {
                        callbackFunc = traversedPath.RIGHT_NEIGHBOR.COUNTERCLOCKWISE;
                    }
                    else {
                        callbackFunc = traversedPath.BOTTOM_NEIGHBOR.CLOCKWISE;
                    }
                    break;
                case "SouthWest":
                    if (isCounterclockwise) {
                        callbackFunc = traversedPath.BOTTOM_NEIGHBOR.COUNTERCLOCKWISE;
                    }
                    else {
                        callbackFunc = traversedPath.LEFT_NEIGHBOR.CLOCKWISE;
                    }
                    break;
                case "NorthWest":
                    if (isCounterclockwise) {
                        callbackFunc = traversedPath.LEFT_NEIGHBOR.COUNTERCLOCKWISE;
                    }
                    else {
                        callbackFunc = traversedPath.TOP_NEIGHBOR.CLOCKWISE;
                    }
                    break;
            }
            const path = callbackFunc(cubePosition.x, cubePosition.y);
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


    return false;
}
