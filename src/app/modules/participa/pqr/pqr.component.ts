import { Component } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { AcordionFiles } from '../../../interfaces/acordion';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-pqr',
  standalone: true,
  imports: [NgbAccordionModule, NgFor],
  templateUrl: './pqr.component.html',
  styleUrl: './pqr.component.css'
})
export class PqrComponent {
  items: AcordionFiles[] = [];
  constructor() {
    this.items = [
      {
        id: 1,
        nombre: "Publicación temas de interés",
        files: [
            {
              id: 1,
              tipo: "pdf",
              url: "/assets/files/participa/01%20Publicaci%c3%b3n%20temas%20de%20inter%c3%a9s/AVANCE%20PLAN%20SISTEMA%20INTEGRADO%20DE%20GESTION%20-%20MIPG%202023.pdf",
              nombre: "AVANCE PLAN SISTEMA INTEGRADO DE GESTION MIPG 2023.pdf"
            }
          ],
        },
        {
          id: 2,
        nombre: "Caja de herramientas",
        files: [
            {
              id: 1,
              tipo: "",
              url: "",
              nombre: ""
            }
          ],
        },
        {
          id: 3,
        nombre: "Divulgar resultados",
        files: [
            {
              id: 1,
              tipo: "",
              url: "",
              nombre: ""
            }
          ],
        },
          {
          id: 4,
        nombre: "Herramientas de evaluación",
        files: [
            {
              id: 1,
              tipo: "",
              url: "",
              nombre: ""
            }
          ],
      },
    ];
  }

}
