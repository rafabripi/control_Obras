import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
// Servicios
import { ObrasService } from '../../services/obras.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ContratistaService } from '../../services/contratista.service';
// Modelos
import { Obra } from '../../models/obra.model';
import { Usuario } from '../../models/usuario.model';
import { Contratista } from '../../models/contratista.model';

@Component({
  selector: 'app-add-obra',
  templateUrl: './add-obra.component.html',
  styleUrls: ['./add-obra.component.css']
})
export class AddObraComponent implements OnInit {
  public title: String;
  public formulario: FormGroup;
  supervisores: Usuario[];
  contratistas: Contratista[];

  constructor(
    private _obraService: ObrasService,
    private _usuarioService: UsuarioService,
    private _contratistaService: ContratistaService) {
    this.title = 'Crear nuevo proyecto de obra';
    this.supervisores = []; 
    this.contratistas = []; 

    this.formulario = new FormGroup({
      'clave_municipal': new FormControl('', Validators.required),
      'nombre_obra': new FormControl('', Validators.required),
      'localidad': new FormControl('', Validators.required),
      'meta': new FormControl(),
      'beneficiarios_directos': new FormControl(),
      'direccion_responsable': new FormControl(),
      'numero_contrato': new FormControl(),
      'fecha_contrato': new FormControl(),
      'supervisor': new FormControl(),
      'tipo_ejecucion': new FormControl('', Validators.required),
      'programa': new FormControl(),
      'inversion_aprobada': new FormControl(),
      'contratista': new FormControl(),
      'estado': new FormControl('', Validators.required),
      'nota': new FormControl()
    });
  }

  ngOnInit() {
    this._usuarioService.getSupervisores()
      .subscribe( resp => this.supervisores = resp);
    this._contratistaService.getContratistas()
      .subscribe( resp => this.contratistas = resp);
    // relleno para pruebas retirar estas lineas al terminar
    this.formulario.setValue({
      clave_municipal: 'LP-DUOP-01/19',
      nombre_obra: 'OBRA DE PRUEBA',
      localidad: 'LA PIEDAD',
      tipo_ejecucion: 'CONTRATO',
      estado: 'Aprovada pero sin inciar',
      meta: 'ALGUNA',
      beneficiarios_directos: 5,
      direccion_responsable: 'Desarrollo Social',
      numero_contrato: 'AD-COPFII01-01/19',
      fecha_contrato: '2018-01-28',
      supervisor: 'ALGUNO',
      programa: 'FONDO III',
      inversion_aprobada: 5,
      contratista: 'ALGUNO',
      nota: 'Normal'
    });
  }

  guardarObra() {
    let data_form = this.formulario.value;
    let dataObra = new Obra(
      data_form.clave_municipal,
      data_form.nombre_obra,
      data_form.localidad,
      data_form.tipo_ejecucion,
      data_form.estado,
      data_form.meta,
      data_form.beneficiarios_directos,
      data_form.direccion_responsable,
      data_form.numero_contrato,
      data_form.fecha_contrato,
      data_form.supervisor,
      data_form.programa,
      data_form.inversion_aprobada,
      data_form.contratista,
      data_form.nota
    );
    this._obraService.saveObra(dataObra)
      .subscribe( resp => this.formulario.reset());
  }
}
