import { Component, OnInit } from '@angular/core';
import { RecordarComponent } from '../recordar/recordar.component';
import { RegistrarComponent } from '../registrar/registrar.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}
  goRegis() {
    this.router.navigate(['/auth/registrar']);
  }
  goRecor() {
    this.router.navigate(['/auth/recordar']);
  }
}
