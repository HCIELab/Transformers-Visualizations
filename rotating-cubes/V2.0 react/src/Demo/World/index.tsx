import React, { ReactNode, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import ThreeControls from "./ThreeControls";
import { Euler, Quaternion, Vector3 } from 'three';
import { ResizeObserver } from '@juggle/resize-observer';

import { axisType, collisionType, cornerType, initialCubeConfigType, instructionType } from '../Util/Types/types';
import Cube from './Cube';
import PathBlock from './PathBlock';
import { pathOfRotation } from './Cube/helpers/collision/pathOfRotation';
import { deviseCornerOfRotation } from './Cube/helpers/collision/deviseCornerOfRotation';
import { getListOfNeighborSpots } from './Cube/helpers/collision/getListOfNeighborSpots';
import { getNeighborOfRotation } from './Cube/helpers/collision/getNeighborOfRotation';
import { getPointOfRotation } from './Cube/helpers/getPointOfRotation';

const World = (props: {
    initialCubeConfigs: initialCubeConfigType[],
    instructions: instructionType[],
    rDisplacement: number,
    rAxis: axisType,
    corner: cornerType,
    showPath: boolean,
}) => {
    console.log("(World.tsx) Rendering the World component");


    console.log("*****************");
    const pointOfRotationWorld = getPointOfRotation("NorthEast", 1, 'y')[0];
    console.log(pointOfRotationWorld);
    // pointOfRotationWorld.applyEuler(new Euler(-Math.PI, 0, -Math.PI))
    pointOfRotationWorld.applyEuler(new Euler(0, -Math.PI/2, 0))
    console.log(pointOfRotationWorld);



    const allPositions: {[cubeID: number]: Vector3} = {};
    const {initialCubeConfigs} = props; 
    initialCubeConfigs.forEach((config) => {
        allPositions[config.id] = config.initialPosition;
    })

    const setPosition = (cubeID : number) => {   
        return (newPosition : Vector3) => {
            console.log("(World.tsx) allPositions: ", allPositions);
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

    const explorePathOfRotation = (cubeID: number, rotation: Vector3) : {collisionResult: collisionType, cornerOfRotation: cornerType} => {
        const neighborSpots = getListOfNeighborSpots(allPositions[cubeID], props.rAxis);
        const isCounterclockwise = props.rDisplacement > 0;
        const neighborOfRotation = getNeighborOfRotation(isCounterclockwise, neighborSpots, allPositions);
        console.log("(World.tsx) neighborOfRotation: ", neighborOfRotation);
        if (neighborOfRotation === null) {
            return {
                collisionResult: "NO_NEIGHBORS",
                cornerOfRotation: "NorthEast", 
            }
        }
        
        const positionsInPath = pathOfRotation(props.rAxis, props.rDisplacement > 0, allPositions[cubeID], neighborOfRotation);

        visualizePath(
            positionsInPath.map((coord2D) => new Vector3(coord2D.x, coord2D.y, 0))
        )
        
        const cornerOfRotation = deviseCornerOfRotation(isCounterclockwise, neighborOfRotation, rotation, props.rAxis);
        console.log("(World.tsx) cornerOfRotation: ", cornerOfRotation);
        console.log("(World.tsx) rotation: ", rotation);

        const hasCollision = false; // TODO: compare allPositions with the positionsInPath in order to detect collision
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
                        rAxis={props.rAxis}
                        corner={props.corner}
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