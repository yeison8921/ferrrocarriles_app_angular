import { Component } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { NgFor } from '@angular/common';
import { AcordionFiles } from '../../../interfaces/acordion';

@Component({
  selector: 'app-plan-estrategico',
  standalone: true,
  imports: [NgbAccordionModule, NgFor],
  templateUrl: './plan-estrategico.component.html',
  styleUrl: './plan-estrategico.component.css',
})
export class PlanEstrategicoComponent {
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
            url: '/assets/files/planes/plan_estrategico/2025/PLAN ESTRATÉGICO 2025 I SEMESTRE_new.xlsx',
            nombre: 'PLAN ESTRATÉGICO 2025 I SEMESTRE.xlsx',
          },
          {
            id: 1,
            tipo: 'excel',
            url: '/assets/files/planes/plan_estrategico/2025/PROYECTO PLAN ESTRATEGICO 2025.xlsx',
            nombre: 'PROYECTO PLAN ESTRATEGICO 2025.xlsx',
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
            url: '/assets/files/planes/plan_estrategico/01.%202024/FORMULACI%c3%93N%20PLAN%20DE%20ESTRAT%c3%89GICO%20INSTITUCIONAL%20%202024%20V2.0.xlsx',
            nombre:
              '01. FORMULACIÓN PLAN DE ESTRATÉGICO INSTITUCIONAL  2024 V2.0.xlsx',
          },
          {
            id: 2,
            tipo: 'excel',
            url: '/assets/files/planes/plan_estrategico/01.%202024/PLAN%20DE%20ESTRAT%c3%89GICO%202024-%20FPS%20-%20CONSULTA%20A%20LA%20CIUDADAN%c3%8dA.xlsx',
            nombre:
              '02. PLAN DE ESTRATÉGICO 2024- FPS - CONSULTA A LA CIUDADANÍA.xlsx',
          },
          {
            id: 3,
            tipo: 'excel',
            url: '/assets/files/planes/plan_estrategico/01.%202024/SEGUIMIENTO PLAN ESTRATA_GICO I Y II SEM 2024.xlsx',
            nombre:
              '03. SEGUIMIENTO PLAN ESTRATÉGICO I Y II SEM 2024.xlsx',
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
            url: '/assets/files/planes/plan_estrategico/02.%202023/01.%20PLAN%20ESTRAT%c3%89GICO%20FPS%202023%20.xlsx',
            nombre: '01. PLAN ESTRATÉGICO FPS 2023 .xlsx',
          },
          {
            id: 2,
            tipo: 'excel',
            url: '/assets/files/planes/plan_estrategico/02.%202023/02.%20PLAN%20ESTRAT%c3%89GICO%20FPS%20VERSI%c3%93N%201.0%20%2031-01-2023.xlsx',
            nombre: '02. PLAN ESTRATÉGICO FPS VERSIÓN 1.0  31-01-2023.xlsx',
          },
          {
            id: 3,
            tipo: 'excel',
            url: '/assets/files/planes/plan_estrategico/02.%202023/03.%20FORMULACI%c3%93N%20PLAN%20ESTRAT%c3%89GICO%202023-2026%20V.4.xlsx',
            nombre: '03. FORMULACIÓN PLAN ESTRATÉGICO 2023-2026 V.4.xlsx',
          },
          {
            id: 4,
            tipo: 'excel',
            url: '/assets/files/planes/plan_estrategico/02.%202023/04.%20SEGUIMIENTO%20PLAN%20ESTRAT%c3%89GICO%202023.xlsx',
            nombre: '04. SEGUIMIENTO PLAN ESTRATÉGICO 2023.xlsx',
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
            url: '/assets/files/planes/plan_estrategico/03.%202022/01%20PLAN%20ESTRAT%c3%89GICO%202022%20-%20CONSULTA%20CIUDADANA.xlsx',
            nombre: '01. PLAN ESTRATÉGICO 2022 - CONSULTA CIUDADANA.xlsx',
          },
          {
            id: 2,
            tipo: 'excel',
            url: '/assets/files/planes/plan_estrategico/03.%202022/02%20FORMATO%20PLAN%20ESTRAT%c3%89GICO%202022%20-%20APROBADO.xlsx',
            nombre: '02. FORMATO PLAN ESTRATÉGICO 2022 - APROBADO.xlsx',
          },
        ],
      },
      {
        id: 4,
        nombre: '2021',
        files: [
          {
            id: 1,
            tipo: 'pdf',
            url: '/assets/files/planes/plan_estrategico/04.%202021/FORMULACI%c3%93N%20%20PLAN%20ESTRATEGICO%20FPS%20VERSI%c3%93N%201.0.pdf',
            nombre: '01. FORMULACIÓN  PLAN ESTRATEGICO FPS VERSIÓN 1.0.pdf',
          },
          {
            id: 2,
            tipo: 'excel',
            url: '/assets/files/planes/plan_estrategico/04.%202021/FORMULACI%c3%93N%20PLAN%20ESTRATEGICO%20FPS%202021.xlsx',
            nombre: '02. FORMULACIÓN PLAN ESTRATEGICO FPS 2021.xlsx',
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
            url: '/assets/files/planes/plan_estrategico/05.%202020/FORMULACION%20PLAN%20ESTRATEGICO%202020%20V2.pdf',
            nombre: '01. FORMULACION PLAN ESTRATEGICO 2020 V2.pdf',
          },
          {
            id: 2,
            tipo: 'excel',
            url: '/assets/files/planes/plan_estrategico/05.%202020/FORMULACION_PLAN_ESTRATEGICO_FPS_2020.xlsx',
            nombre: '02. FORMULACION_PLAN_ESTRATEGICO_FPS_2020.xlsx',
          },
          {
            id: 3,
            tipo: 'excel',
            url: '/assets/files/planes/plan_estrategico/05.%202020/FORMULACI%c3%93N%20%20PLAN%20ESTRATEGICO%202020%20I%20SEMESTRE%20CON%20VERIFICACION%20DE%20CONTROL%20INTERNO.xlsx',
            nombre:
              '03. FORMULACIÓN  PLAN ESTRATEGICO 2020 I SEMESTRE CON VERIFICACION DE CONTROL INTERNO.xlsx',
          },
        ],
      },
      {
        id: 6,
        nombre: '2019',
        files: [
          {
            id: 1,
            tipo: 'excel',
            url: '/assets/files/planes/plan_estrategico/06.%202019/PLAN%20ESTRATEGICO%202019%20-FPS.xlsx',
            nombre: '01. PLAN ESTRATEGICO 2019 -FPS.xlsx',
          },
          {
            id: 2,
            tipo: 'excel',
            url: '/assets/files/planes/plan_estrategico/06.%202019/PLAN_ESTRATEGICO_2019_2022.xlsx',
            nombre: '02. PLAN_ESTRATEGICO_2019_2022.xlsx',
          },
          {
            id: 3,
            tipo: 'excel',
            url: '/assets/files/planes/plan_estrategico/06.%202019/plan%20estrategico%20revision%20I%20Trimestre%20de%202019.xlsx',
            nombre: '03. plan estrategico revision I Trimestre de 2019.xlsx',
          },
          {
            id: 4,
            tipo: 'excel',
            url: '/assets/files/planes/plan_estrategico/06.%202019/planESTRATEGICOII2019.xlsx',
            nombre: '04. PLAN ESTRATEGICO II 2019.xlsx',
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
            url: '/assets/files/planes/plan_estrategico/07.%202018/Formulacion%20Plan%20Estrategico2018.xls',
            nombre: '01. Formulacion Plan Estrategico 2018.xls',
          },
          {
            id: 2,
            tipo: 'excel',
            url: '/assets/files/planes/plan_estrategico/07.%202018/planESTRATEGICOI2018.xls',
            nombre: '02. PLAN ESTRATEGICO I2018.xls',
          },
          {
            id: 3,
            tipo: 'excel',
            url: '/assets/files/planes/plan_estrategico/07.%202018/planESTRATEGICOII2018.xls',
            nombre: '03. PLAN ESTRATEGICO II2018.xls',
          },
          {
            id: 4,
            tipo: 'excel',
            url: '/assets/files/planes/plan_estrategico/07.%202018/planESTRATEGICOIII2018.xls',
            nombre: '04. PLAN ESTRATEGICO III2018.xls',
          },
          {
            id: 5,
            tipo: 'excel',
            url: '/assets/files/planes/plan_estrategico/07.%202018/planESTRATEGICOIV2018.xls',
            nombre: '05. PLAN ESTRATEGICO IV2018.xls',
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
            url: '/assets/files/planes/plan_estrategico/08.%202017/Formulacion%20Plan%20Estrategico2017.xls',
            nombre: '01. Formulacion Plan Estrategico 2017.xls',
          },
          {
            id: 2,
            tipo: 'excel',
            url: '/assets/files/planes/plan_estrategico/08.%202017/planESTRATEGICOI2017.xls',
            nombre: '02. PLAN ESTRATEGICO I 2017.xls',
          },
          {
            id: 3,
            tipo: 'excel',
            url: '/assets/files/planes/plan_estrategico/08.%202017/planESTRATEGICOII2017.xls',
            nombre: '03. PLAN ESTRATEGICO II 2017.xls',
          },
          {
            id: 4,
            tipo: 'excel',
            url: '/assets/files/planes/plan_estrategico/08.%202017/planESTRATEGICOIII2017.xls',
            nombre: '04. PLAN ESTRATEGICO III 2017.xls',
          },
          {
            id: 5,
            tipo: 'excel',
            url: '/assets/files/planes/plan_estrategico/08.%202017/planESTRATEGICOIV2017.xls',
            nombre: '05. PLAN ESTRATEGICO IV 2017.xls',
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
            url: './../aym_document/aym_plan_estrategico/09.%202016/Formulacion%20Plan%20Estrategico2016.xls',
            nombre: '01. Formulacion Plan Estrategico 2016.xls',
          },
          {
            id: 2,
            tipo: 'excel',
            url: '/assets/files/planes/plan_estrategico/09.%202016/planESTRATEGICOI2016.xls',
            nombre: '02. PLAN ESTRATEGICO I 2016.xls',
          },
          {
            id: 3,
            tipo: 'excel',
            url: '/assets/files/planes/plan_estrategico/09.%202016/planESTRATEGICOII2016.xls',
            nombre: '03. PLAN ESTRATEGICO II 2016.xls',
          },
          {
            id: 4,
            tipo: 'excel',
            url: '/assets/files/planes/plan_estrategico/09.%202016/planESTRATEGICOIII2016.xls',
            nombre: '04. PLAN ESTRATEGICO III 2016.xls',
          },
          {
            id: 5,
            tipo: 'excel',
            url: '/assets/files/planes/plan_estrategico/09.%202016/planESTRATEGICOIV2016.xls',
            nombre: '05. PLAN ESTRATEGICO IV 2016.xls',
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
            url: '/assets/files/planes/plan_estrategico/10.%202015/Formulacion%20Plan%20Estrategico2015.xls',
            nombre: '01. Formulacion Plan Estrategico 2015.xls',
          },
          {
            id: 2,
            tipo: 'excel',
            url: '/assets/files/planes/plan_estrategico/10.%202015/planESTRATEGICOI2015.xls',
            nombre: '02. PLAN ESTRATEGICO I 2015.xls',
          },
          {
            id: 3,
            tipo: 'excel',
            url: '/assets/files/planes/plan_estrategico/10.%202015/planESTRATEGICOIII2015.xls',
            nombre: '03. PLAN ESTRATEGICO III 2015.xls',
          },
          {
            id: 4,
            tipo: 'excel',
            url: '/assets/files/planes/plan_estrategico/10.%202015/planESTRATEGICOIV2015.xls',
            nombre: '04. PLAN ESTRATEGICO IV 2015.xls',
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
            url: '/assets/files/planes/plan_estrategico/11.%202014/planESTRATEGICO2014.xls',
            nombre: '01. PLAN ESTRATEGICO 2014.xls',
          },
          {
            id: 2,
            tipo: 'excel',
            url: '/assets/files/planes/plan_estrategico/11.%202014/planESTRATEGICOII2014.xls',
            nombre: '02. PLAN ESTRATEGICO II 2014.xls',
          },
          {
            id: 3,
            tipo: 'excel',
            url: '/assets/files/planes/plan_estrategico/11.%202014/planESTRATEGICOIII2014.xls',
            nombre: '03. PLAN ESTRATEGICO III 2014.xls',
          },
          {
            id: 4,
            tipo: 'excel',
            url: '/assets/files/planes/plan_estrategico/11.%202014/planESTRATEGICOIV2014.xls',
            nombre: '04. PLAN ESTRATEGICO IV2 014.xls',
          },
        ],
      },
      {
        id: 12,
        nombre: '2013',
        files: [
          {
            id: 1,
            tipo: 'excel',
            url: '/assets/files/planes/plan_estrategico/12.%202013/planESTRATEGICO2013.xls',
            nombre: '01. PLAN ESTRATEGICO 2013.xls',
          },
        ],
      },
    ];
  }
}
