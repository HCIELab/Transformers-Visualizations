import React from 'react';

import "@react-three/fiber";
import { FontLoader } from 'three';
import Roboto from "./Roboto_Regular.json";

const Numbering = (props: {
    side: number,
}) => {
	// Deal with the edge Numbering (using fonts)
	const font = new FontLoader().parse(Roboto);
	const textOptions = {
		font,
		size: 0.1,
		height: 0.02,
	};
	const letterOffset = 0.1;
	const half = props.side/2;
	const textMeshes = [
		<mesh position={[half-letterOffset, 0, half]}>
			<textGeometry args={["1", textOptions]} />
		</mesh>,
		<mesh position={[0, -half, half]}>
			<textGeometry args={["2", textOptions]} />
		</mesh>,
		<mesh position={[-half, 0, half]}>
			<textGeometry args={["3", textOptions]} />
		</mesh>,
		<mesh position={[0, half - letterOffset, half]}>
			<textGeometry args={["4", textOptions]} />
		</mesh>,
	]
	
	return (
        <>
            {textMeshes}
        </>
    )
}

export default Numbering;
