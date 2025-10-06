//Create a Three.JS Scene
// Use browser-compatible module imports from unpkg
import * as THREE from 'three';
import { GLTFLoader } from 'https://unpkg.com/three@0.160.0/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'https://unpkg.com/three@0.160.0/examples/jsm/controls/OrbitControls.js';

const scene = new THREE.Scene();
// Create a new camera with position and angles
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

//Keep track of mouse position to animate the object
let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

//Keep the 3D object on a global variable so we can access it later
let object;

//OrbitControls allow the camera to move around the scene
let controls

//Set which object to render
let objectToRender = 'mushroom';

//Instantiate a loader for the .gltf file
const loader = new GLTFLoader();

//Load the .gltf file
loader.load(
    'assets/Bolete_Mushrooms_pdvcB_Raw.gltf',
    (gltf) => {
        object = gltf.scene;
        scene.add(object);
    },
    (xhr) => {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
    },  
    (error) => {
        console.error(error);
    }
);

//Instantiate a new renderer and set its size
const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true }); // alpha: true for transparent background
renderer.setSize(window.innerWidth, window.innerHeight);

const container = document.getElementById('model-container');
if (!container) {
    console.error('model-container element not found');
} else {
    container.appendChild(renderer.domElement);
}

//Set the camera position
camera.position.z = 0.3;

//Add lights to the scene
const toplight = new THREE.DirectionalLight(0xffffff, 0.8);
toplight.position.set(0, 1, 1);
toplight.castShadow = true;
scene.add(toplight);

const ambientLight = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambientLight);

//This adds controls to the camera
if (objectToRender === 'mushroom') {
    controls = new OrbitControls(camera, renderer.domElement);
}

//render the scene
function animate() {
    requestAnimationFrame(animate);

    if (object && objectToRender === 'mushroom') {
        // object.rotation.y += 0.005 + mouseX / window.innerWidth * 0.05;
        // object.rotation.x += 0.002 + mouseY * 0.05 / window.innerHeight ;
    }
    renderer.render(scene, camera);
}
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });

    document.onmousemove = (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    }

    animate();