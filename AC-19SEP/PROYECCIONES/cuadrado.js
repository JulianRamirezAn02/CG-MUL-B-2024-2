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
    
    dibujarCuadrado(ctx){
        const [A,B,C,D] = this.verticesCuadrado(this.#x,this.#y,this.#longitud);
        new Linea(A,B,this.#line).dibujar(ctx)
        new Linea(B,C,this.#line).dibujar(ctx)
        new Linea(C,D,this.#line).dibujar(ctx)
        new Linea(D,A,this.#line).dibujar(ctx)
    }
}