import * as THREE from 'https://unpkg.com/three/build/three.module.js';


export default class CubeInstance {
    constructor(scene, color, x, animQueue) {
      this.scene = scene;
      this.color = color;
      this.x = x;
      this.animQueue = animQueue;
  
      this.meshes = this.makeMeshes();
      this.meshes.forEach((m) => {
        m.position.x = this.x;
        this.scene.add(m);
      })
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
  
    makeMeshes() {
      return [THREE.BackSide, THREE.FrontSide].map((side) => {
        const mesh = new THREE.Mesh(
          this.makeGeometry(),
          this.makeMaterial(side));
        return mesh;
      });
    }
  
    getMeshes() {
      return this.meshes;
    }
  
    // Add a revolving animation
    addRevolveAnimation(time, incrementValue, endAngle, axisToRotate) {
      const mod = (a, b) => ((a%b)+b)%b;
      const delta = 0.01;
  
      this.meshes.forEach((mesh) => {
        const difference = Math.abs(mod(mesh.rotation[axisToRotate], 2*Math.PI) - endAngle);
        console.log("difference: ", difference);
        if (difference > delta) {
            mesh.rotation[axisToRotate] += incrementValue;
        }
        else {
            // remove the animation from the queue
            this.animQueue.remove();
        }
      })
    }  
}
  