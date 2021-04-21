import CubeInstance from "./CubeInstance.js";

// Tested to work with parallel rotations (more than one happening at the same time)
class AnimationQueue {
    constructor() {
        this.queue = [];
    }

    add(n) {
        this.queue.push(n);
    }

    remove() {
        this.queue.shift();
    }

    getList() {
        return this.queue;
    }
}


export default function() {
    const rotationsSetup = (scene) => {
        const animQueue = new AnimationQueue();

        // Geometry, Material, Mesh
        const cubeList = [
            new CubeInstance(scene, animQueue, 0xcc0000, 0, 0, 0),
            new CubeInstance(scene, animQueue, 0x44aa88, 1, 0, 0),
        ];
        
        // Add button triggers
        document.querySelector('#buttonOne').addEventListener("click", () => {
            cubeList[0].addRevolveAnimation(-0.01, Math.PI * 1, "x")
        })
        document.querySelector('#buttonTwo').addEventListener("click", () => {
            cubeList[1].addRevolveAnimation(-0.01, Math.PI * 1, "x")
        })

        return {cubeList, animQueue};
    } 


    const rotationsLoop = (animQueue, time) => {
        animQueue.getList().forEach((animFunction) => {
            animFunction();
        })
    }

    return {rotationsSetup, rotationsLoop};
}
