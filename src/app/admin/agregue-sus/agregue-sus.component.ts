import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregue-sus',
  templateUrl: './agregue-sus.component.html',
  styleUrls: ['./agregue-sus.component.scss'],
})
export class AgregueSusComponent implements OnInit {
  constructor(
    public alertController: AlertController,
    private router: Router
  ) {}

  ngOnInit() {}
  goRegis() {
    this.router.navigate(['admin/inicio']);
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirmar',
      message: '¿Esta seguro De Agregarlo?',
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
}
