import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ListadoSuscriptoComponent } from './listado-suscripto/listado-suscripto.component';
import { AgregueSusComponent } from './agregue-sus/agregue-sus.component';
import { AgregarServiComponent } from './agregar-servi/agregar-servi.component';
import { ListadoServicioComponent } from './listado-servicio/listado-servicio.component';
import { ListadoPacienteComponent } from './listado-paciente/listado-paciente.component';

const routes: Routes = [
  {
    path: 'inicio',
    component: InicioComponent,
  },
  {
    path: 'listadoSuscripto',
    component: ListadoSuscriptoComponent,
  },
  {
    path: 'agregueSus',
    component: AgregueSusComponent,
  },
  {
    path: 'agregarServi',
    component: AgregarServiComponent,
  },
  {
    path: 'listadoServicio',
    component: ListadoServicioComponent,
  },
  {
    path: 'listadoPaciente',
    component: ListadoPacienteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminPageRoutingModule {}
