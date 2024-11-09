import { Component } from '@angular/core';
import { AcordionFiles } from '../../../interfaces/acordion';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-afiliaciones',
  standalone: true,
  imports: [NgbAccordionModule, NgFor],
  templateUrl: './afiliaciones.component.html',
  styleUrl: './afiliaciones.component.css'
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
            url: '/informes/informes-de-empalme/71',
          },
          {
            id: 2,
            tipo: 'pdf',
            nombre: '02. Cuotas moderadoras y copagos 2023.pdf',
            url: '/informes/indicadores-de-gestion/62',
          },
          {
            id: 3,
            tipo: 'pdf',
            nombre: '03. Cuotas moderadoras y copagos 2022.pdf',
            url: '/informes/informe-camara-de-representantes/187',
          },
          {
            id: 4,
            tipo: 'pdf',
            nombre: '04. Cuotas moderadoras y copagos 2021.pdf',
            url: '/informes/informes-fiscales/61',
          },
          {
            id: 5,
            tipo: 'pdf',
            nombre: '05. Cuotas moderadoras y copagos 2020.pdf',
            url: '/informes/memorias-al-congreso-de-la-republica/66',
          },
          {
            id: 6,
            tipo: 'pdf',
            nombre: '06. Cuotas moderadoras y copagos 2019.pdf',
            url: '/informes/informes-pqrs/180',
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
            url: '/assets/files/planeacion-gestion-y-control/ESDESOPSFC02 CARACTERIZACIÓN E IDENTIFICACIÓN DE NECESIDADES DE CIUDADANOS, USUARIOS Y GRUPOS DE INTERÉS DEL FPS FNC TOMO 1.pdf',
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
            url: '/assets/files/planeacion-gestion-y-control/.pdf',
          },
          {
            id: 2,
            tipo: 'pdf',
            nombre: '02. Valores UPC Adicional 2023.pdf',
            url: '/assets/files/planeacion-gestion-y-control/.pdf',
          },
          {
            id: 3,
            tipo: 'pdf',
            nombre: '03. Valores UPC Adicional 2022.pdf',
            url: '/assets/files/planeacion-gestion-y-control/.pdf',
          },
          {
            id: 4,
            tipo: 'pdf',
            nombre: '04. Valores UPC Adicional 2021.pdf',
            url: '/assets/files/planeacion-gestion-y-control/.pdf',
          },
          {
            id: 5,
            tipo: 'pdf',
            nombre: '05. Valores UPC Adicional 2020.pdf',
            url: '/assets/files/planeacion-gestion-y-control/.pdf',
          },
          {
            id: 6,
            tipo: 'pdf',
            nombre: '06. Valores UPC Adicional 2019.pdf',
            url: '/assets/files/planeacion-gestion-y-control/.pdf',
          },        
        ],
      },
    ];
  }
}
