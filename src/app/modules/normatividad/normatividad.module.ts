import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResolucionesComponent } from './resoluciones/resoluciones.component';
import { DecretosComponent } from './decretos/decretos.component';
import { LeyesComponent } from './leyes/leyes.component';
import { CircularesComponent } from './circulares/circulares.component';

const routes: Routes = [
  {
    path: '49',
    title: 'Resoluciones',
    component: ResolucionesComponent,
  },
  {
    path: '233',
    title: 'Leyes',
    component: LeyesComponent,
  },
  {
    path: '234',
    title: 'Decretos',
    component: DecretosComponent,
  },
  {
    path: '235',
    title: 'Circulares',
    component: CircularesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NormatividadModule {}
