import { Vector3 } from "three";
import { axisType } from "../../../../Util/Types/types";

/**
 * 
 * @param position
 * @param axisOfRotation 
 * @returns list of neighbors in counterclockwise order
 */
export const getListOfNeighborSpots = (position: Vector3, axisOfRotation: axisType) => {
    switch (axisOfRotation) {
        case 'x':
            return [
                new Vector3(0, position.y + 0, position.z + 1),
                new Vector3(0, position.y + 1, position.z + 0),
                new Vector3(0, position.y - 0, position.z - 1),
                new Vector3(0, position.y - 1, position.z - 0),
            ]    
        case 'y':
            return [
                new Vector3(position.x + 0, 0, position.z + 1),
                new Vector3(position.x + 1, 0, position.z + 0),
                new Vector3(position.x - 0, 0, position.z - 1),
                new Vector3(position.x - 1, 0, position.z - 0),
            ]    
        case 'z':
            return [
                new Vector3(position.x + 1, position.y + 0, 0),
                new Vector3(position.x + 0, position.y + 1, 0),
                new Vector3(position.x - 1, position.y - 0, 0),
                new Vector3(position.x - 0, position.y - 1, 0),
            ]    
        default:
            console.log("SHOULD NEVER REACH THIS PART OF THE CODE");
            return []
    }
}
