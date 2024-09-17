import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TramitesComponent } from './tramites/tramites.component';
import { VentanillaVirtualComponent } from './ventanilla-virtual/ventanilla-virtual.component';

const routes: Routes = [
  {
    path: 'tramites/54',
    title: 'Trámites y servicios',
    component: TramitesComponent,
  },
  {
    path: 'ventanilla-virtual/55',
    title: 'ventanilla virtual',
    component: VentanillaVirtualComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TramitesServiciosModule {}
