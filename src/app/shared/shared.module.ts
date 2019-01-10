import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Modulos
import { RouterModule } from '@angular/router';
// componentes
import { ErrorComponent } from './error/error.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    ErrorComponent,
    NavbarComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  // Se necesitan exportar aquellos componentes que se necesiten
  // usar fuera de este modulo, cuales serian???
  exports: [
    ErrorComponent,
    NavbarComponent,
    SidebarComponent
  ]
})
export class SharedModule { }
