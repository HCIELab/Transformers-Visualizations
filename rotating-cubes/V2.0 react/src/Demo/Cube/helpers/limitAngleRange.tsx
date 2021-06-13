export const limitAngleRange = (angle: number) => {
    // range is [-Math.PI, Math.PI]
    const [low, high] = [-Math.PI, Math.PI];
    if (angle > high) {
        const extra = (angle - high);
        return low + extra;
    }
    else if (angle < low) {
        const extra = angle - low;
        return high + extra;
    }
    else {
        return angle;
    }
}