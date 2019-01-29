import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// RUTAS
import {paguesRoutingProviders, PAGUES_ROUTES } from './pages.routing';
// Modulos
import { SharedModule } from '../shared/shared.module';
// Pipes module
import { PipesModule } from '../pipes/pipes.module';
// Componentes
import { HomeComponent } from './home/home.component';
import { PagesComponent } from './pages.component';
import { ListaObrasComponent } from '../pages/lista-obras/lista-obras.component';
import { ObraInfoComponent } from '../pages/obra-info/obra-info.component';
import { AddObraComponent } from '../pages/add-obra/add-obra.component';
import { NuevoUsuarioComponent } from './nuevo-usuario/nuevo-usuario.component';
import { FotosComponent } from '../components/fotos/fotos.component';

// Servicios
import { UsuarioService } from '../services/usuario.service';
import { ObrasService } from '../services/obras.service';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { UsuarioComponent } from './usuario/usuario.component';

@NgModule({
    declarations: [
        PagesComponent,
        HomeComponent,
        ListaObrasComponent,
        ObraInfoComponent,
        AddObraComponent,
        NuevoUsuarioComponent,
        FotosComponent,
        UsuariosComponent,
        UsuarioComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        PAGUES_ROUTES,
        FormsModule,
        ReactiveFormsModule,
        PipesModule
    ],
    exports: [
    ],
    providers: [
        paguesRoutingProviders,
        UsuarioService,
        ObrasService
    ],
})
export class PagesModule {}
