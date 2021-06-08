import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NavController} from '@ionic/angular';


@Component({
  selector: 'app-listado-suscripto',
  templateUrl: './listado-suscripto.component.html',
  styleUrls: ['./listado-suscripto.component.scss'],
})
export class ListadoSuscriptoComponent implements OnInit {

  listaDeSuscriptores: Array<any> =[

    { nombre:"Dra. Carla Crespo",
     imgURL: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F001%2F903%2F803%2Fnon_2x%2Fwoman-doctor-wearing-mask-free-photo.jpg&imgrefurl=https%3A%2F%2Fes.vecteezy.com%2Ffoto%2F1903803-mujer-doctor-con-mascarilla&tbnid=jqR96X_GyK1FJM&vet=12ahUKEwjqrujHov7wAhXO0VMKHYlHAFcQMygCegUIARDYAQ..i&docid=hDgIWYAoySvEYM&w=1473&h=980&q=doctora&client=firefox-b-d&ved=2ahUKEwjqrujHov7wAhXO0VMKHYlHAFcQMygCegUIARDYAQ",
     

    },

    {
      imgURL: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F001%2F903%2F803%2Fnon_2x%2Fwoman-doctor-wearing-mask-free-photo.jpg&imgrefurl=https%3A%2F%2Fes.vecteezy.com%2Ffoto%2F1903803-mujer-doctor-con-mascarilla&tbnid=jqR96X_GyK1FJM&vet=12ahUKEwjqrujHov7wAhXO0VMKHYlHAFcQMygCegUIARDYAQ..i&docid=hDgIWYAoySvEYM&w=1473&h=980&q=doctora&client=firefox-b-d&ved=2ahUKEwjqrujHov7wAhXO0VMKHYlHAFcQMygCegUIARDYAQ',
      nombre:'Dra. Maria Ramos',
    }

  ]

  constructor(private router:Router, private navCrtl:NavController) { }

  ngOnInit() {}
  goRegis(){
    this.router.navigate(['admin/inicio'])
  };

}
