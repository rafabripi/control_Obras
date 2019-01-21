// Imports de router
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Imports de componentes
import { HomeComponent } from './home/home.component';
import { PagesComponent } from './pages.component';
import { ListaObrasComponent } from '../pages/lista-obras/lista-obras.component';
import { ObraInfoComponent } from '../pages/obra-info/obra-info.component';
import { AddObraComponent } from '../pages/add-obra/add-obra.component';
import { NuevoUsuarioComponent } from './nuevo-usuario/nuevo-usuario.component';
// Guards
import { LoginGuard } from '../services/guards/login.guard';

const pagesRoutes: Routes = [
    {path: '', component: PagesComponent,
    canActivate: [LoginGuard],
    children: [
        { path: 'home', component: HomeComponent },
        { path: 'obrasList', component: ListaObrasComponent},
        { path: 'obrasInfo/:id', component: ObraInfoComponent},
        { path: 'addObra', component: AddObraComponent},
        { path: 'nuevoUsuario', component: NuevoUsuarioComponent},
        { path: '', pathMatch: 'full', redirectTo: '/home'}
        ]
    }
];

export const paguesRoutingProviders: any[] = [];
export const PAGUES_ROUTES: ModuleWithProviders = RouterModule.forChild(pagesRoutes);
