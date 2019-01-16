import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import swal from 'sweetalert';

// Modelo de datos
import { Usuario } from '../models/usuario.model';
// Importacion de observables
import 'rxjs/add/operator/map';
// Importacion de archivo de config global
import { httpOptions, URL_SERVICES } from '../config/config';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  constructor(private http: HttpClient) {}

  saveUser(user: Usuario) {
    return this.http.post(URL_SERVICES + '/usuario/saveUser', user, httpOptions)
      .map( (resp: any) => {
        // mensaje de exito clase 153 y 154
        swal('Usuario guardado!', user.user.toString(), 'success');
        return resp.usuario;
      });
  }
}
