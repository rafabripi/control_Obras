import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
// MODELOS
import { Pdf } from '../../models/pdf.model';
// SERVICIOS
import { PdfService } from '../../services/pdf.service';

@Component({
  selector: 'app-archivos-obra',
  templateUrl: './archivos-obra.component.html',
  styleUrls: ['./archivos-obra.component.css']
})
export class ArchivosObraComponent implements OnInit {
  obraId: any;
  tipoArchivo: string;
  pdfs: any;
  conteo: number;
  archivoToDel: string;
  archivoId: string;
  // FLAGS
  anticipo: boolean;
  contrato: boolean;
  euf: boolean;
  acta_entrega: boolean;
  bitacora: boolean;
  finiquito: boolean;

  constructor(private _location: Location,
              private activatedRoute: ActivatedRoute,
              private _pdfService: PdfService ) {
    this.activatedRoute.params.subscribe( params => {
      this.obraId = params['obraId'];
    });
    this.conteo = 0;
    this.archivoToDel= '';
    this.archivoId= '';
  }

  ngOnInit() {
    this.cargarArchivos();
  }

  cargarArchivos() {
    this._pdfService.getPdfsObra(this.obraId)
      .subscribe( dataArchivo => {
        let cadenaArchivos = '';
        this.pdfs = dataArchivo.pdfs;
        this.conteo = dataArchivo.conteo;
        for (const key in this.pdfs) {
          if (this.pdfs.hasOwnProperty(key)) {
            const element = this.pdfs[key];
            cadenaArchivos += element.checklist;
          }
        }

        this.anticipo = (cadenaArchivos.indexOf('anticipo') >= 0);
        this.contrato = (cadenaArchivos.indexOf('contrato') >= 0);
        this.euf = (cadenaArchivos.indexOf('euf') >= 0);
        this.acta_entrega = (cadenaArchivos.indexOf('acta_entrega') >= 0);
        this.bitacora = (cadenaArchivos.indexOf('bitacora') >= 0);
        this.finiquito = (cadenaArchivos.indexOf('finiquito') >= 0);
        this.tipoArchivo = '';
      });
  }

  actualizaEstado( $event ) {
    console.log($event);

  }

  backClicked() {
    this._location.back();
  }

  saveClick(tipo: string) {
    this.tipoArchivo = tipo;
  }

  downloadClicked(tipo: string) {
    this._pdfService.downloadPdf()
      .subscribe();
  }

  delClicked(tipo: string) {
    // this.obraId
    for (const key in this.pdfs) {
      if (this.pdfs.hasOwnProperty(key)) {
        const element = this.pdfs[key];
        if (element.checklist === tipo) {
          this.archivoToDel = element.nombre;
          this.archivoId = element._id;
        } 
      }
    }
    this._pdfService.delFile(this.archivoToDel, this.archivoId)
      .subscribe();
  }
}
