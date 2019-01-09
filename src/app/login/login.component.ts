import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public title: string;

  constructor(private router: Router) {
    this.title = 'Gestion de obras publicas';
  }

  ngOnInit() {
  }

  onSubmit(form) {
    form.reset();
    this.router.navigate(['/home']);
  }
}