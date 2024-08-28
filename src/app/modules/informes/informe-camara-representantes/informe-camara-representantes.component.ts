import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { AcordionAnidadoFiles } from '../../../interfaces/acordion';

@Component({
  selector: 'app-informe-camara-representantes',
  standalone: true,
  imports: [NgbAccordionModule, NgFor],
  templateUrl: './informe-camara-representantes.component.html',
  styleUrl: './informe-camara-representantes.component.css',
})
export class InformeCamaraRepresentantesComponent {
  items: AcordionAnidadoFiles[] = [];

  constructor() {
    this.items = [
      {
        id: 1,
        nombre: '2022',
        acordion: [
          {
            id: 1,
            nombre:
              'Anexo No. 1 Certificación Reserva Presupuestal y Cuentas Por Pagar',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: '1. ANEXO CERT PUNTO E 202304000004121.pdf',
                url: '/assets/files/camara_representantes/01. 2022/01 Anexo No. 1 Certificación Reserva Presupuestal y Cuentas Por Pagar/1. ANEXO CERT PUNTO E 202304000004121.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre: '1PUNTO E CERTIFICACIÒN.pdf',
                url: '/assets/files/camara_representantes/01. 2022/01 Anexo No. 1 Certificación Reserva Presupuestal y Cuentas Por Pagar/1PUNTO E CERTIFICACIÒN.pdf',
              },
            ],
          },
          {
            id: 2,
            nombre:
              'Anexo No. 2 Certificación Cumplimiento Principios Presupuestales',
            files: [
              {
                id: 3,
                tipo: 'pdf',
                nombre:
                  'Anexo No 2 Certificación Cumplimiento Principios Presupuestales.pdf',
                url: '/assets/files/camara_representantes/01. 2022/02 Anexo No. 2 Certificación Cumplimiento Principios Presupuestales/Anexo No 2 Certificación Cumplimiento Principios Presupuestales.pdf',
              },
            ],
          },
          {
            id: 3,
            nombre: 'Anexo No. 3 Estados Financieros I',
            files: [
              {
                id: 4,
                tipo: 'pdf',
                nombre: 'Anexo No 3 Estados Financieros 2022..pdf',
                url: '/assets/files/camara_representantes/01. 2022/03 Anexo No. 3 Estados Financieros I/Anexo No 3 Estados Financieros 2022..pdf',
              },
            ],
          },
          {
            id: 4,
            nombre: 'Anexo No. 4 Saldos y Movimientos',
            files: [
              {
                id: 5,
                tipo: 'excel',
                nombre: 'Anexo No 4 Saldos y Movimientos vigencia 2022.xls',
                url: '/assets/files/camara_representantes/01. 2022/04 Anexo No. 4 Saldos y Movimientos/Anexo No 4 Saldos y Movimientos vigencia 2022.xls',
              },
            ],
          },
          {
            id: 5,
            nombre: 'Anexo No. 5 Estados Financieros II',
            files: [
              {
                id: 6,
                tipo: 'pdf',
                nombre: 'Anexo No 5 Estados Financieros 2022..pdf',
                url: '/assets/files/camara_representantes/01. 2022/05 Anexo No. 5 Estados Financieros II/Anexo No 5 Estados Financieros 2022..pdf',
              },
            ],
          },
          {
            id: 6,
            nombre: 'Anexo No. 6 Boletín de Deudores Morosos del estado - BDME',
            files: [
              {
                id: 7,
                tipo: 'excel',
                nombre:
                  'ANEXO No 6 Boletín de Deudores Morosos del estado - BDME.xlsx',
                url: '/assets/files/camara_representantes/01. 2022/06 Anexo No. 6 Boletín de Deudores Morosos del estado - BDME/ANEXO No 6 Boletín de Deudores Morosos del estado - BDME.xlsx',
              },
            ],
          },
          {
            id: 7,
            nombre:
              'Anexo No. 7 Certificación Información Presupuestal y Autoevaluación (CIC)',
            files: [
              {
                id: 8,
                tipo: 'pdf',
                nombre:
                  'Anexo No 7 Certificación Información Presupuestal y Autoevaluación del Informe de CIC.pdf',
                url: '/assets/files/camara_representantes/01. 2022/07 Anexo No. 7 Certificación Información Presupuestal y Autoevaluación (CIC)/Anexo No 7 Certificación Información Presupuestal y Autoevaluación del Informe de CIC.pdf',
              },
            ],
          },
          {
            id: 8,
            nombre:
              'Anexo No. 8 Informe Autoevaluación del Sistema de ci contable',
            files: [
              {
                id: 9,
                tipo: 'excel',
                nombre:
                  'Anexo 8 Informe Autoevaluación del Sistema de ci contable.xls',
                url: '/assets/files/camara_representantes/01. 2022/08 Anexo No. 8 Informe Autoevaluación del Sistema de ci contable/Anexo 8 Informe Autoevaluación del Sistema de ci contable.xls',
              },
            ],
          },
          {
            id: 9,
            nombre: 'Anexo No. 9 Plan de Mejoramiento CGR',
            files: [
              {
                id: 10,
                tipo: 'excel',
                nombre: 'Anexo 9 Plan de Mejoramiento CGR.xlsx',
                url: '/assets/files/camara_representantes/01. 2022/09 Anexo No. 9 Plan de Mejoramiento CGR/Anexo 9 Plan de Mejoramiento CGR.xlsx',
              },
            ],
          },
          {
            id: 10,
            nombre:
              'Anexo No. 10 Informe de Auditoria Seguimientos Planes de Mejoramiento CGR',
            files: [
              {
                id: 11,
                tipo: 'pdf',
                nombre:
                  'INFORME AUDITORIA DE SEGUIMIENTO PMI- CGR I TRIMESTRE DE 2022 27052022.pdf',
                url: '/assets/files/camara_representantes/01. 2022/10 Anexo No. 10 Informe de Auditoria Seguimientos Planes de Mejoramiento CGR/INFORME AUDITORIA DE SEGUIMIENTO PMI- CGR I TRIMESTRE DE 2022 27052022.pdf',
              },
              {
                id: 12,
                tipo: 'pdf',
                nombre:
                  'INFORME AUDITORIA DE SEGUIMIENTO PMI- CGR II TRIMESTRE DE 2022 07102022 (6).pdf',
                url: '/assets/files/camara_representantes/01. 2022/10 Anexo No. 10 Informe de Auditoria Seguimientos Planes de Mejoramiento CGR/INFORME AUDITORIA DE SEGUIMIENTO PMI- CGR II TRIMESTRE DE 2022 07102022 (6).pdf',
              },
              {
                id: 13,
                tipo: 'pdf',
                nombre:
                  'INFORME AUDITORIA DE SEGUIMIENTO PMI- CGR IV TRIMESTRE DE 2022 16022023 (3) (1).pdf',
                url: '/assets/files/camara_representantes/01. 2022/10 Anexo No. 10 Informe de Auditoria Seguimientos Planes de Mejoramiento CGR/INFORME AUDITORIA DE SEGUIMIENTO PMI- CGR IV TRIMESTRE DE 2022 16022023 (3) (1).pdf',
              },
              {
                id: 14,
                tipo: 'pdf',
                nombre:
                  'INFORME AUDITORIA DE SEGUIMIENTO PMI-CGR III TRIMESTRE DE 2022.pdf',
                url: '/assets/files/camara_representantes/01. 2022/10 Anexo No. 10 Informe de Auditoria Seguimientos Planes de Mejoramiento CGR/INFORME AUDITORIA DE SEGUIMIENTO PMI-CGR III TRIMESTRE DE 2022.pdf',
              },
            ],
          },
        ],
      },
      {
        id: 2,
        nombre: '2021',
        files: [
          {
            id: 15,
            tipo: 'zip',
            nombre: 'InfoCamaraRepresentantes2021.zip',
            url: '/assets/files/camara_representantes/02. 2021/InfoCamaraRepresentantes2021.zip',
          },
        ],
      },
      {
        id: 3,
        nombre: '2020',
        files: [
          {
            id: 16,
            tipo: 'zip',
            nombre: 'INFORME A LA CAMARA 2020 FPS FNC.zip',
            url: '/assets/files/camara_representantes/03. 2020/INFORME A LA CAMARA 2020 FPS FNC.zip',
          },
        ],
        acordion: [],
      },
      {
        id: 4,
        nombre: '2019',
        files: [
          {
            id: 17,
            tipo: 'zip',
            nombre: 'INFORME A LA CÁMARA 2019 FPS.zip',
            url: '/assets/files/camara_representantes/04. 2019/INFORME A LA CÁMARA 2019 FPS.zip',
          },
        ],
        acordion: [],
      },
      {
        id: 1,
        nombre: '2018',
        files: [
          {
            id: 1,
            tipo: 'zip',
            nombre: 'InfoCamaraRepresentantes2018.zip',
            url: '/assets/files/camara_representantes/05. 2018/InfoCamaraRepresentantes2018.zip',
          },
        ],
      },
      {
        id: 2,
        nombre: '2017',
        files: [
          {
            id: 2,
            tipo: 'zip',
            nombre: 'InfoCamaraRepresentantes2017.zip',
            url: '/assets/files/camara_representantes/06. 2017/InfoCamaraRepresentantes2017.zip',
          },
        ],
      },
      {
        id: 3,
        nombre: '2016',
        files: [
          {
            id: 3,
            tipo: 'zip',
            nombre: 'InfoCamaraRepresentantes2016.zip',
            url: '/assets/files/camara_representantes/07. 2016/InfoCamaraRepresentantes2016.zip',
          },
        ],
      },
    ];
  }
}
