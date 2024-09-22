// main.js
import { Cubo } from './cubo.js'; // Asegúrate de que el nombre y la ruta sean correctos
import { Cuadrado } from "./cuadrado.js";
const canvas = document.getElementById("canva");
const ctx = canvas.getContext("2d");

new Cuadrado(500,200,50,5).dibujarCuadradoRotado(ctx,120)
new Cuadrado(500,200,50,5).dibujarCuadrado(ctx)

new Cubo(500,-20,2).dibujar_isometrica(ctx,140,140,140,140);
//new Cubo(200,200,2).dibujar_perspectiva(ctx,50)
//new Cubo(800,200,2).dibujar_ortografica(ctx)


