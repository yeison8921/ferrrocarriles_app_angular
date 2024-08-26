import { Component } from '@angular/core';
import { AcordionFiles } from '../../../interfaces/acordion';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-informacion-financiera-superintendencia-nacional-de-salud',
  standalone: true,
  imports: [NgbAccordionModule, NgFor],
  templateUrl: './informacion-financiera-superintendencia-nacional-de-salud.component.html',
  styleUrl: './informacion-financiera-superintendencia-nacional-de-salud.component.css'
})
export class InformacionFinancieraSuperintendenciaNacionalDeSaludComponent {

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
              'ESTADOS FINANCIEROS 2022-2023 SUPERSALUD P.pdf',
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
            nombre: 'INFORMACIÓN FINANCIERA COMPARATIVA 2021-2022 SUPERSALUD.pdf',
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
            nombre: 'INFORMACIÓN FINANCIERA COMPARATIVA 2020-2021 SUPERSALUD.pdf',
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
            nombre: 'INFORMACIÓN FINANCIERA COMPARATIVA 2019-2020 SUPERSALUD.pdf',
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
            nombre: 'INFORMACIÓN FINANCIERA COMPARATIVA 2018-2019 SUPERSALUD.pdf',
          },
        ],
      }
    ];
  }

}

