import { Component } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { AcordionAnidadoFiles } from '../../../interfaces/acordion';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-plan-mejoramiento',
  standalone: true,
  imports: [NgbAccordionModule, NgFor],
  templateUrl: './plan-mejoramiento.component.html',
  styleUrl: './plan-mejoramiento.component.css'
})
export class PlanMejoramientoComponent {

  items: AcordionAnidadoFiles[] = [];
  constructor() {
    this.items = [


      {
        id: 14,
        nombre:"2025",
        files: [

          {
            id: 1,
            tipo: "excel",
            url:"/assets/files/planes/plan_mejoramiento/15. 2025/PLAN DE MEJORAMIENTO INSTITUCIONAL Y CGR I TRIMESTRE 2025.xlsx",
            nombre: "PLAN DE MEJORAMIENTO INSTITUCIONAL Y CGR I TRIMESTRE 2025.xlsx"
          },
             {
            id: 1,
            tipo: "excel",
            url:"/assets/files/planes/plan_mejoramiento/15. 2025/PLAN DE MEJORAMIENTO INST. Y CGR II TRIMESTRE 2025_.xlsx",
            nombre: "PLAN DE MEJORAMIENTO INSTITUCIONAL Y CGR II TRIMESTRE 2025.xlsx"
          },

           {
            id: 1,
            tipo: "excel",
            url:"/assets/files/planes/plan_mejoramiento/15. 2025/PLAN DE MEJORAMIENTO INST. Y CGR III TRIMESTRE 2025 (3).xlsx",
            nombre: "PLAN DE MEJORAMIENTO INSTITUCIONAL Y CGR III TRIMESTRE 2025.xlsx"
          },
          
        ]
      },

      {
        id: 13,
        nombre:"2024",
        files: [

          {
            id: 1,
            tipo: "excel",
            url:"/assets/files/planes/plan_mejoramiento/14. 2024/PLAN DE MEJORAMIENTO INSTITUCIONAL I TRIMESTRE 2024 (3).xlsx",
            nombre: "PLAN DE MEJORAMIENTO INSTITUCIONAL I TRIMESTRE 2024.xlsx"
          },
          {
            id: 2,
            tipo: "excel",
            url:"/assets/files/planes/plan_mejoramiento/14. 2024/PLAN DE MEJORAMIENTO INSTITUCIONAL II TRIMESTRE (6).xlsx",
            nombre: "PLAN DE MEJORAMIENTO INSTITUCIONAL II TRIMESTRE 2024.xlsx"
          },   
          
          {
            id: 3,
            tipo: "excel",
            url:"/assets/files/planes/plan_mejoramiento/14. 2024/PLAN DE MEJORAMIENTO SUPERSALUD III TRIMESTRE 2024.xlsx (1).xlsx",
            nombre: "PLAN DE MEJORAMIENTO SUPERSALUD III TRIMESTRE 2024.xlsx"
          },  
          {
            id: 4,
            tipo: "excel",
            url:"/assets/files/planes/plan_mejoramiento/14. 2024/PLAN DE MEJORAMIENTOS INSTITUCIONAL III TRIMESTRE 2024 (2).xlsx",
            nombre: "PLAN DE MEJORAMIENTOS INSTITUCIONAL III TRIMESTRE 2024 .xlsx"
          },
          {
            id: 5,
            tipo: "excel",
            url:"/assets/files/planes/plan_mejoramiento/14. 2024/MONITOREO PM CGR III TRIMESTRE2024.xlsx",
            nombre: "MONITOREO PM CGR III TRIMESTRE 2024.xlsx"
          }, 
          {
            id: 6,
            tipo: "excel",
            url:"/assets/files/planes/plan_mejoramiento/14. 2024/MONITOREO PM INSTITUCIONAL IV TRIMESTRE 2024 (1).xlsx",
            nombre: "MONITOREO PM INSTITUCIONAL IV TRIMESTRE 2024.xlsx"
          }, 
          {
            id: 7,
            tipo: "excel",
            url:"/assets/files/planes/plan_mejoramiento/14. 2024/MONITOREO PM CGRIV TRIMESTRE (3).xlsx",
            nombre: "MONITOREO PM CGR IV TRIMESTRE 2024.xlsx"
          }, 

         


          
        ]
      },
        {
        id: 1,
        nombre:"2023",
        files: [

          {
            id: 1,
            tipo: "excel",
            url:"/assets/files/planes/plan_mejoramiento/01.%202023/01%20PLAN%20DE%20MEJORAMIENTO%20PRIMER%20TRIMESTRE%202023.xlsx",
            nombre: "01 PLAN DE MEJORAMIENTO PRIMER TRIMESTRE 2023.xlsx"
          },
          {
            id: 2,
            tipo: "excel",
            url:"/assets/files/planes/plan_mejoramiento/01.%202023/02%20MONITOREO%20PMI%20II%20TRIMESTRE%202023%20(1).xlsx",
            nombre: "02 MONITOREO PMI II TRIMESTRE 2023 (1).xlsx"
          },
          {
            id: 3,
            tipo: "excel",
            url:"/assets/files/planes/plan_mejoramiento/01.%202023/03%20MONITOREO%20PMI%20III%20TRIMESTRE%202023%20(3).xlsx",
            nombre: "03 MONITOREO PMI III TRIMESTRE 2023 (3).xlsx"
          },
          {
            id: 4,
            tipo: "excel",
            url:"/assets/files/planes/plan_mejoramiento/01.%202023/04%20MONITOREO%20PMI%20IV%20TRIMESTRE%202023%20(6).xlsx",
            nombre: "04 MONITOREO PMI IV TRIMESTRE 2023 (6).xlsx"
          }
        ]
      },
      {
        id:2,
        nombre:"2022",
        files: [

          {
            id: 1,
            tipo: "excel",
            url:"/assets/files/planes/plan_mejoramiento/02.%202022/01%20PLAN%20DE%20MEJORAMIENTO%20I%20TRIMESTRE%202022.xlsx",
            nombre: "01 PLAN DE MEJORAMIENTO I TRIMESTRE 2022.xlsx"
          },
          {
            id: 2,
            tipo: "excel",
            url:"/assets/files/planes/plan_mejoramiento/02.%202022/02%20PLAN%20DE%20MEJORAMIENTO%20II%20TRIMESTRE%202022.xlsx",
            nombre: "02 PLAN DE MEJORAMIENTO II TRIMESTRE 2022.xlsx"
          },
          {
            id: 3,
            tipo: "excel",
            url:"/assets/files/planes/plan_mejoramiento/02.%202022/03%20PLAN%20DE%20MEJORAMIENTO%20III%20TRIMESTRE%202022.xlsx",
            nombre: "03 PLAN DE MEJORAMIENTO III TRIMESTRE 2022.xlsx"
          },
          {
            id: 4,
            tipo: "excel",
            url:"/assets/files/planes/plan_mejoramiento/02.%202022/04%20MONITOREO%20PMI%20IV%20%20TRIMESTRE%202022.xlsx",
            nombre: "04 MONITOREO PMI IV  TRIMESTRE 2022.xlsx"
          },
        ]
      },
      {
        id:3,
        nombre:"2021",
        files: [

          {
            id: 1,
            tipo: "excel",
            url:"/assets/files/planes/plan_mejoramiento/03.%202021/01%20PLAN%20DE%20MEJORAMIENTO%20I%20TRIMESTRE%202021.xlsx",
            nombre: "01 PLAN DE MEJORAMIENTO I TRIMESTRE 2021.xlsx"
          },
          {
            id: 2,
            tipo: "excel",
            url:"/assets/files/planes/plan_mejoramiento/03.%202021/02%20PLAN%20DE%20MEJORAMIENTO%20II%20TRIMESTRE%202021.xlsx",
            nombre: "02 PLAN DE MEJORAMIENTO II TRIMESTRE 2021.xlsx"
          },
          {
            id: 3,
            tipo: "excel",
            url:"/assets/files/planes/plan_mejoramiento/03.%202021/03%20PLAN%20DE%20MEJORAMIENTO%20III%20TRIMESTRE%202021.xlsx",
            nombre: "03 PLAN DE MEJORAMIENTO III TRIMESTRE 2021.xlsx"
          },
          {
            id: 4,
            tipo: "excel",
            url:"/assets/files/planes/plan_mejoramiento/03.%202021/04%20PLAN%20DE%20MEJORAMIENTO%20IV%20TRIMESTRE%202021.xlsx",
            nombre: "04 PLAN DE MEJORAMIENTO IV TRIMESTRE 2021.xlsx"
          },
        ]
      },
      {
        id:4,
        nombre:"2020",
        files: [

          {
            id: 1,
            tipo: "excel",
            url:"/assets/files/planes/plan_mejoramiento/04.%202020/FORMULACION%20PLAN%20DE%20MEJORAMIENTO%20INSTITUCIONAL%20CONSOLIDADO%202020.xlsx",
            nombre: "FORMULACION PLAN DE MEJORAMIENTO INSTITUCIONAL CONSOLIDADO 2020.xlsx"
          }
        ]
      },
      {
        id:5,
        nombre:"2019",
        files: [

          {
            id: 1,
            tipo: "excel",
            url:"/assets/files/planes/plan_mejoramiento/05.%202019/PMI%20Primer%20Trimestre%20Final.xlsx",
            nombre: "PMI Primer Trimestre Final.xlsx"
          },
          {
            id: 2,
            tipo: "excel",
            url:"/assets/files/planes/plan_mejoramiento/05.%202019/PMI_III_TRIMESTRE_2019.xlsx",
            nombre: "PMI_III_TRIMESTRE_2019.xlsx"
          },
          {
            id: 3,
            tipo: "excel",
            url:"/assets/files/planes/plan_mejoramiento/05.%202019/PMI_II_TRIMESTRE_2019.xlsx",
            nombre: "PMI_II_TRIMESTRE_2019.xlsx"
          },
          {
            id: 4,
            tipo: "excel",
            url:"/assets/files/planes/plan_mejoramiento/05.%202019/PMI_II_TRIMESTRE_2019P.xlsx",
            nombre: "PMI_II_TRIMESTRE_2019P.xlsx"
          }
        ]
      },
      {
        id:6,
        nombre:"2018",
        files: [

          {
            id: 1,
            tipo: "excel",
            url:"/assets/files/planes/plan_mejoramiento/06.%202018/PMI%20IV%20TRIMESTRE%20DEL%202018.xls",
            nombre: "PMI IV TRIMESTRE DEL 2018.xls"
          },
          {
            id: 2,
            tipo: "excel",
            url:"/assets/files/planes/plan_mejoramiento/06.%202018/PMI%20VIGENCIA%202018.xls",
            nombre: "PMI VIGENCIA 2018.xls"
          },
          {
            id: 3,
            tipo: "excel",
            url:"/assets/files/planes/plan_mejoramiento/06.%202018/PMI_III_TRIMESTRE_2018.xls",
            nombre: "PMI_III_TRIMESTRE_2018.xls"
          },
          {
            id: 4,
            tipo: "excel",
            url:"/assets/files/planes/plan_mejoramiento/06.%202018/PMI_II_TRIMESTRE_2018.xls",
            nombre: "PMI_II_TRIMESTRE_2018.xls"
          },
          {
            id: 5,
            tipo: "excel",
            url:"/assets/files/planes/plan_mejoramiento/06.%202018/PMI_I_TRIMESTRE_2018.xls",
            nombre: "PMI_I_TRIMESTRE_2018.xls"
          },
          {
            id: 6,
            tipo: "excel",
            url:"/assets/files/planes/plan_mejoramiento/06.%202018/SegundoSemestre2018.xlsx",
            nombre: "SegundoSemestre2018.xlsx"
          },
        ]
      },
      {
        id:7,
        nombre:"2017",
        files: [

          {
            id: 1,
            tipo: "excel",
            url:"/assets/files/planes/plan_mejoramiento/07.%202017/PMI%20VIGENCIA%202017.xls",
            nombre: "PMI VIGENCIA 2017.xls"
          },
          {
            id: 2,
            tipo: "excel",
            url:"/assets/files/planes/plan_mejoramiento/07.%202017/PMI_III_TRIMESTRE_2017.xls",
            nombre: "PMI_III_TRIMESTRE_2017.xls"
          },
          {
            id: 3,
            tipo: "excel",
            url:"/assets/files/planes/plan_mejoramiento/07.%202017/PMI_II_TRIMESTRE_2017.xls",
            nombre: "PMI_II_TRIMESTRE_2017.xls"
          },
          {
            id: 4,
            tipo: "excel",
            url:"/assets/files/planes/plan_mejoramiento/07.%202017/PMI_IV_TRIMESTRE_2017.xls",
            nombre: "PMI_IV_TRIMESTRE_2017.xls"
          },
          {
            id: 5,
            tipo: "excel",
            url:"/assets/files/planes/plan_mejoramiento/07.%202017/PMI_I_TRIMESTRE_2017.xls",
            nombre: "PMI_I_TRIMESTRE_2017.xls"
          },
        ]
      },
      {
        id:8,
        nombre:"2016",
        files: [

          {
            id: 1,
            tipo: "excel",
            url:"/assets/files/planes/plan_mejoramiento/08.%202016/PMI%20VIGENCIA%202016.xls",
            nombre: "PMI VIGENCIA 2016.xls"
          },
          {
            id: 2,
            tipo: "excel",
            url:"/assets/files/planes/plan_mejoramiento/08.%202016/PMI_III_TRIMESTRE_2016.xls",
            nombre: "PMI_III_TRIMESTRE_2016.xls"
          },
          {
            id: 3,
            tipo: "excel",
            url:"/assets/files/planes/plan_mejoramiento/08.%202016/PMI_II_TRIMESTRE_2016.xls",
            nombre: "PMI_II_TRIMESTRE_2016.xls"
          },
          {
            id: 4,
            tipo: "excel",
            url:"/assets/files/planes/plan_mejoramiento/08.%202016/PMI_IV_TRIMESTRE_2016.xls",
            nombre: "PMI_IV_TRIMESTRE_2016.xls"
          },
          {
            id: 5,
            tipo: "excel",
            url:"/assets/files/planes/plan_mejoramiento/08.%202016/PMI_I_TRIMESTRE_2016.xls",
            nombre: "PMI_I_TRIMESTRE_2016.xls"
          },
        ]
      },
      {
        id:9,
        nombre:"2015",
        files: [

          {
            id: 1,
            tipo: "excel",
            url:"/assets/files/planes/plan_mejoramiento/09.%202015/PMI%20VIGENCIA%202015.xls",
            nombre: "PMI VIGENCIA 2015.xls"
          },
          {
            id: 2,
            tipo: "excel",
            url:"/assets/files/planes/plan_mejoramiento/09.%202015/PMI_III_TRIMESTRE_2015.xls",
            nombre: "PMI_III_TRIMESTRE_2015.xls"
          },
          {
            id: 3,
            tipo: "excel",
            url:"/assets/files/planes/plan_mejoramiento/09.%202015/PMI_II_TRIMESTRE_2015.xls",
            nombre: "PMI_II_TRIMESTRE_2015.xls"
          },
          {
            id: 4,
            tipo: "excel",
            url:"/assets/files/planes/plan_mejoramiento/09.%202015/PMI_IV_TRIMESTRE_2015.xls",
            nombre: "PMI_IV_TRIMESTRE_2015.xls"
          },
          {
            id: 5,
            tipo: "excel",
            url:"/assets/files/planes/plan_mejoramiento/09.%202015/PMI_I_TRIMESTRE_2015.xls",
            nombre: "PMI_I_TRIMESTRE_2015.xls"
          },
        ]
      },
      {
        id:10,
        nombre:"2014",
        files: [

          {
            id: 1,
            tipo: "excel",
            url:"/assets/files/planes/plan_mejoramiento/10.%202014/PMI_CONSOLIDADO_I_2014.xls",
            nombre: "PMI_CONSOLIDADO_I_2014.xls"
          },
          {
            id: 2,
            tipo: "excel",
            url:"/assets/files/planes/plan_mejoramiento/10.%202014/PMI_III_TRIMESTRE_2014.xls",
            nombre: "PMI_III_TRIMESTRE_2014.xls"
          },
          {
            id: 3,
            tipo: "excel",
            url:"/assets/files/planes/plan_mejoramiento/10.%202014/PMI_II_TRIMESTRE_2014.xls",
            nombre: "PMI_II_TRIMESTRE_2014.xls"
          },
          {
            id: 4,
            tipo: "excel",
            url:"/assets/files/planes/plan_mejoramiento/10.%202014/PMI_IV_TRIMESTRE_2014.xls",
            nombre: "PMI_IV_TRIMESTRE_2014.xls"
          },
          {
            id: 5,
            tipo: "excel",
            url:"/assets/files/planes/plan_mejoramiento/10.%202014/PMI_I_TRIMESTRE_2014.xls",
            nombre: "PMI_I_TRIMESTRE_2014.xls"
          },
        ]
      },
      {
        id:11,
        nombre:"2013",
        files: [

          {
            id: 1,
            tipo: "excel",
            url:"/assets/files/planes/plan_mejoramiento/11.%202013/PMI_%20III_TRIMESTRE_2013.xls",
            nombre: "PMI_ III_TRIMESTRE_2013.xls"
          },
          {
            id: 2,
            tipo: "excel",
            url:"/assets/files/planes/plan_mejoramiento/11.%202013/PMI_%20II_TRIMESTRE_2013.xls",
            nombre: "PMI_ II_TRIMESTRE_2013.xls"
          },
          {
            id: 3,
            tipo: "excel",
            url:"/assets/files/planes/plan_mejoramiento/11.%202013/PMI_%20IV_TRIMESTRE_2013.xls",
            nombre: "PMI_ IV_TRIMESTRE_2013.xls"
          },
          {
            id: 4,
            tipo: "excel",
            url:"/assets/files/planes/plan_mejoramiento/11.%202013/PMI_CONSOLIDADO_IV_2013.xls",
            nombre: "PMI_CONSOLIDADO_IV_2013.xls"
          },
          {
            id: 5,
            tipo: "excel",
            url:"/assets/files/planes/plan_mejoramiento/11.%202013/PMI_I_TRIMESTRE_2013.xls",
            nombre: "PMI_I_TRIMESTRE_2013.xls"
          },
        ]
      },
      {
        id:12,
        nombre:"2012",
        files: [

          {
            id: 1,
            tipo: "excel",
            url:"/assets/files/planes/plan_mejoramiento/12.%202012/PMI_III_TRIMESTRE_2012.xls",
            nombre: "PMI_III_TRIMESTRE_2012.xls"
          },
          {
            id: 2,
              tipo: "excel",
            url:"/assets/files/planes/plan_mejoramiento/12.%202012/PMI_IV_TRIMESTRE_2012.xls",
            nombre: "PMI_IV_TRIMESTRE_2012.xls"
          },
          {
            id: 3,
            tipo: "excel",
            url:"/assets/files/planes/plan_mejoramiento/12.%202012/PMI_I_SEMESTRE_2012.xls",
            nombre: "PMI_I_SEMESTRE_2012.xls"
          },
        ]
      },
      {
        id:13,
        nombre:"2011",
        files: [

          {
            id: 1,
            tipo: "pdf",
            url:"/assets/files/planes/plan_mejoramiento/13.%202011/PMI_III_TRIMESTRE_2011.pdf",
            nombre: "PMI_III_TRIMESTRE_2011.pdf"
          },
          {
            id: 2,
            tipo: "pdf",
            url:"/assets/files/planes/plan_mejoramiento/13.%202011/PMI_II_TRIMESTRE_2011.pdf",
            nombre: "PMI_II_TRIMESTRE_2011.pdf"
          },
          {
            id: 3,
            tipo: "excel",
            url:"/assets/files/planes/plan_mejoramiento/13.%202011/PMI_IV_TRIMESTRE_2011.xls",
            nombre: "PMI_IV_TRIMESTRE_2011.xls"
          },
          {
            id: 4,
            tipo: "excel",
            url:"/assets/files/planes/plan_mejoramiento/13.%202011/PMI_I_TRIMESTRE_2011.xls",
            nombre: "PMI_I_TRIMESTRE_2011.xls"
          },
        ]
      }
    ];
  }
}
