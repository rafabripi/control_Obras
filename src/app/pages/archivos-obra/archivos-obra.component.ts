import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
// MODELOS
import { Pdf } from '../../models/pdf.model';
// SERVICIOS
import { PdfService } from '../../services/pdf.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-archivos-obra',
  templateUrl: './archivos-obra.component.html',
  styleUrls: ['./archivos-obra.component.css']
})
export class ArchivosObraComponent implements OnInit {
  obraId: any;
  tipoArchivo: string;
  pdfs: Pdf[];
  conteo: number;
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
    this.cargarArchivos();
  }


  cargarArchivos() {
    this._pdfService.getPdfsObra(this.obraId)
      .subscribe( dataArchivo => {
        this.pdfs = dataArchivo.pdfs;
        this.conteo = dataArchivo.conteo;
        // PROBAR USAR INDEXOF PARA BUSCAR LOS CHECKLIST EN pdfs
        ///////////////////////////////////////////
        this.anticipo = true;
        this.contrato = false;
        this.euf = true;
        this.acta_entrega = true;
        this.bitacora = false;
        this.finiquito = true;
        this.tipoArchivo = '';
      });
  }

  ngOnInit() {
  }

  actualizaEstado( $event ) {
    console.log($event);

  }

  backClicked() {
    this._location.back();
  }

  saveClick(tipo) {
    this.tipoArchivo = tipo;
  }
}
