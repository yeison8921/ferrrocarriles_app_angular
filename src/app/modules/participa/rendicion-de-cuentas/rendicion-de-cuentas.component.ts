import { Component } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { AcordionFiles } from '../../../interfaces/acordion';
import { NgFor } from '@angular/common'; 

@Component({
  selector: 'app-rendicion-de-cuentas',
  standalone: true,
  imports: [NgbAccordionModule, NgFor],
  templateUrl: './rendicion-de-cuentas.component.html',
  styleUrl: './rendicion-de-cuentas.component.css'
})
export class RendicionDeCuentasComponent {

  items: AcordionFiles[] = [];
  constructor() {
    this.items = [
        {
          id: 1,
          nombre: "Habilitar un espacio para que la ciudadanía postule temáticas",
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
          id: 2,
          nombre: "Estrategia de comunicación para la rendición de cuentas",
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
          nombre: "Calendario eventos de diálogo",
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
          nombre: "Articular a los informes de rendición de cuentas en el Menú transparencia",
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
          id: 5,
          nombre: "Habilitar un canal para eventos de diálogo Articulación con sistema nacional de rendición de cuentas",
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
          id: 6,
          nombre: "Preguntas y respuestas de eventos de diálogo",
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
          id: 7,
          nombre: "Memorias de cada evento",
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
          id: 8,
          nombre: "Acciones de mejora incorporadas",
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
