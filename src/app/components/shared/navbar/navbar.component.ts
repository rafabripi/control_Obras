import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../../services/navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  usuario: String;
  constructor( public _navbarService: NavbarService ) {
    this.usuario = 'Usuario de REST';
  }

  ngOnInit() {
  }

}
