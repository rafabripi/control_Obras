// Imports de router
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// ####################################################
// ###################COMONENTES#######################
// Imports de componentes
import { HomeComponent } from './home/home.component';
import { PagesComponent } from './pages.component';
// OBRAS
import { ListaObrasComponent } from '../pages/lista-obras/lista-obras.component';
import { ObraInfoComponent } from '../pages/obra-info/obra-info.component';
import { AddObraComponent } from '../pages/add-obra/add-obra.component';
// USUARIOS
import { UsuariosComponent } from './usuarios/usuarios.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { NuevoUsuarioComponent } from './nuevo-usuario/nuevo-usuario.component';
// CONTRATISTAS
import { ContratistasComponent } from './contratistas/contratistas.component';
import { ContratistaComponent } from './contratista/contratista.component';
import { NuevoContratistaComponent } from './nuevo-contratista/nuevo-contratista.component';
// ARCHIVOS
import { ArchivosObraComponent } from './archivos-obra/archivos-obra.component';
// FOTOS
import { FotosComponent } from '../components/fotos/fotos.component';
// SUPERVISORES AVANCE
import { ObrasSupervisorComponent } from './obras-supervisor/obras-supervisor.component';
import { NuevoAvanceComponent } from './nuevo-avance/nuevo-avance.component';
// ####################################################
// ####################################################
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
        { path: 'usuariosList', component: UsuariosComponent},
        { path: 'usuarioInfo/:id', component: UsuarioComponent },
        { path: 'nuevoUsuario', component: NuevoUsuarioComponent},
        { path: 'contratistasList', component: ContratistasComponent},
        { path: 'contratistaInfo/:id', component: ContratistaComponent},
        { path: 'nuevoContratista', component: NuevoContratistaComponent},
        { path: 'obrasSupervisor/:supervisor', component: ObrasSupervisorComponent},
        { path: 'nuevoAvance', component: NuevoAvanceComponent},
        { path: 'archivos/:obraId', component: ArchivosObraComponent },
        { path: 'fotos/:checklist/:obraId', component: FotosComponent},
        { path: '', pathMatch: 'full', redirectTo: '/home'}
        ]
    }
];

export const paguesRoutingProviders: any[] = [];
export const PAGUES_ROUTES: ModuleWithProviders = RouterModule.forChild(pagesRoutes);
