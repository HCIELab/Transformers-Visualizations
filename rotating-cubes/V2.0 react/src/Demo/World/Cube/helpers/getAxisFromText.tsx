import { Vector3 } from 'three';
import { axisType } from '../../../Types/types';

export const getAxisFromText = (finalAxis: axisType) => {
    switch (finalAxis) {
        case "x":
            return new Vector3(1, 0, 0);
        case "y":
            return new Vector3(0, 1, 0);
        case "z":
            return new Vector3(0, 0, 1);
        default:
            return new Vector3(0, 0, 0);
    }
}
