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
  httpOptionsPdfDown: any;

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
    this.httpOptionsPdfDown = {
      responseType: 'blob',
      headers: new HttpHeaders().append('Content-Type', 'application/pdf').append('token', this._usuarioService.token)
    };
  }

  savePdf(pdf: File, data: any) {
    let formData = new FormData();
    let name = pdf[0].name;
    formData.append('archivo', pdf[0], name);
    formData.append('checklist', data.checklist);
    formData.append('obraId', data.obraId);

    return this.http.put(URL_SERVICES + '/pdf/savePdf', formData, this.httpOptionsPdf)
      .map( (resp: any) => {
        swal(
          {
            title: 'Archivo guardado!',
            text: resp.pdf.checklist.toString().toUpperCase(),
            icon: "success",
            timer: 1000,
          });
        return resp.avance;
      });
  }

  getPdfsObra(obraId) {
    return this.http.get( URL_SERVICES + `/pdf/getPdfsObra/${obraId}`, this.httpOptions)
      .map( (respGet: any) => respGet);
  }

  downloadPdf(nombre: string) {
    return this.http.get( URL_SERVICES + `/pdf/downloadPdf/?nombre=${nombre}`, this.httpOptionsPdfDown)
      .map( (respPdf) => respPdf);
  }

  delFile(nombre: string, id: string) {
    return this.http.delete(URL_SERVICES + `/pdf/delFile/?nombre=${nombre}&id=${id}`, this.httpOptions)
    .map ( (respDel) => {
      swal({
        title: "Archivo eliminado",
        icon: "success",
        timer: 1100,
      });
      return respDel;
    });
  }
}
