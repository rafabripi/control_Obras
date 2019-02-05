import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import swal from 'sweetalert';
// Importacion de observables
import 'rxjs/add/operator/map';
// Importacion de archivo de config global
import { URL_SERVICES } from '../config/config';
// Modelo
import { Contratista } from '../models/contratista.model';
// servicios
import { UsuarioService } from './usuario.service';
// --------------------------------------------------------------

@Injectable({
  providedIn: 'root'
})
export class ContratistaService {
  httpOptions: any;
  token: string;

  constructor(private http: HttpClient, private _usuarioService: UsuarioService) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'token': this._usuarioService.token
      })
    };
  }

  saveContratista(data: Contratista) {
    return this.http.post(URL_SERVICES + '/contratista/saveContratista', data, this.httpOptions)
      .map( (resp: any) => {
        console.log(resp);
        swal('Contratista guardado!', data.razon_social.toString(), 'success');
        return resp.contratista;
      });
  }

  getContratistas() {
    return this.http.get(URL_SERVICES + '/contratista/getContratistas', this.httpOptions)
      .map( (resp: any )=> resp.contratistas);
  }

  getContratista(id: string) {
    return this.http.get(URL_SERVICES + `/contratista/getContratista/${id}`, this.httpOptions)
      .map((resp: any)=> resp.contratista);
  }

  updateContratista(id: string, data: Contratista) {
    return this.http.put(URL_SERVICES + `/contratista/updateContratista/${id}`, data, this.httpOptions)
      .map( (resp: any)=> resp )
  }
}
