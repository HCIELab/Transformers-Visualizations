export type cornerType = "NorthEast" | "SouthEast" | "SouthWest" | "NorthWest";
export type axisType = "x" | "y" | "z";

export type rotationStep = "0_DEFAULT" | "1_CLICKED" | "2_ROTATING" | "3_END";

export type instructionType = {
    cubeID: number,
    axis: axisType,
    corner: cornerType,
    displacement: number,
    timeToStart: number,
}