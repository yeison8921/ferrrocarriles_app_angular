import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MisionVisionComponent } from './mision-vision/mision-vision.component';
import { FuncionesComponent } from './funciones/funciones.component';
import { PoliticasigComponent } from './politicasig/politicasig.component';
import { TalentoHumanoComponent } from './talento-humano/talento-humano.component';
import { GestionDocumentalComponent } from './gestion-documental/gestion-documental.component';

const routes: Routes = [
  {
    path: 'mision-y-vision/37',
    title: 'Misión y visión',
    component: MisionVisionComponent,
  },
  {
    path: 'funciones/38',
    title: 'Funciones',
    component: FuncionesComponent,
  },
  {
    path: 'politica-del-sistema-integrado-de-gestion/40',
    title: 'Politica SIG',
    component: PoliticasigComponent,
  },
  {
    path: 'talento-humano/46',
    title: 'Talento humano',
    component: TalentoHumanoComponent,
  },
  {
    path: 'gestion-documental/51',
    title: 'Gestión documental',
    component: GestionDocumentalComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EntidadModule {}
