import { Component } from '@angular/core';
import { AcordionFiles } from '../../../interfaces/acordion';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-planeacion-gestion-y-control',
  standalone: true,
  imports: [NgbAccordionModule, NgFor],
  templateUrl: './planeacion-gestion-y-control.component.html',
  styleUrl: './planeacion-gestion-y-control.component.css',
})
export class PlaneacionGestionYControlComponent {
  items: AcordionFiles[] = [];
  constructor() {
    this.items = [
      {
        id: 1,
        nombre: 'Informes',
        files: [
          {
            id: 1,
            tipo: 'link',
            nombre: 'Informes de Empalme',
            url: '/informes/informes-de-empalme/71',
          },
          {
            id: 2,
            tipo: 'link',
            nombre: 'Indicadores de Gestión',
            url: '/informes/indicadores-de-gestion/62',
          },
          {
            id: 3,
            tipo: 'link',
            nombre: 'Informe Cámara de Representantes',
            url: '/informes/informe-camara-de-representantes/187',
          },
          {
            id: 4,
            tipo: 'link',
            nombre: 'Informes Fiscales Contraloría General de la República',
            url: '/informes/informes-fiscales/61',
          },
          {
            id: 5,
            tipo: 'link',
            nombre: 'Memorias al Congreso de la República',
            url: '/informes/memorias-al-congreso-de-la-republica/66',
          },
          {
            id: 6,
            tipo: 'link',
            nombre: 'Informes PQRS',
            url: '/informes/informes-PQRS/180',
          },
          {
            id: 7,
            tipo: 'link',
            nombre: 'Informe de Medición de la Satisfacción al Ciudadano',
            url: '/informes/informes-de-medicion-de-la-satistfaccion-al-ciudadano/188',
          },
          {
            id: 8,
            tipo: 'link',
            nombre:
              'Informe de Percepción de Satisfacción al Usuario Post Trámite',
            url: '/informes/informes-de-percepcion-de-la-satistfaccion-al-usuario-post-tramite/189',
          },
          {
            id: 9,
            tipo: 'link',
            nombre: 'Informes del Estado del Control Interno',
            url: '/informes/informes-del-estado-del-control-interno/68',
          },
          {
            id: 10,
            tipo: 'link',
            nombre: 'Informes de Defensa Judicial',
            url: '/informes/informes-de-la-defensa-judicial/70',
          },
          {
            id: 11,
            tipo: 'link',
            nombre: 'Informe Consolidado Gestión Prestaciones Económicas',
            url: '/informes/informes-consolidado-gestion-prestaciones-economicas/72',
          },
          {
            id: 12,
            tipo: 'link',
            nombre: 'Rendición de Cuentas',
            url: '/informes/rendicion-de-cuentas/67',
          },
          {
            id: 13,
            tipo: 'link',
            nombre: 'Indicadores de Salud',
            url: '/informes/indicadores-de-salud/190',
          },
          {
            id: 14,
            tipo: 'link-ext',
            nombre: 'Informe final Auditoría Contraloría FPS-FNC',
            url: 'https://www.contraloria.gov.co/es/web/guest/resultados/proceso-auditor/auditorias-liberadas',
          },
          {
            id: 15,
            tipo: 'link',
            nombre: 'Reporte de Auditoria ITA',
            url: '/corporativo/reporte-de-auditoria-ita/258',
          },

          {
            id: 16,
            tipo: 'pdf',
            nombre: 'Política Admon Riesgo De Gestión Corrupción Y Seguridad Digital V1',
            url: '/assets/files/planeacion-gestion-y-control/ESDESDIGPL01 POLITICA ADMON RIESGO DE GESTION CORRUPCION Y SEGURIDAD DIGITAL V1.pdf',
          },
        ],
      },
      {
        id: 2,
        nombre: 'Caracterización de Usuarios y Grupos de Valor',
        files: [
          {
            id: 1,
            tipo: 'pdf',
            nombre: 'Caracterización e Identificación de Necesidades',
            url: '/assets/files/planeacion-gestion-y-control/ESDESOPSFC02 CARACTERIZACIÓN E IDENTIFICACIÓN DE NECESIDADES DE CIUDADANOS, USUARIOS Y GRUPOS DE INTERÉS DEL FPS FNC TOMO 1.pdf',
          },
          {
            id: 2,
            tipo: 'pdf',
            nombre: 'Presentación Caracterización',
            url: '/assets/files/planeacion-gestion-y-control/RENDICIÓN DE CUENTAS CARACTERIZACION 2023.pdf',
          },
          {
            id: 3,
            tipo: 'excel',
            nombre:
              'Formato Matriz Necesidades y Expectativas de Grupos de Valor',
            url: '/assets/files/planeacion-gestion-y-control/ESDESDIGFO01 FORMATO MATRIZ NECESIDADES Y EXPECTATIVAS DE LOS GRUPOS DE VALOR V4 (1).xlsx',
          },
        ],
      },
    ];
  }
}
