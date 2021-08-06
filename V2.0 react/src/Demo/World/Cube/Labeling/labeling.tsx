import React, { useEffect, useRef } from 'react';

import "@react-three/fiber";
import { FontLoader } from 'three';
import Roboto from "./Roboto_Regular.json";
import { axisType } from '../../../Util/Types/types';
import { numbers } from '../../../Util/Numbering/numbers';


const font = new FontLoader().parse(Roboto);

const Labeling = (props: {
	cubeID: number,
    side: number,
    letterOffset: number,
	axis: axisType,
	displayEmagIDs: boolean,
	displayCubeIDs: boolean,
}) => {
	
    // Deal with the edge Labeling (using fonts)
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

	const IDLabel = useRef<THREE.Mesh>(null!)

	const letterOffset = props.letterOffset;
	const letterHeight = 0.01;
	const half = props.side/2;
	return (
		<>	
			{/* ID */}
			<group visible={props.displayCubeIDs}>
				<mesh position={[-letterOffset, -letterOffset, half]}  ref={IDLabel}>
					<textGeometry args={[`${props.cubeID}`, {font, size: 0.3, height: 0.05}]} />
					<meshPhongMaterial color={"#000000"}/>
				</mesh>
			</group>

			{/* Edges parallel to the "z" axis */}
			<group visible={props.displayEmagIDs}>
				<group visible={props.axis === "z"}>
					<mesh position={[half-letterOffset*2, half-letterOffset, 0+half-letterHeight]}>
						<textGeometry args={[`${numbers.z.NorthEast}`, textOptions]} />
						<meshPhongMaterial color={"#000000"}/>
					</mesh>
					<mesh position={[half-letterOffset*2, -half, 0+half-letterHeight]}>
						<textGeometry args={[`${numbers.z.SouthEast}`, textOptions]} />
						<meshPhongMaterial color={"#000000"}/>
					</mesh>
					<mesh position={[-half, -half, 0+half-letterHeight]}>
						<textGeometry args={[`${numbers.z.SouthWest}`, textOptions]} />
						<meshPhongMaterial color={"#000000"}/>
					</mesh>
					<mesh position={[-half, half - letterOffset, 0+half-letterHeight]}>
						<textGeometry args={[`${numbers.z.NorthWest}`, textOptions]} />
						<meshPhongMaterial color={"#000000"}/>
					</mesh>
				</group>

				{/* Edges parallel to the "x" axis */}
				<group visible={props.axis === "x"}>
					<mesh position={[0+half-letterHeight, half-letterOffset, -half+letterOffset]} ref={xEdges.NorthWest}>
						<textGeometry args={[`${numbers.x.NorthEast}`, textOptions]}/>
						<meshPhongMaterial color={"#000000"}/>
					</mesh>
					<mesh position={[0+half-letterHeight, -half, -half+letterOffset]}  ref={xEdges.SouthWest}>
						<textGeometry args={[`${numbers.x.SouthEast}`, textOptions]}/>
						<meshPhongMaterial color={"#000000"}/>
					</mesh>
					<mesh position={[0+half-letterHeight, -half, half]}  ref={xEdges.SouthEast}>
						<textGeometry args={[`${numbers.x.SouthWest}`, textOptions]}/>
						<meshPhongMaterial color={"#000000"}/>
					</mesh>
					<mesh position={[0+half-letterHeight, half - letterOffset, half]} ref={xEdges.NorthEast}>
						<textGeometry args={[`${numbers.x.NorthWest}`, textOptions]} />
						<meshPhongMaterial color={"#000000"}/>
					</mesh>
				</group>

				{/* Edges parallel to the "y" axis */}
				<group visible={props.axis === "y"}>
					<mesh position={[half-letterOffset, 0+half-letterHeight, -half+letterOffset]} ref={yEdges.NorthEast}>
						<textGeometry args={[`${numbers.y.NorthEast}`, textOptions]} />
						<meshPhongMaterial color={"#000000"}/>
					</mesh>
					<mesh position={[half-letterOffset, 0+half-letterHeight, half]} ref={yEdges.SouthEast}>
						<textGeometry args={[`${numbers.y.SouthEast}`, textOptions]} />
						<meshPhongMaterial color={"#000000"}/>
					</mesh>
					<mesh position={[-half, 0+half-letterHeight, half]} ref={yEdges.SouthWest}>
						<textGeometry args={[`${numbers.y.SouthWest}`, textOptions]} />
						<meshPhongMaterial color={"#000000"}/>
					</mesh>
					<mesh position={[-half, 0+half-letterHeight, -half+letterOffset]} ref={yEdges.NorthWest}>
						<textGeometry args={[`${numbers.y.NorthWest}`, textOptions]} />
						<meshPhongMaterial color={"#000000"}/>
					</mesh>
				</group>
			</group>
		</>
    )
}

export default Labeling;
