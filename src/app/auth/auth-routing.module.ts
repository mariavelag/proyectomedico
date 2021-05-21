import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import{ RegistrarComponent } from './registrar/registrar.component';
import { RecordarComponent} from './recordar/recordar.component';
import { SuscribirComponent} from './suscribir/suscribir.component';
import{ RegisCliComponent } from './regis-cli/regis-cli.component'; 

const routes: Routes = [
  {
    path: 'login',
    component:LoginComponent
  },
  {
    path: 'registrar',
    component:RegistrarComponent
  },
  {
    path: 'recordar',
    component:RecordarComponent
  },
  {
    path: 'suscribir',
    component:SuscribirComponent
  },
  {
    path: 'regis-Cli',
    component:RegisCliComponent
  }
 
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
