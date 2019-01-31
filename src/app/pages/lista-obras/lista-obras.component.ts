import { Component, OnInit } from '@angular/core';
import { ObrasService } from '../../services/obras.service';
import { Obra } from 'src/app/models/obra.model';

@Component({
  selector: 'app-lista-obras',
  templateUrl: './lista-obras.component.html',
  styleUrls: ['./lista-obras.component.css']
})
export class ListaObrasComponent implements OnInit {
  obras: Obra[];
  cargando: boolean;

  constructor(private _obrasService: ObrasService) {
    this.obras = [];
    this.cargando = true;
  }

  ngOnInit() {
    this.cargarObras();
  }

  cargarObras () {
    this._obrasService.getObras()
      .subscribe(data => {
        this.cargando = false;
        this.obras = data;
    }, (err) => {
      console.error(err, 'Error');
    });
  }

  buscarObra(termino: string) {
    if (termino.length >= 2) {
      this._obrasService.buscarObra(termino)
          .subscribe( data => this.obras = data);
    } else {
      this.cargarObras();
    }
  }
}
