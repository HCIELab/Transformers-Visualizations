import { Vector3 } from "three";
import { neighborType } from "../../../../Util/Types/types";

type findingStateType = "START" | "FOUNDONE";

/**
 * How do you determine the `neighborOfRotation`?
 * 
 * If rotating counterclockwise, then go through all of the neighbors and find the first neighbor going counterclockwise or the last neighbor going clockwise.
 * 
 */
export const getNeighborOfRotation = (rotationIsCounterclockwise : boolean, neighborSpots: {[n in neighborType]: Vector3}, allPositions: {[cubeID: number]: Vector3}) : neighborType | null => {
    let findingState : findingStateType = "START"; 
    let lastNeighborFound : neighborType | null = null;

    const neighborTypesList = rotationIsCounterclockwise ? neighborTypesClockwise() : neighborTypesCounterclockwise();

    for (let i = 0; i < neighborTypesList.length; i++) {
        const neighborTypeName = neighborTypesList[i];
        const position = neighborSpots[neighborTypeName];
        // console.log(neighborTypeName, position, findingState, lastNeighborFound);
        switch (findingState) {
            case 'START':
                const firstNeighborFound = findIfPositionExists(position, allPositions) 
                if (firstNeighborFound) {
                    lastNeighborFound = neighborTypeName;
                    findingState = 'FOUNDONE';
                }
                break;
            case 'FOUNDONE':
                const anotherNeighborFound = findIfPositionExists(position, allPositions) 
                if (anotherNeighborFound) {
                    lastNeighborFound = neighborTypeName;
                } else {
                    return lastNeighborFound;
                }
                break;
        }
    }

    return lastNeighborFound;
}


const neighborTypesCounterclockwise = () : neighborType[] => {
    return ["LEFT_NEIGHBOR", "BOTTOM_NEIGHBOR", "RIGHT_NEIGHBOR", "TOP_NEIGHBOR"]
}

const neighborTypesClockwise = () : neighborType[] => {
    return neighborTypesCounterclockwise().reverse();
}

const findIfPositionExists = (position: Vector3, allPositions: {[cubeID: number]: Vector3}) => {
    for (const cubeID in allPositions) {
        if (allPositions[cubeID].equals(position)) {
            return cubeID;
        }
    }
    return null;
}