import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilPacientemodPageRoutingModule } from './perfil-pacientemod-routing.module';

import { PerfilPacientemodPage } from './perfil-pacientemod.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilPacientemodPageRoutingModule
  ],
  declarations: [PerfilPacientemodPage]
})
export class PerfilPacientemodPageModule {}
