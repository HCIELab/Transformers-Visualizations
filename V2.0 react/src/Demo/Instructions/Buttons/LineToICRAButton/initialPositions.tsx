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
                if (!letterRCubes.includes(cubeID) && !letterACubes.includes(cubeID) )
                result.push(
                    {id: cubeID, initialPosition: new Vector3(c - Math.round(width/2), -1*r, 0)}
                )
            }
        }        
    }
    return result;
}


const letterRCubes : number[] = [
    42,
    28,
    14,
    43,
    29,
    15,
    44,
    30,
    16,
    45,
    31,
    17,
    46,
    32,]

const letterACubes : number[] = [
        41,
        27,
        40,
        26,
        53,
        39,
        25,
        52,
        38,
        24,
        51,
        37,
    ]