import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ObrasService } from '../../services/obras.service';
import { Obra } from 'src/app/models/obra.model';

@Component({
  selector: 'app-obras-supervisor',
  templateUrl: './obras-supervisor.component.html',
  styleUrls: ['./obras-supervisor.component.css']
})
export class ObrasSupervisorComponent implements OnInit {
  obras: Obra[];
  cargando: boolean;
  supervisor: string;

  constructor(private _obrasService: ObrasService, private activatedRoute: ActivatedRoute) {
    this.obras = [];
    this.cargando = true;
    this.activatedRoute.params.subscribe( params => {
      this.supervisor = params['supervisor'];
    });
  }

  ngOnInit() {
    this.cargarObras();
  }

  cargarObras () {
    this._obrasService.getObrasSupervisor(this.supervisor)
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
