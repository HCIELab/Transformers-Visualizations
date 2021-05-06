import React, { useEffect, useRef } from 'react';

import "@react-three/fiber";
import { FontLoader } from 'three';
import Roboto from "./Roboto_Regular.json";
import { axisType } from '../Types/types';

const Numbering = (props: {
    side: number,
    letterOffset: number,
	rAxis: axisType,
}) => {
	
    // Deal with the edge Numbering (using fonts)
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
		// yEdges.NorthEast.current.rotation.z = Math.PI;
		// yEdges.SouthEast.current.rotation.z = Math.PI;
		// yEdges.SouthWest.current.rotation.z = Math.PI;
		// yEdges.NorthWest.current.rotation.z = Math.PI;
		yEdges.NorthEast.current.rotation.x = -Math.PI / 2;
		yEdges.SouthEast.current.rotation.x = -Math.PI / 2;
		yEdges.SouthWest.current.rotation.x = -Math.PI / 2;
		yEdges.NorthWest.current.rotation.x = -Math.PI / 2;
	})


	const letterOffset = props.letterOffset;
	const half = props.side/2;
	return (
		<>	
			{/* Edges parallel to the "z" axis */}
			<group visible={props.rAxis === "z"}>
				<mesh position={[half-letterOffset, half-letterOffset, 0+half-letterOffset]}>
					<textGeometry args={["1", textOptions]} />
					<meshPhongMaterial/>
				</mesh>
				<mesh position={[half-letterOffset, -half, 0+half-letterOffset]}>
					<textGeometry args={["2", textOptions]} />
					<meshPhongMaterial/>
				</mesh>
				<mesh position={[-half, -half, 0+half-letterOffset]}>
					<textGeometry args={["3", textOptions]} />
					<meshPhongMaterial/>
				</mesh>
				<mesh position={[-half, half - letterOffset, 0+half-letterOffset]}>
					<textGeometry args={["4", textOptions]} />
					<meshPhongMaterial/>
				</mesh>
			</group>
			<group visible={props.rAxis === "x"}>
				{/* Edges parallel to the "x" axis */}
				<mesh position={[0+half-letterOffset, half-letterOffset, -half+letterOffset]} ref={xEdges.NorthWest}>
					<textGeometry args={["5", textOptions]}/>
					<meshPhongMaterial/>
				</mesh>
				<mesh position={[0+half-letterOffset, -half, -half+letterOffset]}  ref={xEdges.SouthWest}>
					<textGeometry args={["6", textOptions]}/>
					<meshPhongMaterial/>
				</mesh>
				<mesh position={[0+half-letterOffset, -half, half]}  ref={xEdges.SouthEast}>
					<textGeometry args={["7", textOptions]}/>
					<meshPhongMaterial/>
				</mesh>
				<mesh position={[0+half-letterOffset, half - letterOffset, half]} ref={xEdges.NorthEast}>
					<textGeometry args={["8", textOptions]} />
					<meshPhongMaterial/>
				</mesh>
			</group>
			<group visible={props.rAxis === "y"}>
				{/* Edges parallel to the "y" axis */}
				<mesh position={[half-letterOffset, 0+half-letterOffset, -half+letterOffset]} ref={yEdges.NorthEast}>
					<textGeometry args={["9", textOptions]} />
					<meshPhongMaterial/>
				</mesh>
				<mesh position={[half-2*letterOffset, 0+half-letterOffset, half]} ref={yEdges.SouthEast}>
					<textGeometry args={["10", textOptions]} />
					<meshPhongMaterial/>
				</mesh>
				<mesh position={[-half, 0+half-letterOffset, half]} ref={yEdges.SouthWest}>
					<textGeometry args={["11", textOptions]} />
					<meshPhongMaterial/>
				</mesh>
				<mesh position={[-half, 0+half-letterOffset, -half+letterOffset]} ref={yEdges.NorthWest}>
					<textGeometry args={["12", textOptions]} />
					<meshPhongMaterial/>
				</mesh>
			</group>
		</>
    )
}

export default Numbering;
