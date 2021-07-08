import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Vector3 } from "three";
import Box from "./Box";


export const Figure3 = () => {
    const ref = useRef<THREE.Group>(null!);

    const INCREMENT = 0.05;
    useFrame(() => {
        if (ref.current.rotation.z > -Math.PI/2) {
            ref.current.rotateOnAxis(new Vector3(0, 0, 1), -1*INCREMENT);
        }
    })
    
    return (
        <Box
            ref={ref}
            id={3}
            position={new Vector3(1, 0, 0)}
            color={"#77410e"}
        />
    )
}
