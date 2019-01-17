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
  
  login(usuario: any, recordar: boolean = false) {
    return this.http.post(URL_SERVICES + '/usuario/login', usuario, httpOptions)
        .map( (resp: any) => {
          console.log(resp, 'Hallo! ');
          
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
