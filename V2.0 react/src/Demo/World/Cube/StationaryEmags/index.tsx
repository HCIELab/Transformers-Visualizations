import React from 'react';

import "@react-three/fiber";
import { rotateCylinderToAxis } from './rotateCylinderToAxis';
import { Euler, Vector3 } from 'three';
import { axisType, cornerType } from '../../../Util/Types/types';
import { getLocations180 } from "./locations180";
import { getLocations90 } from "./locations90";

const StationaryEmags = (props: {
    cubePosition: Vector3,
    showEmags: boolean,
    side: number,
    cornerName: cornerType,
    // initialRotationAmount: Quaternion;
    axisOfRotationWorld: axisType,
    isCounterclockwise: boolean,
    rotationMagnitude: number,
}) => {
    // NOTE: The coordinates in this component are rendered in WORLD position

    const offset = 0.1;

    // console.log("(StationaryEmags.tsx) rotationMagnitude", props.rotationMagnitude)

    const getLocationsFunc = props.rotationMagnitude >= Math.PI ? getLocations180 : getLocations90;
    const {repulsionPosition, hingePosition, catchingPosition, pwmOne, pwmTwo, pwmThree, pwmFour} = getLocationsFunc(props.side, offset, props.cornerName, props.isCounterclockwise, props.axisOfRotationWorld);

    // useEffect(() => {
    //     console.log("(StationaryEmags.tsx) something has changed *****")
    // }, [props.showEmags])

    const fooCondition = props.cornerName === "NorthEast" || props.cornerName === "SouthWest";
    const rotationAdjustmentForPWMCylinders = 
    props.axisOfRotationWorld === "x" ?
        !props.isCounterclockwise ?
            new Euler(Math.PI/2, 0, !fooCondition ? Math.PI/2 : 0)
            :
            new Euler(-Math.PI/2, 0, fooCondition ? -Math.PI/2 : 0)
        :
        props.isCounterclockwise ?
            new Euler(Math.PI/2, 0, !fooCondition ? Math.PI/2 : 0)
            :
            new Euler(-Math.PI/2, 0, fooCondition ? -Math.PI/2 : 0)
            ;

	return (
		<>	
            {props.showEmags &&
                <group position={props.cubePosition}>
                    {/* Repsulsion Cylinder */}
                    <group 
                        position={repulsionPosition}  
                        rotation={rotateCylinderToAxis(props.axisOfRotationWorld)}
                    >
                        <mesh>
                            <cylinderBufferGeometry args={[.09, .09, 0.9, 20]}/>
                            <meshPhongMaterial color={"#ff0000"} opacity={0.9}/>
                        </mesh>
                    </group>
                    {/* Hinge Cylinder */}
                    <group 
                        position={hingePosition}  
                        rotation={rotateCylinderToAxis(props.axisOfRotationWorld)}
                    >
                        <group rotation={new Euler(0, Math.PI/4, 0)}>
                            <mesh>
                                <boxGeometry args={[0.2, 0.9, 0.05]}/>
                                <meshPhongMaterial color={"#00177e"} opacity={0.9}/>
                            </mesh>
                            <mesh>
                                <boxGeometry args={[0.05, 0.9, 0.2]}/>
                                <meshPhongMaterial color={"#00177e"} opacity={0.9}/>
                            </mesh>
                        </group>
                    </group>
                    {/* Catching Cylinder */}
                    <group 
                        position={catchingPosition}  
                        rotation={rotateCylinderToAxis(props.axisOfRotationWorld)}
                    >
                        <group rotation={new Euler(0, Math.PI/4, 0)}>
                            <mesh>
                                <boxGeometry args={[0.2, 0.9, 0.05]}/>
                                <meshPhongMaterial color={"#00177e"} opacity={0.9}/>
                            </mesh>
                            <mesh>
                                <boxGeometry args={[0.05, 0.9, 0.2]}/>
                                <meshPhongMaterial color={"#00177e"} opacity={0.9}/>
                            </mesh>
                        </group>
                    </group>


                    {/* PWM Attraction Cylinders */}
                    {props.rotationMagnitude < Math.PI &&
                        <group>
                            <group 
                                position={pwmOne}  
                                rotation={rotateCylinderToAxis(props.axisOfRotationWorld)}
                            >
                                <group rotation={rotationAdjustmentForPWMCylinders}>
                                    <mesh>
                                        <boxGeometry args={[0.2, 0.9, 0.05]}/>
                                        <meshPhongMaterial color={"#00ffff"} opacity={0.9}/>
                                    </mesh>
                                    <mesh>
                                        <boxGeometry args={[0.05, 0.9, 0.2]}/>
                                        <meshPhongMaterial color={"#00ffff"} opacity={0.9}/>
                                    </mesh>
                                </group>
                            </group>
                            <group 
                                position={pwmTwo}  
                                rotation={rotateCylinderToAxis(props.axisOfRotationWorld)}
                            >
                                <group rotation={rotationAdjustmentForPWMCylinders}>
                                    <mesh>
                                        <boxGeometry args={[0.2, 0.9, 0.05]}/>
                                        <meshPhongMaterial color={"#00ffff"} opacity={0.9}/>
                                    </mesh>
                                    <mesh>
                                        <boxGeometry args={[0.05, 0.9, 0.2]}/>
                                        <meshPhongMaterial color={"#00ffff"} opacity={0.9}/>
                                    </mesh>
                                </group>
                            </group>
                            <group 
                                position={pwmThree}  
                                rotation={rotateCylinderToAxis(props.axisOfRotationWorld)}
                            >
                                <group rotation={rotationAdjustmentForPWMCylinders}>
                                    <mesh>
                                        <cylinderBufferGeometry args={[.09, .09, 0.9, 20]}/>
                                        <meshPhongMaterial color={"#00ffff"} opacity={0.9}/>
                                    </mesh>
                                </group>
                            </group>
                            <group 
                                position={pwmFour}  
                                rotation={rotateCylinderToAxis(props.axisOfRotationWorld)}
                            >
                                <group rotation={rotationAdjustmentForPWMCylinders}>
                                    <mesh>
                                        <cylinderBufferGeometry args={[.09, .09, 0.9, 20]}/>
                                        <meshPhongMaterial color={"#00ffff"} opacity={0.9}/>
                                    </mesh>
                                </group>
                            </group>
                        </group>        
                    }
                </group>
            }
		</>
    )
}

export default StationaryEmags;
