import React, { ReactNode, Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from "@react-three/drei";
import { Vector3 } from 'three';
import { ResizeObserver } from '@juggle/resize-observer';

import { axisType, initialCubeConfigType, instructionType } from '../Util/Types/types';
import Cube from './Cube';
import Arrows from './Arrows';
import PathBlock from './PathBlock';

const World = (props: {
    axisOfRotationWorld: axisType,
    setAxisOfRotationWorld: Function,
    isCounterclockwise: boolean,
    setIsCounterclockwise: Function,
    initialCubeConfigs: initialCubeConfigType[],
    instructions: instructionType[],
    incrementAmount: number,
    showPath: boolean,
    displayEmagIDs: boolean,
    displayCubeBox: boolean,
    displayCoilsAndCorners: boolean,
    displayBlueCubeBox: boolean,
}) => {
    console.log("(World.tsx) Rendering the World component");
    
    const [allPositions, setAllPositions] = useState<{[cubeID: number]: Vector3}>({});
    const {initialCubeConfigs} = props; 
    useEffect(() => {
        let temp : {[cubeID: number]: Vector3} = {};
        initialCubeConfigs.forEach(({id, initialPosition}) => {
            temp[id] = initialPosition;
        })
        setAllPositions(temp);
    }, [initialCubeConfigs])


    const setPosition = (cubeID : number) => {   
        return (newPosition : Vector3) => {
            console.log(`(World.tsx) (for cube ${cubeID}) setPosition to:`, newPosition)
            delete allPositions[cubeID];
            allPositions[cubeID] = newPosition;
        }
    }


    const [pathBlocks, setPathBlocks] = useState<ReactNode[]>([]);
    const {showPath} = props;
    const visualizePath = (pointsInPath: Vector3[]) => {
        if (showPath) {
            const pathElements: ReactNode[] = pointsInPath.map((point, index) => 
                <PathBlock
                    key={index}
                    color={"#0044ff"}
                    placement={point}
                />
            )
            setPathBlocks(pathElements);
        }
    }
    useEffect(() => {
        if (!showPath) {
            setPathBlocks([]);
        }
    }, [showPath])

    return (
        <Canvas resize={{ polyfill: ResizeObserver }} >
            {/* Lights */}
            <ambientLight />
            <pointLight position={[10, 10, 10]} />

            {/* Orbit Controls */}
            <OrbitControls enableDamping={false}/>
            
            {/* Visual Helpers */}
            {/* <axesHelper position={[-0.5, -0.5, 0]} scale={2}/> */}
            {/* <gridHelper rotation={new Euler(Math.PI/2, 0, 0)} position={[0.5, 0.5, -0.5]}/> */}
            
            {/* Cubes */}
            {
                props.initialCubeConfigs.map((config) => 
                    <Suspense 
                        fallback={<FallbackBox/>}
                        key={config.id}
                    >
                        <Cube
                            instructions={props.instructions}
                            id={config.id} 
                            initialPosition={config.initialPosition} 
                            color={config.color} 
                            isCounterclockwise={props.isCounterclockwise}
                            setIsCounterclockwise={props.setIsCounterclockwise}                        
                            axisOfRotationWorld={props.axisOfRotationWorld}
                            setAxisOfRotationWorld={props.setAxisOfRotationWorld}
                            updatePosition={setPosition(config.id)}
                            allPositions={allPositions}
                            visualizePath={visualizePath}

                            incrementAmount={props.incrementAmount}
                            showPath={props.showPath}
                            displayEmagIDs={props.displayEmagIDs}
                            displayCubeBox={props.displayCubeBox}    
                            displayCoilsAndCorners={props.displayCoilsAndCorners}    
                            displayBlueCubeBox={props.displayBlueCubeBox}    
                        />
                    </Suspense>        
                )
            }

            {/* Path Blocks */}
            {pathBlocks}

            {/* Arrows */}
            <Arrows
                axisOfRotationWorld={props.axisOfRotationWorld}
                setAxisOfRotationWorld={props.setAxisOfRotationWorld}
                isCounterclockwise={props.isCounterclockwise}
                setIsCounterclockwise={props.setIsCounterclockwise}
            />
        </Canvas>
    )
}


const FallbackBox = () => {
    return (
        <mesh>
            <boxGeometry/>
            <meshStandardMaterial color={"gray"}/>
        </mesh>
    ) 
}



export default World;