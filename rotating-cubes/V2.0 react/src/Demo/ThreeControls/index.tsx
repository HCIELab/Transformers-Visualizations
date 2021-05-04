import { useEffect } from 'react';

import { useThree, extend } from '@react-three/fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

extend({OrbitControls})

const ThreeControls = () => {
    const {
        camera,
        gl: { domElement }
    } = useThree();

	useEffect(() => {
		console.log("...orbit controls added");
		const oc = new OrbitControls(camera, domElement);
		oc.addEventListener("change", () => console.log("should be rerendering the text now"))

		return () => oc.dispose();
	}, [camera, domElement])

	return null;
}

export default ThreeControls;