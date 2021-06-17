import { Vector3 } from "three";
import { Color } from "@react-three/fiber";

// Used for specifying a rotation
export type cornerType = "NorthEast" | "SouthEast" | "SouthWest" | "NorthWest";
export type axisType = "x" | "y" | "z";

// Used for keeping state during the Rotation Animation
export type rotationStep = "0_DEFAULT" | "1_CLICKED" | "2_ROTATING" | "3_END";

// Used for Instruction Scripts
export type initialCubeConfigType = {
    id: number,
    initialPosition: Vector3,
    color: Color,
}
export type instructionType = {
    cubeID: number,
    axis: axisType,
    corner: cornerType,
    displacement: number,
    timeToStart: number,
}

