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

  constructor(private _fotosService: FotosService) {
    this.checklist = 'anticipo';
    this.obraId = '5c1c2be74be5a91a30e25d72';
  }

  ngOnInit() {
    let data = {checklist: this.checklist, obraId: this.obraId};
    this._fotosService.getImgs(data)
      .subscribe(resp => {
        this.fotos = resp[0]['nombre'];
        let url = (URL_SERVICES + '/img/getImgs/' + this.fotos);
        console.log(url);
      });
  }

}
