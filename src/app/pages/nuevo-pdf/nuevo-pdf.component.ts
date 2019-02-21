import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
// SERVICIOS
import { PdfService } from '../../services/pdf.service';
// MODELO
import { Pdf } from '../../models/pdf.model';

@Component({
  selector: 'app-nuevo-pdf',
  templateUrl: './nuevo-pdf.component.html',
  styleUrls: ['./nuevo-pdf.component.css']
})
export class NuevoPdfComponent implements OnInit {
  formulario: FormGroup;
  archivo: any;
  idObra: string;

  constructor(
    private _pdfService: PdfService,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe( params => {
      this.idObra = params['id'];
    });
  }

  ngOnInit() {
    this.formulario = new FormGroup({
      archivo: new FormControl()
    });
  }

  onArchivoSeleccionado(event) {
    this.archivo = event.target.files;
  }
  onSubmit() {
    let dataPdf = new Pdf(
      'anticipo',
      this.idObra
    );

    this._pdfService.savePdf(this.archivo, dataPdf);
  }
}
