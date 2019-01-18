import { NgModule } from '@angular/core';
// pipes
import { ImagenPipe } from './imagen.pipe';

@NgModule({
  declarations: [
    ImagenPipe
  ],
  exports: [
    ImagenPipe
  ],
  imports: [
  ]
})
export class PipesModule { }
