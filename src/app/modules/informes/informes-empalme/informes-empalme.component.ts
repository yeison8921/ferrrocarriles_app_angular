import { Component } from '@angular/core';
import { AcordionFiles } from '../../../interfaces/acordion';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-informes-empalme',
  standalone: true,
  imports: [NgbAccordionModule, NgFor],
  templateUrl: './informes-empalme.component.html',
  styleUrl: './informes-empalme.component.css',
})
export class InformesEmpalmeComponent {
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
            url: '/assets/files/empalme/01. 2022/INFORME EMPLAME SECTORIAL ENTRE GOBIERNOS NACIONALES -Fonferrocarriles 15062022 ...pdf',
            nombre:
              'INFORME EMPLAME SECTORIAL ENTRE GOBIERNOS NACIONALES -Fonferrocarriles 15062022 ...pdf',
          },
        ],
      },
      {
        id: 1,
        nombre: '2018',
        files: [
          {
            id: 1,
            tipo: 'pdf',
            url: '/assets/files/empalme/02. 2018/INFORME_DE_EMPALME_PRESIDENCIA_2018.pdf',
            nombre: 'INFORME_DE_EMPALME_PRESIDENCIA_2018.pdf',
          },
        ],
      },
      {
        id: 1,
        nombre: '2017',
        files: [
          {
            id: 1,
            tipo: 'zip',
            url: '/assets/files/empalme/03. 2017/INFORME_DE_EMPALME_PRESIDENCIA_2017.zip',
            nombre: 'INFORME_DE_EMPALME_PRESIDENCIA_2017.zip',
          },
        ],
      },
    ];
  }
}
