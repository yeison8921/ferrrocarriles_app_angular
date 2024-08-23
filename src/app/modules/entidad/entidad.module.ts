import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MisionVisionComponent } from './mision-vision/mision-vision.component';
import { DirectorioGeneralFuncionariosComponent } from './directorio-general-funcionarios/directorio-general-funcionarios.component';

const routes: Routes = [
  {
    path: 'mision-y-vision/37',
    component: MisionVisionComponent,
  },
  {
    path: 'directorio-general-funcionarios-fps/192',
    component: DirectorioGeneralFuncionariosComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EntidadModule {}
