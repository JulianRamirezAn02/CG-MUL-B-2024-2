import { Cuadrado } from "./cuadrado.js";
import { Linea } from "./linea.js";
export class Cubo {
    #x
    #y
    #line
    constructor(x,y,line) {
        this.#x=x
        this.#y = y
        this.#line = line
    }
    //TODO:refactorizar
    dibujar_perspectiva(ctx,porcentaje){
        
        const cua1 = new Cuadrado(this.#x,this.#y,300,this.#line).dibujarCuadrado(ctx)
        const cua2 = new Cuadrado(this.#x+100,this.#y+100,this.tamanno(300,porcentaje),this.#line).dibujarCuadrado(ctx)

        const [A,B,C,D] = new Cuadrado(this.#x,this.#y,300,this.#line).verticesCuadrado(this.#x,this.#y,300)
        const [A2,B2,C2,D2] = new Cuadrado(this.#x-100,this.#y-100,this.tamanno(300,porcentaje),this.#line).verticesCuadrado(this.#x+100,this.#y+100,this.tamanno(300,porcentaje))

        new Linea(A,A2,this.#line).dibujar(ctx)
        new Linea(B,B2,this.#line).dibujar(ctx)
        new Linea(C,C2,this.#line).dibujar(ctx)
        new Linea(D,D2,this.#line).dibujar(ctx)
    }
    dibujar_ortografica(ctx){
       
        //arreglar parametros
        const cua1 = new Cuadrado(this.#x,this.#y,300,this.#line).dibujarCuadrado(ctx)
        const cua2 = new Cuadrado(this.#x+100,this.#y+100,300,this.#line).dibujarCuadrado(ctx)

        const [A,B,C,D] = new Cuadrado(this.#x,this.#y,300,this.#line).verticesCuadrado(this.#x,this.#y,300)
        const [A2,B2,C2,D2] = new Cuadrado(this.#x-100,this.#y-100,300,this.#line).verticesCuadrado(this.#x+100,this.#y+100,300)

        new Linea(A,A2,this.#line).dibujar(ctx)
        new Linea(B,B2,this.#line).dibujar(ctx)
        new Linea(C,C2,this.#line).dibujar(ctx)
        new Linea(D,D2,this.#line).dibujar(ctx)
    }

    dibujar_isometrica(ctx,angle,longitud,extraX,extraY){
        const cua1 = new Cuadrado(this.#x,this.#y,longitud,this.#line).dibujarCuadradoRotado(ctx,angle)
        const cua2 = new Cuadrado(this.#x+extraX,this.#y+extraY,longitud,this.#line).dibujarCuadradoRotado(ctx,angle)

        const [A,B,C,D] = new Cuadrado(this.#x,this.#y,longitud,this.#line).verticesCuadradoRotado(this.#x,this.#y,longitud,angle)
        const [A2,B2,C2,D2] = new Cuadrado(this.#x+extraX,this.#y+extraY,longitud,this.#line).verticesCuadradoRotado(this.#x+extraX,this.#y+extraY,longitud,angle)

        console.log(A2)
        new Linea(A,A2,this.#line).dibujar(ctx)
        new Linea(B,B2,this.#line).dibujar(ctx)
        new Linea(C,C2,this.#line).dibujar(ctx)
        new Linea(D,D2,this.#line).dibujar(ctx)
    }

    tamanno(longitud,porcentaje){
        const size = porcentaje/100
        return longitud*size;
    }
}