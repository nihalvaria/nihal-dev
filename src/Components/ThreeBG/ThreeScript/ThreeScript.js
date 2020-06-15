import * as THREE from "three";

export const ThreeScript = (el) => {
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    var renderer = new THREE.WebGLRenderer({alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    el.appendChild(renderer.domElement);

    var geometry = new THREE.SphereGeometry(8);
    var material = new THREE.MeshBasicMaterial({
        color: 0xcccccc,
        wireframe: true,
    });

    var sphere = new THREE.Mesh(geometry, material);
    var sizer = true;

    scene.add(sphere);
    camera.position.z = 5;

    function render() {
        requestAnimationFrame(render);
        sphere.rotation.x += 0.001;
        sphere.rotation.y += 0.001;

        if (sphere.scale.x <= 0.3) sizer = false;
        if (sphere.scale.x >= 1.1) sizer = true;

        if (sizer) {
            sphere.scale.x -= 0.001;
            sphere.scale.y -= 0.001;
            sphere.scale.z -= 0.001;
        } else {
            sphere.scale.x += 0.001;
            sphere.scale.y += 0.001;
            sphere.scale.z += 0.001;
        }

        renderer.domElement.id = el.id;
        renderer.render(scene, camera);
    }

    window.addEventListener("resize", onWindowResize, false);
    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }

    render();
};
