import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultaCiudadanaComponent } from './consulta-ciudadana/consulta-ciudadana.component';
import { PqrComponent } from './pqr/pqr.component';

const routes: Routes = [
  {
    path: 'consulta-ciudadana/227',
    component: ConsultaCiudadanaComponent,
  },
  {
    path: '222',
    component: PqrComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParticipaModule {}
