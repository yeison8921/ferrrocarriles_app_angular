import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuiasComponent } from './guias/guias.component';
import { ManualesComponent } from './manuales/manuales.component';

const routes: Routes = [
  {
    path: 'guias/195',
    component: GuiasComponent,
    title: 'Guias'
  },
  {
    path: 'manuales/196',
    component: ManualesComponent,
    title: 'Manuales'
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AtencionusuarioModule { }
