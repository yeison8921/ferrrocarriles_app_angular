import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndicadoresGestionComponent } from './indicadores-gestion/indicadores-gestion.component';
import { InformesEmpalmeComponent } from './informes-empalme/informes-empalme.component';
import { InformesAnualesComponent } from './informes-anuales/informes-anuales.component';
import { MemoriasCongresoComponent } from './memorias-congreso/memorias-congreso.component';
import { InformesPqrsComponent } from './informes-pqrs/informes-pqrs.component';
import { InformeMedicionSatisfaccionCiudadanoComponent } from './informe-medicion-satisfaccion-ciudadano/informe-medicion-satisfaccion-ciudadano.component';
import { InformesDefensaJudicialComponent } from './informes-defensa-judicial/informes-defensa-judicial.component';
import { InformeConsolidadoComponent } from './informe-consolidado/informe-consolidado.component';
import { InformeOficinaControlInternoComponent } from './informe-oficina-control-interno/informe-oficina-control-interno.component';
import { InformesFiscalesComponent } from './informes-fiscales/informes-fiscales.component';
import { InformeAuditoriaOficinaControlInternoComponent } from './informe-auditoria-oficina-control-interno/informe-auditoria-oficina-control-interno.component';
import { RendicionCuentasComponent } from './rendicion-cuentas/rendicion-cuentas.component';
import { InformeCamaraRepresentantesComponent } from './informe-camara-representantes/informe-camara-representantes.component';
import { InformesPercepcionComponent } from './informes-percepcion/informes-percepcion.component';
import { InformacionContableFinancieraComponent } from './informacion-contable-financiera/informacion-contable-financiera.component';
import { InformesEstadoControlInternoComponent } from './informes-estado-control-interno/informes-estado-control-interno.component';
import { CodigoBuenGobiernoComponent } from './codigo-buen-gobierno/codigo-buen-gobierno.component';
import { CodigoIntegridadComponent } from './codigo-integridad/codigo-integridad.component';

const routes: Routes = [
  {
    path: 'informes-de-empalme/71',
    title: 'Informes de Empalme',
    component: InformesEmpalmeComponent,
  },
  {
    path: 'informes-anuales/59',
    title: 'Informes Anuales',
    component: InformesAnualesComponent,
  },
  {
    path: 'indicadores-de-gestion/62',
    title: 'Indicadores de Gestión',
    component: IndicadoresGestionComponent,
  },
  {
    path: 'informes-fiscales/61',
    title: 'Informes Fiscales',
    component: InformesFiscalesComponent,
  },
  {
    path: 'memorias-al-congreso-de-la-republica/66',
    title: 'Memorias al Congreso de la República',
    component: MemoriasCongresoComponent,
  },
  {
    path: 'informes-PQRS/180',
    title: 'Informes PQRS',
    component: InformesPqrsComponent,
  },
  {
    path: 'informes-de-medicion-de-la-satistfaccion-al-ciudadano/188',
    title: 'Informe de Medición de la Satisfacción al Ciudadano',
    component: InformeMedicionSatisfaccionCiudadanoComponent,
  },
  {
    path: 'informes-de-la-defensa-judicial/70',
    title: 'Informes de la Defensa Judicial',
    component: InformesDefensaJudicialComponent,
  },
  {
    path: 'informes-consolidado-gestion-prestaciones-economicas/72',
    title: 'Informe Consolidado Gestión Prestaciones Economicas',
    component: InformeConsolidadoComponent,
  },
  {
    path: 'informes-oficina-de-control-interno/186',
    title: 'Informes Oficina de Control Interno',
    component: InformeOficinaControlInternoComponent,
  },
  {
    path: 'informe-de-auditoria-oficina-de-control-interno/168',
    title: 'Informe de auditoría oficina de control interno',
    component: InformeAuditoriaOficinaControlInternoComponent,
  },
  {
    path: 'rendicion-de-cuentas/67',
    title: 'Rendición de Cuentas',
    component: RendicionCuentasComponent,
  },
  {
    path: 'informe-camara-de-representantes/187',
    title: 'Informe Cámara de Representantes',
    component: InformeCamaraRepresentantesComponent,
  },
  {
    path: 'informes-de-percepcion-de-la-satistfaccion-al-usuario-post-tramite/189',
    title: 'Informe de Percepción de Satisfacción al Usuario Post Trámite',
    component: InformesPercepcionComponent,
  },
  {
    path: 'informes-contaduria-general-de-la-nacion/65',
    title: 'Información contable y financiera',
    component: InformacionContableFinancieraComponent,
  },
  {
    path: 'informes-del-estado-del-control-interno/68',
    title: 'Informes del Estado del Control Interno',
    component: InformesEstadoControlInternoComponent,
  },
  {
    path: 'codigo-de-buen-gobierno/39',
    title: 'Código de Buen Gobierno',
    component: CodigoBuenGobiernoComponent,
  },
  {
    path: 'codigo-de-integridad/206',
    title: 'Código de Integridad',
    component: CodigoIntegridadComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InformesModule {}
