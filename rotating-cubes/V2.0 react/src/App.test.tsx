import App from './App'
import { Vector3 } from 'three';
import { getListOfNeighborSpots } from './Demo/World/Cube/helpers/collision/getListOfNeighborSpots';
import { getNeighborOfRotation } from './Demo/World/Cube/helpers/collision/getNeighborOfRotation';
// import '@testing-library/jest-dom/extend-expect';

// test('renders without crashing', async () => {
//   render(<App/>);
// })

test('foo', async () => {
  expect(true).toBe(true);
})


test('getNeighborOfRotation test 1', async () => {
  const cubePosition = new Vector3(0, 0, 0);
  const neighborSpots = getListOfNeighborSpots(cubePosition, 'z');
  const all = {1: cubePosition, 2: new Vector3(1, 0, 0), 3: new Vector3(0, 1, 0)};
  const neighborOfRotation = getNeighborOfRotation(false, neighborSpots, all);
  expect(neighborOfRotation).toBe("TOP_NEIGHBOR");
})


