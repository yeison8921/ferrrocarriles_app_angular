import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { AcordionAnidadoFiles } from '../../../interfaces/acordion';

@Component({
  selector: 'app-informes-pqrs',
  standalone: true,
  imports: [NgbAccordionModule, NgFor],
  templateUrl: './informes-pqrs.component.html',
  styleUrl: './informes-pqrs.component.css',
})
export class InformesPqrsComponent {
  items: AcordionAnidadoFiles[] = [];
  constructor() {
    this.items = [
      {
        id: 1,
        nombre: '2024',
        files: [
          {
            id: 1,
            tipo: 'pdf',
            nombre: 'INFORME PQRSD I TRIMESTRE 2024.pdf',
            url: '/assets/files/pqrs/01. 2024/INFORME PQRSD  I TRIMESTRE 2024.pdf',
          },
          {
            id: 2,
            tipo: 'pdf',
            nombre: 'INFORME PQRSDF II TRIMESTRE 2024.pdf',
            url: '/assets/files/pqrs/01. 2024/INFORME PQRSDF II TRIMESTRE 2024.pdf',
          },

          {
            id: 3,
            tipo: 'pdf',
            nombre: 'INFORME PQRSDF III TRIMESTRE 2024.pdf',
            url: '/assets/files/pqrs/01. 2024/INFORME PQRSD III TRIMESTRE 2024.pdf',
          },
          {
            id: 4,
            tipo: 'pdf',
            nombre: 'INFORME PQRSDF IV TRIMESTRE 2024.pdf',
            url: '/assets/files/pqrs/01. 2024/INFORME PQRSDF IV TRIMESTRE 2024 mm.pdf',
          },
        ],
      },
      {
        id: 2,
        nombre: '2023',
        files: [
          {
            id: 3,
            tipo: 'pdf',
            nombre: '01. INFORME DE PQRSD I TRIMESTRE 2023.pdf',
            url: '/assets/files/pqrs/02. 2023/01. INFORME DE PQRSD I TRIMESTRE 2023.pdf',
          },
          {
            id: 4,
            tipo: 'pdf',
            nombre: '02. INFORME DE PQRSD II TRIMESTRE 2023.pdf',
            url: '/assets/files/pqrs/02. 2023/02. INFORME DE PQRSD II TRIMESTRE 2023.pdf',
          },
          {
            id: 5,
            tipo: 'pdf',
            nombre: '03. INFORME PQRSD III TRIMESTRE 2023.pdf',
            url: '/assets/files/pqrs/02. 2023/03. INFORME PQRSD III TRIMESTRE 2023.pdf',
          },
          {
            id: 6,
            tipo: 'pdf',
            nombre: '04. INFORME PQRSD IV TRMESTRE 2023.pdf',
            url: '/assets/files/pqrs/02. 2023/04. INFORME PQRSD  IV TRMESTRE 2023.pdf',
          },
        ],
      },
      {
        id: 3,
        nombre: '2022',
        files: [
          {
            id: 7,
            tipo: 'pdf',
            nombre: '01. INFORME DE PQRSD I TRIMESTRE.pdf',
            url: '/assets/files/pqrs/03. 2022/01. INFORME DE PQRSD I TRIMESTRE.pdf',
          },
          {
            id: 8,
            tipo: 'pdf',
            nombre: '02. INFORME PQRSD II TRIMESTRE 2022.pdf',
            url: '/assets/files/pqrs/03. 2022/02. INFORME PQRSD II TRIMESTRE 2022.pdf',
          },
          {
            id: 9,
            tipo: 'pdf',
            nombre: '03. INFORME PQRSD  III TRMESTRE 2022.pdf',
            url: '/assets/files/pqrs/03. 2022/03. INFORME PQRSD  III TRMESTRE 2022.pdf',
          },
          {
            id: 10,
            tipo: 'pdf',
            nombre: '04. INFORME PQRSD IV TRIMESTRE 2022.pdf',
            url: '/assets/files/pqrs/03. 2022/04. INFORME PQRSD IV TRIMESTRE 2022.pdf',
          },
        ],
      },
      {
        id: 4,
        nombre: '2021',
        files: [
          {
            id: 11,
            tipo: 'pdf',
            nombre: '01 INFORME I TRMESTRE 2021.pdf',
            url: '/assets/files/pqrs/04. 2021/01 INFORME I TRMESTRE 2021.pdf',
          },
          {
            id: 12,
            tipo: 'pdf',
            nombre: '02 INFORME II TRIMESTRE 2021.pdf',
            url: '/assets/files/pqrs/04. 2021/02 INFORME II TRIMESTRE 2021.pdf',
          },
          {
            id: 13,
            tipo: 'pdf',
            nombre: '03 INFORME III TRMESTRE 2021.pdf',
            url: '/assets/files/pqrs/04. 2021/03 INFORME III TRMESTRE 2021.pdf',
          },
          {
            id: 14,
            tipo: 'pdf',
            nombre: '04 INFORME PQRSD IV TRMESTRE 2021.pdf',
            url: '/assets/files/pqrs/04. 2021/04 INFORME PQRSD  IV TRMESTRE 2021.pdf',
          },
        ],
      },
      {
        id: 5,
        nombre: '2020',
        files: [
          {
            id: 15,
            tipo: 'pdf',
            nombre: 'INFORME I TRIMESTRE 2020 PQRDS.pdf',
            url: '/assets/files/pqrs/05. 2020/INFORME I TRIMESTRE 2020 PQRDS.pdf',
          },
          {
            id: 16,
            tipo: 'pdf',
            nombre: 'INFORME II TRIMESTRE 2020 PQRDS.pdf',
            url: '/assets/files/pqrs/05. 2020/INFORME II TRIMESTRE 2020 PQRDS.pdf',
          },
          {
            id: 17,
            tipo: 'pdf',
            nombre: 'INFORME III TRIMESTRE 2020 PQRDS.pdf',
            url: '/assets/files/pqrs/05. 2020/INFORME III TRIMESTRE 2020 PQRDS.pdf',
          },
          {
            id: 18,
            tipo: 'pdf',
            nombre: 'INFORME IV TRIMESTRE 2020 PQRDS.pdf',
            url: '/assets/files/pqrs/05. 2020/INFORME IV TRIMESTRE 2020 PQRDS.pdf',
          },
        ],
      },
      {
        id: 6,
        nombre: '2019',
        files: [
          {
            id: 19,
            tipo: 'pdf',
            nombre: 'INFORME PQRSD III TRIMESTRE DE 2019.pdf',
            url: '/assets/files/pqrs/06. 2019/INFORME PQRSD III TRIMESTRE DE 2019.pdf',
          },
          {
            id: 20,
            tipo: 'pdf',
            nombre: 'INFORME PQRSD IV TRIMESTRE DE 2019.pdf',
            url: '/assets/files/pqrs/06. 2019/INFORME PQRSD IV TRIMESTRE DE 2019.pdf',
          },
          {
            id: 21,
            tipo: 'pdf',
            nombre: 'INFORMEIITRIMESTRE2019.pdf',
            url: '/assets/files/pqrs/06. 2019/INFORMEIITRIMESTRE2019.pdf',
          },
          {
            id: 22,
            tipo: 'pdf',
            nombre: 'INFORMEITRIMESTRE2019.pdf',
            url: '/assets/files/pqrs/06. 2019/INFORMEITRIMESTRE2019.pdf',
          },
        ],
      },
      {
        id: 7,
        nombre: '2018',
        files: [
          {
            id: 23,
            tipo: 'pdf',
            nombre: 'InfoPQRSDIIItrimestre2018.pdf',
            url: '/assets/files/pqrs/07. 2018/InfoPQRSDIIItrimestre2018.pdf',
          },
          {
            id: 24,
            tipo: 'pdf',
            nombre: 'InfoPQRSDIItrimestre2018.pdf',
            url: '/assets/files/pqrs/07. 2018/InfoPQRSDIItrimestre2018.pdf',
          },
          {
            id: 25,
            tipo: 'pdf',
            nombre: 'InfoPQRSDIVtrimestre2018.pdf',
            url: '/assets/files/pqrs/07. 2018/InfoPQRSDIVtrimestre2018.pdf',
          },
          {
            id: 26,
            tipo: 'pdf',
            nombre: 'InfoPQRSDIVtrimestre2018.pdf',
            url: '/assets/files/pqrs/07. 2018/InfoPQRSDIVtrimestre2018.pdf',
          },
        ],
      },
      {
        id: 8,
        nombre: '2017',
        files: [
          {
            id: 27,
            tipo: 'pdf',
            nombre: 'InfoPQRSDIVtrimestre2017.pdf',
            url: '/assets/files/pqrs/08. 2017/InfoPQRSDIVtrimestre2017.pdf',
          },
          {
            id: 28,
            tipo: 'pdf',
            nombre: 'InfoPQRSDIIItrimestre2017.pdf',
            url: '/assets/files/pqrs/08. 2017/InfoPQRSDIIItrimestre2017.pdf',
          },
          {
            id: 29,
            tipo: 'pdf',
            nombre: 'InfoPQRSDIItrimestre2017.pdf',
            url: '/assets/files/pqrs/08. 2017/InfoPQRSDIItrimestre2017.pdf',
          },
          {
            id: 30,
            tipo: 'pdf',
            nombre: 'InfoPQRSDItrimestre2017.pdf',
            url: '/assets/files/pqrs/08. 2017/InfoPQRSDItrimestre2017.pdf',
          },
        ],
      },
      {
        id: 9,
        nombre: '2016',
        acordion: [
          {
            id: 10,
            nombre: 'Informe General de PQRSD Semestral',
            files: [
              {
                id: 31,
                tipo: 'pdf',
                nombre: 'InfoPQRSDIsemestre2016.pdf',
                url: '/assets/files/pqrs/09. 2016/Informe General de PQRSD Semestral/InfoPQRSDIsemestre2016.pdf',
              },
            ],
          },
          {
            id: 10,
            nombre: 'Informe General de PQRSD Trimestral',
            files: [
              {
                id: 32,
                tipo: 'pdf',
                nombre: 'InfoPQRSDIVtrimestre2016.pdf',
                url: '/assets/files/pqrs/09. 2016/Informe General de PQRSD Trimestral/InfoPQRSDIVtrimestre2016.pdf',
              },
              {
                id: 33,
                tipo: 'pdf',
                nombre: 'InfoPQRSDIItrimestre2016',
                url: '/assets/files/pqrs/09. 2016/Informe General de PQRSD Trimestral/InfoPQRSDIItrimestre2016.pdf',
              },
              {
                id: 34,
                tipo: 'pdf',
                nombre: 'InfoPQRSDItrimestre2016.pdf',
                url: '/assets/files/pqrs/09. 2016/Informe General de PQRSD Trimestral/InfoPQRSDItrimestre2016.pdf',
              },
            ],
          },
        ],
      },
      {
        id: 1,
        nombre: '2015',
        files: [
          {
            id: 1,
            tipo: 'pdf',
            nombre: 'InfoPQRSDIIItrimestre2015.pdf',
            url: '/assets/files/pqrs/10. 2015/InfoPQRSDIIItrimestre2015.pdf',
          },
          {
            id: 2,
            tipo: 'pdf',
            nombre: 'InfoPQRSDIItrimestre2015.pdf',
            url: '/assets/files/pqrs/10. 2015/InfoPQRSDIItrimestre2015.pdf',
          },
          {
            id: 3,
            tipo: 'pdf',
            nombre: 'InfoPQRSDIVtrimestre2015.pdf',
            url: '/assets/files/pqrs/10. 2015/InfoPQRSDIVtrimestre2015.pdf',
          },
          {
            id: 4,
            tipo: 'pdf',
            nombre: 'InfoPQRSDItrimestre2015.pdf',
            url: '/assets/files/pqrs/10. 2015/InfoPQRSDItrimestre2015.pdf',
          },
        ],
      },
      {
        id: 2,
        nombre: '2014',
        files: [
          {
            id: 1,
            tipo: 'pdf',
            nombre: 'InfoPQRSDIIItrimestre2014.pdf',
            url: '/assets/files/pqrs/11. 2014/InfoPQRSDIIItrimestre2014.pdf',
          },
          {
            id: 2,
            tipo: 'pdf',
            nombre: 'InfoPQRSDIItrimestre2014.pdf',
            url: '/assets/files/pqrs/11. 2014/InfoPQRSDIItrimestre2014.pdf',
          },
          {
            id: 3,
            tipo: 'pdf',
            nombre: 'InfoPQRSDIVtrimestre2014.pdf',
            url: '/assets/files/pqrs/11. 2014/InfoPQRSDIVtrimestre2014.pdf',
          },
          {
            id: 4,
            tipo: 'pdf',
            nombre: 'InfoPQRSDItrimestre2014.pdf',
            url: '/assets/files/pqrs/11. 2014/InfoPQRSDItrimestre2014.pdf',
          },
        ],
      },
    ];
  }
}
