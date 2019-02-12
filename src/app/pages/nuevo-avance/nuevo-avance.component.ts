import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
// Modelos
import { Avance } from '../../models/avance.model';
import { Img } from '../../models/img.model';
// Servicios
import { AvanceService } from 'src/app/services/avance.service';
import { FotosService } from '../../services/fotos.service';

@Component({
  selector: 'app-nuevo-avance',
  templateUrl: './nuevo-avance.component.html',
  styleUrls: ['./nuevo-avance.component.css']
})
export class NuevoAvanceComponent implements OnInit {
  avance: Avance[];
  formularioAvance: FormGroup;
  idObra: any;
  userId: string;
  fotos: any;
  avanceId: string;

  @Output() cambioAvance: EventEmitter<number> = new EventEmitter();

  constructor(
    private _avanceService: AvanceService,
    private _fotoService: FotosService,
    private activatedRoute: ActivatedRoute
  ) {
    this.avance = [];
    this.userId = JSON.parse( localStorage.getItem('usuario'))._id;
    this.activatedRoute.params.subscribe( params => {
      this.idObra = params['id'];
    });
  }

  ngOnInit() {
    this.formularioAvance = new FormGroup({
      // FormControl('valorDefault', [Validators.validadoresAngular, Validators.validadoresAngular])
      avance: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      comentarios: new FormControl(null),
      fotos: new FormControl(null, Validators.required)
    });
  }

  onArchivoSeleccionado(event) {
    this.fotos = event.target.files;
  }

  onSubmit() {
    const DATA_FORM = this.formularioAvance.value;
    const dataAvance = new Avance(
      DATA_FORM.avance + '%',
      this.idObra,
      this.userId,
      DATA_FORM.comentarios
    );

    this._avanceService.saveAvance(dataAvance)
      .subscribe( respAvance => {
        this.avanceId = respAvance._id;
        this.formularioAvance.reset();
        this.cambioAvance.emit(respAvance.avance);
      });

      let dataFotos = new Img(
        this.idObra,
        this.avanceId,
        'avance'
      );

    for (const key in this.fotos) {
      if (this.fotos.hasOwnProperty(key)) {
        const element = this.fotos[key];
        this._fotoService.loadImg(element, dataFotos)
          .subscribe( respFotos => {});
      }
    }
  }
}
