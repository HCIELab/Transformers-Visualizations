import { Vector2 } from "three";

type coordListCallbackType = (a: number, b: number) => Vector2[];

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
        CLOCKWISE: (a, b) => [
            // TODO: fix these coords
            new Vector2(a, b+1),
            new Vector2(a-1, b+1),
            new Vector2(a-1, b),
            new Vector2(a-2, b),
            new Vector2(a-1, b-1),
            new Vector2(a-2, b-1),
        ],
        COUNTERCLOCKWISE: (a, b) => [
            new Vector2(a, b-1),
            new Vector2(a+1, b-1),
            new Vector2(a+1, b),
            new Vector2(a+2, b),
            new Vector2(a+2, b+1),
            new Vector2(a+1, b+1),
        ]
    },
    RIGHT_NEIGHBOR: {
        CLOCKWISE: (a, b) => [
            // TODO: fix these coords
            new Vector2(a, b-1),
            new Vector2(a-1, b),
            new Vector2(a-1, b-1),
            new Vector2(a+1, b-1),
            new Vector2(a+1, b-2),
            new Vector2(a, b-2),
        ],
        COUNTERCLOCKWISE: (a, b) => [
            // TODO: fix these coords
            new Vector2(a-1, b),
            new Vector2(a-1, b+1),
            new Vector2(a, b+1),
            new Vector2(a, b+2),
            new Vector2(a+1, b+1),
            new Vector2(a+1, b+2),
        ]
    },
    BOTTOM_NEIGHBOR: {
        CLOCKWISE: (a, b) => [
            // TODO: fix these coords
            new Vector2(a, a-1),
            new Vector2(a+1, b-1),
            new Vector2(a+1, b),
            new Vector2(a+2, b),
            new Vector2(a+1, b+1),
            new Vector2(a+2, b+1),
        ],
        COUNTERCLOCKWISE: (a, b) => [
            // TODO: fix these coords
            new Vector2(a, b-1),
            new Vector2(a-1, b-1),
            new Vector2(a-1, b),
            new Vector2(a-2, b),
            new Vector2(a-1, b+1),
            new Vector2(a-2, b+1),
        ]
    },
    LEFT_NEIGHBOR: {
        CLOCKWISE: (a, b) => [
            // TODO: fix these coords
            new Vector2(a+1, b),
            new Vector2(a+1, b+1),
            new Vector2(a, a+1),
            new Vector2(a, a+2),
            new Vector2(a-1, a+1),
            new Vector2(a-1, a+2),
        ],
        COUNTERCLOCKWISE: (a, b) => [
            // TODO: fix these coords
            new Vector2(a-1, b-1),
            new Vector2(a, a-1),
            new Vector2(a-1, b-2),
            new Vector2(a, a-2),
            new Vector2(a+1, a-1),
            new Vector2(a+1, a),
        ]
    }
}

