import { Component, OnInit } from '@angular/core';
import { FotosService } from '../../services/fotos.service';
import { Img } from '../../models/img.model';
import { ObrasService } from '../../services/obras.service';
import { Obra } from '../../models/obra.model';

@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
  styleUrls: ['./fotos.component.css']
})
export class FotosComponent implements OnInit {
  checklist: string;
  obraId: any;
  fotos: Img[];
  fotoItem: any;
  obraData: Obra[];

  constructor(private _fotosService: FotosService, private _obraService: ObrasService) {
    // busqueda estatica, se necesita terminar esta carectistica 
    this.checklist = 'anticipo';
    this.obraId = '5c1c2be74be5a91a30e25d72';
    this.fotos = [];
    this.obraData = [];
  }

  ngOnInit() {
    let data = {checklist: this.checklist, obraId: this.obraId};
    this._fotosService.getImgs(data)
      .subscribe(resp => {
        this.fotos = resp;
        this.fotoItem = this.fotos[0]['nombre'];
      });
    this._obraService.getObra(this.obraId)
      .subscribe(arg => this.obraData = arg);
  }

}
