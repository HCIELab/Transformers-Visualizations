import { axisType, collisionType, cornerType } from '../../Util/Types/types';
import { pathOfRotation } from '../Cube/helpers/collision/pathOfRotation';
import { deviseCornerOfRotation } from '../Cube/helpers/collision/deviseCornerOfRotation';
import { getListOfNeighborSpots } from '../Cube/helpers/collision/getListOfNeighborSpots';
import { getNeighborOfRotation } from '../Cube/helpers/collision/getNeighborOfRotation';
import { Vector3 } from 'three';


export const generateExplorePathOfRotation = (allPositions: {[cubeID: number]: Vector3}, visualizePath: Function, rDisplacement: number, axisOfRotationWorld : axisType) : Function => {
    return (cubeID: number) : {collisionResult: collisionType, cornerOfRotation: cornerType} => {
        console.log("(World.tsx) allPositions: ", allPositions);
        const cubePosition = allPositions[cubeID]
        const neighborSpots = getListOfNeighborSpots(cubePosition, axisOfRotationWorld);
        console.log("(World.tsx) clicked Cube position ", cubePosition);
        console.log("(World.tsx) neighborSpots: ", neighborSpots);
        const isCounterclockwise = rDisplacement > 0;
        const neighborOfRotation = getNeighborOfRotation(isCounterclockwise, neighborSpots, allPositions);
        console.log("(World.tsx) neighborOfRotation: ", neighborOfRotation);
        if (neighborOfRotation === null) {
            return {
                collisionResult: "NO_NEIGHBORS",
                cornerOfRotation: "NorthEast", 
            }
        }
        
        const positionsInPath = pathOfRotation(axisOfRotationWorld, isCounterclockwise, cubePosition, neighborOfRotation);
        visualizePath(positionsInPath);
    
        // TODO: compare allPositions with the positionsInPath in order to detect collision
        const hasCollision = false; 
        
        const cornerOfRotation = deviseCornerOfRotation(isCounterclockwise, neighborOfRotation);
        // console.log("(World.tsx) cornerOfRotation: ", cornerOfRotation);
        // console.log("(World.tsx) rotation: ", rotation);
    
        return {
            collisionResult: hasCollision ? "HAS_COLLISION" : "NO_COLLISION",
            cornerOfRotation: cornerOfRotation, 
        };
    }
}


