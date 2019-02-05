import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
// Servicios
import { ContratistaService } from '../../services/contratista.service';
// Modelos
import { Contratista } from '../../models/contratista.model';

@Component({
  selector: 'app-contratista',
  templateUrl: './contratista.component.html',
  styleUrls: ['./contratista.component.css']
})
export class ContratistaComponent implements OnInit {
  title: string;
  formulario: FormGroup;
  contratista: Contratista[];
  contratistaId: string;

  constructor(
    private _contratistaService: ContratistaService,
    private activatedRoute: ActivatedRoute,
    private router: Router 
  ) {
    this.title = 'Editar contratista';
      this.contratista = [];
      this.activatedRoute.params.subscribe(params => {
        this.contratistaId = params['id'];
      });
  }

  ngOnInit() {
    // Rellenar formulario con los datos actuales
    this._contratistaService.getContratista(this.contratistaId)
      .subscribe(data => {
        this.contratista = data;
        this.formulario.setValue({
          razon_social: (!(this.contratista['razon_social'])) ? '' : this.contratista['razon_social'],
          rfc: (!(this.contratista['rfc'])) ? '' : this.contratista['rfc'],
          representante: (!(this.contratista['representante'])) ? '' : this.contratista['representante'],
          estado: (!(this.contratista['estado'])) ? '' : this.contratista['estado'],
          ciudad: (!(this.contratista['ciudad'])) ? '' : this.contratista['ciudad'],
          codigo_postal: (!(this.contratista['codigo_postal'])) ? '' : this.contratista['codigo_postal'],
          colonia: (!(this.contratista['colonia'])) ? '' : this.contratista['colonia'],
          calle: (!(this.contratista['calle'])) ? '' : this.contratista['calle'],
          numero: (!(this.contratista['numero'])) ? '' : this.contratista['numero'],
          numero_int: (!(this.contratista['numero_int'])) ? '' : this.contratista['numero_int'],
          telefono: (!(this.contratista['telefono'])) ? '' : this.contratista['telefono'],
          contacto: (!(this.contratista['contacto'])) ? '' : this.contratista['contacto']
        });
      });
      // Probar hacer el set de valores anterior en el primer parametro
      
    // Validaciones de formulario
    this.formulario = new FormGroup({
      razon_social: new FormControl(null, [Validators.required] ),
      rfc: new FormControl(null, [Validators.required, Validators.minLength(12), Validators.maxLength(13)]),
      representante: new FormControl(null, [Validators.required]),
      estado: new FormControl(null),
      ciudad: new FormControl(null),
      codigo_postal: new FormControl(null, Validators.minLength(4)),
      colonia: new FormControl(null),
      calle: new FormControl(null),
      numero: new FormControl(null),
      numero_int: new FormControl(null),
      telefono: new FormControl(null),
      contacto: new FormControl(null, Validators.email)
    });
  }

  onSubmit() {
    const DATA_FORM = this.formulario.value;

    const dataContratista = new Contratista(
      DATA_FORM.razon_social,
      DATA_FORM.rfc,
      DATA_FORM.representante,
      DATA_FORM.estado,
      DATA_FORM.ciudad,
      DATA_FORM.codigo_postal,
      DATA_FORM.colonia,
      DATA_FORM.calle,
      DATA_FORM.numero,
      DATA_FORM.numero_int,
      DATA_FORM.telefono,
      DATA_FORM.contacto
    );

    this._contratistaService.updateContratista(this.contratistaId, dataContratista)
                        .subscribe( res => {
                          this.router.navigate(['/contratistasList'])
                        });
  }

}
