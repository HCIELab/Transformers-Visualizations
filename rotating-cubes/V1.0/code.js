import * as THREE from 'https://unpkg.com/three/build/three.module.js';
import { OrbitControls } from 'https://unpkg.com/three/examples/jsm/controls/OrbitControls.js';

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
    const [boxWidth, boxHeight, boxDepth] = [1, 1, 1];
    const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);
    geometry.translate( -boxWidth/ 2, boxHeight / 2, -boxDepth / 2 ); 
    
    const cubes = [];
    function makeInstance(geo, color, x) {
      [THREE.BackSide, THREE.FrontSide].forEach((side) => {
          const material = new THREE.MeshPhongMaterial({
              color,
              opacity: 0.5,
              transparent: true,
              side,
          });
          const cube = new THREE.Mesh(geo, material);
          scene.add(cube);
          cube.position.x = x;
          cubes.push(cube);
      });
    }
    makeInstance(geometry, 0x44aa88, 1);
    makeInstance(geometry, 0xcc0000, 0);
    // console.log(cubes);


    // Add a revolving animation
    function addRevolveAnimation(mesh, timeSeconds) {
        const speed = 1;
        const rot = timeSeconds * speed;
        // mesh.rotation.x = rot;
        mesh.rotation.y = rot;
    }


    // Render
    function render(time) {
      handleRenderResizing(renderer, camera, controls);

      // cubes.map((c) => {
      //   addRevolveAnimation(c, time*0.001);
      // })
      addRevolveAnimation(cubes[2], time*0.001);
      addRevolveAnimation(cubes[3], time*0.001);

      renderer.render(scene, camera);
      requestAnimationFrame(render);
    }
    
    requestAnimationFrame(render);
}


main();

console.log("hi there");