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
        nombre: '2023 - 2024',
        files: [
          {
            id: 1,
            tipo: 'pdf',
            url: 'assets/files/informe_supersalud/2023-202/ESTADOS FINANCIEROS 2024-2023 SUPERSALUD.pdf',
            nombre:
              'ESTADOS FINANCIEROS 2024-2023 SUPERSALUD.pdf',
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
            url: 'assets/files/informe_supersalud/01. 2022 - 2023/ESTADOS FINANCEROS 2022-2023 SUPERSALUD P.pdf',
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
            url: 'assets/files/informe_supersalud/02. 2021 - 2022/INFORMACION FINANCIERA COMPARATIVA 2021-2022 SUPERSALUD.pdf',
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
            url: 'assets/files/informe_supersalud/03. 2020 - 2021/INFORMACION  FINANCIERA   COMPARATVOS 2020-2021 SUPERSALUD.pdf',
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
            url: 'assets/files/informe_supersalud/04. 2019 - 2020/Informacion Financiera Compartiva 2019-2020 SUPERSALUD.pdf',
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
            url: 'assets/files/informe_supersalud/05. 2018 - 2019/Infromacion Financiera comparativa 2018 2019 SUPERSALUD.pdf',
            nombre: 'INFORMACIÓN FINANCIERA COMPARATIVA 2018-2019 SUPERSALUD.pdf',
          },
        ],
      }
    ];
  }

}

