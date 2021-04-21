import * as THREE from 'https://unpkg.com/three/build/three.module.js';


export default class CubeInstance {
    constructor(scene, animQueue, color, x, y, z) {
        this.scene = scene;
        this.color = color;

        this.animQueue = animQueue;
    
        this.group = this.makeGroup();
        this.group.position.x = x;
        this.group.position.y = y;
        this.group.position.z = z;
        this.scene.add(this.group);
    }
  
    makeGeometry() {
        const [boxWidth, boxHeight, boxDepth] = [1, 1, 1];
        const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);
        geometry.translate( -boxWidth/ 2, boxHeight / 2, -boxDepth / 2 ); 
        return geometry;
    }
  
    makeMaterial(side) {
        return new THREE.MeshPhongMaterial({
            color: this.color,
            opacity: 0.5,
            transparent: true,
            side,
        });  
    }
  
    makeGroup() {
        const group = new THREE.Group();
        [THREE.BackSide, THREE.FrontSide].forEach((side) => {
            group.add(
                new THREE.Mesh(
                    this.makeGeometry(),
                    this.makeMaterial(side)
                )
            );
        });
        return group;
    }
  
    getGroup() {
        return this.group;
    }
  
    // Add a revolving animation
    addRevolveAnimation(incrementValue, endAngle, axisToRotate) {
        const mod = (a, b) => ((a%b)+b)%b;
        const delta = 0.01;
    
        this.animQueue.add(() => {
            const difference = Math.abs(mod(this.group.rotation[axisToRotate], 2*Math.PI) - endAngle);
            // console.log("difference: ", difference);
            if (difference > delta) {
                this.group.rotation[axisToRotate] += incrementValue;
            }
            else {
                // remove the animation from the queue
                this.animQueue.remove();
                console.log("hello there");
            }
        });
    }  
}
  