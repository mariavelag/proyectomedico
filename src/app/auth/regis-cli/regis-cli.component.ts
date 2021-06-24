import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
  selector: 'app-regis-cli',
  templateUrl: './regis-cli.component.html',
  styleUrls: ['./regis-cli.component.scss'],
})
export class RegisCliComponent implements OnInit {

  constructor(public alertController: AlertController,private router:Router) { }

  ngOnInit() {}

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirmar',
      message: '¿Esta seguro de registrarse?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  };
  goRegis(){
    this.router.navigate(['/auth/registrar'])
  };

}
