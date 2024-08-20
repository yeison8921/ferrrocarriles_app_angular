import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndicadoresGestionComponent } from './indicadores-gestion/indicadores-gestion.component';
import { InformesEmpalmeComponent } from './informes-empalme/informes-empalme.component';
import { InformesAnualesComponent } from './informes-anuales/informes-anuales.component';

const routes: Routes = [
  {
    path: 'informes-de-empalme/71',
    component: InformesEmpalmeComponent,
  },
  {
    path: 'informes-anuales/59',
    component: InformesAnualesComponent,
  },
  {
    path: 'indicadores-de-gestion/62',
    component: IndicadoresGestionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InformesModule {}
