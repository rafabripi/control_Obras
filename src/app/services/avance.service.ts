import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { httpOptions, URL_SERVICES } from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class AvanceService {

  constructor(private http: HttpClient) { }

  getAvance(id: string): any {
    return this.http.get(URL_SERVICES + `/avance/getAvance/${id}`, httpOptions)
                     .pipe(map(data => data['avanceDB'][0]));
  }
}
