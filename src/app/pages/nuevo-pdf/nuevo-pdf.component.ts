import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  labelFile: string;

  @Output() changeStauts: EventEmitter<any> = new EventEmitter();
  @Input() tipoArchivo: string;

  constructor(
    private _pdfService: PdfService,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe( params => {
      this.idObra = params['obraId'];
    });
    this.labelFile = 'Elegir archivo';
    this.tipoArchivo = '';
  }

  ngOnInit() {
    this.formulario = new FormGroup({
      archivo: new FormControl()
    });
  }

  onArchivoSeleccionado(event) {
    this.archivo = event.target.files;
    this.labelFile = this.archivo[0].name;
  }

  onSubmit() {
    let dataPdf = new Pdf(
      this.tipoArchivo,
      this.idObra
    );

    this._pdfService.savePdf(this.archivo, dataPdf)
      .subscribe( data => {
        this.formulario.reset();
        this.labelFile = 'Elegir archivo';
        this.changeStauts.emit(true);
      });
  }
}
