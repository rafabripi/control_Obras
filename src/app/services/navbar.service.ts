import { Injectable } from '@angular/core';
import { UsuarioService } from './usuario.service';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  menu: any;
  userId: string;
  userIdd: string;

  constructor(private _usuarioService: UsuarioService) {
    this.userIdd = this._usuarioService.usuario;
    console.log(this.userIdd);
    this.userId = '5c532dc4b7c1441ce0d15754';
    this.menu = [
        {titulo: 'Inicio', url: '/home'},
        {titulo: 'Lista de obras', url: '/obrasList'},
        {titulo: 'Nuevo proyecto', url: '/addObra'},
        {titulo: 'Usuarios', url: '/usuariosList'},
        {titulo: 'Contratistas', url: '/contratistasList'},
        {titulo: 'Supervisores', url: `/obrasSupervisor/${this.userId}` },
        {titulo: 'Fotos', url: '/fotos'}
      ];
   }
}
