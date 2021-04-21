import { OrbitControls } from 'https://unpkg.com/three/examples/jsm/controls/OrbitControls.js';


export default function() {
    const moreSettingsSetup = (renderer, camera) => {
        // Orbit Controls
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.update();
        return {controls}
    } 


    const moreSettingsLoop = (renderer, camera, controls) => {
        const handleRenderResizing = (renderer, camera, controls) => {
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
        handleRenderResizing(renderer, camera, controls);
    }

    return {moreSettingsSetup, moreSettingsLoop};
}