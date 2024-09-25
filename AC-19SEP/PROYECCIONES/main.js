// main.js
import { Cubo } from './cubo.js';
import { Cuadrado } from "./cuadrado.js";
const canvas = document.getElementById("canva");
const ctx = canvas.getContext("2d");

new Cubo([200,200],2,120).dibujar_perspectiva(ctx,[273, 150],40)
new Cubo([450,200],2,120).dibujar_ortografica(ctx,[485, 139])
new Cubo([750,200],2,120).dibujar_isometrica(ctx,[750, 100],140)


