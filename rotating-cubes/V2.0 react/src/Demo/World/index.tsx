import React from 'react';
import { Canvas } from '@react-three/fiber';
import ThreeControls from "../ThreeControls";
import { axisType, cornerType, cubeAndPropertiesType, instructionType } from '../Types/types';
import Cube from '../Cube';

const World = (props: {
    cubesAndProperties: cubeAndPropertiesType[],
    instructions: instructionType[],
    rDisplacement: number,
    rAxis: axisType,
    corner: cornerType,

}) => {
    
    return (
        <Canvas>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <ThreeControls/>
            <axesHelper position={[-0.5, -0.5, 0]} scale={0.5}/>
            {
                props.cubesAndProperties.map((config) => 
                    <Cube
                        instructions={props.instructions}
                        key={config.id}
                        id={config.id} 
                        initialPosition={config.initialPosition} 
                        color={config.color} 
                        rDisplacement={props.rDisplacement}
                        rAxis={props.rAxis}
                        corner={props.corner}
                    />
                )
            }
        </Canvas>
    )
}


export default World;