import * as THREE from 'https://unpkg.com/three/build/three.module.js';

export default function setupSettings() {
    // Camera
    const fov = 75;
    const aspect = window.innerWidth / window.innerHeight;
    const near = 0.1;
    const far = 50;
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.z = 4;

    // Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xAAAAAA);

    // Light
    function addLight(x, y, z) {
        const color = 0xFFFFFF;
        const intensity = 1;
        const light = new THREE.DirectionalLight(color, intensity);
        light.position.set(x, y, z);
        scene.add(light);
    }
    addLight(-1, 2, 4);
    addLight(1, -1, -1);
  
    return {camera, scene};
}