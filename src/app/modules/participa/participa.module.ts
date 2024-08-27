import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultaCiudadanaComponent } from './consulta-ciudadana/consulta-ciudadana.component';
import { PqrComponent } from './pqr/pqr.component';

const routes: Routes = [
  {
    path: 'consulta-ciudadana/227',
    title: 'Consulta ciudadana',
    component: ConsultaCiudadanaComponent,

  },
  {
    path: 'pqr/222',
    title: 'pqr',
    component: PqrComponent,

  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParticipaModule {}
