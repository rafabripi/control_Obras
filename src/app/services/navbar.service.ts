import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  menu: any;
  userId: string;

  constructor() {}

  openService(usuario) {
    // this.userId = usuario._id;
    // ID DE PRUEBA, BORRAR Y DEJAR EL RENGLON ANTERIOR PARA RECUPERAR ID DEL USUARIO LOGEADO
    this.userId = '5c532dc4b7c1441ce0d15754';
    this.menu = [
      {titulo: 'Inicio', url: '/home'},
      {titulo: 'Lista de obras', url: '/obrasList'},
      {titulo: 'Nuevo proyecto', url: '/addObra'},
      {titulo: 'Usuarios', url: '/usuariosList'},
      {titulo: 'Contratistas', url: '/contratistasList'},
      {titulo: 'Supervisores', url: `/obrasSupervisor/${this.userId}`},
      {titulo: 'Fotos', url: '/fotos'}
    ];
  }
  closeService() {
    this.menu = [];
    this.userId = '';
  }
}
