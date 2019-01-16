import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import swal from 'sweetalert';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styleUrls: ['./nuevo-usuario.component.css']
})
export class NuevoUsuarioComponent implements OnInit {
  title: string;
  formulario: FormGroup;

  constructor(private _usuarioService: UsuarioService) {
    this.title = 'Registrar un nuevo usuario';
  }

  ngOnInit() {
    this.formulario = new FormGroup({
      // FormControl('valorDefault', [Validators.validadoresAngular, Validators.validadoresAngular])
      user: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      nombre: new FormControl(null, [Validators.minLength(3)]),
      apellidos: new FormControl(null, [Validators.minLength(3)]),
      pass: new FormControl(null, [Validators.required, Validators.minLength(4)]),
      correo: new FormControl(null, [Validators.email]),
      tipo: new FormControl(null, [Validators.required])
    });

    // relleno para pruebas retirar estas lineas al terminar
    this.formulario.setValue({
      user: 'fulano1',
      nombre: 'Fulano',
      apellidos: 'deTal',
      pass: '123456',
      correo: 'some@test.com',
      tipo: 'Normal'
    });
    // ------------------------------------------------------
  }

  onSubmit() {
    const DATA_FORM = this.formulario.value;

    const dataUsuario = new Usuario(
      DATA_FORM.user,
      DATA_FORM.pass,
      DATA_FORM.tipo,
      DATA_FORM.nombre,
      DATA_FORM.apellidos,
      DATA_FORM.correo,
      DATA_FORM.estado
    );
    // En formulario.errors tenemos los errores de validacion del frontend
    // console.log(this.formulario);
    this._usuarioService.saveUser(dataUsuario)
                        .subscribe( res => {
                          
                          this.formulario.reset();
                        });
  }
}
