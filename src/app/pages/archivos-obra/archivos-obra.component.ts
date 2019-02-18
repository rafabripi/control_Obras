import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-archivos-obra',
  templateUrl: './archivos-obra.component.html',
  styleUrls: ['./archivos-obra.component.css']
})
export class ArchivosObraComponent implements OnInit {
  obraId: any;
  formulario: FormGroup;

  constructor(private _location: Location, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe( params => {
      this.obraId = params['obraId'];
    });
  }

  ngOnInit() {
    this.formulario = new FormGroup({
      anticipo: new FormControl (true),
      contrato: new FormControl (true),
      euf: new FormControl (true),
      acta_entrega: new FormControl (true),
      bitacora: new FormControl (true),
      finiquito: new FormControl (true)
    });
  }

  backClicked() {
    this._location.back();
  }
}
