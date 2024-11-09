import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TramitesComponent } from './tramites/tramites.component';
import { FormatosComponent } from './formatos/formatos.component';

const routes: Routes = [
  {
    path: 'tramites/54',
    title: 'Trámites y servicios',
    component: TramitesComponent,
  },
  {
    path: 'formatos/165',
    title: 'Formatos',
    component: FormatosComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TramitesServiciosModule {}
