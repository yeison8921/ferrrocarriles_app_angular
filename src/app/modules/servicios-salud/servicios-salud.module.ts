import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndicadoresSaludComponent } from '../servicios-salud/indicadores-salud/indicadores-salud.component';
import { RedDePrestadoresComponent } from './red-de-prestadores/red-de-prestadores.component';
import { CanalAtencionRedDePrestadoresComponent } from './canal-atencion-red-de-prestadores/canal-atencion-red-de-prestadores.component';
import { ServiciosExcluidosComponent } from './servicios-excluidos/servicios-excluidos.component';
import { ServiciosIncluidosComponent } from './servicios-incluidos/servicios-incluidos.component';

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
  {
    path: 'afiliados/256',
    title: 'Servicios incluidos en el plan de beneficios',
    component: ServiciosIncluidosComponent,
  },
  {
    path: 'afiliados/257',
    title: 'Servicios Excluidos en el Plan de Beneficios',
    component: ServiciosExcluidosComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServiciosSaludModule {}
