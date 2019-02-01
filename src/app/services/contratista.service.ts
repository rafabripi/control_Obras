import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import swal from 'sweetalert';
// Importacion de observables
import 'rxjs/add/operator/map';
// Importacion de archivo de config global
import { URL_SERVICES } from '../config/config';
// Modelo
import { Contratista } from '../models/contratista.model';
import { map } from 'rxjs-compat/operator/map';
// --------------------------------------------------------------

@Injectable({
  providedIn: 'root'
})
export class ContratistaService {
  httpOptions: any;
  token: string;

  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'token': this.token
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
}
