import { Component } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { AcordionFiles } from '../../../interfaces/acordion';
import { NgFor } from '@angular/common'; 

@Component({
  selector: 'app-colaboracion-e-innovacion',
  standalone: true,
  imports: [NgbAccordionModule, NgFor],
  templateUrl: './colaboracion-e-innovacion.component.html',
  styleUrl: './colaboracion-e-innovacion.component.css'
})
export class ColaboracionEInnovacionComponent {

  items: AcordionFiles[] = [];
  constructor() {
    this.items = [
        {
          id: 1,
        nombre: "Disponer un espacio para consulta sobre temas o problemáticas",
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
