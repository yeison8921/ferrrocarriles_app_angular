import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TramitesComponent } from './tramites/tramites.component';

const routes: Routes = [
  {
    path: 'tramites/54',
    title: 'Trámites y servicios',
    component: TramitesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TramitesServiciosModule {}
