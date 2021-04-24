import React from 'react';

import "@react-three/fiber";
import { FontLoader } from 'three';
import Roboto from "./Roboto_Regular.json";

const Numbering = (props: {
    side: number,
    letterOffset: number,
}) => {
	
    // Deal with the edge Numbering (using fonts)
	const font = new FontLoader().parse(Roboto);
	const textOptions = {
		font,
		size: 0.1,
		height: 0.01,
	};

	const letterOffset = props.letterOffset;
	const half = props.side/2;
	const textMeshes = [
		<mesh position={[half-letterOffset, half-letterOffset, 0]}>
			<textGeometry args={["1", textOptions]} />
            <meshPhongMaterial/>
		</mesh>,
		<mesh position={[half-letterOffset, -half, 0]}>
			<textGeometry args={["2", textOptions]} />
            <meshPhongMaterial/>
		</mesh>,
		<mesh position={[-half, -half, 0]}>
			<textGeometry args={["3", textOptions]} />
            <meshPhongMaterial/>
		</mesh>,
		<mesh position={[-half, half - letterOffset, 0]}>
			<textGeometry args={["4", textOptions]} />
            <meshPhongMaterial/>
		</mesh>,

		<mesh position={[0, half - letterOffset, half]}>
			<textGeometry args={["5", textOptions]} />
            <meshPhongMaterial/>
		</mesh>,
		<mesh position={[0, -half, half]}>
			<textGeometry args={["6", textOptions]} />
            <meshPhongMaterial/>
		</mesh>,
		<mesh position={[0, -half, -half]}>
			<textGeometry args={["7", textOptions]} />
            <meshPhongMaterial/>
		</mesh>,
		<mesh position={[0, half-letterOffset, -half]}>
			<textGeometry args={["8", textOptions]} />
            <meshPhongMaterial/>
		</mesh>,

		<mesh position={[half-letterOffset, 0, -half]}>
			<textGeometry args={["9", textOptions]} />
            <meshPhongMaterial/>
		</mesh>,
		<mesh position={[half-2*letterOffset, 0, half]}>
			<textGeometry args={["10", textOptions]} />
            <meshPhongMaterial/>
		</mesh>,
		<mesh position={[-half, 0, half]}>
			<textGeometry args={["11", textOptions]} />
            <meshPhongMaterial/>
		</mesh>,
		<mesh position={[-half, 0, -half]}>
			<textGeometry args={["12", textOptions]} />
            <meshPhongMaterial/>
		</mesh>,

	]
	
	return (
        <>
            {textMeshes}
        </>
    )
}

export default Numbering;
