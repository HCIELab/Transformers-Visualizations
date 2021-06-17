import React from 'react';
import { Canvas } from '@react-three/fiber';
import ThreeControls from "./ThreeControls";
import { axisType, cornerType, initialCubeConfigType, instructionType } from '../Util/Types/types';
import Cube from './Cube';
import { Euler } from 'three';

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

    const willCollide = (cubeID: number): boolean => {
        // TODO: visually put cubes in the traversed path
        // TODO: check for possible collisions and then return true or false
        return false;
    }

    return (
        <Canvas>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <ThreeControls/>
            <axesHelper position={[-0.5, -0.5, 0]} scale={2}/>
            <gridHelper rotation={new Euler(Math.PI/2, 0, 0)} position={[0.5, 0.5, -0.5]}/>
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
                    />
                )
            }
        </Canvas>
    )
}


export default World;