import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MisionVisionComponent } from './mision-vision/mision-vision.component';
import { FuncionesComponent } from './funciones/funciones.component';
import { PoliticasigComponent } from './politicasig/politicasig.component';
import { TalentoHumanoComponent } from './talento-humano/talento-humano.component';
import { GestionDocumentalComponent } from './gestion-documental/gestion-documental.component';
import { TransparenciaComponent } from './transparencia/transparencia.component';

const routes: Routes = [
  {
    path: 'transparencia-y-acceso-a-la-informacion-publica/163',
    component: TransparenciaComponent,
    title: 'Transparencia y acceso a la información pública',
  },
  {
    path: 'mision-y-vision/37',
    component: MisionVisionComponent,
    title: 'Misión y visión',
  },
  {
    path: 'funciones/38',
    component: FuncionesComponent,
    title: 'Funciones',
  },
  {
    path: 'politica-del-sistema-integrado-de-gestion/40',
    component: PoliticasigComponent,
    title: 'Politica SIG',
  },
  {
    path: 'talento-humano/46',
    component: TalentoHumanoComponent,
    title: 'Talento humano',
  },
  {
    path: 'gestion-documental/51',
    component: GestionDocumentalComponent,
    title: 'Gestión documental',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EntidadModule {}
