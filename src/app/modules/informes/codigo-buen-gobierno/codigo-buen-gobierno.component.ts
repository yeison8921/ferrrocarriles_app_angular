import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { File } from '../../../interfaces/acordion';

@Component({
  selector: 'app-codigo-buen-gobierno',
  standalone: true,
  imports: [NgbAccordionModule, NgFor],
  templateUrl: './codigo-buen-gobierno.component.html',
  styleUrl: './codigo-buen-gobierno.component.css',
})
export class CodigoBuenGobiernoComponent {
  files: File[] = [];
  constructor() {
    this.files = [
      {
        id: 1,
        tipo: 'pdf',
        nombre: 'Código de Buen Gobierno 2020-02-25.pdf',
        url: '/assets/files/codigo_buen_gobierno/Código de Buen Gobierno 2020-02-25.pdf',
      },
      {
        id: 2,
        tipo: 'pdf',
        nombre: 'Código de Buen Gobierno 2020FEB25.pdf',
        url: '/assets/files/codigo_buen_gobierno/Código de Buen Gobierno 2020FEB25.pdf',
      },
      {
        id: 3,
        tipo: 'pdf',
        nombre: 'Código de Buen Gobierno.pdf',
        url: '/assets/files/codigo_buen_gobierno/Código de Buen Gobierno.pdf',
      },
    ];
  }
}
