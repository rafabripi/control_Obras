import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// Servicios
import { ObrasService, Obra } from '../../services/obras.service';
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

    this._avanceService.getAvance('5c1d034950b2eb1680fb76e8')
        .subscribe(arg => this.avance = arg);
  }
}
