import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
// Servicio
import { UsuarioService } from './usuario.service';
// Importacion de archivo de config global
import { URL_SERVICES } from '../config/config';
// --------------------------------------------------------------

@Injectable({
  providedIn: 'root'
})
export class PdfService {
  httpOptions: any;
  httpOptionsPdf: any;

  constructor(private http: HttpClient, private _usuarioService: UsuarioService) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'token': this._usuarioService.token
      })
    };
    this.httpOptionsPdf = {
      headers: new HttpHeaders({
        'token': this._usuarioService.token
      })
    };
  }

  savePdf(pdf: File, data: any) {
    console.log('service to save afile');
  }
}
