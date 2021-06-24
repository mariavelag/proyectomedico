import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilSuscriptorPage } from './perfil-suscriptor.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilSuscriptorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilSuscriptorPageRoutingModule {}
