import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-obra',
  templateUrl: './add-obra.component.html',
  styleUrls: ['./add-obra.component.css']
})
export class AddObraComponent implements OnInit {
  public title: String;

  constructor() {
    this.title = 'Crar nuevo proyecto de obra';
  }

  ngOnInit() {
  }

}
