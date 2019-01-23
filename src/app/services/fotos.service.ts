import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
// Servicio
import { UsuarioService } from './usuario.service';
// Importacion de archivo de config global
import { URL_SERVICES } from '../config/config';
// --------------------------------------------------------------

@Injectable({
  providedIn: 'root'
})
export class FotosService {
  httpOptions: any;

  constructor(private http: HttpClient, private _usuarioService: UsuarioService) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'token': this._usuarioService.token
      })
    };
  }

  getImgs(data: any) {
    let checklist = data.checklist;
    let obraId = data.obraId;
    let params = new HttpParams().set('checklist', checklist).set('obraId', obraId);

    return this.http.get(URL_SERVICES + '/img/getImgs', {headers: this.httpOptions.headers, params: params})
      .pipe(map(datas => datas['result'] ));
  }
}
