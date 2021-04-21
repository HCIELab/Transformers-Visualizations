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
            new CubeInstance(scene, 0x44aa88, 1, animQueue),
            new CubeInstance(scene, 0xcc0000, 0, animQueue),
        ];
        
        // Add button triggers
        document.querySelector('#buttonOne').addEventListener("click", () => {
            animQueue.add(
                (time) => cubeList[0].addRevolveAnimation(time, -0.01, Math.PI * 1, "z")
            );
        })
        document.querySelector('#buttonTwo').addEventListener("click", () => {
            animQueue.add(
                (time) => cubeList[1].addRevolveAnimation(time, -0.01, Math.PI * 1, "z")
            );
        })

        return {cubeList, animQueue};
    } 


    const rotationsLoop = (animQueue, time) => {
        animQueue.getList().forEach((animFunction) => {
            animFunction(time);
        })
    }

    return {rotationsSetup, rotationsLoop};
}
