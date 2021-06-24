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

const pi = Math.PI;

export const traversedPath : pathReturnType = {
    x: {
        TOP_NEIGHBOR: {
            COUNTERCLOCKWISE: generateTemplateCoordList().map(
                (v) => v.applyEuler(new Euler(0, pi/2, 3*pi/2))
            ),
            CLOCKWISE: generateTemplateCoordList().map(
                (v) => v.applyEuler(new Euler(0, -pi/2, 3*pi/2))
            ),
        },
        RIGHT_NEIGHBOR: {
            COUNTERCLOCKWISE: generateTemplateCoordList().map(
                (v) => v.applyEuler(new Euler(0, pi/2, pi))
            ),
            CLOCKWISE: generateTemplateCoordList().map(
                (v) => v.applyEuler(new Euler(pi, -pi/2, pi))
            ),
        },
        BOTTOM_NEIGHBOR: {
            COUNTERCLOCKWISE: generateTemplateCoordList().map(
                (v) => v.applyEuler(new Euler(0, pi/2, pi/2))
                ),
            CLOCKWISE: generateTemplateCoordList().map(
                (v) => v.applyEuler(new Euler(0, -pi/2, pi/2))
            ),
        },
        LEFT_NEIGHBOR: {
            COUNTERCLOCKWISE: generateTemplateCoordList().map(
                (v) => v.applyEuler(new Euler(0, pi/2, 0))
            ),
            CLOCKWISE: generateTemplateCoordList().map(
                (v) => v.applyEuler(new Euler(pi, -pi/2, 0))
            ),
        }
    },
    
    y: {
        TOP_NEIGHBOR: {
            COUNTERCLOCKWISE: generateTemplateCoordList().map(
                (v) => v.applyEuler(new Euler(-pi/2, 0, 3*pi/2))
            ),
            CLOCKWISE: generateTemplateCoordList().map(
                (v) => v.applyEuler(new Euler(-pi/2, pi, 3*pi/2))
            ),
        },
        RIGHT_NEIGHBOR: {
            COUNTERCLOCKWISE: generateTemplateCoordList().map(
                (v) => v.applyEuler(new Euler(-pi/2, 0, pi))
            ),
            CLOCKWISE: generateTemplateCoordList().map(
                (v) => v.applyEuler(new Euler(pi/2, 0, pi))
            ),
        },
        BOTTOM_NEIGHBOR: {
            COUNTERCLOCKWISE: generateTemplateCoordList().map(
                (v) => v.applyEuler(new Euler(-pi/2, 0, pi/2))
            ),
            CLOCKWISE: generateTemplateCoordList().map(
                (v) => v.applyEuler(new Euler(-pi/2, pi, pi/2))
            ),
        },
        LEFT_NEIGHBOR: {
            COUNTERCLOCKWISE: generateTemplateCoordList().map(
                (v) => v.applyEuler(new Euler(-pi/2, 0, 0))
            ),
            CLOCKWISE: generateTemplateCoordList().map(
                (v) => v.applyEuler(new Euler(pi/2, 0, 0))
            ),
        },
    },

    z: {
        TOP_NEIGHBOR: {
            COUNTERCLOCKWISE: generateTemplateCoordList().map(
                (v) => v.applyEuler(new Euler(0, 0, 3*pi/2))
            ),
            CLOCKWISE: generateTemplateCoordList().map(
                (v) => v.applyEuler(new Euler(0, pi, 3*pi/2))
            ),
        },
        RIGHT_NEIGHBOR: {
            COUNTERCLOCKWISE: generateTemplateCoordList().map(
                (v) => v.applyEuler(new Euler(0, 0, pi))
            ),
            CLOCKWISE: generateTemplateCoordList().map(
                (v) => v.applyEuler(new Euler(pi, 0, pi))
            ),
        },
        BOTTOM_NEIGHBOR: {
            COUNTERCLOCKWISE: generateTemplateCoordList().map(
                (v) => v.applyEuler(new Euler(0, 0, pi/2))
            ),
            CLOCKWISE: generateTemplateCoordList().map(
                (v) => v.applyEuler(new Euler(0, pi, pi/2))
            ),
        },
        LEFT_NEIGHBOR: {
            COUNTERCLOCKWISE: generateTemplateCoordList(),
            CLOCKWISE: generateTemplateCoordList().map(
                (v) => v.applyEuler(new Euler(pi, 0, 0))
            ),
        }
    }
}

