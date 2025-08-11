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
            tipo:"word",
            url:"/assets/files/planes/programa_etica/PROGRAMA DE TRANSPARENCIA - FPS. Agosto.docx",
            nombre:"PROGRAMA DE TRANSPARENCIA - FPS"
          }
        ]
      },
      
    ];
  }
}
