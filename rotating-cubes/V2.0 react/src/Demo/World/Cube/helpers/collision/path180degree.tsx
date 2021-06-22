import { Euler, Vector3 } from "three";
import { axisType } from "../../../../Util/Types/types";
import { neighborType } from "../../../../Util/Types/types";

type pathReturnType = {
    [axis in axisType]: {
        [neighbor in neighborType]: {
            COUNTERCLOCKWISE: Vector3[],
            CLOCKWISE: Vector3[],
        };
    }
}

const generateTemplateCoordList = () => [
    new Vector3(1, 0, 0),
    new Vector3(1, 1, 0),
    new Vector3(0, 1, 0),
    new Vector3(0, 2, 0),
    new Vector3(-1, 2, 0),
    new Vector3(-1, 1, 0),
]

export const traversedPath : pathReturnType = {
    x: {
        TOP_NEIGHBOR: {
            COUNTERCLOCKWISE: generateTemplateCoordList(),
            CLOCKWISE: generateTemplateCoordList(),
        },
        RIGHT_NEIGHBOR: {
            COUNTERCLOCKWISE: generateTemplateCoordList(),
            CLOCKWISE: generateTemplateCoordList(),
        },
        BOTTOM_NEIGHBOR: {
            COUNTERCLOCKWISE: generateTemplateCoordList(),
            CLOCKWISE: generateTemplateCoordList(),
        },
        LEFT_NEIGHBOR: {
            COUNTERCLOCKWISE: generateTemplateCoordList(),
            CLOCKWISE: generateTemplateCoordList(),
        },
    },
    y: {
        TOP_NEIGHBOR: {
            COUNTERCLOCKWISE: generateTemplateCoordList(),
            CLOCKWISE: generateTemplateCoordList(),
        },
        RIGHT_NEIGHBOR: {
            COUNTERCLOCKWISE: generateTemplateCoordList(),
            CLOCKWISE: generateTemplateCoordList(),
        },
        BOTTOM_NEIGHBOR: {
            COUNTERCLOCKWISE: generateTemplateCoordList(),
            CLOCKWISE: generateTemplateCoordList(),
        },
        LEFT_NEIGHBOR: {
            COUNTERCLOCKWISE: generateTemplateCoordList(),
            CLOCKWISE: generateTemplateCoordList(),
        },
    },
    z: {
        TOP_NEIGHBOR: {
            COUNTERCLOCKWISE: generateTemplateCoordList(),
            CLOCKWISE: generateTemplateCoordList(),
        },
        RIGHT_NEIGHBOR: {
            COUNTERCLOCKWISE: generateTemplateCoordList(),
            CLOCKWISE: generateTemplateCoordList(),
        },
        BOTTOM_NEIGHBOR: {
            COUNTERCLOCKWISE: generateTemplateCoordList(),
            CLOCKWISE: generateTemplateCoordList(),
        },
        LEFT_NEIGHBOR: {
            COUNTERCLOCKWISE: generateTemplateCoordList(),
            CLOCKWISE: generateTemplateCoordList().map(
                (v) => v.applyEuler(new Euler(Math.PI, 0, 0))
            ),
        }
    }
}

