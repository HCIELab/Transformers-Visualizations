import { Vector3 } from "three";
import { neighborType } from "../../../../Util/Types/types";

type findingStateType = "START" | "FOUNDONE";

/**
 * How do you determine the `neighborOfRotation`?
 * 
 * If rotating counterclockwise, then go through all of the neighbors and find the first neighbor going counterclockwise or the last neighbor going clockwise.
 * 
 * @param isCounterclockwise 
 * @param neighborsInCounterclockwise 
 * @param allPositions 
 */
export const getNeighborOfRotation = (isCounterclockwise : boolean, neighborsInCounterclockwise : Vector3[], allPositions: {[cubeID: number]: Vector3}) : neighborType => {
    console.log("********inside getNeighborOfRotation");

    let findingState : findingStateType = "START"; 
    let lastNeighborFound = null;

    let theList;
    if (isCounterclockwise) {
        theList = doubleList(neighborsInCounterclockwise);   
    } else {
        theList = doubleList(neighborsInCounterclockwise.reverse());   
    }

    for (let i = 0; i < theList; i++) {
        const position = theList[i];
        switch (findingState) {
            case 'START':
                const firstNeighborFound = searchMatchingCubePosition(position, allPositions) 
                if (firstNeighborFound) {
                    lastNeighborFound = firstNeighborFound;
                    findingState = 'FOUNDONE';
                }
                break;
            case 'FOUNDONE':
                const anotherNeighborFound = searchMatchingCubePosition(position, allPositions) 
                if (anotherNeighborFound) {
                    lastNeighborFound = anotherNeighborFound;
                } else {
                    // return lastNeighborFound;
                }
                break;
        }

    }

    // TODO: this is hardcoded for now
    return "TOP_NEIGHBOR";
}


const doubleList = (l: any[]) => {
    let result = JSON.parse(JSON.stringify(l));
    result.push.apply(JSON.parse(JSON.stringify(l)));
    return result;
}

const searchMatchingCubePosition = (position: Vector3, allPositions: {[cubeID: number]: Vector3}) => {
    for (const cubeID in allPositions) {
        if (allPositions[cubeID].equals(position)) {
            return cubeID;
        }
    }
    return null;
}