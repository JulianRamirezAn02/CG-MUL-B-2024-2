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
const lineCube = new THREE.LineSegments(edgesCube, new THREE.LineBasicMaterial({ color: 0x000000 })); // Color negro
cube.add(lineCube);


camera.position.z = 50;

function animate() {
    requestAnimationFrame(animate)
    cube.rotation.x += Math.random() * 0.02; 
    cube.rotation.y += Math.random() * 0.02; 
    cube.position.x += (Math.random() - 0.5) * 0.5; 
    renderer.render(scene, camera);
}

animate();


