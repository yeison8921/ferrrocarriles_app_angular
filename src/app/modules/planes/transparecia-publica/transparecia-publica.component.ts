import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { AcordionFiles } from '../../../interfaces/acordion';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-transparecia-publica',
  standalone: true,
  imports: [ CommonModule,NgbAccordionModule],
  templateUrl: './transparecia-publica.component.html',
  styleUrl: './transparecia-publica.component.css'
})
export class TranspareciaPublicaComponent {

   items: AcordionFiles[] = [];
  constructor() {
    this.items = [
      {
        id:1,
        nombre:"2025",
        files:
        [
          {
            id:1,
            tipo:"excel",
            url:"/assets/files/planes/riesgo/14.2025/PM RIESGOS Y OPORTUNIDADES I TRIMESTRE 2025 DEF.xlsx",
            nombre:"PM RIESGOS Y OPORTUNIDADES I TRIMESTRE 2025 DEF.xlsx"
          }
        ]
      },
      
    ];
  }
}
