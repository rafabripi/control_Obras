import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// Modelo
import { Obra } from 'src/app/models/obra.model';
// Servicios
import { ObrasService } from '../../services/obras.service';
import { AvanceService } from 'src/app/services/avance.service';

@Component({
  selector: 'app-obra-info',
  templateUrl: './obra-info.component.html',
  styleUrls: ['./obra-info.component.css']
})
export class ObraInfoComponent implements OnInit {
  idObra: any;
  obra: Obra[];
  avance: any[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private _obrasService: ObrasService,
    private _avanceService: AvanceService
  ) {
      this.obra = [];
      this.avance = [];
      this.activatedRoute.params.subscribe( params => {
      this.idObra = params['id'];
    });
  }

  ngOnInit() {
    this._obrasService.getObra(this.idObra)
      .subscribe(data => this.obra = data);

    this._avanceService.getAvance(this.idObra)
        .subscribe(arg => this.avance = arg);
  }
}
