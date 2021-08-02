import { Vector3 } from "three"

export type locationsType = {
    repulsionPosition: Vector3,
    hingePosition: Vector3,
    catchingPosition: Vector3,
}

export const getLocations = (cubePosition: Vector3, side: number, offset: number) : locationsType => {
    const half = side/2;
    const {x, y, z} = cubePosition;
    return {
        repulsionPosition:  new Vector3(x - half + offset   , y - half - offset , z             ),
        hingePosition:      new Vector3(x + half - offset   , y - half - offset , z             ),
        catchingPosition:   new Vector3(x + half*3 - offset , y - half - offset , z             ),
    }
}