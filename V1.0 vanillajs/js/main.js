import * as THREE from 'https://unpkg.com/three/build/three.module.js';

import basicSettings from "./basicSettings.js";
import moreSettings from "./moreSettings.js";
import rotations from "./rotations.js";

const {moreSettingsSetup, moreSettingsLoop} = moreSettings();
const {rotationsSetup, rotationsLoop} = rotations();

/* ~~~~~~~~~~~~~~~~~~~~~ MAIN ~~~~~~~~~~~~~~~~~~~~~ */
function main() {
  const canvas = document.querySelector('#c');
  const renderer = new THREE.WebGLRenderer({canvas});

  const {camera, scene} = basicSettings();
  const {controls} = moreSettingsSetup(renderer, camera);

  let rotationAxis = "x";
  const {cubeList, animQueue} = rotationsSetup(scene, rotationAxis);


  // Render
  function render(time) {
    moreSettingsLoop(renderer, camera, controls);
    rotationsLoop(animQueue, time);

    renderer.render(scene, camera);
    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
}

main();

console.log("hi there");