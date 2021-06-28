import { Quaternion, Vector3 } from 'three';
import { axisType } from '../../../Util/Types/types';

export const getAxisOfRotationLocal = (finalAxis: axisType, currentRotation: Quaternion) => {
    let axisWorld : Vector3;
    switch (finalAxis) {
        case "x":
            axisWorld = new Vector3(1, 0, 0);
            break;
        case "y":
            axisWorld = new Vector3(0, 1, 0);
            break;
        case "z":
            axisWorld = new Vector3(0, 0, 1);
            break;
        default:
            console.log("SHOULD NEVER REACH THIS PART OF THE CODE");
            axisWorld = new Vector3(0, 0, 0);
    }
    // console.log("(getAxisOfRotationLocal.tsx) axisOfRotationWorld: ", axisWorld);

    /**
     * Convert from world to local if necessary
     * ex: world 'x' to local 'x'/'-x'
     */
    const foo = currentRotation.clone();
    foo.invert();
    axisWorld.applyQuaternion(foo); // now axisWorld has been mutated to become axisLocal
    const {x, y, z} = axisWorld;
	const rounded = new Vector3(Math.round(x*2)/2, Math.round(y*2)/2, Math.round(z*2)/2)
    // console.log("(getAxisOfRotationLocal.tsx) axisOfRotationLocal: ", rounded);

    return rounded;    
}
