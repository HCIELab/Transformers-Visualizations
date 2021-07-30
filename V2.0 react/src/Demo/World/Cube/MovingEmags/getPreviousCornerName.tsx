import { cornerType } from '../../../Util/Types/types';

const cornerNamesList : cornerType[] = ["NorthEast", "SouthEast", "SouthWest", "NorthWest"];
const NUM_CORNER_NAMES = cornerNamesList.length;

export const getPreviousCornerName = (currentCorner: cornerType) : cornerType => {
    const currentIndex = cornerNamesList.indexOf(currentCorner);
    if (currentIndex === 0) {
        return cornerNamesList[NUM_CORNER_NAMES-1];
    }
    else {
        return cornerNamesList[(currentIndex-1) % NUM_CORNER_NAMES];
    }
} 