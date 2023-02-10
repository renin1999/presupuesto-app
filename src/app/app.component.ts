import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 value: number = 0;
 ingreso: number = 0;
 egreso: number = 0;
 porcentajeegresos: number = 0;


  setValue(value: any) { this.value = value; }
  setValueI(ingreso: any) { this.ingreso = ingreso; }
  setValueE(egreso: any) { this.egreso = egreso; }
  setValueP(porcentajeegresos:any) { this.porcentajeegresos = porcentajeegresos; }


  title = 'presupuesto-app';
}
