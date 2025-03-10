import { Component } from '@angular/core';
import { AcordionFiles } from '../../../interfaces/acordion';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-informacion-financiera-contaduria-general-de-la-nacion',
  standalone: true,
  imports: [NgbAccordionModule, NgFor],
  templateUrl: './informacion-financiera-contaduria-general-de-la-nacion.component.html',
  styleUrl: './informacion-financiera-contaduria-general-de-la-nacion.component.css'
})
export class InformacionFinancieraContaduriaGeneralDeLaNacionComponent {

  items: AcordionFiles[] = [];
  constructor() {
    this.items = [

      {
        id: 1,
        nombre: '2023 - 2024',
        files: [
          {
            id: 1,
            tipo: 'pdf',
            url: 'assets/files/informe_contaduria/06. 2023-2024/ESTADOS FINANCIEROS CERTIFICADOS VIGENCIA 2023- 2024.pdf',
            nombre:'ESTADOS FINANCIEROS CERTIFICADOS VIGENCIA 2023- 2024.pdf',
          },
        ],
      },
      {
        id: 1,
        nombre: '2022 - 2023',
        files: [
          {
            id: 1,
            tipo: 'pdf',
            url: 'assets/files/informe_contaduria/01. 2022-2023/ESTADOS FINANCIEROS VIGENCIA  2022- 2023 (1).pdf',
            nombre:'ESTADOS FINANCIEROS VIGENCIA 2022-2023 (1).pdf',
          },
        ],
      },
      {
        id: 1,
        nombre: '2021 - 2022',
        files: [
          {
            id: 1,
            tipo: 'pdf',
            url: 'assets/files/informe_contaduria/02. 2021-2022/ESTADOS FINANCIEROS FPS 2021-2022.pdf',
            nombre: 'ESTADOS FINANCIEROS VIGENCIA FPS 2021-2022.pdf',
          },
        ],
      },
      {
        id: 1,
        nombre: '2020 - 2021',
        files: [
          {
            id: 1,
            tipo: 'zip',
            url: 'assets/files/informe_contaduria/03. 2020-2021/2020-2021.pdf',
            nombre: '2020 -2021',
          },
        ],
      },
      {
        id: 1,
        nombre: '2019 - 2020',
        files: [
          {
            id: 1,
            tipo: 'zip',
            url: 'assets/files/informe_contaduria/04. 2019-2020/Informaci%c3%b3n Financiera 2019-2020.pdf',
            nombre: 'INFORMACIÓN FINANCIERA 2019-2020.pdf',
          },
        ],
      },
      {
        id: 1,
        nombre: '2018 - 2019',
        files: [
          {
            id: 1,
            tipo: 'zip',
            url: 'assets/files/informe_contaduria/05. 2018-2019/Infromacion Financiera Comparativa 2018 2019 CONTADURIA.pdf',
            nombre: 'INFORMACIÓN FINANCIERA COMPARATIVA 2018 2019 CONTADURIA.pdf',
          },
          {
            id: 1,
            tipo: 'zip',
            url: 'assets/files/informe_contaduria/05. 2018-2019/REVELACIONES VIGENCIA 2019.pdf',
            nombre: 'REVELACIONES VIGENCIA 2019.pdf',
          },
        ],
      }
    ];
  }

}
