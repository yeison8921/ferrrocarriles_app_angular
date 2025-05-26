import { Component } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { AcordionAnidadoFiles } from '../../../interfaces/acordion';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-plan-gestion-humana',
  standalone: true,
  imports: [NgbAccordionModule, NgFor],
  templateUrl: './plan-gestion-humana.component.html',
  styleUrl: './plan-gestion-humana.component.css',
})
export class PlanGestionHumanaComponent {
  items: AcordionAnidadoFiles[] = [];
  constructor() {
    this.items = [
      {
        id: 1,
        nombre: 'Plan de Bienestar',
        acordion: [
          {
            id: 1,
            nombre: '2025',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'Plan de Bienestar Social y Laboral 2025 V2-.pdf',
                url: '/assets/files/planes/plan_gestion_humana/01. Plan de Bienestar/01. 2025/Plan de Bienestar Social y Laboral 2025 V2-.pdf',
              },
            ],
          },
          {
            id: 2,
            nombre: '2024',
            files: [
              {
                id: 2,
                tipo: 'pdf',
                nombre: 'PLAN DE BIENESTAR 2024 x f (1).pdf',
                url: '/assets/files/planes/plan_gestion_humana/01. Plan de Bienestar/02. 2024/PLAN DE BIENESTAR 2024 x f (1).pdf',
              },
            ],
          },
          {
            id: 3,
            nombre: '2023',
            files: [
              {
                id: 3,
                tipo: 'pdf',
                nombre: 'PLAN DE BIENESTAR 2023 modif 21112023_signed.pdf',
                url: '/assets/files/planes/plan_gestion_humana/01. Plan de Bienestar/03. 2023/PLAN DE BIENESTAR 2023 modif 21112023_signed.pdf',
              },
              {
                id: 4,
                tipo: 'pdf',
                nombre: 'PLAN DE BIENESTAR SOCIAL 2023.pdf',
                url: '/assets/files/planes/plan_gestion_humana/01. Plan de Bienestar/03. 2023/PLAN DE BIENESTAR SOCIAL 2023.pdf',
              },
            ],
          },
          {
            id: 4,
            nombre: '2022',
            files: [
              {
                id: 5,
                tipo: 'pdf',
                nombre: 'PLAN DE BIENESTAR SOCIAL 2022.pdf',
                url: '/assets/files/planes/plan_gestion_humana/01. Plan de Bienestar/04. 2022/PLAN DE BIENESTAR SOCIAL 2022.pdf',
              },
            ],
          },
          {
            id: 5,
            nombre: '2021',
            files: [
              {
                id: 6,
                tipo: 'pdf',
                nombre: 'PLAN DE BIENESTAR E INCENTIVOS 2021.pdf',
                url: '/assets/files/planes/plan_gestion_humana/01. Plan de Bienestar/05. 2021/PLAN DE BIENESTAR E INCENTIVOS 2021.pdf',
              },
            ],
          },
          {
            id: 6,
            nombre: '2020',
            files: [
              {
                id: 7,
                tipo: 'pdf',
                nombre: 'PLAN DE BIENESTAR SOCIAL E INCENTIVOS 2020.pdf',
                url: '/assets/files/planes/plan_gestion_humana/01. Plan de Bienestar/06. 2020/PLAN DE BIENESTAR SOCIAL E INCENTIVOS 2020.pdf',
              },
            ],
          },
          {
            id: 7,
            nombre: '2019',
            files: [
              {
                id: 8,
                tipo: 'pdf',
                nombre: 'PLAN DE BIENESTAR SOCIAL 2019.PDF',
                url: '/assets/files/planes/plan_gestion_humana/01. Plan de Bienestar/07. 2019/PLAN DE BIENESTAR SOCIAL 2019.pdf',
              },
            ],
          },
          {
            id: 8,
            nombre: '2018',
            files: [
              {
                id: 9,
                tipo: 'pdf',
                nombre: 'PLAN BIENESTAR SOCIAL 2018.pdf',
                url: '/assets/files/planes/plan_gestion_humana/01. Plan de Bienestar/08. 2018/PLAN BIENESTAR SOCIAL 2018.pdf',
              },
            ],
          },
        ],
      },
      {
        id: 2,
        nombre: 'Plan Institucional de Capacitación',
        acordion: [
          {
            id: 1,
            nombre: '2025',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'PLAN INSTITUCIONAL DE CAPACITACIÓN 2025.pdf',
                url: '/assets/files/planes/plan_gestion_humana/02. Plan Institucional de Capacitación/01. 2025/PLAN INSTITUCIONAL DE CAPACITACIÓN 2025.pdf',
              },
            ],
          },
          {
            id: 2,
            nombre: '2024',
            files: [
              {
                id: 2,
                tipo: 'pdf',
                nombre: 'PLAN INSTITUCIONAL DE CAPACITACIONES 2024.pdf',
                url: '/assets/files/planes/plan_gestion_humana/02. Plan Institucional de Capacitación/02. 2024/PLAN INSTITUCIONAL DE CAPACITACIONES 2024.pdf',
              },
            ],
          },
          {
            id: 3,
            nombre: '2023',
            files: [
              {
                id: 3,
                tipo: 'pdf',
                nombre: '01 PLAN INSTITUCIONAL DE CAPACITACIÓN 2023.pdf',
                url: '/assets/files/planes/plan_gestion_humana/02. Plan Institucional de Capacitación/03. 2023/01 PLAN INSTITUCIONAL DE CAPACITACIÓN 2023.pdf',
              },
              {
                id: 4,
                tipo: 'pdf',
                nombre:
                  '02 CONSOLIDADO PLAN INSTITUCIONAL DE CAPACITACIÓN 2023.pdf',
                url: '/assets/files/planes/plan_gestion_humana/02. Plan Institucional de Capacitación/03. 2023/02 CONSOLIDADO PLAN INSTITUCIONAL DE CAPACITACIÓN 2023.pdf',
              },
            ],
          },
          {
            id: 4,
            nombre: '2022',
            files: [
              {
                id: 5,
                tipo: 'pdf',
                nombre:
                  'CONSOLIDADO PLAN INSTITUCIONAL DE CAPACITACION 2022.pdf',
                url: '/assets/files/planes/plan_gestion_humana/02. Plan Institucional de Capacitación/04. 2022/CONSOLIDADO PLAN INSTITUCIONAL DE CAPACITACION 2022.pdf',
              },
              {
                id: 6,
                tipo: 'pdf',
                nombre: 'PLAN INSTITUCIONAL DE CAPACITACION 2022.pdf',
                url: '/assets/files/planes/plan_gestion_humana/02. Plan Institucional de Capacitación/04. 2022/PLAN INSTITUCIONAL DE CAPACITACION 2022.pdf',
              },
            ],
          },
        ],
      },
      {
        id: 3,
        nombre: 'Plan Estratégico de Talento Humano',
        acordion: [
          {
            id: 1,
            nombre: '2025',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'PLAN ESTRATEGICO DE TALENTO HUMANO FPS-FNC 2025.pdf',
                 url: '/assets/files/planes/plan_gestion_humana/03. Plan Estratégico de Talento Humano/01. 2025/PLAN ESTRATEGICO DE TALENTO HUMANO FPS-FNC 2025 V2-.pdf',
              },
            ],
          },
          {
            id: 2,
            nombre: '2024',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'PLAN ESTRATEGICO DE TALENTO HUMANO FPS-FNC 2024.pdf',
                url: '/assets/files/planes/plan_gestion_humana/03. Plan Estratégico de Talento Humano/02. 2024/PLAN ESTRATEGICO DE TALENTO HUMANO FPS-FNC 2024.pdf',
              },
            ],
          },
          {
            id: 3,
            nombre: '2023',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'PLAN ESTRATEGICO DE TALENTO HUMANO FPS-FNC 2023.pdf',
                url: '/assets/files/planes/plan_gestion_humana/03. Plan Estratégico de Talento Humano/03. 2023/PLAN ESTRATEGICO DE TALENTO HUMANO FPS-FNC 2023.pdf',
              },
            ],
          },
          {
            id: 4,
            nombre: '2022',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: '2. PLAN ESTRATEGICO DE TALENTO HUMANO 2022.pdf',
                url: '/assets/files/planes/plan_gestion_humana/03. Plan Estratégico de Talento Humano/04. 2022/2. PLAN ESTRATEGICO DE TALENTO HUMANO 2022.pdf',
              },
            ],
          },
          {
            id: 5,
            nombre: '2021',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'PLAN ESTRATEGICO DE TALENTO HUMANO 2021.pdf',
                url: '/assets/files/planes/plan_gestion_humana/03. Plan Estratégico de Talento Humano/05. 2021/PLAN ESTRATEGICO DE TALENTO HUMANO 2021.pdf',
              },
            ],
          },
          {
            id: 6,
            nombre: '2020',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'PLAN  ESTRATEGICO DE TALENTO HUMANO 2020.pdf',
                url: '/assets/files/planes/plan_gestion_humana/03. Plan Estratégico de Talento Humano/06. 2020/PLAN  ESTRATEGICO DE TALENTO HUMANO 2020.pdf',
              },
            ],
          },
          {
            id: 7,
            nombre: '2019',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'PlanEstrategicoRecursosHumanos2019.pdf',
                url: '/assets/files/planes/plan_gestion_humana/03. Plan Estratégico de Talento Humano/07. 2019/PlanEstrategicoRecursosHumanos2019.pdf',
              },
            ],
          },
          {
            id: 8,
            nombre: '2018',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'PlanEstrategicoRecursosHumanos.pdf',
                url: '/assets/files/planes/plan_gestion_humana/03. Plan Estratégico de Talento Humano/08. 2018/PlanEstrategicoRecursosHumanos.pdf',
              },
            ],
          },
        ],
      },
      {
        id: 4,
        nombre: 'Plan Anual de Seguridad y Salud en el Trabajo',
        acordion: [
          {
            id: 1,
            nombre: '2025',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'PLAN ANUAL DE TRABAJO SST-2025.pdf',
                url: '/assets/files/planes/plan_gestion_humana/04. Plan Anual de Seguridad y Salud en el Trabajo/01. 2025/PLAN ANUAL DE TRABAJO SST-2025.pdf',
              },
            ],
          },
          {
            id: 2,
            nombre: '2024',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'PLAN  ANUAL DE TRABAJO SST 2024 x f (1).pdf',
                url: '/assets/files/planes/plan_gestion_humana/04. Plan Anual de Seguridad y Salud en el Trabajo/02. 2024/PLAN  ANUAL DE TRABAJO SST 2024 x f (1).pdf',
              },
            ],
          },
          {
            id: 3,
            nombre: '2023',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'PLAN  ANUAL DE TRABAJO SST 2023.pdf',
                url: '/assets/files/planes/plan_gestion_humana/04. Plan Anual de Seguridad y Salud en el Trabajo/03. 2023/PLAN  ANUAL DE TRABAJO SST 2023.pdf',
              },
            ],
          },
          {
            id: 4,
            nombre: '2022',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre:
                  '6-PLAN DE TRABAJO EN SEGURIDAD Y SALUD EN EL TRABAJO 2022.pdf',
                url: '/assets/files/planes/plan_gestion_humana/04. Plan Anual de Seguridad y Salud en el Trabajo/04. 2022/6-PLAN DE TRABAJO EN SEGURIDAD Y SALUD EN EL TRABAJO 2022.pdf',
              },
            ],
          },
          {
            id: 5,
            nombre: '2021',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'ASIGNACION RESPONSABLE SG-SST.pdf',
                url: '/assets/files/planes/plan_gestion_humana/04. Plan Anual de Seguridad y Salud en el Trabajo/05. 2021/ASIGNACION RESPONSABLE SG-SST.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre: 'PLAN DE CAPACITACION SGSST 2021.pdf',
                url: '/assets/files/planes/plan_gestion_humana/04. Plan Anual de Seguridad y Salud en el Trabajo/05. 2021/PLAN DE CAPACITACION SGSST 2021.pdf',
              },
              {
                id: 3,
                tipo: 'pdf',
                nombre: 'PLAN DE TRABAJO ANUAL 2021.pdf',
                url: '/assets/files/planes/plan_gestion_humana/04. Plan Anual de Seguridad y Salud en el Trabajo/05. 2021/PLAN DE TRABAJO ANUAL 2021.pdf',
              },
            ],
          },
        ],
      },
      {
        id: 5,
        nombre: 'Plan Institucional de Incentivos',
        acordion: [
          {
            id: 1,
            nombre: '2025',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'PLAN INSTITUCIONAL DE INCENTIVOS 2025.pdf',
                url: '/assets/files/planes/plan_gestion_humana/05. Plan Institucional de Incentivos/01. 2025/PLAN INSTITUCIONAL DE INCENTIVOS 2025.pdf',
              },
            ],
          },
          {
            id: 2,
            nombre: '2024',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'PLAN INSTITUCIONAL DE INCENTIVOS 2024.pdf',
                url: '/assets/files/planes/plan_gestion_humana/05. Plan Institucional de Incentivos/02. 2024/PLAN INSTITUCIONAL DE INCENTIVOS 2024.pdf',
              },
            ],
          },
          {
            id: 3,
            nombre: '2023',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'PLAN INSTITUCIONAL DE INCENTIVOS.pdf',
                url: '/assets/files/planes/plan_gestion_humana/05. Plan Institucional de Incentivos/03. 2023/PLAN INSTITUCIONAL DE INCENTIVOS.pdf',
              },
            ],
          },
          {
            id: 4,
            nombre: '2022',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: '7. PLAN DE INSTITUCIONAL DE INCENTIVOS 2022.pdf',
                url: '/assets/files/planes/plan_gestion_humana/05. Plan Institucional de Incentivos/04. 2022/7. PLAN DE INSTITUCIONAL DE INCENTIVOS 2022 .pdf',
              },
            ],
          },
          {
            id: 5,
            nombre: '2021',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'PLAN DE INCENTIVOS 2021 - Resolución.pdf',
                url: '/assets/files/planes/plan_gestion_humana/05. Plan Institucional de Incentivos/05. 2021/PLAN DE INCENTIVOS 2021 - Resolución.pdf',
              },
            ],
          },
        ],
      },
      {
        id: 6,
        nombre: 'Plan Anual de Vacantes y Previsión',
        acordion: [
          {
            id: 1,
            nombre: '2025',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre:
                  'PLAN ANUAL DE VACANTES Y PREVISION DE EMPLEOS VIGENCIA 2025.pdf',
                url: '/assets/files/planes/plan_gestion_humana/06. Plan Anual de Vacantes y Previsión/01. 2025/PLAN ANUAL DE VACANTES Y PREVISION DE EMPLEOS VIGENCIA 2025.pdf',
              },
            ],
          },
          {
            id: 2,
            nombre: '2024',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre:
                  'PLAN ANUAL DE VACANTES Y PREVISIÓN DE TALENTO HUMANO FPS-FNC 2024.pdf',
                url: '/assets/files/planes/plan_gestion_humana/06. Plan Anual de Vacantes y Previsión/02. 2024/PLAN ANUAL DE VACANTES Y PREVISIÓN DE TALENTO HUMANO FPS-FNC 2024.pdf',
              },
            ],
          },
          {
            id: 3,
            nombre: '2023',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre:
                  'PLAN ANUAL DE VACANTES Y PREVISIÓN DE TALENTO HUMANO FPS-FNC 2023.pdf',
                url: '/assets/files/planes/plan_gestion_humana/06. Plan Anual de Vacantes y Previsión/03. 2023/PLAN ANUAL DE VACANTES Y PREVISIÓN DE TALENTO HUMANO FPS-FNC 2023.pdf',
              },
            ],
          },
          {
            id: 4,
            nombre: '2022',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: '1. PLAN ANUAL DE VACANTES 2022.pdf',
                url: '/assets/files/planes/plan_gestion_humana/06. Plan Anual de Vacantes y Previsión/04. 2022/1. PLAN ANUAL DE VACANTES 2022.pdf',
              },
            ],
          },
          {
            id: 5,
            nombre: '2021',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'PLAN ANUAL DE VACANTES 2021.pdf',
                url: '/assets/files/planes/plan_gestion_humana/06. Plan Anual de Vacantes y Previsión/05. 2021/PLAN ANUAL DE VACANTES 2021.pdf',
              },
            ],
          },
          {
            id: 6,
            nombre: '2020',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'PLAN ANUAL DE VACANTES 2020.pdf',
                url: '/assets/files/planes/plan_gestion_humana/06. Plan Anual de Vacantes y Previsión/06. 2020/PLAN  ANUAL DE VACANTES 2020.pdf',
              },
            ],
          },
          {
            id: 7,
            nombre: '2018',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'PlanVacantes2018.pdf',
                url: '/assets/files/planes/plan_gestion_humana/06. Plan Anual de Vacantes y Previsión/07. 2018/PlanVacantes2018.pdf',
              },
            ],
          },
          {
            id: 8,
            nombre: '2019',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'PlanVacantes2019.pdf',
                url: '/assets/files/planes/plan_gestion_humana/06. Plan Anual de Vacantes y Previsión/08. 2019/PlanVacantes2019.pdf',
              },
            ],
          },
        ],
      },
      {
        id: 7,
        nombre: 'Plan de Acción Código de Integridad',
        files: [
          {
            id: 1,
            tipo: 'pdf',
            nombre: 'PLAN DE ACCIÓN - CÓDIGO DE INTEGRIDAD 2025.JPG',
            url: '/assets/files/planes/plan_gestion_humana/07. Plan de Acción Código de Integridad/Plan de acción - Código de integridad 2025.jpg',
          },
          {
            id: 1,
            tipo: 'pdf',
            nombre: '01 PLAN DE ACCIÓN CÓDIGO INTEGRIDAD 2024 FPS-FNC (2).pdf',
            url: '/assets/files/planes/plan_gestion_humana/07. Plan de Acción Código de Integridad/01 PLAN DE ACCIÓN CÓDIGO INTEGRIDAD 2024 FPS-FNC (2).pdf',
          },
          {
            id: 2,
            tipo: 'pdf',
            nombre: '02 Plan Código de Integridad 2023.pdf',
            url: '/assets/files/planes/plan_gestion_humana/07. Plan de Acción Código de Integridad/02 Plan Código de Integridad 2023.pdf',
          },
          {
            id: 3,
            tipo: 'pdf',
            nombre: '03 PLAN DE ACCION CODIGO DE INTEGRADAD 2022.pdf',
            url: '/assets/files/planes/plan_gestion_humana/07. Plan de Acción Código de Integridad/03 PLAN DE ACCION CODIGO DE INTEGRADAD 2022.pdf',
          },
          {
            id: 4,
            tipo: 'pdf',
            nombre: '04 PLAN CODIGO DE INTEGRIDAD 2021 I SEMESTRE.pdf',
            url: '/assets/files/planes/plan_gestion_humana/07. Plan de Acción Código de Integridad/04 PLAN CODIGO DE INTEGRIDAD 2021 I SEMESTRE.pdf',
          },
        ],
      },
      {
        id: 8,
        nombre: 'Plan de Reinducción',
        acordion: [
          {
            id: 1,
            nombre: '2023',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'PLAN DE REINDUCCIÓN 2023 (2).pdf',
                url: '/assets/files/planes/plan_gestion_humana/08. Plan de Reinducción/01. 2023/PLAN DE REINDUCCIÓN 2023 (2).pdf',
              },
            ],
          },
          {
            id: 2,
            nombre: '2020',
            files: [
              {
                id: 2,
                tipo: 'pdf',
                nombre:
                  'PLAN DE REINDUCCIÓN DEL FONDO DE PASIVO SOCIAL DE FNC 2020.pdf',
                url: '/assets/files/planes/plan_gestion_humana/08. Plan de Reinducción/02. 2020/PLAN DE REINDUCCIÓN DEL FONDO DE PASIVO SOCIAL DE FNC 2020.pdf',
              },
            ],
          },
          {
            id: 3,
            nombre: '2018',
            files: [
              {
                id: 3,
                tipo: 'pdf',
                nombre: 'PlanReinduccion2018.pdf',
                url: '/assets/files/planes/plan_gestion_humana/08. Plan de Reinducción/03. 2018/PlanReinduccion2018.pdf',
              },
            ],
          },
        ],
      },
      {
        id: 8,
        nombre: 'Plan de Capacitaciones de Seguridad',
        files: [
          {
            id: 1,
            tipo: 'pdf',
            nombre: '5-PLAN DE CAPACITACIONES DE SEGURIDAD 2022.pdf',
            url: '/assets/files/planes/plan_gestion_humana/09. Plan de Capacitaciones de Seguridad/5-PLAN DE CAPACITACIONES DE SEGURIDAD 2022.pdf',
          },
        ],
      },
    ];
  }
}
