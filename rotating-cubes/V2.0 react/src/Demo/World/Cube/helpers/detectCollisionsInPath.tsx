import { Vector3 } from "three";
import { axisType, cornerType } from "../../../Util/Types/types";

export const detectCollisionsInPath = (cornerOfRotation : cornerType, axisOfRotation: axisType, isCounterclockwise: boolean, cubePosition : Vector3, allPositions: Vector3) => {
    console.log("*****inside detectCollisionsInPath");

    /**
     * use the (cornerOfRotation, axisOfRotation, isCoutnerclockwise) to figure out what path (in local coordinates) the cube will be travelling in
     * use cubePosition to find the exact world coordinates of the path 
     * use allPositions to check that these positions in world space are not already occupied by another cube
     */

    return true;
}

// import { CLOCKWISE, COUNTERCLOCKWISE } from "../../redux/rotation/types";

// type coordType = {
//     x: number,
//     y: number,
// }

// type coordListCallbackType = (cx: number, cy: number) => coordType[];

// type traversedPathType = {
//     TOP_NEIGHBOR: {
//         [CLOCKWISE]: coordListCallbackType;
//         [COUNTERCLOCKWISE]: coordListCallbackType;
//     },
//     RIGHT_NEIGHBOR: {
//         [CLOCKWISE]: coordListCallbackType;
//         [COUNTERCLOCKWISE]: coordListCallbackType;
//     },
//     BOTTOM_NEIGHBOR: {
//         [CLOCKWISE]: coordListCallbackType;
//         [COUNTERCLOCKWISE]: coordListCallbackType;
//     },
//     LEFT_NEIGHBOR: {
//         [CLOCKWISE]: coordListCallbackType;
//         [COUNTERCLOCKWISE]: coordListCallbackType;
//     },
// }

// export const traversedPath : traversedPathType = {
//     TOP_NEIGHBOR: {
//         CLOCKWISE: (cx, cy) => [
//             {x: cx, y: cy+1},
//             {x: cx-1, y: cy+1},
//             {x: cx-1, y: cy},
//             {x: cx-2, y: cy},
//             {x: cx-1, y: cy-1},
//             {x: cx-2, y: cy-1},
//         ],
//         COUNTERCLOCKWISE: (cx, cy) => [
//             {x: cx, y: cy+1},
//             {x: cx+1, y: cy+1},
//             {x: cx+1, y: cy},
//             {x: cx+2, y: cy},
//             {x: cx+1, y: cy-1},
//             {x: cx+2, y: cy-1},
//         ]
//     },
//     RIGHT_NEIGHBOR: {
//         CLOCKWISE: (cx, cy) => [
//             {x: cx, y: cy-1},
//             {x: cx-1, y: cy},
//             {x: cx-1, y: cy-1},
//             {x: cx+1, y: cy-1},
//             {x: cx+1, y: cy-2},
//             {x: cx, y: cy-2},
//         ],
//         COUNTERCLOCKWISE: (cx, cy) => [
//             {x: cx-1, y: cy},
//             {x: cx-1, y: cy+1},
//             {x: cx, y: cy+1},
//             {x: cx, y: cy+2},
//             {x: cx+1, y: cy+1},
//             {x: cx+1, y: cy+2},
//         ]
//     },
//     BOTTOM_NEIGHBOR: {
//         CLOCKWISE: (cx, cy) => [
//             {x: cx, y: cx-1},
//             {x: cx+1, y: cy-1},
//             {x: cx+1, y: cy},
//             {x: cx+2, y: cy},
//             {x: cx+1, y: cy+1},
//             {x: cx+2, y: cy+1},
//         ],
//         COUNTERCLOCKWISE: (cx, cy) => [
//             {x: cx, y: cy-1},
//             {x: cx-1, y: cy-1},
//             {x: cx-1, y: cy},
//             {x: cx-2, y: cy},
//             {x: cx-1, y: cy+1},
//             {x: cx-2, y: cy+1},
//         ]
//     },
//     LEFT_NEIGHBOR: {
//         CLOCKWISE: (cx, cy) => [
//             {x: cx+1, y: cy},
//             {x: cx+1, y: cy+1},
//             {x: cx, y: cx+1},
//             {x: cx, y: cx+2},
//             {x: cx-1, y: cx+1},
//             {x: cx-1, y: cx+2},
//         ],
//         COUNTERCLOCKWISE: (cx, cy) => [
//             {x: cx-1, y: cy-1},
//             {x: cx, y: cx-1},
//             {x: cx-1, y: cy-2},
//             {x: cx, y: cx-2},
//             {x: cx+1, y: cx-1},
//             {x: cx+1, y: cx},
//         ]
//     }
// }

