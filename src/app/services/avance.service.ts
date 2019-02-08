import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { URL_SERVICES } from '../config/config';
// Servicios
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UsuarioService } from './usuario.service';
// Modelos
import { Avance } from '../models/avance.model';

@Injectable({
  providedIn: 'root'
})
export class AvanceService {
  httpOptions: any;

  constructor(private http: HttpClient, private _usuarioService: UsuarioService) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'token': this._usuarioService.token
      })
    };
  }
  saveAvance(data: Avance) {
    return this.http.post( URL_SERVICES + '/avance/saveAvance', data, this.httpOptions )
      .map( (resp: any) => {
        swal('Avance guardado!', 'Avance de ' +  resp.avance.avance.toString(), 'success');
        return resp.avance;
      });
  }

  getAvance(id: string): any {
    return this.http.get(URL_SERVICES + `/avance/getAvance/${id}`, this.httpOptions)
      .pipe(map(data => data['avanceDB'][0]));
  }
}
