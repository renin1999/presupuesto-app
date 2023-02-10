import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { BalanceService } from '../balanceService.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  @ViewChild('tipo') tipo: ElementRef;

  type: string = '';
  detail: string = "";
  value: number = 0;
  balance: number = 0;
  ingreso: number = 0;
  egreso: number = 0;
  porcentajeegresos: number = 0;
  constructor(private balanceService: BalanceService) { 
  }
  types(){
    this.type = this.tipo.nativeElement.value;
  }
  agregar() {
    if (this.tipo.nativeElement.value == "ing") {
      this.balanceService.ingresoagregado(this.value, this.detail);
      this.ingreso = this.balanceService.balanceingreso();
      this.balanceService.presentaingreso.emit(this.ingreso);
    }
    if (this.tipo.nativeElement.value == "egr") {
      this.balanceService.egresoagregado(this.value, this.detail);
      this.egreso = this.balanceService.balanceegreso();
      this.balanceService.presentaegreso.emit(this.egreso);
    }
    this.balance = this.balanceService.getBalance();
    this.balanceService.presentabalance.emit(this.balance);
    this.porcentajeegresos = this.balanceService.porcentajeegresos;
    this.balanceService.presentaporcentaje.emit(this.porcentajeegresos);  }
  ngOnInit(): void {
  }

}
