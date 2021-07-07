import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  users: Array<any> = [
    {
      user: 'Michell',
      password: '123456',
    },
    {
      user: 'Maria',
      password: '6789',
    },
    {
      user: 'Albenis',
      password: '101112',
    },
  ];

  constructor() {}

  inicioSesion(username: string, password: string) {
    const userFound = this.users.find((user) => user.user === username);
    if (userFound) {
      if (userFound.password === password) {
        return of({ code: 200 });
      }
      return of({ code: 401 });
    }
    return of({ code: 404 });
  }
}
