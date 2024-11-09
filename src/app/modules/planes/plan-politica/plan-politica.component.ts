import { Component } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { AcordionAnidadoFiles } from '../../../interfaces/acordion';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-plan-politica',
  standalone: true,
  imports: [NgbAccordionModule, NgFor],
  templateUrl: './plan-politica.component.html',
  styleUrl: './plan-politica.component.css'
})
export class PlanPoliticaComponent {
  items: AcordionAnidadoFiles[] = [];
  constructor() {
    this.items = [
      {
        id:1,
        nombre:"2022",
        files:
          [
            {
              id:1,
              tipo:"excel",
              url:"/assets/files/planes/plan_politica_sectorial_de_transparencia_e_integridad/01.%202022/MATRIZ%20DE%20SEGUIMIENTO%20POLITICA%20TRANSPARENCIA%20I%20SEMESTRE%202022..xlsx" ,
              nombre:"MATRIZ DE SEGUIMIENTO POLITICA TRANSPARENCIA I SEMESTRE 2022..xlsx",
            },
            {
              id:2,
              tipo:"excel",
              url:"/assets/files/planes/plan_politica_sectorial_de_transparencia_e_integridad/01.%202022/MATRIZ%20DE%20SEGUIMIENTO%20POLITICA%20TRANSPARENCIA%20II%20SEMESTRE%202022..xlsx" ,
              nombre:"MATRIZ DE SEGUIMIENTO POLITICA TRANSPARENCIA II SEMESTRE 2022..xlsx",
            },
          ]
      },
      {
        id:1,
        nombre:"2021",
        files:
        [

          {
            id:1,
            tipo:"excel",
            url:"/assets/files/planes/plan_politica_sectorial_de_transparencia_e_integridad/02.%202021/01.%20Plan%20de%20Acci%c3%b3n%20Implementaci%c3%b3n%20Pol%c3%adtica%20Sectorial%20de%20Transparencia%20e%20Integridad.%20FPS%20FNC..xlsx",
            nombre:"01. Plan de Acción Implementación Política Sectorial de Transparencia e Integridad. FPS FNC..xlsx",
          },
          {
            id:2,
            tipo:"excel",
            url:"/assets/files/planes/plan_politica_sectorial_de_transparencia_e_integridad/02.%202021/02.%20I%20Semestre%20%20Plan%20de%20Acci%c3%b3n%20Implementaci%c3%b3n%20Pol%c3%adtica%20Sectorial%20de%20Transparencia%20e%20Integridad.%20FPS%20FNC.xlsx",
            nombre:"02. I Semestre  Plan de Acción Implementación Política Sectorial de Transparencia e Integridad. FPS FNC.xlsx",
          },
          {
            id:3,
            tipo:"excel",
            url:"/assets/files/planes/plan_politica_sectorial_de_transparencia_e_integridad/02.%202021/03.%20II%20Semestre%20%20Plan%20de%20Acci%c3%b3n%20Implementaci%c3%b3n%20Pol%c3%adtica%20Sectorial%20de%20Transparencia%20e%20Integridad.%20FPS%20FNC.xlsx",
            nombre:"03. II Semestre  Plan de Acción Implementación Política Sectorial de Transparencia e Integridad. FPS FNC.xlsx",
          },
        ]
      }

    ];

  }
}
