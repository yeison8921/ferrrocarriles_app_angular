import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultaCiudadanaComponent } from './consulta-ciudadana/consulta-ciudadana.component';
import { PqrComponent } from './pqr/pqr.component';

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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParticipaModule {}
