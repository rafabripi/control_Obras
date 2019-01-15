import { HttpHeaders } from '@angular/common/http';

// exportaciones de configuracion global
export const httpOptions = {
    // poner el token por medio de un interceptor http://blog.enriqueoriol.com/2017/11/httpclient-vs-http-angular.html
    headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjp7InRpcG8iOiJBZG1pbmlzdHJhZG9yIiwiZXN0YWRvIjp0cnVlLCJfaWQiOiI1YzEzMDM5NGYzM2Q2MzA5ZTRkMTVkNDYiLCJ1c2VyIjoicmJyaWJpZXgiLCJub21icmUiOiJSYWZhZWwiLCJhcGVsbGlkb3MiOiJCcmliaWVzY2EiLCJfX3YiOjB9LCJpYXQiOjE1NDUzNDk1ODgsImV4cCI6MTU0Nzk0MTU4OH0.pyF4RQUSgqHJCxa4OktQKPfTKcig9kLDbG-NMDR7rxc'
    })
};
export const URL_SERVICES = 'http://localhost:3900';
