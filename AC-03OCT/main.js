// Configuración básica de Three.js
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Creamos el controlador de órbita para poder mover la cámara con el mouse
const controls = new THREE.OrbitControls(camera, renderer.domElement);

// Función para generar un número aleatorio en un rango
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Crear cubos aleatorios
const numCubes = getRandomInt(1, 5); // Número de cubos entre 1 y 5
const cubes = [];
const spacing = 5; // Distancia entre los cubos

for (let i = 0; i < numCubes; i++) {
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: Math.random() * 0xffffff });
    const cube = new THREE.Mesh(geometry, material);

    // Posicionar cubos de forma equidistante
    cube.position.x = (i - (numCubes - 1) / 2) * spacing;
    cubes.push(cube);
    scene.add(cube);
}

// Configurar la cámara
camera.position.z = 5;

// Animación de rotación sincronizada
function animate() {
    requestAnimationFrame(animate);

    // Rotar los cubos sincrónicamente
    cubes.forEach(cube => {
        const rotationSpeed = 0.01;
        cube.rotation.x += rotationSpeed;
        cube.rotation.y += rotationSpeed;
    });

    // Actualizar los controles
    controls.update();

    // Renderizar la escena
    renderer.render(scene, camera);
}

// Llamar a la función de animación
animate();

// Ajustar el tamaño del render cuando la ventana cambie de tamaño
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});
