import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanEstrategicoTecComponent } from './plan-estrategico-tec/plan-estrategico-tec.component';
import { PlanAccionComponent } from './plan-accion/plan-accion.component';
import { PlanEstrategicoComponent } from './plan-estrategico/plan-estrategico.component';
import { PlanAnticorrupcionComponent } from './plan-anticorrupcion/plan-anticorrupcion.component';
import { PlanRiesgosComponent } from './plan-riesgos/plan-riesgos.component';
import { PlanMejoramientoComponent } from './plan-mejoramiento/plan-mejoramiento.component';
import { PlanFortalecimientoComponent } from './plan-fortalecimiento/plan-fortalecimiento.component';
import { PlanGestionHumanaComponent } from './plan-gestion-humana/plan-gestion-humana.component';
import { ProcedimientosComponent } from './procedimientos/procedimientos.component';
import { PlanPoliticaComponent } from './plan-politica/plan-politica.component';
import { PlanParticipacionComponent } from './plan-participacion/plan-participacion.component';
import { PlanSeguridadComponent } from './plan-seguridad/plan-seguridad.component';
import { ProyectosInversionComponent } from './proyectos-inversion/proyectos-inversion.component';
import { PlanAdquisicionesComponent } from './plan-adquisiciones/plan-adquisiciones.component';
import { GestionDocumentalComponent } from './gestion-documental/gestion-documental.component';



const routes: Routes = [
  {
    path: 'plan-estrategico-de-tecnologias-de-la-informacion-y-las-comunicaciones/201',
    component: PlanEstrategicoTecComponent,
  },
  {
    path: 'plan-de-accion/64',
    component: PlanAccionComponent,
  },
  {
    path: 'plan-estrategico/63',
    component: PlanEstrategicoComponent,
  },
  {
    path: 'plan-de-anticorrupcion-y-atencion-al-ciudadano/74',
    component: PlanAnticorrupcionComponent,
  },
  {
    path: 'plan-de-riesgos/79',
    component: PlanRiesgosComponent,
  },
  {
    path: 'planes-de-mejoramiento/60',
    component: PlanMejoramientoComponent,
  },
  {
    path: 'plan-de-fortalecimiento/78',
    component: PlanFortalecimientoComponent,
  },
  {
    path: 'plan-gestion-humana/197',
    component: PlanGestionHumanaComponent,
  },
  {
    path: 'procedimientos-lineamientos-y-politicas-de-adquisicion-y-compras/84',
    component: ProcedimientosComponent,
  },
  {
    path: 'plan-anual-de-adquisiciones/198',
    component: PlanAdquisicionesComponent,
  },
  {
    path: 'plan-de-politica-sectorial-de-transparencia-e-integridad/231',
    component:PlanPoliticaComponent ,
  },
  {
    path: 'plan-de-participacion-ciudadana/73',
    component: PlanParticipacionComponent,
  },
  {
    path: 'plan-seguridad-y-privacidad-de-la-informacion/200',
    component: PlanSeguridadComponent,
  },
  {
    path: 'programas-y-proyectos-de-inversion/202',
    component: ProyectosInversionComponent,
  },
  {
    path: 'gestion-documental/203',
    component: GestionDocumentalComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlanesModule {}
