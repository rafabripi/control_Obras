import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  usuario: String;
  constructor() {
    this.usuario = 'Usuario de REST';
  }

  ngOnInit() {
  }

}
