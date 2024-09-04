import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { AcordionFiles } from '../../../interfaces/acordion';

@Component({
  selector: 'app-codigo-integridad',
  standalone: true,
  imports: [NgbAccordionModule, NgFor],
  templateUrl: './codigo-integridad.component.html',
  styleUrl: './codigo-integridad.component.css',
})
export class CodigoIntegridadComponent {
  items: AcordionFiles[] = [];
  constructor() {
    this.items = [
      {
        id: 1,
        nombre: 'CÓDIGO DE INTEGRIDAD 2024',
        files: [
          {
            id: 1,
            tipo: 'pdf',
            nombre: 'APGTHGTHCE01 CODIGO DE INTEGRIDAD DEL FPS V 6 (1).pdf',
            url: '/assets/files/codigo_etica/01. CÓDIGO DE INTEGRIDAD 2024/APGTHGTHCE01  CODIGO DE INTEGRIDAD DEL FPS V 6 (1).pdf',
          },
          {
            id: 2,
            tipo: 'pdf',
            nombre:
              'INFORME DE PERCEPCIÓN DE INTEGRIDAD I TRIMESTRE 2024 - ÚLTIMA (1).pdf',
            url: '/assets/files/codigo_etica/01. CÓDIGO DE INTEGRIDAD 2024/INFORME DE PERCEPCIÓN DE INTEGRIDAD I TRIMESTRE 2024 - ÚLTIMA (1).pdf',
          },
          {
            id: 3,
            tipo: 'pdf',
            nombre: 'PLAN DE ACCIÓN CÓDIGO INTEGRIDAD 2024 FPS-FNC.pdf',
            url: '/assets/files/codigo_etica/01. CÓDIGO DE INTEGRIDAD 2024/PLAN DE ACCIÓN CÓDIGO INTEGRIDAD 2024 FPS-FNC.pdf',
          },
        ],
      },
      {
        id: 2,
        nombre: 'CÓDIGO DE INTEGRIDAD 2023',
        files: [
          {
            id: 1,
            tipo: 'pdf',
            nombre: '01. Código de Integridad.pdf',
            url: '/assets/files/codigo_etica/02. CÓDIGO DE INTEGRIDAD 2023/01. Código de Integridad.pdf',
          },
          {
            id: 2,
            tipo: 'pdf',
            nombre:
              '02. INFORME DE PERCEPCIÓN DE INTEGRIDAD I SEMESTRE 2023.pdf',
            url: '/assets/files/codigo_etica/02. CÓDIGO DE INTEGRIDAD 2023/02. INFORME DE PERCEPCIÓN DE INTEGRIDAD I SEMESTRE 2023.pdf',
          },
        ],
      },
      {
        id: 3,
        nombre: 'CÓDIGO DE INTEGRIDAD 2022',
        files: [
          {
            id: 1,
            tipo: 'pdf',
            nombre:
              'INFORME DE EJECUCIÓN PLAN DE ACCIÓN DE INTEGRIDAD-  2022.pdf',
            url: '/assets/files/codigo_etica/03. CÓDIGO DE INTEGRIDAD 2022/INFORME DE EJECUCIÓN PLAN DE ACCIÓN DE INTEGRIDAD-  2022.pdf',
          },
          {
            id: 2,
            tipo: 'pdf',
            nombre: 'PLAN DE ACCION CODIGO DE INTEGRADAD 2022.pdf',
            url: '/assets/files/codigo_etica/03. CÓDIGO DE INTEGRIDAD 2022/PLAN DE ACCION CODIGO DE INTEGRADAD 2022.pdf',
          },
        ],
      },
      {
        id: 4,
        nombre: 'CÓDIGO DE INTEGRIDAD 2021',
        files: [
          {
            id: 1,
            tipo: 'pdf',
            nombre: 'CODIGO DE INTEGRIDAD 2021 I SEMESTRE.pdf',
            url: '/assets/files/codigo_etica/04. CÓDIGO DE INTEGRIDAD 2021/CODIGO DE INTEGRIDAD 2021 I SEMESTRE.pdf',
          },
          {
            id: 2,
            tipo: 'pdf',
            nombre: 'PERCEPCION ACTIVIDADES CODIGO DE INTEGRIDAD 2021.pdf',
            url: '/assets/files/codigo_etica/04. CÓDIGO DE INTEGRIDAD 2021/PERCEPCION ACTIVIDADES CODIGO DE INTEGRIDAD 2021.pdf',
          },
          {
            id: 3,
            tipo: 'pdf',
            nombre: 'RESULTADOS CODIGO DE INTEGRIDAD 2021.pdf',
            url: '/assets/files/codigo_etica/04. CÓDIGO DE INTEGRIDAD 2021/RESULTADOS CODIGO DE INTEGRIDAD 2021.pdf',
          },
        ],
      },
      {
        id: 5,
        nombre: 'CÓDIGO DE INTEGRIDAD 2020',
        files: [
          {
            id: 1,
            tipo: 'pdf',
            nombre: 'Plan de Acción POLITICA DE INTEGRIDAD 2020.pdf',
            url: '/assets/files/codigo_etica/05. CÓDIGO DE INTEGRIDAD 2020/Plan de Acción POLITICA DE INTEGRIDAD 2020.pdf',
          },
          {
            id: 2,
            tipo: 'pdf',
            nombre: 'Resultados de Encuesta de percepción de Integridad.pdf',
            url: '/assets/files/codigo_etica/05. CÓDIGO DE INTEGRIDAD 2020/Resultados de Encuesta de percepción de Integridad.pdf',
          },
          {
            id: 3,
            tipo: 'pdf',
            nombre: 'ejecución POLITICA DE INTEGRIDAD 2020-COVID.pdf',
            url: '/assets/files/codigo_etica/05. CÓDIGO DE INTEGRIDAD 2020/ejecución POLITICA DE INTEGRIDAD 2020-COVID.pdf',
          },
        ],
      },
    ];
  }
}
