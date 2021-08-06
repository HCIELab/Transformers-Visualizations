import { Vector3 } from "three";

// Used for specifying a rotation
export type cornerType = "NorthEast" | "SouthEast" | "SouthWest" | "NorthWest";
export type axisType = "x" | "y" | "z";

// Used for keeping state during the Rotation Animation
export type rotationStep = "0_DEFAULT" | "1_CLICKED" | "2_ROTATING" | "3_END";

// Used for Instruction Scripts
export type initialCubeConfigType = {
    id: number,
    initialPosition: Vector3,
}
export type instructionType = {
    cubeID: number,
    axis: axisType,
    isCounterclockwise: boolean,
    timeToStart: number,
}

// Used for collision path 
export type neighborType = "TOP_NEIGHBOR" | "RIGHT_NEIGHBOR" | "BOTTOM_NEIGHBOR" | "LEFT_NEIGHBOR";
export type collisionType = "HAS_COLLISION" | "NO_COLLISION" | "NO_NEIGHBORS";