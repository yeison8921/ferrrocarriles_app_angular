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
import { TranspareciaPublicaComponent } from './transparecia-publica/transparecia-publica.component';
import { PlaneacionGestionYControlComponent } from './planeacion-gestion-y-control/planeacion-gestion-y-control.component';
import { PlanmipgComponent } from './planmipg/planmipg.component';
import { CommonModule } from '@angular/common';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
  {
    path: '53',
    component: PlaneacionGestionYControlComponent,
    title: 'Planeación, gestión y control',
  },
  {
    path: 'plan-estrategico-de-tecnologias-de-la-informacion-y-las-comunicaciones/201',
    component: PlanEstrategicoTecComponent,
    title: 'Plan estrategico TIC',
  },
  {
    path: 'plan-de-accion/64',
    component: PlanAccionComponent,
    title: 'Plan de acción',
  },
  {
    path: 'plan-estrategico/63',
    component: PlanEstrategicoComponent,
    title: 'Plan estrategico',
  },
  {
    path: 'plan-de-anticorrupcion-y-atencion-al-ciudadano/74',
    component: PlanAnticorrupcionComponent,
    title: 'Plan anticorrupción',
  },
  {
    path: 'plan-de-riesgos/79',
    component: PlanRiesgosComponent,
    title: 'Plan de riesgos',
  },
  {
    path: 'planes-de-mejoramiento/60',
    component: PlanMejoramientoComponent,
    title: 'Planes de mejoramiento',
  },
  {
    path: 'plan-de-fortalecimiento/78',
    component: PlanFortalecimientoComponent,
    title: 'Plan de fortalecimiento',
  },
  {
    path: 'plan-gestion-humana/197',
    component: PlanGestionHumanaComponent,
    title: 'Plan de gestión humana',
  },
  {
    path: 'procedimientos-lineamientos-y-politicas-de-adquisicion-y-compras/84',
    component: ProcedimientosComponent,
    title: 'Procedimientos de compras',
  },
  {
    path: 'plan-anual-de-adquisiciones/198',
    component: PlanAdquisicionesComponent,
    title: 'Plan de adquisiciones',
  },
  {
    path: 'plan-de-politica-sectorial-de-transparencia-e-integridad/231',
    component: PlanPoliticaComponent,
    title: 'Plan de politica',
  },
  {
    path: 'plan-de-participacion-ciudadana/73',
    component: PlanParticipacionComponent,
    title: 'Plan de participación',
  },
  {
    path: 'plan-seguridad-y-privacidad-de-la-informacion/200',
    component: PlanSeguridadComponent,
    title: 'Plan de seguridad',
  },
  {
    path: 'programas-y-proyectos-de-inversion/202',
    component: ProyectosInversionComponent,
    title: 'Programas de inversión',
  },
  {
    path: 'gestion-documental/203',
    component: GestionDocumentalComponent,
    title: 'Gestión documental',
  },
  {
    path: 'gestion-documental/317',
    component: PlanmipgComponent,
    title: 'Plan de fortalecimiento del MIPG',
  },

  {
    path: 'transparencia-etica-publica/357',
    component: TranspareciaPublicaComponent,
    title: 'Programa de transparencia y ética pública',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlanesModule {}
