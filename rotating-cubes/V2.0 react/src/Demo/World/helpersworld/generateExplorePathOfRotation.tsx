import { axisType, collisionType, cornerType } from '../../Util/Types/types';
import { pathOfRotation } from '../Cube/helpers/collision/pathOfRotation';
import { deviseCornerName } from '../Cube/helpers/collision/deviseCornerName';
import { getListOfNeighborSpots } from '../Cube/helpers/collision/getListOfNeighborSpots';
import { getNeighborOfRotation } from '../Cube/helpers/collision/getNeighborOfRotation';
import { Vector3 } from 'three';


export const generateExplorePathOfRotation = (
    allPositions: {[cubeID: number]: Vector3},
    visualizePath: Function,
    isCounterclockwise: boolean,
    axisOfRotationWorld : axisType
) : Function => {
    return (cubeID: number) : {collisionResult: collisionType, cornerName: cornerType | null, displacementMagnitude: number} => {
        const cubePosition = allPositions[cubeID];
        console.log("(generateExplorePathOfRotation.tsx) allPositions: ", allPositions);
        console.log("(generateExplorePathOfRotation.tsx) clicked Cube position ", cubePosition);

        const neighborSpots = getListOfNeighborSpots(cubePosition, axisOfRotationWorld);
        console.log("(generateExplorePathOfRotation.tsx) neighborSpots: ", neighborSpots);

        const neighborOfRotation = getNeighborOfRotation(isCounterclockwise, neighborSpots, allPositions);
        console.log("(generateExplorePathOfRotation.tsx) neighborOfRotation: ", neighborOfRotation);
        if (neighborOfRotation === null) {
            return {collisionResult: "NO_NEIGHBORS", cornerName: null, displacementMagnitude: 0,}
        } else {
            const cornerName = deviseCornerName(isCounterclockwise, neighborOfRotation);

            // Check for 180 degree rotation
            const yes180 = true;
            const positionsInPath180 : Vector3[] = pathOfRotation(axisOfRotationWorld, isCounterclockwise, cubePosition, neighborOfRotation, yes180);
            const hasCollision180 = checkHasCollisions(allPositions, positionsInPath180); 
            if (!hasCollision180) {
                console.log("(generateExplorePathOfRotation.tsx) rotating 180")
                visualizePath(positionsInPath180);
                return {collisionResult: "NO_COLLISION", cornerName: cornerName, displacementMagnitude: Math.PI};    
            }

            // Check for 90 degree rotation
            const no180 = false;
            const positionsInPath90 : Vector3[] = pathOfRotation(axisOfRotationWorld, isCounterclockwise, cubePosition, neighborOfRotation, no180);
            const hasCollision90 = checkHasCollisions(allPositions, positionsInPath90); 
            if (!hasCollision90) {
                console.log("(generateExplorePathOfRotation.tsx) rotating 90")
                visualizePath(positionsInPath90);
                return {collisionResult: "NO_COLLISION", cornerName: cornerName, displacementMagnitude: Math.PI/2};    
            }
        
            return {collisionResult: "HAS_COLLISION", cornerName: cornerName, displacementMagnitude: 0};    
        }
    }
}


const checkHasCollisions = ( allPositions: {[cubeID: number]: Vector3}, positionsInPath: Vector3[] ) : boolean => {
    console.log("(checkHasCollisions) allPositions and positionsInPath", allPositions, positionsInPath);
    for (const cubeID in allPositions) {
        const occupiedPosition = allPositions[cubeID];
        for (let i = 0; i < positionsInPath.length; i++) {
            const pathPosition = positionsInPath[i];
            if (occupiedPosition.equals(pathPosition)) {
                return true;
            }
        }
    }
    return false;
}