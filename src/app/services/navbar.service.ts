import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  menu: any;

  constructor() {
    this.menu = [
        {titulo: 'Crear nuevo proyecto', url: '/addObra'},
        {titulo: 'Lista de obras', url: '/obrasList'}
      ];
   }
}
