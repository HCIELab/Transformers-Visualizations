import * as THREE from 'https://unpkg.com/three/build/three.module.js';
import { OrbitControls } from 'https://unpkg.com/three/examples/jsm/controls/OrbitControls.js';
import CubeInstance from "./CubeInstance.js";

/* ~~~~~~~~~~~~~~~~~~~~~ SETTINGS FUNCTIONS ~~~~~~~~~~~~~~~~~~~~~ */
function cameraSettings() {
  const fov = 75;
  const aspect = window.innerWidth / window.innerHeight;
  const near = 0.1;
  const far = 50;
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.z = 4;
  return {camera};
}

function sceneSettings() {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0xAAAAAA);
  return {scene}
}

function lightSettings(scene) {
  function addLight(x, y, z) {
    const color = 0xFFFFFF;
    const intensity = 1;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(x, y, z);
    scene.add(light);
  }
  addLight(-1, 2, 4);
  addLight(1, -1, -1);
}

function handleRenderResizing(renderer, camera, controls) {
  // To fix the issue of objects being low resolution and looking pixelated
  function resizeRendererToDisplaySize() {
    const canvas = renderer.domElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const needResize = canvas.width !== width || canvas.height !== height;
    if (needResize) {
        renderer.setSize(width, height, false);
    }
    return needResize;
  }

  if (resizeRendererToDisplaySize()) {
    // To fix the issue of objects appearing 'stretched out' when window is resized
    const canvas = renderer.domElement;
    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    camera.updateProjectionMatrix();
    controls.update();
  }
}

/* ~~~~~~~~~~~~~~~~~~~~~ CLASSES ~~~~~~~~~~~~~~~~~~~~~ */
// class CubeInstance {
//   constructor(scene, color, x) {
//     this.scene = scene;
//     this.color = color;
//     this.x = x;

//     this.meshes = this.makeMeshes();
//     this.meshes.forEach((m) => {
//       m.position.x = this.x;
//       this.scene.add(m);
//     })
//   }

//   makeGeometry() {
//     const [boxWidth, boxHeight, boxDepth] = [1, 1, 1];
//     const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);
//     geometry.translate( -boxWidth/ 2, boxHeight / 2, -boxDepth / 2 ); 
//     return geometry;
//   }

//   makeMaterial(side) {
//     return new THREE.MeshPhongMaterial({
//       color: this.color,
//       opacity: 0.5,
//       transparent: true,
//       side,
//     });  
//   }

//   makeMeshes() {
//     return [THREE.BackSide, THREE.FrontSide].map((side) => {
//       const mesh = new THREE.Mesh(
//         this.makeGeometry(),
//         this.makeMaterial(side));
//       return mesh;
//     });
//   }

//   getMeshes() {
//     return this.meshes;
//   }

//   // Add a revolving animation
//   addRevolveAnimation(time, incrementValue, endAngle, axisToRotate) {
//     const mod = (a, b) => ((a%b)+b)%b;
//     const delta = 0.01;

//     this.meshes.forEach((mesh) => {
//       const difference = Math.abs(mod(mesh.rotation[axisToRotate], 2*Math.PI) - endAngle);
//       console.log("difference: ", difference);
//       if (difference > delta) {
//         mesh.rotation[axisToRotate] += incrementValue;
//       }
//     })
//   }
//   addRevolveAnimation_1(time) {
//       this.addRevolveAnimation(time, -0.01, Math.PI * 1, "z");
//   }
//   // TODO: once the rotation is complete, how do you remove it from the AnimationQueue

// }


/* ~~~~~~~~~~~~~~~~~~~~~ MAIN ~~~~~~~~~~~~~~~~~~~~~ */
function main() {
  const canvas = document.querySelector('#c');
  const renderer = new THREE.WebGLRenderer({canvas});
  
  // Camera
  const {camera}  = cameraSettings();

  // Orbit Controls
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.update();
  
  // Scene
  const {scene} = sceneSettings();

  // Light
  lightSettings(scene);

  // Geometry, Material, Mesh
  const cubeList = [
    new CubeInstance(scene, 0x44aa88, 1),
    new CubeInstance(scene, 0xcc0000, 0),
  ];

  // Animation Queue
  const animationQueue = [];
  document.addEventListener("click", () => {
    animationQueue.push((time) => cubeList[1].addRevolveAnimation_1(time));
  })


  // Render
  function render(time) {
    handleRenderResizing(renderer, camera, controls);

    animationQueue.forEach((animFunction) => {
      animFunction(time);
    })

    renderer.render(scene, camera);
    requestAnimationFrame(render);
  }
  
  requestAnimationFrame(render);
}

main();

console.log("hi there");