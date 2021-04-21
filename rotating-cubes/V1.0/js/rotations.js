import CubeInstance from "./CubeInstance.js";

export default function() {
    const rotationsSetup = (scene) => {
        // Geometry, Material, Mesh
        const cubeList = [
            new CubeInstance(scene, 0x44aa88, 1),
            new CubeInstance(scene, 0xcc0000, 0),
        ];
        
        // Animation Queue
        const animationQueue = [];
        document.querySelector('#buttonOne').addEventListener("click", () => {
            animationQueue.push((time) => cubeList[1].addRevolveAnimation_1(time));
        })

        return {cubeList, animationQueue};
    } 


    const rotationsLoop = (animationQueue, time) => {
        animationQueue.forEach((animFunction) => {
            animFunction(time);
        })
    }

    return {rotationsSetup, rotationsLoop};
}