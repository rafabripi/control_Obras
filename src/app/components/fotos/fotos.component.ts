import { Component, OnInit } from '@angular/core';
import { FotosService } from '../../services/fotos.service';
import { Img } from '../../models/img.model';
import { URL_SERVICES } from '../../config/config';

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

  constructor(private _fotosService: FotosService) {
    this.checklist = 'estimacion-2';
    this.obraId = '5c1c2be74be5a91a30e25d72';
    this.fotos = [];
  }

  ngOnInit() {
    let data = {checklist: this.checklist, obraId: this.obraId};
    this._fotosService.getImgs(data)
      .subscribe(resp => {
        this.fotos = resp;
        this.fotoItem = this.fotos[0]['nombre'];
        // console.log(fotoItem, 'hallooooooooooooooooooooooooooooooooooooooooooooooo');
        // hasta aqui el arreglo de fotos se guarda en this.fotos
        // en las siguientes lineas se hara un prueba de imprimir una foto
      });

      // this._fotosService.getImg(fotoItem)
      // .subscribe(respFoto => {
      //     this.foto = respFoto;
      //   });

  }

}
