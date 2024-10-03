const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
camera.position.z = 5;
const arregloCubos =[]

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
const randomNumero = getRandomArbitrary(1,5)

function crearNCubos(nCubos,arreglo) {
    arreglo=[]
    var agregado = 1
    for (let index = -1; index < nCubos; index++) {

        arreglo[index]=new THREE.Mesh(new THREE.BoxGeometry( 1,1,1), new THREE.MeshBasicMaterial( { color: 0x00ff00 } ) );  

        console.log(arreglo[index])
        moverCubos(arreglo[index],agregado)
        agregado+=2
        console.log(agregado)
        scene.add(arreglo[index]) 
    }
}

function moverCubos(arreglo,agregado) {
        arreglo.position.x = agregado-2
        renderer.render(scene, camera)
}



crearNCubos(randomNumero,arregloCubos)
console.log(randomNumero)
