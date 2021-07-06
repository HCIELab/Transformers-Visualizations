import { Vector3 } from "three";

export const translateGroup = (object : React.MutableRefObject<THREE.Group>, vec : Vector3) => {
	object.current.translateX(vec.x);
	object.current.translateY(vec.y);
	object.current.translateZ(vec.z);
}
