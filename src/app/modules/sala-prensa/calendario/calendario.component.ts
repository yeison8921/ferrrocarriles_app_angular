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
    },
    {
      id: 1,
      nombre: '2024',
    },
    {
      id: 1,
      nombre: '2023',
    },
    {
      id: 1,
      nombre: '2022',
    },
    {
      id: 1,
      nombre: '2021',
    },
    {
      id: 1,
      nombre: '2020',
    },
  ];
}
