import React, { ReactNode, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import ThreeControls from "./ThreeControls";
import { Euler, Vector3 } from 'three';

import { axisType, cornerType, initialCubeConfigType, instructionType } from '../Util/Types/types';
import Cube from './Cube';
import PathBlock from './PathBlock';

const World = (props: {
    initialCubeConfigs: initialCubeConfigType[],
    instructions: instructionType[],
    rDisplacement: number,
    rAxis: axisType,
    corner: cornerType,
}) => {
    console.log("(World.tsx) Rendering the World component");

    const allPositions: any = {};
    const {initialCubeConfigs} = props; 
    initialCubeConfigs.forEach((config) => {
        allPositions[config.id] = config.initialPosition;
    })

    const setPosition = (cubeID : number) => {   
        return (newPosition : number) => {
            delete allPositions[cubeID];
            allPositions[cubeID] = newPosition;
        }
    }

    const [pathBlocks, setPathBlocks] = useState<ReactNode[]>([]);
    const visualizePath = (pointsInPath: Vector3[]) => {
        // TODO: visually put cubes in the traversed path
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

    return (
        <Canvas>
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
                        rAxis={props.rAxis}
                        corner={props.corner}
                        updatePosition={setPosition(config.id)}
                        allPositions={allPositions}
                        visualizePath={visualizePath}
                    />
                )
            }
            {pathBlocks}
        </Canvas>
    )
}


export default World;