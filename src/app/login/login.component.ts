import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { UsuarioService } from '../services/usuario.service';
import { Usuario } from '../models/usuario.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public title: string;
  formLogin: FormGroup;

  constructor(private _usuarioService: UsuarioService) {
    this.title = 'Gestion de obras publicas';
  }

  ngOnInit() {
    this.formLogin = new FormGroup({
      usuario: new FormControl(null, Validators.required),
      pass: new FormControl(null, Validators.required),
      recordar: new FormControl(false)
    });
  }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }
    let data = form.value;
    let usuario = new Usuario(data.usuario, data.pass);
    console.log(form.valid);
    console.log(form.value);
    this._usuarioService.login(usuario, data.recordar)
                        .subscribe();
    
    form.reset();
  }
}
