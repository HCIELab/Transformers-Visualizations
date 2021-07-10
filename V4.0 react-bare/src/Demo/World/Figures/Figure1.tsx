import { Color, useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { Vector3 } from "three";
import { rotationStep } from "../../Util/Types/types";
import Box from "./Box";
import { sideLength } from "./helpers/constants";
import {translateGroup} from "./helpers/translateGroup";


export const Figure1 = (props: {
    position: Vector3,
    id: number,
    color: Color    
}) => {
    const innerRef = useRef<THREE.Group>(null!);
    const outerRef = useRef<THREE.Group>(null!);

    const [step, setStep] = useState<rotationStep>("0_DEFAULT");

    // Set the initial position only at first render
    useEffect(() => {
        const {x, y, z} = props.position;
        outerRef.current.position.set(x, y, z);
        console.log("setting initial position");
    }, [props.position])

    // Wait some time after first render and then start animating
    const TIME_TO_START = 1000;
    useEffect(() => {
        if (step === "0_DEFAULT") {
            setTimeout(() => setStep("1_CLICKED"), TIME_TO_START)
        }
    }, [step])

    // Do the right group positioning to get ready
    useEffect(() => {
        if (step === "1_CLICKED") {
            translateGroup(outerRef, new Vector3(sideLength/2, -sideLength/2, 0))
            translateGroup(innerRef, new Vector3(-sideLength/2, sideLength/2, 0))
            setStep("2_ROTATING");
        }
    }, [step])

    // Execute the rotation animation
    const INCREMENT = 0.05;
    useFrame(() => {
        if (step === "2_ROTATING") {
            if (outerRef.current.rotation.z < Math.PI/2) {
                outerRef.current.rotateOnAxis(new Vector3(0, 0, 1), 1*INCREMENT);
            }
            else {
                outerRef.current.rotation.set(0, 0, Math.PI/2);
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
        <group 
            ref={outerRef} 
        >
            {/* <mesh>
                <boxGeometry args={[sideLength, sideLength, sideLength]} />
                <meshStandardMaterial color={"#5d31ff"}/>
            </mesh> */}
            <group 
                ref={innerRef}
            >
                <Box
                    id={props.id}
                    color={props.color}
                />
            </group>
        </group>
    )
}
