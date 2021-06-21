import React, { ReactNode, useState } from 'react';
import { Canvas } from '@react-three/fiber';
// import ThreeControls from "./ThreeControls";
import { Euler, Vector3 } from 'three';
import { ResizeObserver } from '@juggle/resize-observer';

import { axisType, collisionType, cornerType, initialCubeConfigType, instructionType } from '../Util/Types/types';
import Cube from './Cube';
import PathBlock from './PathBlock';
import { detectCollisionsInPath } from './Cube/helpers/collision/detectCollisionsInPath';
import { getListOfNeighborSpots } from './Cube/helpers/collision/getListOfNeighborSpots';
import { getNeighborOfRotation } from './Cube/helpers/collision/getNeighborOfRotation';

const World = (props: {
    initialCubeConfigs: initialCubeConfigType[],
    instructions: instructionType[],
    rDisplacement: number,
    rAxis: axisType,
    corner: cornerType,
}) => {
    console.log("(World.tsx) Rendering the World component");

    const allPositions: {[cubeID: number]: Vector3} = {};
    const {initialCubeConfigs} = props; 
    initialCubeConfigs.forEach((config) => {
        allPositions[config.id] = config.initialPosition;
    })

    const setPosition = (cubeID : number) => {   
        return (newPosition : Vector3) => {
            delete allPositions[cubeID];
            allPositions[cubeID] = newPosition;
        }
    }

    const [pathBlocks, setPathBlocks] = useState<ReactNode[]>([]);
    const visualizePath = (pointsInPath: Vector3[]) => {
        const pathElements: ReactNode[] = pointsInPath.map((point, index) => {
            return (
                <PathBlock
                    key={index}
                    color={"#ff0000"}
                    placement={point}
                />
            )
        })
        setPathBlocks(pathElements);
    }

    const hasCollisionInPath = (cubeID: number) : collisionType => {
        console.log("*****hasCollisionInPath");

        const neighborSpots = getListOfNeighborSpots(allPositions[cubeID], props.rAxis);
        const neighborOfRotation = getNeighborOfRotation(props.rDisplacement > 0, neighborSpots, allPositions);
        if (neighborOfRotation === null) {
            return "NO_NEIGHBORS";
        }
        
        const {path, hasCollision} = detectCollisionsInPath(props.rAxis, props.rDisplacement > 0, allPositions[cubeID], neighborOfRotation);
        visualizePath(
            path.map((coord2D) => new Vector3(coord2D.x, coord2D.y, 0))
        )
        return hasCollision ? "HAS_COLLISION" : "NO_COLLISION";
    }

    return (
        <Canvas resize={{ polyfill: ResizeObserver }} >
            {/* Lights */}
            <ambientLight />
            <pointLight position={[10, 10, 10]} />

            {/* Orbit Controls */}
            {/* <ThreeControls/> */}
            
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
                        rAxis={props.rAxis}
                        corner={props.corner}
                        updatePosition={setPosition(config.id)}
                        hasCollisionInPath={hasCollisionInPath}
                    />
                )
            }
            {pathBlocks}
        </Canvas>
    )
}


export default World;