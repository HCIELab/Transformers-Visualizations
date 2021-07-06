export const roundToRightAngle = (angle: number) => {
    const integerCount = Math.round(angle / (Math.PI / 2)); //may be negative and should still work
    const result = integerCount * Math.PI / 2; //convert back to angle
    return result;
}