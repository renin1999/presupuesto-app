import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { element } from 'protractor';
import { BalanceService } from '../balanceService.service';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.css']
})
export class IngresosComponent implements OnInit {
   ingresolist: Array<any> = [];

   @ViewChild('element') element: ElementRef;

  constructor(private balanceService: BalanceService) { }

  ngOnInit(): void {
    this.ingresolist = this.balanceService.ingresos;
  }
  
  borraringreso(index: number) {
    this.balanceService.borradoingreso(index);
    this.ingresolist=this.balanceService.ingresos;
    let balance = this.balanceService.getBalance();
    this.balanceService.presentabalance.emit(balance);
    let ingresos = this.balanceService.balanceingreso();
    this.balanceService.presentaingreso.emit(ingresos);
    let porcentaje = this.balanceService.porcentajeegresos;
    this.balanceService.presentaporcentaje.emit(porcentaje);
    }

}
