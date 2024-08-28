import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultaCiudadanaComponent } from './consulta-ciudadana/consulta-ciudadana.component';
import { PqrComponent } from './pqr/pqr.component';
import { ParticipacionYPresupuestoParticipativoComponent } from './participacion-y-presupuesto-participativo/participacion-y-presupuesto-participativo.component';

const routes: Routes = [
  {
    path: 'consulta-ciudadana/227',
    component: ConsultaCiudadanaComponent,
    title: 'Consulta ciudadana',
  },
  {
    path: 'pqrs/222',
    component: PqrComponent,
    title: 'Pqrs',
  },
  {
    path: 'participacion-y-presupuesto-participativo/226',
    title: 'Planeación y/o presupuesto participativo',
    component: ParticipacionYPresupuestoParticipativoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParticipaModule {}
