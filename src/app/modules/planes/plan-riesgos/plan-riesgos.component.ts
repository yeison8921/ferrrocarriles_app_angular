import { Component } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { AcordionFiles } from '../../../interfaces/acordion';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-plan-riesgos',
  standalone: true,
  imports: [NgbAccordionModule, NgFor],
  templateUrl: './plan-riesgos.component.html',
  styleUrl: './plan-riesgos.component.css'
})
export class PlanRiesgosComponent {
  items: AcordionFiles[] = [];
  constructor() {
    this.items = [
      {
        id:1,
        nombre:"2025",
        files:
        [
          {
            id:1,
            tipo:"excel",
            url:"/assets/files/planes/riesgo/14.2025/PM RIESGOS Y OPORTUNIDADES I TRIMESTRE 2025 DEF.xlsx",
            nombre:"PM RIESGOS Y OPORTUNIDADES I TRIMESTRE 2025 DEF.xlsx"
          },
          {
            id:1,
            tipo:"excel",
            url:"/assets/files/planes/riesgo/14.2025/PM RIESGOS Y OPORTUNIDADES II TRIMESTRE 2025 DEF.xlsx",
            nombre:"PM RIESGOS Y OPORTUNIDADES II TRIMESTRE 2025 DEF.xlsx"
          },
           {
            id:1,
            tipo:"excel",
            url:"/assets/files/planes/riesgo/14.2025/PM RIESGOS Y OPORTUNIDADES III TRIMESTRE 2025 DEF.xlsx",
            nombre:"PM RIESGOS Y OPORTUNIDADES III TRIMESTRE 2025 DEF.xlsx"
          },
           {
            id:1,
            tipo:"excel",
            url:"/assets/files/planes/riesgo/14.2025/PM RIESGOS Y OPORTUNIDADES IV TRIMESTRE 2025..xlsx",
            nombre:"PM RIESGOS Y OPORTUNIDADES IV TRIMESTRE 2025..xlsx"
          },
         
        ]
      },
      {
        id:1,
        nombre:"2024",
        files:
        [
          {
            id:1,
            tipo:"excel",
            url:"/assets/files/planes/riesgo/01.%202024/CONSOLIDADO%20PMR%20RIESGOS%20I%20TRIMESTRE%202024%20(1).xlsx",
            nombre:"CONSOLIDADO PMR RIESGOS I TRIMESTRE 2024 (1).xlsx"
          }
        ]
      },
      {
        id:2,
        nombre:"2023",
        files:
        [
          {
            id:1,
            tipo:"excel",
            url:"/assets/files/planes/riesgo/02.%202023/CONSOLIDADO%20PMR%20RIESGOS%20I%20TRIMESTRE%202023.xlsx",
            nombre:"CONSOLIDADO PMR RIESGOS I TRIMESTRE 2023.xlsx"
          },

          {
            id:2,
            tipo:"excel",
            url:"/assets/files/planes/riesgo/02.%202023/CONSOLIDADO%20PMR%20RIESGOS%20II%20TRIMESTRE%202023.xlsx",
            nombre:"CONSOLIDADO PMR RIESGOS II TRIMESTRE 2023.xlsx"
          },
          {
            id:3,
            tipo:"excel",
            url:"/assets/files/planes/riesgo/02.%202023/CONSOLIDADO%20PMR%20RIESGOS%20III%20TRIMESTRE%202023%20(1).xlsx",
            nombre:"CONSOLIDADO PMR RIESGOS III TRIMESTRE 2023 (1).xlsx"
          },
          {
            id:4,
            tipo:"excel",
            url:"/assets/files/planes/riesgo/02.%202023/CONSOLIDADO%20PMR%20RIESGOS%20IV%20TRIMESTRE%202023%20(3).xlsx",
            nombre:"CONSOLIDADO PMR RIESGOS IV TRIMESTRE 2023 (3).xlsx"
          }
        ]
      },
      {
        id:3,
        nombre:"2022",
        files:
        [
          {
            id:1,
            tipo:"excel",
            url:"/assets/files/planes/riesgo/03.%202022/01%20CONSOLIDADO%20REPORTE%20RIESGOS%20DE%20GESTION%20I%20TRIM%202022%20FINAL.xlsx",
            nombre:"01 CONSOLIDADO REPORTE RIESGOS DE GESTION I TRIM 2022 FINAL.xlsx"
          },

          {
            id:2,
            tipo:"excel",
            url:"/assets/files/planes/riesgo/03.%202022/02%20CONSOLIDADO%20PMR%20RIESGOS%20II%20TRIMESTRE%202022.xlsx",
            nombre:"02 CONSOLIDADO PMR RIESGOS II TRIMESTRE 2022.xlsx"
          },

          {
            id:3,
            tipo:"excel",
            url:"/assets/files/planes/riesgo/03.%202022/03%20MAPA%20INSTITUCIONAL%20DE%20RIESGOS%20Y%20OPORTUNIDADES%20FPSFNC%20V2.xlsx",
            nombre:"03 MAPA INSTITUCIONAL DE RIESGOS Y OPORTUNIDADES FPSFNC V2.xlsx"
          },

          {
            id:4,
            tipo:"excel",
            url:"/assets/files/planes/riesgo/03.%202022/04%20PLAN%20MANEJO%20DE%20RIESGOS%20Y%20OPORTUNIDADES%20III%20TRIMESTRE%202022.xlsx",
            nombre:"04 PLAN MANEJO DE RIESGOS Y OPORTUNIDADES III TRIMESTRE 2022.xlsx"
          },

          {
            id:5,
            tipo:"excel",
            url:"/assets/files/planes/riesgo/03.%202022/05%20CONSOLIDADO%20PMR%20RIESGOS%20IV%20TRIMESTRE%202022.xlsx",
            nombre:"05 CONSOLIDADO PMR RIESGOS IV TRIMESTRE 2022.xlsx"
          }
        ]
      },
      {
        id:4,
        nombre:"2021",
        files:
        [
          {
            id:1,
            tipo:"excel",
            url:"/assets/files/planes/riesgo/04.%202021/01%20CONSOLIDADO%20REPORTE%20RIESGOS%20DE%20GESTION%20I%20TRIM%202021.xlsx",
            nombre:"01 CONSOLIDADO REPORTE RIESGOS DE GESTION I TRIM 2021.xlsx"
          },

            {
            id:2,
            tipo:"excel",
            url:"/assets/files/planes/riesgo/04.%202021/02%20CONSOLIDADO%20REPORTE%20RIESGOS%20DE%20GESTION%20II%20TRIM%202021.xlsx",
            nombre:"02 CONSOLIDADO REPORTE RIESGOS DE GESTION II TRIM 2021.xlsx"
          },

            {
            id:3,
            tipo:"excel",
            url:"/assets/files/planes/riesgo/04.%202021/03%20CONSOLIDADO%20REPORTE%20RIESGOS%20DE%20GESTION%20III%20TRIM%202021.xlsx",
            nombre:"03 CONSOLIDADO REPORTE RIESGOS DE GESTION III TRIM 2021.xlsx"
          },

            {
            id:4,
            tipo:"excel",
            url:"/assets/files/planes/riesgo/04.%202021/04%20CONSOLIDADO%20REPORTE%20RIESGOS%20DE%20GESTION%20IV%20TRIM%202021.xlsx",
            nombre:"04 CONSOLIDADO REPORTE RIESGOS DE GESTION IV TRIM 2021.xlsx"
          }
        ]
      },
      {
        id:5,
        nombre:"2019",
        files:
        [
          {
            id:1,
            tipo:"excel",
            url:"/assets/files/planes/riesgo/05.%202019/MAPA%20DE%20RIESGOS%20ENTIDAD%20DEFIN.xlsx",
            nombre:"MAPA DE RIESGOS ENTIDAD DEFIN.xlsx"
          },

            {
            id:2,
            tipo:"excel",
            url:"/assets/files/planes/riesgo/05.%202019/RIESGOS_III_TRIMESTRE_2019.xlsx",
            nombre:"RIESGOS_III_TRIMESTRE_2019.xlsx"
          },

            {
            id:3,
            tipo:"excel",
            url:"/assets/files/planes/riesgo/05.%202019/RIESGOS_II_TRIMESTRE_2019.xls",
            nombre:"RIESGOS_II_TRIMESTRE_2019.xls"
          },

            {
            id:4,
            tipo:"excel",
            url:"/assets/files/planes/riesgo/05.%202019/RIESGOS_IV_TRIMESTRE_2019.xlsx",
            nombre:"RIESGOS_IV_TRIMESTRE_2019.xlsx"
          }
        ]
      },
      {
        id:6,
        nombre:"2020",
        files:
        [
          {
            id:1,
            tipo:"excel",
            url:"/assets/files/planes/riesgo/06.%202020/RIESGOS_1_TRIMESTRE_2020.xlsx",
            nombre:"RIESGOS_1_TRIMESTRE_2020.xlsx"
          },

            {
            id:2,
            tipo:"excel",
            url:"/assets/files/planes/riesgo/06.%202020/RIESGOS_2_TRIMESTRE_2020.xlsx",
            nombre:"RIESGOS_2_TRIMESTRE_2020.xlsx"
          },

            {
            id:3,
            tipo:"excel",
            url:"/assets/files/planes/riesgo/06.%202020/RIESGOS_3_TRIMESTRE_2020.xlsx",
            nombre:"RIESGOS_3_TRIMESTRE_2020.xlsx"
          },

            {
            id:4,
            tipo:"excel",
            url:"/assets/files/planes/riesgo/06.%202020/RIESGOS_4_TRIMESTRE_2020.xlsx",
            nombre:"RIESGOS_4_TRIMESTRE_2020.xlsx"
          }
        ]
      },
      {
        id:7,
        nombre:"2018",
        files:
        [
          {
            id:1,
            tipo:"excel",
            url:"/assets/files/planes/riesgo/07.%202018/PLAN%20DE%20MANEJO%20DE%20RIESGOS%20IV%20TRIMESTRE%20DEL%202018.xls",
            nombre:"PLAN DE MANEJO DE RIESGOS IV TRIMESTRE DEL 2018.xls"
          },

            {
            id:2,
            tipo:"excel",
            url:"/assets/files/planes/riesgo/07.%202018/PMR%20VIGENCIA%202018.xls",
            nombre:"PMR VIGENCIA 2018.xls"
          },

            {
            id:3,
            tipo:"excel",
            url:"/assets/files/planes/riesgo/07.%202018/RIESGOS_III_TRIMESTRE_2018.xls",
            nombre:"RIESGOS_III_TRIMESTRE_2018.xls"
          },

            {
            id:4,
            tipo:"excel",
            url:"/assets/files/planes/riesgo/07.%202018/RIESGOS_II_TRIMESTRE_2018.xls",
            nombre:"RIESGOS_II_TRIMESTRE_2018.xls"
          },

            {
            id:5,
            tipo:"excel",
            url:"/assets/files/planes/riesgo/07.%202018/RIESGOS_I_TRIMESTRE_2018.xls",
            nombre:"RIESGOS_I_TRIMESTRE_2018.xls"
          }
        ]
      },
      {
        id:8,
        nombre:"2017",
        files:
        [
          {
            id:1,
            tipo:"excel",
            url:"/assets/files/planes/riesgo/08.%202017/PMR%20VIGENCIA%202017.xls",
            nombre:"PMR VIGENCIA 2017.xls"
          },

            {
            id:2,
            tipo:"excel",
            url:"/assets/files/planes/riesgo/08.%202017/RIESGOS_III_TRIMESTRE_2017.xls",
            nombre:"RIESGOS_III_TRIMESTRE_2017.xls"
          },

            {
            id:3,
            tipo:"excel",
            url:"/assets/files/planes/riesgo/08.%202017/RIESGOS_II_TRIMESTRE_2017.xls",
            nombre:"RIESGOS_II_TRIMESTRE_2017.xls"
          },

            {
            id:4,
            tipo:"excel",
            url:"/assets/files/planes/riesgo/08.%202017/RIESGOS_IV_TRIMESTRE_2017.xls",
            nombre:"RIESGOS_IV_TRIMESTRE_2017.xls"
          },

            {
            id:5,
            tipo:"excel",
            url:"/assets/files/planes/riesgo/08.%202017/RIESGOS_I_TRIMESTRE_2017.xls",
            nombre:"RIESGOS_I_TRIMESTRE_2017.xls"
          }
        ]
      },
      {
        id:9,
        nombre:"2016",
        files:
        [
          {
            id:1,
            tipo:"excel",
            url:"/assets/files/planes/riesgo/09.%202016/PMR%20VIGENCIA%202016.xls",
            nombre:"PMR VIGENCIA 2016.xls"
          },

            {
            id:2,
            tipo:"excel",
            url:"/assets/files/planes/riesgo/09.%202016/RIESGOS_III_TRIMESTRE_2016.xls",
            nombre:"RIESGOS_III_TRIMESTRE_2016.xls"
          },

            {
            id:3,
            tipo:"excel",
            url:"/assets/files/planes/riesgo/09.%202016/RIESGOS_II_TRIMESTRE_2016.xls",
            nombre:"RIESGOS_II_TRIMESTRE_2016.xls"
          },

            {
            id:4,
            tipo:"excel",
            url:"/assets/files/planes/riesgo/09.%202016/RIESGOS_IV_TRIMESTRE_2016.xls",
            nombre:"RIESGOS_IV_TRIMESTRE_2016.xls"
          },

            {
            id:5,
            tipo:"excel",
            url:"/assets/files/planes/riesgo/09.%202016/RIESGOS_I_TRIMESTRE_2016.xls",
            nombre:"RIESGOS_I_TRIMESTRE_2016.xls"
          }
        ]
      },
      {
        id:10,
        nombre:"2015",
        files:
        [
          {
            id:1,
            tipo:"excel",
            url:"/assets/files/planes/riesgo/10.%202015/PMR%20VIGENCIA%202015.xls",
            nombre:"PMR VIGENCIA 2015.xls"
          },

            {
            id:2,
            tipo:"excel",
            url:"/assets/files/planes/riesgo/10.%202015/RIESGOS_III_TRIMESTRE_2015.xls",
            nombre:"RIESGOS_III_TRIMESTRE_2015.xls"
          },

            {
            id:3,
            tipo:"excel",
            url:"/assets/files/planes/riesgo/10.%202015/RIESGOS_IV_TRIMESTRE_2015.xls",
            nombre:"RIESGOS_IV_TRIMESTRE_2015.xls"
          },

            {
            id:4,
            tipo:"excel",
            url:"/assets/files/planes/riesgo/10.%202015/RIESGOS_I_TRIMESTRE_2015.xls",
            nombre:"RIESGOS_I_TRIMESTRE_2015.xls"
          }
        ]
      },
      {
        id:11,
        nombre:"2014",
        files:
        [
          {
            id:1,
            tipo:"excel",
            url:"/assets/files/planes/riesgo/11.%202014/PLAN_MANEJO_RIESGOS_2014.xls",
            nombre:"PLAN_MANEJO_RIESGOS_2014.xls"
          },

          {
            id:2,
            tipo:"excel",
            url:"/assets/files/planes/riesgo/11.%202014/RIESGOS_III_TRIMESTRE_2014.xls",
            nombre:"RIESGOS_III_TRIMESTRE_2014.xls"
          },

            {
            id:3,
            tipo:"excel",
            url:"/assets/files/planes/riesgo/11.%202014/RIESGOS_II_TRIMESTRE_2014.xls",
            nombre:"RIESGOS_II_TRIMESTRE_2014.xls"
          },

            {
            id:4,
            tipo:"excel",
            url:"/assets/files/planes/riesgo/11.%202014/RIESGOS_I_TRIMESTRE_2014.xls",
            nombre:"RIESGOS_I_TRIMESTRE_2014.xls"
          }
        ]
      },
      {
        id:12,
        nombre:"2013",
        files:
        [
          {
            id:1,
            tipo:"excel",
            url:"/assets/files/planes/riesgo/12.%202013/MATRIZ%20RIESGO%20II%20TRIMESTRE%202013.xls",
            nombre:"MATRIZ RIESGO II TRIMESTRE 2013.xls"
          },

            {
            id:2,
            tipo:"excel",
            url:"/assets/files/planes/riesgo/12.%202013/MATRIZ%20RIESGO%20III%20TRIMESTRE%202013.xls",
            nombre:"MATRIZ RIESGO III TRIMESTRE 2013.xls"
          },

            {
            id:3,
            tipo:"excel",
            url:"/assets/files/planes/riesgo/12.%202013/MATRIZ%20RIESGO%20IV%20TRIMESTRE%202013.xls",
            nombre:"MATRIZ RIESGO IV TRIMESTRE 2013.xls"
          },

            {
            id:4,
            tipo:"excel",
            url:"/assets/files/planes/riesgo/12.%202013/RIESGOS%20I%20TRIMESTRE%202013.xls",
            nombre:"RIESGOS I TRIMESTRE 2013.xls"
          }
        ]
      },
      {
        id:13,
        nombre:"2012",
        files:
        [
          {
            id:1,
            tipo:"excel",
            url:"/assets/files/planes/riesgo/13.%202012/RIESGOS%20IV%20TRIMESTRE%202012%20SEGUIMIENTO.xls",
            nombre:"RIESGOS IV TRIMESTRE 2012 SEGUIMIENTO.xls"
          },

          {
            id:2,
            tipo:"excel",
            url:"/assets/files/planes/riesgo/13.%202012/SEGUIPLANMANEJOIIITRI2012.xls",
            nombre:"SEGUIPLANMANEJOIIITRI2012.xls"
          },

          {
            id:3,
            tipo:"excel",
            url:"/assets/files/planes/riesgo/13.%202012/SEGUIPLANMANEJORIESGOI2012.xls",
            nombre:"SEGUIPLANMANEJORIESGOI2012.xls"
          }
        ]
      }

    ];
  }
}
