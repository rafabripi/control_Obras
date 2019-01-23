import { Pipe, PipeTransform } from '@angular/core';
import { URL_SERVICES } from '../config/config';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(nombre: string): any {
    let url = URL_SERVICES + `/img/getImg/?nombre=${nombre}`;
    if (!nombre) {
      return url = 'retornar_url_no_valida_para_regresar_img_default';
    }
    return url;
  }

}
