import React from 'react';

import { useThree, extend, ReactThreeFiber } from '@react-three/fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

extend({OrbitControls})
declare global {
    namespace JSX {
      interface IntrinsicElements {
        'orbitControls': ReactThreeFiber.Object3DNode<OrbitControls, typeof OrbitControls>;
      }
    }
}


const Controls = () => {
    const {
        camera,
        gl: { domElement }
    } = useThree();

    return (
        <orbitControls args={[camera, domElement]}/>
    )
}

export default Controls;