import React, { useState } from 'react';

import styled from 'styled-components';
import { Canvas } from '@react-three/fiber';

import Cube from "./Cube";
import ThreeControls from "./ThreeControls";
import Panel from "./Panel";
import { axisType, cornerType } from './Types/types';
import { Vector3 } from 'three';

const DemoContainer = styled.div`
    width: 100%;
    height: 100%;
    overflow: auto;
    border: 25px solid #000000;

    .TopSection {
        margin: 0;
        height: 30%;
        background-color: #fdfdfd;

        .AddOrRemoveCubes {
            padding-top: 10px;
            display: flex;
            align-items: center;
            justify-content: center;

            button {
                margin: 0px 10px;
            }
        }
    }

    .BottomSection {
        margin: 0;
        height: 70%;
        width: 100%;
        background-color: #252525;
    }
`;

const Demo = () => {
    
    const [rDisplacement, setRDisplacement] = useState(Math.PI);
    const [rAxis, setRAxis] = useState<axisType>("y");

    const [corner, setCorner] = useState<cornerType>("NorthEast");

    const [cubesAndProperties, setCubesAndProperties] = useState([
        {id: 1, initialPosition: new Vector3(1, 0, 0), color: "#049101"},
        {id: 2, initialPosition: new Vector3(0, 0, 0), color: "#049101"},
    ])
    /**
     * A quick implementation of adding or removing buttons.
     * Simple add: increment the cube id every time you add and place it one unit forward in the x axis
     * Simple remove: remove the last element in the list (which would be the cube with the highest id)
     * Pros: this method is not prone to errors
     * Cons: this method may not be very sophisticated
     */
    const addOrRemoveButtons = () => {
        return (
            <div className="AddOrRemoveCubes">
                <button onClick={() => {
                    const prevCube = cubesAndProperties[cubesAndProperties.length-1]
                    const nextID = prevCube.id + 1;
                    const nextInitialX = prevCube.initialPosition.x - 1;
                    const nextCube = {id: nextID, initialPosition: new Vector3(nextInitialX, 0, 0), color: "#049101"}
                    setCubesAndProperties(
                        [...cubesAndProperties, nextCube]
                    )
                }}>
                    Add a cube
                </button>
                <button onClick={() => {
                    const newList = cubesAndProperties.filter((aCube) => aCube.id !== cubesAndProperties.length-1);
                    setCubesAndProperties(newList);
                }}>
                    Remove a cube
                </button>
            </div>
        )
    }

    return (
        <DemoContainer>
            <div className="TopSection">
                {addOrRemoveButtons()}
                <Panel
                    rAxis={rAxis}
                    setRAxis={setRAxis}
                    rDisplacement={rDisplacement}
                    setRDisplacement={setRDisplacement}
                    corner={corner}
                    setCorner={setCorner}
                />
            </div>

            <div className="BottomSection">
                <Canvas>
                    <ambientLight />
                    <pointLight position={[10, 10, 10]} />
                    <ThreeControls/>
                    <axesHelper position={[-2, -2, 0]} scale={0.5}/>
                    {
                        cubesAndProperties.map((config) => 
                            <Cube 
                                key={config.id}
                                id={config.id} 
                                initialPosition={config.initialPosition} 
                                color={config.color} 
                                rDisplacement={rDisplacement}
                                rAxis={rAxis}
                                corner={corner}
                            />
                        )
                    }
                </Canvas>
            </div>
        </DemoContainer>
    )
}


export default Demo;