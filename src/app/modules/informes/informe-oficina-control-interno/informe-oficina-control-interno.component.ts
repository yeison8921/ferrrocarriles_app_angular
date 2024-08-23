import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { AcordionFiles } from '../../../interfaces/acordion';

@Component({
  selector: 'app-informe-oficina-control-interno',
  standalone: true,
  imports: [NgbAccordionModule, NgFor],
  templateUrl: './informe-oficina-control-interno.component.html',
  styleUrl: './informe-oficina-control-interno.component.css',
})
export class InformeOficinaControlInternoComponent {
  items: AcordionFiles[] = [];
  constructor() {
    this.items = [
      {
        id: 1,
        nombre: '2023',
        files: [
          {
            id: 1,
            tipo: 'excel',
            nombre:
              'Informe y certificación de la Información Litigiosa del Estado Ekogui. I semestre 2023.xlsx',
            url: '/assets/files/control_interno/01. 2023/Informe y certificación de la Información Litigiosa del Estado Ekogui. I semestre 2023.xlsx',
          },
        ],
      },
      {
        id: 2,
        nombre: '2022',
        files: [
          {
            id: 1,
            tipo: 'excel',
            nombre:
              'Informe y certificación de la Información Litigiosa del Estado Ekogui. I semestre 2022.xlsx',
            url: '/assets/files/control_interno/02. 2022/Informe y certificación de la Información Litigiosa del Estado Ekogui. I semestre 2022.xlsx',
          },
        ],
      },
      {
        id: 3,
        nombre: '2021',
        files: [
          {
            id: 1,
            tipo: 'excel',
            nombre:
              'INFORME EVALUACION SISTEMAS CONTROL  INTERNO CONTABLE 2021.xls',
            url: '/assets/files/control_interno/03. 2021/INFORME EVALUACION SISTEMAS CONTROL  INTERNO CONTABLE 2021.xls',
          },
          {
            id: 2,
            tipo: 'pdf',
            nombre:
              'INFORME Y CERTIFICACIÓN DE LA INFORMACIÓN LITIGIOSA DEL ESTADO EKOGUI. II SE-MESTRE 2021. (1).pdf',
            url: '/assets/files/control_interno/03. 2021/INFORME Y CERTIFICACIÓN DE LA INFORMACIÓN LITIGIOSA DEL ESTADO EKOGUI. II SE-MESTRE 2021. (1).pdf',
          },
        ],
      },
      {
        id: 4,
        nombre: '2020',
        files: [
          {
            id: 1,
            tipo: 'pdf',
            nombre: '2020 Informe de software.pdf',
            url: '/assets/files/control_interno/04. 2020/2020  Informe de software.pdf',
          },
          {
            id: 2,
            tipo: 'pdf',
            nombre: 'Certificado de Cumplimiento FURAG II.pdf',
            url: '/assets/files/control_interno/04. 2020/Certificado de Cumplimiento FURAG II.pdf',
          },
          {
            id: 3,
            tipo: 'pdf',
            nombre: 'Evaluacion CI Contable 2019 Calificacion.pdf',
            url: '/assets/files/control_interno/04. 2020/Evaluacion CI Contable 2019 Calificacion.pdf',
          },
          {
            id: 4,
            tipo: 'pdf',
            nombre: 'INFORME PORMENORIZADO DE CONTROL  INTERNO 2020.pdf',
            url: '/assets/files/control_interno/04. 2020/INFORME PORMENORIZADO DE CONTROL  INTERNO 2020.pdf',
          },
          {
            id: 5,
            tipo: 'pdf',
            nombre: 'Informe Anual de Gestión 2020.pdf',
            url: '/assets/files/control_interno/04. 2020/Informe Anual de Gestión 2020.pdf',
          },
          {
            id: 6,
            tipo: 'excel',
            nombre: 'Informe de Control Interno 2020 Final.xls',
            url: '/assets/files/control_interno/04. 2020/Informe de Control Interno 2020 Final.xls',
          },
          {
            id: 7,
            tipo: 'pdf',
            nombre:
              'Informe de evaluación independiente del estado de control interno.pdf',
            url: '/assets/files/control_interno/04. 2020/Informe de evaluación independiente del estado de control interno.pdf',
          },
          {
            id: 8,
            tipo: 'pdf',
            nombre:
              'Informe ejecutivo plan de austeridad primer trimestre 2020.pdf',
            url: '/assets/files/control_interno/04. 2020/Informe ejecutivo plan de austeridad primer trimestre 2020.pdf',
          },
          {
            id: 9,
            tipo: 'pdf',
            nombre: 'Informe ejecutivo segundo trimestre.pdf',
            url: '/assets/files/control_interno/04. 2020/Informe ejecutivo segundo trimestre.pdf',
          },
          {
            id: 10,
            tipo: 'pdf',
            nombre: 'Informe ekogui II sem 2019.pdf',
            url: '/assets/files/control_interno/04. 2020/Informe ekogui II sem 2019.pdf',
          },
        ],
      },
      {
        id: 5,
        nombre: '2019',
        files: [
          {
            id: 1,
            tipo: 'pdf',
            nombre: 'INFORME AUSTERIDAD III TRIMESTRE 2019.pdf',
            url: '/assets/files/control_interno/05. 2019/INFORME AUSTERIDAD III TRIMESTRE 2019.pdf',
          },
          {
            id: 2,
            tipo: 'pdf',
            nombre: 'INFORME DE DESEMPEÑO II SEMESTRE DEL 2018.pdf',
            url: '/assets/files/control_interno/05. 2019/INFORME DE DESEMPEÑO II SEMESTRE DEL 2018.pdf',
          },
        ],
      },
    ];
  }
}
