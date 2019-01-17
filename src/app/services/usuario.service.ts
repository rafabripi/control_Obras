import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import swal from 'sweetalert';
// Modelo de datos
import { Usuario } from '../models/usuario.model';
// Importacion de observables
import 'rxjs/add/operator/map';
// Importacion de archivo de config global
import { httpOptions, URL_SERVICES } from '../config/config';
// --------------------------------------------------------------

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  usuario: string;
  token: string;

  constructor(private http: HttpClient) {
    this.loadStorage();
  }

  loadStorage() {
    if (localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
      this.usuario = localStorage.getItem('usuario');
    } else {
      this.token = '';
      this.usuario = null;
    }
  }

  checkLogin() {
    // sentencia resumida
    // return (this.token.length > 10) ? true : false;
    console.log(this.token.length, 'longitud del token');
    return true;
  }

  login(usuario: any, recordar: boolean = false) {
    if (recordar) {
      localStorage.setItem('usuarioSave', usuario.user);
    } else {
      localStorage.removeItem('usuarioSave');
    }
    return this.http.post(URL_SERVICES + '/usuario/login', usuario, httpOptions)
        .map( (resp: any) => {
          // resp nos servira para obtener la informacion necesaria para el inicio de sesion del usuario
          localStorage.setItem('id', resp.id);
          localStorage.setItem('token', resp.token);
          localStorage.setItem('usuario', JSON.stringify(resp.usuario));

          return true;
        });
  }

  saveUser(user: Usuario) {
    return this.http.post(URL_SERVICES + '/usuario/saveUser', user)
      .map( (resp: any) => {
        // mensaje de exito clase 153 y 154
        swal('Usuario guardado!', user.user.toString(), 'success');
        return resp.usuario;
      });
  }

}
