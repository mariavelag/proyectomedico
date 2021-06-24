import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilSuscriptorPageRoutingModule } from './perfil-suscriptor-routing.module';

import { PerfilSuscriptorPage } from './perfil-suscriptor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilSuscriptorPageRoutingModule
  ],
  declarations: [PerfilSuscriptorPage]
})
export class PerfilSuscriptorPageModule {}
