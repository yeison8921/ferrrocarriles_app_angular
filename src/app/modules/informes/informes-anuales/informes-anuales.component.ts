import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { File } from '../../../interfaces/acordion';

@Component({
  selector: 'app-informes-anuales',
  standalone: true,
  imports: [NgbAccordionModule, NgFor],
  templateUrl: './informes-anuales.component.html',
  styleUrl: './informes-anuales.component.css',
})
export class InformesAnualesComponent {
  files: File[] = [];
  constructor() {
    this.files = [
      {
        id: 1,
        tipo: 'pdf',
        url: '/assets/files/informe_anual/01.%20INFORME%20DE%20GESTION%20ANUAL%20FPS%202023.pdf',
        nombre: '01. INFORME DE GESTION ANUAL FPS 2023.pdf',
      },
      {
        id: 1,
        tipo: 'pdf',
        url: '/assets/files/informe_anual/02.%20INFORME%20DE%20GESTION%20ANUAL%20FPS%202022.pdf',
        nombre: '02. INFORME DE GESTION ANUAL FPS 2022.pdf',
      },
      {
        id: 1,
        tipo: 'pdf',
        url: '/assets/files/informe_anual/03.%20INFORME%20DE%20GESTION%20ANUAL%20FPS%202021.pdf',
        nombre: '03. INFORME DE GESTION ANUAL FPS 2021.pdf',
      },
    ];
  }
}
