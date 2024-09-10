import { Component } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { AcordionFiles } from '../../../interfaces/acordion';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-plan-fortalecimiento',
  standalone: true,
  imports: [NgbAccordionModule, NgFor],
  templateUrl: './plan-fortalecimiento.component.html',
  styleUrl: './plan-fortalecimiento.component.css'
})
export class PlanFortalecimientoComponent {
  items: AcordionFiles[] = [];
  constructor() {
    this.items = [
      {
        id:1,
        nombre:"2018",
        files:
        [
          {
            id:1,
            tipo:"excel",
            url:"/assets/files/planes/plan_fortalecimiento/01.%202018/PLANFORTALECIMIENTONOV-DIC2018.xls",
            nombre:"PLANFORTALECIMIENTONOV-DIC2018.xls"
          }
        ]
      },
      {
        id:2,
        nombre:"2017",
        files:
        [
          {
            id:1,
            tipo:"excel",
            url:"/assets/files/planes/plan_fortalecimiento/02.%202017/FORMULACION_PLAN_FORTALE_SIG_2017.xls",
            nombre:"FORMULACION_PLAN_FORTALE_SIG_2017.xls"
          },
          {
            id:2,
            tipo:"excel",
            url:"/assets/files/planes/plan_fortalecimiento/02.%202017/FORMULACION_PLAN_FORTALE_SIG_II_2017.xls",
            nombre:"FORMULACION_PLAN_FORTALE_SIG_II_2017.xls"
          }
        ]
      },

      {
        id:3,
        nombre:"2016",
        files:
        [
          {
            id:1,
            tipo:"excel",
            url:"/assets/files/planes/plan_fortalecimiento/03.%202016/FORMULACION_PLAN_FORTALE_SIG_2016.xls",
            nombre:"FORMULACION_PLAN_FORTALE_SIG_2016.xls"
          }
        ]
      },
      {
        id:4,
        nombre:"2015",
        files:
        [
          {
            id:1,
            tipo:"excel",
            url:"/assets/files/planes/plan_fortalecimiento/04.%202015/FORMULACION_PLAN_FORTALE_SIG_2015.xls",
            nombre:"FORMULACION_PLAN_FORTALE_SIG_2015.xls"
          }
        ]
      },
      {
        id:5,
        nombre:"2014",
        files:
        [
          {
            id:1,
            tipo:"excel",
            url:"/assets/files/planes/plan_fortalecimiento/05.%202014/FORMULACION_PLAN_FORTALE_SIG_2014.xls",
            nombre:"FORMULACION_PLAN_FORTALE_SIG_2014.xls"
          }
        ]
      },
    ];
  }
}
