import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public title: string;

  constructor() { 
    this.title = 'Gestion de obras publicas';
  }

  ngOnInit() {
  }
  onSubmit(form){
    form.reset();
    console.log("Evento submit lanzado");
  }
}
