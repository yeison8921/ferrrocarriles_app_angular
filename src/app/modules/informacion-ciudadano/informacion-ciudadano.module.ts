import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuiasComponent } from '../informacion-ciudadano/guias/guias.component';
import { ManualesComponent } from '../informacion-ciudadano/manuales/manuales.component';
import { CorrespondenciaDevueltaComponent } from './correspondencia-devuelta/correspondencia-devuelta.component';
import { BoletinVirtualComponent } from './boletin-virtual/boletin-virtual.component';


const routes: Routes = [
  {
    path: 'guias/195',
    component: GuiasComponent,
    title: 'Guías',
  },
  {
    path: 'manuales/196',
    component: ManualesComponent,
    title: 'Manuales',
  },
  {
    path: 'correspondencia-devuelta/194',
    component: CorrespondenciaDevueltaComponent,
    title: 'Correspondencia Devuelta',
  },
  {
    path: 'boletin-virtual/17',
    component: BoletinVirtualComponent,
    title: 'Información al ciudadano',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InformacionCiudadanoModule {}
