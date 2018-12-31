import { Component, OnInit } from '@angular/core';
import { ObrasService, Obra } from '../../services/obras.service';

@Component({
  selector: 'app-lista-obras',
  templateUrl: './lista-obras.component.html',
  styleUrls: ['./lista-obras.component.css']
})
export class ListaObrasComponent implements OnInit {
  obras: Obra[];

  constructor(private _obrasService: ObrasService){
    this.obras = [];
  }

  ngOnInit() {
    this._obrasService.getObras()
      .subscribe( (data: any)=>{
      this.obras = data.obras;
    },(err)=>{
      console.error(err, 'Error');
    });
  }
}
