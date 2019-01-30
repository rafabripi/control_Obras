import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { URL_SERVICES } from '../config/config';
import { Obra } from '../models/obra.model';
// Servicios
import { UsuarioService } from './usuario.service';

@Injectable()
export class ObrasService {
  httpOptions: any;

  constructor(private http: HttpClient, private _usuarioService: UsuarioService) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'token': this._usuarioService.token
      })
    };
  }

  getObras(): any {
    return this.http.get(URL_SERVICES + '/obra/getObras', this.httpOptions)
      .pipe(map(data => data['obras']));
  }

  getObra(id: string): any {
    return this.http.get( URL_SERVICES + `/obra/getObra/${id}`, this.httpOptions)
      .pipe(map(data => data['obra']));
  }

  saveObra(obraToSave: Obra) {
    return this.http.post( URL_SERVICES + '/obra/saveObra', obraToSave, this.httpOptions)
      .map( (resp: any) => {
        swal('Obra guardada!', obraToSave.nombre_obra.toString(), 'success');
        return resp.nombre_obra;
      } );
  }

  buscarObra(termino: string) {
    return this.http.get( URL_SERVICES + `/obra/busqueda/${termino}`, this.httpOptions)
      .map((resp: any) => {
        return resp.obras;
      });
  }
}
