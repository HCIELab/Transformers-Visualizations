import * as THREE from 'https://unpkg.com/three/build/three.module.js';
import { OrbitControls } from 'https://unpkg.com/three/examples/jsm/controls/OrbitControls.js';

function main() {
    const canvas = document.querySelector('#c');
    const renderer = new THREE.WebGLRenderer({canvas});
    
    // Camera
    const fov = 75;
    const aspect = window.innerWidth / window.innerHeight;
    const near = 0.1;
    const far = 5;
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.z = 4;

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.update();

    
    // Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xAAAAAA);

    // Light
    {
        const color = 0xFFFFFF;
        const intensity = 1;
        const light = new THREE.DirectionalLight(color, intensity);
        light.position.set(-1, 2, 4);
        scene.add(light);
    }
    
    // Geometry, Material, Mesh
    const [boxWidth, boxHeight, boxDepth] = [1, 1, 1];
    const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);
    
    function makeInstance(geometry, color, x) {
        const material = new THREE.MeshPhongMaterial({color});
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);
        cube.position.x = x;
        return cube;
    }
    const cube = makeInstance(geometry, 0x44aa88, 0);

    // Add a revolving animation
    function addRevolveAnimation(mesh, timeSeconds) {
        const speed = 1;
        const rot = timeSeconds * speed;
        mesh.rotation.x = rot;
        mesh.rotation.y = rot;
    }

    // To fix the issue of objects being low resolution and looking pixelated
    function resizeRendererToDisplaySize(renderer) {
        const canvas = renderer.domElement;
        const width = canvas.clientWidth;
        const height = canvas.clientHeight;
        const needResize = canvas.width !== width || canvas.height !== height;
        if (needResize) {
            renderer.setSize(width, height, false);
        }
        return needResize;
    }

    // Render
    function render(time) {
        if (resizeRendererToDisplaySize(renderer)) {
            // To fix the issue of objects appearing 'stretched out' when window is resized
            const canvas = renderer.domElement;
            camera.aspect = canvas.clientWidth / canvas.clientHeight;
            camera.updateProjectionMatrix();
            controls.update();
        }

        // addRevolveAnimation(cube, time*0.001);

        renderer.render(scene, camera);
        requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
}

main();

console.log("hi there");