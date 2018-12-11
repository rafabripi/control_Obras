import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { appRoutingProviders, routing } from "./app.routing";

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ListaObrasComponent } from './components/lista-obras/lista-obras.component';
import { ObraInfoComponent } from './components/obra-info/obra-info.component';
import { ErrorComponent } from './components/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListaObrasComponent,
    ObraInfoComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
