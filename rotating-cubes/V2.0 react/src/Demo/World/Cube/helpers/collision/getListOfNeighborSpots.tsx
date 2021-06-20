import { Vector3 } from "three";
import { axisType, neighborType } from "../../../../Util/Types/types";

/**
 * 
 * @param position
 * @param axisOfRotation 
 * @returns list of neighbors in counterclockwise order
 */
export const getListOfNeighborSpots = (position: Vector3, axisOfRotation: axisType) : {[n in neighborType]: Vector3} => {
    switch (axisOfRotation) {
        case 'x':
            return {
                "LEFT_NEIGHBOR": new Vector3(0, position.y + 0, position.z + 1),
                "BOTTOM_NEIGHBOR": new Vector3(0, position.y - 1, position.z + 0),
                "RIGHT_NEIGHBOR": new Vector3(0, position.y - 0, position.z - 1),
                "TOP_NEIGHBOR": new Vector3(0, position.y + 1, position.z - 0),
            }    
        case 'y':
            return {
                "RIGHT_NEIGHBOR": new Vector3(position.x + 1, 0, position.z + 0),
                "TOP_NEIGHBOR": new Vector3(position.x + 0, 0, position.z - 1),
                "LEFT_NEIGHBOR": new Vector3(position.x - 1, 0, position.z + 0),
                "BOTTOM_NEIGHBOR": new Vector3(position.x - 0, 0, position.z + 1),
            }    
        case 'z':
            return {
                "RIGHT_NEIGHBOR": new Vector3(position.x + 1, position.y + 0, 0),
                "TOP_NEIGHBOR": new Vector3(position.x + 0, position.y + 1, 0),
                "LEFT_NEIGHBOR": new Vector3(position.x - 1, position.y - 0, 0),
                "BOTTOM_NEIGHBOR": new Vector3(position.x - 0, position.y - 1, 0),
            }    
        default:
            console.log("SHOULD NEVER REACH THIS PART OF THE CODE");
            return {
                "RIGHT_NEIGHBOR": new Vector3(0, 0, 0),
                "BOTTOM_NEIGHBOR": new Vector3(0, 0, 0),
                "LEFT_NEIGHBOR": new Vector3(0, 0, 0),
                "TOP_NEIGHBOR": new Vector3(0, 0, 0),
            }
    }
}
