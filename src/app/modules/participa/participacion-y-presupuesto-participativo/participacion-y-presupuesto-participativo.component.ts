import { Component } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { AcordionFiles } from '../../../interfaces/acordion';
import { NgFor } from '@angular/common'; 

@Component({
  selector: 'app-participacion-y-presupuesto-participativo',
  standalone: true,
  imports: [NgbAccordionModule, NgFor],
  templateUrl: './participacion-y-presupuesto-participativo.component.html',
  styleUrl: './participacion-y-presupuesto-participativo.component.css'
})
export class ParticipacionYPresupuestoParticipativoComponent {

 
  items: AcordionFiles[] = [];
  constructor() {
    this.items = [
        {
          id: 2,
        nombre: "Porcentaje del presupuesto para el proceso",
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
        nombre: "Habilitar canales de interacción y caja de herramientas",
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
        nombre: "Publicar la información sobre las decisiones",
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