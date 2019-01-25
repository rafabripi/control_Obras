import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
// Servicios
import { UsuarioService } from 'src/app/services/usuario.service';
// Modelos
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  title: string;
  formulario: FormGroup;
  usuario: Usuario[];
  usuarioId: string;

  constructor(
      private _usuarioService: UsuarioService,
      private activatedRoute: ActivatedRoute,
      private router: Router
    ) {
    this.title = 'Editar usuario';
    this.usuario = [];
    this.activatedRoute.params.subscribe(params => {
      this.usuarioId = params['id'];
    });
  }

  ngOnInit() {
    // Recuperar usuario desde el servicio
    this._usuarioService.getuser(this.usuarioId)
      .subscribe(data => {
        this.usuario = data;
        // cambiar a relleno con datos del usuario o dejar vacio si no se regresa algo
        this.formulario.setValue({
          user: (!(this.usuario['user'])) ? '' : this.usuario['user'],
          nombre: (!(this.usuario['nombre'])) ? '' : this.usuario['nombre'],
          apellidos: (!(this.usuario['apellidos'])) ? '' : this.usuario['apellidos'],
          pass: (!(this.usuario['pass'])) ? '' : this.usuario['pass'],
          correo: (!(this.usuario['correo'])) ? '' : this.usuario['correo'],
          tipo: (!(this.usuario['tipo'])) ? '' : this.usuario['tipo'],
          estado: (!(this.usuario['estado'])) ? '' : this.usuario['estado'],
        });
      });
    // Validacion del formulario
    this.formulario = new FormGroup({
      // FormControl('valorDefault', [Validators.validadoresAngular, Validators.validadoresAngular])
      user: new FormControl({value: null, disabled: true}, [ Validators.minLength(3)]),
      nombre: new FormControl(null, [Validators.minLength(3)]),
      apellidos: new FormControl(null, [Validators.minLength(3)]),
      pass: new FormControl(null, [ Validators.minLength(4)]),
      correo: new FormControl(null, [Validators.email]),
      tipo: new FormControl(null),
      estado: new FormControl(null)
    });
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

    this._usuarioService.updateUser(this.usuarioId, dataUsuario)
                        .subscribe( res => {
                          this.router.navigate(['/usuariosList'])
                        });
  }
}
