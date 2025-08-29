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

      {
        id:2,
        nombre: "DESAGREGACIÓN DE PRESUPUESTO ",
        acordion:
        [
              {
          id:2,
          nombre: "2025",
          files:
          [

             {
            id:1,
            tipo: "pdf",
            url:"/assets/files/planes/proyectos_inversion/2025/RESOLUCIÓN 002 DE 2025 - DESAGREGAN CUENTAS GASTOS FPS 2025.pdf",
            nombre:"RESOLUCIÓN 002 DE 2025 - DESAGREGAN CUENTAS GASTOS FPS 2025.pdf"
          },
          {
            id:2,
            tipo: "pdf",
            url:"/assets/files/planes/proyectos_inversion/2025/RESOLUCIÓN 001 DE 2025 - DESAGREGAN CUENTAS INGRESO FPS 2025.pdf",
            nombre:"RESOLUCIÓN 001 DE 2025 - DESAGREGAN CUENTAS INGRESO FPS 2025"
          },

          ]

      }
    ]
    },
      
      {	id:1,
        nombre: "Fichas EBI",
        acordion: [
           {
          id:1,
          nombre: "2025",
          files:
          [
          {
            id:1,
            tipo: "pdf",
            url:"/assets/files/planes/proyectos_inversion/2025/Ficha De Proyecto 202300000000341.pdf" ,
            nombre:"Ficha De Proyecto 202300000000341.pdf"
          },
          {
            id:2,
            tipo: "pdf",
            url:"/assets/files/planes/proyectos_inversion/2025/Ficha De Proyecto 202300000000339.pdf" ,
            nombre:"Ficha De Proyecto 202300000000339.pdf"
          },
          ]
        },
           {
          id:1,
          nombre: "2024",
          files:
          [
          {
            id:1,
            tipo: "pdf",
            url:"/assets/files/planes/proyectos_inversion/2025/Ficha De Proyecto 202300000000341.pdf" ,
            nombre:"Ficha De Proyecto 202300000000341.pdf"
          },
          {
            id:2,
            tipo: "pdf",
            url:"/assets/files/planes/proyectos_inversion/2025/Ficha De Proyecto 202300000000339.pdf" ,
            nombre:"Ficha De Proyecto 202300000000339.pdf"
          },
          ]
        },
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
          id:2,
          nombre: "2025",
          files:
          [
            {
              id:1,
              tipo: "pdf",
              url:"/assets/files/planes/proyectos_inversion/2025/RESUMEN EJECUTIVO PENSIÓN ENERO - ABRIL 2025.pdf" ,
              nombre:"1. ENERO - ABRIL - RESUMEN EJECUTIVO PENSIÓN ENERO - ABRIL 2025.pdf"
            },
            {
              id:2,
              tipo: "pdf",
              url:"/assets/files/planes/proyectos_inversion/2025/RESUMEN EJECUTIVO SALUD ENERO - ABRIL 2025.pdf" ,
              nombre:"2. ENERO - ABRIL - RESUMEN EJECUTIVO SALUD ENERO - ABRIL 2025.pdf"
            },

            {
              id:1,
              tipo: "pdf",
              url:"/assets/files/planes/proyectos_inversion/2025/RESUMEN EJECUTIVO PENSIÓN MAYO 2025 (1).pdf" ,
              nombre:"1. MAYO - RESUMEN EJECUTIVO PENSIÓN MAYO 2025.pdf"
            },
            {
              id:2,
              tipo: "pdf",
              url:"/assets/files/planes/proyectos_inversion/2025/RESUMEN EJECUTIVO SALUD MAYO 2025 (1).pdf" ,
              nombre:"2. MAYO - RESUMEN EJECUTIVO SALUD MAYO 2025.pdf"
            },

             {
              id:1,
              tipo: "pdf",
              url:"/assets/files/planes/proyectos_inversion/2025/RESUMEN EJECUTIVO PENSIÓN JUNIO 2025.pdf" ,
              nombre:"1. JUNIO - RESUMEN EJECUTIVO PENSIÓN JUNIO 2025.pdf"
            },
            {
              id:2,
              tipo: "pdf",
              url:"/assets/files/planes/proyectos_inversion/2025/RESUMEN EJECUTIVO SALUD JUNIO 2025.pdf" ,
              nombre:"2. JUNIO - RESUMEN EJECUTIVO SALUD JUNIO 2025.pdf"
            },

              {
              id:1,
              tipo: "pdf",
              url:"/assets/files/planes/proyectos_inversion/2025/RESUMEN EJECUTIVO PENSIÓN JULIO 2025.pdf" ,
              nombre:"1. JULIO - RESUMEN EJECUTIVO PENSIÓN JULIO 2025.pdf"
            },
            {
              id:2,
              tipo: "pdf",
              url:"/assets/files/planes/proyectos_inversion/2025/RESUMEN EJECUTIVO SALUD JULIO 2025.pdf" ,
              nombre:"2. JULIO - RESUMEN EJECUTIVO SALUD JULIO 2025.pdf"
            },
          ]
        },


     {
          id:2,
          nombre: "2024",
          files:
          [
            {
              id:1,
              tipo: "pdf",
              url:"/assets/files/planes/proyectos_inversion/2025/1. RESUMEN EJECUTIVO PENSIONES_BPIN220230000000341 ENERO 2024.pdf" ,
              nombre:"1. ENERO - RESUMEN EJECUTIVO PENSIONES_BPIN220230000000341 ENERO 2024.pdf"
            },
            {
              id:2,
              tipo: "pdf",
              url:"/assets/files/planes/proyectos_inversion/2025/1. RESUMEN EJECUTIVO SALUD ENERO 2024_BPIN 202300000000339.pdf" ,
              nombre:"2. ENERO -  RESUMEN EJECUTIVO SALUD ENERO 2024_BPIN 202300000000339"
            },

            {
              id:1,
              tipo: "pdf",
              url:"/assets/files/planes/proyectos_inversion/2025/2. RESUMEN EJECUTIVO SALUD FEBRERO 2024_BPIN 202300000000339.pdf" ,
              nombre:"1. FEBRERO - RESUMEN EJECUTIVO SALUD FEBRERO 2024_BPIN 202300000000339.pdf"
            },
            {
              id:2,
              tipo: "pdf",
              url:"/assets/files/planes/proyectos_inversion/2025/1. RESUMEN EJECUTIVO PENSIONES_BPIN220230000000341 FEBRERO 2024.pdf" ,
              nombre:"2. FEBRERO -  RESUMEN EJECUTIVO PENSIONES_BPIN220230000000341 FEBRERO 2024"
            },

             {
              id:1,
              tipo: "pdf",
              url:"/assets/files/planes/proyectos_inversion/2025/1. RESUMEN EJECUTIVO PENSIONES_BPIN220230000000341 MARZO 2024.pdf" ,
              nombre:"1. MARZO - 1. RESUMEN EJECUTIVO PENSIONES_BPIN220230000000341 MARZO 2024"
            },
            {
              id:2,
              tipo: "pdf",
              url:"/assets/files/planes/proyectos_inversion/2025/3. RESUMEN EJECUTIVO SALUD MARZO 2024_BPIN 202300000000339.pdf" ,
              nombre:"2. MARZO -  RESUMEN EJECUTIVO SALUD MARZO 2024_BPIN 202300000000339"
            },

              {
              id:1,
              tipo: "pdf",
              url:"/assets/files/planes/proyectos_inversion/2025/1. RESUMEN EJECUTIVO PENSIONES ABRIL 2024.pdf" ,
              nombre:"1. ABRIL - ESUMEN EJECUTIVO PENSIONES ABRIL 2024"
            },
            {
              id:2,
              tipo: "pdf",
              url:"/assets/files/planes/proyectos_inversion/2025/1. RESUMEN EJECUTIVO SALUD ABRIL 2024.pdf" ,
              nombre:"2. ABRIL -  RESUMEN EJECUTIVO SALUD ABRIL 2024"
            },

             {
              id:1,
              tipo: "pdf",
              url:"/assets/files/planes/proyectos_inversion/2025/1. RESUMEN EJECUTIVO SALUD MAYO 2024.pdf" ,
              nombre:"1. MAYO -  RESUMEN EJECUTIVO SALUD MAYO 2024"
            },
            {
              id:2,
              tipo: "pdf",
              url:"/assets/files/planes/proyectos_inversion/2025/2. RESUMEN EJECUTIVO PENSIONES MAYO 2024.pdf" ,
              nombre:"2. MAYO - RESUMEN EJECUTIVO PENSIONES MAYO 2024"
            },

            {
              id:1,
              tipo: "pdf",
              url:"/assets/files/planes/proyectos_inversion/2025/1. RESUMEN EJECUTIVO SALUD JUNIO 2024.pdf" ,
              nombre:"1. JUNIO -  RESUMEN EJECUTIVO SALUD JUNIO 2024"
            },
            {
              id:2,
              tipo: "pdf",
              url:"/assets/files/planes/proyectos_inversion/2025/2. RESUMEN EJECUTIVO PENSIONES JUNIO 2024.pdf" ,
              nombre:"2. JUNIO - RESUMEN EJECUTIVO PENSIONES JUNIO 2024"
            },

            {
              id:1,
              tipo: "pdf",
              url:"/assets/files/planes/proyectos_inversion/2025/1. RESUMEN EJECUTIVO SALUD JULIO 2024.pdf" ,
              nombre:"1. JULIO -  RESUMEN EJECUTIVO SALUD JULIO 2024"
            },
            {
              id:2,
              tipo: "pdf",
              url:"/assets/files/planes/proyectos_inversion/2025/2. RESUMEN EJECUTIVO PENSIONES JULIO 2024.pdf" ,
              nombre:"2. JULIO -  RESUMEN EJECUTIVO PENSIONES JULIO 2024"
            },

              {
              id:1,
              tipo: "pdf",
              url:"/assets/files/planes/proyectos_inversion/2025/2. RESUMEN EJECUTIVO SALUD AGOSTO 2024 (1).pdf" ,
              nombre:"1. AGOSTO -  2. RESUMEN EJECUTIVO SALUD AGOSTO 2024"
            },
            {
              id:2,
              tipo: "pdf",
              url:"/assets/files/planes/proyectos_inversion/2025/2. RESUMEN EJECUTIVO SALUD AGOSTO 2024 (1).pdf" ,
              nombre:"2. AGOSTO -  2. RESUMEN EJECUTIVO SALUD AGOSTO 2024"
            },

              {
              id:1,
              tipo: "pdf",
              url:"/assets/files/planes/proyectos_inversion/2025/1. RESUMEN EJECUTIVO SALUD SEPTIEMBRE 2024 (1).pdf" ,
              nombre:"1. SEPTIEMBRE - RESUMEN EJECUTIVO SALUD SEPTIEMBRE 2024 "
            },
            {
              id:2,
              tipo: "pdf",
              url:"/assets/files/planes/proyectos_inversion/2025/2. RESUMEN EJECUTIVO PENSIONES SEPTIEMBRE 2024 (1).pdf" ,
              nombre:"2. SEPTIEMBRE-  2. RESUMEN EJECUTIVO PENSIONES SEPTIEMBRE 2024"
            },

                {
              id:1,
              tipo: "pdf",
              url:"/assets/files/planes/proyectos_inversion/2025/2. RESUMEN EJECUTIVO SALUD OCTUBRE 2024.pdf" ,
              nombre:"1. OCTUBRE - 2. RESUMEN EJECUTIVO SALUD OCTUBRE 2024"
            },

            {
              id:1,
              tipo: "pdf",
              url:"/assets/files/planes/proyectos_inversion/2025/1. RESUMEN EJECUTIVO SALUD NOVIEMBRE 2024.pdf" ,
              nombre:"1. NOVIEMBRE - RESUMEN EJECUTIVO SALUD NOVIEMBRE 2024 "
            },
            {
              id:2,
              tipo: "pdf",
              url:"/assets/files/planes/proyectos_inversion/2025/2. RESUMEN EJECUTIVO PENSIONES NOVIEMBRE 2024.pdf" ,
              nombre:"2. NOVIEMBRE -  RESUMEN EJECUTIVO PENSIONES NOVIEMBRE 2024"
            },

            {
              id:1,
              tipo: "pdf",
              url:"/assets/files/planes/proyectos_inversion/2025/RESUMEN EJECUTIVO PENSIONES DICIEMBRE 2024_ (1) (1).pdf" ,
              nombre:"1. DICIEMBRE - RESUMEN EJECUTIVO PENSIONES DICIEMBRE 2024 "
            },
            {
              id:2,
              tipo: "pdf",
              url:"/assets/files/planes/proyectos_inversion/2025/RESUMEN EJECUTIVO SALUD DICIEMBRE 2024 (1) (1).pdf" ,
              nombre:"2. DICIEMBRE -  RESUMEN EJECUTIVO SALUD DICIEMBRE 2024 "
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
