import { Vector3 } from 'three';
import { getListOfNeighborSpots } from './World/Cube/helpers/collision/getListOfNeighborSpots';
import { getNeighborOfRotation } from './World/Cube/helpers/collision/getNeighborOfRotation';


test('getNeighborOfRotation test 1', async () => {
	const CUBE_POSITION = new Vector3(0, 0, 0);
	const axisOfRotation = 'z';
	const neighborSpots = getListOfNeighborSpots(CUBE_POSITION, axisOfRotation);
	const allPositions = {
		1: CUBE_POSITION, 
		2: new Vector3(1, 0, 0), 
		3: new Vector3(0, 1, 0)
	};
	const neighborOfRotation = getNeighborOfRotation(false, neighborSpots, allPositions);
	expect(neighborOfRotation).toBe("TOP_NEIGHBOR");
})


test('getNeighborOfRotation test 2', async () => {
})
