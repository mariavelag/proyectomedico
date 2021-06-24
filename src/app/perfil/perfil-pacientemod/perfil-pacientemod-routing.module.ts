import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilPacientemodPage } from './perfil-pacientemod.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilPacientemodPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilPacientemodPageRoutingModule {}
