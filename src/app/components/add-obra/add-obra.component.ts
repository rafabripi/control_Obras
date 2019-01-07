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
  public formulario: FormGroup;

  constructor() {
    this.title = 'Crear nuevo proyecto de obra';
    this.formulario = new FormGroup({
      'clave_municipal': new FormControl("", Validators.required),
      'nombre_obra': new FormControl("", Validators.required),
      'localidad': new FormControl("", Validators.required),
      'meta': new FormControl(),
      'beneficiarios_directos': new FormControl(),
      'direccion_responsable': new FormControl(),
      'numero_contrato': new FormControl(),
      'fecha_contrato': new FormControl(),
      'supervisor': new FormControl(),
      'tipo_ejecucion': new FormControl("", Validators.required),
      'programa': new FormControl(),
      'inversion_aprobada': new FormControl(),
      'contratista': new FormControl(),
      'estado': new FormControl("", Validators.required),
      'nota': new FormControl()
    });
  }

  ngOnInit() {
  }

  guardarObra() {
    console.log(this.formulario);
  }
}
