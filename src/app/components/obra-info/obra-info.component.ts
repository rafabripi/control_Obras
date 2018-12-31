import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ObrasService, Obra } from "../../services/obras.service";

@Component({
  selector: 'app-obra-info',
  templateUrl: './obra-info.component.html',
  styleUrls: ['./obra-info.component.css']
})
export class ObraInfoComponent implements OnInit {
  obra: any;
  obras: Obra;
  idObra: any;

  constructor(private activatedRoute: ActivatedRoute,
              private _obrasService: ObrasService
    ){      
      this.activatedRoute.params.subscribe( params =>{
      //this.obra = this._obrasService.getObra(params['id']);
      this.idObra = params['id'];      
    });
  }

  ngOnInit() {
    this.getObra();  
  } 

  getObra(){
    let obs = this._obrasService.getObra();
    //en la sig linea se general el error
    obs.subscribe( (data)=>{
        this.obras = data['obras'];
        this.obra = this.obras[this.idObra];
      },(err)=>{
        console.log(err, 'este es el error');
      },
      ()=>{console.log('Done');
      }
    );
  }
}