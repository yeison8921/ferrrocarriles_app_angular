import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuiasComponent } from '../informacion-ciudadano/guias/guias.component';
import { ManualesComponent } from '../informacion-ciudadano/manuales/manuales.component';
import { CorrespondenciaDevueltaComponent } from './correspondencia-devuelta/correspondencia-devuelta.component';

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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InformacionCiudadanoModule {}
