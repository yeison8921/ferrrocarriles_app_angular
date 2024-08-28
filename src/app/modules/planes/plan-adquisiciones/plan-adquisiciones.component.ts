import { Component } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { AcordionAnidadoFiles } from '../../../interfaces/acordion';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-plan-adquisiciones',
  standalone: true,
  imports: [NgbAccordionModule, NgFor],
  templateUrl: './plan-adquisiciones.component.html',
  styleUrl: './plan-adquisiciones.component.css'
})
export class PlanAdquisicionesComponent {
  items: AcordionAnidadoFiles[] = [];
  constructor() {
    this.items =
    [
      {
        id: 1,
        nombre:"2024",
        files:
        [
          {
            id:1,
            tipo:"excel",
            url:"/assets/files/planes/plan_adquisiciones/01.%202024/01%20AdquisicionesPAA_416103.xlsx" ,
            nombre: "01 AdquisicionesPAA_416103.xlsx"
          },
          {
            id:2,
            tipo:"excel",
            url:"/assets/files/planes/plan_adquisiciones/01.%202024/02%20Plan%20Anual%20De%20Adquisicones%202024%20FPS-FNC.xlsx" ,
            nombre: "02 Plan Anual De Adquisicones 2024 FPS-FNC.xlsx"
          },

          {
            id:3,
            tipo:"excel",
            url:"/assets/files/planes/plan_adquisiciones/01.%202024/03%20PLAN%20ANUAL%20DE%20ADQUISICION%202024.xlsx" ,
            nombre: "03 PLAN ANUAL DE ADQUISICION 2024.xlsx"
          },
          {
            id:4,
            tipo:"excel",
            url:"/assets/files/planes/plan_adquisiciones/01.%202024/04%20PLAN%20ANUAL%20DE%20ADQUISICIONES%202024.xlsx" ,
            nombre: "04 PLAN ANUAL DE ADQUISICIONES 2024.xlsx"
          }

        ]
      },
      {
        id: 2,
        nombre:"2023",
        files:
        [
          {
            id:1,
            tipo:"excel",
            url:"/assets/files/planes/plan_adquisiciones/02.%202023/PLAN%20ANUAL%20DE%20ADQUISICIONES%20-%20OCTUBRE%202023.xlsx" ,
            nombre: "PLAN ANUAL DE ADQUISICIONES - OCTUBRE 2023.xlsx"
          },
          {
            id:2,
            tipo:"excel",
            url:"/assets/files/planes/plan_adquisiciones/02.%202023/Plan%20Anual%20De%20Adquisicion%20A%c3%b1o%202023.xlsx",
            nombre: "Plan Anual De Adquisicion Año 2023.xlsx"
          },
          {
            id:3,
            tipo:"excel",
            url:"/assets/files/planes/plan_adquisiciones/02.%202023/Plan%20Anual%20De%20Adquisiciones%20-%20Noviembre%202023.xlsx" ,
            nombre: "Plan Anual De Adquisiciones - Noviembre 2023.xlsx"
          },
          {
            id:4,
            tipo:"excel",
            url:"/assets/files/planes/plan_adquisiciones/02.%202023/Plan%20de%20Adquisiciones%20-%20Diciembre%202023.xlsx",
            nombre: "Plan de Adquisiciones - Diciembre 2023.xlsx"
          }
        ]
      },
      {
        id: 3,
        nombre:"2022",
        files:
        [
          {
            id:1,
            tipo:"excel",
            url:"/assets/files/planes/plan_adquisiciones/03.%202022/PLAN%20ANUAL%202022.xlsx" ,
            nombre: "PLAN ANUAL 2022.xlsx"
          },
          {
            id:2,
            tipo:"excel",
            url:"/assets/files/planes/plan_adquisiciones/03.%202022/Plan%20Anual%20De%20Adquisicion%20A%c3%b1o%202022.xlsx" ,
            nombre: "Plan Anual De Adquisicion Año 2022.xlsx"
          }
        ]
      },
      {
        id: 4,
        nombre:"2021",
        files:
        [
          {
            id:1,
            tipo:"excel",
            url:"/assets/files/planes/plan_adquisiciones/04.%202021/PLAN%20ANUAL%202021.xlsx" ,
            nombre: "PLAN ANUAL 2021.xlsx"
          }
        ]
      },
      {
        id: 5,
        nombre:"2020",
        files:
        [
          {
            id:1,
            tipo:"pdf",
            url:"/assets/files/planes/plan_adquisiciones/05.%202020/Plan%20Anual%20de%20Adquisiciones%202020%20-%20fps.pdf" ,
            nombre: "Plan Anual de Adquisiciones 2020 - fps.pdf"
          }
        ]
      },
      {
        id: 6,
        nombre:"2018",
        files:
        [
          {
            id:1,
            tipo:"pdf",
            url:"/assets/files/planes/plan_adquisiciones/06.%202018/planadqui04ENE2018.pdf",
            nombre: "planadqui04ENE2018.pdf"
          }
        ]
      },
      {
        id: 7,
        nombre:"2017",
        files:
        [
          {
            id:1,
            tipo:"pdf",
            url:"/assets/files/planes/plan_adquisiciones/07.%202017/planadqui23FEB2017.pdf",
            nombre: "planadqui23FEB2017.pdf"
          },
          {
            id:2,
            tipo:"pdf",
            url:"/assets/files/planes/plan_adquisiciones/07.%202017/planadqui30ENE2017.pdf",
            nombre: "planadqui30ENE2017.pdf"
          },
        ]
      },
      {
        id: 8,
        nombre:"2016",
        files:
        [
          {
            id:1,
            tipo:"pdf",
            url:"/assets/files/planes/plan_adquisiciones/08.%202016/planadqui04ENE2016.pdf",
            nombre: "planadqui04ENE2016.pdf"
          },
          {
            id:2,
            tipo:"pdf",
            url:"/assets/files/planes/plan_adquisiciones/08.%202016/planadqui05DIC2016.pdf" ,
            nombre: "planadqui05DIC2016.pdf"
          },
          {
            id:3,
            tipo:"pdf",
            url:"/assets/files/planes/plan_adquisiciones/08.%202016/planadqui13MAY2016.pdf" ,
            nombre: "planadqui13MAY2016.pdf"
          },
        ]
      },
      {
        id: 9,
        nombre:"2015",
        files:
        [
          {
            id:1,
            tipo:"pdf",
            url:"/assets/files/planes/plan_adquisiciones/09.%202015/planadqui02DICI2014.pdf" ,
            nombre: "planadqui02DICI2014.pdf"
          },
          {
            id:2,
            tipo:"pdf",
            url:"/assets/files/planes/plan_adquisiciones/09.%202015/planadqui13AGO2015.pdf" ,
            nombre: "planadqui13AGO2015.pdf"
          },
          {
            id:3,
            tipo:"pdf",
            url:"/assets/files/planes/plan_adquisiciones/09.%202015/planadqui23ABR2015.pdf" ,
            nombre: "planadqui23ABR2015.pdf"
          },
          {
            id:4,
            tipo:"pdf",
            url:"/assets/files/planes/plan_adquisiciones/09.%202015/planadqui29DIC2015.pdf" ,
            nombre: "planadqui29DIC2015.pdf"
          },
          {
            id:5,
            tipo:"pdf",
            url:"/assets/files/planes/plan_adquisiciones/09.%202015/planadqui29JUL2015.pdf" ,
            nombre: "planadqui29JUL2015.pdf"
          },
        ]
      },
      {
        id: 10,
        nombre:"2014",
        files:
        [
          {
            id:1,
            tipo:"pdf",
            url:"/assets/files/planes/plan_adquisiciones/10.%202014/planadqui01AGO2014.pdf" ,
            nombre: "planadqui01AGO2014.pdf"
          },
          {
            id:2,
            tipo:"pdf",
            url:"/assets/files/planes/plan_adquisiciones/10.%202014/planadqui04MAR2014.pdf" ,
            nombre: "planadqui04MAR2014.pdf"
          },
          {
            id:3,
            tipo:"pdf",
            url:"/assets/files/planes/plan_adquisiciones/10.%202014/planadqui19AGO2014.pdf" ,
            nombre: "planadqui19AGO2014.pdf"
          },
          {
            id:4,
            tipo:"pdf",
            url:"/assets/files/planes/plan_adquisiciones/10.%202014/planadqui23MAY2014.pdf" ,
            nombre: "planadqui23MAY2014.pdf"
          },
          {
            id:5,
            tipo:"pdf",
            url:"/assets/files/planes/plan_adquisiciones/10.%202014/planadqui25ABR2014.pdf" ,
            nombre: "planadqui25ABR2014.pdf"
          },
          {
            id:6,
            tipo:"pdf",
            url:"/assets/files/planes/plan_adquisiciones/10.%202014/planadqui27AGO2014.pdf" ,
            nombre: "planadqui27AGO2014.pdf"
          },
          {
            id:7,
            tipo:"pdf",
            url:"/assets/files/planes/plan_adquisiciones/10.%202014/planadqui27DIC2013.pdf" ,
            nombre: "planadqui27DIC2013.pdf"
          },
        ]
      },
      {
        id: 11,
        nombre:"2013",
        files:
        [
          {
            id:1,
            tipo:"pdf",
            url:"/assets/files/planes/plan_adquisiciones/11.%202013/JustiPresupuestal2013.pdf",
            nombre: "JustiPresupuestal2013.pdf"
          },
          {
            id:2,
            tipo:"pdf",
            url:"/assets/files/planes/plan_adquisiciones/11.%202013/ModiPlanAdqui01OCT2013.pdf" ,
            nombre: "ModiPlanAdqui01OCT2013.pdf"
          },
          {
            id:3,
            tipo:"pdf",
            url:"/assets/files/planes/plan_adquisiciones/11.%202013/ModiPlanAdqui05DIC2013.pdf" ,
            nombre: "ModiPlanAdqui05DIC2013.pdf"
          },
          {
            id:4,
            tipo:"pdf",
            url:"/assets/files/planes/plan_adquisiciones/11.%202013/ModiPlanAdqui24ABR2013.pdf" ,
            nombre: "ModiPlanAdqui24ABR2013.pdf"
          },
          {
            id:5,
            tipo:"pdf",
            url:"/assets/files/planes/plan_adquisiciones/11.%202013/ModiPlanAdqui25JUL2013.pdf" ,
            nombre: "ModiPlanAdqui25JUL2013.pdf"
          },
          {
            id:6,
            tipo:"pdf",
            url:"/assets/files/planes/plan_adquisiciones/11.%202013/planadqui01OCT2013.pdf" ,
            nombre: "planadqui01OCT2013.pdf"
          },
          {
            id:7,
            tipo:"pdf",
            url:"/assets/files/planes/plan_adquisiciones/11.%202013/planadqui05DIC2013.pdf" ,
            nombre: "planadqui05DIC2013.pdf"
          },
          {
            id:8,
            tipo:"pdf",
            url:"/assets/files/planes/plan_adquisiciones/11.%202013/planadqui24ABR2013.pdf" ,
            nombre: "planadqui24ABR2013.pdf"
          },
          {
            id:9,
            tipo:"pdf",
            url:"/assets/files/planes/plan_adquisiciones/11.%202013/planadqui25JUL2013.pdf" ,
            nombre: "planadqui25JUL2013.pdf"
          },
        ]
      },
      {
        id: 12,
        nombre:"2012",
        files:
        [
          {
            id:1,
            tipo:"pdf",
            url:"/assets/files/planes/plan_adquisiciones/12.%202012/JustiPresupuestal2012.pdf" ,
            nombre: "JustiPresupuestal2012.pdf"
          },
          {
            id:2,
            tipo:"pdf",
            url:"/assets/files/planes/plan_adquisiciones/12.%202012/ModiPlanAdqui24DIC2012.pdf" ,
            nombre: "ModiPlanAdqui24DIC2012.pdf"
          },
          {
            id:3,
            tipo:"pdf",
            url:"/assets/files/planes/plan_adquisiciones/12.%202012/planadqui24DIC2012.pdf" ,
            nombre: "planadqui24DIC2012.pdf"
          },
        ]
      },
      {
        id:13 ,
        nombre:"2011",
        files:
        [
          {
            id:1,
            tipo:"pdf",
            url:"/assets/files/planes/plan_adquisiciones/13.%202011/ModiPlanAdqui12DIC2011.pdf" ,
            nombre: "ModiPlanAdqui12DIC2011.pdf"
          },
          {
            id:2,
            tipo:"pdf",
            url:"/assets/files/planes/plan_adquisiciones/13.%202011/planadqui12DIC2011.pdf",
            nombre: "planadqui12DIC2011.pdf"
          },
        ]
      },
      {
        id: 14,
        nombre:"2010",
        files:
        [
          {
            id:1,
            tipo:"pdf",
            url:"/assets/files/planes/plan_adquisiciones/14.%202010/planadquiciciones2010.pdf" ,
            nombre: "planadquiciciones2010.pdf"
          },
        ]
      },
      {
        id: 15,
        nombre:"2009",
        files:
        [
          {
            id:1,
            tipo:"pdf",
            url:"/assets/files/planes/plan_adquisiciones/15.%202009/planadquiciciones2009.pdf" ,
            nombre: "planadquiciciones2009.pdf"
          }
        ]
      }
    ]
  }
}
