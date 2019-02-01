import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
// Servicios
import { ContratistaService } from '../../services/contratista.service';
import { Contratista } from '../../models/contratista.model';

@Component({
  selector: 'app-nuevo-contratista',
  templateUrl: './nuevo-contratista.component.html',
  styleUrls: ['./nuevo-contratista.component.css']
})
export class NuevoContratistaComponent implements OnInit {
  title: string;
  formulario: FormGroup;

  constructor(private _contratistaService: ContratistaService) {
    this.title = 'Registrar un nuevo contratista';
  }

  ngOnInit() {
    this.formulario = new FormGroup({
      // FormControl('valorDefault', [Validators.validadoresAngular, Validators.validadoresAngular])
      razon_social: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      rfc: new FormControl(null, [Validators.required]),
      representante: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      estado: new FormControl(null, [Validators.minLength(3)]),
      ciudad: new FormControl(null, Validators.minLength(4)),
      codigo_postal: new FormControl(null),
      colonia: new FormControl(null),
      calle: new FormControl(null),
      numero: new FormControl(null),
      numero_int: new FormControl(null),
      telefono: new FormControl(null),
      contacto: new FormControl(null)
    });
  }

  onSubmit() {
    const DATA_FORM = this.formulario.value;

    const dataContratista = new Contratista(
      DATA_FORM.razon_social,
      DATA_FORM.representante,
      DATA_FORM.estado,
      DATA_FORM.ciudad,
      DATA_FORM.codigo_postal,
      DATA_FORM.colonia,
      DATA_FORM.calle,
      DATA_FORM.numero,
      DATA_FORM.numero_int,
      DATA_FORM.rfc,
      DATA_FORM.telefono,
      DATA_FORM.contacto
    );
    // En formulario.errors tenemos los errores de validacion del frontend
    // console.log(this.formulario);
    this._contratistaService.saveContratista(dataContratista)
                        .subscribe( res => {
                          this.formulario.reset();
                        });
  }

}
