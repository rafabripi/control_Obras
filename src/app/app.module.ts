import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


// RUTAS
import { appRoutingProviders, routing } from './app.routing';

// SERVICIOS
import { ObrasService } from './services/obras.service';

// MODULOS
import { pagesModule } from './pages/pages.module';

// COMPONENTES
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ObrasComponent } from './components/obras/obras.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ObrasComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    pagesModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
  ],
  providers: [
    appRoutingProviders,
    ObrasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
