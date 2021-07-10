import React from 'react';
import { Vector3 } from 'three';
import {Figure1} from "./Figure1";
import {Figure2} from "./Figure2";
import {Figure3} from "./Figure3";
import {Figure4} from "./Figure4";

const Figures = (props: {}) => {
    return (
        <>
            <Figure1
                id={0}
                position={new Vector3(0, 0, 0)}
                color={"#77410e"}
            />
            <Figure2
                id={1}
                position={new Vector3(0, 1, 0)}
                color={"#77410e"}
            />
            <Figure3
                id={2}
                position={new Vector3(1, 0, 0)}
                color={"#77410e"}
            />
            <Figure4
                id={3}
                position={new Vector3(1, 1, 0)}
                color={"#77410e"}
            />
        </>
    )
}

export default Figures;