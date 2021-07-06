import { Vector3 } from 'three';
import { getListOfNeighborSpots } from './getListOfNeighborSpots';
import { getNeighborOfRotation } from './getNeighborOfRotation';

{
	const CUBE_POSITION = new Vector3(0, 0, 0);
	const axisOfRotation = 'z';
	const neighborSpots = getListOfNeighborSpots(CUBE_POSITION, axisOfRotation);

	test('getNeighborOfRotation (axis - z, neighbor - none, counterclockwise)', async () => {
		const allPositions = {
			1: CUBE_POSITION, 
		};
		const isCounterclockwise = true;
		const neighborOfRotation = getNeighborOfRotation(isCounterclockwise, neighborSpots, allPositions);
		expect(neighborOfRotation).toBe(null);
	})

	test('getNeighborOfRotation (axis - z, neighbor - left, counterclockwise)', async () => {
		const allPositions = {
			1: CUBE_POSITION, 
			2: new Vector3(-1, 0, 0), 
		};
		const isCounterclockwise = true;
		const neighborOfRotation = getNeighborOfRotation(isCounterclockwise, neighborSpots, allPositions);
		expect(neighborOfRotation).toBe("LEFT_NEIGHBOR");
	})

	test('getNeighborOfRotation (axis - z, neighbor - left, clockwise)', async () => {
		const allPositions = {
			1: CUBE_POSITION, 
			2: new Vector3(-1, 0, 0), 
		};
		const isCounterclockwise = false;
		const neighborOfRotation = getNeighborOfRotation(isCounterclockwise, neighborSpots, allPositions);
		expect(neighborOfRotation).toBe("LEFT_NEIGHBOR");
	})

	test('getNeighborOfRotation (axis - z, neighbor - top, counterclockwise)', async () => {
		const allPositions = {
			1: CUBE_POSITION, 
			2: new Vector3(0, 1, 0), 
		};
		const isCounterclockwise = true;
		const neighborOfRotation = getNeighborOfRotation(isCounterclockwise, neighborSpots, allPositions);
		expect(neighborOfRotation).toBe("TOP_NEIGHBOR");
	})

	test('getNeighborOfRotation (axis - z, neighbor - top, clockwise)', async () => {
		const allPositions = {
			1: CUBE_POSITION, 
			2: new Vector3(0, 1, 0), 
		};
		const isCounterclockwise = false;
		const neighborOfRotation = getNeighborOfRotation(isCounterclockwise, neighborSpots, allPositions);
		expect(neighborOfRotation).toBe("TOP_NEIGHBOR");
	})

	test('getNeighborOfRotation (axis - z, neighbor - top and left, counterclockwise)', async () => {
		const allPositions = {
			1: CUBE_POSITION, 
			2: new Vector3(-1, 0, 0), 
			3: new Vector3(0, 1, 0)
		};
		const isCounterclockwise = true;
		const neighborOfRotation = getNeighborOfRotation(isCounterclockwise, neighborSpots, allPositions);
		expect(neighborOfRotation).toBe("TOP_NEIGHBOR");
	})
	
	test('getNeighborOfRotation (axis - z, neighbor - top and left, clockwise)', async () => {
		const allPositions = {
			1: CUBE_POSITION, 
			2: new Vector3(-1, 0, 0), 
			3: new Vector3(0, 1, 0)
		};
		const isCounterclockwise = false;
		const neighborOfRotation = getNeighborOfRotation(isCounterclockwise, neighborSpots, allPositions);
		expect(neighborOfRotation).toBe("LEFT_NEIGHBOR");
	})
}	

{
	const CUBE_POSITION = new Vector3(0, 0, 0);
	const axisOfRotation = 'y';
	const neighborSpots = getListOfNeighborSpots(CUBE_POSITION, axisOfRotation);

	test('getNeighborOfRotation (axis - y, neighbor - none, counterclockwise)', async () => {
		const allPositions = {
			1: CUBE_POSITION, 
		};
		const isCounterclockwise = true;
		const neighborOfRotation = getNeighborOfRotation(isCounterclockwise, neighborSpots, allPositions);
		expect(neighborOfRotation).toBe(null);
	})

	test('getNeighborOfRotation (axis - y, neighbor - top and left, counterclockwise)', async () => {
		const allPositions = {
			1: CUBE_POSITION, 
			2: new Vector3(-1, 0, 0), 
			3: new Vector3(0, 0, -1)
		};
		const isCounterclockwise = true;
		const neighborOfRotation = getNeighborOfRotation(isCounterclockwise, neighborSpots, allPositions);
		expect(neighborOfRotation).toBe("TOP_NEIGHBOR");
	})
	
	test('getNeighborOfRotation (axis - y, neighbor - top and left, clockwise)', async () => {
		const allPositions = {
			1: CUBE_POSITION, 
			2: new Vector3(-1, 0, 0), 
			3: new Vector3(0, 0, -1)
		};
		const isCounterclockwise = false;
		const neighborOfRotation = getNeighborOfRotation(isCounterclockwise, neighborSpots, allPositions);
		expect(neighborOfRotation).toBe("LEFT_NEIGHBOR");
	})
}	


{
	const CUBE_POSITION = new Vector3(0, 0, 0);
	const axisOfRotation = 'x';
	const neighborSpots = getListOfNeighborSpots(CUBE_POSITION, axisOfRotation);

	test('getNeighborOfRotation (axis - x, neighbor - none, counterclockwise)', async () => {
		const allPositions = {
			1: CUBE_POSITION, 
		};
		const isCounterclockwise = true;
		const neighborOfRotation = getNeighborOfRotation(isCounterclockwise, neighborSpots, allPositions);
		expect(neighborOfRotation).toBe(null);
	})

	test('getNeighborOfRotation (axis - x, neighbor - top and left, counterclockwise)', async () => {
		const allPositions = {
			1: CUBE_POSITION, 
			2: new Vector3(0, 1, 0), 
			3: new Vector3(0, 0, 1)
		};
		const isCounterclockwise = true;
		const neighborOfRotation = getNeighborOfRotation(isCounterclockwise, neighborSpots, allPositions);
		expect(neighborOfRotation).toBe("TOP_NEIGHBOR");
	})
	
	test('getNeighborOfRotation (axis - x, neighbor - top and left, clockwise)', async () => {
		const allPositions = {
			1: CUBE_POSITION, 
			2: new Vector3(0, 1, 0), 
			3: new Vector3(0, 0, 1)
		};
		const isCounterclockwise = false;
		const neighborOfRotation = getNeighborOfRotation(isCounterclockwise, neighborSpots, allPositions);
		expect(neighborOfRotation).toBe("LEFT_NEIGHBOR");
	})
}	
