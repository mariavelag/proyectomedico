import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RecordarComponent } from './recordar/recordar.component';
import { RegisCliComponent } from './regis-cli/regis-cli.component';
import { SuscribirComponent } from './suscribir/suscribir.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    LoginComponent,
    RecordarComponent,
    SuscribirComponent,
    RegisCliComponent,
  ],
  imports: [CommonModule, IonicModule, AuthRoutingModule],
})
export class AuthModule {}
