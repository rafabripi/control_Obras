import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  menu: any;

  constructor() {
    this.menu = [
        {titulo: 'Inicio', url: '/home'},
        {titulo: 'Lista de obras', url: '/obrasList'},
        {titulo: 'Nuevo proyecto', url: '/addObra'},
        {titulo: 'Nuevo usuario', url: '/nuevoUsuario'},
        {titulo: 'Fotos', url: '/fotos'}
      ];
   }
}
