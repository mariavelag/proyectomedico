import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ListadoServicioService {
  listado = of([
    {
      nombre: 'RX',
      imgURL:
        // eslint-disable-next-line max-len
        'https://media.istockphoto.com/photos/radiographic-image-or-xray-image-of-human-chest-for-a-medical-check-picture-id1133123956?k=6&m=1133123956&s=612x612&w=0&h=IWYERj7hvbaDjNC6Bc0eDSJ1sXky560v6cG0kv-T_Lw=',
    },

    {
      imgURL:
        // eslint-disable-next-line max-len
        'data:image/jpeg;base64,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',
      nombre: 'Hematología',
    },
    {
      imgURL:
        // eslint-disable-next-line max-len
        'data:image/jpeg;base64,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',
      nombre: 'gastroenterología',
    },
  ]);

  constructor() {}

  getListado(): Observable<any> {
    return this.listado;
  }
}