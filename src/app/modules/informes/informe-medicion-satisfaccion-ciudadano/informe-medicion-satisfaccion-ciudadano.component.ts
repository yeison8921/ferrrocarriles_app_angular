import { Component } from '@angular/core';
import { AcordionAnidadoFiles } from '../../../interfaces/acordion';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-informe-medicion-satisfaccion-ciudadano',
  standalone: true,
  imports: [NgbAccordionModule, NgFor],
  templateUrl: './informe-medicion-satisfaccion-ciudadano.component.html',
  styleUrl: './informe-medicion-satisfaccion-ciudadano.component.css',
})
export class InformeMedicionSatisfaccionCiudadanoComponent {
  items: AcordionAnidadoFiles[] = [];
  constructor() {
    this.items = [
        {
        id: 1,
        nombre: '2025',
        files: [
          {
            id: 1,
            tipo: 'pdf',
            nombre: 'INFORME DE SATISFACCIÓN I SEMESTRE DE 2025',
            url: '/assets/files/medicion_satisfaccion_ciudadano/2025/INFORME DE SATISFACCIÓN PRIMER SEMESTRE 2025 (2).pdf',
          }
         
          
        ],
      },
      {
        id: 1,
        nombre: '2024',
        files: [
          {
            id: 1,
            tipo: 'pdf',
            nombre: 'INFORME DE SATISFACCIÓN I SEMESTRE DE 2024',
            url: '/assets/files/medicion_satisfaccion_ciudadano/01. 2023/INFORME DE SATISFACCIÓN I SEMESTRE DE 2024.pdf',
          },
          {
            id: 2,
            tipo: 'pdf',
            nombre: 'INFORME DE SATISFACCIÓN II SEMESTRE DE 2024',
            url: '/assets/files/medicion_satisfaccion_ciudadano/01. 2023/INFORME DE SATISFACCIÓN II SEMESTRE DE 2024.pdf',
          },
          
        ],
      },
      {
        id: 1,
        nombre: '2023',
        files: [
          {
            id: 1,
            tipo: 'pdf',
            nombre: 'INFORME MEDICIÓN SATISFACCIÓN I TRIMESTRE 2023',
            url: '/assets/files/medicion_satisfaccion_ciudadano/01. 2023/01. INFORME MEDICIÓN SATISFACCIÓN I TRIMESTRE 2023.pdf',
          },
          {
            id: 2,
            tipo: 'pdf',
            nombre: 'INFORME MEDICIÓN SATISFACCIÓN II TRIMESTRE 2023',
            url: '/assets/files/medicion_satisfaccion_ciudadano/01. 2023/02. INFORME MEDICIÓN SATISFACCIÓN II TRIMESTRE 2023.pdf',
          },
          {
            id: 3,
            tipo: 'pdf',
            nombre: 'INFORME DE SATISFACCIÓN II SEMESTRE 2023',
            url: '/assets/files/medicion_satisfaccion_ciudadano/01. 2023/03. INFORME DE SATISFACCIÒN II SEMESTRE 2023..pdf',
          },
        ],
      },
      {
        id: 2,
        nombre: '2022',
        files: [
          {
            id: 1,
            tipo: 'pdf',
            nombre: 'INFORME MEDICIÓN SATISFACCIÓN I TRIM 2022',
            url: '/assets/files/medicion_satisfaccion_ciudadano/02. 2022/01. INFORME MEDICIÓN SATISFACCIÓN I TRIM 2022.pdf',
          },
          {
            id: 2,
            tipo: 'pdf',
            nombre: 'INFORME PERCEPCIÓN DE SATISFACCIÓN II TRIMESTRE 2022',
            url: '/assets/files/medicion_satisfaccion_ciudadano/02. 2022/02. INFORME PERCEPCIÓN DE SATISFACCIÓN II TRIMESTRE 2022.pdf',
          },
          {
            id: 3,
            tipo: 'pdf',
            nombre: 'INFORME MEDICIÓN SATISFACCIÓN III TRIM 2022',
            url: '/assets/files/medicion_satisfaccion_ciudadano/02. 2022/03. INFORME MEDICIÓN SATISFACCIÓN III TRIM 2022.pdf',
          },
          {
            id: 4,
            tipo: 'pdf',
            nombre: 'INFORME MEDICIÓN SATISFACCIÓN IV TRIMESTRE 2022',
            url: '/assets/files/medicion_satisfaccion_ciudadano/02. 2022/04. INFORME MEDICIÓN SATISFACCIÓN IV TRIMESTRE 2022.pdf',
          },
        ],
      },
      {
        id: 3,
        nombre: '2021',
        files: [
          {
            id: 1,
            tipo: 'pdf',
            nombre:
              'INFORME MEDICIÓN SATISFACCIÓN AL CIUDADANO I TRIMESTRE 2021',
            url: '/assets/files/medicion_satisfaccion_ciudadano/03. 2021/01 INFORME MEDICION SATISFACCION AL CIUDADANO I TRIMESTRE 2021.pdf',
          },
          {
            id: 2,
            tipo: 'pdf',
            nombre:
              'INFORME MEDICIÓN SATISFACCIÓN AL CIUDADANO II TRIMESTRE 2021',
            url: '/assets/files/medicion_satisfaccion_ciudadano/03. 2021/02 INFORME MEDICION SATISFACCION AL CIUDADANO II TRIMESTRE 2021.pdf',
          },
          {
            id: 3,
            tipo: 'pdf',
            nombre:
              'INFORME MEDICIÓN SATISFACCIÓN AL CIUDADANO III TRIMESTRE 2021',
            url: '/assets/files/medicion_satisfaccion_ciudadano/03. 2021/03 INFORME MEDICIÓN SATISFACCION AL CIUDADANO III TRIMESTRE 2021.pdf',
          },
          {
            id: 4,
            tipo: 'pdf',
            nombre: 'INFORME SATISFACCIÓN IV TRIMESTRE 2021',
            url: '/assets/files/medicion_satisfaccion_ciudadano/03. 2021/04 INFORME SATISFACCIÓN IV TRIMESTRE 2021.pdf',
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
            nombre:
              'INFORME MEDICIÓN SATISFACCIÓN AL CIUDADANO I TRIMESTRE 2020',
            url: '/assets/files/medicion_satisfaccion_ciudadano/04. 2020/INFORME MEDICION SATISFACCION AL CIUDADANO I TRIMESTRE 2020.pdf',
          },
          {
            id: 2,
            tipo: 'pdf',
            nombre:
              'INFORME MEDICIÓN SATISFACCIÓN AL CIUDADANO II TRIMESTRE 2020',
            url: '/assets/files/medicion_satisfaccion_ciudadano/04. 2020/INFORME MEDICIÓN SATISFACCION AL CIUDADANO II TRIMESTRE 2020.pdf',
          },
          {
            id: 3,
            tipo: 'pdf',
            nombre:
              'INFORME MEDICIÓN SATISFACCIÓN AL CIUDADANO III TRIMESTRE 2020',
            url: '/assets/files/medicion_satisfaccion_ciudadano/04. 2020/INFORME MEDICIÓN SATISFACCIÓN AL CIUDADANO III TRIMESTRE 2020.pdf',
          },
          {
            id: 4,
            tipo: 'pdf',
            nombre: 'INFORME SATISFACCIÓN AL CIUDADANO IV TRIMESTRE 2020',
            url: '/assets/files/medicion_satisfaccion_ciudadano/04. 2020/INFORME SATISFACCION AL CIUDADANO IV TRIMESTRE 2020.pdf',
          },
        ],
      },
      {
        id: 5,
        nombre: '2019',
        acordion: [
          {
            id: 1,
            nombre:
              'Informe General de Medición de la Satisfacción al Ciudadano Trimestral',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre:
                  'INFORME MEDICIÓN DE LA SATISFACCIÓN III TRIMESTRE 2019',
                url: '/assets/files/medicion_satisfaccion_ciudadano/05. 2019/Informe General de Medicion de la Satisfaccion al Ciudadano Trimestral/INFORME MEDICION DE LA SATISFACCION III TRIMESTRE 2019.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre: 'INFORME MEDICIÓN DE LA SATISFACCIÓN IV TRIMESTRE 2019',
                url: '/assets/files/medicion_satisfaccion_ciudadano/05. 2019/Informe General de Medicion de la Satisfaccion al Ciudadano Trimestral/INFORME MEDICION DE LA SATISFACCION IV TRIMESTRE 2019.pdf',
              },
              {
                id: 3,
                tipo: 'pdf',
                nombre: 'InfoSatisfacItrimestre2019',
                url: '/assets/files/medicion_satisfaccion_ciudadano/05. 2019/Informe General de Medicion de la Satisfaccion al Ciudadano Trimestral/InfoSatisfacItrimestre2019.pdf',
              },
            ],
          },
        ],
      },
      {
        id: 6,
        nombre: '2018',
        acordion: [
          {
            id: 1,
            nombre:
              'Informe General de Medición de la Satisfacción al Ciudadano Trimestral',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'InfoSatisfacIIItrimestre2018',
                url: '/assets/files/medicion_satisfaccion_ciudadano/06. 2018/Informe General de Medicion de la Satisfaccion al Ciudadano Trimestral/InfoSatisfacIIItrimestre2018.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre: 'InfoSatisfacIItrimestre2018',
                url: '/assets/files/medicion_satisfaccion_ciudadano/06. 2018/Informe General de Medicion de la Satisfaccion al Ciudadano Trimestral/InfoSatisfacIItrimestre2018.pdf',
              },
              {
                id: 3,
                tipo: 'pdf',
                nombre: 'InfoSatisfacIVtrimestre2018',
                url: '/assets/files/medicion_satisfaccion_ciudadano/06. 2018/Informe General de Medicion de la Satisfaccion al Ciudadano Trimestral/InfoSatisfacIVtrimestre2018.pdf',
              },
              {
                id: 4,
                tipo: 'pdf',
                nombre: 'InfoSatisfacItrimestre2018',
                url: '/assets/files/medicion_satisfaccion_ciudadano/06. 2018/Informe General de Medicion de la Satisfaccion al Ciudadano Trimestral/InfoSatisfacItrimestre2018.pdf',
              },
            ],
          },
        ],
      },
      {
        id: 7,
        nombre: '2017',
        acordion: [
          {
            id: 1,
            nombre:
              'Informe General de Medición de la Satisfacción al Ciudadano Semestral',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'InfoSatisfacIISemestre2017',
                url: '/assets/files/medicion_satisfaccion_ciudadano/07. 2017/Informe General de Medicion de la Satisfaccion al Ciudadano Semestral/InfoSatisfacIISemestre2017.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre: 'InfoSatisfacISemestre2017',
                url: '/assets/files/medicion_satisfaccion_ciudadano/07. 2017/Informe General de Medicion de la Satisfaccion al Ciudadano Semestral/InfoSatisfacISemestre2017.pdf',
              },
            ],
          },
          {
            id: 2,
            nombre:
              'Informe General de Medición de la Satisfacción al Ciudadano Trimestral',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'InfoSatisfacIIItrimestre2017',
                url: '/assets/files/medicion_satisfaccion_ciudadano/07. 2017/Informe General de Medicion de la Satisfaccion al Ciudadano Trimestral/InfoSatisfacIIItrimestre2017.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre: 'InfoSatisfacIItrimestre2017',
                url: '/assets/files/medicion_satisfaccion_ciudadano/07. 2017/Informe General de Medicion de la Satisfaccion al Ciudadano Trimestral/InfoSatisfacIItrimestre2017.pdf',
              },
              {
                id: 3,
                tipo: 'pdf',
                nombre: 'InfoSatisfacIVtrimestre2017',
                url: '/assets/files/medicion_satisfaccion_ciudadano/07. 2017/Informe General de Medicion de la Satisfaccion al Ciudadano Trimestral/InfoSatisfacIVtrimestre2017.pdf',
              },
              {
                id: 5,
                tipo: 'pdf',
                nombre: 'InfoSatisfacItrimestre2017',
                url: '/assets/files/medicion_satisfaccion_ciudadano/07. 2017/Informe General de Medicion de la Satisfaccion al Ciudadano Trimestral/InfoSatisfacItrimestre2017.pdf',
              },
            ],
          },
        ],
      },
    ];
  }
}
