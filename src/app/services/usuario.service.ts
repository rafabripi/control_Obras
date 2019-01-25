import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import swal from 'sweetalert';
// Modelo de datos
import { Usuario } from '../models/usuario.model';
// Importacion de observables
import 'rxjs/add/operator/map';
// Importacion de archivo de config global
import { URL_SERVICES } from '../config/config';
// --------------------------------------------------------------

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  usuario: string;
  token: string;
  httpOptions: any;

  constructor(private http: HttpClient, private router: Router) {
    this.loadStorage();
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'token': this.token
      })
    };
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
    this.loadStorage();
    return (this.token.length > 10) ? true : false;
  }

  logout() {
    this.token = '';
    this.usuario = null;
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    localStorage.removeItem('id');

    this.router.navigate(['/login']);
  }

  login(usuario: Usuario, recordar: boolean = false) {
    if (recordar) {
      localStorage.setItem('usuarioSave', usuario.user.toString());
    } else {
      localStorage.removeItem('usuarioSave');
    }

    return this.http.post(URL_SERVICES + '/usuario/login', usuario).map( (resp: any) => {
      // resp nos servira para obtener la informacion necesaria para el inicio de sesion del usuario
      localStorage.setItem('id', resp.id);
      localStorage.setItem('token', resp.token);
      localStorage.setItem('usuario', JSON.stringify(resp.usuario));

      return true;
    });
  }

  saveUser(user: Usuario) {
    return this.http.post(URL_SERVICES + '/usuario/saveUser', user, this.httpOptions).
      map( (resp: any) => {
        // mensaje de exito clase 153 y 154
        swal('Usuario guardado!', user.user.toString(), 'success');
        return resp.usuario;
      });
  }

  getuser(id: string) {
    return this.http.get(URL_SERVICES + `/usuario/getUser/${id}`, this.httpOptions)
      .map( (res: any) => res.usuario);
  }

  getUsers() {
    return this.http.get( URL_SERVICES + '/usuario/getusers', this.httpOptions)
      .map((res: any) => res.usuarios);
  }

  updateUser(id: string, data: Usuario) {
    return this.http.put(URL_SERVICES + `/usuario/updateUser/${id}`, data, this.httpOptions);
  }
}
