import { Component, OnInit } from '@angular/core';
import { ObrasService } from "../../services/obras.service";

@Component({
  selector: 'app-obras',
  templateUrl: './obras.component.html',
  styleUrls: ['./obras.component.css']
})
export class ObrasComponent implements OnInit {

  constructor( private _obrasService: ObrasService) { }

  ngOnInit() {
  }

}
