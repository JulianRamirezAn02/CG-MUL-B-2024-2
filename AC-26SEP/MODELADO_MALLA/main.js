const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometryCube = new THREE.BoxGeometry(10, 10, 10);
const materialCube = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const cube = new THREE.Mesh(geometryCube, materialCube);
cube.position.x = -20; 
scene.add(cube);

const edgesCube = new THREE.EdgesGeometry(geometryCube);
const lineCube = new THREE.LineSegments(edgesCube, new THREE.LineBasicMaterial({ color: 0x000000 }));
cube.add(lineCube);

const geometrySphere = new THREE.SphereGeometry(7.5, 32, 16);
const materialSphere = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const sphere = new THREE.Mesh(geometrySphere, materialSphere);
sphere.position.x = 0; 
scene.add(sphere);

const edgesSphere = new THREE.EdgesGeometry(geometrySphere);
const lineSphere = new THREE.LineSegments(edgesSphere, new THREE.LineBasicMaterial({ color: 0x000000 })); 
sphere.add(lineSphere);

const geometryCone = new THREE.ConeGeometry(5, 20, 32);
const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzl4jjC8ol5Ss5Wq2AHCFb7tbDjWmLW7GhPQ&s'); //material madera 
const materialCone = new THREE.MeshBasicMaterial({ map: texture }); 
const cone = new THREE.Mesh(geometryCone, materialCone);
cone.position.x = 20; 
scene.add(cone);

camera.position.z = 50;

function animate() {
    requestAnimationFrame(animate);

    cube.rotation.x += Math.random() * 0.02; 
    cube.rotation.y += Math.random() * 0.02; 
    cube.position.x += (Math.random() - 0.5) * 0.5; 

    sphere.rotation.x += Math.random() * 0.02; 
    sphere.rotation.y += Math.random() * 0.02; 
    sphere.position.y += (Math.random() - 0.5) * 0.5; 

    cone.rotation.x += Math.random() * 0.02; 
    cone.rotation.y += Math.random() * 0.02; 
    cone.position.z += (Math.random() - 0.5) * 0.5; 

    renderer.render(scene, camera);
}
animate();
