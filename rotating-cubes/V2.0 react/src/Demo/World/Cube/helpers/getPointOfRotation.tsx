import { Euler, Vector3 } from 'three';
import { axisType, cornerType } from '../../../Util/Types/types';

export const getPointOfRotation = (cornerOfRotation: cornerType, side: number, axisOfRotation: axisType, rotation: Euler) : Vector3 => {
	const point = getPointOfRotationWithNoEulerCompensation(cornerOfRotation, side, axisOfRotation);
	console.log("(getPointOfRotation.tsx) point: ", point);
	point.applyEuler(rotation)
	console.log("(getPointOfRotation.tsx) point: ", point);
	return point;
}

/**
 * Returns the vector that matches the pivot corner picked
 */
const getPointOfRotationWithNoEulerCompensation = (cornerOfRotation: cornerType, side: number, axisOfRotation: axisType) : Vector3 => {
	switch (axisOfRotation) {
		case "z":
			switch(cornerOfRotation) {
				case "NorthEast": //(x+1, y+1)
					return new Vector3(side/2, side/2, 0);
				case "SouthEast": //(x+1, y-1)
					return new Vector3(side/2, -side/2, 0);
				case "SouthWest": //(x-1, y-1)
					return new Vector3(-side/2, -side/2, 0);
				case "NorthWest": //(x-1, y+1)
					return new Vector3(-side/2, side/2, 0);
				default:
					console.log("SHOULD NEVER REACH THIS PART OF THE CODE");
			}
			break;
		case "x":
			switch(cornerOfRotation) {
				case "NorthEast": 
					return new Vector3(0, side/2, -side/2);
				case "SouthEast": 
					return new Vector3(0, -side/2, -side/2);
				case "SouthWest": 
					return new Vector3(0, -side/2, side/2);
				case "NorthWest": 
					return new Vector3(0, side/2, side/2);
				default:
					console.log("SHOULD NEVER REACH THIS PART OF THE CODE");
			}
			break;
		// case "y":
		default:
			switch(cornerOfRotation) {
				case "NorthEast": 
					return new Vector3(side/2, 0, -side/2);
				case "SouthEast": 
					return new Vector3(side/2, 0, side/2);
				case "SouthWest": 
					return new Vector3(-side/2, 0, side/2);
				case "NorthWest": 
					return new Vector3(-side/2, 0, -side/2);
				default:
					console.log("SHOULD NEVER REACH THIS PART OF THE CODE");		
			}
			break;
	}
	console.log("SHOULD NEVER REACH THIS PART OF THE CODE");
	return new Vector3(-3, -3, -3);
}
