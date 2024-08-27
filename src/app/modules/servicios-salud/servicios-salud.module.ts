import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndicadoresSaludComponent } from '../servicios-salud/indicadores-salud/indicadores-salud.component';
import { RedDePrestadoresComponent } from './red-de-prestadores/red-de-prestadores.component';
import { CanalAtencionRedDePrestadoresComponent } from './canal-atencion-red-de-prestadores/canal-atencion-red-de-prestadores.component';

const routes: Routes = [
  {
    path: 'red-de-prestadores/44',
    component: RedDePrestadoresComponent,
  },
  {
    path: 'canal-de-atencion-red-de-prestadores/244',
    title: 'Canal de Atención Servicios de Salud',
    component: CanalAtencionRedDePrestadoresComponent,
  },
{
    path: 'indicadores-de-salud/190',
    title: 'Indicadores de salud',
    component: IndicadoresSaludComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServiciosSaludModule {}
