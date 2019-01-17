import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
// Servicios
import { UsuarioService } from '../usuario.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor( private _usuarioService: UsuarioService, private router: Router ) {}

  canActivate() {
    if (this._usuarioService.checkLogin()) {
      console.log('soy el guard!!!!');
      return true;
    } else {
      this.router.navigate(['/login']);
      console.log('Bloqueado por el guard!!!!');
      return false;
    }
  }
}
