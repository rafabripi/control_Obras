import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

const httpOptions = {
  // poner el token por medio de un interceptor http://blog.enriqueoriol.com/2017/11/httpclient-vs-http-angular.html
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjp7InRpcG8iOiJBZG1pbmlzdHJhZG9yIiwiZXN0YWRvIjp0cnVlLCJfaWQiOiI1YzEzMDM5NGYzM2Q2MzA5ZTRkMTVkNDYiLCJ1c2VyIjoicmJyaWJpZXgiLCJub21icmUiOiJSYWZhZWwiLCJhcGVsbGlkb3MiOiJCcmliaWVzY2EiLCJfX3YiOjB9LCJpYXQiOjE1NDUzNDk1ODgsImV4cCI6MTU0Nzk0MTU4OH0.pyF4RQUSgqHJCxa4OktQKPfTKcig9kLDbG-NMDR7rxc'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AvanceService {

  constructor(private http: HttpClient) { }

  getAvance(id: string): any {
    return this.http.get(`http://localhost:3900/avance/getAvance/${id}`, httpOptions)
                     .pipe(map(data => data['avanceDB'][0]));
  }
}
