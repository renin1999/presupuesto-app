import { Component, Input, OnInit } from '@angular/core';
import { BalanceService } from '../balanceService.service';

@Component({
  selector: 'app-presentador',
  templateUrl: './presentador.component.html',
  styleUrls: ['./presentador.component.css']
})
export class PresentadorComponent implements OnInit {
  value: number = 0;
  ingreso: number = 0;
  egreso: number = 0;
  porcentajeegresos: number = 0;

  constructor(private balanceService: BalanceService) {
    this.balanceService.presentabalance.subscribe(
      (x: number) => { this.value = x; }
    );
    this.balanceService.presentaingreso.subscribe(
      (x: number) => { this.ingreso = x; }
    );
    this.balanceService.presentaegreso.subscribe(
      (x: number) => { this.egreso = x; }
    );
    this.balanceService.presentaporcentaje.subscribe(
      (x: number) => { this.porcentajeegresos = x; }
      );
  }


  ngOnInit(): void {
  }

}
