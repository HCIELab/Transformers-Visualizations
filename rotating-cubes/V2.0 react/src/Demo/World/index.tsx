import React, { ReactNode, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import ThreeControls from "./ThreeControls";
import { Euler, Vector3 } from 'three';
import { ResizeObserver } from '@juggle/resize-observer';

import { axisType, collisionType, cornerType, initialCubeConfigType, instructionType } from '../Util/Types/types';
import Cube from './Cube';
import PathBlock from './PathBlock';
import { pathOfRotation } from './Cube/helpers/collision/pathOfRotation';
import { deviseCornerOfRotation } from './Cube/helpers/collision/deviseCornerOfRotation';
import { getListOfNeighborSpots } from './Cube/helpers/collision/getListOfNeighborSpots';
import { getNeighborOfRotation } from './Cube/helpers/collision/getNeighborOfRotation';

const World = (props: {
    initialCubeConfigs: initialCubeConfigType[],
    instructions: instructionType[],
    rDisplacement: number,
    axisOfRotationWorld: axisType,
    showPath: boolean,
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
                    color={"#ff0000"}
                    placement={point}
                />
            )
            setPathBlocks(pathElements);
        }
    }
    // useEffect(() => {
    //     if (!showPath) {
    //         setPathBlocks([]);
    //     }
    // }, [showPath])

    const explorePathOfRotation = (cubeID: number) : {collisionResult: collisionType, cornerOfRotation: cornerType} => {
        console.log("(World.tsx) allPositions: ", allPositions);
        const cubePosition = allPositions[cubeID]
        const neighborSpots = getListOfNeighborSpots(cubePosition, props.axisOfRotationWorld);
        console.log("(World.tsx) clicked Cube position ", cubePosition);
        console.log("(World.tsx) neighborSpots: ", neighborSpots);
        const isCounterclockwise = props.rDisplacement > 0;
        const neighborOfRotation = getNeighborOfRotation(isCounterclockwise, neighborSpots, allPositions);
        console.log("(World.tsx) neighborOfRotation: ", neighborOfRotation);
        if (neighborOfRotation === null) {
            return {
                collisionResult: "NO_NEIGHBORS",
                cornerOfRotation: "NorthEast", 
            }
        }
        
        const positionsInPath = pathOfRotation(props.axisOfRotationWorld, isCounterclockwise, cubePosition, neighborOfRotation);
        visualizePath(positionsInPath);

        // TODO: compare allPositions with the positionsInPath in order to detect collision
        const hasCollision = false; 
        
        const cornerOfRotation = deviseCornerOfRotation(isCounterclockwise, neighborOfRotation);
        // console.log("(World.tsx) cornerOfRotation: ", cornerOfRotation);
        // console.log("(World.tsx) rotation: ", rotation);

        return {
            collisionResult: hasCollision ? "HAS_COLLISION" : "NO_COLLISION",
            cornerOfRotation: cornerOfRotation, 
        };
    }




    return (
        <Canvas resize={{ polyfill: ResizeObserver }} >
            {/* Lights */}
            <ambientLight />
            <pointLight position={[10, 10, 10]} />

            {/* Orbit Controls */}
            <ThreeControls/>
            
            {/* Visual Helpers */}
            <axesHelper position={[-0.5, -0.5, 0]} scale={2}/>
            <gridHelper rotation={new Euler(Math.PI/2, 0, 0)} position={[0.5, 0.5, -0.5]}/>
            
            {/* Cubes */}
            {
                props.initialCubeConfigs.map((config) => 
                    <Cube
                        instructions={props.instructions}
                        key={config.id}
                        id={config.id} 
                        initialPosition={config.initialPosition} 
                        color={config.color} 
                        rDisplacement={props.rDisplacement}
                        axisOfRotationWorld={props.axisOfRotationWorld}
                        // corner={props.corner}
                        updatePosition={setPosition(config.id)}
                        explorePathOfRotation={explorePathOfRotation}
                        showPath={props.showPath}
                    />
                )
            }
            {pathBlocks}
        </Canvas>
    )
}


export default World;