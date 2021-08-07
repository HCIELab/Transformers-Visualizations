import { Vector3 } from "three";
import { initialCubeConfigType } from "../../../Util/Types/types";

export const initialPositions = () : initialCubeConfigType[] => {
    const result : initialCubeConfigType[] = [];

    const NUM_CUBES = 54;
    const width = 14;
    const height = 4;
    for (let r = 0; r < height; r += 1) {
        for (let c = 0; c < width; c += 1) {
            const cubeID = r*width+c;
            if (cubeID < NUM_CUBES) {
                result.push(
                    {id: cubeID, initialPosition: new Vector3(c - Math.round(width/2), -1*r, 0)}
                )
            }
        }        
    }
    return result;
}

