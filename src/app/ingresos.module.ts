export class Ingreso {
    
    private ingreso: number = 0;
    private detalle: string = "";
    
    constructor(ingreso:number, detalle: string) {
        this.detalle = detalle;
        this.ingreso = ingreso;
    }
    getIngreso() {
        return this.ingreso;
    }
    setIngreso(ingreso: number) {
        this.ingreso = ingreso;
    }
    getDetalle() {
        return this.detalle;
    }
    setDetalle(detalle: string) {
    this.detalle = detalle;
    }
}