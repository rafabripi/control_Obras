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

  constructor(private _obrasService: ObrasService) {
    this.obras = [];
  }

  ngOnInit() {
    this._obrasService.getObras()
      .subscribe(data => {
      this.obras = data;
    }, (err) => {
      console.error(err, 'Error');
    });
  }
}
