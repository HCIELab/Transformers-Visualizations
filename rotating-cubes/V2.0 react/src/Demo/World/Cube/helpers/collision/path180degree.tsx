import { Vector2 } from "three";
import { cornerType } from "../../../../Util/Types/types";

type coordListCallbackType = (a: number, b: number) => Vector2[];

type pathReturnType = {
    [corner in cornerType]: {
        COUNTERCLOCKWISE: coordListCallbackType,
        CLOCKWISE: coordListCallbackType,
    };
}

export const traversedPath : pathReturnType = {
    NorthEast: {
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
    SouthEast: {
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
    SouthWest: {
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
    NorthWest: {
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

