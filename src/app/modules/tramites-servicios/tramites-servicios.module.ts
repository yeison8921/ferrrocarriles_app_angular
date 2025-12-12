import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TramitesComponent } from './tramites/tramites.component';
import { FormatosComponent } from './formatos/formatos.component';
import { Certificadodepension} from './certificadodepension/Certificadodepension';
import { VentanillaVirtualComponent } from './ventanilla-virtual/ventanilla-virtual.component';

const routes: Routes = [
  {
    path: 'tramites/54',
    title: 'Trámites y servicios',
    component: TramitesComponent,
  },
  {
    path: 'Certificadodepension/358',
    title: 'Certificado Pensión',
    component: Certificadodepension,
  },
  {
    path: 'formatos/165',
    title: 'Formatos',
    component: FormatosComponent,
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
