import CubeInstance from "./CubeInstance.js";

// TODO: this class may not be very robustly created,
// only tested to work with one animation at a time so far
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
        
        document.querySelector('#buttonOne').addEventListener("click", () => {
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
