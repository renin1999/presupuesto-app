import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PresentadorComponent } from './presentador/presentador.component';
import { FormularioComponent } from './formulario/formulario.component';
import { IngresosComponent } from './ingresos/ingresos.component';
import { EgresosComponent } from './egresos/egresos.component';
import { BalanceService } from './balanceService.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    PresentadorComponent,
    FormularioComponent,
    IngresosComponent,
    EgresosComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [BalanceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
