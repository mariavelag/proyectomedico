import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilPage } from './perfil.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilPage
  },
  {
    path: 'perfil-suscriptor',
    loadChildren: () => import('./perfil-suscriptor/perfil-suscriptor.module').then( m => m.PerfilSuscriptorPageModule)
  },
  {
    path: 'perfil-paciente',
    loadChildren: () => import('./perfil-paciente/perfil-paciente.module').then( m => m.PerfilPacientePageModule)
  },
  {
    path: 'perfil-vista',
    loadChildren: () => import('./perfil-vista/perfil-vista.module').then( m => m.PerfilVistaPageModule)
  },
  {
    path: 'perfil-pacientemod',
    loadChildren: () => import('./perfil-pacientemod/perfil-pacientemod.module').then( m => m.PerfilPacientemodPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilPageRoutingModule {}
