import { Component } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-calendario',
  standalone: true,
  imports: [NgbAccordionModule, NgFor],
  templateUrl: './calendario.component.html',
  styleUrl: './calendario.component.css',
})
export class CalendarioComponent {
  items: any = [
    {
      id: 1,
      nombre: '2025',
       files: [
          {
            id: 1,
            tipo: '',
            url: '',
            nombre: '19 DE JUNIO 2025  - EVENTO DE RENDICIÓN DE CUENTA Y AUDIENCIA PÚBLICA DE VIGENCIA 2024',
          },
         
        ],
    }
  ];
}
