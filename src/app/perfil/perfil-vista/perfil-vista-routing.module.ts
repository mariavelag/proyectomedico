import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilVistaPage } from './perfil-vista.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilVistaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilVistaPageRoutingModule {}
