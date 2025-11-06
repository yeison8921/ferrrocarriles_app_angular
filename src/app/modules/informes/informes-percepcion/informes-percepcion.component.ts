import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { AcordionFiles } from '../../../interfaces/acordion';

@Component({
  selector: 'app-informes-percepcion',
  standalone: true,
  imports: [NgbAccordionModule, NgFor],
  templateUrl: './informes-percepcion.component.html',
  styleUrl: './informes-percepcion.component.css',
})
export class InformesPercepcionComponent {
  items: AcordionFiles[] = [];
  constructor() {
    this.items = [
        {
        id: 1,
        nombre: '2024',
        files: [
           {
            id: 2,
            tipo: 'pdf',
            nombre: 'INFORME PERCEPCIÓN POS TRÁMITE DE LOS SERVICIOS PRESTADOS POR LA ENTIDAD I SEMESTRE 2025.pdf',
            url: '/assets/files/percepcion_satisfaccion_ciudadano/12. 2025/INFORME PERCEPCIÓN POS TRÁMITE DE LOS SERVICIOS PRESTADOS POR LA ENTIDAD I SEMESTRE 2025.pdf',
          }
        ],
      },
      {
        id: 1,
        nombre: '2024',
        files: [
          {
            id: 2,
            tipo: 'pdf',
            nombre: 'INFORME PERCEPCIÓN POS TRAMITE DE LOS SERVICIOS PRESTADOS POR LA ENTIDAD II SEMESTRE 2024.pdf',
            url: '/assets/files/percepcion_satisfaccion_ciudadano/01. 2024/INFORME PERCEPCION POS TRAMITE DE LOS SERVICIOS PRESTADOS POR LA ENTIDAD II SEMESTRE 2024.pdf',
          },
          {
            id: 3,
            tipo: 'pdf',
            nombre: 'I SEMESTRE POS TRÁMITE.pdf',
            url: '/assets/files/percepcion_satisfaccion_ciudadano/01. 2024/I SEMESTRE POS TRAMITE.pdf',
          },
        ],
      },
      {
        id: 2,
        nombre: '2023',
        files: [
          {
            id: 2,
            tipo: 'pdf',
            nombre: '01. INFORME PERCEPCION POST-TRAMITE I TRIMESTRE 2023.pdf',
            url: '/assets/files/percepcion_satisfaccion_ciudadano/02. 2023/01. INFORME PERCEPCION POST-TRAMITE I TRIMESTRE 2023.pdf',
          },
          {
            id: 3,
            tipo: 'pdf',
            nombre:
              '02. INFORME PERCEPCIÓN POST TRAMITE II TRIMESTRE DE 2023.pdf',
            url: '/assets/files/percepcion_satisfaccion_ciudadano/02. 2023/02. INFORME PERCEPCIÓN POST TRAMITE II TRIMESTRE DE 2023.pdf',
          },
          {
            id: 4,
            tipo: 'pdf',
            nombre: '03. INFORME POST TRAMITE II SEMESTRE 2023..pdf',
            url: '/assets/files/percepcion_satisfaccion_ciudadano/02. 2023/03. INFORME POST TRAMITE II SEMESTRE 2023..pdf',
          },
        ],
      },
      {
        id: 3,
        nombre: '2022',
        files: [
          {
            id: 5,
            tipo: 'pdf',
            nombre: '01. INFORME PERCEPCION POST-TRAMITE I TRIMESTRE 2022.pdf',
            url: '/assets/files/percepcion_satisfaccion_ciudadano/03. 2022/01. INFORME PERCEPCION POST-TRAMITE I TRIMESTRE 2022.pdf',
          },
          {
            id: 6,
            tipo: 'pdf',
            nombre:
              '02. INFORME PERCEPCIÓN DE SATISFACCIÓN POS TRÁMITE II TRIMESTRE 2022.pdf',
            url: '/assets/files/percepcion_satisfaccion_ciudadano/03. 2022/02. INFORME PERCEPCIÓN DE SATISFACCIÓN POS TRÁMITE II TRIMESTRE 2022.pdf',
          },
          {
            id: 7,
            tipo: 'pdf',
            nombre: '03. INFORME POST TRAMITE IIITRIMESTRE DE 2022.pdf',
            url: '/assets/files/percepcion_satisfaccion_ciudadano/03. 2022/03. INFORME POST TRAMITE IIITRIMESTRE DE 2022.pdf',
          },
          {
            id: 8,
            tipo: 'pdf',
            nombre: '04. INFORME POST TRAMITE IV TRIMESTRE DE 2022.pdf',
            url: '/assets/files/percepcion_satisfaccion_ciudadano/03. 2022/04. INFORME POST TRAMITE IV TRIMESTRE DE 2022.pdf',
          },
        ],
      },
      {
        id: 4,
        nombre: '2021',
        files: [
          {
            id: 9,
            tipo: 'pdf',
            nombre:
              '01 INFORME DE PERCEPCION DE SATISFACCION AL USUARIO POST TRÁMITE I TRIMESTRE 2021.pdf',
            url: '/assets/files/percepcion_satisfaccion_ciudadano/04. 2021/01 INFORME DE PERCEPCION DE SATISFACCION AL USUARIO POST TRÁMITE I TRIMESTRE 2021.pdf',
          },
          {
            id: 10,
            tipo: 'pdf',
            nombre:
              '02 INFORME DE PERCEPCION DE SATISFACCION AL USUARIO POST TRÁMITE II TRIMESTRE 2021.pdf',
            url: '/assets/files/percepcion_satisfaccion_ciudadano/04. 2021/02 INFORME DE PERCEPCION DE SATISFACCION AL USUARIO POST TRÁMITE II TRIMESTRE 2021.pdf',
          },
          {
            id: 11,
            tipo: 'pdf',
            nombre:
              '03 INFORME DE PERCEPCION DE SATISFACCION AL USUARIO POST TRÁMITE III TRIMESTRE 2021.pdf',
            url: '/assets/files/percepcion_satisfaccion_ciudadano/04. 2021/03 INFORME DE PERCEPCION DE SATISFACCION AL USUARIO POST TRÁMITE III TRIMESTRE 2021.pdf',
          },
          {
            id: 12,
            tipo: 'pdf',
            nombre: '04 INFORME PERCEPCION POST-TRAMITE IV TRIMESTRE 2021.pdf',
            url: '/assets/files/percepcion_satisfaccion_ciudadano/04. 2021/04 INFORME PERCEPCION POST-TRAMITE IV TRIMESTRE 2021.pdf',
          },
        ],
      },
      {
        id: 5,
        nombre: '2020',
        files: [
          {
            id: 13,
            tipo: 'pdf',
            nombre:
              'INFORME DE PERCEPCION DE SATISFACCION AL USUARIO POST TRÁMITE I TRIMESTRE 2020.pdf',
            url: '/assets/files/percepcion_satisfaccion_ciudadano/05. 2020/INFORME DE PERCEPCION DE SATISFACCION AL USUARIO POST TRÁMITE I TRIMESTRE 2020.pdf',
          },
          {
            id: 14,
            tipo: 'pdf',
            nombre:
              'INFORME DE PERCEPCIÓN DE SATISFACCIÓN AL USUARIO POST TRÁMITE II TRIMESTRE 2020.pdf',
            url: '/assets/files/percepcion_satisfaccion_ciudadano/05. 2020/INFORME DE PERCEPCIÓN DE SATISFACCIÓN AL USUARIO POST TRÁMITE II TRIMESTRE 2020.pdf',
          },
          {
            id: 15,
            tipo: 'pdf',
            nombre:
              'INFORME DE PERCEPCIÓN DE SATISFACCIÓN AL USUARIO POST TRÁMITE III TRIMESTRE 2020.pdf',
            url: '/assets/files/percepcion_satisfaccion_ciudadano/05. 2020/INFORME DE PERCEPCIÓN DE SATISFACCIÓN AL USUARIO POST TRÁMITE III TRIMESTRE 2020.pdf',
          },
          {
            id: 16,
            tipo: 'pdf',
            nombre:
              'INFORME DE PERCEPCIÓN DE SATISFACCIÓN AL USUARIO POST TRÁMITE IV TRIMESTRE 2020.pdf',
            url: '/assets/files/percepcion_satisfaccion_ciudadano/05. 2020/INFORME DE PERCEPCIÓN DE SATISFACCIÓN AL USUARIO POST TRÁMITE IV TRIMESTRE 2020.pdf',
          },
        ],
      },
      {
        id: 6,
        nombre: '2019',
        files: [
          {
            id: 17,
            tipo: 'pdf',
            nombre: 'INFOPERCEPCIONITRIMESTRE2019.pdf',
            url: '/assets/files/percepcion_satisfaccion_ciudadano/06. 2019/INFOPERCEPCIONITRIMESTRE2019.pdf',
          },
          {
            id: 18,
            tipo: 'pdf',
            nombre: 'POSTRAMITE II TRIMESTRE 2019.pdf',
            url: '/assets/files/percepcion_satisfaccion_ciudadano/06. 2019/POSTRAMITE II TRIMESTRE 2019.pdf',
          },
          {
            id: 19,
            tipo: 'pdf',
            nombre: 'POSTRAMITE III TRIMESTRE.pdf',
            url: '/assets/files/percepcion_satisfaccion_ciudadano/06. 2019/POSTRAMITE III TRIMESTRE.pdf',
          },
          {
            id: 20,
            tipo: 'pdf',
            nombre: 'POSTRAMITE IV TRIMESTRE.pdf',
            url: '/assets/files/percepcion_satisfaccion_ciudadano/06. 2019/POSTRAMITE IV TRIMESTRE.pdf',
          },
        ],
      },
      {
        id: 7,
        nombre: '2018',
        files: [
          {
            id: 21,
            tipo: 'pdf',
            nombre: 'INFO PERCEPCION I TRIMESTRE2018.pdf',
            url: '/assets/files/percepcion_satisfaccion_ciudadano/07. 2018/INFO PERCEPCION I TRIMESTRE2018.pdf',
          },
          {
            id: 22,
            tipo: 'pdf',
            nombre: 'InfoPercepcionIIITrimestre2018.pdf',
            url: '/assets/files/percepcion_satisfaccion_ciudadano/07. 2018/InfoPercepcionIIITrimestre2018.pdf',
          },
          {
            id: 23,
            tipo: 'pdf',
            nombre: 'InfoPercepcionIITrimestre2018.pdf',
            url: '/assets/files/percepcion_satisfaccion_ciudadano/07. 2018/InfoPercepcionIITrimestre2018.pdf',
          },
          {
            id: 24,
            tipo: 'pdf',
            nombre: 'InfoPercepcionIVTrimestre2018.pdf',
            url: '/assets/files/percepcion_satisfaccion_ciudadano/07. 2018/InfoPercepcionIVTrimestre2018.pdf',
          },
        ],
      },
      {
        id: 9,
        nombre: '2016',
        files: [
          {
            id: 25,
            tipo: 'pdf',
            nombre: 'INFO MEDICION I TRIMESTRE2016.pdf',
            url: '/assets/files/percepcion_satisfaccion_ciudadano/09. 2016/INFO MEDICION I TRIMESTRE2016.pdf',
          },
          {
            id: 26,
            tipo: 'pdf',
            nombre: 'INFO MEDICION II TRIMESTRE2016.pdf',
            url: '/assets/files/percepcion_satisfaccion_ciudadano/09. 2016/INFO MEDICION II TRIMESTRE2016.pdf',
          },
          {
            id: 27,
            tipo: 'pdf',
            nombre: 'INFO MEDICION III TRIMESTRE2016.pdf',
            url: '/assets/files/percepcion_satisfaccion_ciudadano/09. 2016/INFO MEDICION III TRIMESTRE2016.pdf',
          },
          {
            id: 28,
            tipo: 'pdf',
            nombre: 'INFO MEDICION IV TRIMESTRE2016.pdf',
            url: '/assets/files/percepcion_satisfaccion_ciudadano/09. 2016/INFO MEDICION IV TRIMESTRE2016.pdf',
          },
        ],
      },
      {
        id: 10,
        nombre: '2015',
        files: [
          {
            id: 29,
            tipo: 'pdf',
            nombre: 'INFO MEDICION I TRIMESTRE2015.pdf',
            url: '/assets/files/percepcion_satisfaccion_ciudadano/10. 2015/INFO MEDICION I TRIMESTRE2015.pdf',
          },
          {
            id: 30,
            tipo: 'pdf',
            nombre: 'INFO MEDICION II TRIMESTRE2015.pdf',
            url: '/assets/files/percepcion_satisfaccion_ciudadano/10. 2015/INFO MEDICION II TRIMESTRE2015.pdf',
          },
          {
            id: 31,
            tipo: 'pdf',
            nombre: 'INFO MEDICION III TRIMESTRE2015.pdf',
            url: '/assets/files/percepcion_satisfaccion_ciudadano/10. 2015/INFO MEDICION III TRIMESTRE2015.pdf',
          },
          {
            id: 32,
            tipo: 'pdf',
            nombre: 'INFO MEDICION IV TRIMESTRE2015.pdf',
            url: '/assets/files/percepcion_satisfaccion_ciudadano/10. 2015/INFO MEDICION IV TRIMESTRE2015.pdf',
          },
        ],
      },
      {
        id: 11,
        nombre: '2014',
        files: [
          {
            id: 33,
            tipo: 'pdf',
            nombre: 'INFO MEDICION I TRIMESTRE2014.pdf',
            url: '/assets/files/percepcion_satisfaccion_ciudadano/11. 2014/INFO MEDICION I TRIMESTRE2014.pdf',
          },
          {
            id: 34,
            tipo: 'pdf',
            nombre: 'INFO MEDICION II TRIMESTRE2014.pdf',
            url: '/assets/files/percepcion_satisfaccion_ciudadano/11. 2014/INFO MEDICION II TRIMESTRE2014.pdf',
          },
          {
            id: 35,
            tipo: 'pdf',
            nombre: 'INFO MEDICION III TRIMESTRE2014.pdf',
            url: '/assets/files/percepcion_satisfaccion_ciudadano/11. 2014/INFO MEDICION III TRIMESTRE2014.pdf',
          },
          {
            id: 36,
            tipo: 'pdf',
            nombre: 'INFO MEDICION IV TRIMESTRE2014.pdf',
            url: '/assets/files/percepcion_satisfaccion_ciudadano/11. 2014/INFO MEDICION IV TRIMESTRE2014.pdf',
          },
        ],
      },
    ];
  }
}
