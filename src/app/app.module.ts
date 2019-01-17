import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// RUTAS
import { appRoutingProviders, routing } from './app.routing';

// SERVICIOS
import { ObrasService } from './services/obras.service';

// MODULOS
import { PagesModule } from './pages/pages.module';

// COMPONENTES
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
// Guards
import { LoginGuard } from './services/guards/login.guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
    PagesModule
  ],
  providers: [
    appRoutingProviders,
    ObrasService,
    LoginGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
