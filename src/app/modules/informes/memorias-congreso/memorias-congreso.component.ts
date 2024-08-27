import { Component } from '@angular/core';
import { AcordionFiles } from '../../../interfaces/acordion';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-memorias-congreso',
  standalone: true,
  imports: [NgbAccordionModule, NgFor],
  templateUrl: './memorias-congreso.component.html',
  styleUrl: './memorias-congreso.component.css',
})
export class MemoriasCongresoComponent {
  items: AcordionFiles[] = [];
  constructor() {
    this.items = [
      {
        id: 1,
        nombre: '2022',
        files: [
          {
            id: 1,
            tipo: 'pdf',
            nombre: 'INFORME AL CONGRESO JUNIO 2022 - MAYO 2023.pdf',
            url: '/assets/files/memorias_congreso/01. 2022/INFORME AL CONGRESO JUNIO 2022 - MAYO 2023.pdf',
          },
        ],
      },
      {
        id: 2,
        nombre: '2021',
        files: [
          {
            id: 1,
            tipo: 'pdf',
            nombre: '01 Informe al Congreso 2020-2021 FPSFNC.pdf',
            url: '/assets/files/memorias_congreso/02. 2021/01 Informe al Congreso 2020-2021 FPSFNC.pdf',
          },
          {
            id: 2,
            tipo: 'pdf',
            nombre: '02 Informe al Congreso Propuesta 2020-2021 V2.pdf',
            url: '/assets/files/memorias_congreso/02. 2021/02 Informe al Congreso Propuesta 2020-2021 V2.pdf',
          },
        ],
      },
      {
        id: 3,
        nombre: '2020',
        files: [
          {
            id: 1,
            tipo: 'pdf',
            nombre: 'Informe al Congreso Propuesta 2019-2020.pdf',
            url: '/assets/files/memorias_congreso/03. 2020/Informe al Congreso Propuesta 2019-2020.pdf',
          },
        ],
      },
      {
        id: 4,
        nombre: '2019',
        files: [
          {
            id: 1,
            tipo: 'pdf',
            nombre: 'INFORMECONGRESO2019.pdf',
            url: '/assets/files/memorias_congreso/04. 2019/INFORMECONGRESO2019.pdf',
          },
        ],
      },
      {
        id: 5,
        nombre: '2018',
        files: [
          {
            id: 1,
            tipo: 'pdf',
            nombre: 'INFORMECONGRESO2018.pdf',
            url: '/assets/files/memorias_congreso/05. 2018/INFORMECONGRESO2018.pdf',
          },
        ],
      },
      {
        id: 6,
        nombre: '2017',
        files: [
          {
            id: 1,
            tipo: 'pdf',
            nombre: 'INFORMECONGRESO2017.pdf',
            url: '/assets/files/memorias_congreso/06. 2017/INFORMECONGRESO2017.pdf',
          },
        ],
      },
      {
        id: 7,
        nombre: '2016',
        files: [
          {
            id: 1,
            tipo: 'pdf',
            nombre: 'INFORMECONGRESO2016.pdf',
            url: '/assets/files/memorias_congreso/07. 2016/INFORMECONGRESO2016.pdf',
          },
        ],
      },
      {
        id: 8,
        nombre: '2015',
        files: [
          {
            id: 1,
            tipo: 'pdf',
            nombre: 'INFORMECONGRESO2015.pdf',
            url: '/assets/files/memorias_congreso/08. 2015/INFORMECONGRESO2015.pdf',
          },
        ],
      },
      {
        id: 9,
        nombre: '2014',
        files: [
          {
            id: 1,
            tipo: 'pdf',
            nombre: 'INFORMECONGRESO2014.pdf',
            url: '/assets/files/memorias_congreso/09. 2014/INFORMECONGRESO2014.pdf',
          },
        ],
      },
      {
        id: 10,
        nombre: '2013',
        files: [
          {
            id: 1,
            tipo: 'pdf',
            nombre: 'INFORMECONGRESO2013.pdf',
            url: '/assets/files/memorias_congreso/10. 2013/INFORMECONGRESO2013.pdf',
          },
        ],
      },
      {
        id: 11,
        nombre: '2012',
        files: [
          {
            id: 1,
            tipo: 'pdf',
            nombre: 'INFORMECONGRESO2012.pdf',
            url: '/assets/files/memorias_congreso/11. 2012/INFORMECONGRESO2012.pdf',
          },
        ],
      },
      {
        id: 12,
        nombre: '2011',
        files: [
          {
            id: 1,
            tipo: 'pdf',
            nombre: 'INFORMECONGRESO2011.pdf',
            url: '/assets/files/memorias_congreso/12. 2011/INFORMECONGRESO2011.pdf',
          },
        ],
      },
      {
        id: 13,
        nombre: '2010',
        files: [
          {
            id: 1,
            tipo: 'pdf',
            nombre: 'INFORMECONGRESO2010.pdf',
            url: '/assets/files/memorias_congreso/13. 2010/INFORMECONGRESO2010.pdf',
          },
        ],
      },
    ];
  }
}
