import { Linea } from './linea.js';

export class Cuadrado {
    #centro;  
    #longitud; 
    #line;     

    constructor(centro, longitud, line) {
        this.#centro = centro; 
        this.#longitud = longitud; 
        this.#line = line;
    }

    verticesCuadrado(centro, longitud) {
        const A = [centro[0] - longitud / 2, centro[1] - longitud / 2];
        const B = [centro[0] + longitud / 2, centro[1] - longitud / 2];
        const C = [centro[0] + longitud / 2, centro[1] + longitud / 2];
        const D = [centro[0] - longitud / 2, centro[1] + longitud / 2];
        return [A, B, C, D];
    }

    verticesCuadradoRotado(angulo) {
        const vertices = this.verticesCuadrado(this.#centro, this.#longitud);
        return vertices.map(vertex => this.rotacion(vertex, angulo, this.#centro));
    }

    rotacion(vertex, angulo, centro) {
        // Trasladar el vértice al origen
        const xTrasladado = vertex[0] - centro[0];
        const yTrasladado = vertex[1] - centro[1];
        const rad = (1/ 180) * angulo;
        const xd = xTrasladado * Math.cos(rad) - yTrasladado * Math.sin(rad);
        const yd = xTrasladado * Math.sin(rad) + yTrasladado * Math.cos(rad);
        return [xd + centro[0], yd + centro[1]];
    }

    dibujarCuadrado(ctx) {
        const [A, B, C, D] = this.verticesCuadrado(this.#centro, this.#longitud);
        this.dibujarLineasCuadrado(A, B, C, D, ctx);
    }

    dibujarCuadradoRotado(ctx, angle) {
        const [A, B, C, D] = this.verticesCuadradoRotado(angle);
        this.dibujarLineasCuadrado(A, B, C, D, ctx);
    }

    dibujarLineasCuadrado(A, B, C, D, ctx) {
        new Linea(A, B, this.#line).dibujar(ctx);
        new Linea(B, C, this.#line).dibujar(ctx);
        new Linea(C, D, this.#line).dibujar(ctx);
        new Linea(D, A, this.#line).dibujar(ctx);
    }
}
