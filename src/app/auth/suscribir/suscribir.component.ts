import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-suscribir',
  templateUrl: './suscribir.component.html',
  styleUrls: ['./suscribir.component.scss'],
})
export class SuscribirComponent implements OnInit {
  constructor(
    public alertController: AlertController,
    private router: Router
  ) {}

  ngOnInit() {}

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirmar',
      message: '¿Estas seguro de enviar la solicitud?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          },
        },
        {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
          },
        },
      ],
    });

    await alert.present();
  }
  goRegis() {
    this.router.navigate(['/auth/registrar']);
  }
}
