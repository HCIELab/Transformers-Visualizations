import { Euler, Vector3 } from "three";
import { axisType } from "../../../../Util/Types/types";
import { neighborType } from "../../../../Util/Types/types";

type coordListCallbackType = (x: number, y: number, z: number) => Vector3[];

type pathReturnType = {
    [axis in axisType]: {
        [neighbor in neighborType]: {
            COUNTERCLOCKWISE: coordListCallbackType,
            CLOCKWISE: coordListCallbackType,
        };
    }
}

const templateCoordListCallback = (a : number, b: number, c: number) => [
    new Vector3(a+1, b+0, c+0),
    new Vector3(a+1, b+1, c+0),
    new Vector3(a+0, b+1, c+0),
    new Vector3(a+0, b+2, c+0),
    new Vector3(a-1, b+2, c+0),
    new Vector3(a-1, b+1, c+0),
]

export const traversedPath : pathReturnType = {
    x: {
        TOP_NEIGHBOR: {
            COUNTERCLOCKWISE: templateCoordListCallback,
            CLOCKWISE: templateCoordListCallback,
        },
        RIGHT_NEIGHBOR: {
            COUNTERCLOCKWISE: templateCoordListCallback,
            CLOCKWISE: templateCoordListCallback,
        },
        BOTTOM_NEIGHBOR: {
            COUNTERCLOCKWISE: templateCoordListCallback,
            CLOCKWISE: templateCoordListCallback,
        },
        LEFT_NEIGHBOR: {
            COUNTERCLOCKWISE: templateCoordListCallback,
            CLOCKWISE: templateCoordListCallback,
        },
    },
    y: {
        TOP_NEIGHBOR: {
            COUNTERCLOCKWISE: templateCoordListCallback,
            CLOCKWISE: templateCoordListCallback,
        },
        RIGHT_NEIGHBOR: {
            COUNTERCLOCKWISE: templateCoordListCallback,
            CLOCKWISE: templateCoordListCallback,
        },
        BOTTOM_NEIGHBOR: {
            COUNTERCLOCKWISE: templateCoordListCallback,
            CLOCKWISE: templateCoordListCallback,
        },
        LEFT_NEIGHBOR: {
            COUNTERCLOCKWISE: templateCoordListCallback,
            CLOCKWISE: templateCoordListCallback,
        },
    },
    z: {
        TOP_NEIGHBOR: {
            COUNTERCLOCKWISE: (a, b, c) => [
                new Vector3(a, b-1, 0),
                new Vector3(a+1, b-1, 0),
                new Vector3(a+1, b, 0),
                new Vector3(a+2, b, 0),
                new Vector3(a+2, b+1, 0),
                new Vector3(a+1, b+1, 0),
            ],
            CLOCKWISE: (a, b, c) => [
                new Vector3(a-1, b, 0),
                new Vector3(a-1, b+1, 0),
                new Vector3(a, b+1, 0),
                new Vector3(a, b+2, 0),
                new Vector3(a+1, b+2, 0),
                new Vector3(a+1, b+1, 0),
            ],
        },
        RIGHT_NEIGHBOR: {
            COUNTERCLOCKWISE: (a, b, c) => [
                // TODO: fix these coords
                new Vector3(a-1, b, 0),
                new Vector3(a-1, b+1, 0),
                new Vector3(a, b+1, 0),
                new Vector3(a, b+2, 0),
                new Vector3(a+1, b+1, 0),
                new Vector3(a+1, b+2, 0),
            ],
            CLOCKWISE: (a, b, c) => [
                // TODO: fix these coords
                new Vector3(a, b-1, 0),
                new Vector3(a-1, b, 0),
                new Vector3(a-1, b-1, 0),
                new Vector3(a+1, b-1, 0),
                new Vector3(a+1, b-2, 0),
                new Vector3(a, b-2, 0),
            ],
        },
        BOTTOM_NEIGHBOR: {
            COUNTERCLOCKWISE: (a, b, c) => [
                // TODO: fix these coords
                new Vector3(a, b-1, 0),
                new Vector3(a-1, b-1, 0),
                new Vector3(a-1, b, 0),
                new Vector3(a-2, b, 0),
                new Vector3(a-1, b+1, 0),
                new Vector3(a-2, b+1, 0),
            ],
            CLOCKWISE: (a, b, c) => [
                // TODO: fix these coords
                new Vector3(a, a-1, 0),
                new Vector3(a+1, b-1, 0),
                new Vector3(a+1, b, 0),
                new Vector3(a+2, b, 0),
                new Vector3(a+1, b+1, 0),
                new Vector3(a+2, b+1, 0),
            ],
        },
        LEFT_NEIGHBOR: {
            COUNTERCLOCKWISE: (a, b, c) => [
                new Vector3(a+1, b, 0),
                new Vector3(a+1, b+1, 0),
                new Vector3(a, b+1, 0),
                new Vector3(a, b+2, 0),
                new Vector3(a-1, b+2, 0),
                new Vector3(a-1, b+1, 0),
            ],
            // CLOCKWISE: (a, b, c) => [
            //     new Vector3(a+1, b, 0),
            //     new Vector3(a+1, b-1, 0),
            //     new Vector3(a, b-1, 0),
            //     new Vector3(a, b-2, 0),
            //     new Vector3(a-1, b-2, 0),
            //     new Vector3(a-1, b-1, 0),
            // ],
            CLOCKWISE: (a, b, c) => templateCoordListCallback(a, b, c).map(
                (v) => v.applyEuler(new Euler(Math.PI, 0, 0))
            )
        }
    }
}

