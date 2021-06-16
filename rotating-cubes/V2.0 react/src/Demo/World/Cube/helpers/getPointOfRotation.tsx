import { Vector3 } from 'three';
import { axisType, cornerType } from '../../../Util/Types/types';

/**
 * Returns the vector that matches the pivot corner picked, and a negation of that vector
 * To be used with translateGroup to translate local/world objects around
 * 
 * @param finalCorner NORTHEAST/SOUTHEAST/SOUTHWEST/NORTHWEST
 * @param side The lenght of one side of the cube
 * @returns two vectors, one equivalent to the pivot and one that is the 
 * opposite of that
 */
 export const getPointOfRotation = (finalCorner: cornerType, side: number, finalAxis: axisType) => {
	let piv = new Vector3(-3,-3,-3);

	switch (finalAxis) {
		case "z":
			switch(finalCorner) {
				case "NorthEast": //(x+1, y+1)
					piv = new Vector3(side/2, side/2, 0);
					break;
				case "SouthEast": //(x+1, y-1)
					piv = new Vector3(side/2, -side/2, 0);
					break;
				case "SouthWest": //(x-1, y-1)
					piv = new Vector3(-side/2, -side/2, 0);
					break;
				case "NorthWest": //(x-1, y+1)
					piv = new Vector3(-side/2, side/2, 0);
					break;
				default:
					console.log("SHOULD NEVER REACH THIS PART OF THE CODE");
			}
			break;
		case "x":
			switch(finalCorner) {
				case "NorthEast": 
					piv = new Vector3(0, side/2, -side/2);
					break;
				case "SouthEast": 
					piv = new Vector3(0, -side/2, -side/2);
					break;
				case "SouthWest": 
					piv = new Vector3(0, -side/2, side/2);
					break;
				case "NorthWest": 
					piv = new Vector3(0, side/2, side/2);
					break;
				default:
					console.log("SHOULD NEVER REACH THIS PART OF THE CODE");
			}
			break;
		// case "y":
		default:
			switch(finalCorner) {
				case "NorthEast": 
					piv = new Vector3(side/2, 0, -side/2);
					break;
				case "SouthEast": 
					piv = new Vector3(side/2, 0, side/2);
					break;
				case "SouthWest": 
					piv = new Vector3(-side/2, 0, side/2);
					break;
				case "NorthWest": 
					piv = new Vector3(-side/2, 0, -side/2);
					break;
				default:
					console.log("SHOULD NEVER REACH THIS PART OF THE CODE");
			}
			break;
	}

	let opp = piv.clone();
	opp.negate()

	return [piv, opp]
}
