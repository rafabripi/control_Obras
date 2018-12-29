import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ObrasService } from "../../services/obras.service";

@Component({
  selector: 'app-obra-info',
  templateUrl: './obra-info.component.html',
  styleUrls: ['./obra-info.component.css']
})
export class ObraInfoComponent implements OnInit {
  obra: any = {};
  obraValueArray: any[];
  obraKeyArray: any[];

  constructor( private activatedRoute: ActivatedRoute,
                private _obra: ObrasService
    ){ 
    this.activatedRoute.params.subscribe( params =>{
      this.obra = this._obra.getObra(params['id']);
    });
    //para convertir el objeto en un arreglo y poder ser recorrido con in ngFor
    // this.obraValueArray = Object.values(this.obra);
    // this.obraKeyArray = Object.keys(this.obra);
  }

  ngOnInit() {

  }
}

