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
  anticipo: boolean; 
  contrato: boolean; 
  euf: boolean; 
  acta_entrega: boolean; 
  bitacora: boolean; 
  finiquito: boolean;

  constructor(private _location: Location, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe( params => {
      this.obraId = params['obraId'];
    });
    this.anticipo = true;
    this.contrato = true;
    this.  euf = true;
    this.acta_entrega = true;
    this.bitacora = false;
    this.finiquito = true;
  }

  ngOnInit() {
      
  }

  backClicked() {
    this._location.back();
  }
}
