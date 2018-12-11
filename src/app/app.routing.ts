//imports para el router
import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
//imports para componentes creados
import { LoginComponent } from "./components/login/login.component";
import { ListaObrasComponent } from './components/lista-obras/lista-obras.component';
import { ObraInfoComponent } from './components/obra-info/obra-info.component';
import { ErrorComponent } from './components/error/error.component';


//array con las rutas
const appRoutes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'obrasList', component: ListaObrasComponent},
    {path: 'obrasInfo', component: ObraInfoComponent},
    {path: '**', component: ErrorComponent}
];

//exportar modulo de routing
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);