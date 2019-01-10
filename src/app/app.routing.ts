// imports para el router
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// imports para componentes creados
import { PagesComponent } from './pages/pages.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './shared/error/error.component';

// array con las rutas
const APP_ROUTES: Routes = [
    {path: '', component: PagesComponent},
    // para redireccionar {path: '', pathMatch: 'full', redirectTo: 'login'},
    {path: 'login', component: LoginComponent},
    {path: '**', component: ErrorComponent}
];

// exportar modulo de routing
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES, {useHash: true});
