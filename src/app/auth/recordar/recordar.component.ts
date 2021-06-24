import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recordar',
  templateUrl: './recordar.component.html',
  styleUrls: ['./recordar.component.scss'],
})
export class RecordarComponent implements OnInit {
  constructor(
    public alertController: AlertController,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {}
  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirmar',
      message: '¿Sus datos estan correctos?',
      buttons: [
        {
          text: 'Si',
          handler: () => {
            console.log('Confirm Okay');
          },
        },
        {
          text: ' No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          },
        },
      ],
    });

    await alert.present();
  }
  atras() {
    this.router.navigate(['/auth/login']);
  }
}
