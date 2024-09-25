import { Cuadrado } from "./cuadrado.js";
import { Linea } from "./linea.js";
export class Cubo {
    #centro
    #line
    #longitud
    constructor(centro,line,longitud) {
        this.#centro = centro
        this.#line = line
        this.#longitud = longitud
    }
    dibujar_perspectiva(ctx,Ubicacion2,porcentaje){
        
        const nuevoCentro = [Ubicacion2[0],Ubicacion2[1]]

        const cua1 = new Cuadrado(this.#centro,this.#longitud,this.#line).dibujarCuadrado(ctx)
        const cua2 = new Cuadrado(nuevoCentro,this.tamanno(this.#longitud,porcentaje),this.#line).dibujarCuadrado(ctx)

        const [A,B,C,D] = new Cuadrado(this.#centro,this.#longitud,this.#line).verticesCuadrado(this.#centro,this.#longitud)
        const [A2,B2,C2,D2] = new Cuadrado(nuevoCentro,this.tamanno(this.#longitud,porcentaje),this.#line).verticesCuadrado(nuevoCentro,this.tamanno(this.#longitud,porcentaje))

        this.dibujarLineasPers(A,A2,B,B2,C,C2,D,D2,ctx)
    }
    dibujar_ortografica(ctx,Ubicacion2){
    
       const nuevoCentro = [Ubicacion2[0],Ubicacion2[1]]

       const cua1 = new Cuadrado(this.#centro,this.#longitud,this.#line).dibujarCuadrado(ctx)
       const cua2 = new Cuadrado(nuevoCentro,this.#longitud,this.#line).dibujarCuadrado(ctx)

       const [A,B,C,D] = new Cuadrado(this.#centro,this.#longitud,this.#line).verticesCuadrado(this.#centro,this.#longitud)
       const [A2,B2,C2,D2] = new Cuadrado(nuevoCentro,this.#longitud,this.#line).verticesCuadrado(nuevoCentro,this.#longitud)

       this.dibujarLineasPers(A,A2,B,B2,C,C2,D,D2,ctx)
    }
    dibujar_isometrica(ctx, Ubicacion2, angle) {
        const nuevoCentro = [Ubicacion2[0], Ubicacion2[1]]
        const cua1 = new Cuadrado(this.#centro, this.#longitud, this.#line).dibujarCuadradoRotado(ctx, angle)
        const cua2 = new Cuadrado(nuevoCentro, this.#longitud, this.#line).dibujarCuadradoRotado(ctx, angle)

        const [A, B, C, D] = new Cuadrado(this.#centro, this.#longitud, this.#line).verticesCuadradoRotado(angle)
        const [A2, B2, C2, D2] = new Cuadrado(Ubicacion2, this.#longitud, this.#line).verticesCuadradoRotado(angle)
        console.log(A)
        this.dibujarLineasPers(A,A2,B,B2,C,C2,D,D2,ctx)
    }
    dibujarLineasPers(A,A2,B,B2,C,C2,D,D2,ctx){

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