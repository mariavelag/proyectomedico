import { Component, OnInit } from '@angular/core';
import { RecordarComponent } from '../recordar/recordar.component';
import { RegistrarComponent } from '../registrar/registrar.component';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  userFormGroup: FormGroup;
  constructor(
    private router: Router,
    private formBuild: FormBuilder,
    private loginService: LoginService
  ) {}

  ngOnInit() {
    this.userFormGroup = this.formBuild.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(4)]],
    });
  }

  login() {
    const username = this.userFormGroup.value.username;
    const password = this.userFormGroup.value.password;
    this.loginService
      .inicioSesion(username, password)
      .subscribe((respuesta) => {
        console.log(respuesta);
      });
  }
  goRegis() {
    this.router.navigate(['/auth/registrar']);
  }
  goRecor() {
    this.router.navigate(['/auth/recordar']);
  }
}
