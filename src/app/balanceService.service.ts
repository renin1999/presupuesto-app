import { EventEmitter } from "@angular/core";
import { Egreso } from "./egresos.module";
import { Ingreso } from "./ingresos.module";
export class BalanceService {

    constructor() {

    }

    egresos: Egreso[] = [];
    ingresos: Ingreso[] = [];
    porcentajeegresos: number = 0;

    private balance: number = 0;

    ingresoagregado(value: number, detail: string) {
        this.ingresos.push(new Ingreso(value, detail));
    }
    egresoagregado(value: number, detail: string) {
        let eg = new Egreso(value, detail)
        this.egresos.push(eg);
    }
    balanceegreso(): number {
        let total = 0;
        for (let egreso of this.egresos) {
            total = total + egreso.getEgreso();
            let porcentaje = (egreso.getEgreso() * 100) / this.balanceingreso();
            egreso.setporcentaje(porcentaje);
        }
        return total;
    }
    balanceingreso(): number {
        let total = 0;
        for (let ingreso of this.ingresos) {
            total = ingreso.getIngreso() + total;
        }
        return total;
    }
    getBalance(): number {
        this.balance = this.balanceingreso() - this.balanceegreso();
        this.porcentajeegresos = (this.balanceegreso() * 100) / this.balanceingreso();
        return this.balance;
    }
    borradoingreso(index: number)
    {
        delete(this.ingresos[index]);
        this.ingresos=this.ingresos.filter(x=>x);
        this.balance=this.getBalance();
        console.log(this.balance);
        
    }
    borradoegreso(index: number)
    {
        delete(this.egresos[index]);
        this.egresos=this.egresos.filter(x=>x);
        this.balance=this.getBalance();
        console.log(this.balance);
    }

    presentabalance = new EventEmitter();
    presentaingreso = new EventEmitter();
    presentaegreso = new EventEmitter();
    presentaporcentaje = new EventEmitter();


}