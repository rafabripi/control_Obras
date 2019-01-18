import { Component, OnInit } from '@angular/core';
// Servicios
import { NavbarService } from '../../services/navbar.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  usuario: String;
  constructor( public _navbarService: NavbarService, public _usuarioService: UsuarioService ) {
    this.usuario = 'Usuario de REST';
  }

  ngOnInit() {
  }

}
