import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.scss'],
})
export class RegistrarComponent implements OnInit {
  constructor(
    public alertController: AlertController,
    private router: Router
  ) {}

  ngOnInit() {}
  goSoli() {
    this.router.navigate(['/auth/suscribir']);
  }
  goPaci() {
    this.router.navigate(['/auth/regis-Cli']);
  }
}
