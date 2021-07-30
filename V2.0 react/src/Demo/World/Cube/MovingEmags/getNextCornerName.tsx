import { cornerType } from '../../../Util/Types/types';

const cornerNamesList : cornerType[] = ["NorthEast", "SouthEast", "SouthWest", "NorthWest"];
const NUM_CORNER_NAMES = cornerNamesList.length;

export const getNextCornerName = (currentCorner: cornerType) : cornerType => {
    const currentIndex = cornerNamesList.indexOf(currentCorner);
    return cornerNamesList[(currentIndex+1) % NUM_CORNER_NAMES];
} 