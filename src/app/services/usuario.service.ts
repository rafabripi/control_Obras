import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import swal from 'sweetalert';
// Modelo de datos
import { Usuario } from '../models/usuario.model';
// Importacion de observables
import 'rxjs/add/operator/map';
// Importacion de archivo de config global
import {  URL_SERVICES } from '../config/config';
// --------------------------------------------------------------

const httpOptions = {
  // poner el token por medio de un interceptor http://blog.enriqueoriol.com/2017/11/httpclient-vs-http-angular.html
  headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjp7InRpcG8iOiJBZG1pbmlzdHJhZG9yIiwiZXN0YWRvIjp0cnVlLCJfaWQiOiI1YzEzMDM5NGYzM2Q2MzA5ZTRkMTVkNDYiLCJ1c2VyIjoicmJyaWJpZXgiLCJub21icmUiOiJSYWZhZWwiLCJhcGVsbGlkb3MiOiJCcmliaWVzY2EiLCJfX3YiOjB9LCJpYXQiOjE1NDUzNDk1ODgsImV4cCI6MTU0Nzk0MTU4OH0.pyF4RQUSgqHJCxa4OktQKPfTKcig9kLDbG-NMDR7rxc'
  })
};

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  usuario: string;
  token: string;

  constructor(private http: HttpClient, private router: Router) {
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
