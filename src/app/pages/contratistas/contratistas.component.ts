import { Component, OnInit } from '@angular/core';
// Modelo
import { Contratista } from '../../models/contratista.model';
// Servicio
import { ContratistaService } from '../../services/contratista.service';

@Component({
  selector: 'app-contratistas',
  templateUrl: './contratistas.component.html',
  styleUrls: ['./contratistas.component.css']
})
export class ContratistasComponent implements OnInit {
  contratistas: Contratista[];
  conteo: string;

  constructor(private _contratistasService: ContratistaService) {
    this.contratistas = [];
    this.conteo = '';
  }

  ngOnInit() {
    this._contratistasService.getContratistas()
      .subscribe( data => {
        this.contratistas = data.contratistas;
        this.conteo = data.conteo;
      });
  }

}
