import { Component } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { NgFor } from '@angular/common';
import { AcordionFiles } from '../../../interfaces/acordion';

@Component({
  selector: 'app-plan-accion',
  standalone: true,
  imports: [NgbAccordionModule, NgFor],
  templateUrl: './plan-accion.component.html',
  styleUrl: './plan-accion.component.css',
})
export class PlanAccionComponent {
  items: AcordionFiles[] = [];
  constructor() {
    this.items = [
      {
        id: 1,
        nombre: '2025',
        files: [
          {
            id: 1,
            tipo: 'excel',
            url: '/assets/files/planes/plan_accion/2025/PLAN DE ACCION 2025 .xlsx',
            nombre: 'PLAN DE ACCIÓN 2025.xlsx',
          },
          {
            id: 2,
            tipo: 'excel',
            url: '/assets/files/planes/plan_accion/2025/PROYECTO PLAN DE ACCION 2025.xlsx',
            nombre: 'PROYECTO PLAN DE ACCION 2025.xlsx',
          },
        ],
      },
      {
        id: 1,
        nombre: '2024',
        files: [
          {
            id: 1,
            tipo: 'excel',
            url: '/assets/files/planes/plan_accion/01.%202024/FORMULACI%c3%93N%20PLAN%20DE%20ACCI%c3%93N%202024%20FPS.xlsx',
            nombre: 'FORMULACIÓN PLAN DE ACCIÓN 2024 FPS.xlsx',
          },
          {
            id: 2,
            tipo: 'excel',
            url: '/assets/files/planes/plan_accion/01.%202024/PLAN%20DE%20ACCI%c3%93N%202024%20FPS%20-%20CONSULTA%20A%20LA%20CIUDADAN%c3%8dA.xlsx',
            nombre: 'PLAN DE ACCIÓN 2024 FPS - CONSULTA A LA CIUDADANÍA.xlsx',
          },

          {
            id: 3,
            tipo: 'excel',
            url: '/assets/files/planes/plan_accion/01.%202024/PLAN DE ACCIO_N 2024 II SEM Y ANUAL.xlsx',
            nombre: 'PLAN DE ACCIÓN 2024 II SEM Y ANUAL.xlsx',
          },
        ],
      },
      {
        id: 2,
        nombre: '2023',
        files: [
          {
            id: 1,
            tipo: 'excel',
            url: '/assets/files/planes/plan_accion/02.%202023/01.%20PLAN%20DE%20ACCI%c3%93N%202023.xlsx',
            nombre: '01. PLAN DE ACCIÓN 2023.xlsx',
          },
          {
            id: 2,
            tipo: 'excel',
            url: '/assets/files/planes/plan_accion/02.%202023/02.%20PLAN%20DE%20ACCI%c3%93N%20VERSI%c3%93N%201.0%2031-01-2023.xlsx',
            nombre: '02. PLAN DE ACCIÓN VERSIÓN 1.0 31-01-2023.xlsx',
          },
          {
            id: 3,
            tipo: 'excel',
            url: '/assets/files/planes/plan_accion/02.%202023/03%20PLAN%20DE%20ACCI%c3%92N%20VIGENCIA%202023%20I%20-%20II%20SEMESTRE%20Y%20ANUAL.xlsx',
            nombre:
              '03 PLAN DE ACCIÒN VIGENCIA 2023 I - II SEMESTRE Y ANUAL.xlsx',
          },
        ],
      },
      {
        id: 3,
        nombre: '2022',
        files: [
          {
            id: 1,
            tipo: 'excel',
            url: '/assets/files/planes/plan_accion/03.%202022/01%20PLAN%20DE%20ACCIO%cc%81N%202022%20-%20CONSULTA%20CIUDADANA.xlsx',
            nombre: '01 PLAN DE ACCIÓN 2022 - CONSULTA CIUDADANA.xlsx',
          },
          {
            id: 2,
            tipo: 'excel',
            url: '/assets/files/planes/plan_accion/03.%202022/02%20PLAN%20DE%20ACCIO%cc%81N%202022%20-%20APROBADO.xlsx',
            nombre: '02 PLAN DE ACCIÓN 2022 - APROBADO.xlsx',
          },
        ],
      },
      {
        id: 4,
        nombre: '2021',
        files: [
          {
            id: 1,
            tipo: 'excel',
            url: '/assets/files/planes/plan_accion/04.%202021/01%20FORMULACI%c3%93N%20PLAN%20DE%20ACCION%20FPS%20FNC%20V1.0.xls',
            nombre: '01 FORMULACIÓN PLAN DE ACCION FPS FNC V1.0.xls',
          },
          {
            id: 2,
            tipo: 'pdf',
            url: '/assets/files/planes/plan_accion/04.%202021/01%20FORMULACI%c3%93N%20PLAN%20DE%20ACCION%20FPS%20FNC%20VERSI%c3%93N%201.0.pdf',
            nombre: '01 FORMULACIÓN PLAN DE ACCION FPS FNC VERSIÓN 1.0.pdf',
          },
          {
            id: 3,
            tipo: 'excel',
            url: '/assets/files/planes/plan_accion/04.%202021/02%20FORMULACION%20%20PLAN%20ESTRATEGICO%20FPS%20V2%20JUNIO.xls',
            nombre: '02 FORMULACION PLAN ESTRATEGICO FPS V2 JUNIO.xls',
          },
        ],
      },
      {
        id: 5,
        nombre: '2020',
        files: [
          {
            id: 1,
            tipo: 'pdf',
            url: '/assets/files/planes/plan_accion/05.%202020/PLAN_ACCION_2020_2020.pdf',
            nombre: 'PLAN_ACCION_2020_2020.pdf',
          },
        ],
      },
      {
        id: 6,
        nombre: '2019',
        files: [
          {
            id: 1,
            tipo: 'pdf',
            url: '/assets/files/planes/plan_accion/06.%202019/DISTRIBUCION_PRESUPUESTAL_PROYECTOS_DE_INVERSION.pdf',
            nombre: 'DISTRIBUCION_PRESUPUESTAL_PROYECTOS_DE_INVERSION.pdf',
          },
          {
            id: 2,
            tipo: 'excel',
            url: '/assets/files/planes/plan_accion/06.%202019/PLAN_DE_ACCION%202019.xls',
            nombre: 'PLAN_DE_ACCION 2019.xls',
          },
          {
            id: 3,
            tipo: 'excel',
            url: '/assets/files/planes/plan_accion/06.%202019/PLAN_DE_ACCION%202019v2.xls',
            nombre: 'PLAN_DE_ACCION 2019v2.xls',
          },
          {
            id: 4,
            tipo: 'excel',
            url: '/assets/files/planes/plan_accion/06.%202019/PLAN_DE_ACCION_2019v3.xls',
            nombre: 'PLAN_DE_ACCION_2019v3.xls',
          },
          {
            id: 5,
            tipo: 'excel',
            url: '/assets/files/planes/plan_accion/06.%202019/PLAN_DE_ACCION_2019v4.xls',
            nombre: 'PLAN_DE_ACCION_2019v4.xls',
          },
          {
            id: 6,
            tipo: 'excel',
            url: '/assets/files/planes/plan_accion/06.%202019/SEGUIMIENTO%20PLAN%20DE%20ACCION%20I%20SEMESTRE2019.xls',
            nombre: 'SEGUIMIENTO PLAN DE ACCION I SEMESTRE2019.xls',
          },
        ],
      },
      {
        id: 7,
        nombre: '2018',
        files: [
          {
            id: 1,
            tipo: 'excel',
            url: '/assets/files/planes/plan_accion/07.%202018/PLAN_DE_ACCION_2018.xls',
            nombre: 'PLAN_DE_ACCION_2018.xls',
          },
          {
            id: 2,
            tipo: 'excel',
            url: '/assets/files/planes/plan_accion/07.%202018/SEGUIMIENTO%20PLAN%20DE%20ACCION%20I%20SEMESTRE2018.xls',
            nombre: 'SEGUIMIENTO PLAN DE ACCION I SEMESTRE2018.xls',
          },
          {
            id: 3,
            tipo: 'excel',
            url: '/assets/files/planes/plan_accion/07.%202018/SEGUIMIENTO%20PLAN%20DE%20ACCION%20II%20SEMESTRE2018.xls',
            nombre: 'SEGUIMIENTO PLAN DE ACCION II SEMESTRE2018.xls',
          },
        ],
      },
      {
        id: 8,
        nombre: '2017',
        files: [
          {
            id: 1,
            tipo: 'excel',
            url: '/assets/files/planes/plan_accion/08.%202017/PLAN_DE_ACCION_2017.xls',
            nombre: 'PLAN_DE_ACCION_2017.xls',
          },
          {
            id: 2,
            tipo: 'excel',
            url: '/assets/files/planes/plan_accion/08.%202017/SEGUIMIENTO%20PLAN%20DE%20ACCION%20I%20SEMESTRE2017.xls',
            nombre: 'SEGUIMIENTO PLAN DE ACCION I SEMESTRE2017.xls',
          },
          {
            id: 3,
            tipo: 'excel',
            url: '/assets/files/planes/plan_accion/08.%202017/SEGUIMIENTO%20PLAN%20DE%20ACCION%20II%20SEMESTRE2017.xls',
            nombre: 'SEGUIMIENTO PLAN DE ACCION II SEMESTRE2017.xls',
          },
        ],
      },
      {
        id: 9,
        nombre: '2016',
        files: [
          {
            id: 1,
            tipo: 'excel',
            url: '/assets/files/planes/plan_accion/09.%202016/PLAN_DE_ACCION_2016.xls',
            nombre: 'PLAN_DE_ACCION_2016.xls',
          },
          {
            id: 2,
            tipo: 'excel',
            url: '/assets/files/planes/plan_accion/09.%202016/SEGUIMIENTO%20PLAN%20DE%20ACCION%20I%20SEMESTRE2016.xls',
            nombre: 'SEGUIMIENTO PLAN DE ACCION I SEMESTRE2016.xls',
          },
        ],
      },
      {
        id: 10,
        nombre: '2015',
        files: [
          {
            id: 1,
            tipo: 'excel',
            url: '/assets/files/planes/plan_accion/10.%202015/PLAN_DE_ACCION_2015.xls',
            nombre: 'PLAN_DE_ACCION_2015.xls',
          },
          {
            id: 2,
            tipo: 'excel',
            url: '/assets/files/planes/plan_accion/10.%202015/SEGUIMIENTO%20PLAN%20DE%20ACCION%20I%20SEMESTRE2015.xls',
            nombre: 'SEGUIMIENTO PLAN DE ACCION I SEMESTRE2015.xls',
          },
          {
            id: 3,
            tipo: 'excel',
            url: '/assets/files/planes/plan_accion/10.%202015/SEGUIMIENTO%20PLAN%20DE%20ACCION%20II%20SEMESTRE2015.xls',
            nombre: 'SEGUIMIENTO PLAN DE ACCION II SEMESTRE2015.xls',
          },
        ],
      },
      {
        id: 11,
        nombre: '2014',
        files: [
          {
            id: 1,
            tipo: 'excel',
            url: '/assets/files/planes/plan_accion/11.%202014/PLAN_DE_ACCION_2014.xls',
            nombre: 'PLAN_DE_ACCION_2014.xls',
          },
          {
            id: 2,
            tipo: 'excel',
            url: '/assets/files/planes/plan_accion/11.%202014/SEGUIMIENTO%20PLAN%20DE%20ACCION%20I%20SEMESTRE2014.xls',
            nombre: 'SEGUIMIENTO PLAN DE ACCION I SEMESTRE2014.xls',
          },
          {
            id: 3,
            tipo: 'excel',
            url: '/assets/files/planes/plan_accion/11.%202014/SEGUIMIENTO%20PLAN%20DE%20ACCION%20II%20SEMESTRE2014.xls',
            nombre: 'SEGUIMIENTO PLAN DE ACCION II SEMESTRE2014.xls',
          },
        ],
      },
    ];
  }
}
