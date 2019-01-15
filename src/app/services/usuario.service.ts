import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario.model';
// Importacion de archivo de config global
import { httpOptions, URL_SERVICES } from '../config/config';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  constructor(private http: HttpClient) {}

  saveUser(user: Usuario) {
    return this.http.post(URL_SERVICES + '/usuario/saveUser', user, httpOptions);
  }
}
