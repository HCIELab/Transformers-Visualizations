import { axisType, collisionType, cornerType } from '../../Util/Types/types';
import { pathOfRotation } from '../Cube/helpers/collision/pathOfRotation';
import { deviseCornerName } from '../Cube/helpers/collision/deviseCornerName';
import { getListOfNeighborSpots } from '../Cube/helpers/collision/getListOfNeighborSpots';
import { getNeighborOfRotation } from '../Cube/helpers/collision/getNeighborOfRotation';
import { Vector3 } from 'three';


export const generateExplorePathOfRotation = (
    allPositions: {[cubeID: number]: Vector3},
    visualizePath: Function,
    rDisplacement: number,
    axisOfRotationWorld : axisType
) : Function => {
    return (cubeID: number) : {collisionResult: collisionType, cornerName: cornerType} => {
        const cubePosition = allPositions[cubeID];
        console.log("(World.tsx) allPositions: ", allPositions);
        console.log("(World.tsx) clicked Cube position ", cubePosition);

        const neighborSpots = getListOfNeighborSpots(cubePosition, axisOfRotationWorld);
        console.log("(World.tsx) neighborSpots: ", neighborSpots);

        const isCounterclockwise = rDisplacement > 0;

        const neighborOfRotation = getNeighborOfRotation(isCounterclockwise, neighborSpots, allPositions);
        console.log("(World.tsx) neighborOfRotation: ", neighborOfRotation);
        if (neighborOfRotation === null) {
            return {
                collisionResult: "NO_NEIGHBORS",
                cornerName: "NorthEast", 
            }
        }
        
        const positionsInPath : Vector3[] = pathOfRotation(axisOfRotationWorld, isCounterclockwise, cubePosition, neighborOfRotation);
        visualizePath(positionsInPath);
    
        const hasCollision = checkHasCollisions(allPositions, positionsInPath); 
    
        const cornerName = deviseCornerName(isCounterclockwise, neighborOfRotation);
    
        return {
            collisionResult: hasCollision ? "HAS_COLLISION" : "NO_COLLISION",
            cornerName: cornerName, 
        };
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