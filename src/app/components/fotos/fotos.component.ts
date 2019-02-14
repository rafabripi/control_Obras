import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// Servicios
import { ObrasService } from '../../services/obras.service';
import { FotosService } from '../../services/fotos.service';
// Modelos
import { Img } from '../../models/img.model';
import { Obra } from '../../models/obra.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
  styleUrls: ['./fotos.component.css']
})
export class FotosComponent implements OnInit {
  checklist: string;
  obraId: any;
  fotos: Img[];
  obraData: Obra[];

  constructor(
      private _location: Location,
      private _fotosService: FotosService,
      private _obraService: ObrasService,
      private activatedRoute: ActivatedRoute) {
    // busqueda estatica, se necesita terminar esta carectistica
    this.activatedRoute.params.subscribe( params => {
      this.obraId = params['obraId'];
      this.checklist = params['checklist'];
    });
    this.fotos = [];
    this.obraData = [];
  }

  ngOnInit() {
    let data = {checklist: this.checklist, obraId: this.obraId};
    this._fotosService.getImgs(data)
      .subscribe(resp => {
        this.fotos = resp;
      });
    this._obraService.getObra(this.obraId)
      .subscribe(arg => this.obraData = arg);
  }

  backClicked() {
    this._location.back();
   }
}
