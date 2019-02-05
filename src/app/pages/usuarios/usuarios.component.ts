import { Component, OnInit } from '@angular/core';
// Modelo
import { Usuario } from '../../models/usuario.model';
// Servicios
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  usuarios: Usuario[];
  conteo: string;

  constructor(private _usuarioService: UsuarioService) {
    this.usuarios = [];
    this.conteo = '';
  }

  ngOnInit() {
    this._usuarioService.getUsers()
      .subscribe( data => {
        this.usuarios = data.usuarios;
        this.conteo = data.conteo;
      });
  }

}
