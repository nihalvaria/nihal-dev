import * as THREE from "three";
import Home from "../../../Containers/Home/Home";

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

    scene.add(sphere);
    camera.position.z = 5;

    function render() {
        requestAnimationFrame(render);
        sphere.rotation.x += 0.0015;
        sphere.rotation.y += 0.0015;
        
        renderer.domElement.id = el.id;
        renderer.render(scene, camera);
    }
    
    window.addEventListener("resize", onWindowResize, false);
    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }
    
    var lastScrollTop = 0;
    
    document.getElementById("varia").addEventListener("scroll", function(){ 
    var st = document.getElementById("varia").scrollTop;
        if (st < lastScrollTop){
            sphere.rotation.x += 0.0255;
            sphere.rotation.y -= 0.0015;
        }   else {
            sphere.rotation.x -= 0.0255;
            sphere.rotation.y += 0.0015;
        }
        lastScrollTop = st <= 0 ? 0 : st;
    }, false);

    render();
};
