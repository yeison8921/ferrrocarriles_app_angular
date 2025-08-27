import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { AcordionFiles } from '../../../interfaces/acordion';

@Component({
  selector: 'app-informes-fiscales',
  standalone: true,
  imports: [NgbAccordionModule, NgFor],
  templateUrl: './informes-fiscales.component.html',
  styleUrl: './informes-fiscales.component.css',
})
export class InformesFiscalesComponent {
  items: AcordionFiles[] = [];
  constructor() {
    this.items = [
       {
        id: 1,
        nombre: '2024',
        files: [
          {
            id: 1,
            tipo: 'excel',
            nombre: 'PLAN ESTRATÉGICO FPS FNC 2024.xlsx',
            url: '/assets/files/informe_fiscal/2023/PLAN ESTRATÉGICO FPS FNC 2024.xlsx',
          },
           {
            id: 1,
            tipo: 'excel',
            nombre: 'CUENTA O INFORME ANUAL CONSOLIDADO.xlsx',
            url: '/assets/files/informe_fiscal/2023/51_000000456_20241231.xlsx',
          },
           {
            id: 1,
            tipo: 'pdf',
            nombre: 'ESTADOS FINANCIEROS FPS FNC 2024.pdf',
            url: '/assets/files/informe_fiscal/2023/ESTADOS FINANCIEROS FPS FNC 2024.pdf',
          },
           {
            id: 1,
            tipo: 'pdf',
            nombre: '456_Certificado CGR.pdf',
            url: '/assets/files/informe_fiscal/2023/456_Certificado.pdf',
          },
        ],
      },
       {
        id: 1,
        nombre: '2023',
        files: [
          {
            id: 1,
            tipo: 'excel',
            nombre: 'PLAN ESTRATEGICO FPS 2022 - SIRECI.xlsx',
            url: '/assets/files/informe_fiscal/2023/PLAN ESTRATEGICO FPS 2022 - SIRECI.xlsx',
          },
           {
            id: 1,
            tipo: 'excel',
            nombre: 'CUENTA O INFORME ANUAL CONSOLIDADO.xlsx',
            url: '/assets/files/informe_fiscal/2023/51_000000456_20221231.xlsx',
          },
           {
            id: 1,
            tipo: 'pdf',
            nombre: 'JUSTIFICACION DE NO APLICACION DOCUMENTO ELECTRONICO F8.7.pdf',
            url: '/assets/files/informe_fiscal/2023/JUSTIFICACION DE NO APLICACION DOCUMENTO ELECTRONICO F8.7.pdf',
          },
           {
            id: 1,
            tipo: 'pdf',
            nombre: '456_Certificado CGR.pdf',
            url: '/assets/files/informe_fiscal/2023/456_Certificado (10).pdf',
          },
        ],
      },
      {
        id: 1,
        nombre: '2019',
        files: [
          {
            id: 1,
            tipo: 'excel',
            nombre: 'INFORME ANUAL CONSOLIDADO - 2019.xlsx',
            url: '/assets/files/informe_fiscal/01. 2019/INFORME ANUAL CONSOLIDADO - 2019.xlsx',
          },
        ],
      },
      {
        id: 2,
        nombre: '2018',
        files: [
          {
            id: 1,
            tipo: 'pdf',
            nombre: 'ESTADOS FINANCIEROS 2018 CGN.pdf',
            url: '/assets/files/informe_fiscal/02. 2018/ESTADOS FINANCIEROS 2018 CGN.pdf',
          },
          {
            id: 2,
            tipo: 'pdf',
            nombre:
              'JUSTIFICACION AMBIENTAL -CONTRALOR DELEGADO PARA EL  MEDIO AMBIENTE.pdf',
            url: '/assets/files/informe_fiscal/02. 2018/JUSTIFICACION AMBIENTAL -CONTRALOR DELEGADO PARA EL  MEDIO AMBIENTE.pdf',
          },
          {
            id: 3,
            tipo: 'word',
            nombre: 'JUSTIFICACION AMBIENTAL F8.1.odt',
            url: '/assets/files/informe_fiscal/02. 2018/JUSTIFICACION AMBIENTAL F8.1.odt',
          },
          {
            id: 4,
            tipo: 'excel',
            nombre: 'PLAN ESTRATEGICO CONSOLIDADO -2018-FPS LILI.xls',
            url: '/assets/files/informe_fiscal/02. 2018/PLAN ESTRATEGICO CONSOLIDADO -2018-FPS LILI.xls',
          },
          {
            id: 5,
            tipo: 'pdf',
            nombre: 'SALDOS Y MOVIMIENTOS CGN2005001 (1).pdf',
            url: '/assets/files/informe_fiscal/02. 2018/SALDOS Y MOVIMIENTOS CGN2005001 (1).pdf',
          },
          {
            id: 6,
            tipo: 'excel',
            nombre: 'informe anual consolidado.xlsx',
            url: '/assets/files/informe_fiscal/02. 2018/informe anual consolidado.xlsx',
          },
        ],
      },
      {
        id: 3,
        nombre: '2015',
        files: [
          {
            id: 1,
            tipo: 'excel',
            nombre: '51_000000456_20151231_2015.xls',
            url: '/assets/files/informe_fiscal/03. 2015/51_000000456_20151231_2015.xls',
          },
        ],
      },
      {
        id: 4,
        nombre: '2014',
        files: [
          {
            id: 1,
            tipo: 'excel',
            nombre: '51_000000456_20141231.xls',
            url: '/assets/files/informe_fiscal/04. 2014/51_000000456_20141231.xls',
          },
        ],
      },
      {
        id: 5,
        nombre: '2013',
        files: [
          {
            id: 1,
            tipo: 'excel',
            nombre: '51_000000456_20131231_2013.xls',
            url: '/assets/files/informe_fiscal/05. 2013/51_000000456_20131231_2013.xls',
          },
        ],
      },
      {
        id: 6,
        nombre: '2012',
        files: [
          {
            id: 1,
            tipo: 'excel',
            nombre: '51_000000456_20111231.xls',
            url: '/assets/files/informe_fiscal/06. 2012/51_000000456_20111231.xls',
          },
        ],
      },
    ];
  }
}
