import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ObrasService, Obra } from '../../services/obras.service';

@Component({
  selector: 'app-obra-info',
  templateUrl: './obra-info.component.html',
  styleUrls: ['./obra-info.component.css']
})
export class ObraInfoComponent implements OnInit {
  obra: Obra[];
  idObra: any;

  constructor(private activatedRoute: ActivatedRoute, private _obrasService: ObrasService) {
      this.obra = [];
      this.activatedRoute.params.subscribe( params => {
        this.idObra = params['id'];
    });
  }

  ngOnInit() {
    this._obrasService.getObra(this.idObra)
      .subscribe(data => this.obra = data);
  }
}
