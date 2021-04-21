import * as THREE from 'https://unpkg.com/three/build/three.module.js';
import { OrbitControls } from 'https://unpkg.com/three/examples/jsm/controls/OrbitControls.js';


import setupSettings from "./settings.js";
import CubeInstance from "./CubeInstance.js";


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

/* ~~~~~~~~~~~~~~~~~~~~~ MAIN ~~~~~~~~~~~~~~~~~~~~~ */
function main() {
  const canvas = document.querySelector('#c');
  const renderer = new THREE.WebGLRenderer({canvas});

  const {camera, scene} = setupSettings();

  // Orbit Controls
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.update();


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