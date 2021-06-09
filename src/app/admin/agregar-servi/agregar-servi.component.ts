import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
  selector: 'app-agregar-servi',
  templateUrl: './agregar-servi.component.html',
  styleUrls: ['./agregar-servi.component.scss'],
})
export class AgregarServiComponent implements OnInit {

  constructor(public alertController: AlertController,private router: Router) { }

  ngOnInit() {}
  goRegis(){
    this.router.navigate(['admin/inicio']);
  };

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


}
