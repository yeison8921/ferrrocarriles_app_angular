import { Component } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { AcordionAnidadoFiles } from '../../../interfaces/acordion';

@Component({
  selector: 'app-plan-seguridad',
  standalone: true,
  imports: [NgbAccordionModule],
  templateUrl: './plan-seguridad.component.html',
  styleUrl: './plan-seguridad.component.css'
})
export class PlanSeguridadComponent {
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
                extension: 'pdf',
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
                extension: 'pdf',
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
                extension: 'pdf',
                url: '.pdf',
              },
            ],
          },
        ],
      },
    ];
  }
}
