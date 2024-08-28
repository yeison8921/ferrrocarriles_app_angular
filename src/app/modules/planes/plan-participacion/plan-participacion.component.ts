import { Component } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { NgFor } from '@angular/common';
import { AcordionAnidadoFiles} from '../../../interfaces/acordion';

@Component({
  selector: 'app-plan-participacion',
  standalone: true,
  imports: [NgFor, NgbAccordionModule],
  templateUrl: './plan-participacion.component.html',
  styleUrl: './plan-participacion.component.css'
})

export class PlanParticipacionComponent {
  docu: AcordionAnidadoFiles[] = [];

  items: { id: number; tipo: string; url: string; nombre: string }[] = [];

  constructor() {


  this.docu = [
    {
      id: 1,
      nombre:"CRONOGRAMA",
      acordion:[
        {
          id: 1,
          nombre:"2023" ,
          files: [
            {
              id: 1,
		          tipo: "xlsx",
		          url:"/assets/files/planes/participacion_ciudadana/CRONOGRAMA/01.%202023/Cronograma%20de%20Participacio%cc%81n%20%202023.xlsx" ,
		          nombre:"Cronograma de Participación  2023.xlsx"
            }
          ]
        },
        {
          id: 2,
          nombre:"2022" ,
          files: [
            {
              id: 1,
              tipo: "xlsx",
					    url:"/assets/files/planes/participacion_ciudadana/CRONOGRAMA/02.%202022/Cronograma%20de%20Participacio%cc%81n%20Ciudadana%202022.xlsx",
					    nombre:"Cronograma de Participación Ciudadana 2022.xlsx"
            }
          ]
        },
        {
          id: 3,
          nombre:"2021" ,
          files: [
            {
              id: 1,
							tipo: "xlsx",
							url:"/assets/files/planes/participacion_ciudadana/CRONOGRAMA/03.%202021/01%20Cronograma%20de%20Participaci%c3%b3n%20Ciudadana%202021.xlsx" ,
							nombre:"01 Cronograma de Participación Ciudadana 2021.xlsx"
            }
          ]
        },
        {
          id: 4,
          nombre:"2020" ,
          files: [
            {
              id: 1,
							tipo: "pdf" ,
							url:"/assets/files/planes/participacion_ciudadana/CRONOGRAMA/04.%202020/01%20Cronograma%20de%20Participaci%c3%b3n%20Ciudadana%202020.pdf" ,
							nombre:"01 Cronograma de Participación Ciudadana 2020.pdf"
            }
          ]
        },
        {
          id: 5,
          nombre:"2019" ,
          files: [
            {
              id: 1,
							tipo: "pdf" ,
							url:"/assets/files/planes/participacion_ciudadana/CRONOGRAMA/05.%202019/01%20Cronograma%20Participaci%c3%b3n%20Ciudadana%202019.pdf" ,
							nombre:"01 Cronograma Participación Ciudadana 2019.pdf"
            }
          ]
        },

      ]
    }

    ]


  this.items = [
    {
      id: 1,
      tipo:"pdf",
      url:"/assets/files/planes/participacion_ciudadana/01%20Evidencia%20Formulaci%c3%b3n%20Planes%20FPS%202021.pdf",
      nombre: "01. Evidencia formulación planes FPS 2021.pdf"
    },
    {
      id: 2,
      tipo:"pdf",
      url:"/assets/files/planes/participacion_ciudadana/02%20Formulaci%c3%b3n%20Participativa%20FPS%202021.pdf",
      nombre: "02 Formulación Participativa FPS 2021.pdf"
  },
  {
    id: 3,
    tipo:"pdf",
    url:"/assets/files/planes/participacion_ciudadana/03%20GUIA%20PARA%20LA%20PARTICIPACION%20CIUDADANA%20%20V4.pdf",
    nombre: "03 GUIA PARA LA PARTICIPACION CIUDADANA  V4.pdf"
  }
  ]
}

}
