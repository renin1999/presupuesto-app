import { BalanceService } from "./balanceService.service";

export class Egreso {
    private egreso: number = 0;
    private detalle: string = "";
    private porcentaje: number = 0;
    
    constructor(egreso:number, detalle: string) {
        this.detalle = detalle;
        this.egreso = egreso;
    }
    getEgreso() {
        return this.egreso;
    }
    setEgreso(egreso: number) {
        this.egreso = egreso;
    }
    getDetalle() {
        return this.detalle;
    }
    setDetalle(detalle: string) {
    this.detalle = detalle;
    }
    setporcentaje(porcentaje: number) {
        this.porcentaje =porcentaje;
    }
    getPorcentaje() {
        return this.porcentaje; 
    }
 

}