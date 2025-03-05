import { Component } from '@angular/core';
import { AcordionFiles } from '../../../interfaces/acordion';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-afiliaciones',
  standalone: true,
  imports: [NgbAccordionModule, NgFor],
  templateUrl: './afiliaciones.component.html',
  styleUrl: './afiliaciones.component.css',
})
export class AfiliacionesComponent {
  items: AcordionFiles[] = [];
  constructor() {
    this.items = [
      {
        id: 1,
        nombre: 'Cuotas moderadoras y copagos ',
        files: [
          {
            id: 1,
            tipo: 'pdf',
            nombre: '01. Cuotas moderadoras y copagos 2024.pdf',
            url: 'assets/files/afiliaciones/Cuotas Moderadoras y Copagos/02. Cuota Moderadora y Copagos 2024.pdf',
          },
          {
            id: 2,
            tipo: 'pdf',
            nombre: '02. Cuotas moderadoras y copagos 2023.pdf',
            url: 'assets/files/afiliaciones/Cuotas Moderadoras y Copagos/03. Cuota Moderadora y Copagos 2023.pdf',
          },
          {
            id: 3,
            tipo: 'pdf',
            nombre: '03. Cuotas moderadoras y copagos 2022.pdf',
            url: 'assets/files/afiliaciones/Cuotas Moderadoras y Copagos/04. Cuota Moderadora y Copagos 2022.pdf',
          },
          {
            id: 4,
            tipo: 'pdf',
            nombre: '04. Cuotas moderadoras y copagos 2021.pdf',
            url: 'assets/files/afiliaciones/Cuotas Moderadoras y Copagos/05. Cuota Moderadora y Copagos 2021.pdf',
          },
          {
            id: 5,
            tipo: 'pdf',
            nombre: '05. Cuotas moderadoras y copagos 2020.pdf',
            url: 'assets/files/afiliaciones/Cuotas Moderadoras y Copagos/06. Cuota Moderadora y Copagos 2020.pdf',
          },
          {
            id: 6,
            tipo: 'pdf',
            nombre: '06. Cuotas moderadoras y copagos 2019.pdf',
            url: 'assets/files/afiliaciones/Cuotas Moderadoras y Copagos/07. Cuota Moderadora y Copagos 2019.pdf',
          },
        ],
      },
      {
        id: 2,
        nombre: 'Requisitos necesiarios para la afiliación',
        files: [
          {
            id: 1,
            tipo: 'pdf',
            nombre: '01. Requisitos de Afiliacion.pdf',
            url: 'assets/files/afiliaciones/Requisitos Necesarios para la Afiliacion/01. Requisitos de Afiliacion.pdf',
          },
        ],
      },
      {
        id: 3,
        nombre: 'Valores historicos upc adicional',
        files: [
          {
            id: 1,
            tipo: 'pdf',
            nombre: '01. Valores UPC Adicional 2024.pdf',
            url: '/assets/files/afiliaciones/Valores Historicos UPC Adicional/02. Valores UPC Adicional 2024.pdf',
          },
          {
            id: 2,
            tipo: 'pdf',
            nombre: '02. Valores UPC Adicional 2023.pdf',
            url: '/assets/files/afiliaciones/Valores Historicos UPC Adicional/03. Valores UPC Adicional 2023.pdf',
          },
          {
            id: 3,
            tipo: 'pdf',
            nombre: '03. Valores UPC Adicional 2022.pdf',
            url: '/assets/files/afiliaciones/Valores Historicos UPC Adicional/04. Valores UPC Adicional 2022.pdf',
          },
          {
            id: 4,
            tipo: 'pdf',
            nombre: '04. Valores UPC Adicional 2021.pdf',
            url: '/assets/files/afiliaciones/Valores Historicos UPC Adicional/05. Valores UPC Adicional 2021.pdf',
          },
          {
            id: 5,
            tipo: 'pdf',
            nombre: '05. Valores UPC Adicional 2020.pdf',
            url: '/assets/files/afiliaciones/Valores Historicos UPC Adicional/06. Valores UPC Adicional 2020.pdf',
          },
          {
            id: 6,
            tipo: 'pdf',
            nombre: '06. Valores UPC Adicional 2019.pdf',
            url: '/assets/files/afiliaciones/Valores Historicos UPC Adicional/07. Valores UPC Adicional 2019.pdf',
          },
        ],
      },
    ];
  }
}
