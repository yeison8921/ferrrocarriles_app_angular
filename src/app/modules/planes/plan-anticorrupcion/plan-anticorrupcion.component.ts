import { Component } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { AcordionAnidadoFiles } from '../../../interfaces/acordion';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-plan-anticorrupcion',
  standalone: true,
  imports: [NgbAccordionModule, NgFor],
  templateUrl: './plan-anticorrupcion.component.html',
  styleUrl: './plan-anticorrupcion.component.css',
})
export class PlanAnticorrupcionComponent {
  items: AcordionAnidadoFiles[] = [];
  constructor() {
    this.items = [
      {
        id: 1,
        nombre: '2024',
        files: [
          {
            id: 1,
            tipo: 'excel',
            url: '/assets/files/planes/plan_anticorrupcion/01.%202024/FORMUALACI%c3%93N%20PLAN%20ANTICORRUPCI%c3%93N%20A.C%202024..xls',
            nombre: 'FORMUALACIÓN PLAN ANTICORRUPCIÓN A.C 2024..xls',
          },
          {
            id: 2,
            tipo: 'excel',
            url: '/assets/files/planes/plan_anticorrupcion/01.%202024/PAAC%202024%20CONSULTA%20A%20LA%20CIUDADANA%20FPS.xlsx',
            nombre: 'PAAC 2024 CONSULTA A LA CIUDADANA FPS.xlsx',
          },
          {
            id: 3,
            tipo: 'excel',
            url: '/assets/files/planes/plan_anticorrupcion/01.%202024/Seguimiento%20Plan%20Anticorrupcion%20y%20%20Atencion%20al%20Ciudadano%20I%20cuatrimestre%202024.xls',
            nombre:
              'Seguimiento Plan Anticorrupcion y  Atencion al Ciudadano I cuatrimestre 2024.xls',
          },
          {
            id: 3,
            tipo: 'excel',
            url: '/assets/files/planes/plan_anticorrupcion/01.%202024/Seguimiento Plan Anticorrupcion y  Atencion al Ciudadano II cuatrimestre 2024 (2).xls',
            nombre:
              'Seguimiento Plan Anticorrupcion y  Atencion al Ciudadano II cuatrimestre 2024.xls',
          },
          {
            id: 3,
            tipo: 'excel',
            url: '/assets/files/planes/plan_anticorrupcion/01.%202024/Seguimiento Plan Anticorrupcion y  Atencion al Ciudadano III cuatrimestre 2024.xls',
            nombre:
              'Seguimiento Plan Anticorrupcion y  Atencion al Ciudadano III cuatrimestre 2024.xls',
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
            url: '/assets/files/planes/plan_anticorrupcion/02.%202023/01.%20PLAN%20ANTICORRUPCI%c3%93N%20Y%20ATENCI%c3%93N%20AL%20CIUDADANO%202023.xls',
            nombre: '01. PLAN ANTICORRUPCIÓN Y ATENCIÓN AL CIUDADANO 2023.xls',
          },
          {
            id: 2,
            tipo: 'excel',
            url: '/assets/files/planes/plan_anticorrupcion/02.%202023/02.%20PLAN%20ANTICORRUPCI%c3%93N%20Y%20ATENCI%c3%93N%20AL%20CIUDADANO%20VERSI%c3%93N%201.0%2031-01-2023.xls',
            nombre:
              '02. PLAN ANTICORRUPCIÓN Y ATENCIÓN AL CIUDADANO VERSIÓN 1.0 31-01-2023.xls',
          },
          {
            id: 3,
            tipo: 'excel',
            url: '/assets/files/planes/plan_anticorrupcion/02.%202023/03.%20PLAN%20ANTICORRUPCI%c3%93N%20Y%20ATENCI%c3%93N%20AL%20CIUDADANO%20VERSI%c3%93N%202.0%2014-06-2023.xls',
            nombre:
              '03. PLAN ANTICORRUPCIÓN Y ATENCIÓN AL CIUDADANO VERSIÓN 2.0 14-06-2023.xls',
          },
          {
            id: 4,
            tipo: 'excel',
            url: '/assets/files/planes/plan_anticorrupcion/02.%202023/04.%20PAAC%20II%20CUATRIMESTRE%202023.xls',
            nombre: '04. PAAC II CUATRIMESTRE 2023.xls',
          },
          {
            id: 5,
            tipo: 'excel',
            url: '/assets/files/planes/plan_anticorrupcion/02.%202023/05.%20SEGUIMIENTO%20PLAN%20ANTICORRUPCION%20Y%20ATENCION%20AL%20CIUDADANO%20%20III%20CUATRIMESTRE%202023%20FPS%2031-%2001-2024...xls',
            nombre:
              '05. SEGUIMIENTO PLAN ANTICORRUPCION Y ATENCION AL CIUDADANO  III CUATRIMESTRE 2023 FPS 31- 01-2024...xls',
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
            url: '/assets/files/planes/plan_anticorrupcion/03.%202022/01.%20PLAN%20ANTICORRUPCI%c3%93N%20Y%20ATENCI%c3%93N%20AL%20CIUDADANO%202022%20-%20CONSULTA%20CIUDADANA.xls',
            nombre:
              '01. PLAN ANTICORRUPCIÓN Y ATENCIÓN AL CIUDADANO 2022 - CONSULTA CIUDADANA.xls',
          },
          {
            id: 2,
            tipo: 'excel',
            url: '/assets/files/planes/plan_anticorrupcion/03.%202022/02.%20PLAN%20ANTICORRUPCI%c3%93N%20Y%20ATENCI%c3%93N%20AL%20CIUDADANO%202022%20-%20APROBADO.xls',
            nombre:
              '02. PLAN ANTICORRUPCIÓN Y ATENCIÓN AL CIUDADANO 2022 - APROBADO.xls',
          },
          {
            id: 3,
            tipo: 'excel',
            url: '/assets/files/planes/plan_anticorrupcion/03.%202022/03.%20Mapa%20de%20Riesgos%20Institucionales.xlsx',
            nombre: '03. Mapa de Riesgos Institucionales.xlsx',
          },
          {
            id: 4,
            tipo: 'pdf',
            url: '/assets/files/planes/plan_anticorrupcion/03.%202022/04.%20Plan%20Anticorrupci%c3%b3n2022%20VERSI%c3%93N%201.0.pdf',
            nombre: '04. Plan Anticorrupción2022 VERSIÓN 1.0.pdf',
          },
          {
            id: 5,
            tipo: 'excel',
            url: '/assets/files/planes/plan_anticorrupcion/03.%202022/05.%20Matriz%20Plan%20Anticorrupci%c3%b3n%20y%20Atenci%c3%b3n%20al%20ciudadano%202022%20V2.xls',
            nombre:
              '5. Matriz Plan Anticorrupción y Atención al ciudadano 2022 V2.xls',
          },
          {
            id: 6,
            tipo: 'pdf',
            url: '/assets/files/planes/plan_anticorrupcion/03.%202022/06.%20Plan%20Anticorrupci%c3%b3n%20y%20Atenci%c3%b3n%20al%20ciudadano%202022%20V2.pdf',
            nombre:
              '06. Plan Anticorrupción y Atención al ciudadano 2022 V2.pdf',
          },
          {
            id: 7,
            tipo: 'excel',
            url: '/assets/files/planes/plan_anticorrupcion/03.%202022/07.%20SEGUIMIENTO%20PLAN%20ANTICORRUPCI%c3%93N%20Y%20ATENCI%c3%93N%20AL%20CIUDADANO%20I%20CUATRIMESTRE%202022.xls',
            nombre:
              '07. SEGUIMIENTO PLAN ANTICORRUPCIÓN Y ATENCIÓN AL CIUDADANO I CUATRIMESTRE 2022.xls',
          },

          {
            id: 8,
            tipo: 'excel',
            url: '/assets/files/planes/plan_anticorrupcion/03.%202022/08.%20SEGUIMIENTO%20PLAN%20ANTICORRUPCI%c3%93N%20Y%20ATENCI%c3%93N%20AL%20CIUDADANO%20III%20CUATRIMESTRE%202022.xls',
            nombre:
              '08. SEGUIMIENTO PLAN ANTICORRUPCIÓN Y ATENCIÓN AL CIUDADANO III CUATRIMESTRE 2022.xls',
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
            url: '/assets/files/planes/plan_anticorrupcion/04.%202021/01.%20Formulaci%c3%b3n%20Plan%20Anticorrupci%c3%b3n%20y%20Atenci%c3%b3n%20al%20Ciudadano%20FPS%20V1.0.xls',
            nombre:
              '01. Formulación Plan Anticorrupción y Atención al Ciudadano FPS V1.0.xls',
          },
          {
            id: 2,
            tipo: 'excel',
            url: '/assets/files/planes/plan_anticorrupcion/04.%202021/02.%20PLAN%20ANTICORRUPCI%c3%93N%20Y%20ATENCI%c3%93N%20AL%20CIUDADANO%20FPS.xls',
            nombre: '02. PLAN ANTICORRUPCIÓN Y ATENCIÓN AL CIUDADANO FPS.xls',
          },
          {
            id: 3,
            tipo: 'pdf',
            url: '/assets/files/planes/plan_anticorrupcion/04.%202021/03%20Plan%20Anticorrupci%c3%b3n2021%20VERSI%c3%93N%201.0.pdf',
            nombre: '03 Plan Anticorrupción2021 VERSIÓN 1.0.pdf',
          },
          {
            id: 4,
            tipo: 'word',
            url: '/assets/files/planes/plan_anticorrupcion/04.%202021/04%20Proyecto%20Plan%20Anticorrupci%c3%b3n%202021-FPS-FCN.doc',
            nombre: '04 Proyecto Plan Anticorrupción 2021-FPS-FCN.doc',
          },
          {
            id: 5,
            tipo: 'pdf',
            url: '/assets/files/planes/plan_anticorrupcion/04.%202021/05%20FORMULACION%20Plan%20Anticorrupci%c3%b3n2021%20VERSI%c3%93N%202.0.pdf',
            nombre: '05 FORMULACION Plan Anticorrupción2021 VERSIÓN 2.0.pdf',
          },
          {
            id: 6,
            tipo: 'excel',
            url: '/assets/files/planes/plan_anticorrupcion/04.%202021/06%20MATRIZ%20PLAN%20ANTICORRUPCI%c3%93N%20Y%20ATENCI%c3%93N%20AL%20CIUDADANO%20FPS%20V%202.0.xls',
            nombre:
              '06 MATRIZ PLAN ANTICORRUPCIÓN Y ATENCIÓN AL CIUDADANO FPS V 2.0.xls',
          },
          {
            id: 7,
            tipo: 'excel',
            url: '/assets/files/planes/plan_anticorrupcion/04.%202021/07%20MATRIZ%20PLAN%20ANTICORRUPCI%c3%93N%20Y%20ATENCI%c3%93N%20AL%20CIUDADANO%20FPS%20V%203.0.xls',
            nombre:
              '07 MATRIZ PLAN ANTICORRUPCIÓN Y ATENCIÓN AL CIUDADANO FPS V 3.0.xls',
          },
          {
            id: 8,
            tipo: 'pdf',
            url: '/assets/files/planes/plan_anticorrupcion/04.%202021/08%20Plan%20Anticorrupci%c3%b3n2021%20VERSI%c3%93N%203.0.pdf',
            nombre: '08 Plan Anticorrupción2021 VERSIÓN 3.0.pdf',
          },
          {
            id: 9,
            tipo: 'excel',
            url: '/assets/files/planes/plan_anticorrupcion/04.%202021/09%20SEGUIMIENTO%20PLAN%20ANTICORRUPCI%c3%93N%20Y%20ATENCI%c3%93N%20AL%20CIUDADANO%20I%20CUATRIMESTRE%202021.xls',
            nombre:
              '09 SEGUIMIENTO PLAN ANTICORRUPCIÓN Y ATENCIÓN AL CIUDADANO I CUATRIMESTRE 2021.xls',
          },
          {
            id: 10,
            tipo: 'excel',
            url: '/assets/files/planes/plan_anticorrupcion/04.%202021/10%20SEGUIMIENTO%20PLAN%20ANTICORRUPCI%c3%93N%20Y%20ATENCI%c3%93N%20AL%20CIUDADANO%20II%20CUATRIMESTRE%202021.xls',
            nombre:
              '10 SEGUIMIENTO PLAN ANTICORRUPCIÓN Y ATENCIÓN AL CIUDADANO II CUATRIMESTRE 2021.xls',
          },
          {
            id: 11,
            tipo: 'excel',
            url: '/assets/files/planes/plan_anticorrupcion/04.%202021/11%20SEGUIMIENTO%20PLAN%20ANTICORRUPCI%c3%93N%20Y%20ATENCI%c3%93N%20AL%20CIUDADANO%20III%20CUATRIMESTRE%202021.xls',
            nombre:
              '11 SEGUIMIENTO PLAN ANTICORRUPCIÓN Y ATENCIÓN AL CIUDADANO III CUATRIMESTRE 2021.xls',
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
            url: '/assets/files/planes/plan_anticorrupcion/05.%202020/FORMULACION%20PLAN%20ANTICORRUPCION%20Y%20ATENCION%20CIUDADANO%202020.pdf',
            nombre:
              'FORMULACION PLAN ANTICORRUPCION Y ATENCION CIUDADANO 2020.pdf',
          },
          {
            id: 2,
            tipo: 'excel',
            url: '/assets/files/planes/plan_anticorrupcion/05.%202020/PLAN%20ANTICORRUPCION%20%20III%20CUATRIMESTRE%20%2030012021.xls',
            nombre: 'PLAN ANTICORRUPCION  III CUATRIMESTRE  30012021.xls',
          },
          {
            id: 3,
            tipo: 'excel',
            url: '/assets/files/planes/plan_anticorrupcion/05.%202020/PLAN%20ANTICORRUPCION%20CUATRIMESTRE%20II%20MAYO%20-AGOSTO%20VERIFICADO%20CI%20%202020.xls',
            nombre:
              'PLAN ANTICORRUPCION CUATRIMESTRE II MAYO -AGOSTO VERIFICADO CI  2020.xls',
          },
          {
            id: 4,
            tipo: 'excel',
            url: '/assets/files/planes/plan_anticorrupcion/05.%202020/PLAN%20ANTICORRUPCI%c3%93N%20DEL%20CUATRIMESTRE%20I%20ENERO-MAYO%202020.xls',
            nombre:
              'PLAN ANTICORRUPCIÓN DEL CUATRIMESTRE I ENERO-MAYO 2020.xls',
          },
          {
            id: 5,
            tipo: 'pdf',
            url: '/assets/files/planes/plan_anticorrupcion/05.%202020/PLAN_DE_ANTICORRUPCION_Y_ATENCION_AL_CIUDADANO_FPS_2020.pdf',
            nombre:
              'PLAN_DE_ANTICORRUPCION_Y_ATENCION_AL_CIUDADANO_FPS_2020.pdf',
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
            url: '/assets/files/planes/plan_anticorrupcion/06.%202019/PAA2019.xls',
            nombre: 'PAA2019.xls',
          },
          {
            id: 2,
            tipo: 'excel',
            url: '/assets/files/planes/plan_anticorrupcion/06.%202019/PLAN_ANTIC_SEGUIMI_ENE_ABR_2019.xls',
            nombre: 'PLAN_ANTIC_SEGUIMI_ENE_ABR_2019.xls',
          },
          {
            id: 3,
            tipo: 'excel',
            url: '/assets/files/planes/plan_anticorrupcion/06.%202019/PLAN_ANTIC_SEGUIMI_MAYO_AGO_2019.xls',
            nombre: 'PLAN_ANTIC_SEGUIMI_MAYO_AGO_2019.xls',
          },
          {
            id: 4,
            tipo: 'excel',
            url: '/assets/files/planes/plan_anticorrupcion/06.%202019/PLAN_ANTIC_SEGUIMI_SEP_DIC_2019.xls',
            nombre: 'PLAN_ANTIC_SEGUIMI_SEP_DIC_2019.xls',
          },
          {
            id: 5,
            tipo: 'pdf',
            url: '/assets/files/planes/plan_anticorrupcion/06.%202019/PRESENTACION_PLAN_ANTICORRUPCION2019(1).pdf',
            nombre: 'PRESENTACION_PLAN_ANTICORRUPCION2019(1).pdf',
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
            url: '/assets/files/planes/plan_anticorrupcion/07.%202018/COMPONENTES_DESA_PLAN_ANTICO2018.xls',
            nombre: 'COMPONENTES_DESA_PLAN_ANTICO2018.xls',
          },
          {
            id: 2,
            tipo: 'excel',
            url: '/assets/files/planes/plan_anticorrupcion/07.%202018/COMPONENTES_DESA_PLAN_ANTICOV22018.xls',
            nombre: 'COMPONENTES_DESA_PLAN_ANTICOV22018.xls',
          },
          {
            id: 3,
            tipo: 'pdf',
            url: '/assets/files/planes/plan_anticorrupcion/07.%202018/PLAN_ANTICORRUPCION2018.pdf',
            nombre: 'PLAN_ANTICORRUPCION2018.pdf',
          },
          {
            id: 4,
            tipo: 'pdf',
            url: '/assets/files/planes/plan_anticorrupcion/07.%202018/PLAN_ANTICORRUPCIONV22018.pdf',
            nombre: 'PLAN_ANTICORRUPCIONV22018.pdf',
          },
          {
            id: 5,
            tipo: 'excel',
            url: '/assets/files/planes/plan_anticorrupcion/07.%202018/PLAN_ANTIC_SEGUIMI_ENE_ABR_2018.xls',
            nombre: 'PLAN_ANTIC_SEGUIMI_ENE_ABR_2018.xls',
          },
          {
            id: 6,
            tipo: 'excel',
            url: '/assets/files/planes/plan_anticorrupcion/07.%202018/PLAN_ANTIC_SEGUIMI_MAY_AGO_2018.xls',
            nombre: 'PLAN_ANTIC_SEGUIMI_MAY_AGO_2018.xls',
          },
          {
            id: 7,
            tipo: 'excel',
            url: '/assets/files/planes/plan_anticorrupcion/07.%202018/PLAN_ANTIC_SEGUIMI_SEP_DIC_2018.xls',
            nombre: 'PLAN_ANTIC_SEGUIMI_SEP_DIC_2018.xls',
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
            url: '/assets/files/planes/plan_anticorrupcion/08.%202017/COMPONENTES_DESA_PLAN_ANTICO2017.xls',
            nombre: 'COMPONENTES_DESA_PLAN_ANTICO2017.xls',
          },
          {
            id: 2,
            tipo: 'excel',
            url: '/assets/files/planes/plan_anticorrupcion/08.%202017/COMPONENTES_DESA_PLAN_ANTICO2017V2.xls',
            nombre: 'COMPONENTES_DESA_PLAN_ANTICO2017V2.xls',
          },
          {
            id: 3,
            tipo: 'pdf',
            url: '/assets/files/planes/plan_anticorrupcion/08.%202017/PLAN_ANTICORRUPCION2017.pdf',
            nombre: 'PLAN_ANTICORRUPCION2017.pdf',
          },
          {
            id: 4,
            tipo: 'pdf',
            url: '/assets/files/planes/plan_anticorrupcion/08.%202017/PLAN_ANTICORRUPCION2017V2.pdf',
            nombre: 'PLAN_ANTICORRUPCION2017V2.pdf',
          },
          {
            id: 5,
            tipo: 'excel',
            url: '/assets/files/planes/plan_anticorrupcion/08.%202017/PLAN_ANTIC_2017%20DICIEMBRE.xls',
            nombre: 'PLAN_ANTIC_2017 DICIEMBRE.xls',
          },
          {
            id: 6,
            tipo: 'excel',
            url: '/assets/files/planes/plan_anticorrupcion/08.%202017/PLAN_ANTIC_SEGUIMI_ENE_ABR_2017.xls',
            nombre: 'PLAN_ANTIC_SEGUIMI_ENE_ABR_2017.xls',
          },
          {
            id: 7,
            tipo: 'excel',
            url: '/assets/files/planes/plan_anticorrupcion/08.%202017/PLAN_ANTIC_SEGUIMI_MAY_AGO_2017.xls',
            nombre: 'PLAN_ANTIC_SEGUIMI_MAY_AGO_2017.xls',
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
            url: '/assets/files/planes/plan_anticorrupcion/09.%202016/COMPONENTES_DESA_PLAN_ANTICO2016.xls',
            nombre: 'COMPONENTES_DESA_PLAN_ANTICO2016.xls',
          },
          {
            id: 2,
            tipo: 'pdf',
            url: '/assets/files/planes/plan_anticorrupcion/09.%202016/PLAN_ANTICORRUPCION2016.pdf',
            nombre: 'PLAN_ANTICORRUPCION2016.pdf',
          },
          {
            id: 3,
            tipo: 'pdf',
            url: '/assets/files/planes/plan_anticorrupcion/09.%202016/PLAN_ANTICORRUPCIONV2-2016.pdf',
            nombre: 'PLAN_ANTICORRUPCIONV2-2016.pdf',
          },
          {
            id: 4,
            tipo: 'excel',
            url: '/assets/files/planes/plan_anticorrupcion/09.%202016/PLAN_ANTIC_SEGUIMI_ENE_ABR_2016.xls',
            nombre: 'PLAN_ANTIC_SEGUIMI_ENE_ABR_2016.xls',
          },
          {
            id: 5,
            tipo: 'excel',
            url: '/assets/files/planes/plan_anticorrupcion/09.%202016/PLAN_ANTIC_SEGUIMI_MAY_AGO_2016.xls',
            nombre: 'PLAN_ANTIC_SEGUIMI_MAY_AGO_2016.xls',
          },
          {
            id: 6,
            tipo: 'excel',
            url: '/assets/files/planes/plan_anticorrupcion/09.%202016/PLAN_ANTIC_SEGUIMI_MAY_AGO_V2_2016.xls',
            nombre: 'PLAN_ANTIC_SEGUIMI_MAY_AGO_V2_2016.xls',
          },
          {
            id: 7,
            tipo: 'excel',
            url: '/assets/files/planes/plan_anticorrupcion/09.%202016/PLAN_ANTIC_SEGUIMI_SEP_DIC_2016.xls',
            nombre: 'PLAN_ANTIC_SEGUIMI_SEP_DIC_2016.xls',
          },
          {
            id: 8,
            tipo: 'pdf',
            url: '/assets/files/planes/plan_anticorrupcion/09.%202016/POLITICA_RENDICION_CUENTAS_FPS_2016.pdf',
            nombre: 'POLITICA_RENDICION_CUENTAS_FPS_2016.pdf',
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
            url: '/assets/files/planes/plan_anticorrupcion/10.%202015/01.%20Plan%20de%20Anticorrupci%c3%b3n%20y%20Atenci%c3%b3n%20al%20Ciudadano%20FPS%202015.xls',
            nombre:
              '01. Plan de Anticorrupción y Atención al Ciudadano FPS 2015.xls',
          },
          {
            id: 2,
            tipo: 'excel',
            url: '/assets/files/planes/plan_anticorrupcion/10.%202015/INFORME_EVALUACION_PLAN_DE_ANTICORRUPCION_Y_ATENCION_AL_CIUDADANO_FPS_ABRIL_2015-JULIO_2015.xls',
            nombre:
              'INFORME_EVALUACION_PLAN_DE_ANTICORRUPCION_Y_ATENCION_AL_CIUDADANO_FPS_ABRIL_2015-JULIO_2015.xls',
          },
          {
            id: 3,
            tipo: 'excel',
            url: '/assets/files/planes/plan_anticorrupcion/10.%202015/INFORME_EVALUACION_PLAN_DE_ANTICORRUPCION_Y_ATENCION_AL_CIUDADANO_FPS_AGOSTO_2015-NOVIEMBRE_2015.xls',
            nombre:
              'INFORME_EVALUACION_PLAN_DE_ANTICORRUPCION_Y_ATENCION_AL_CIUDADANO_FPS_AGOSTO_2015-NOVIEMBRE_2015.xls',
          },
          {
            id: 4,
            tipo: 'excel',
            url: '/assets/files/planes/plan_anticorrupcion/10.%202015/INFORME_EVALUACION_PLAN_DE_ANTICORRUPCION_Y_ATENCION_AL_CIUDADANO_FPS_DICIEMBRE_2014-MARZO_2015.xls',
            nombre:
              'INFORME_EVALUACION_PLAN_DE_ANTICORRUPCION_Y_ATENCION_AL_CIUDADANO_FPS_DICIEMBRE_2014-MARZO_2015.xls',
          },
        ],
      },
      {
        id: 11,
        nombre: '2014',
        files: [
          {
            id: 1,
            tipo: 'pdf',
            url: '/assets/files/planes/plan_anticorrupcion/11.%202014/01.%20Plan%20de%20Anticorrupci%c3%b3n%20y%20Atenci%c3%b3n%20al%20Ciudadano%202014.pdf',
            nombre:
              '01. Plan de Anticorrupción y Atención al Ciudadano 2014.pdf',
          },
          {
            id: 2,
            tipo: 'excel',
            url: '/assets/files/planes/plan_anticorrupcion/11.%202014/02.%20Informe%20Evaluaci%c3%b3n%20Plan%20de%20Anticorrupci%c3%b3n%20y%20Atenci%c3%b3n%20al%20Ciudadano%20FPS%20Diciembre%202013%20%e2%80%93%20Marzo%202014.xls',
            nombre:
              '02. Informe Evaluación Plan de Anticorrupción y Atención al Ciudadano FPS Diciembre 2013 – Marzo 2014.xls',
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
            url: '/assets/files/planes/plan_anticorrupcion/12.%202013/01.%20Informe%20Evaluaci%c3%b3n%20Plan%20de%20Anticorrupci%c3%b3n%20y%20Atenci%c3%b3n%20al%20Ciudadano%20FPS%20Agosto%202013%20%e2%80%93%20Noviembre%202013.xls',
            nombre:
              '01. Informe Evaluación Plan de Anticorrupción y Atención al Ciudadano FPS Agosto 2013 – Noviembre 2013.xls',
          },
          {
            id: 2,
            tipo: 'excel',
            url: '/assets/files/planes/plan_anticorrupcion/12.%202013/02.%20Informe%20Evaluaci%c3%b3n%20Plan%20de%20Anticorrupci%c3%b3n%20y%20Atenci%c3%b3n%20al%20Ciudadano%20FPS%20Abril%202013%20%e2%80%93%20Julio%202013.xls',
            nombre:
              '02. Informe Evaluación Plan de Anticorrupción y Atención al Ciudadano FPS Abril 2013 – Julio 2013.xls',
          },
        ],
      },
    ];
  }
}
