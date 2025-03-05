import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndicadoresSaludComponent } from '../servicios-salud/indicadores-salud/indicadores-salud.component';
import { RedDePrestadoresComponent } from './red-de-prestadores/red-de-prestadores.component';
import { CanalAtencionRedDePrestadoresComponent } from './canal-atencion-red-de-prestadores/canal-atencion-red-de-prestadores.component';
import { ZonaCostaComponent } from './zona-costa/zona-costa.component';
import { ZonaAntioquiaComponent } from './zona-antioquia/zona-antioquia.component';
import { ZonaCafeteraComponent } from './zona-cafetera/zona-cafetera.component';
import { ZonaCentroComponent } from './zona-centro/zona-centro.component';
import { ZonaPacificoComponent } from './zona-pacifico/zona-pacifico.component';
import { ServiciosExcluidosComponent } from './servicios-excluidos/servicios-excluidos.component';
import { ServiciosIncluidosComponent } from './servicios-incluidos/servicios-incluidos.component';
import { InfanciaComponent } from './infancia/infancia.component';
import { Infancia2Component } from './infancia2/infancia2.component';
import { AdolescenciaComponent } from './adolescencia/adolescencia.component';
import { JuventudComponent } from './juventud/juventud.component';
import { AdultezComponent } from './adultez/adultez.component';
import { VejezComponent } from './vejez/vejez.component';
import { GestionDelRiesgo260Component } from './gestion-del-riesgo-260/gestion-del-riesgo-260.component';
import { GestionDelRiesgo261Component } from './gestion-del-riesgo-261/gestion-del-riesgo-261.component';
import { GestionDelRiesgo262Component } from './gestion-del-riesgo-262/gestion-del-riesgo-262.component';
import { GestionDelRiesgo263Component } from './gestion-del-riesgo-263/gestion-del-riesgo-263.component';
import { GestionDelRiesgo264Component } from './gestion-del-riesgo-264/gestion-del-riesgo-264.component';
import { GestionDelRiesgo265Component } from './gestion-del-riesgo-265/gestion-del-riesgo-265.component';
import { AfiliadosComponent } from './afiliados/afiliados.component';
import { ProgramaPromocionPrevencionComponent } from './programa-promocion-prevencion/programa-promocion-prevencion.component';
import { GestionRiesgoComponent } from './gestion-riesgo/gestion-riesgo.component';
import { GestionDelRiesgo266Component } from './gestion-del-riesgo-266/gestion-del-riesgo-266.component';
import { AfiliacionesComponent } from './afiliaciones/afiliaciones.component';
import { ReportePensionadosFallecidosComponent } from './reporte-pensionados-fallecidos/reporte-pensionados-fallecidos.component';

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
    path: 'zona-costa/105',
    title: 'Zona Costa',
    component: ZonaCostaComponent,
  },
  {
    path: 'zona-antioquia/159',
    title: 'Zona Antioquia',
    component: ZonaAntioquiaComponent,
  },
  {
    path: 'zona-cafetera/267',
    title: 'Zona Cafetera',
    component: ZonaCafeteraComponent,
  },
  {
    path: 'zona-centro/160',
    title: 'Zona Centro',
    component: ZonaCentroComponent,
  },
  {
    path: 'zona-pacifico/106',
    title: 'Zona Pacífico',
    component: ZonaPacificoComponent,
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
  {
    path: 'programa-de-promocion-y-prevencion/250',
    title: 'Primera Infancia',
    component: InfanciaComponent,
  },
  {
    path: 'programa-de-promocion-y-prevencion/251',
    title: 'Infancia',
    component: Infancia2Component,
  },
  {
    path: 'programa-de-promocion-y-prevencion/252',
    title: 'Adolescencia',
    component: AdolescenciaComponent,
  },
  {
    path: 'programa-de-promocion-y-prevencion/253',
    title: 'Juventud',
    component: JuventudComponent,
  },
  {
    path: 'programa-de-promocion-y-prevencion/254',
    title: 'Adultez',
    component: AdultezComponent,
  },
  {
    path: 'programa-de-promocion-y-prevencion/255',
    title: 'Vejez',
    component: VejezComponent,
  },
  {
    path: 'gestion-del-riesgo/260',
    title: 'Ruta de Atención Integral Cáncer',
    component: GestionDelRiesgo260Component,
  },
  {
    path: 'gestion-del-riesgo/261',
    title: 'Ruta de Atención Integral Cardio Cerebro Vascular y Metabólico',
    component: GestionDelRiesgo261Component,
  },
  {
    path: 'gestion-del-riesgo/262',
    title:
      'Ruta de Atención Integral Salud Mental y Consumo de Sustancias Psicoactivas',
    component: GestionDelRiesgo262Component,
  },
  {
    path: 'gestion-del-riesgo/263',
    title:
      'Ruta de Atención integral a Victimas de violencia, Agresiones o Traumas',
    component: GestionDelRiesgo263Component,
  },
  {
    path: 'gestion-del-riesgo/264',
    title: 'Programa de atención para la Cesación de Tabaco',
    component: GestionDelRiesgo264Component,
  },
  {
    path: 'gestion-del-riesgo/265',
    title: 'Programa de atención integral para personas que viven con VIH',
    component: GestionDelRiesgo265Component,
  },
  {
    path: 'afiliados/242',
    title: 'Afiliados',
    component: AfiliadosComponent,
  },
  {
    path: 'programa-de-promocion-y-prevencion/132',
    title: 'Ruta de Promoción y Mantenimiento de la Salud',
    component: ProgramaPromocionPrevencionComponent,
  },
  {
    path: 'gestion-del-riesgo/259',
    title: 'Gestión del riesgo',
    component: GestionRiesgoComponent,
  },
  {
    path: 'gestion-del-riesgo/266',
    title:
      'Programa de atención integral a Enfermedades Respiratorias Crónicas (Asma y EPOC)',
    component: GestionDelRiesgo266Component,
  },
  {
    path: 'sistema-de-afiliacion-transaccional-sat/223',
    title: 'Sistema de Afiliación Transaccional (SAT)',
    component: AfiliacionesComponent,
  },
  {
    path: 'reporte-pensionados-fallecidos/269',
    title: 'Reporte Pensionados Fallecidos',
    component: ReportePensionadosFallecidosComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServiciosSaludModule {}
