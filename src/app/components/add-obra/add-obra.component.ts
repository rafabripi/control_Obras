import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ObrasService, Obra } from '../../services/obras.service';

@Component({
  selector: 'app-add-obra',
  templateUrl: './add-obra.component.html',
  styleUrls: ['./add-obra.component.css']
})
export class AddObraComponent implements OnInit {
  public title: String;
  public obraToSave: any;

  constructor(private _obraService: ObrasService) {
    this.title = 'Crear nuevo proyecto de obra';
  }

  ngOnInit() {
  }

  onSubmit(form) {
    this._obraService.saveObra(this.obraToSave);
  }
S
  guardar(forma){
    console.log('metodo guardar', forma);
    
  }

}
