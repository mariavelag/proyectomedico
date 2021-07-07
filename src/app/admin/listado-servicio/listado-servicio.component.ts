import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ListadoServicioService } from './listado-servicio.service';

@Component({
  selector: 'app-listado-servicio',
  templateUrl: './listado-servicio.component.html',
  styleUrls: ['./listado-servicio.component.scss'],
})
export class ListadoServicioComponent implements OnInit {
  listaDeServicios: Array<any> = [];

  constructor(
    private router: Router,
    private navCrtl: NavController,
    private listadoService: ListadoServicioService
  ) {}

  ngOnInit() {
    this.listadoService.getListado().subscribe((listado) => {
      this.listaDeServicios = listado;
    });
  }

  goRegis() {
    this.router.navigate(['admin/inicio']);
  }
}
