import React from 'react';
import { Vector3 } from 'three';
import {Figure3} from "./Figure3";


// const Figure1 = () => {
//     const ref = useRef<THREE.Group>(null!);

//     return (
//         <Box
//             ref={ref}
//             id={1}
//             position={new Vector3(0, 0, 0)}
//             color={"#77410e"}
//         />
//     )
// }



// const Figure2 = () => {
//     const ref = useRef<THREE.Group>(null!);

//     return (
//         <Box
//             ref={ref}
//             id={2}
//             position={new Vector3(0, 1, 0)}
//             color={"#77410e"}
//         />
//     )
// }



// const Figure4 = () => {
//     const ref = useRef<THREE.Group>(null!);
//     useEffect(() => {
//         for (let i = 0; i < 10; i++) {
//             setTimeout(() => {
//                 const {x, y, z} = ref.current.position;
//                 ref.current.position.set(x+0.1, y, z);
//             }, 1000 + 100*i)
//         }
//     }, [])

//     return (
//         <Box
//             ref={ref}
//             id={4}
//             position={new Vector3(1, 1, 0)}
//             color={"#77410e"}
//         />
//     )
// }




const Figures = (props: {}) => {
    return (
        <>
            {/* <Figure1/> */}
            {/* <Figure2/> */}
            <Figure3
                id={3}
                position={new Vector3(1, 0, 0)}
                color={"#77410e"}
            />
            {/* <Figure4/> */}
        </>
    )
}

export default Figures;