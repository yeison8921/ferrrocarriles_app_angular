import { Component } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { AcordionAnidadoFiles } from '../../../interfaces/acordion';

@Component({
  selector: 'app-gestion-documental',
  standalone: true,
  imports: [NgbAccordionModule],
  templateUrl: './gestion-documental.component.html',
  styleUrl: './gestion-documental.component.css'
})
export class GestionDocumentalComponent {

  items: AcordionAnidadoFiles[] = [];
  constructor() {
    this.items = [
      {
        id: 1,
        nombre: 'Indicadores estrategicos',
        acordion: [
          {
            id: 1,
            nombre: '2023',
            files: [
              {
                id: 1,
                nombre: 'INDICADORES ESTRATEGICOS 2023.pdf',
                tipo: 'pdf',
                url: '.pdf',
              },
            ],
          },
        ],
      },
      {
        id: 2,
        nombre: 'Indicadores de gestión',
        acordion: [
          {
            id: 1,
            nombre: '2023',
            files: [
              {
                id: 1,
                nombre: 'INDICADORES DE GESTIÓN FPS FNC 2023.pdf',
                tipo: 'pdf',
                url: '.pdf',
              },
            ],
          },
        ],
      },
      {
        id: 3,
        nombre: 'Indicadores de procesos',
        acordion: [
          {
            id: 1,
            nombre: '2020',
            files: [
              {
                id: 1,
                nombre: 'FORMULACION DE INDICADORES PROCESO.PDF',
                tipo: 'pdf',
                url: '.pdf',
              },
            ],
          },
        ],
      },
    ];
  }
}
