import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';
// Modelos
import { Obra } from 'src/app/models/obra.model';
import { Avance } from '../../models/avance.model';
// Servicios
import { ObrasService } from '../../services/obras.service';
import { AvanceService } from 'src/app/services/avance.service';
import { FotosService } from '../../services/fotos.service';
import { Img } from '../../models/img.model';

@Component({
  selector: 'app-obra-info',
  templateUrl: './obra-info.component.html',
  styleUrls: ['./obra-info.component.css']
})
export class ObraInfoComponent implements OnInit {
  idObra: any;
  obra: Obra[];
  avance: Avance[];
  UserType: string;
  userId: string;
  formularioAvance: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private _obrasService: ObrasService,
    private _avanceService: AvanceService,
    private _fotoService: FotosService
  ) {
      this.obra = [];
      this.avance = [];
      // Para mostrar elemntos dependiendo del tipo de usuario
      // usamos la propiedad UserType y le asignamos el tipo recogido del localStorage
      // ahora en el html se muestra el boton "hola" solo a Desarrollador
      this.UserType = JSON.parse( localStorage.getItem('usuario')).tipo;
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

    this._obrasService.getObra(this.idObra)
      .subscribe(data => this.obra = data);

    this.getAvances();
  }

  onSubmit() {
    const DATA_FORM = this.formularioAvance.value;
    console.log(DATA_FORM);
    const dataAvance = new Avance(
      DATA_FORM.avance + '%',
      this.idObra,
      this.userId,
      DATA_FORM.comentarios
    );

    const dataFotos = new Img(
      DATA_FORM.fotos,
      this.idObra
    );

    this._avanceService.saveAvance(dataAvance)
      .subscribe( respAvance => {
        this.formularioAvance.reset();
        this.getAvances();
        // document.getElementById('AvanceModal').style.visibility = 'hidden';
      });

      // this._fotoService.loadImg()
  }

  getAvances() {
    this._avanceService.getAvance(this.idObra)
        .subscribe(arg => {
          ( arg ) ? this.avance = arg : this.avance['avance'] = 0;
        });
  }
}
