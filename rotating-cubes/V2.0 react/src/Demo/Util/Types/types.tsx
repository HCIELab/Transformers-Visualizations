import { Vector3 } from "three";
import { Color } from "@react-three/fiber";


export type cornerType = "NorthEast" | "SouthEast" | "SouthWest" | "NorthWest";
export type axisType = "x" | "y" | "z";

export type rotationStep = "0_DEFAULT" | "1_CLICKED" | "2_ROTATING" | "3_END";

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