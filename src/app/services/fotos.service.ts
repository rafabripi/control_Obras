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
  httpOptionsImg: any;

  constructor(private http: HttpClient, private _usuarioService: UsuarioService) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'token': this._usuarioService.token
      })
    };
    this.httpOptionsImg = {
      headers: new HttpHeaders({
        'token': this._usuarioService.token
      })
    };
  }

  getImgs(data: any) {
    let checklist = data.checklist;
    let obraId = data.obraId;
    // metodo para mandar data por medio de HttpParams
    // let params = new HttpParams().set('checklist', checklist).set('obraId', obraId);
    // return this.http.get(URL_SERVICES + '/img/getImgs', {headers: this.httpOptions.headers, params: params})
    return this.http.get(URL_SERVICES + `/img/getImgs/?checklist=${checklist}&obraId=${obraId}`, this.httpOptions)
      .pipe(map(datas => datas['result'] ));
  }

  loadImg(imagen: File, data: any) {
    let formData = new FormData();
    formData.append('archivo', imagen, imagen.name);
    formData.append('obraId', data.obraId);
    formData.append('checklist', data.checklist);
    return this.http.put(URL_SERVICES + '/img/saveImg', formData, this.httpOptionsImg);
  }
  // getImg(nombre: any) {
  //   return this.http.get(URL_SERVICES + `/img/getImg/?nombre=${nombre}`, this.httpOptions)
  //     .pipe( map( data => {
  //       console.log( typeof(data), 'tipo de data regresada.....');
  //     } ) );
  // }
}
