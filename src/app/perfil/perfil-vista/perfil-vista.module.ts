import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilVistaPageRoutingModule } from './perfil-vista-routing.module';

import { PerfilVistaPage } from './perfil-vista.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilVistaPageRoutingModule
  ],
  declarations: [PerfilVistaPage]
})
export class PerfilVistaPageModule {}
