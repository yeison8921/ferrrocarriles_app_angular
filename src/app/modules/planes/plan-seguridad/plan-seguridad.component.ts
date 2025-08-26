import { Component } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { AcordionAnidadoFiles } from '../../../interfaces/acordion';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-plan-seguridad',
  standalone: true,
  imports: [NgbAccordionModule, NgFor],
  templateUrl: './plan-seguridad.component.html',
  styleUrl: './plan-seguridad.component.css'
})
export class PlanSeguridadComponent {
  items: AcordionAnidadoFiles[] = [];
  constructor() {
    this.items = [
      {
        id:1,
        nombre:"PLAN_SEGURIDAD_Y_PRIVACIDAD_DE_LA_INFORMACION",
        acordion:
        [
          {
            id:1,
            nombre:"2019-2022",
            files: [
              {
                id:1,
                tipo:"pdf",
                url:"/assets/files/planes/plan_seguridad_privacidad/PLAN_SEGURIDAD_Y_PRIVACIDAD_DE_LA_INFORMACION/01.%202019-2022/FORMATO_PLAN_DE_SEGURIDAD_Y_PRIVACIDAD_DE_LA_INFORMACION_2019-2022.pdf",
                nombre: "FORMATO_PLAN_DE_SEGURIDAD_Y_PRIVACIDAD_DE_LA_INFORMACION_2019-2022.pdf"
              },

              {
                id:2,
                tipo:"pdf",
                url:"/assets/files/planes/plan_seguridad_privacidad/PLAN_SEGURIDAD_Y_PRIVACIDAD_DE_LA_INFORMACION/01.%202019-2022/PLAN_DE_SEGURIDAD_Y_PRIVACIDAD_DE_LA_INFORMACION_2019-2022.pdf",
                nombre: "PLAN_DE_SEGURIDAD_Y_PRIVACIDAD_DE_LA_INFORMACION_2019-2022.pdf"
              },
            ]
          },
          {
            id:2,
            nombre:"2023-2026",
            files:
            [
              {
                id:1,
                tipo:"pdf",
                url:"/assets/files/planes/plan_seguridad_privacidad/PLAN_SEGURIDAD_Y_PRIVACIDAD_DE_LA_INFORMACION/02.%202023-2026/PLAN%20DE%20SEGURIDAD%20Y%20PRIVACIDAD%20DE%20LA%20INFORMACION%20_2023-2026.pdf",
                nombre: "PLAN DE SEGURIDAD Y PRIVACIDAD DE LA INFORMACION _2023-2026.pdf"
              },
            ]
          }
        ]
      },
      {
        id:2,
        nombre:"PLAN_TRATAMIENTO_DE_RIESGOS_SEGURIDAD_Y_PRIVACIDAD_DE_LA_INFORMACION",
        acordion:
        [

           {
            id:1,
            nombre:"2025",
            files:
            [
              {
                id:1,
                tipo:"pdf",
                url:"/assets/files/planes/plan_seguridad_privacidad/PLAN DE SEGURIDAD Y PRIVACIDAD DE LA INFORMACION __2023-2026.pdf",
                nombre: "PLAN DE SEGURIDAD Y PRIVACIDAD DE LA INFORMACION __2023-2026.pdf"
              },
               {
                id:2,
                tipo:"pdf",
                url:"/assets/files/planes/plan_seguridad_privacidad/PLAN DE TRATAMIENTO DE RIESGOS 2025.pdf",
                nombre: "PLAN DE TRATAMIENTO DE RIESGOS 2025.pdf"
              },
            ]
          },
          {
            id:1,
            nombre:"2020",
            files:
            [
              {
                id:1,
                tipo:"pdf",
                url:"/assets/files/planes/plan_seguridad_privacidad/PLAN_TRATAMIENTO_DE_RIESGOS_SEGURIDAD_Y_PRIVACI/01.%202020/PLAN_TRATAMIENTO_DE_RIESGOS_SEGURIDAD_Y_PRIVACIDAD_DE_LA_INFORMACION_2020.pdf",
                nombre: "PLAN_TRATAMIENTO_DE_RIESGOS_SEGURIDAD_Y_PRIVACIDAD_DE_LA_INFORMACION_2020.pdf"
              },

            ]
          }
        ]
      }
    ]
  }
}
