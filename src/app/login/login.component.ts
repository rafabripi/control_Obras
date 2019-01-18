import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { UsuarioService } from '../services/usuario.service';
import { Usuario } from '../models/usuario.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public title: string;
  formLogin: FormGroup;
  usuarioSave: string;
  recordarSave: boolean;

  constructor(private _usuarioService: UsuarioService, private router: Router) {
    this.title = 'Gestion de obras publicas';
  }

  ngOnInit() {
    this.usuarioSave = localStorage.getItem('usuarioSave') || '';
    if (this.usuarioSave) {
      this.recordarSave = true;
    }
    this.formLogin = new FormGroup({
      usuario: new FormControl(this.usuarioSave, Validators.required),
      pass: new FormControl(null, Validators.required),
      recordar: new FormControl(this.recordarSave)
    });
  }

  login(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const data = form.value;
    const usuario = new Usuario(data.usuario, data.pass);
    this._usuarioService.login(usuario, data.recordar)
                        .subscribe( response => this.router.navigate(['/home']));
  }
}
