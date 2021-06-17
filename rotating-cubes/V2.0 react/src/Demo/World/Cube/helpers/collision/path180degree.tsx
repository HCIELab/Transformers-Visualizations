import { Vector2 } from "three";
import { neighborType } from "../../../../Util/Types/types";

type coordListCallbackType = (a: number, b: number) => Vector2[];

type pathReturnType = {
    [neighbor in neighborType]: {
        COUNTERCLOCKWISE: coordListCallbackType,
        CLOCKWISE: coordListCallbackType,
    };
}

export const traversedPath : pathReturnType = {
    TOP_NEIGHBOR: {
        COUNTERCLOCKWISE: (a, b) => [
            new Vector2(a, b-1),
            new Vector2(a+1, b-1),
            new Vector2(a+1, b),
            new Vector2(a+2, b),
            new Vector2(a+2, b+1),
            new Vector2(a+1, b+1),
        ],
        CLOCKWISE: (a, b) => [
            new Vector2(a-1, b),
            new Vector2(a-1, b+1),
            new Vector2(a, b+1),
            new Vector2(a, b+2),
            new Vector2(a+1, b+2),
            new Vector2(a+1, b+1),
        ],
    },
    RIGHT_NEIGHBOR: {
        COUNTERCLOCKWISE: (a, b) => [
            // TODO: fix these coords
            new Vector2(a-1, b),
            new Vector2(a-1, b+1),
            new Vector2(a, b+1),
            new Vector2(a, b+2),
            new Vector2(a+1, b+1),
            new Vector2(a+1, b+2),
        ],
        CLOCKWISE: (a, b) => [
            // TODO: fix these coords
            new Vector2(a, b-1),
            new Vector2(a-1, b),
            new Vector2(a-1, b-1),
            new Vector2(a+1, b-1),
            new Vector2(a+1, b-2),
            new Vector2(a, b-2),
        ],
    },
    BOTTOM_NEIGHBOR: {
        COUNTERCLOCKWISE: (a, b) => [
            // TODO: fix these coords
            new Vector2(a, b-1),
            new Vector2(a-1, b-1),
            new Vector2(a-1, b),
            new Vector2(a-2, b),
            new Vector2(a-1, b+1),
            new Vector2(a-2, b+1),
        ],
        CLOCKWISE: (a, b) => [
            // TODO: fix these coords
            new Vector2(a, a-1),
            new Vector2(a+1, b-1),
            new Vector2(a+1, b),
            new Vector2(a+2, b),
            new Vector2(a+1, b+1),
            new Vector2(a+2, b+1),
        ],
    },
    LEFT_NEIGHBOR: {
        COUNTERCLOCKWISE: (a, b) => [
            // TODO: fix these coords
            new Vector2(a-1, b-1),
            new Vector2(a, a-1),
            new Vector2(a-1, b-2),
            new Vector2(a, a-2),
            new Vector2(a+1, a-1),
            new Vector2(a+1, a),
        ],
        CLOCKWISE: (a, b) => [
            new Vector2(a, b-1),
            new Vector2(a-1, b-1),
            new Vector2(a-1, b),
            new Vector2(a-2, b),
            new Vector2(a-2, b+1),
            new Vector2(a-1, b+1),
        ],
    }
}

