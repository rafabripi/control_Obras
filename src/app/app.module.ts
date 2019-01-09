import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// RUTAS
import { appRoutingProviders, routing } from './app.routing';

// SERVICIOS
import { ObrasService } from './services/obras.service';

// COMPONENTES
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ListaObrasComponent } from './components/lista-obras/lista-obras.component';
import { ObraInfoComponent } from './components/obra-info/obra-info.component';
import { ErrorComponent } from './components/error/error.component';
import { AddObraComponent } from './components/add-obra/add-obra.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ObrasComponent } from './components/obras/obras.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListaObrasComponent,
    ObraInfoComponent,
    ErrorComponent,
    AddObraComponent,
    NavbarComponent,
    HomeComponent,
    ObrasComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    appRoutingProviders,
    ObrasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
