import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { httpOptions, URL_SERVICES } from '../config/config';
import { Obra } from '../models/obra.model';

@Injectable()
export class ObrasService {

  constructor(private http: HttpClient) {
  }

  getObras(): any {
    return this.http.get( URL_SERVICES + '/obra/getObras', httpOptions)
                    .pipe(map(data => data['obras']));
  }

  getObra(id: string): any {
    return this.http.get( URL_SERVICES + `/obra/getObra/${id}`, httpOptions)
                    .pipe(map(data => data['obra']));
  }
  saveObra(obraToSave: Obra) {
    return this.http.post( URL_SERVICES + '/obra/saveObra', obraToSave, httpOptions);
  }
}
