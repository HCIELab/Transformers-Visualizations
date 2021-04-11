import * as THREE from 'https://unpkg.com/three/build/three.module.js';



function main() {
    const canvas = document.querySelector('#c');
    const renderer = new THREE.WebGLRenderer({canvas});
    
    const fov = 75;
    const aspect = 2;
    const near = 0.1;
    const far = 5;
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    
    camera.position.z = 2;
    
    const scene = new THREE.Scene();

    // Light
    {
        const color = 0xFFFFFF;
        const intensity = 1;
        const light = new THREE.DirectionalLight(color, intensity);
        light.position.set(-1, 2, 4);
        scene.add(light);
    }
    
    const [boxWidth, boxHeight, boxDepth] = [1, 1, 1];
    const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);
    // const material = new THREE.MeshPhongMaterial({color: 0x44aa88});
    
    // const cube = new THREE.Mesh(geometry, material);
    // scene.add(cube);
    function makeInstance(geometry, color, x) {
        const material = new THREE.MeshPhongMaterial({color});
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);
        cube.position.x = x;
        return cube;
    }
    const cubes = [
        makeInstance(geometry, 0x44aa88, 0),
        makeInstance(geometry, 0x8844aa, -2),
        makeInstance(geometry, 0xaa8844, 2),
    ]


    
    function render(time) {
        time *= 0.001 //convert time into seconds

        if (resizeRendererToDisplaySize(renderer)) {
            // To fix the issue of objects appearing 'stretched out' when window is resized
            const canvas = renderer.domElement;
            camera.aspect = canvas.clientWidth / canvas.clientHeight;
            camera.updateProjectionMatrix();
        }

        cubes.forEach((cube, ndx) => {
            const speed = 1 + ndx * .1;
            const rot = time * speed;
            cube.rotation.x = rot;
            cube.rotation.y = rot;
        });
        renderer.render(scene, camera);
        requestAnimationFrame(render);
    }
    requestAnimationFrame(render);

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


}

main();




console.log("hi there");