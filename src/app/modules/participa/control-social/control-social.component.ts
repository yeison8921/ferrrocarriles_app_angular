import { Component } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { AcordionFiles } from '../../../interfaces/acordion';
import { NgFor } from '@angular/common';  

@Component({
  selector: 'app-control-social',
  standalone: true,
  imports: [NgbAccordionModule, NgFor],
  templateUrl: './control-social.component.html',
  styleUrl: './control-social.component.css'
})
export class ControlSocialComponent {

  items: AcordionFiles[] = [];
  constructor() {
    this.items = [
        {
          id: 1,
          nombre: "Informar las modalidades de control social",
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
          nombre: "Convocar  cuando inicie ejecución de programa, proyecto o  contratos",
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
          nombre: "Resumen del tema objeto de vigilancia",
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
          nombre: "Informes del interventor o el supervisor",
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
          nombre: "Facilitar herramientas de evaluación de las actividades",
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
          nombre: "Publicar el registro de las observaciones de las veedurías",
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
          nombre: "Acciones de mejora",
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
