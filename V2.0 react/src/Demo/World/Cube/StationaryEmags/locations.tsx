import { Euler, Vector3 } from "three"
import { cornerType } from "../../../Util/Types/types";

export type locationsType = {
    repulsionPosition: Vector3,
    hingePosition: Vector3,
    catchingPosition: Vector3,
}

const pi = Math.PI;

export const getLocations = (side: number, offset: number, cornerName: cornerType, isCounterclockwise: boolean) : locationsType => {
    const half = side/2;

    const template : locationsType = {
        // This template works for 180 deg, counterclockwise, northwest corner
        repulsionPosition:  new Vector3(-half + -offset     , -half + offset    ,               ),
        hingePosition:      new Vector3(-half + -offset     , half + -offset    ,               ),
        catchingPosition:   new Vector3(-half*3 + offset    , half + -offset    ,               ),
    }

    let adjustment = {
        repulsionPosition: new Vector3(0, 0, 0),
        hingePosition: new Vector3(0, 0, 0),
        catchingPosition: new Vector3(0, 0, 0),
    };

    let euler = new Euler(0, 0, 0);
    switch (cornerName) {
        case "NorthEast":
            euler = isCounterclockwise ? new Euler(0, 0, 3*pi/2) : new Euler(0, pi, 0);
            adjustment = {
                repulsionPosition: template.repulsionPosition.applyEuler(euler),
                hingePosition: template.hingePosition.applyEuler(euler),
                catchingPosition: template.catchingPosition.applyEuler(euler),
            }
            break;
        case "SouthEast":
            euler = isCounterclockwise ? new Euler(0, 0, pi) : new Euler(0, pi, pi/2);
            adjustment = {
                repulsionPosition: template.repulsionPosition.applyEuler(euler),
                hingePosition: template.hingePosition.applyEuler(euler),
                catchingPosition: template.catchingPosition.applyEuler(euler),
            }
            break;
        case "SouthWest":
            euler = isCounterclockwise ? new Euler(0, 0, pi/2) : new Euler(0, pi, pi);
            adjustment = {
                repulsionPosition: template.repulsionPosition.applyEuler(euler),
                hingePosition: template.hingePosition.applyEuler(euler),
                catchingPosition: template.catchingPosition.applyEuler(euler),
            }
            break;
        // case "NorthWest":
        default:
            euler = isCounterclockwise ? new Euler(0, 0, 0) : new Euler(0, pi, 3*pi/2);
            adjustment = {
                repulsionPosition: template.repulsionPosition.applyEuler(euler),
                hingePosition: template.hingePosition.applyEuler(euler),
                catchingPosition: template.catchingPosition.applyEuler(euler),
            }
    }

    return adjustment;
}