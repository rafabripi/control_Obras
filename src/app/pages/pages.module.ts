import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// RUTAS
import {paguesRoutingProviders, PAGUES_ROUTES } from './pages.routing';
// Modulos
import { SharedModule } from '../shared/shared.module';
// Componentes
import { HomeComponent } from './home/home.component';
import { PagesComponent } from './pages.component';
import { ListaObrasComponent } from '../pages/lista-obras/lista-obras.component';
import { ObraInfoComponent } from '../pages/obra-info/obra-info.component';
import { AddObraComponent } from '../pages/add-obra/add-obra.component';

@NgModule({
    declarations: [
        PagesComponent,
        HomeComponent,
        ListaObrasComponent,
        ObraInfoComponent,
        AddObraComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        PAGUES_ROUTES,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        
    ],
    providers: [
        paguesRoutingProviders
    ],
})
export class pagesModule {}
