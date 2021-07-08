import { useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { Vector3 } from "three";
import { rotationStep } from "../../Util/Types/types";
import Box from "./Box";
import {translateGroup} from "./helpers/translateGroup";


export const Figure3 = () => {
    const innerRef = useRef<THREE.Group>(null!);
    const outerRef = useRef<THREE.Group>(null!);

    const [step, setStep] = useState<rotationStep>("0_DEFAULT");

    // Wait some time after first render and then start animating
    const TIME_TO_START = 2000;
    useEffect(() => {
        if (step === "0_DEFAULT") {
            setTimeout(() => setStep("1_CLICKED"), TIME_TO_START)
        }
    }, [step])

    // Do the right group positioning to get ready
    useEffect(() => {
        if (step === "1_CLICKED") {
            translateGroup(outerRef, new Vector3(0, 0, 1))
            translateGroup(innerRef, new Vector3(0, 0, -1))
            setStep("2_ROTATING");
        }
    }, [step])

    // Execute the rotation animation
    const INCREMENT = 0.05;
    useFrame(() => {
        if (step === "2_ROTATING") {
            if (innerRef.current.rotation.z > -Math.PI/2) {
                innerRef.current.rotateOnAxis(new Vector3(0, 0, 1), -1*INCREMENT);
            }
            else {
                innerRef.current.rotation.set(0, 0, -Math.PI/2);
                setStep("3_END")
            }
        }
    })

    // Done with animation
    useEffect(() => {
        if (step === "3_END") {
            console.log("animation complete for this Box");
        }
    }, [step])
    


    return (
        <group ref={outerRef}>
            <Box
                ref={innerRef}
                id={3}
                position={new Vector3(1, 0, 0)}
                color={"#77410e"}
            />
        </group>
    )
}
