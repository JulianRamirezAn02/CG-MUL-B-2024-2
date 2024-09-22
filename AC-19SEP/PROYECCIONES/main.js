// main.js
import { Cubo } from './cubo.js'; // Asegúrate de que el nombre y la ruta sean correctos
import { Cuadrado } from "./cuadrado.js";
const canvas = document.getElementById("canva");
const ctx = canvas.getContext("2d");



new Cubo(200,200,2).dibujar_ortografica(ctx)
new Cubo(300,200,2).dibujar_ortografica(ctx)

