import React, { useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import ThreeControls from "./ThreeControls";
import { axisType, cornerType, initialCubeConfigType, instructionType } from '../Util/Types/types';
import Cube from './Cube';
import { Euler, Vector3 } from 'three';

const World = (props: {
    initialCubeConfigs: initialCubeConfigType[],
    instructions: instructionType[],
    rDisplacement: number,
    rAxis: axisType,
    corner: cornerType,
}) => {
    let allPositions : any = {};
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