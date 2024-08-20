import { Component } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { AcordionAnidadoFiles } from '../../../interfaces/acordion';

@Component({
  selector: 'app-plan-fortalecimiento',
  standalone: true,
  imports: [NgbAccordionModule],
  templateUrl: './plan-fortalecimiento.component.html',
  styleUrl: './plan-fortalecimiento.component.css'
})
export class PlanFortalecimientoComponent {
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
