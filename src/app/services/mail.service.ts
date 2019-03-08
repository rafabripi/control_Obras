import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { URL_SERVICES } from '../config/config';
// Servicios
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UsuarioService } from './usuario.service';

@Injectable({
  providedIn: 'root'
})
export class MailService {
  httpOptions: any;

  constructor(private http: HttpClient, private _usuarioService: UsuarioService) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'token': this._usuarioService.token
      })
    };
  }

  sendAnticipo(data: string) {
    return this.http.post( URL_SERVICES + '/mail/sendMail', data, this.httpOptions);
  }
}
