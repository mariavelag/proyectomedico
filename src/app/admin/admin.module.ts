import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { AdminPageRoutingModule } from './admin-routing.module';
import { ListadoSuscriptoComponent } from './listado-suscripto/listado-suscripto.component';
import { AgregarServiComponent } from './agregar-servi/agregar-servi.component';
import { AgregueSusComponent } from './agregue-sus/agregue-sus.component';
import { InicioComponent } from './inicio/inicio.component';
import { ListadoServicioComponent } from './listado-servicio/listado-servicio.component';
import { ListadoPacienteComponent } from './listado-paciente/listado-paciente.component';

@NgModule({
  declarations: [
    ListadoServicioComponent,
    ListadoSuscriptoComponent,
    AgregarServiComponent,
    AgregueSusComponent,
    InicioComponent,
    ListadoPacienteComponent,
  ],
  imports: [CommonModule, FormsModule, IonicModule, AdminPageRoutingModule],
})
export class AdminPageModule {}
