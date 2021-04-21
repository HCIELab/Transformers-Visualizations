import * as THREE from 'https://unpkg.com/three/build/three.module.js';

import basicSettings from "./basicSettings.js";
import moreSettings from "./moreSettings.js";
import CubeInstance from "./CubeInstance.js";

const {moreSettingsSetup, moreSettingsLoop} = moreSettings();

/* ~~~~~~~~~~~~~~~~~~~~~ MAIN ~~~~~~~~~~~~~~~~~~~~~ */
function main() {
  const canvas = document.querySelector('#c');
  const renderer = new THREE.WebGLRenderer({canvas});

  const {camera, scene} = basicSettings();
  const {controls} = moreSettingsSetup(renderer, camera);


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
    moreSettingsLoop(renderer, camera, controls);

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