import { coord2DType } from "../../../../Util/Types/types";

type coordListCallbackType = (cx: number, cy: number) => coord2DType[];

type traversedPathType = {
    TOP_NEIGHBOR: {
        CLOCKWISE: coordListCallbackType;
        COUNTERCLOCKWISE: coordListCallbackType;
    },
    RIGHT_NEIGHBOR: {
        CLOCKWISE: coordListCallbackType;
        COUNTERCLOCKWISE: coordListCallbackType;
    },
    BOTTOM_NEIGHBOR: {
        CLOCKWISE: coordListCallbackType;
        COUNTERCLOCKWISE: coordListCallbackType;
    },
    LEFT_NEIGHBOR: {
        CLOCKWISE: coordListCallbackType;
        COUNTERCLOCKWISE: coordListCallbackType;
    },
}

export const traversedPath : traversedPathType = {
    TOP_NEIGHBOR: {
        CLOCKWISE: (cx, cy) => [
            {x: cx, y: cy+1},
            {x: cx-1, y: cy+1},
            {x: cx-1, y: cy},
            {x: cx-2, y: cy},
            {x: cx-1, y: cy-1},
            {x: cx-2, y: cy-1},
        ],
        COUNTERCLOCKWISE: (cx, cy) => [
            {x: cx, y: cy+1},
            {x: cx+1, y: cy+1},
            {x: cx+1, y: cy},
            {x: cx+2, y: cy},
            {x: cx+1, y: cy-1},
            {x: cx+2, y: cy-1},
        ]
    },
    RIGHT_NEIGHBOR: {
        CLOCKWISE: (cx, cy) => [
            {x: cx, y: cy-1},
            {x: cx-1, y: cy},
            {x: cx-1, y: cy-1},
            {x: cx+1, y: cy-1},
            {x: cx+1, y: cy-2},
            {x: cx, y: cy-2},
        ],
        COUNTERCLOCKWISE: (cx, cy) => [
            {x: cx-1, y: cy},
            {x: cx-1, y: cy+1},
            {x: cx, y: cy+1},
            {x: cx, y: cy+2},
            {x: cx+1, y: cy+1},
            {x: cx+1, y: cy+2},
        ]
    },
    BOTTOM_NEIGHBOR: {
        CLOCKWISE: (cx, cy) => [
            {x: cx, y: cx-1},
            {x: cx+1, y: cy-1},
            {x: cx+1, y: cy},
            {x: cx+2, y: cy},
            {x: cx+1, y: cy+1},
            {x: cx+2, y: cy+1},
        ],
        COUNTERCLOCKWISE: (cx, cy) => [
            {x: cx, y: cy-1},
            {x: cx-1, y: cy-1},
            {x: cx-1, y: cy},
            {x: cx-2, y: cy},
            {x: cx-1, y: cy+1},
            {x: cx-2, y: cy+1},
        ]
    },
    LEFT_NEIGHBOR: {
        CLOCKWISE: (cx, cy) => [
            {x: cx+1, y: cy},
            {x: cx+1, y: cy+1},
            {x: cx, y: cx+1},
            {x: cx, y: cx+2},
            {x: cx-1, y: cx+1},
            {x: cx-1, y: cx+2},
        ],
        COUNTERCLOCKWISE: (cx, cy) => [
            {x: cx-1, y: cy-1},
            {x: cx, y: cx-1},
            {x: cx-1, y: cy-2},
            {x: cx, y: cx-2},
            {x: cx+1, y: cx-1},
            {x: cx+1, y: cx},
        ]
    }
}

