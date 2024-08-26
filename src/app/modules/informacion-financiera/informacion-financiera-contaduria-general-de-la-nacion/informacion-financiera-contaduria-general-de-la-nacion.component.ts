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
        nombre: '2022 - 2023',
        files: [
          {
            id: 1,
            tipo: 'pdf',
            url: '/assets/files/empalme/01. 2022/INFORME EMPLAME SECTORIAL ENTRE GOBIERNOS NACIONALES -Fonferrocarriles 15062022 ...pdf',
            nombre:
              'ESTADOS FINANCIEROS VIGENCIA 2022-2023 (1).pdf',
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
            url: '/assets/files/empalme/02. 2018/INFORME_DE_EMPALME_PRESIDENCIA_2018.pdf',
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
            url: '/assets/files/empalme/03. 2017/INFORME_DE_EMPALME_PRESIDENCIA_2017.zip',
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
            url: '/assets/files/empalme/03. 2017/INFORME_DE_EMPALME_PRESIDENCIA_2017.zip',
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
            url: '/assets/files/empalme/03. 2017/INFORME_DE_EMPALME_PRESIDENCIA_2017.zip',
            nombre: 'INFORMACIÓN FINANCIERA COMPARATIVA 2018 2019 CONTADURIA.pdf',
          },
          {
            id: 1,
            tipo: 'zip',
            url: '/assets/files/empalme/03. 2017/INFORME_DE_EMPALME_PRESIDENCIA_2017.zip',
            nombre: 'REVELACIONES VIGENCIA 2019.pdf',
          },
        ],
      }
    ];
  }

}
