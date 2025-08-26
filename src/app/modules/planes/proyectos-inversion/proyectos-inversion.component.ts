import { Component } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { AcordionAnidadoFiles } from '../../../interfaces/acordion';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-proyectos-inversion',
  standalone: true,
  imports: [NgbAccordionModule, NgFor],
  templateUrl: './proyectos-inversion.component.html',
  styleUrl: './proyectos-inversion.component.css'
})
export class ProyectosInversionComponent {
  items: AcordionAnidadoFiles[] = [];
  constructor() {
    this.items = [
      {	id:1,
        nombre: "Fichas EBI",
        acordion: [
          {
          id:1,
          nombre: "2022",
          files:
          [
          {
            id:1,
            tipo: "pdf",
            url:"/assets/files/planes/proyectos_inversion/1/Fichas%20EBI/01.%202022/2022-2018011000373-UNIDAD%20SALUD.pdf" ,
            nombre:"2022-2018011000373-UNIDAD SALUD.pdf"
          },
          {
            id:2,
            tipo: "pdf",
            url:"/assets/files/planes/proyectos_inversion/1/Fichas%20EBI/01.%202022/2022-2019011000208-UNIDAD%20PENSIONES.pdf" ,
            nombre:"2022-2019011000208-UNIDAD PENSIONES.pdf"
          },
          ]
        },
        {
          id:2,
          nombre: "2021",
          files:
          [
            {
              id:1,
              tipo: "pdf",
              url:"/assets/files/planes/proyectos_inversion/1/Fichas%20EBI/02.%202021/2021-2018011000373-UNIDAD%20SALUD.pdf" ,
              nombre:"2021-2018011000373-UNIDAD SALUD.pdf"
            },
            {
              id:2,
              tipo: "pdf",
              url:"/assets/files/planes/proyectos_inversion/1/Fichas%20EBI/02.%202021/2021-2019011000208-UNIDAD%20PENSIONES.pdf" ,
              nombre:"2021-2019011000208-UNIDAD PENSIONES.pdf"
            },
          ]
        },
        {
          id:3,
          nombre: "2020",
          files:
          [
            {
              id:1,
              tipo: "pdf",
              url:"/assets/files/planes/proyectos_inversion/1/Fichas%20EBI/03.%202020/2020-2018011000373-UNIDAD%20SALUD.pdf" ,
              nombre:"2020-2018011000373-UNIDAD SALUD.pdf"
            },
            {
              id:2,
              tipo: "pdf",
              url:"/assets/files/planes/proyectos_inversion/1/Fichas%20EBI/03.%202020/2020-2019011000208-UNIDAD%20PENSIONES.pdf",
              nombre:"2020-2019011000208-UNIDAD PENSIONES.pdf"
            },
          ]
        },
        {
          id:4,
          nombre: "2019",
          files:
          [
            {
              id:1,
              tipo: "pdf",
              url:"/assets/files/planes/proyectos_inversion/1/Fichas%20EBI/04.%202019/PROYECTOS_INVERSION_2019.pdf" ,
              nombre:"PROYECTOS_INVERSION_2019.pdf"
            },
          ]
        },
        {
          id:5,
          nombre: "2018",
          files:
          [
            {
              id:1,
              tipo: "pdf",
              url:"/assets/files/planes/proyectos_inversion/1/Fichas%20EBI/05.%202018/PROYECTOS_INVERSION_2018.pdf" ,
              nombre:"PROYECTOS_INVERSION_2018.pdf"
            },
          ]
        }
        ]
      },
      {
        id:2,
        nombre: "Ejecución Presupuestal",
        acordion:
        [
           {
            id:1,
            nombre: "2024",
            files:
            [
              {
                id:1,
                tipo: "pdf",
                url:"/assets/files/planes/proyectos_inversion/2/Ejecuci%c3%b3n%20Presupuestal/01.%202023/EJECUCION%20PRESUPUESTAL%20EN-MAR%202023.pdf" ,
                nombre:"EJECUCION PRESUPUESTAL EN-MAR 2023.pdf"
              },
            ]
          },
          {
            id:1,
            nombre: "2023",
            files:
            [
              {
                id:1,
                tipo: "pdf",
                url:"/assets/files/planes/proyectos_inversion/2/Ejecuci%c3%b3n%20Presupuestal/01.%202023/EJECUCION%20PRESUPUESTAL%20EN-MAR%202023.pdf" ,
                nombre:"EJECUCION PRESUPUESTAL EN-MAR 2023.pdf"
              },
            ]
          },
          {
            id:2,
            nombre: "2022",
            files:
            [
              {
                id:1,
                tipo: "pdf",
                url:"/assets/files/planes/proyectos_inversion/2/Ejecuci%c3%b3n%20Presupuestal/02.%202022/01.%20EJECUCION%20PRESUPUESTAL%20ENE-MAR%202022%20PROYECTOS%20DE%20INVERSION.pdf" ,
                nombre:"01. EJECUCION PRESUPUESTAL ENE-MAR 2022 PROYECTOS DE INVERSION.pdf"
              },
              {
                id:2,
                tipo: "pdf",
                url:"/assets/files/planes/proyectos_inversion/2/Ejecuci%c3%b3n%20Presupuestal/02.%202022/02.%20EJECUCION%20PRESUPUESTAL%20ENE-JUN%202022%20PROYECTOS%20DE%20INVERSION.pdf",
                nombre:"02. EJECUCION PRESUPUESTAL ENE-JUN 2022 PROYECTOS DE INVERSION.pdf"
              },
              {
                id:3,
                tipo: "pdf",
                url:"/assets/files/planes/proyectos_inversion/2/Ejecuci%c3%b3n%20Presupuestal/02.%202022/03.%20EJECUCION%20PRESUPUESTAL%20ENE-SEP%202022%20PROYECTOS%20DE%20INVERSION.pdf" ,
                nombre:"03. EJECUCION PRESUPUESTAL ENE-SEP 2022 PROYECTOS DE INVERSION.pdf"
              },
              {
                id:4,
                tipo: "pdf",
                url:"/assets/files/planes/proyectos_inversion/2/Ejecuci%c3%b3n%20Presupuestal/02.%202022/04.%20EJECUCION%20PRESUPUESTAL%20ENE-DIC%202022%20PROYECTOS%20DE%20INVERSION.pdf" ,
                nombre:"04. EJECUCION PRESUPUESTAL ENE-DIC 2022 PROYECTOS DE INVERSION.pdf"
              },
            ]
          },
          {
            id:3,
            nombre: "2021",
            files:
            [
              {
                id:1,
                tipo: "pdf",
                url:"/assets/files/planes/proyectos_inversion/2/Ejecuci%c3%b3n%20Presupuestal/03.%202021/01%20EJECUCION%20PRESUPUESTAL%20ENE-MAR%20PROYECTOS%20DE%20INVERSION.pdf" ,
                nombre:"01 EJECUCION PRESUPUESTAL ENE-MAR PROYECTOS DE INVERSION.pdf"
              },
              {
                id:2,
                tipo: "pdf",
                url:"/assets/files/planes/proyectos_inversion/2/Ejecuci%c3%b3n%20Presupuestal/03.%202021/02%20EJECUCION%20PRESUPUESTAL%20ENE-JUN%202021%20PROYECTOS%20DE%20INVERSION.pdf" ,
                nombre:"02 EJECUCION PRESUPUESTAL ENE-JUN 2021 PROYECTOS DE INVERSION.pdf"
              },
              {
                id:3,
                tipo: "pdf",
                url:"/assets/files/planes/proyectos_inversion/2/Ejecuci%c3%b3n%20Presupuestal/03.%202021/03%20EJECUCION%20PRESUPUESTAL%20ENE-SEP%202021%20PROYECTOS%20DE%20INVERSION.pdf" ,
                nombre:"03 EJECUCION PRESUPUESTAL ENE-SEP 2021 PROYECTOS DE INVERSION.pdf"
              },
              {
                id:4,
                tipo: "pdf",
                url:"/assets/files/planes/proyectos_inversion/2/Ejecuci%c3%b3n%20Presupuestal/03.%202021/04%20EJECUCION%20PRESUPUESTAL%20ENE-DIC%202021%20PROYECTOS%20DE%20INVERSION.pdf" ,
                nombre:"04 EJECUCION PRESUPUESTAL ENE-DIC 2021 PROYECTOS DE INVERSION.pdf"
              }
            ]
          },
          {
            id:4,
            nombre: "2020",
            files:
            [
              {
                id:1,
                tipo: "pdf",
                url:"/assets/files/planes/proyectos_inversion/2/Ejecuci%c3%b3n%20Presupuestal/04.%202020/1%20EJECUCION%20PRESUPUESTAL%20ENE-MAR%20PROYECTOS%20DE%20INVERSION.pdf" ,
                nombre:"1 EJECUCION PRESUPUESTAL ENE-MAR PROYECTOS DE INVERSION.pdf"
              },
              {
                id:2,
                tipo: "pdf",
                url:"/assets/files/planes/proyectos_inversion/2/Ejecuci%c3%b3n%20Presupuestal/04.%202020/2%20EJECUCION%20PRESUPUESTAL%20ENE-JUN%20PROYECTOS%20DE%20INVERSION.pdf" ,
                nombre:"2 EJECUCION PRESUPUESTAL ENE-JUN PROYECTOS DE INVERSION.pdf"
              },
              {
                id:3,
                tipo: "pdf",
                url:"/assets/files/planes/proyectos_inversion/2/Ejecuci%c3%b3n%20Presupuestal/04.%202020/3%20EJECUCION%20PRESUPUESTAL%20ENE-SEP%20PROYECTOS%20DE%20INVERSION.pdf" ,
                nombre:"3 EJECUCION PRESUPUESTAL ENE-SEP PROYECTOS DE INVERSION.pdf"
              },
              {
                id:4,
                tipo: "pdf",
                url:"/assets/files/planes/proyectos_inversion/2/Ejecuci%c3%b3n%20Presupuestal/04.%202020/4%20EJECUCION%20PRESUPUESTAL%20ENE%20DIC%20PROYECTOS%20DE%20INVERSION.pdf" ,
                nombre:"4 EJECUCION PRESUPUESTAL ENE DIC PROYECTOS DE INVERSION.pdf"
              }
            ]
          },
          {
            id:5,
            nombre: "2019",
            files:
            [
              {
                id:1,
                tipo: "pdf",
                url:"/assets/files/planes/proyectos_inversion/2/Ejecuci%c3%b3n%20Presupuestal/05.%202019/1.%20EJECUCION%20PRESUPUESTAL%20ENE-JUN%20PROYECTOS%20DE%20INVERSION.pdf" ,
                nombre:"1. EJECUCION PRESUPUESTAL ENE-JUN PROYECTOS DE INVERSION.pdf"
              },
              {
                id:2,
                tipo: "pdf",
                url:"/assets/files/planes/proyectos_inversion/2/Ejecuci%c3%b3n%20Presupuestal/05.%202019/2.%20EJECUCION%20PRESUPUESTAL%20ENE-SEP%20PROYECTOS%20DE%20INVERSION.pdf" ,
                nombre:"2. EJECUCION PRESUPUESTAL ENE-SEP PROYECTOS DE INVERSION.pdf"
              },
              {
                id:3,
                tipo: "pdf",
                url:"/assets/files/planes/proyectos_inversion/2/Ejecuci%c3%b3n%20Presupuestal/05.%202019/3.%20EJECUCION%20PRESUPUESTAL%20ENE-DIC%20PROYECTOS%20DE%20INVERSION.pdf" ,
                nombre:"3. EJECUCION PRESUPUESTAL ENE-DIC PROYECTOS DE INVERSION.pdf"
              },
            ]
          }
        ]
      }
    ]

  }
}
