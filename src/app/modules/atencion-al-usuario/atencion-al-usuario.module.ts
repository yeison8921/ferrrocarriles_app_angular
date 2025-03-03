import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EncuestaSatisfaccionComponent } from '../atencion-al-usuario/encuesta-satisfaccion/encuesta-satisfaccion.component';
import { OfertasLaboralesComponent } from '../atencion-al-usuario/ofertas-laborales/ofertas-laborales.component';
import { GlosarioComponent } from '../atencion-al-usuario/glosario/glosario.component';
import { CanalInteraccionComponent } from '../atencion-al-usuario/canal-interaccion/canal-interaccion.component';
import { EncuestaEvaluacionComponent } from '../atencion-al-usuario/encuesta-evaluacion/encuesta-evaluacion.component';
import { BuzonNotificacionesJudicialesComponent } from '../atencion-al-usuario/buzon-notificaciones-judiciales/buzon-notificaciones-judiciales.component';
import { ForoComponent } from './foro/foro.component';
import { ContratacionComponent } from './contratacion/contratacion.component';

const routes: Routes = [
  {
    path: 'encuesta-de-satisfaccion/214',
    title: 'Encuesta de satisfacción',
    component: EncuestaSatisfaccionComponent,
  },
  {
    path: 'ofertas-laborales/153',
    title: 'Ofertas Laborales',
    component: OfertasLaboralesComponent,
  },
  {
    path: 'glosario/117',
    title: 'Glosario',
    component: GlosarioComponent,
  },
  {
    path: 'canal-de-interaccion-de-liberatoria-para-la-participacion-ciudadana/240',
    title:
      'Canal de interacción de liberatoria para la participación ciudadana',
    component: CanalInteraccionComponent,
  },
  {
    path: 'encuesta-de-evaluacion-del-evento-de-audiencia-publica-vigencia-2021/236',
    title:
      'Encuesta de Evaluación del Evento de Audiencia Pública Vigencia 2021',
    component: EncuestaEvaluacionComponent,
  },
  {
    path: 'buzon-notificaciones-judiciales/43',
    title: 'Buzón notificaciones judiciales',
    component: BuzonNotificacionesJudicialesComponent,
  },
  {
    path: 'foro/126',
    title: 'Foro',
    component: ForoComponent,
  },
  {
    path: 'contratacion/97',
    title: 'Contratación',
    component: ContratacionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AtencionUsuarioModule {}
