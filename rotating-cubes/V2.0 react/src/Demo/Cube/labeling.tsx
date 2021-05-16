import React, { useEffect, useRef } from 'react';

import "@react-three/fiber";
import { FontLoader } from 'three';
import Roboto from "./Roboto_Regular.json";
import { axisType } from '../Types/types';
import { numbers } from '../Numbering/numbers';

const Labeling = (props: {
	cubeID: number,
    side: number,
    letterOffset: number,
	rAxis: axisType,
}) => {
	
    // Deal with the edge Labeling (using fonts)
	const font = new FontLoader().parse(Roboto);
	const textOptions = {
		font,
		size: 0.1,
		height: 0.01,
	};

	const xEdges = {
		"NorthEast": useRef<THREE.Mesh>(null!),
		"SouthEast": useRef<THREE.Mesh>(null!),
		"SouthWest": useRef<THREE.Mesh>(null!),
		"NorthWest": useRef<THREE.Mesh>(null!),
	};
	useEffect(() => {
		xEdges.NorthEast.current.rotation.y = Math.PI / 2;
		xEdges.SouthEast.current.rotation.y = Math.PI / 2;
		xEdges.SouthWest.current.rotation.y = Math.PI / 2;
		xEdges.NorthWest.current.rotation.y = Math.PI / 2;
	})

	const yEdges = {
		"NorthEast": useRef<THREE.Mesh>(null!),
		"SouthEast": useRef<THREE.Mesh>(null!),
		"SouthWest": useRef<THREE.Mesh>(null!),
		"NorthWest": useRef<THREE.Mesh>(null!),
	};
	useEffect(() => {
		yEdges.NorthEast.current.rotation.x = -Math.PI / 2;
		yEdges.SouthEast.current.rotation.x = -Math.PI / 2;
		yEdges.SouthWest.current.rotation.x = -Math.PI / 2;
		yEdges.NorthWest.current.rotation.x = -Math.PI / 2;
	})

	const fakeNano = {
		"L1": useRef<THREE.Mesh>(null!),
		"L2": useRef<THREE.Mesh>(null!),
		"L3": useRef<THREE.Mesh>(null!),
		"L4": useRef<THREE.Mesh>(null!),
	};
	useEffect(() => {
		fakeNano.L1.current.rotation.z = Math.PI;
		fakeNano.L2.current.rotation.z = Math.PI;
		fakeNano.L3.current.rotation.z = Math.PI;
		fakeNano.L4.current.rotation.z = Math.PI;
	})


	const letterOffset = props.letterOffset;
	const letterHeight = 0.01;
	const half = props.side/2;
	return (
		<>	
			{/* Fake Nano */}
			<group>
				<mesh position={[letterOffset*2.5, letterOffset*3, half]}  ref={fakeNano.L1}>
					<textGeometry args={[`|     ${props.cubeID}     |`, textOptions]} />
					<meshPhongMaterial/>
				</mesh>
				<mesh position={[letterOffset*2.5, letterOffset, half]} ref={fakeNano.L2}>
					<textGeometry args={[`|    ID:    |`, textOptions]} />
					<meshPhongMaterial/>
				</mesh>
				<mesh position={[letterOffset*2.5, -letterOffset, half]} ref={fakeNano.L3}>
					<textGeometry args={["| NANO |", textOptions]} /> 
					{/* TODO: fill in the cubeID here ^^^ */}
					<meshPhongMaterial/>
				</mesh>
				<mesh position={[letterOffset*2.5, -letterOffset*3, half]} ref={fakeNano.L4}>
					<textGeometry args={["|             |", textOptions]} />
					<meshPhongMaterial/>
				</mesh>
			</group>

			{/* Edges parallel to the "z" axis */}
			<group visible={props.rAxis === "z"}>
				<mesh position={[half-letterOffset*2, half-letterOffset, 0+half-letterHeight]}>
					<textGeometry args={[`${numbers.z.NorthEast}`, textOptions]} />
					<meshPhongMaterial/>
				</mesh>
				<mesh position={[half-letterOffset*2, -half, 0+half-letterHeight]}>
					<textGeometry args={[`${numbers.z.SouthEast}`, textOptions]} />
					<meshPhongMaterial/>
				</mesh>
				<mesh position={[-half, -half, 0+half-letterHeight]}>
					<textGeometry args={[`${numbers.z.SouthWest}`, textOptions]} />
					<meshPhongMaterial/>
				</mesh>
				<mesh position={[-half, half - letterOffset, 0+half-letterHeight]}>
					<textGeometry args={[`${numbers.z.NorthWest}`, textOptions]} />
					<meshPhongMaterial/>
				</mesh>
			</group>
			<group visible={props.rAxis === "x"}>
				{/* Edges parallel to the "x" axis */}
				<mesh position={[0+half-letterHeight, half-letterOffset, -half+letterOffset]} ref={xEdges.NorthWest}>
					<textGeometry args={[`${numbers.x.NorthEast}`, textOptions]}/>
					<meshPhongMaterial/>
				</mesh>
				<mesh position={[0+half-letterHeight, -half, -half+letterOffset]}  ref={xEdges.SouthWest}>
					<textGeometry args={[`${numbers.x.SouthEast}`, textOptions]}/>
					<meshPhongMaterial/>
				</mesh>
				<mesh position={[0+half-letterHeight, -half, half]}  ref={xEdges.SouthEast}>
					<textGeometry args={[`${numbers.x.SouthWest}`, textOptions]}/>
					<meshPhongMaterial/>
				</mesh>
				<mesh position={[0+half-letterHeight, half - letterOffset, half]} ref={xEdges.NorthEast}>
					<textGeometry args={[`${numbers.x.NorthWest}`, textOptions]} />
					<meshPhongMaterial/>
				</mesh>
			</group>
			<group visible={props.rAxis === "y"}>
				{/* Edges parallel to the "y" axis */}
				<mesh position={[half-letterOffset, 0+half-letterHeight, -half+letterOffset]} ref={yEdges.NorthEast}>
					<textGeometry args={[`${numbers.y.NorthEast}`, textOptions]} />
					<meshPhongMaterial/>
				</mesh>
				<mesh position={[half-letterOffset, 0+half-letterHeight, half]} ref={yEdges.SouthEast}>
					<textGeometry args={[`${numbers.y.SouthEast}`, textOptions]} />
					<meshPhongMaterial/>
				</mesh>
				<mesh position={[-half, 0+half-letterHeight, half]} ref={yEdges.SouthWest}>
					<textGeometry args={[`${numbers.y.SouthWest}`, textOptions]} />
					<meshPhongMaterial/>
				</mesh>
				<mesh position={[-half, 0+half-letterHeight, -half+letterOffset]} ref={yEdges.NorthWest}>
					<textGeometry args={[`${numbers.y.NorthWest}`, textOptions]} />
					<meshPhongMaterial/>
				</mesh>
			</group>
		</>
    )
}

export default Labeling;
