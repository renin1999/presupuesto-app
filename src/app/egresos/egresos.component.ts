import { Component, OnInit } from '@angular/core';
import { BalanceService } from '../balanceService.service';

@Component({
  selector: 'app-egresos',
  templateUrl: './egresos.component.html',
  styleUrls: ['./egresos.component.css']
})
export class EgresosComponent implements OnInit {
 egresolist: Array<any> = [];

  constructor(private balanceService: BalanceService) { }

  ngOnInit(): void {
    this.egresolist = this.balanceService.egresos;
  }

  borraregreso(index: number) {
    this.balanceService.borradoegreso(index);
    this.egresolist=this.balanceService.egresos;
    let balance = this.balanceService.getBalance();
    this.balanceService.presentabalance.emit(balance);
    let egresos = this.balanceService.balanceegreso();
    this.balanceService.presentaegreso.emit(egresos);
    let porcentaje = this.balanceService.porcentajeegresos;
    this.balanceService.presentaporcentaje.emit(porcentaje);
    }

}
