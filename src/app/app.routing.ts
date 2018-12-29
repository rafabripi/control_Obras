//imports para el router
import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
//imports para componentes creados
import { LoginComponent } from "./components/login/login.component";
import { HomeComponent } from "./components/home/home.component";
import { ListaObrasComponent } from './components/lista-obras/lista-obras.component';
import { ObraInfoComponent } from './components/obra-info/obra-info.component';
import { AddObraComponent } from "./components/add-obra/add-obra.component";
import { ErrorComponent } from './components/error/error.component';


//array con las rutas
const APP_ROUTES: Routes = [
    {path: '', component: LoginComponent},
    {path: 'home', component: HomeComponent},
    {path: 'obrasList', component: ListaObrasComponent},
    {path: 'obrasInfo/:id', component: ObraInfoComponent},
    {path: 'addObra', component: AddObraComponent},
    {path: '**', component: ErrorComponent}
];

//exportar modulo de routing
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);