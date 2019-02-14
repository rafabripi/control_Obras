import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-archivos-obra',
  templateUrl: './archivos-obra.component.html',
  styleUrls: ['./archivos-obra.component.css']
})
export class ArchivosObraComponent implements OnInit {
  obraId: any;

  constructor(private _location: Location, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe( params => {
      this.obraId = params['obraId'];
    });
  }

  ngOnInit() {
  }

  backClicked() {
    this._location.back();
  }
}
