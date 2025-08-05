import { Component } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { AcordionFiles } from '../../../interfaces/acordion';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-plan-estrategico-tec',
  standalone: true,
  imports: [NgbAccordionModule, NgFor],
  templateUrl: './plan-estrategico-tec.component.html',
  styleUrl: './plan-estrategico-tec.component.css'
})
export class PlanEstrategicoTecComponent {
  items: AcordionFiles[] = [];
  constructor() {
    this.items = [

      {
        id:1,
        nombre: "2025 - 2026",
        files:
        [

            {
              id:1,
              tipo:"pdf",
              url:"/assets/files/planes/plan_tic/07.2025_2026/APGTSOPSPL01-PLAN ESTRATEGICO DE TECNOLOGIAS DE LA INFORMACION Y LAS COMUNICACIONES-PETIC-V4.pdf",
              nombre: "APGTSOPSPL01-PLAN ESTRATEGICO DE TECNOLOGIAS DE LA INFORMACION Y LAS COMUNICACIONES-PETIC-V4.pdf"
            },
            {
              id:2,
              tipo:"pdf",
              url:"/assets/files/planes/plan_tic/07.2025_2026/MAPADERUTAPETIC_ 2025_2026.pdf",
              nombre: "MAPADERUTAPETIC_ 2025_2026.pdf"
            },
            {
              id:3,
              tipo:"pdf",
              url:"/assets/files/planes/plan_tic/07.2025_2026/INFORME DE EJECUCIÓN PETIC I S EMESTRE  2025 definitivo.pdf",
              nombre: "INFORME DE EJECUCIÓN PETIC I SEMESTRE  2025.pdf"
            },
             {
              id:3,
              tipo:"pdf",
              url:"/assets/files/planes/plan_tic/07.2025_2026/MAPA DE RUTA-PETIC2023-2026_Seguimiento I sem 2025 definitivo.pdf",
              nombre: "MAPA DE RUTA-PETIC2023-2026_SEGUIMIENTO I SEM 2025 DEFINITIVO"
            }
           
        ]
      },
      {
        id:1,
        nombre: "2024 - 2025",
        files:
        [

            {
              id:1,
              tipo:"pdf",
              url:"/assets/files/planes/plan_tic/07.2025_2026/INFORME DE EJECUCIÓN PETIC A JUNIO 2024.pdf",
              nombre: "INFORME DE EJECUCIÓN PETIC A JUNIO 2024.pdf"
            },
            {
              id:1,
              tipo:"pdf",
              url:"/assets/files/planes/plan_tic/07.2025_2026/INFORME DE EJECUCIÓN PETIC A DICIEMBRE 2024.pdf",
              nombre: "INFORME DE EJECUCIÓN PETIC A DICIEMBRE 2024.pdf"
            }
        ]
      },
      {
        id:1,
        nombre: "2023 - 2024",
        files:
        [

            {
              id:1,
              tipo:"pdf",
              url:"/assets/files/planes/plan_tic/06.2023_2024/INFORME DE EJECUCIÓN PETIC I SEMESTRE 2023.pdf",
              nombre: "INFORME DE EJECUCIÓN PETIC I SEMESTRE 2023.pdf"
            },
            {
              id:2,
              tipo:"pdf",
              url:"/assets/files/planes/plan_tic/06.2023_2024/INFORME DE EJECUCIÓN PETIC II SEMESTRE 2023.pdf",
              nombre: "INFORME DE EJECUCIÓN PETIC II SEMESTRE 2023.pdf"
            }
        ]
      },
      {
        id:1,
        nombre: "2022 - 2023",
        files:
        [

            {
              id:1,
              tipo:"pdf",
              url:"/assets/files/planes/plan_tic/01.%202022%20-%202023/01.%20MAPA%20DE%20RUTA%20-%20PETIC%202023%202026.pdf",
              nombre: "01. MAPA DE RUTA - PETIC 2023 2026.pdf"
            },
            {
              id:2,
              tipo:"pdf",
              url:"/assets/files/planes/plan_tic/01.%202022%20-%202023/02.%20INFORME%20DE%20EJECUCI%c3%93N%20PETIC%20I%20SEMESTRE%202022.pdf",
              nombre: "02. INFORME DE EJECUCIÓN PETIC I SEMESTRE 2022.pdf"
            },
            {
              id:3,
              tipo:"pdf",
              url:"/assets/files/planes/plan_tic/01.%202022%20-%202023/03.%20INFORME%20DE%20EJECUCI%c3%93N%20PETIC%20II%20SEMESTRE%202022.pdf",
              nombre: "03. INFORME DE EJECUCIÓN PETIC II SEMESTRE 2022.pdf"
            }
        ]
      },
      {
        id:2,
        nombre: "2021 - 2022",
        files:
        [

            {
              id:1,
              tipo:"pdf",
              url:"/assets/files/planes/plan_tic/02.%202021%20-%202022/01.%20INFORME%20DE%20EJECUCI%c3%93N%20PETIC%20I%20SEMESTRE%202021.pdf",
              nombre: "01. INFORME DE EJECUCIÓN PETIC I SEMESTRE 2021.pdf"
            },
            {
              id:2,
              tipo:"pdf",
              url:"/assets/files/planes/plan_tic/02.%202021%20-%202022/02.%20INFORME%20DE%20EJECUCION%20PETIC%20II%20SEMESTRE%202021.pdf",
              nombre: "02. INFORME DE EJECUCION PETIC II SEMESTRE 2021.pdf"
            },
            {
              id:3,
              tipo:"pdf",
              url:"/assets/files/planes/plan_tic/02.%202021%20-%202022/03.%20Mapa%20de%20ruta%20para%20PETIC%20_2022.pdf",
              nombre: "03. Mapa de ruta para PETIC _2022.pdf"
            }
        ]
      },
      {
        id:3,
        nombre: "2020 - 2021",
        files:
        [

          {
            id:1,
            tipo:"pdf",
            url:"/assets/files/planes/plan_tic/03.%202020%20-%202021/ANEXO%20E2-%20MAPA%20DE%20RUTA%20DEL%20PETIC%20V3.pdf",
            nombre: "ANEXO E2- MAPA DE RUTA DEL PETIC V3.pdf"
          },
          {
            id:2,
            tipo:"pdf",
            url:"/assets/files/planes/plan_tic/03.%202020%20-%202021/PETIC%20ACTUALIZACION%202020%20V3.0.pdf",
            nombre: "PETIC ACTUALIZACION 2020 V3.0.pdf"
          }
        ]
      },
      {
        id:4,
        nombre: "2019 - 2020",
        files:
        [

          {
            id:1,
            tipo:"pdf",
            url:"/assets/files/planes/plan_tic/04.%202019%20-%202020/Anexo%20E2-%20Mapa%20de%20ruta%20PETIC%202019-2022%20v2.0.pdf",
            nombre: "Anexo E2- Mapa de ruta PETIC 2019-2022 v2.0.pdf"
          },
          {
            id:2,
            tipo:"pdf",
            url:"/assets/files/planes/plan_tic/04.%202019%20-%202020/PETIC%20Actualizacion%202019%20v2.0.pdf",
            nombre: "PETIC Actualizacion 2019 v2.0.pdf"
          }
        ]
      }
    ];
  }
}
