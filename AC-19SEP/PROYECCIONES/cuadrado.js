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

    verticesCuadrado(){
        const A = [this.#x-this.#longitud/2,this.#y-this.#longitud/2]
        const B = [this.#x+this.#longitud/2,this.#y-this.#longitud/2] 
        const C = [this.#x+this.#longitud/2,this.#y+this.#longitud/2]
        const D = [this.#x-this.#longitud/2,this.#y+this.#longitud/2]
        return [A,B,C,D]
    }

    dibujarCuadrado(ctx){
        const [A,B,C,D] = this.verticesCuadrado();
        const line1 = new Linea(A,B,this.#line)
        const line2 = new Linea(B,C,this.#line)
        const line3 = new Linea(C,D,this.#line)
        const line4 = new Linea(D,A,this.#line)
        line1.dibujar(ctx)
        line2.dibujar(ctx)
        line3.dibujar(ctx)
        line4.dibujar(ctx)
    }
}