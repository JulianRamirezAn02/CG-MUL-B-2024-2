import { Linea } from './linea.js';

export class Cuadrado {
    #x
    #y
    #longitud
    #line

    constructor(x,y,longitud,line) {
        this.#x = x
        this.#y =y
        this.#longitud = longitud
        this.#line=line
    }

    verticesCuadrado(x,y,longitud){
        const A = [x-longitud/2,y-longitud/2]
        const B = [x+longitud/2,y-longitud/2] 
        const C = [x+longitud/2,y+longitud/2]
        const D = [x-longitud/2,y+longitud/2]
        return [A,B,C,D]
    }
    verticesCuadradoRotado(x,y,longitud,angle){
        const A = this.rotacion(x-longitud/2,y-longitud/2,angle)
        const B = this.rotacion(x+longitud/2,y-longitud/2,angle)
        const C = this.rotacion(x+longitud/2,y+longitud/2,angle)
        const D = this.rotacion(x-longitud/2,y+longitud/2,angle)
        return [A,B,C,D]
    }
    dibujarCuadrado(ctx){
        const [A,B,C,D] = this.verticesCuadrado(this.#x,this.#y,this.#longitud);
        new Linea(A,B,this.#line).dibujar(ctx)
        new Linea(B,C,this.#line).dibujar(ctx)
        new Linea(C,D,this.#line).dibujar(ctx)
        new Linea(D,A,this.#line).dibujar(ctx)
    }
    rotacion(x,y,angulo){
        const rad = (1/180)*angulo
        const xd=x*Math.cos(rad)-y*Math.sin(rad)
        const yd = x*Math.sin(rad)+y*Math.cos(rad)
        return [xd,yd]
    }
    dibujarCuadradoRotado(ctx,angle){
        const [A,B,C,D] = this.verticesCuadradoRotado(this.#x,this.#y,this.#longitud,angle);
        new Linea(A,B,this.#line).dibujar(ctx)
        new Linea(B,C,this.#line).dibujar(ctx)
        new Linea(C,D,this.#line).dibujar(ctx)
        new Linea(D,A,this.#line).dibujar(ctx)
    }
}