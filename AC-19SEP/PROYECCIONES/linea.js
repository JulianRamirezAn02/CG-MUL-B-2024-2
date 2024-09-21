export class Linea {
    #punto1; 
    #punto2; 
    #line;

    constructor(punto1, punto2, line) {
        this.#punto1 = punto1; 
        this.#punto2 = punto2; 
        this.#line = line;
    }

    dibujar(ctx) {
        ctx.beginPath();
        ctx.moveTo(this.#punto1[0], this.#punto1[1]); 
        ctx.lineTo(this.#punto2[0], this.#punto2[1]); 
        ctx.strokeStyle = "black";
        ctx.lineWidth = this.#line;
        ctx.closePath();
        ctx.stroke();
    }
}
