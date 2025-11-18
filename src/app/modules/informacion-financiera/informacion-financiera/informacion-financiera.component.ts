import { Component } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { AcordionAnidadoFiles } from '../../../interfaces/acordion';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-informacion-financiera',
  standalone: true,
  imports: [NgbAccordionModule, NgFor],
  templateUrl: './informacion-financiera.component.html',
  styleUrl: './informacion-financiera.component.css',
})
export class InformacionFinancieraComponent {
  files: AcordionAnidadoFiles[];

  constructor() {
    this.files = [
      
      {
        id: 1,
        nombre: '2025',
        acordion: [
            {
            id: 1,
            nombre: 'Desegregación presupuesto 2025',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'REP_EPG034_EjecucionPresupuestal CUENTAS POR PAGAR DECRETO LIQUIDACION A ENERO 31 2025- 2025-02-03-.pdf',
                url: 'assets/files/presupuesto/2025/ENERO/REP_EPG034_EjecucionPresupuestal CUENTAS POR PAGAR DECRETO LIQUIDACION A ENERO 31 2025- 2025-02-03-.pdf',
              },
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'REP_EPG034_EjecucionPresupuestal DECRETO LIQUIDACION A 31 ENERO 2025 - 2025-02-03-.pdf',
                url: 'assets/files/presupuesto/2025/ENERO/REP_EPG034_EjecucionPresupuestal DECRETO LIQUIDACION A 31 ENERO 2025 - 2025-02-03-.pdf',
              }
            ],
          },
          {
            id: 1,
            nombre: 'ENERO',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'REP_EPG034_EjecucionPresupuestal CUENTAS POR PAGAR DECRETO LIQUIDACION A ENERO 31 2025- 2025-02-03-.pdf',
                url: 'assets/files/presupuesto/2025/ENERO/REP_EPG034_EjecucionPresupuestal CUENTAS POR PAGAR DECRETO LIQUIDACION A ENERO 31 2025- 2025-02-03-.pdf',
              },
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'REP_EPG034_EjecucionPresupuestal DECRETO LIQUIDACION A 31 ENERO 2025 - 2025-02-03-.pdf',
                url: 'assets/files/presupuesto/2025/ENERO/REP_EPG034_EjecucionPresupuestal DECRETO LIQUIDACION A 31 ENERO 2025 - 2025-02-03-.pdf',
              },
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'REP_EPG034_EjecucionPresupuestal RESERVA DECRETO LIQUIDACION A ENERO 31 2025- 2025-02-03-.pdf',
                url: 'assets/files/presupuesto/2025/ENERO/REP_EPG034_EjecucionPresupuestal RESERVA DECRETO LIQUIDACION A ENERO 31 2025- 2025-02-03-.pdf',
              },
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'REP_EPG034_EjecucionPresupuestal RESERVA DECRETO LIQUIDACION A ENERO 31 2025- 2025-02-03-.pdf',
                url: 'assets/files/presupuesto/2025/ENERO/REP_EPG034_EjecucionPresupuestal RESERVA DECRETO LIQUIDACION A ENERO 31 2025- 2025-02-03-.pdf',
              },
            ],
          },
          {
            id: 1,
            nombre: 'FEBRERO',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'REP_EPG034_EjecucionPresupuestal CUENTAS POR PAGAR DECRETO LIQUIDACION - 2025-03-03 A FEBRERO 28-.pdf',
                url: 'assets/files/presupuesto/2025/FEBRERO/REP_EPG034_EjecucionPresupuestal CUENTAS POR PAGAR DECRETO LIQUIDACION - 2025-03-03 A FEBRERO 28-.pdf',
              },
              {
                id: 1,
                tipo: 'pdf',
                nombre:
                  'REP_EPG034_EjecucionPresupuestal RESERVAS DECRETO LIQUIDACION - 2025-03-03 A FEBRERO 28-.pdf',
                url: 'assets/files/presupuesto/2025/FEBRERO/REP_EPG034_EjecucionPresupuestal RESERVAS DECRETO LIQUIDACION - 2025-03-03 A FEBRERO 28-.pdf',
              },
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'REP_EPG034_EjecucionPresupuestal VIGENCIA DECRETO LIQUIDACION - 2025-03-03 A FEB 28..pdf',
                url: 'assets/files/presupuesto/2025/FEBRERO/REP_EPG034_EjecucionPresupuestal VIGENCIA DECRETO LIQUIDACION - 2025-03-03 A FEB 28..pdf',
              },
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'REP_ING031_InformeEjecucionINGRESOS VIGENCIA DECRETO LIQUIDACION - 2025-03-04 A FEBRERO 28 2025-.pdf',
                url: 'assets/files/presupuesto/2025/FEBRERO/REP_ING031_InformeEjecucionINGRESOS VIGENCIA DECRETO LIQUIDACION - 2025-03-04 A FEBRERO 28 2025-.pdf',
              },
            ],
          },
          
          {
            id: 1,
            nombre: 'MARZO',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'EJECUCION   RESERVAS 2024 DECRETO LIQUIDACION - 2025-03-31 PARA WEB.pdf',
                url: 'assets/files/presupuesto/2025/MARZO/EJECUCION   RESERVAS 2024 DECRETO LIQUIDACION - 2025-03-31 PARA WEB.pdf',
              },
              {
                id: 1,
                tipo: 'pdf',
                nombre:
                  'EJECUCION  CXP DECRETO LIQUIDACION - 2025-03-31 PARA WEB.pdf',
                url: 'assets/files/presupuesto/2025/MARZO/EJECUCION  CXP DECRETO LIQUIDACION - 2025-03-31 PARA WEB.pdf',
              },
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'EJECUCION  INGRESOS DECRETO LIQUIDACION - 2025-03-31 PARA WEB.pdf',
                url: 'assets/files/presupuesto/2025/MARZO/EJECUCION  INGRESOS DECRETO LIQUIDACION - 2025-03-31 PARA WEB.pdf',
              },
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'EJECUCION  VIGENCIA DECRETO LIQUIDACION 2025-03-31 PARA WEB.pdf',
                url: 'assets/files/presupuesto/2025/MARZO/EJECUCION  VIGENCIA DECRETO LIQUIDACION 2025-03-31 PARA WEB.pdf',
              },
            ],
          },

          {
            id: 1,
            nombre: 'ABRIL',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'EJECUCION  CUENTAS X PAGAR DECRETO LIQUIDACION A ABRIL 30 2025.pdf',
                url: 'assets/files/presupuesto/2025/ABRIL/EJECUCION  CUENTAS X PAGAR DECRETO LIQUIDACION A ABRIL 30 2025.pdf',
              },
              {
                id: 1,
                tipo: 'pdf',
                nombre:
                  'EJECUCION  INGRESOS DECRETO LIQUIDACION A ABRIL 30 2025.pdf',
                url: 'assets/files/presupuesto/2025/ABRIL/EJECUCION  INGRESOS DECRETO LIQUIDACION A ABRIL 30 2025.pdf',
              },
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'EJECUCION  RESERVAS DECRETO LIQUIDACION A ABRIL 30 2025.pdf',
                url: 'assets/files/presupuesto/2025/ABRIL/EJECUCION  RESERVAS DECRETO LIQUIDACION A ABRIL 30 2025.pdf',
              },
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'EJECUCION DECRETO LIQUIDACION A ABRIL 30 2025.pdf',
                url: 'assets/files/presupuesto/2025/ABRIL/EJECUCION DECRETO LIQUIDACION A ABRIL 30 2025.pdf',
              },
            ],
          },

                    {
            id: 1,
            nombre: 'MAYO',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'REP_EPG034_EjecucionPresupuestal RESERVAS DECRETO LIQUIDACION A MAYO 31 2025-.pdf',
                url: 'assets/files/presupuesto/2025/MAYO/REP_EPG034_EjecucionPresupuestal RESERVAS DECRETO LIQUIDACION A MAYO 31 2025-.pdf',
              },
              {
                id: 1,
                tipo: 'pdf',
                nombre:
                  'REP_EPG034_EjecucionPresupuestalAgregada DECRETO LIQUIDACION A MAYO 31 2025-.pdf',
                url: 'assets/files/presupuesto/2025/MAYO/REP_EPG034_EjecucionPresupuestalAgregadaDECRETO LIQUIDACION A MAYO 31 2025-.pdf',
              },
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'REP_ING031_InformeEjecucionPresupuestal INGRESOS DECRETO LIQUIDACION MAYO 31 2025-.pd',
                url: 'assets/files/presupuesto/2025/MAYO/REP_ING031_InformeEjecucionPresupuestal INGRESOS DECRETO LIQUIDACION MAYO 31 2025-.pdf',
              },
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'REP_EPG034_EjecucionPresupuestalAgregaDECRETO LIQUIDACION A MAYO 31 2025-.pdf',
                url: 'assets/files/presupuesto/2025/MAYO/REP_EPG034_EjecucionPresupuestalAgregadaCUENTAS X PAGAR DECRETO LIQUIDACION A MAYO 31 2025-.pdf',
              },
            ],
          },

          
         {
            id: 1,
            nombre: 'JUNIO',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'REP_EPG034_EJECUCIONPRESUPUESTALAGREGADA DECRETO LIQUIDACION JUNIO 30 2025-.pdf',
                url: 'assets/files/presupuesto/2025/JUNIO/REP_EPG034_EjecucionPresupuestalAgregada CXP DECRETO LIQ JUNIO 30 2025.pdf',
              },
              {
                id: 1,
                tipo: 'pdf',
                nombre:
                  'REP_EPG034_EJECUCIONPRESUPUESTALAGREGADA DECRETO LIQUIDACION JUNIO 30 2025.PDF',
                url: 'assets/files/presupuesto/2025/JUNIO/REP_EPG034_EjecucionPresupuestalAgregada DECRETO LIQUIDACION JUNIO 30 2025.pdf',
              },
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'REP_EPG034_EJECUCIONPRESUPUESTALAGREGADA DECRETO LIQUIDACION JUNIO 30 2025-.PDF',
                url: 'assets/files/presupuesto/2025/JUNIO/REP_EPG034_EjecucionPresupuestalAgregada DECRETO LIQUIDACION JUNIO 30 2025-.pdf',
              },
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'REP_EPG034_EJECUCIONPRESUPUESTALAGREGADA RESERVAS DECRETO LIQ JUNIO 30 2025.PDF',
                url: 'assets/files/presupuesto/2025/JUNIO/REP_EPG034_EjecucionPresupuestalAgregada RESERVAS DECRETO LIQ JUNIO 30 2025.pdf',
              },
               {
                id: 1,
                tipo: 'pdf',
                nombre: 'REP_ING031_INFORMEEJECUCIONPRESUPUESTAL INGRESOS DECRETO LIQ JUNIO 30 2025.PDF',
                url: 'assets/files/presupuesto/2025/JUNIO/REP_ING031_InformeEjecucionPresupuestal INGRESOS DECRETO LIQ JUNIO 30 2025.pdf',
              }
            ],
          },

          {
            id: 1,
            nombre: 'JULIO',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'REP_ING031_InformeEjecucionPresupuestal INGRESOS DECRETO LIQUIDACION A JULIO 31 2025.pdf',
                url: 'assets/files/presupuesto/2025/JULIO/REP_ING031_InformeEjecucionPresupuestal INGRESOS DECRETO LIQUIDACION A JULIO 31 2025.pdf',
              },
              {
                id: 1,
                tipo: 'pdf',
                nombre:
                  'REP_EPG034_EjecucionPresupuestalAgregada  RESERVAS DECRETO LIQUIDACION A JULIO 31 2025.PDF',
                url: 'assets/files/presupuesto/2025/JULIO/REP_EPG034_EjecucionPresupuestalAgregada  RESERVAS DECRETO LIQUIDACION A JULIO 31 2025.pdf',
              },
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'REP_EPG034_EjecucionPresupuestalAgregada  DECRETO LIQUIDACION A JULIO_ 31 2025.PDF',
                url: 'assets/files/presupuesto/2025/JULIO/REP_EPG034_EjecucionPresupuestalAgregada  DECRETO LIQUIDACION A JULIO_ 31 2025.pdf',
              },
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'REP_EPG034_EjecucionPresupuestalAgregada  DECRETO LIQUIDACION A JULIO 31 2025.PDF',
                url: 'assets/files/presupuesto/2025/JULIO/REP_EPG034_EjecucionPresupuestalAgregada  DECRETO LIQUIDACION A JULIO 31 2025.pdf',
              }
            ],
          },

           {
            id: 1,
            nombre: 'AGOSTO',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'REP_EPG034_EjecucionPresupuestalAgregada  CXP DECRETO LIQUIDACION A AGOSTO 31 2025.pdf',
                url: 'assets/files/presupuesto/2025/AGOSTO/REP_EPG034_EjecucionPresupuestalAgregada  CXP DECRETO LIQUIDACION A AGOSTO 31 2025.pdf',
              },
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'REP_EPG034_EjecucionPresupuestalAgregada DECRETO LIQUIDACION AGOSTO 31 2025.pdf',
                url: 'assets/files/presupuesto/2025/AGOSTO/REP_EPG034_EjecucionPresupuestalAgregada DECRETO LIQUIDACION AGOSTO 31 2025.pdf',
              },
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'REP_EPG034_EjecucionPresupuestalAgregada  DECRETO LIQUIDACION A JULIO_ 31 2025.PDF',
                url: 'assets/files/presupuesto/2025/AGOSTO/REP_EPG034_EjecucionPresupuestalAgregadaRESERVAS DECRETO LIQUIDACION A AGOSTO 31 2025.pdf',
              },
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'REP_ING031_InformeEjecucionPresupuestal INGRESOS DECRETO DE LIQUIDACION AGOSTO 31 2025.pdf',
                url: 'assets/files/presupuesto/2025/AGOSTO/REP_ING031_InformeEjecucionPresupuestal INGRESOS DECRETO DE LIQUIDACION AGOSTO 31 2025.pdf',
              }
            ],
          },


            {
            id: 1,
            nombre: 'SEPTIEMBRE',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'REP_EPG034_EjecucionPresupuestalAgregada DECRETO LIQUIDACION SEPTIEMBRE 30 2025 (1).pdf',
                url: 'assets/files/presupuesto/2025/SEPTIEMBRE/REP_EPG034_EjecucionPresupuestalAgregada DECRETO LIQUIDACION SEPTIEMBRE 30 2025 (1).pdf',
              },
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'REP_EPG034_EjecucionPresupuestal RESERVAS DECRETO LIQUIDACION SEPTIEMBRE 30 2025.pdf',
                url: 'assets/files/presupuesto/2025/SEPTIEMBRE/REP_EPG034_EjecucionPresupuestal RESERVAS DECRETO LIQUIDACION SEPTIEMBRE 30 2025.pdf',
              },
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'REP_EPG034_EjecucionPresupuestal CXP DECRETO LIQUIDACION SEPTIEMBRE 30 2025.PDF',
                url: 'assets/files/presupuesto/2025/SEPTIEMBRE/REP_EPG034_EjecucionPresupuestal CXP DECRETO LIQUIDACION SEPTIEMBRE 30 2025.pdf',
              },
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'REP_ING031_InformeEjecucionPresupuestal INGRESOS DECRETO LIQUIDACION A SEPT 30 2025.pdf',
                url: 'assets/files/presupuesto/2025/SEPTIEMBRE/REP_ING031_InformeEjecucionPresupuestal INGRESOS DECRETO LIQUIDACION A SEPT 30 2025.pdf',
              }
            ],
          },
         
         
        ],
      },

      {
        id: 1,
        nombre: '2024',
        acordion: [
          {
            id: 1,
            nombre: 'Desegregación presupuesto 2024',
            files: [
               {
            id:1,
            tipo: "pdf",
            url:"/assets/files/planes/proyectos_inversion/2025/RESOLUCIÓN 002 DE 2024 - DESAGREGAN CUENTAS GASTOS FPS 2024.pdf",
            nombre:"RESOLUCIÓN 002 DE 2024 - DESAGREGAN CUENTAS GASTOS FPS 2024"
          },
          {
            id:2,
            tipo: "pdf",
            url:"/assets/files/planes/proyectos_inversion/2025/RESOLUCIÓN 001 DE 2024 - DESAGREGAN CUENTAS INGRESO FPS 2024.pdf",
            nombre:"RESOLUCIÓN 001 DE 2024 - DESAGREGAN CUENTAS INGRESO FPS 2024"
          },

             
            ],
          },
          
          {
            id: 1,
            nombre: 'ENERO',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'Ejecucion Presupuestal GASTO.pdf',
                url: 'assets/files/presupuesto/01. 2024/01 Enero/EjecucionPresupuestal GASTO.pdf',
              },
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'EjecucionPresupuestalAgregada Reservas.pdf',
                url: 'assets/files/presupuesto/01. 2024/01 Enero/EjecucionPresupuestalAgregada Reservas.pdf',
              },
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'EjecucionPresupuestalAgregada Cuentas x Pagar.pdf',
                url: 'assets/files/presupuesto/01. 2024/01 Enero/EjecucionPresupuestalAgregada Cuentas x Pagar.pdf',
              },
            ],
          },
          {
            id: 1,
            nombre: 'FEBRERO',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'EjecucionPresupuestal Reserva.pdf',
                url: 'assets/files/presupuesto/01. 2024/02 Febrero/Ejecucion Presupuestal Reserva.pdf',
              },
              {
                id: 1,
                tipo: 'pdf',
                nombre:
                  'InformeEjecucionPresupuestal -PENSION INGRESOS FEBRERO (1).pdf',
                url: 'assets/files/presupuesto/01. 2024/02 Febrero/InformeEjecucionPresupuestal -PENSION INGRESOS FEBRERO (1).pdf',
              },
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'EjecucionPresupuestal CXP.pdf',
                url: 'assets/files/presupuesto/01. 2024/02 Febrero/Ejecucion Presupuestal CXP.pdf',
              },
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'EjecucionPresupuestal Gasto.pdf',
                url: 'assets/files/presupuesto/01. 2024/02 Febrero/Ejecucion Presupuestal Gasto.pdf',
              },
            ],
          },
          {
            id: 1,
            nombre: 'MARZO',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'INGRESOS (1).pdf',
                url: 'assets/files/presupuesto/01. 2024/03 Marzo/INGRESOS (1).pdf',
              },
              {
                id: 1,
                tipo: 'pdf',
                nombre: '_EjecucionPresupuestal CXP (1).pdf',
                url: 'assets/files/presupuesto/01. 2024/03 Marzo/_EjecucionPresupuestal  CXP (1).pdf',
              },
              {
                id: 1,
                tipo: 'pdf',
                nombre: '_EjecucionPresupuestal Reserva (1).pdf',
                url: 'assets/files/presupuesto/01. 2024/03 Marzo/_EjecucionPresupuestal  Reserva (1).pdf',
              },
              {
                id: 1,
                tipo: 'pdf',
                nombre: '_EjecucionPresupuestal Gasto (1).pdf',
                url: 'assets/files/presupuesto/01. 2024/03 Marzo/_EjecucionPresupuestal Gasto (1).pdf',
              },
            ],
          },
          {
            id: 1,
            nombre: 'ABRIL',
            files: [
              {
                id: 1,
                tipo: 'excel',
                nombre: '_EjecucionPresupuestalAgregada Cuentas por Pagar.xlsx',
                url: 'assets/files/presupuesto/01. 2024/04 Abril/_EjecucionPresupuestalAgregada Cuentas por Pagar.xlsx',
              },
              {
                id: 1,
                tipo: 'excel',
                nombre: '_EjecucionPresupuestalAgregada Reserva.xlsx',
                url: 'assets/files/presupuesto/01. 2024/04 Abril/_EjecucionPresupuestalAgregada Reserva.xlsx',
              },
              {
                id: 1,
                tipo: 'excel',
                nombre: '_EjecucionPresupuestalAgregada Gasto.xlsx',
                url: 'assets/files/presupuesto/01. 2024/04 Abril/_EjecucionPresupuestalAgregada Gasto.xlsx',
              },
            ],
          },
          {
            id: 1,
            nombre: 'MAYO',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre:
                  'REP_EPG034_EjecucionPresupuestal CUENTAS POR PAGAR 2023 A MAYO DECRETO LIQUIDACION - REPORTE DEL 2024-07-24 (1).pdf',
                url: 'assets/files/presupuesto/01. 2024/05 Mayo/REP_EPG034_EjecucionPresupuestal CUENTAS POR PAGAR 2023 A MAYO DECRETO LIQUIDACION - REPORTE DEL 2024-07-24 (1).pdf',
              },
              {
                id: 1,
                tipo: 'pdf',
                nombre:
                  'REP_EPG034_EjecucionPresupuestal RESERVAS 2023 A MAYO DECRETO LIQUIDACION - REPORTE DEL 2024-07-24 (1).pdf',
                url: 'assets/files/presupuesto/01. 2024/05 Mayo/REP_EPG034_EjecucionPresupuestal RESERVAS 2023 A MAYO DECRETO LIQUIDACION - REPORTE DEL 2024-07-24 (1).pdf',
              },
              {
                id: 1,
                tipo: 'pdf',
                nombre:
                  'REP_EPG034_EjecucionPresupuestalDECRETO LIQUIDACION A MAYO 31 - CONSULTA 2024-07-24 (1).pdf',
                url: 'assets/files/presupuesto/01. 2024/05 Mayo/REP_EPG034_EjecucionPresupuestalDECRETO LIQUIDACION A MAYO 31 - CONSULTA 2024-07-24 (1).pdf',
              },
              {
                id: 1,
                tipo: 'pdf',
                nombre:
                  'REP_ING031_InformeEjecucionPresupuestal ffnn ingresos decreto liquidacion a mayo 2024 (1).pdf',
                url: 'assets/files/presupuesto/01. 2024/05 Mayo/REP_ING031_InformeEjecucionPresupuestal ffnn ingresos decreto liquidacion a mayo 2024 (1).pdf',
              },
            ],
          },
          {
            id: 1,
            nombre: 'JUNIO',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre:
                  'REP_EPG034_EjecucionPresupuestalDECRETO LIQUIDACION A JUNIO 30 - CONSULTA 2024-07-24--- (1).pdf',
                url: 'assets/files/presupuesto/01. 2024/06 Junio/REP_EPG034_EjecucionPresupuestalDECRETO LIQUIDACION A JUNIO 30 - CONSULTA 2024-07-24--- (1).pdf',
              },
              {
                id: 1,
                tipo: 'pdf',
                nombre:
                  'REP_EPG034_EjecucionPresupuestalDECRETO LIQUIDACION CUENTAS POR PAGAR A JUNIO 30 REPORTE DEL - 2024-07-24 (1).pdf',
                url: 'assets/files/presupuesto/01. 2024/06 Junio/REP_EPG034_EjecucionPresupuestalDECRETO LIQUIDACION CUENTAS POR PAGAR A JUNIO 30 REPORTE DEL - 2024-07-24 (1).pdf',
              },
              {
                id: 1,
                tipo: 'pdf',
                nombre:
                  'REP_EPG034_EjecucionPresupuestalDECRETO LIQUIDACION RESERVAS A JUNIO 30 REPORTE DEL - 2024-07-24 (1).pdf',
                url: 'assets/files/presupuesto/01. 2024/06 Junio/REP_EPG034_EjecucionPresupuestalDECRETO LIQUIDACION RESERVAS A JUNIO 30 REPORTE DEL - 2024-07-24 (1).pdf',
              },
              {
                id: 1,
                tipo: 'pdf',
                nombre:
                  'REP_ING031_InformeEjecucionPresupuestal FFNN INGRESOS DECRETO LIQUIDACION A JUNIO 2024 (1).pdf',
                url: 'assets/files/presupuesto/01. 2024/06 Junio/REP_ING031_InformeEjecucionPresupuestal FFNN INGRESOS DECRETO LIQUIDACION A JUNIO 2024 (1).pdf',
              },
            ],
          },
          {
            id: 1,
            nombre: 'JULIO',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'EJECUCION CUENTAS X PAGAR A JULIO.pdf',
                url: 'assets/files/presupuesto/01. 2024/07 Julio/EJECUCION   CUENTAS X PAGAR A JULIO.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre: 'EJECUCION RESERVAS A JULIO.pdf',
                url: 'assets/files/presupuesto/01. 2024/07 Julio/EJECUCION  RESERVAS A JULIO.pdf',
              },
              {
                id: 3,
                tipo: 'pdf',
                nombre: 'EJECUCION DE INGRESOS JULIO.pdf',
                url: 'assets/files/presupuesto/01. 2024/07 Julio/EJECUCION DE INGRESOS JULIO.pdf',
              },
              {
                id: 4,
                tipo: 'pdf',
                nombre: 'EJECUCION GASTO MES DE JULIO.pdf',
                url: 'assets/files/presupuesto/01. 2024/07 Julio/EJECUCION GASTO MES DE JULIO.pdf',
              },
            ],
          },
          {
            id: 2,
            nombre: 'AGOSTO',
            files: [
              {
                id: 5,
                tipo: 'pdf',
                nombre: 'EJECUCION DE CUENTAS XPAGAR A AGOSTO 31 2024.pdf',
                url: 'assets/files/presupuesto/01. 2024/08 Agosto/EJECUCION DE  CUENTAS XPAGAR  A AGOSTO 31 2024.pdf',
              },
              {
                id: 6,
                tipo: 'pdf',
                nombre: 'EJECUCION DE GASTO MES DE AGOSTO 31 2024.pdf',
                url: 'assets/files/presupuesto/01. 2024/08 Agosto/EJECUCION DE GASTO MES DE AGOSTO 31 2024.pdf',
              },
              {
                id: 7,
                tipo: 'pdf',
                nombre: 'EJECUCION DE INGRESOS AGOSTO 31 (1).pdf',
                url: 'assets/files/presupuesto/01. 2024/08 Agosto/EJECUCION DE INGRESOS  AGOSTO 31 (1).pdf',
              },
              {
                id: 8,
                tipo: 'pdf',
                nombre: 'EJECUCION DE RESERVAS A AGOSTO 31 2024.pdf',
                url: 'assets/files/presupuesto/01. 2024/08 Agosto/EJECUCION DE RESERVAS  A AGOSTO 31 2024.pdf',
              },
            ],
          },
          {
            id: 3,
            nombre: 'SEPTIEMBRE',
            files: [
              {
                id: 9,
                tipo: 'pdf',
                nombre:
                  'EJECUCION VIGENCIA DECRETO LIQUIDACION FFNN A SEPT 30 2024- (1).pdf',
                url: 'assets/files/presupuesto/01. 2024/09 Septiembre/EJECUCION VIGENCIA DECRETO LIQUIDACION FFNN A SEPT 30 2024- (1).pdf',
              },
              {
                id: 10,
                tipo: 'pdf',
                nombre:
                  'InformeEjecucionPresupuestal INGRESOSFFNN DECRETO LIQUIDACION A SEPT 30 2024)-.pdf',
                url: 'assets/files/presupuesto/01. 2024/09 Septiembre/InformeEjecucionPresupuestal INGRESOSFFNN DECRETO LIQUIDACION A SEPT 30 2024)-.pdf',
              },
              {
                id: 11,
                tipo: 'pdf',
                nombre:
                  'REP_EPG034_EjecucionPresupuestalAgregada CUENTAS POR PAGAR DECRETO LIQUIDACION A SEPT 30-.pdf',
                url: 'assets/files/presupuesto/01. 2024/09 Septiembre/REP_EPG034_EjecucionPresupuestalAgregada CUENTAS POR PAGAR DECRETO LIQUIDACION A SEPT 30-.pdf',
              },
              {
                id: 12,
                tipo: 'pdf',
                nombre:
                  'REP_EPG034_EjecucionPresupuestalAgregada RESERVAS DECRETO LIQUIDACION A SEPT 30-.pdf',
                url: 'assets/files/presupuesto/01. 2024/09 Septiembre/REP_EPG034_EjecucionPresupuestalAgregada RESERVAS DECRETO LIQUIDACION A SEPT 30-.pdf',
              },
            ],
          },
          {
            id: 10,
            nombre: 'OCTUBRE',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre:
                  'EjecucionPresupuestal FFNN CXP DECRETO LIQUIDACION A OCT 31  WEB- (1).pdf',
                url: 'assets/files/presupuesto/01. 2024/10 Octubre/EjecucionPresupuestal FFNN CXP DECRETO LIQUIDACION A OCT 31  WEB- (1).pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre:
                  'EjecucionPresupuestal RESERVAS DECRETO LIQUIDACION A OCT 31  WEB- (1).pdf',
                url: 'assets/files/presupuesto/01. 2024/10 Octubre/EjecucionPresupuestal RESERVAS DECRETO LIQUIDACION A OCT 31  WEB- (1).pdf',
              },
              {
                id: 3,
                tipo: 'pdf',
                nombre:
                  'EjecucionPresupuestal VIGENCIA DECRETO LIQUIDACION  A OCT 31  - 2024-11-01 WEB- (1).pdf',
                url: 'assets/files/presupuesto/01. 2024/10 Octubre/EjecucionPresupuestal VIGENCIA DECRETO LIQUIDACION  A OCT 31  - 2024-11-01 WEB- (1).pdf',
              },
              {
                id: 4,
                tipo: 'pdf',
                nombre:
                  'InformeEjecucion INGRESOS FFNN  A OCTUBRE 31 DECRETO LIQUIDACION WEB- (1).pdf',
                url: 'assets/files/presupuesto/01. 2024/10 Octubre/InformeEjecucion INGRESOS FFNN  A OCTUBRE 31 DECRETO LIQUIDACION WEB- (1).pdf',
              },
            ],
          },
          {
            id: 11,
            nombre: 'NOVIEMBRE',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre:
                  'REP_EPG034_EjecucionPresupuestal CXP DECRETO LIQUIDACION  - 2024-12-02 A NOV 30-.pdf',
                url: 'assets/files/presupuesto/01. 2024/11 Noviembre/REP_EPG034_EjecucionPresupuestal CXP DECRETO LIQUIDACION  - 2024-12-02 A NOV 30-.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre:
                  'REP_EPG034_EjecucionPresupuestal RESERVAS DECRETO LIQUIDACION - 2024-12-02 A NOV 30-.pdf',
                url: 'assets/files/presupuesto/01. 2024/11 Noviembre/REP_EPG034_EjecucionPresupuestal RESERVAS DECRETO LIQUIDACION - 2024-12-02 A NOV 30-.pdf',
              },
              {
                id: 3,
                tipo: 'pdf',
                nombre:
                  'REP_EPG034_EjecucionPresupuestal VIGENCIA A NOV 30 FFNN DECRETO LIQUIDACION - 2024-12-02-.pdf',
                url: 'assets/files/presupuesto/01. 2024/11 Noviembre/REP_EPG034_EjecucionPresupuestal VIGENCIA A NOV 30 FFNN DECRETO LIQUIDACION - 2024-12-02-.pdf',
              },
              {
                id: 4,
                tipo: 'pdf',
                nombre:
                  'REP_ING031_InformeEjecucionINGRESOS A NOV 30 2024 DECRETO LIQUIDACION-.pdf',
                url: 'assets/files/presupuesto/01. 2024/11 Noviembre/REP_ING031_InformeEjecucionINGRESOS A NOV 30 2024 DECRETO LIQUIDACION-.pdf',
              },
            ],
          },
          {
            id: 12,
            nombre: 'DICIEMBRE',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre:
                  'EJECUCION PRESUPUESTAL VIGENCIA DECRETO DE LIQUIDACION A DIC 31 2024 EXTR ENERO 18 25-.pdf',
                url: 'assets/files/presupuesto/01. 2024/12 Diciembre/EJECUCION PRESUPUESTAL VIGENCIA DECRETO DE LIQUIDACION A DIC 31 2024 EXTR ENERO 18 25-.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre:
                  'REP_EPG034_EjecucionPresupuestal CXP DECRETO LIQUIDACION  - 2025-01-02 A DICIEMBRE 31-.pdf',
                url: 'assets/files/presupuesto/01. 2024/12 Diciembre/REP_EPG034_EjecucionPresupuestal CXP DECRETO LIQUIDACION  - 2025-01-02 A DICIEMBRE 31-.pdf',
              },
              {
                id: 3,
                tipo: 'pdf',
                nombre:
                  'REP_EPG034_EjecucionPresupuestal RESERVAS DECRETO DE LIQUIDACION - A 31 DIC 2024 EXTRAIDA ENERO 28 2025-.pdf',
                url: 'assets/files/presupuesto/01. 2024/12 Diciembre/REP_EPG034_EjecucionPresupuestal RESERVAS DECRETO DE LIQUIDACION - A 31 DIC 2024 EXTRAIDA ENERO 28 2025-.pdf',
              },
              {
                id: 4,
                tipo: 'pdf',
                nombre:
                  'REP_ING031_InformeEjecucion INGRESOS VIGENCIA DECRETO LIQUIDACION DIC 31 2024 EXTRAIDA EN ENERO 27 2025-.pdf',
                url: 'assets/files/presupuesto/01. 2024/12 Diciembre/REP_ING031_InformeEjecucion INGRESOS VIGENCIA DECRETO LIQUIDACION DIC 31 2024 EXTRAIDA EN ENERO 27 2025-.pdf',
              },
            ],
          },
        ],
      },

      {
        id: 1,
        nombre: '2023',
        acordion: [
          {
            id: 1,
            nombre: 'Desegregación presupuesto 2023',
            files: [
                {
            id:1,
            tipo: "pdf",
            url:"/assets/files/planes/proyectos_inversion/2025/RESOLUCIÓN 1928 DE 2022 - DESAGREGAN CUENTAS INGRESO FPS PARA 2023.pdf",
            nombre:"RESOLUCIÓN 1928 DE 2022 - DESAGREGAN CUENTAS INGRESO FPS PARA 2023"
          },
          {
            id:2,
            tipo: "pdf",
            url:"/assets/files/planes/proyectos_inversion/2025/RESOLUCIÓN 1929 DE 2022 - DESAGREGAN CUENTAS GASTO FPS PARA 2023.pdf",
            nombre:"RESOLUCIÓN 1929 DE 2022 - DESAGREGAN CUENTAS GASTO FPS PARA 2023"
          },

            ],
          },
          
          {
            id: 1,
            nombre: 'ENERO',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'Ejecución Cuentas por Pagar Enero_2023.pdf',
                url: 'assets/files/presupuesto/02.%202023/01%20ENERO/Ejecuci%c3%b3n%20Cuentas%20por%20Pagar%20Enero_2023.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre: 'Ejecución Gastos Enero_2023 x.pdf',
                url: 'assets/files/presupuesto/02.%202023/01%20ENERO/Ejecuci%c3%b3n%20Gastos%20Enero_2023%20x.pdf',
              },
              {
                id: 3,
                tipo: 'pdf',
                nombre: 'Ejecución Ingresos Enero_2023.pdf',
                url: 'assets/files/presupuesto/02.%202023/01%20ENERO/Ejecuci%c3%b3n%20Ingresos%20Enero_2023.pdf',
              },
              {
                id: 4,
                tipo: 'pdf',
                nombre: 'Ejecución Reservas Enero_2023.pdf',
                url: 'assets/files/presupuesto/02.%202023/01%20ENERO/Ejecuci%c3%b3n%20Reservas%20Enero_2023.pdf',
              },
            ],
          },
          {
            id: 2,
            nombre: 'FEBRERO',
            files: [
              {
                id: 5,
                tipo: 'pdf',
                nombre: 'Ejecución Cuentas por Pagar Febrero_2023.pdf',
                url: 'assets/files/presupuesto/02.%202023/02%20FEBRERO/Ejecuci%c3%b3n%20Cuentas%20por%20Pagar%20Febrero_2023.pdf',
              },
              {
                id: 6,
                tipo: 'pdf',
                nombre: 'Ejecución Gastos Febrero_2023.pdf',
                url: 'assets/files/presupuesto/02.%202023/02%20FEBRERO/Ejecuci%c3%b3n%20Gastos%20Febrero_2023.pdf',
              },
              {
                id: 7,
                tipo: 'pdf',
                nombre: 'Ejecución Ingresos Febrero_2023.pdf',
                url: 'assets/files/presupuesto/02.%202023/02%20FEBRERO/Ejecuci%c3%b3n%20Ingresos%20Febrero_2023.pdf',
              },
              {
                id: 8,
                tipo: 'pdf',
                nombre: 'Ejecución Reservas Febrero_2023.pdf',
                url: 'assets/files/presupuesto/02.%202023/02%20FEBRERO/Ejecuci%c3%b3n%20Reservas%20Febrero_2023.pdf',
              },
            ],
          },
          {
            id: 3,
            nombre: 'MARZO',
            files: [
              {
                id: 9,
                tipo: 'pdf',
                nombre: 'EJECUCION DE INGRESOS MARZO.pdf',
                url: 'assets/files/presupuesto/02.%202023/03%20MARZO/EJECUCION%20%20DE%20%20INGRESOS%20MARZO.pdf',
              },
              {
                id: 10,
                tipo: 'pdf',
                nombre: 'Ejecución Cuentas por Pagar Marzo_2023 (2).pdf',
                url: 'assets/files/presupuesto/02.%202023/03%20MARZO/Ejecuci%c3%b3n%20Cuentas%20por%20Pagar%20Marzo_2023%20(2).pdf',
              },
              {
                id: 11,
                tipo: 'pdf',
                nombre: 'Ejecución Gastos Marzo_2023.pdf',
                url: 'assets/files/presupuesto/02.%202023/03%20MARZO/Ejecuci%c3%b3n%20Gastos%20Marzo_2023.pdf',
              },
              {
                id: 12,
                tipo: 'pdf',
                nombre: 'Ejecución Reservas Marzo_2023.pdf',
                url: 'assets/files/presupuesto/02.%202023/03%20MARZO/Ejecuci%c3%b3n%20Reservas%20Marzo_2023.pdf',
              },
            ],
          },
          {
            id: 4,
            nombre: 'ABRIL',
            files: [
              {
                id: 13,
                tipo: 'pdf',
                nombre: 'EJECUCION DE GASTO ABRIL.pdf',
                url: 'assets/files/presupuesto/02.%202023/04%20ABRIL/EJECUCION%20%20%20DE%20%20GASTO%20%20ABRIL.pdf',
              },
              {
                id: 14,
                tipo: 'pdf',
                nombre: 'EJECUCION DE RESERVAS ABRIL.pdf',
                url: 'assets/files/presupuesto/02.%202023/04%20ABRIL/EJECUCION%20%20DE%20%20RESERVAS%20%20ABRIL.pdf',
              },
              {
                id: 15,
                tipo: 'pdf',
                nombre: 'EJECUCION CUENTAS POR PAGAR ABRIL.pdf',
                url: 'assets/files/presupuesto/02.%202023/04%20ABRIL/EJECUCION%20CUENTAS%20POR%20PAGAR%20%20ABRIL.pdf',
              },
              {
                id: 16,
                tipo: 'pdf',
                nombre: 'EJECUCION INGRESOS ABRIL.pdf',
                url: 'assets/files/presupuesto/02.%202023/04%20ABRIL/EJECUCION%20INGRESOS%20ABRIL.pdf',
              },
            ],
          },
          {
            id: 5,
            nombre: 'MAYO',
            files: [
              {
                id: 17,
                tipo: 'pdf',
                nombre: 'EJECUCION INGRESOS MAYO.pdf',
                url: 'assets/files/presupuesto/02.%202023/05%20MAYO/EJECUCION%20INGRESOS%20MAYO.pdf',
              },
              {
                id: 18,
                tipo: 'pdf',
                nombre: 'EjecucionPresupuestal CUENTAS POR PAGAR MAYO.pdf',
                url: 'assets/files/presupuesto/02.%202023/05%20MAYO/EjecucionPresupuestal%20%20CUENTAS%20POR%20%20PAGAR%20%20%20%20MAYO.pdf',
              },
              {
                id: 19,
                tipo: 'pdf',
                nombre: 'EjecucionPresupuestalAgregada GASTO MAYO .pdf',
                url: 'assets/files/presupuesto/02.%202023/05%20MAYO/EjecucionPresupuestalAgregada%20%20GASTO%20%20MAYO%20%20.pdf',
              },
            ],
          },
          {
            id: 6,
            nombre: 'JUNIO',
            files: [
              {
                id: 20,
                tipo: 'pdf',
                nombre: 'EJECUCION INGRESOS JUNIO.pdf',
                url: 'assets/files/presupuesto/02.%202023/06%20JUNIO/EJECUCION%20INGRESOS%20JUNIO.pdf',
              },
              {
                id: 21,
                tipo: 'pdf',
                nombre: 'EjecucionPresupuestalAgregadA RESERVA JUNIO.pdf',
                url: 'assets/files/presupuesto/02.%202023/06%20JUNIO/EjecucionPresupuestalAgregadA%20%20RESERVA%20%20JUNIO.pdf',
              },
              {
                id: 22,
                tipo: 'pdf',
                nombre: 'EjecucionPresupuestalAgregada CUENTAS POR PAGAR.pdf',
                url: 'assets/files/presupuesto/02.%202023/06%20JUNIO/EjecucionPresupuestalAgregada%20%20%20CUENTAS%20%20POR%20%20PAGAR.pdf',
              },
              {
                id: 23,
                tipo: 'pdf',
                nombre: 'EjecucionPresupuestalAgregada DEL GASTO JUNIO.pdf',
                url: 'assets/files/presupuesto/02.%202023/06%20JUNIO/EjecucionPresupuestalAgregada%20%20%20DEL%20%20GASTO%20%20%20JUNIO.pdf',
              },
            ],
          },
          {
            id: 7,
            nombre: 'JULIO',
            files: [
              {
                id: 24,
                tipo: 'pdf',
                nombre: 'CUENTAS POR PAGAR JULIO AÑO FISCAL 2023.pdf',
                url: 'assets/files/presupuesto/02.%202023/07%20JULIO/CUENTAS%20%20POR%20%20%20%20PAGAR%20%20JULIO%20%20A%c3%91O%20%20FISCAL%20%202023.pdf',
              },
              {
                id: 25,
                tipo: 'pdf',
                nombre: 'GASTO JULIO AÑO FISCAL 2023.pdf',
                url: 'assets/files/presupuesto/02.%202023/07%20JULIO/GASTO%20JULIO%20AN%cc%83O%20%20FISCAL%20%202023.pdf',
              },
              {
                id: 26,
                tipo: 'pdf',
                nombre: 'RESERVAS JULIO AÑO FISCAL 2023.pdf',
                url: 'assets/files/presupuesto/02.%202023/07%20JULIO/RESERVAS%20%20JULIO%20%20A%c3%91O%20%20FISCAL%20%202023.pdf',
              },
              {
                id: 27,
                tipo: 'pdf',
                nombre: 'ejecuccion de ingresos.pdf',
                url: 'assets/files/presupuesto/02.%202023/07%20JULIO/ejecuccion%20de%20ingresos.pdf',
              },
            ],
          },
          {
            id: 8,
            nombre: 'AGOSTO',
            files: [
              {
                id: 28,
                tipo: 'pdf',
                nombre:
                  'EJECUCION DE INGRESOS AGOSTO 2023 DECRETO LIQUIDACION.pdf',
                url: 'assets/files/presupuesto/02.%202023/08%20AGOSTO/EJECUCION%20DE%20INGRESOS%20AGOSTO%202023%20DECRETO%20LIQUIDACION.pdf',
              },
              {
                id: 29,
                tipo: 'pdf',
                nombre: 'EjecucionPresupuestal CUENTAS X PAGAR.pdf',
                url: 'assets/files/presupuesto/02.%202023/08%20AGOSTO/EjecucionPresupuestal%20%20CUENTAS%20%20X%20%20PAGAR.pdf',
              },
              {
                id: 30,
                tipo: 'pdf',
                nombre: 'EjecucionPresupuestal GASTO.pdf',
                url: 'assets/files/presupuesto/02.%202023/08%20AGOSTO/EjecucionPresupuestal%20%20GASTO.pdf',
              },
              {
                id: 31,
                tipo: 'pdf',
                nombre: 'EjecucionPresupuestal RESERVAS.pdf',
                url: 'assets/files/presupuesto/02.%202023/08%20AGOSTO/EjecucionPresupuestal%20%20RESERVAS.pdf',
              },
            ],
          },
          {
            id: 9,
            nombre: 'SEPTIEMBRE',
            files: [
              {
                id: 32,
                tipo: 'pdf',
                nombre: 'CUENTAS X PAGAR MODIFICADA.pdf',
                url: 'assets/files/presupuesto/02.%202023/09%20SEPTIEMBRE/CUENTAS%20X%20PAGAR%20MODIFICADA.pdf',
              },
              {
                id: 33,
                tipo: 'pdf',
                nombre:
                  'EJECUCION DE INGRESOS SEPTIEMBRE 2023 DECRETO DE LIQUIDACION.pdf',
                url: 'assets/files/presupuesto/02.%202023/09%20SEPTIEMBRE/EJECUCION%20DE%20INGRESOS%20SEPTIEMBRE%202023%20DECRETO%20DE%20LIQUIDACION.pdf',
              },
              {
                id: 34,
                tipo: 'pdf',
                nombre: 'RESERVAS PRESUPUESTALES MODIFICADA.pdf',
                url: 'assets/files/presupuesto/02.%202023/09%20SEPTIEMBRE/RESERVAS%20PRESUPUESTALES%20MODIFICADA.pdf',
              },
              {
                id: 35,
                tipo: 'pdf',
                nombre: 'VIEGENCIA ACTUAL MODIFICADA.pdf',
                url: 'assets/files/presupuesto/02.%202023/09%20SEPTIEMBRE/VIEGENCIA%20ACTUAL%20MODIFICADA.pdf',
              },
            ],
          },
          {
            id: 10,
            nombre: 'OCTUBRE',
            files: [
              {
                id: 36,
                tipo: 'pdf',
                nombre:
                  'EJECUCION INGRESOS OCTUBRE 2023 DECRETO DE LIQUIDACION.pdf',
                url: 'assets/files/presupuesto/02.%202023/10%20OCTUBRE/EJECUCION%20INGRESOS%20OCTUBRE%202023%20DECRETO%20DE%20LIQUIDACION.pdf',
              },
              {
                id: 37,
                tipo: 'pdf',
                nombre:
                  'EjecucionPresupuestalAgregada OCTUBRE VIGENCIA ACTUAL.pdf',
                url: 'assets/files/presupuesto/02.%202023/10%20OCTUBRE/EjecucionPresupuestalAgregada%20%20OCTUBRE%20VIGENCIA%20ACTUAL.pdf',
              },
              {
                id: 38,
                tipo: 'pdf',
                nombre:
                  'EjecucionPresupuestalAgregada Reservas Presupuestales OCTUBRE 2023.pdf',
                url: 'assets/files/presupuesto/02.%202023/10%20OCTUBRE/EjecucionPresupuestalAgregada%20%20Reservas%20Presupuestales%20OCTUBRE%202023.pdf',
              },
              {
                id: 39,
                tipo: 'pdf',
                nombre:
                  'EjecucionPresupuestalAgregada Cuentas x Pagar OCTUBRE 2023.pdf',
                url: 'assets/files/presupuesto/02.%202023/10%20OCTUBRE/EjecucionPresupuestalAgregada%20Cuentas%20x%20Pagar%20OCTUBRE%202023.pdf',
              },
            ],
          },
          {
            id: 11,
            nombre: 'NOVIEMBRE',
            files: [
              {
                id: 40,
                tipo: 'pdf',
                nombre:
                  'EJECUCION INGRESOS NOVIEMBRE DECRETO DE LIQUIDACION 2023 (1).pdf',
                url: 'assets/files/presupuesto/02.%202023/11%20NOVIEMBRE/EJECUCION%20INGRESOS%20NOVIEMBRE%20DECRETO%20DE%20LIQUIDACION%202023%20(1).pdf',
              },
              {
                id: 41,
                tipo: 'pdf',
                nombre:
                  'EjecucionPresupuestalAgregada CUENTAS X PAGAR NOVIEMBRE (1).pdf',
                url: 'assets/files/presupuesto/02.%202023/11%20NOVIEMBRE/EjecucionPresupuestalAgregada%20CUENTAS%20X%20PAGAR%20NOVIEMBRE%20(1).pdf',
              },
              {
                id: 42,
                tipo: 'pdf',
                nombre:
                  'EjecucionPresupuestalAgregada RESERVAS NOVIEMBRE (1).pdf',
                url: 'assets/files/presupuesto/02.%202023/11%20NOVIEMBRE/EjecucionPresupuestalAgregada%20RESERVAS%20NOVIEMBRE%20(1).pdf',
              },
              {
                id: 43,
                tipo: 'pdf',
                nombre:
                  'EjecucionPresupuestalAgregada VIG ACTUAL NOVIEMBRE (1).pdf',
                url: 'assets/files/presupuesto/02.%202023/11%20NOVIEMBRE/EjecucionPresupuestalAgregada%20VIG%20ACTUAL%20NOVIEMBRE%20(1).pdf',
              },
            ],
          },
          {
            id: 12,
            nombre: 'DICIEMBRE',
            files: [
              {
                id: 44,
                tipo: 'pdf',
                nombre: 'GASTO DICIEMBRE AÑO FISCAL 2023.pdf',
                url: 'assets/files/presupuesto/02.%202023/12%20DICIEMBRE/GASTO%20%20%20%20DICIEMBRE%20%20%20AN%cc%83O%20%20FISCAL%20%20%202023.pdf',
              },
              {
                id: 45,
                tipo: 'pdf',
                nombre: 'REP_EPG034_EjecucionPresupuestalAgregada (15).pdf',
                url: 'assets/files/presupuesto/02.%202023/12%20DICIEMBRE/REP_EPG034_EjecucionPresupuestalAgregada%20(15).pdf',
              },
              {
                id: 46,
                tipo: 'pdf',
                nombre: 'RESERVA DICIEMBRE AÑO FISCAL 2023.pdf',
                url: 'assets/files/presupuesto/02.%202023/12%20DICIEMBRE/RESERVA%20%20%20DICIEMBRE%20%20%20AN%cc%83O%20%20FISCAL%20%20%202023.pdf',
              },
            ],
          },
        ],
      },

      {
        id: 1,
        nombre: '2022',
        acordion: [
          {
            id: 1,
            nombre: 'ENERO',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'Ejecución Cuentas por Pagar Enero_2022.pdf',
                url: 'assets/files/presupuesto/03.%202022/01%20ENERO/Ejecuci%c3%b3n%20Cuentas%20por%20Pagar%20Enero_2022.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre: 'Ejecución Gastos Enero_2022.pdf',
                url: 'assets/files/presupuesto/03.%202022/01%20ENERO/Ejecuci%c3%b3n%20Gastos%20Enero_2022.pdf',
              },
              {
                id: 3,
                tipo: 'pdf',
                nombre: 'Ejecución Ingresos Enero_2022.pdf',
                url: 'assets/files/presupuesto/03.%202022/01%20ENERO/Ejecuci%c3%b3n%20Ingresos%20Enero_2022.pdf',
              },
              {
                id: 4,
                tipo: 'pdf',
                nombre: 'Ejecución Reserva Enero_2022.pdf',
                url: 'assets/files/presupuesto/03.%202022/01%20ENERO/Ejecuci%c3%b3n%20Reserva%20Enero_2022.pdf',
              },
            ],
          },
          {
            id: 2,
            nombre: 'FEBRERO',
            files: [
              {
                id: 5,
                tipo: 'pdf',
                nombre: 'Ejecución Cuentas por Pagar Febrero_2022.pdf',
                url: 'assets/files/presupuesto/03.%202022/02%20FEBRERO/Ejecuci%c3%b3n%20Cuentas%20por%20Pagar%20Febrero_2022.pdf',
              },
              {
                id: 6,
                tipo: 'pdf',
                nombre: 'Ejecución Gastos Febrero_2022.pdf',
                url: 'assets/files/presupuesto/03.%202022/02%20FEBRERO/Ejecuci%c3%b3n%20Gastos%20Febrero_2022.pdf',
              },
              {
                id: 7,
                tipo: 'pdf',
                nombre: 'Ejecución Ingresos Febrero_2022.pdf',
                url: 'assets/files/presupuesto/03.%202022/02%20FEBRERO/Ejecuci%c3%b3n%20Ingresos%20Febrero_2022.pdf',
              },
              {
                id: 8,
                tipo: 'pdf',
                nombre: 'Ejecución Reserva Febrero_2022.pdf',
                url: 'assets/files/presupuesto/03.%202022/02%20FEBRERO/Ejecuci%c3%b3n%20Reserva%20Febrero_2022.pdf',
              },
            ],
          },
          {
            id: 3,
            nombre: 'MARZO',
            files: [
              {
                id: 9,
                tipo: 'pdf',
                nombre: 'Ejecución Cuentas por Pagar Marzo_2022.pdf',
                url: 'assets/files/presupuesto/03.%202022/03%20MARZO/Ejecuci%c3%b3n%20Cuentas%20por%20Pagar%20Marzo_2022.pdf',
              },
              {
                id: 10,
                tipo: 'pdf',
                nombre: 'Ejecución Gastos Marzo_2022.pdf',
                url: 'assets/files/presupuesto/03.%202022/03%20MARZO/Ejecuci%c3%b3n%20Gastos%20Marzo_2022.pdf',
              },
              {
                id: 11,
                tipo: 'pdf',
                nombre: 'Ejecución Reserva Marzo_2022.pdf',
                url: 'assets/files/presupuesto/03.%202022/03%20MARZO/Ejecuci%c3%b3n%20Reserva%20Marzo_2022.pdf',
              },
              {
                id: 12,
                tipo: 'pdf',
                nombre: 'Ejecución ingresos Marzo_2022.pdf',
                url: 'assets/files/presupuesto/03.%202022/03%20MARZO/Ejecuci%c3%b3n%20ingresos%20Marzo_2022.pdf',
              },
            ],
          },
          {
            id: 4,
            nombre: 'ABRIL',
            files: [
              {
                id: 13,
                tipo: 'pdf',
                nombre: 'Ejecución Cuentas por Pagar Abril_2022.pdf',
                url: 'assets/files/presupuesto/03.%202022/04%20ABRIL/Ejecuci%c3%b3n%20Cuentas%20por%20Pagar%20Abril_2022.pdf',
              },
              {
                id: 14,
                tipo: 'pdf',
                nombre: 'Ejecución Gastos Abril_2022.pdf',
                url: 'assets/files/presupuesto/03.%202022/04%20ABRIL/Ejecuci%c3%b3n%20Gastos%20Abril_2022.pdf',
              },
              {
                id: 15,
                tipo: 'pdf',
                nombre: 'Ejecución Ingresos Abril_2022.pdf',
                url: 'assets/files/presupuesto/03.%202022/04%20ABRIL/Ejecuci%c3%b3n%20Ingresos%20Abril_2022.pdf',
              },
              {
                id: 16,
                tipo: 'pdf',
                nombre: 'Ejecución Reserva Abril_2022.pdf',
                url: 'assets/files/presupuesto/03.%202022/04%20ABRIL/Ejecuci%c3%b3n%20Reserva%20Abril_2022.pdf',
              },
            ],
          },
          {
            id: 5,
            nombre: 'MAYO',
            files: [
              {
                id: 17,
                tipo: 'pdf',
                nombre: 'Ejecución Cuentas por Pagar Mayo_2022.pdf',
                url: 'assets/files/presupuesto/03.%202022/05%20MAYO/Ejecuci%c3%b3n%20Cuentas%20por%20Pagar%20%20Mayo_2022.pdf',
              },
              {
                id: 18,
                tipo: 'pdf',
                nombre: 'Ejecución Gastos Mayo_2022.pdf',
                url: 'assets/files/presupuesto/03.%202022/05%20MAYO/Ejecuci%c3%b3n%20Gastos%20Mayo_2022.pdf',
              },
              {
                id: 19,
                tipo: 'pdf',
                nombre: 'Ejecución Ingresos Mayo_2022.pdf',
                url: 'assets/files/presupuesto/03.%202022/05%20MAYO/Ejecuci%c3%b3n%20Ingresos%20Mayo_2022.pdf',
              },
              {
                id: 20,
                tipo: 'pdf',
                nombre: 'Ejecución Reserva Mayo_2022.pdf',
                url: 'assets/files/presupuesto/03.%202022/05%20MAYO/Ejecuci%c3%b3n%20Reserva%20Mayo_2022.pdf',
              },
            ],
          },
          {
            id: 6,
            nombre: 'JUNIO',
            files: [
              {
                id: 21,
                tipo: 'pdf',
                nombre: 'Ejecución Cuentas por Pagar Junio_2022.pdf',
                url: 'assets/files/presupuesto/03.%202022/06%20JUNIO/Ejecuci%c3%b3n%20Cuentas%20por%20Pagar%20%20Junio_2022.pdf',
              },
              {
                id: 22,
                tipo: 'pdf',
                nombre: 'Ejecución Gastos Junio_2022.pdf',
                url: 'assets/files/presupuesto/03.%202022/06%20JUNIO/Ejecuci%c3%b3n%20Gastos%20Junio_2022.pdf',
              },
              {
                id: 23,
                tipo: 'pdf',
                nombre: 'Ejecución Ingresos Junio_2022.pdf',
                url: 'assets/files/presupuesto/03.%202022/06%20JUNIO/Ejecuci%c3%b3n%20Ingresos%20Junio_2022.pdf',
              },
              {
                id: 24,
                tipo: 'pdf',
                nombre: 'Ejecución Reserva Junio_2022.pdf',
                url: 'assets/files/presupuesto/03.%202022/06%20JUNIO/Ejecuci%c3%b3n%20Reserva%20Junio_2022.pdf',
              },
            ],
          },
          {
            id: 7,
            nombre: 'JULIO',
            files: [
              {
                id: 25,
                tipo: 'pdf',
                nombre: 'Ejecución Cuentas por Pagar Julio_2022.pdf',
                url: 'assets/files/presupuesto/03.%202022/07%20JULIO/Ejecuci%c3%b3n%20Cuentas%20por%20Pagar%20Julio_2022.pdf',
              },
              {
                id: 26,
                tipo: 'pdf',
                nombre: 'Ejecución Gastos Julio_2022.pdf',
                url: 'assets/files/presupuesto/03.%202022/07%20JULIO/Ejecuci%c3%b3n%20Gastos%20Julio_2022.pdf',
              },
              {
                id: 27,
                tipo: 'pdf',
                nombre: 'Ejecución Ingresos Julio_2022.pdf',
                url: 'assets/files/presupuesto/03.%202022/07%20JULIO/Ejecuci%c3%b3n%20Ingresos%20Julio_2022.pdf',
              },
              {
                id: 28,
                tipo: 'pdf',
                nombre: 'Ejecución Reserva Julio_2022.pdf',
                url: 'assets/files/presupuesto/03.%202022/07%20JULIO/Ejecuci%c3%b3n%20Reserva%20Julio_2022.pdf',
              },
            ],
          },
          {
            id: 8,
            nombre: 'AGOSTO',
            files: [
              {
                id: 29,
                tipo: 'pdf',
                nombre: 'Ejecución Cuentas por Pagar Agosto_2022.pdf',
                url: 'assets/files/presupuesto/03.%202022/08%20AGOSTO/Ejecuci%c3%b3n%20Cuentas%20por%20Pagar%20Agosto_2022.pdf',
              },
              {
                id: 30,
                tipo: 'pdf',
                nombre: 'Ejecución Gastos Agosto_2022.pdf',
                url: 'assets/files/presupuesto/03.%202022/08%20AGOSTO/Ejecuci%c3%b3n%20Gastos%20Agosto_2022.pdf',
              },
              {
                id: 31,
                tipo: 'pdf',
                nombre: 'Ejecución Ingresos Agosto_2022.pdf',
                url: 'assets/files/presupuesto/03.%202022/08%20AGOSTO/Ejecuci%c3%b3n%20Ingresos%20Agosto_2022.pdf',
              },
              {
                id: 32,
                tipo: 'pdf',
                nombre: 'Ejecución Reserva Agosto_2022.pdf',
                url: 'assets/files/presupuesto/03.%202022/08%20AGOSTO/Ejecuci%c3%b3n%20Reserva%20Agosto_2022.pdf',
              },
            ],
          },
          {
            id: 9,
            nombre: 'SEPTIEMBRE',
            files: [
              {
                id: 33,
                tipo: 'pdf',
                nombre: 'Ejecución Cuentas por Pagar Septiembre_2022.pdf',
                url: 'assets/files/presupuesto/03.%202022/09%20SEPTIEMBRE/Ejecuci%c3%b3n%20Cuentas%20por%20Pagar%20Septiembre_2022.pdf',
              },
              {
                id: 34,
                tipo: 'pdf',
                nombre: 'Ejecución Gastos Septiembre_2022.pdf',
                url: 'assets/files/presupuesto/03.%202022/09%20SEPTIEMBRE/Ejecuci%c3%b3n%20Gastos%20Septiembre_2022.pdf',
              },
              {
                id: 35,
                tipo: 'pdf',
                nombre: 'Ejecución Ingresos Septiembre_2022.pdf',
                url: 'assets/files/presupuesto/03.%202022/09%20SEPTIEMBRE/Ejecuci%c3%b3n%20Ingresos%20Septiembre_2022.pdf',
              },
              {
                id: 36,
                tipo: 'pdf',
                nombre: 'Ejecución Reserva Septiembre_2022.pdf',
                url: 'assets/files/presupuesto/03.%202022/09%20SEPTIEMBRE/Ejecuci%c3%b3n%20Reserva%20Septiembre_2022.pdf',
              },
            ],
          },
          {
            id: 10,
            nombre: 'OCTUBRE',
            files: [
              {
                id: 37,
                tipo: 'pdf',
                nombre: 'Ejecución Cuentas por Pagar Octubre_2022.pdf',
                url: 'assets/files/presupuesto/03.%202022/10%20OCTUBRE/Ejecuci%c3%b3n%20Cuentas%20por%20Pagar%20Octubre_2022.pdf',
              },
              {
                id: 38,
                tipo: 'pdf',
                nombre: 'Ejecución Gastos Octubre_2022.pdf',
                url: 'assets/files/presupuesto/03.%202022/10%20OCTUBRE/Ejecuci%c3%b3n%20Gastos%20Octubre_2022.pdf',
              },
              {
                id: 39,
                tipo: 'pdf',
                nombre: 'Ejecución Ingresos Octubre_2022.pdf',
                url: 'assets/files/presupuesto/03.%202022/10%20OCTUBRE/Ejecuci%c3%b3n%20Ingresos%20Octubre_2022.pdf',
              },
              {
                id: 40,
                tipo: 'pdf',
                nombre: 'Ejecución Reserva Octubre_2022.pdf',
                url: 'assets/files/presupuesto/03.%202022/10%20OCTUBRE/Ejecuci%c3%b3n%20Reserva%20Octubre_2022.pdf',
              },
            ],
          },
          {
            id: 11,
            nombre: 'NOVIEMBRE',
            files: [
              {
                id: 41,
                tipo: 'pdf',
                nombre: 'Ejecución Cuentas por Pagar Noviembre_2022.pdf',
                url: 'assets/files/presupuesto/03.%202022/11%20NOVIEMBRE/Ejecuci%c3%b3n%20Cuentas%20por%20Pagar%20Noviembre_2022.pdf',
              },
              {
                id: 42,
                tipo: 'pdf',
                nombre: 'Ejecución Gastos Noviembre_2022.pdf',
                url: 'assets/files/presupuesto/03.%202022/11%20NOVIEMBRE/Ejecuci%c3%b3n%20Gastos%20Noviembre_2022.pdf',
              },
              {
                id: 43,
                tipo: 'pdf',
                nombre: 'Ejecución Ingresos Noviembre_2022.pdf',
                url: 'assets/files/presupuesto/03.%202022/11%20NOVIEMBRE/Ejecuci%c3%b3n%20Ingresos%20Noviembre_2022.pdf',
              },
              {
                id: 44,
                tipo: 'pdf',
                nombre: 'Ejecución Reserva Noviembre_2022.pdf',
                url: 'assets/files/presupuesto/03.%202022/11%20NOVIEMBRE/Ejecuci%c3%b3n%20Reserva%20Noviembre_2022.pdf',
              },
            ],
          },
          {
            id: 12,
            nombre: 'DICIEMBRE',
            files: [
              {
                id: 45,
                tipo: 'pdf',
                nombre: 'Ejecución Cuentas por Pagar Diciembre_2022.pdf',
                url: 'assets/files/presupuesto/03.%202022/12%20DICIEMBRE/Ejecuci%c3%b3n%20Cuentas%20por%20Pagar%20Diciembre_2022.pdf',
              },
              {
                id: 46,
                tipo: 'pdf',
                nombre: 'Ejecución Gastos Diciembre_2022.pdf',
                url: 'assets/files/presupuesto/03.%202022/12%20DICIEMBRE/Ejecuci%c3%b3n%20Gastos%20Diciembre_2022.pdf',
              },
              {
                id: 47,
                tipo: 'pdf',
                nombre: 'Ejecución Ingresos Diciembre_2022.pdf',
                url: 'assets/files/presupuesto/03.%202022/12%20DICIEMBRE/Ejecuci%c3%b3n%20Ingresos%20Diciembre_2022.pdf',
              },
              {
                id: 48,
                tipo: 'pdf',
                nombre: 'Ejecución Reserva Diciembre_2022.pdf',
                url: 'assets/files/presupuesto/03.%202022/12%20DICIEMBRE/Ejecuci%c3%b3n%20Reserva%20Diciembre_2022.pdf',
              },
            ],
          },
        ],
      },

      {
        id: 1,
        nombre: '2021',
        acordion: [
          {
            id: 2,
            nombre: 'ENERO',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: '01 Ejecución Cuentas por Pagar Enero 2021.pdf',
                url: 'assets/files/presupuesto/04.%202021/01%20ENERO/01%20Ejecuci%c3%b3n%20Cuentas%20por%20Pagar%20Enero%202021.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre: '01 Ejecución Gastos Enero 2021.pdf',
                url: 'assets/files/presupuesto/04.%202021/01%20ENERO/01%20Ejecuci%c3%b3n%20Gastos%20Enero%202021.pdf',
              },
              {
                id: 3,
                tipo: 'pdf',
                nombre: '01 Ejecución Ingresos Enero 2021.pdf',
                url: 'assets/files/presupuesto/04.%202021/01%20ENERO/01%20Ejecuci%c3%b3n%20Ingresos%20Enero%202021.pdf',
              },
              {
                id: 4,
                tipo: 'pdf',
                nombre: '01 Ejecución Reserva Enero 2021.pdf',
                url: 'assets/files/presupuesto/04.%202021/01%20ENERO/01%20Ejecuci%c3%b3n%20Reserva%20Enero%202021.pdf',
              },
            ],
          },
          {
            id: 5,
            nombre: 'FEBRERO',
            files: [
              {
                id: 5,
                tipo: 'pdf',
                nombre: '02 Ejecución Cuentas por Pagar Febrero 2021.pdf',
                url: 'assets/files/presupuesto/04.%202021/02%20FEBRERO/02%20Ejecuci%c3%b3n%20Cuentas%20por%20Pagar%20Febrero%202021.pdf',
              },
              {
                id: 6,
                tipo: 'pdf',
                nombre: '02 Ejecución Gastos Febrero 2021.pdf',
                url: 'assets/files/presupuesto/04.%202021/02%20FEBRERO/02%20Ejecuci%c3%b3n%20Gastos%20Febrero%202021.pdf',
              },
              {
                id: 7,
                tipo: 'pdf',
                nombre: '02 Ejecución Ingresos Febrero 2021.pdf',
                url: 'assets/files/presupuesto/04.%202021/02%20FEBRERO/02%20Ejecuci%c3%b3n%20Ingresos%20Febrero%202021.pdf',
              },
              {
                id: 8,
                tipo: 'pdf',
                nombre: '02 Ejecución Reserva Febrero 2021.pdf',
                url: 'assets/files/presupuesto/04.%202021/02%20FEBRERO/02%20Ejecuci%c3%b3n%20Reserva%20Febrero%202021.pdf',
              },
            ],
          },
          {
            id: 9,
            nombre: 'MARZO',
            files: [
              {
                id: 9,
                tipo: 'pdf',
                nombre: '03 Ejecución Cuentas por Pagar Marzo_2021.pdf',
                url: 'assets/files/presupuesto/04.%202021/03%20MARZO/03%20Ejecuci%c3%b3n%20Cuentas%20por%20Pagar%20Marzo_2021.pdf',
              },
              {
                id: 10,
                tipo: 'pdf',
                nombre: '03 Ejecución Gastos Marzo_2021.pdf',
                url: 'assets/files/presupuesto/04.%202021/03%20MARZO/03%20Ejecuci%c3%b3n%20Gastos%20Marzo_2021.pdf',
              },
              {
                id: 11,
                tipo: 'pdf',
                nombre: '03 Ejecución Ingresos Marzo_2021.pdf',
                url: 'assets/files/presupuesto/04.%202021/03%20MARZO/03%20Ejecuci%c3%b3n%20Ingresos%20Marzo_2021.pdf',
              },
              {
                id: 12,
                tipo: 'pdf',
                nombre: '03 Ejecución Reserva Marzo_2021.pdf',
                url: 'assets/files/presupuesto/04.%202021/03%20MARZO/03%20Ejecuci%c3%b3n%20Reserva%20Marzo_2021.pdf',
              },
            ],
          },
          {
            id: 13,
            nombre: 'ABRIL',
            files: [
              {
                id: 13,
                tipo: 'pdf',
                nombre: '04 Ejecución Cuentas por Pagar Abril_2021.pdf',
                url: 'assets/files/presupuesto/04.%202021/04%20ABRIL/04%20Ejecuci%c3%b3n%20Cuentas%20por%20Pagar%20Abril_2021.pdf',
              },
              {
                id: 14,
                tipo: 'pdf',
                nombre: '04 Ejecución Gastos Abril_2021.pdf',
                url: 'assets/files/presupuesto/04.%202021/04%20ABRIL/04%20Ejecuci%c3%b3n%20Gastos%20Abril_2021.pdf',
              },
              {
                id: 15,
                tipo: 'pdf',
                nombre: '04 Ejecución Ingresos Abril_2021.pdf',
                url: 'assets/files/presupuesto/04.%202021/04%20ABRIL/04%20Ejecuci%c3%b3n%20Ingresos%20Abril_2021.pdf',
              },
              {
                id: 16,
                tipo: 'pdf',
                nombre: '04 Ejecución Reserva Abril_2021.pdf',
                url: 'assets/files/presupuesto/04.%202021/04%20ABRIL/04%20Ejecuci%c3%b3n%20Reserva%20Abril_2021.pdf',
              },
            ],
          },
          {
            id: 17,
            nombre: 'MAYO',
            files: [
              {
                id: 17,
                tipo: 'pdf',
                nombre: '05 Ejecución Cuentas por Pagar Mayo_2021.pdf',
                url: 'assets/files/presupuesto/04.%202021/05%20MAYO/05%20Ejecuci%c3%b3n%20Cuentas%20por%20Pagar%20Mayo_2021.pdf',
              },
              {
                id: 18,
                tipo: 'pdf',
                nombre: '05 Ejecución Gastos Mayo_2021.pdf',
                url: 'assets/files/presupuesto/04.%202021/05%20MAYO/05%20Ejecuci%c3%b3n%20Gastos%20Mayo_2021.pdf',
              },
              {
                id: 19,
                tipo: 'pdf',
                nombre: '05 Ejecución Ingresos Mayo_2021.pdf',
                url: 'assets/files/presupuesto/04.%202021/05%20MAYO/05%20Ejecuci%c3%b3n%20Ingresos%20Mayo_2021.pdf',
              },
              {
                id: 20,
                tipo: 'pdf',
                nombre: '05 Ejecución Reserva Mayo_2021.pdf',
                url: 'assets/files/presupuesto/04.%202021/05%20MAYO/05%20Ejecuci%c3%b3n%20Reserva%20Mayo_2021.pdf',
              },
            ],
          },
          {
            id: 21,
            nombre: 'JUNIO',
            files: [
              {
                id: 21,
                tipo: 'pdf',
                nombre: '06 Ejecución Cuentas por Pagar Junio_2021.pdf',
                url: 'assets/files/presupuesto/04.%202021/06%20JUNIO/06%20Ejecuci%c3%b3n%20Cuentas%20por%20Pagar%20Junio_2021.pdf',
              },
              {
                id: 22,
                tipo: 'pdf',
                nombre: '06 Ejecución Gastos Junio_2021.pdf',
                url: 'assets/files/presupuesto/04.%202021/06%20JUNIO/06%20Ejecuci%c3%b3n%20Gastos%20Junio_2021.pdf',
              },
              {
                id: 23,
                tipo: 'pdf',
                nombre: '06 Ejecución Ingresos Junio_2021.pdf',
                url: 'assets/files/presupuesto/04.%202021/06%20JUNIO/06%20Ejecuci%c3%b3n%20Ingresos%20Junio_2021.pdf',
              },
              {
                id: 24,
                tipo: 'pdf',
                nombre: '06 Ejecución Reserva Junio_2021.pdf',
                url: 'assets/files/presupuesto/04.%202021/06%20JUNIO/06%20Ejecuci%c3%b3n%20Reserva%20Junio_2021.pdf',
              },
            ],
          },
          {
            id: 25,
            nombre: 'JULIO',
            files: [
              {
                id: 25,
                tipo: 'pdf',
                nombre: '07 Ejecución Cuentas por Pagar Julio_2021.pdf',
                url: 'assets/files/presupuesto/04.%202021/07%20JULIO/07%20Ejecuci%c3%b3n%20Cuentas%20por%20Pagar%20Julio_2021.pdf',
              },
              {
                id: 26,
                tipo: 'pdf',
                nombre: '07 Ejecución Gastos Julio_2021.pdf',
                url: 'assets/files/presupuesto/04.%202021/07%20JULIO/07%20Ejecuci%c3%b3n%20Gastos%20Julio_2021.pdf',
              },
              {
                id: 27,
                tipo: 'pdf',
                nombre: '07 Ejecución Ingresos Julio_2021.pdf',
                url: 'assets/files/presupuesto/04.%202021/07%20JULIO/07%20Ejecuci%c3%b3n%20Ingresos%20Julio_2021.pdf',
              },
              {
                id: 28,
                tipo: 'pdf',
                nombre: '07 Ejecución Reserva Julio_2021.pdf',
                url: 'assets/files/presupuesto/04.%202021/07%20JULIO/07%20Ejecuci%c3%b3n%20Reserva%20Julio_2021.pdf',
              },
            ],
          },
          {
            id: 29,
            nombre: 'AGOSTO',
            files: [
              {
                id: 29,
                tipo: 'pdf',
                nombre: '08 Ejecución Cuentas por Pagar Agosto_2021.pdf',
                url: 'assets/files/presupuesto/04.%202021/08%20AGOSTO/08%20Ejecuci%c3%b3n%20Cuentas%20por%20Pagar%20Agosto_2021.pdf',
              },
              {
                id: 30,
                tipo: 'pdf',
                nombre: '08 Ejecución Gastos Agosto_2021.pdf',
                url: 'assets/files/presupuesto/04.%202021/08%20AGOSTO/08%20Ejecuci%c3%b3n%20Gastos%20Agosto_2021.pdf',
              },
              {
                id: 31,
                tipo: 'pdf',
                nombre: '08 Ejecución Ingresos Agosto_2021.pdf',
                url: 'assets/files/presupuesto/04.%202021/08%20AGOSTO/08%20Ejecuci%c3%b3n%20Ingresos%20Agosto_2021.pdf',
              },
              {
                id: 32,
                tipo: 'pdf',
                nombre: '08 Ejecución Reserva Agosto_2021.pdf',
                url: 'assets/files/presupuesto/04.%202021/08%20AGOSTO/08%20Ejecuci%c3%b3n%20Reserva%20Agosto_2021.pdf',
              },
            ],
          },
          {
            id: 33,
            nombre: 'SEPTIEMBRE',
            files: [
              {
                id: 33,
                tipo: 'pdf',
                nombre: '09 Ejecución Cuentas por Pagar Septiembre_2021.pdf',
                url: 'assets/files/presupuesto/04.%202021/09%20SEPTIEMBRE/09%20Ejecuci%c3%b3n%20Cuentas%20por%20Pagar%20Septiembre_2021.pdf',
              },
              {
                id: 34,
                tipo: 'pdf',
                nombre: '09 Ejecución Gastos Septiembre_2021.pdf',
                url: 'assets/files/presupuesto/04.%202021/09%20SEPTIEMBRE/09%20Ejecuci%c3%b3n%20Gastos%20Septiembre_2021.pdf',
              },
              {
                id: 35,
                tipo: 'pdf',
                nombre: '09 Ejecución Ingresos Septiembre_2021.pdf',
                url: 'assets/files/presupuesto/04.%202021/09%20SEPTIEMBRE/09%20Ejecuci%c3%b3n%20Ingresos%20Septiembre_2021.pdf',
              },
              {
                id: 36,
                tipo: 'pdf',
                nombre: '09 Ejecución Reserva Septiembre_2021.pdf',
                url: 'assets/files/presupuesto/04.%202021/09%20SEPTIEMBRE/09%20Ejecuci%c3%b3n%20Reserva%20Septiembre_2021.pdf',
              },
            ],
          },
          {
            id: 37,
            nombre: 'OCTUBRE',
            files: [
              {
                id: 37,
                tipo: 'pdf',
                nombre: '10 Ejecución Cuentas por Pagar Octubre_2021.pdf',
                url: 'assets/files/presupuesto/04.%202021/10%20OCTUBRE/10%20Ejecuci%c3%b3n%20Cuentas%20por%20Pagar%20Octubre_2021.pdf',
              },
              {
                id: 38,
                tipo: 'pdf',
                nombre: '10 Ejecución Gastos Octubre_2021.pdf',
                url: 'assets/files/presupuesto/04.%202021/10%20OCTUBRE/10%20Ejecuci%c3%b3n%20Gastos%20Octubre_2021.pdf',
              },
              {
                id: 39,
                tipo: 'pdf',
                nombre: '10 Ejecución Ingresos Octubre_2021.pdf',
                url: 'assets/files/presupuesto/04.%202021/10%20OCTUBRE/10%20Ejecuci%c3%b3n%20Ingresos%20Octubre_2021.pdf',
              },
              {
                id: 40,
                tipo: 'pdf',
                nombre: '10 Ejecución Reserva Octubre_2021.pdf',
                url: 'assets/files/presupuesto/04.%202021/10%20OCTUBRE/10%20Ejecuci%c3%b3n%20Reserva%20Octubre_2021.pdf',
              },
            ],
          },
          {
            id: 41,
            nombre: 'NOVIEMBRE',
            files: [
              {
                id: 41,
                tipo: 'pdf',
                nombre: '11 Ejecución Cuentas por Pagar Noviembre_2021.pdf',
                url: 'assets/files/presupuesto/04.%202021/11%20NOVIEMBRE/11%20Ejecuci%c3%b3n%20Cuentas%20por%20Pagar%20Noviembre_2021.pdf',
              },
              {
                id: 42,
                tipo: 'pdf',
                nombre: '11 Ejecución Gastos Noviembre_2021.pdf',
                url: 'assets/files/presupuesto/04.%202021/11%20NOVIEMBRE/11%20Ejecuci%c3%b3n%20Gastos%20Noviembre_2021.pdf',
              },
              {
                id: 43,
                tipo: 'pdf',
                nombre: '11 Ejecución Ingresos Noviembre_2021.pdf',
                url: 'assets/files/presupuesto/04.%202021/11%20NOVIEMBRE/11%20Ejecuci%c3%b3n%20Ingresos%20Noviembre_2021.pdf',
              },
              {
                id: 44,
                tipo: 'pdf',
                nombre: '11 Ejecución Reserva Noviembre_2021.pdf',
                url: 'assets/files/presupuesto/04.%202021/11%20NOVIEMBRE/11%20Ejecuci%c3%b3n%20Reserva%20Noviembre_2021.pdf',
              },
            ],
          },
          {
            id: 45,
            nombre: 'DICIEMBRE',
            files: [
              {
                id: 45,
                tipo: 'pdf',
                nombre: '12 Ejecución Cuentas por Pagar Diciembre_2021.pdf',
                url: 'assets/files/presupuesto/04.%202021/12%20DICIEMBRE/12%20Ejecuci%c3%b3n%20Cuentas%20por%20Pagar%20Diciembre_2021.pdf',
              },
              {
                id: 46,
                tipo: 'pdf',
                nombre: '12 Ejecución Gastos Diciembre_2021.pdf',
                url: 'assets/files/presupuesto/04.%202021/12%20DICIEMBRE/12%20Ejecuci%c3%b3n%20Gastos%20Diciembre_2021.pdf',
              },
              {
                id: 47,
                tipo: 'pdf',
                nombre: '12 Ejecución Ingresos Diciembre_2021.pdf',
                url: 'assets/files/presupuesto/04.%202021/12%20DICIEMBRE/12%20Ejecuci%c3%b3n%20Ingresos%20Diciembre_2021.pdf',
              },
              {
                id: 48,
                tipo: 'pdf',
                nombre: '12 Ejecución Reserva Diciembre_2021.pdf',
                url: 'assets/files/presupuesto/04.%202021/12%20DICIEMBRE/12%20Ejecuci%c3%b3n%20Reserva%20Diciembre_2021.pdf',
              },
            ],
          },
        ],
      },

      {
        id: 5,
        nombre: '2020',
        acordion: [
          {
            id: 1,
            nombre: 'ENERO',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'Ejecución Cuentas por Pagar Enero_2020.pdf',
                url: 'assets/files/presupuesto/05.%202020/01%20ENERO/Ejecuci%c3%b3n%20Cuentas%20por%20Pagar%20Enero_2020.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre: 'Ejecución Gastos Enero_2020.pdf',
                url: 'assets/files/presupuesto/05.%202020/01%20ENERO/Ejecuci%c3%b3n%20Gastos%20Enero_2020.pdf',
              },
              {
                id: 3,
                tipo: 'pdf',
                nombre: 'Ejecución Ingresos Enero_2020.pdf',
                url: 'assets/files/presupuesto/05.%202020/01%20ENERO/Ejecuci%c3%b3n%20Ingresos%20Enero_2020.pdf',
              },
              {
                id: 4,
                tipo: 'pdf',
                nombre: 'Ejecución Reservas Enero_2020.pdf',
                url: 'assets/files/presupuesto/05.%202020/01%20ENERO/Ejecuci%c3%b3n%20Reservas%20Enero_2020.pdf',
              },
            ],
          },
          {
            id: 2,
            nombre: 'FEBRERO',
            files: [
              {
                id: 5,
                tipo: 'pdf',
                nombre: 'Ejecución Cuentas por Pagar Febrero_2020.pdf',
                url: 'assets/files/presupuesto/05.%202020/02%20FEBRERO/Ejecuci%c3%b3n%20Cuentas%20por%20Pagar%20Febrero_2020.pdf',
              },
              {
                id: 6,
                tipo: 'pdf',
                nombre: 'Ejecución Gastos Febrero_2020.pdf',
                url: 'assets/files/presupuesto/05.%202020/02%20FEBRERO/Ejecuci%c3%b3n%20Gastos%20Febrero_2020.pdf',
              },
              {
                id: 7,
                tipo: 'pdf',
                nombre: 'Ejecución Ingresos Febrero_2020.pdf',
                url: 'assets/files/presupuesto/05.%202020/02%20FEBRERO/Ejecuci%c3%b3n%20Ingresos%20Febrero_2020.pdf',
              },
              {
                id: 8,
                tipo: 'pdf',
                nombre: 'Ejecución Reservas Febrero_2020.pdf',
                url: 'assets/files/presupuesto/05.%202020/02%20FEBRERO/Ejecuci%c3%b3n%20Reservas%20Febrero_2020.pdf',
              },
            ],
          },
          {
            id: 3,
            nombre: 'MARZO',
            files: [
              {
                id: 9,
                tipo: 'pdf',
                nombre: 'Ejecución Cuentas por Pagar Marzo_2020.pdf',
                url: 'assets/files/presupuesto/05.%202020/03%20MARZO/Ejecuci%c3%b3n%20Cuentas%20por%20Pagar%20Marzo_2020.pdf',
              },
              {
                id: 10,
                tipo: 'pdf',
                nombre: 'Ejecución Gastos Marzo_2020.pdf',
                url: 'assets/files/presupuesto/05.%202020/03%20MARZO/Ejecuci%c3%b3n%20Gastos%20Marzo_2020.pdf',
              },
              {
                id: 11,
                tipo: 'pdf',
                nombre: 'Ejecución Ingresos Marzo_2020.pdf',
                url: 'assets/files/presupuesto/05.%202020/03%20MARZO/Ejecuci%c3%b3n%20Ingresos%20Marzo_2020.pdf',
              },
              {
                id: 12,
                tipo: 'pdf',
                nombre: 'Ejecución Reservas Marzo_2020.pdf',
                url: 'assets/files/presupuesto/05.%202020/03%20MARZO/Ejecuci%c3%b3n%20Reservas%20Marzo_2020.pdf',
              },
            ],
          },
          {
            id: 4,
            nombre: 'ABRIL',
            files: [
              {
                id: 13,
                tipo: 'pdf',
                nombre: 'Ejecución Cuentas por Pagar Abril_2020.pdf',
                url: 'assets/files/presupuesto/05.%202020/04%20ABRIL/Ejecuci%c3%b3n%20Cuentas%20por%20Pagar%20Abril_2020.pdf',
              },
              {
                id: 14,
                tipo: 'pdf',
                nombre: 'Ejecución Gastos Abril_2020.pdf',
                url: 'assets/files/presupuesto/05.%202020/04%20ABRIL/Ejecuci%c3%b3n%20Gastos%20Abril_2020.pdf',
              },
              {
                id: 15,
                tipo: 'pdf',
                nombre: 'Ejecución Ingresos Abril_2020.pdf',
                url: 'assets/files/presupuesto/05.%202020/04%20ABRIL/Ejecuci%c3%b3n%20Ingresos%20Abril_2020.pdf',
              },
              {
                id: 16,
                tipo: 'pdf',
                nombre: 'Ejecución Reservas Abril_2020.pdf',
                url: 'assets/files/presupuesto/05.%202020/04%20ABRIL/Ejecuci%c3%b3n%20Reservas%20Abril_2020.pdf',
              },
            ],
          },
          {
            id: 5,
            nombre: 'MAYO',
            files: [
              {
                id: 17,
                tipo: 'pdf',
                nombre: 'Ejecución Cuentas por Pagar Mayo_2020.pdf',
                url: 'assets/files/presupuesto/05.%202020/05%20MAYO/Ejecuci%c3%b3n%20Cuentas%20por%20Pagar%20Mayo_2020.pdf',
              },
              {
                id: 18,
                tipo: 'pdf',
                nombre: 'Ejecución Gastos Mayo_2020.pdf',
                url: 'assets/files/presupuesto/05.%202020/05%20MAYO/Ejecuci%c3%b3n%20Gastos%20Mayo_2020.pdf',
              },
              {
                id: 19,
                tipo: 'pdf',
                nombre: 'Ejecución Ingresos Mayo_2020.pdf',
                url: 'assets/files/presupuesto/05.%202020/05%20MAYO/Ejecuci%c3%b3n%20Ingresos%20Mayo_2020.pdf',
              },
              {
                id: 20,
                tipo: 'pdf',
                nombre: 'Ejecución Reservas Mayo_2020.pdf',
                url: 'assets/files/presupuesto/05.%202020/05%20MAYO/Ejecuci%c3%b3n%20Reservas%20Mayo_2020.pdf',
              },
            ],
          },
          {
            id: 6,
            nombre: 'JUNIO',
            files: [
              {
                id: 21,
                tipo: 'pdf',
                nombre: 'Ejecución Cuentas por Pagar Junio_2020.pdf',
                url: 'assets/files/presupuesto/05.%202020/06%20JUNIO/Ejecuci%c3%b3n%20Cuentas%20por%20Pagar%20Junio_2020.pdf',
              },
              {
                id: 22,
                tipo: 'pdf',
                nombre: 'Ejecución Gastos Junio_2020.pdf',
                url: 'assets/files/presupuesto/05.%202020/06%20JUNIO/Ejecuci%c3%b3n%20Gastos%20Junio_2020.pdf',
              },
              {
                id: 23,
                tipo: 'pdf',
                nombre: 'Ejecución Ingresos Junio_2020.pdf',
                url: 'assets/files/presupuesto/05.%202020/06%20JUNIO/Ejecuci%c3%b3n%20Ingresos%20Junio_2020.pdf',
              },
              {
                id: 24,
                tipo: 'pdf',
                nombre: 'Ejecución Reservas Junio_2020.pdf',
                url: 'assets/files/presupuesto/05.%202020/06%20JUNIO/Ejecuci%c3%b3n%20Reservas%20Junio_2020.pdf',
              },
            ],
          },
          {
            id: 7,
            nombre: 'JULIO',
            files: [
              {
                id: 25,
                tipo: 'pdf',
                nombre: 'Ejecución Cuentas por Pagar Julio_2020.pdf',
                url: 'assets/files/presupuesto/05.%202020/07%20JULIO/Ejecuci%c3%b3n%20Cuentas%20por%20Pagar%20Julio_2020.pdf',
              },
              {
                id: 26,
                tipo: 'pdf',
                nombre: 'Ejecución Gastos Julio_2020.pdf',
                url: 'assets/files/presupuesto/05.%202020/07%20JULIO/Ejecuci%c3%b3n%20Gastos%20Julio_2020.pdf',
              },
              {
                id: 27,
                tipo: 'pdf',
                nombre: 'Ejecución Ingresos Julio_2020.pdf',
                url: 'assets/files/presupuesto/05.%202020/07%20JULIO/Ejecuci%c3%b3n%20Ingresos%20Julio_2020.pdf',
              },
              {
                id: 28,
                tipo: 'pdf',
                nombre: 'Ejecución Reservas Julio_2020.pdf',
                url: 'assets/files/presupuesto/05.%202020/07%20JULIO/Ejecuci%c3%b3n%20Reservas%20Julio_2020.pdf',
              },
            ],
          },
          {
            id: 8,
            nombre: 'AGOSTO',
            files: [
              {
                id: 29,
                tipo: 'pdf',
                nombre: 'Ejecución Cuentas por Pagar Agosto_2020.pdf',
                url: 'assets/files/presupuesto/05.%202020/08%20AGOSTO/Ejecuci%c3%b3n%20Cuentas%20por%20Pagar%20Agosto_2020.pdf',
              },
              {
                id: 30,
                tipo: 'pdf',
                nombre: 'Ejecución Gastos Agosto_2020.pdf',
                url: 'assets/files/presupuesto/05.%202020/08%20AGOSTO/Ejecuci%c3%b3n%20Gastos%20Agosto_2020.pdf',
              },
              {
                id: 31,
                tipo: 'pdf',
                nombre: 'Ejecución Ingresos Agosto_2020.pdf',
                url: 'assets/files/presupuesto/05.%202020/08%20AGOSTO/Ejecuci%c3%b3n%20Ingresos%20Agosto_2020.pdf',
              },
              {
                id: 32,
                tipo: 'pdf',
                nombre: 'Ejecución Reservas Agosto_2020.pdf',
                url: 'assets/files/presupuesto/05.%202020/08%20AGOSTO/Ejecuci%c3%b3n%20Reservas%20Agosto_2020.pdf',
              },
            ],
          },
          {
            id: 9,
            nombre: 'SEPTIEMBRE',
            files: [
              {
                id: 33,
                tipo: 'pdf',
                nombre: 'Ejecución Cuentas por Pagar Septiembre_2020.pdf',
                url: 'assets/files/presupuesto/05.%202020/09%20SEPTIEMBRE/Ejecuci%c3%b3n%20Cuentas%20por%20Pagar%20Septiembre_2020.pdf',
              },
              {
                id: 34,
                tipo: 'pdf',
                nombre: 'Ejecución Gastos Septiembre_2020.pdf',
                url: 'assets/files/presupuesto/05.%202020/09%20SEPTIEMBRE/Ejecuci%c3%b3n%20Gastos%20Septiembre_2020.pdf',
              },
              {
                id: 35,
                tipo: 'pdf',
                nombre: 'Ejecución Ingresos Septiembre_2020.pdf',
                url: 'assets/files/presupuesto/05.%202020/09%20SEPTIEMBRE/Ejecuci%c3%b3n%20Ingresos%20Septiembre_2020.pdf',
              },
              {
                id: 36,
                tipo: 'pdf',
                nombre: 'Ejecución Reservas Septiembre_2020.pdf',
                url: 'assets/files/presupuesto/05.%202020/09%20SEPTIEMBRE/Ejecuci%c3%b3n%20Reservas%20Septiembre_2020.pdf',
              },
            ],
          },
          {
            id: 10,
            nombre: 'OCTUBRE',
            files: [
              {
                id: 37,
                tipo: 'pdf',
                nombre: 'Ejecución Cuentas por Pagar Octubre_2020.pdf',
                url: 'assets/files/presupuesto/05.%202020/10%20OCTUBRE/Ejecuci%c3%b3n%20Cuentas%20por%20Pagar%20Octubre_2020.pdf',
              },
              {
                id: 38,
                tipo: 'pdf',
                nombre: 'Ejecución Gastos Octubre_2020.pdf',
                url: 'assets/files/presupuesto/05.%202020/10%20OCTUBRE/Ejecuci%c3%b3n%20Gastos%20Octubre_2020.pdf',
              },
              {
                id: 39,
                tipo: 'pdf',
                nombre: 'Ejecución Ingresos Octubre_2020.pdf',
                url: 'assets/files/presupuesto/05.%202020/10%20OCTUBRE/Ejecuci%c3%b3n%20Ingresos%20Octubre_2020.pdf',
              },
              {
                id: 40,
                tipo: 'pdf',
                nombre: 'Ejecución Reservas Octubre_2020.pdf',
                url: 'assets/files/presupuesto/05.%202020/10%20OCTUBRE/Ejecuci%c3%b3n%20Reservas%20Octubre_2020.pdf',
              },
            ],
          },
          {
            id: 11,
            nombre: 'NOVIEMBRE',
            files: [
              {
                id: 41,
                tipo: 'pdf',
                nombre: 'Ejecución Cuentas por Pagar Noviembre_2020.pdf',
                url: 'assets/files/presupuesto/05.%202020/11%20NOVIEMBRE/Ejecuci%c3%b3n%20Cuentas%20por%20Pagar%20Noviembre_2020.pdf',
              },
              {
                id: 42,
                tipo: 'pdf',
                nombre: 'Ejecución Gastos Noviembre_2020.pdf',
                url: 'assets/files/presupuesto/05.%202020/11%20NOVIEMBRE/Ejecuci%c3%b3n%20Gastos%20Noviembre_2020.pdf',
              },
              {
                id: 43,
                tipo: 'pdf',
                nombre: 'Ejecución Ingresos Noviembre_2020.pdf',
                url: 'assets/files/presupuesto/05.%202020/11%20NOVIEMBRE/Ejecuci%c3%b3n%20Ingresos%20Noviembre_2020.pdf',
              },
              {
                id: 44,
                tipo: 'pdf',
                nombre: 'Ejecución Reservas Noviembre_2020.pdf',
                url: 'assets/files/presupuesto/05.%202020/11%20NOVIEMBRE/Ejecuci%c3%b3n%20Reservas%20Noviembre_2020.pdf',
              },
            ],
          },
          {
            id: 12,
            nombre: 'DICIEMBRE',
            files: [
              {
                id: 45,
                tipo: 'pdf',
                nombre: 'Ejecución Cuentas por Pagar Diciembre_2020.pdf',
                url: 'assets/files/presupuesto/05.%202020/12%20DICIEMBRE/Ejecuci%c3%b3n%20Cuentas%20por%20Pagar%20Diciembre_2020.pdf',
              },
              {
                id: 46,
                tipo: 'pdf',
                nombre: 'Ejecución Gastos Diciembre_2020.pdf',
                url: 'assets/files/presupuesto/05.%202020/12%20DICIEMBRE/Ejecuci%c3%b3n%20Gastos%20Diciembre_2020.pdf',
              },
              {
                id: 47,
                tipo: 'pdf',
                nombre: 'Ejecución Ingresos Diciembre_2020.pdf',
                url: 'assets/files/presupuesto/05.%202020/12%20DICIEMBRE/Ejecuci%c3%b3n%20Ingresos%20Diciembre_2020.pdf',
              },
              {
                id: 48,
                tipo: 'pdf',
                nombre: 'Ejecución Reservas Diciembre_2020.pdf',
                url: 'assets/files/presupuesto/05.%202020/12%20DICIEMBRE/Ejecuci%c3%b3n%20Reservas%20Diciembre_2020.pdf',
              },
            ],
          },
        ],
      },

      {
        id: 6,
        nombre: '2019',
        acordion: [
          {
            id: 1,
            nombre: 'ENERO',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'Cuentas por Pagar Enero_2019.pdf',
                url: 'assets/files/presupuesto/06.%202019/01%20ENERO/Cuentas%20por%20Pagar%20Enero_2019.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre: 'Gastos Enero_2019.pdf',
                url: 'assets/files/presupuesto/06.%202019/01%20ENERO/Gastos%20Enero_2019.pdf',
              },
              {
                id: 3,
                tipo: 'pdf',
                nombre: 'Ingresos Enero_2019.pdf',
                url: 'assets/files/presupuesto/06.%202019/01%20ENERO/Ingresos%20Enero_2019.pdf',
              },
            ],
          },
          {
            id: 2,
            nombre: 'FEBRERO',
            files: [
              {
                id: 4,
                tipo: 'pdf',
                nombre: 'Cuentas por Pagar Febrero_2019.pdf',
                url: 'assets/files/presupuesto/06.%202019/02%20FEBRERO/Cuentas%20por%20Pagar%20Febrero_2019.pdf',
              },
              {
                id: 5,
                tipo: 'pdf',
                nombre: 'Gastos Febrero_2019.pdf',
                url: 'assets/files/presupuesto/06.%202019/02%20FEBRERO/Gastos%20Febrero_2019.pdf',
              },
              {
                id: 6,
                tipo: 'pdf',
                nombre: 'Ingresos Feberero_2019.pdf',
                url: 'assets/files/presupuesto/06.%202019/02%20FEBRERO/Ingresos%20Feberero_2019.pdf',
              },
              {
                id: 7,
                tipo: 'pdf',
                nombre: 'Reservas Febrero_2019.pdf',
                url: 'assets/files/presupuesto/06.%202019/02%20FEBRERO/Reservas%20Febrero_2019.pdf',
              },
            ],
          },
          {
            id: 3,
            nombre: 'MARZO',
            files: [
              {
                id: 8,
                tipo: 'pdf',
                nombre: 'Cuentas por Pagar Marzo_2019.pdf',
                url: 'assets/files/presupuesto/06.%202019/03%20MARZO/Cuentas%20por%20Pagar%20Marzo_2019.pdf',
              },
              {
                id: 9,
                tipo: 'pdf',
                nombre: 'Gastos Marzo_2019.pdf',
                url: 'assets/files/presupuesto/06.%202019/03%20MARZO/Gastos%20Marzo_2019.pdf',
              },
              {
                id: 10,
                tipo: 'pdf',
                nombre: 'Ingresos Marzo_2019.pdf',
                url: 'assets/files/presupuesto/06.%202019/03%20MARZO/Ingresos%20Marzo_2019.pdf',
              },
              {
                id: 11,
                tipo: 'pdf',
                nombre: 'Reservas Marzo_2019.pdf',
                url: 'assets/files/presupuesto/06.%202019/03%20MARZO/Reservas%20Marzo_2019.pdf',
              },
            ],
          },
          {
            id: 4,
            nombre: 'ABRIL',
            files: [
              {
                id: 12,
                tipo: 'pdf',
                nombre: 'Cuentas por Pagar Abril_2019.pdf',
                url: 'assets/files/presupuesto/06.%202019/04%20ABRIL/Cuentas%20por%20Pagar%20Abril_2019.pdf',
              },
              {
                id: 13,
                tipo: 'pdf',
                nombre: 'Gastos Abril_2019.pdf',
                url: 'assets/files/presupuesto/06.%202019/04%20ABRIL/Gastos%20Abril_2019.pdf',
              },
              {
                id: 14,
                tipo: 'pdf',
                nombre: 'Ingresos Abril_2019.pdf',
                url: 'assets/files/presupuesto/06.%202019/04%20ABRIL/Ingresos%20Abril_2019.pdf',
              },
              {
                id: 15,
                tipo: 'pdf',
                nombre: 'Reservas Abril_2019.pdf',
                url: 'assets/files/presupuesto/06.%202019/04%20ABRIL/Reservas%20Abril_2019.pdf',
              },
            ],
          },
          {
            id: 5,
            nombre: 'MAYO',
            files: [
              {
                id: 16,
                tipo: 'pdf',
                nombre: 'Cuentas por Pagar Mayo_2019.pdf',
                url: 'assets/files/presupuesto/06.%202019/05%20MAYO/Cuentas%20por%20Pagar%20Mayo_2019.pdf',
              },
              {
                id: 17,
                tipo: 'pdf',
                nombre: 'Gastos Mayo_2019.pdf',
                url: 'assets/files/presupuesto/06.%202019/05%20MAYO/Gastos%20Mayo_2019.pdf',
              },
              {
                id: 18,
                tipo: 'pdf',
                nombre: 'Ingresos Mayo_2019.pdf',
                url: 'assets/files/presupuesto/06.%202019/05%20MAYO/Ingresos%20Mayo_2019.pdf',
              },
              {
                id: 19,
                tipo: 'pdf',
                nombre: 'Reservas Mayo_2019.pdf',
                url: 'assets/files/presupuesto/06.%202019/05%20MAYO/Reservas%20Mayo_2019.pdf',
              },
            ],
          },
          {
            id: 6,
            nombre: 'JUNIO',
            files: [
              {
                id: 20,
                tipo: 'pdf',
                nombre: 'Cuentas por Pagar Junio_2019.pdf',
                url: 'assets/files/presupuesto/06.%202019/06%20JUNIO/Cuentas%20por%20Pagar%20Junio_2019.pdf',
              },
              {
                id: 21,
                tipo: 'pdf',
                nombre: 'Gastos Junio_2019.pdf',
                url: 'assets/files/presupuesto/06.%202019/06%20JUNIO/Gastos%20Junio_2019.pdf',
              },
              {
                id: 22,
                tipo: 'pdf',
                nombre: 'Ingresos Junio_2019.pdf',
                url: 'assets/files/presupuesto/06.%202019/06%20JUNIO/Ingresos%20Junio_2019.pdf',
              },
              {
                id: 23,
                tipo: 'pdf',
                nombre: 'Reservas Junio_2019.pdf',
                url: 'assets/files/presupuesto/06.%202019/06%20JUNIO/Reservas%20Junio_2019.pdf',
              },
            ],
          },
          {
            id: 7,
            nombre: 'JULIO',
            files: [
              {
                id: 24,
                tipo: 'pdf',
                nombre: 'Cuentas por Pagar Julio_2019.pdf',
                url: 'assets/files/presupuesto/06.%202019/07%20JULIO/Cuentas%20por%20Pagar%20Julio_2019.pdf',
              },
              {
                id: 25,
                tipo: 'pdf',
                nombre: 'Gastos Julio_2019.pdf',
                url: 'assets/files/presupuesto/06.%202019/07%20JULIO/Gastos%20Julio_2019.pdf',
              },
              {
                id: 26,
                tipo: 'pdf',
                nombre: 'Ingresos Julio_2019.pdf',
                url: 'assets/files/presupuesto/06.%202019/07%20JULIO/Ingresos%20Julio_2019.pdf',
              },
              {
                id: 27,
                tipo: 'pdf',
                nombre: 'Reservas Julio_2019.pdf',
                url: 'assets/files/presupuesto/06.%202019/07%20JULIO/Reservas%20Julio_2019.pdf',
              },
            ],
          },
          {
            id: 8,
            nombre: 'AGOSTO',
            files: [
              {
                id: 28,
                tipo: 'pdf',
                nombre: 'Cuentas por Pagar Agosto_2019.pdf',
                url: 'assets/files/presupuesto/06.%202019/08%20AGOSTO/Cuentas%20por%20Pagar%20Agosto_2019.pdf',
              },
              {
                id: 29,
                tipo: 'pdf',
                nombre: 'Gastos Agosto_2019.pdf',
                url: 'assets/files/presupuesto/06.%202019/08%20AGOSTO/Gastos%20Agosto_2019.pdf',
              },
              {
                id: 30,
                tipo: 'pdf',
                nombre: 'Ingresos Agosto_2019.pdf',
                url: 'assets/files/presupuesto/06.%202019/08%20AGOSTO/Ingresos%20Agosto_2019.pdf',
              },
              {
                id: 31,
                tipo: 'pdf',
                nombre: 'Reservas Agosto_2019.pdf',
                url: 'assets/files/presupuesto/06.%202019/08%20AGOSTO/Reservas%20Agosto_2019.pdf',
              },
            ],
          },
          {
            id: 9,
            nombre: 'SEPTIEMBRE',
            files: [
              {
                id: 32,
                tipo: 'pdf',
                nombre: 'Cuentas por Pagar Septiembre_2019.pdf',
                url: 'assets/files/presupuesto/06.%202019/09%20SEPTIEMBRE/Cuentas%20por%20Pagar%20Septiembre_2019.pdf',
              },
              {
                id: 33,
                tipo: 'pdf',
                nombre: 'Gastos Septiembre_2019.pdf',
                url: 'assets/files/presupuesto/06.%202019/09%20SEPTIEMBRE/Gastos%20Septiembre_2019.pdf',
              },
              {
                id: 34,
                tipo: 'pdf',
                nombre: 'Ingresos Septiembre_2019.pdf',
                url: 'assets/files/presupuesto/06.%202019/09%20SEPTIEMBRE/Ingresos%20Septiembre_2019.pdf',
              },
              {
                id: 35,
                tipo: 'pdf',
                nombre: 'Reservas Septiembre_2019.pdf',
                url: 'assets/files/presupuesto/06.%202019/09%20SEPTIEMBRE/Reservas%20Septiembre_2019.pdf',
              },
            ],
          },
          {
            id: 10,
            nombre: 'OCTUBRE',
            files: [
              {
                id: 36,
                tipo: 'pdf',
                nombre: 'Cuentas por Pagar Octubre_2019.pdf',
                url: 'assets/files/presupuesto/06.%202019/10%20OCTUBRE/Cuentas%20por%20Pagar%20Octubre_2019.pdf',
              },
              {
                id: 37,
                tipo: 'pdf',
                nombre: 'Gastos Octubre_2019.pdf',
                url: 'assets/files/presupuesto/06.%202019/10%20OCTUBRE/Gastos%20Octubre_2019.pdf',
              },
              {
                id: 38,
                tipo: 'pdf',
                nombre: 'Ingresos Octubre_2019.pdf',
                url: 'assets/files/presupuesto/06.%202019/10%20OCTUBRE/Ingresos%20Octubre_2019.pdf',
              },
              {
                id: 39,
                tipo: 'pdf',
                nombre: 'Reservas Octubre_2019.pdf',
                url: 'assets/files/presupuesto/06.%202019/10%20OCTUBRE/Reservas%20Octubre_2019.pdf',
              },
            ],
          },
          {
            id: 11,
            nombre: 'NOVIEMBRE',
            files: [
              {
                id: 40,
                tipo: 'pdf',
                nombre: 'Cuentas por Pagar Noviembre_2019.pdf',
                url: 'assets/files/presupuesto/06.%202019/11%20NOVIEMBRE/Cuentas%20por%20Pagar%20Noviembre_2019.pdf',
              },
              {
                id: 41,
                tipo: 'pdf',
                nombre: 'Gastos Noviembre_2019.pdf',
                url: 'assets/files/presupuesto/06.%202019/11%20NOVIEMBRE/Gastos%20Noviembre_2019.pdf',
              },
              {
                id: 42,
                tipo: 'pdf',
                nombre: 'Ingresos Noviembre_2019.pdf',
                url: 'assets/files/presupuesto/06.%202019/11%20NOVIEMBRE/Ingresos%20Noviembre_2019.pdf',
              },
              {
                id: 43,
                tipo: 'pdf',
                nombre: 'Reservas Noviembre_2019.pdf',
                url: 'assets/files/presupuesto/06.%202019/11%20NOVIEMBRE/Reservas%20Noviembre_2019.pdf',
              },
            ],
          },
          {
            id: 12,
            nombre: 'DICIEMBRE',
            files: [
              {
                id: 44,
                tipo: 'pdf',
                nombre: 'Cuentas por Pagar Diciembre_2019.pdf',
                url: 'assets/files/presupuesto/06.%202019/12%20DICIEMBRE/Cuentas%20por%20Pagar%20Diciembre_2019.pdf',
              },
              {
                id: 45,
                tipo: 'pdf',
                nombre: 'Gastos Diciembre_2019.pdf',
                url: 'assets/files/presupuesto/06.%202019/12%20DICIEMBRE/Gastos%20Diciembre_2019.pdf',
              },
              {
                id: 46,
                tipo: 'pdf',
                nombre: 'Ingresos Diciembre_2019.pdf',
                url: 'assets/files/presupuesto/06.%202019/12%20DICIEMBRE/Ingresos%20Diciembre_2019.pdf',
              },
              {
                id: 47,
                tipo: 'pdf',
                nombre: 'Reservas Diciembre_2019.pdf',
                url: 'assets/files/presupuesto/06.%202019/12%20DICIEMBRE/Reservas%20Diciembre_2019.pdf',
              },
            ],
          },
        ],
      },
      {
        id: 7,
        nombre: '2018',
        acordion: [
          {
            id: 1,
            nombre: 'ENERO',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'Ctas por pagar Enero 2018.pdf',
                url: 'assets/files/presupuesto/07.%202018/01%20ENERO/Ctas%20por%20pagar%20Enero%202018.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre: 'Gastos Enero 2018.pdf',
                url: 'assets/files/presupuesto/07.%202018/01%20ENERO/Gastos%20Enero%202018.pdf',
              },
              {
                id: 3,
                tipo: 'pdf',
                nombre: 'Ingresos Enero 2018.pdf',
                url: 'assets/files/presupuesto/07.%202018/01%20ENERO/Ingresos%20Enero%202018.pdf',
              },
              {
                id: 4,
                tipo: 'pdf',
                nombre: 'Reservas Enero 2018.pdf',
                url: 'assets/files/presupuesto/07.%202018/01%20ENERO/Reservas%20Enero%202018.pdf',
              },
            ],
          },
          {
            id: 2,
            nombre: 'FEBRERO',
            files: [
              {
                id: 5,
                tipo: 'pdf',
                nombre: 'Ctas por pagar Febrero 2018.pdf',
                url: 'assets/files/presupuesto/07.%202018/02%20FEBRERO/Ctas%20por%20pagar%20Febrero%202018.pdf',
              },
              {
                id: 6,
                tipo: 'pdf',
                nombre: 'Gastos Febrero 2018.pdf',
                url: 'assets/files/presupuesto/07.%202018/02%20FEBRERO/Gastos%20Febrero%202018.pdf',
              },
              {
                id: 7,
                tipo: 'pdf',
                nombre: 'Ingresos Febrero 2018.pdf',
                url: 'assets/files/presupuesto/07.%202018/02%20FEBRERO/Ingresos%20Febrero%202018.pdf',
              },
              {
                id: 8,
                tipo: 'pdf',
                nombre: 'Reservas Febrero 2018.pdf',
                url: 'assets/files/presupuesto/07.%202018/02%20FEBRERO/Reservas%20Febrero%202018.pdf',
              },
            ],
          },
          {
            id: 3,
            nombre: 'MARZO',
            files: [
              {
                id: 9,
                tipo: 'pdf',
                nombre: 'Ctas por pagar Marzo 2018.pdf',
                url: 'assets/files/presupuesto/07.%202018/03%20MARZO/Ctas%20por%20pagar%20Marzo%202018.pdf',
              },
              {
                id: 10,
                tipo: 'pdf',
                nombre: 'Gastos Marzo 2018.pdf',
                url: 'assets/files/presupuesto/07.%202018/03%20MARZO/Gastos%20Marzo%202018.pdf',
              },
              {
                id: 11,
                tipo: 'pdf',
                nombre: 'Ingresos Marzo 2018.pdf',
                url: 'assets/files/presupuesto/07.%202018/03%20MARZO/Ingresos%20Marzo%202018.pdf',
              },
              {
                id: 12,
                tipo: 'pdf',
                nombre: 'Reservas Marzo 2018.pdf',
                url: 'assets/files/presupuesto/07.%202018/03%20MARZO/Reservas%20Marzo%202018.pdf',
              },
            ],
          },
          {
            id: 4,
            nombre: 'ABRIL',
            files: [
              {
                id: 13,
                tipo: 'pdf',
                nombre: 'Ctas por pagar Abril 2018.pdf',
                url: 'assets/files/presupuesto/07.%202018/04%20ABRIL/Ctas%20por%20pagar%20Abril%202018.pdf',
              },
              {
                id: 14,
                tipo: 'pdf',
                nombre: 'Gastos Abril 2018.pdf',
                url: 'assets/files/presupuesto/07.%202018/04%20ABRIL/Gastos%20Abril%202018.pdf',
              },
              {
                id: 15,
                tipo: 'pdf',
                nombre: 'Ingresos Abril 2018.pdf',
                url: 'assets/files/presupuesto/07.%202018/04%20ABRIL/Ingresos%20Abril%202018.pdf',
              },
              {
                id: 16,
                tipo: 'pdf',
                nombre: 'Reservas Abril 2018.pdf',
                url: 'assets/files/presupuesto/07.%202018/04%20ABRIL/Reservas%20Abril%202018.pdf',
              },
            ],
          },
          {
            id: 5,
            nombre: 'MAYO',
            files: [
              {
                id: 17,
                tipo: 'pdf',
                nombre: 'Ctas por pagar Mayo 2018.pdf',
                url: 'assets/files/presupuesto/07.%202018/05%20MAYO/Ctas%20por%20pagar%20Mayo%202018.pdf',
              },
              {
                id: 18,
                tipo: 'pdf',
                nombre: 'Gastos Mayo 2018.pdf',
                url: 'assets/files/presupuesto/07.%202018/05%20MAYO/Gastos%20Mayo%202018.pdf',
              },
              {
                id: 19,
                tipo: 'pdf',
                nombre: 'Ingresos Mayo 2018.pdf',
                url: 'assets/files/presupuesto/07.%202018/05%20MAYO/Ingresos%20Mayo%202018.pdf',
              },
              {
                id: 20,
                tipo: 'pdf',
                nombre: 'Reservas Mayo 2018.pdf',
                url: 'assets/files/presupuesto/07.%202018/05%20MAYO/Reservas%20Mayo%202018.pdf',
              },
            ],
          },
          {
            id: 6,
            nombre: 'JUNIO',
            files: [
              {
                id: 21,
                tipo: 'pdf',
                nombre: 'Ctas por pagar Junio 2018.pdf',
                url: 'assets/files/presupuesto/07.%202018/06%20JUNIO/Ctas%20por%20pagar%20Junio%202018.pdf',
              },
              {
                id: 22,
                tipo: 'pdf',
                nombre: 'Gastos Junio 2018.pdf',
                url: 'assets/files/presupuesto/07.%202018/06%20JUNIO/Gastos%20Junio%202018.pdf',
              },
              {
                id: 23,
                tipo: 'pdf',
                nombre: 'Ingresos Junio 2018.pdf',
                url: 'assets/files/presupuesto/07.%202018/06%20JUNIO/Ingresos%20Junio%202018.pdf',
              },
              {
                id: 24,
                tipo: 'pdf',
                nombre: 'Reservas Junio 2018.pdf',
                url: 'assets/files/presupuesto/07.%202018/06%20JUNIO/Reservas%20Junio%202018.pdf',
              },
            ],
          },
          {
            id: 7,
            nombre: 'JULIO',
            files: [
              {
                id: 25,
                tipo: 'pdf',
                nombre: 'Ctas por pagar Julio 2018.pdf',
                url: 'assets/files/presupuesto/07.%202018/07%20JULIO/Ctas%20por%20pagar%20Julio%202018.pdf',
              },
              {
                id: 26,
                tipo: 'pdf',
                nombre: 'Gastos Julio 2018.pdf',
                url: 'assets/files/presupuesto/07.%202018/07%20JULIO/Gastos%20Julio%202018.pdf',
              },
              {
                id: 27,
                tipo: 'pdf',
                nombre: 'Ingresos Julio 2018.pdf',
                url: 'assets/files/presupuesto/07.%202018/07%20JULIO/Ingresos%20Julio%202018.pdf',
              },
              {
                id: 28,
                tipo: 'pdf',
                nombre: 'Reservas Julio 2018.pdf',
                url: 'assets/files/presupuesto/07.%202018/07%20JULIO/Reservas%20Julio%202018.pdf',
              },
            ],
          },
          {
            id: 8,
            nombre: 'AGOSTO',
            files: [
              {
                id: 29,
                tipo: 'pdf',
                nombre: 'Ctas por pagar Agosto 2018.pdf',
                url: 'assets/files/presupuesto/07.%202018/08%20AGOSTO/Ctas%20por%20pagar%20Agosto%202018.pdf',
              },
              {
                id: 30,
                tipo: 'pdf',
                nombre: 'Gastos Agosto 2018.pdf',
                url: 'assets/files/presupuesto/07.%202018/08%20AGOSTO/Gastos%20Agosto%202018.pdf',
              },
              {
                id: 31,
                tipo: 'pdf',
                nombre: 'Ingresos Agosto 2018.pdf',
                url: 'assets/files/presupuesto/07.%202018/08%20AGOSTO/Ingresos%20Agosto%202018.pdf',
              },
              {
                id: 32,
                tipo: 'pdf',
                nombre: 'Reservas Agosto 2018.pdf',
                url: 'assets/files/presupuesto/07.%202018/08%20AGOSTO/Reservas%20Agosto%202018.pdf',
              },
            ],
          },
          {
            id: 9,
            nombre: 'SEPTIEMBRE',
            files: [
              {
                id: 33,
                tipo: 'pdf',
                nombre: 'Ctas por pagar Septiembre 2018.pdf',
                url: 'assets/files/presupuesto/07.%202018/09%20SEPTIEMBRE/Ctas%20por%20pagar%20Septiembre%202018.pdf',
              },
              {
                id: 34,
                tipo: 'pdf',
                nombre: 'Gastos Septiembre 2018.pdf',
                url: 'assets/files/presupuesto/07.%202018/09%20SEPTIEMBRE/Gastos%20Septiembre%202018.pdf',
              },
              {
                id: 35,
                tipo: 'pdf',
                nombre: 'Ingresos Septiembre 2018.pdf',
                url: 'assets/files/presupuesto/07.%202018/09%20SEPTIEMBRE/Ingresos%20Septiembre%202018.pdf',
              },
              {
                id: 36,
                tipo: 'pdf',
                nombre: 'Reservas Septiembre 2018.pdf',
                url: 'assets/files/presupuesto/07.%202018/09%20SEPTIEMBRE/Reservas%20Septiembre%202018.pdf',
              },
            ],
          },
          {
            id: 10,
            nombre: 'OCTUBRE',
            files: [
              {
                id: 37,
                tipo: 'pdf',
                nombre: 'Ctas por pagar Octubre 2018.pdf',
                url: 'assets/files/presupuesto/07.%202018/10%20OCTUBRE/Ctas%20por%20pagar%20Octubre%202018.pdf',
              },
              {
                id: 38,
                tipo: 'pdf',
                nombre: 'Gastos Octubre 2018.pdf',
                url: 'assets/files/presupuesto/07.%202018/10%20OCTUBRE/Gastos%20Octubre%202018.pdf',
              },
              {
                id: 39,
                tipo: 'pdf',
                nombre: 'Ingresos Octubre 2018.pdf',
                url: 'assets/files/presupuesto/07.%202018/10%20OCTUBRE/Ingresos%20Octubre%202018.pdf',
              },
              {
                id: 40,
                tipo: 'pdf',
                nombre: 'Reservas Octubre 2018.pdf',
                url: 'assets/files/presupuesto/07.%202018/10%20OCTUBRE/Reservas%20Octubre%202018.pdf',
              },
            ],
          },
          {
            id: 11,
            nombre: 'NOVIEMBRE',
            files: [
              {
                id: 41,
                tipo: 'pdf',
                nombre: 'Ctas por pagar Noviembre 2018.pdf',
                url: 'assets/files/presupuesto/07.%202018/11%20NOVIEMBRE/Ctas%20por%20pagar%20Noviembre%202018.pdf',
              },
              {
                id: 42,
                tipo: 'pdf',
                nombre: 'Gastos Noviembre 2018.pdf',
                url: 'assets/files/presupuesto/07.%202018/11%20NOVIEMBRE/Gastos%20Noviembre%202018.pdf',
              },
              {
                id: 43,
                tipo: 'pdf',
                nombre: 'Ingresos Noviembre 2018.pdf',
                url: 'assets/files/presupuesto/07.%202018/11%20NOVIEMBRE/Ingresos%20Noviembre%202018.pdf',
              },
              {
                id: 44,
                tipo: 'pdf',
                nombre: 'Reservas Noviembre 2018.pdf',
                url: 'assets/files/presupuesto/07.%202018/11%20NOVIEMBRE/Reservas%20Noviembre%202018.pdf',
              },
            ],
          },
          {
            id: 12,
            nombre: 'DICIEMBRE',
            files: [
              {
                id: 45,
                tipo: 'pdf',
                nombre: 'Ctas por pagar Diciembre 2018.pdf',
                url: 'assets/files/presupuesto/07.%202018/12%20DICIEMBRE/Ctas%20por%20pagar%20Diciembre%202018.pdf',
              },
              {
                id: 46,
                tipo: 'pdf',
                nombre: 'Gastos Diciembre 2018.pdf',
                url: 'assets/files/presupuesto/07.%202018/12%20DICIEMBRE/Gastos%20Diciembre%202018.pdf',
              },
              {
                id: 47,
                tipo: 'pdf',
                nombre: 'Ingresos Diciembre 2018.pdf',
                url: 'assets/files/presupuesto/07.%202018/12%20DICIEMBRE/Ingresos%20Diciembre%202018.pdf',
              },
              {
                id: 48,
                tipo: 'pdf',
                nombre: 'Reservas Diciembre 2018.pdf',
                url: 'assets/files/presupuesto/07.%202018/12%20DICIEMBRE/Reservas%20Diciembre%202018.pdf',
              },
            ],
          },
        ],
      },

      {
        id: 1,
        nombre: '2017',
        acordion: [
          {
            id: 1,
            nombre: 'ENERO',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'Ctas por pagar Enero 2017.pdf',
                url: 'assets/files/presupuesto/08.%202017/01%20ENERO/Ctas%20por%20pagar%20Enero%202017.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre: 'Gastos Enero 2017.pdf',
                url: 'assets/files/presupuesto/08.%202017/01%20ENERO/Gastos%20Enero%202017.pdf',
              },
              {
                id: 3,
                tipo: 'pdf',
                nombre: 'Ingresos Enero 2017.pdf',
                url: 'assets/files/presupuesto/08.%202017/01%20ENERO/Ingresos%20Enero%202017.pdf',
              },
              {
                id: 4,
                tipo: 'pdf',
                nombre: 'Reservas Enero 2017.pdf',
                url: 'assets/files/presupuesto/08.%202017/01%20ENERO/Reservas%20Enero%202017.pdf',
              },
            ],
          },
          {
            id: 2,
            nombre: 'FEBRERO',
            files: [
              {
                id: 5,
                tipo: 'pdf',
                nombre: 'Ctas por pagar Febrero 2017.pdf',
                url: 'assets/files/presupuesto/08.%202017/02%20FEBRERO/Ctas%20por%20pagar%20Febrero%202017.pdf',
              },
              {
                id: 6,
                tipo: 'pdf',
                nombre: 'Gastos Febrero 2017.pdf',
                url: 'assets/files/presupuesto/08.%202017/02%20FEBRERO/Gastos%20Febrero%202017.pdf',
              },
              {
                id: 7,
                tipo: 'pdf',
                nombre: 'Ingresos Febrero 2017.pdf',
                url: 'assets/files/presupuesto/08.%202017/02%20FEBRERO/Ingresos%20Febrero%202017.pdf',
              },
              {
                id: 8,
                tipo: 'pdf',
                nombre: 'Reservas Febrero 2017.pdf',
                url: 'assets/files/presupuesto/08.%202017/02%20FEBRERO/Reservas%20Febrero%202017.pdf',
              },
            ],
          },
          {
            id: 3,
            nombre: 'MARZO',
            files: [
              {
                id: 9,
                tipo: 'pdf',
                nombre: 'Ctas por pagar Marzo 2017.pdf',
                url: 'assets/files/presupuesto/08.%202017/03%20MARZO/Ctas%20por%20pagar%20Marzo%202017.pdf',
              },
              {
                id: 10,
                tipo: 'pdf',
                nombre: 'Gastos Marzo 2017.pdf',
                url: 'assets/files/presupuesto/08.%202017/03%20MARZO/Gastos%20Marzo%202017.pdf',
              },
              {
                id: 11,
                tipo: 'pdf',
                nombre: 'Ingresos Marzo 2017.pdf',
                url: 'assets/files/presupuesto/08.%202017/03%20MARZO/Ingresos%20Marzo%202017.pdf',
              },
              {
                id: 12,
                tipo: 'pdf',
                nombre: 'Reservas Marzo 2017.pdf',
                url: 'assets/files/presupuesto/08.%202017/03%20MARZO/Reservas%20Marzo%202017.pdf',
              },
            ],
          },
          {
            id: 4,
            nombre: 'ABRIL',
            files: [
              {
                id: 13,
                tipo: 'pdf',
                nombre: 'Ctas por pagar Abril 2017.pdf',
                url: 'assets/files/presupuesto/08.%202017/04%20ABRIL/Ctas%20por%20pagar%20Abril%202017.pdf',
              },
              {
                id: 14,
                tipo: 'pdf',
                nombre: 'Gastos Abril 2017.pdf',
                url: 'assets/files/presupuesto/08.%202017/04%20ABRIL/Gastos%20Abril%202017.pdf',
              },
              {
                id: 15,
                tipo: 'pdf',
                nombre: 'Ingresos Abril 2017.pdf',
                url: 'assets/files/presupuesto/08.%202017/04%20ABRIL/Ingresos%20Abril%202017.pdf',
              },
              {
                id: 16,
                tipo: 'pdf',
                nombre: 'Reservas Abril 2017.pdf',
                url: 'assets/files/presupuesto/08.%202017/04%20ABRIL/Reservas%20Abril%202017.pdf',
              },
            ],
          },
          {
            id: 5,
            nombre: 'MAYO',
            files: [
              {
                id: 17,
                tipo: 'pdf',
                nombre: 'Ctas por pagar Mayo 2017.pdf',
                url: 'assets/files/presupuesto/08.%202017/05%20MAYO/Ctas%20por%20pagar%20Mayo%202017.pdf',
              },
              {
                id: 18,
                tipo: 'pdf',
                nombre: 'Gastos Mayo 2017.pdf',
                url: 'assets/files/presupuesto/08.%202017/05%20MAYO/Gastos%20Mayo%202017.pdf',
              },
              {
                id: 19,
                tipo: 'pdf',
                nombre: 'Ingresos Mayo 2017.pdf',
                url: 'assets/files/presupuesto/08.%202017/05%20MAYO/Ingresos%20Mayo%202017.pdf',
              },
              {
                id: 20,
                tipo: 'pdf',
                nombre: 'Reservas Mayo 2017.pdf',
                url: 'assets/files/presupuesto/08.%202017/05%20MAYO/Reservas%20Mayo%202017.pdf',
              },
            ],
          },
          {
            id: 6,
            nombre: 'JUNIO',
            files: [
              {
                id: 21,
                tipo: 'pdf',
                nombre: 'Ctas por pagar Junio 2017.pdf',
                url: 'assets/files/presupuesto/08.%202017/06%20JUNIO/Ctas%20por%20pagar%20Junio%202017.pdf',
              },
              {
                id: 22,
                tipo: 'pdf',
                nombre: 'Gastos Junio 2017.pdf',
                url: 'assets/files/presupuesto/08.%202017/06%20JUNIO/Gastos%20Junio%202017.pdf',
              },
              {
                id: 23,
                tipo: 'pdf',
                nombre: 'Ingresos Junio 2017.pdf',
                url: 'assets/files/presupuesto/08.%202017/06%20JUNIO/Ingresos%20Junio%202017.pdf',
              },
              {
                id: 24,
                tipo: 'pdf',
                nombre: 'Reservas Junio 2017.pdf',
                url: 'assets/files/presupuesto/08.%202017/06%20JUNIO/Reservas%20Junio%202017.pdf',
              },
            ],
          },
          {
            id: 7,
            nombre: 'JULIO',
            files: [
              {
                id: 25,
                tipo: 'pdf',
                nombre: 'Ctas por pagar Julio 2017.pdf',
                url: 'assets/files/presupuesto/08.%202017/07%20JULIO/Ctas%20por%20pagar%20Julio%202017.pdf',
              },
              {
                id: 26,
                tipo: 'pdf',
                nombre: 'Gastos Julio 2017.pdf',
                url: 'assets/files/presupuesto/08.%202017/07%20JULIO/Gastos%20Julio%202017.pdf',
              },
              {
                id: 27,
                tipo: 'pdf',
                nombre: 'Ingresos Julio 2017.pdf',
                url: 'assets/files/presupuesto/08.%202017/07%20JULIO/Ingresos%20Julio%202017.pdf',
              },
              {
                id: 28,
                tipo: 'pdf',
                nombre: 'Reservas Julio 2017.pdf',
                url: 'assets/files/presupuesto/08.%202017/07%20JULIO/Reservas%20Julio%202017.pdf',
              },
            ],
          },
          {
            id: 8,
            nombre: 'AGOSTO',
            files: [
              {
                id: 29,
                tipo: 'pdf',
                nombre: 'Ctas por pagar Agosto 2017.pdf',
                url: 'assets/files/presupuesto/08.%202017/08%20AGOSTO/Ctas%20por%20pagar%20Agosto%202017.pdf',
              },
              {
                id: 30,
                tipo: 'pdf',
                nombre: 'Gastos Agosto 2017.pdf',
                url: 'assets/files/presupuesto/08.%202017/08%20AGOSTO/Gastos%20Agosto%202017.pdf',
              },
              {
                id: 31,
                tipo: 'pdf',
                nombre: 'Ingresos Agosto 2017.pdf',
                url: 'assets/files/presupuesto/08.%202017/08%20AGOSTO/Ingresos%20Agosto%202017.pdf',
              },
              {
                id: 32,
                tipo: 'pdf',
                nombre: 'Reservas Agosto 2017.pdf',
                url: 'assets/files/presupuesto/08.%202017/08%20AGOSTO/Reservas%20Agosto%202017.pdf',
              },
            ],
          },
          {
            id: 9,
            nombre: 'SEPTIEMBRE',
            files: [
              {
                id: 33,
                tipo: 'pdf',
                nombre: 'Ctas por pagar Septiembre 2017.pdf',
                url: 'assets/files/presupuesto/08.%202017/09%20SEPTIEMBRE/Ctas%20por%20pagar%20Septiembre%202017.pdf',
              },
              {
                id: 34,
                tipo: 'pdf',
                nombre: 'Gastos Septiembre 2017.pdf',
                url: 'assets/files/presupuesto/08.%202017/09%20SEPTIEMBRE/Gastos%20Septiembre%202017.pdf',
              },
              {
                id: 35,
                tipo: 'pdf',
                nombre: 'Ingresos Septiembre 2017.pdf',
                url: 'assets/files/presupuesto/08.%202017/09%20SEPTIEMBRE/Ingresos%20Septiembre%202017.pdf',
              },
              {
                id: 36,
                tipo: 'pdf',
                nombre: 'Reservas Septiembre 2017.pdf',
                url: 'assets/files/presupuesto/08.%202017/09%20SEPTIEMBRE/Reservas%20Septiembre%202017.pdf',
              },
            ],
          },
          {
            id: 10,
            nombre: 'OCTUBRE',
            files: [
              {
                id: 37,
                tipo: 'pdf',
                nombre: 'Ctas por pagar Octubre 2017.pdf',
                url: 'assets/files/presupuesto/08.%202017/10%20OCTUBRE/Ctas%20por%20pagar%20Octubre%202017.pdf',
              },
              {
                id: 38,
                tipo: 'pdf',
                nombre: 'Gastos Octubre 2017.pdf',
                url: 'assets/files/presupuesto/08.%202017/10%20OCTUBRE/Gastos%20Octubre%202017.pdf',
              },
              {
                id: 39,
                tipo: 'pdf',
                nombre: 'Ingresos Octubre 2017.pdf',
                url: 'assets/files/presupuesto/08.%202017/10%20OCTUBRE/Ingresos%20Octubre%202017.pdf',
              },
              {
                id: 40,
                tipo: 'pdf',
                nombre: 'Reservas Octubre 2017.pdf',
                url: 'assets/files/presupuesto/08.%202017/10%20OCTUBRE/Reservas%20Octubre%202017.pdf',
              },
            ],
          },
          {
            id: 11,
            nombre: 'NOVIEMBRE',
            files: [
              {
                id: 41,
                tipo: 'pdf',
                nombre: 'Ctas por pagar Noviembre 2017.pdf',
                url: 'assets/files/presupuesto/08.%202017/11%20NOVIEMBRE/Ctas%20por%20pagar%20Noviembre%202017.pdf',
              },
              {
                id: 42,
                tipo: 'pdf',
                nombre: 'Gastos Noviembre 2017.pdf',
                url: 'assets/files/presupuesto/08.%202017/11%20NOVIEMBRE/Gastos%20Noviembre%202017.pdf',
              },
              {
                id: 43,
                tipo: 'pdf',
                nombre: 'Ingresos Noviembre 2017.pdf',
                url: 'assets/files/presupuesto/08.%202017/11%20NOVIEMBRE/Ingresos%20Noviembre%202017.pdf',
              },
              {
                id: 44,
                tipo: 'pdf',
                nombre: 'Reservas Noviembre 2017.pdf',
                url: 'assets/files/presupuesto/08.%202017/11%20NOVIEMBRE/Reservas%20Noviembre%202017.pdf',
              },
            ],
          },
          {
            id: 12,
            nombre: 'DICIEMBRE',
            files: [
              {
                id: 45,
                tipo: 'pdf',
                nombre: 'Ctas por pagar Diciembre 2017.pdf',
                url: 'assets/files/presupuesto/08.%202017/12%20DICIEMBRE/Ctas%20por%20pagar%20Diciembre%202017.pdf',
              },
              {
                id: 46,
                tipo: 'pdf',
                nombre: 'Gastos Diciembre 2017.pdf',
                url: 'assets/files/presupuesto/08.%202017/12%20DICIEMBRE/Gastos%20Diciembre%202017.pdf',
              },
              {
                id: 47,
                tipo: 'pdf',
                nombre: 'Ingresos Diciembre 2017.pdf',
                url: 'assets/files/presupuesto/08.%202017/12%20DICIEMBRE/Ingresos%20Diciembre%202017.pdf',
              },
              {
                id: 48,
                tipo: 'pdf',
                nombre: 'Reservas Diciembre 2017.pdf',
                url: 'assets/files/presupuesto/08.%202017/12%20DICIEMBRE/Reservas%20Diciembre%202017.pdf',
              },
            ],
          },
        ],
      },

      {
        id: 1,
        nombre: '2016',
        acordion: [
          {
            id: 1,
            nombre: 'ENERO',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'Ctas por pagar Enero 2016.pdf',
                url: 'assets/files/presupuesto/09.%202016/01%20ENERO/Ctas%20por%20pagar%20Enero%202016.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre: 'Gastos Enero 2016.pdf',
                url: 'assets/files/presupuesto/09.%202016/01%20ENERO/Gastos%20Enero%202016.pdf',
              },
              {
                id: 3,
                tipo: 'pdf',
                nombre: 'Ingresos Enero 2016.pdf',
                url: 'assets/files/presupuesto/09.%202016/01%20ENERO/Ingresos%20Enero%202016.pdf',
              },
              {
                id: 4,
                tipo: 'pdf',
                nombre: 'Reservas Enero 2016.pdf',
                url: 'assets/files/presupuesto/09.%202016/01%20ENERO/Reservas%20Enero%202016.pdf',
              },
            ],
          },
          {
            id: 2,
            nombre: 'FEBRERO',
            files: [
              {
                id: 5,
                tipo: 'pdf',
                nombre: 'Ctas por pagar Febrero 2016.pdf',
                url: 'assets/files/presupuesto/09.%202016/02%20FEBRERO/Ctas%20por%20pagar%20Febrero%202016.pdf',
              },
              {
                id: 6,
                tipo: 'pdf',
                nombre: 'Gastos Febrero 2016.pdf',
                url: 'assets/files/presupuesto/09.%202016/02%20FEBRERO/Gastos%20Febrero%202016.pdf',
              },
              {
                id: 7,
                tipo: 'pdf',
                nombre: 'Ingresos Febrero 2016.pdf',
                url: 'assets/files/presupuesto/09.%202016/02%20FEBRERO/Ingresos%20Febrero%202016.pdf',
              },
              {
                id: 8,
                tipo: 'pdf',
                nombre: 'Reservas Febrero 2016.pdf',
                url: 'assets/files/presupuesto/09.%202016/02%20FEBRERO/Reservas%20Febrero%202016.pdf',
              },
            ],
          },
          {
            id: 3,
            nombre: 'MARZO',
            files: [
              {
                id: 9,
                tipo: 'pdf',
                nombre: 'Ctas por pagar Marzo 2016.pdf',
                url: 'assets/files/presupuesto/09.%202016/03%20MARZO/Ctas%20por%20pagar%20Marzo%202016.pdf',
              },
              {
                id: 10,
                tipo: 'pdf',
                nombre: 'Gastos Marzo 2016.pdf',
                url: 'assets/files/presupuesto/09.%202016/03%20MARZO/Gastos%20Marzo%202016.pdf',
              },
              {
                id: 11,
                tipo: 'pdf',
                nombre: 'Ingresos Marzo 2016.pdf',
                url: 'assets/files/presupuesto/09.%202016/03%20MARZO/Ingresos%20Marzo%202016.pdf',
              },
              {
                id: 12,
                tipo: 'pdf',
                nombre: 'Reservas Marzo 2016.pdf',
                url: 'assets/files/presupuesto/09.%202016/03%20MARZO/Reservas%20Marzo%202016.pdf',
              },
            ],
          },
          {
            id: 4,
            nombre: 'ABRIL',
            files: [
              {
                id: 13,
                tipo: 'pdf',
                nombre: 'Ctas por pagar Abril 2016.pdf',
                url: 'assets/files/presupuesto/09.%202016/04%20ABRIL/Ctas%20por%20pagar%20Abril%202016.pdf',
              },
              {
                id: 14,
                tipo: 'pdf',
                nombre: 'Gastos Abril 2016.pdf',
                url: 'assets/files/presupuesto/09.%202016/04%20ABRIL/Gastos%20Abril%202016.pdf',
              },
              {
                id: 15,
                tipo: 'pdf',
                nombre: 'Ingresos Abril 2016.pdf',
                url: 'assets/files/presupuesto/09.%202016/04%20ABRIL/Ingresos%20Abril%202016.pdf',
              },
              {
                id: 16,
                tipo: 'pdf',
                nombre: 'Reservas Abril 2016.pdf',
                url: 'assets/files/presupuesto/09.%202016/04%20ABRIL/Reservas%20Abril%202016.pdf',
              },
            ],
          },
          {
            id: 5,
            nombre: 'MAYO',
            files: [
              {
                id: 17,
                tipo: 'pdf',
                nombre: 'Ctas por pagar Mayo 2016.pdf',
                url: 'assets/files/presupuesto/09.%202016/05%20MAYO/Ctas%20por%20pagar%20Mayo%202016.pdf',
              },
              {
                id: 18,
                tipo: 'pdf',
                nombre: 'Gastos Mayo 2016.pdf',
                url: 'assets/files/presupuesto/09.%202016/05%20MAYO/Gastos%20Mayo%202016.pdf',
              },
              {
                id: 19,
                tipo: 'pdf',
                nombre: 'Ingresos Mayo 2016.pdf',
                url: 'assets/files/presupuesto/09.%202016/05%20MAYO/Ingresos%20Mayo%202016.pdf',
              },
              {
                id: 20,
                tipo: 'pdf',
                nombre: 'Reservas Mayo 2016.pdf',
                url: 'assets/files/presupuesto/09.%202016/05%20MAYO/Reservas%20Mayo%202016.pdf',
              },
            ],
          },
          {
            id: 6,
            nombre: 'JUNIO',
            files: [
              {
                id: 21,
                tipo: 'pdf',
                nombre: 'Ctas por pagar Junio 2016.pdf',
                url: 'assets/files/presupuesto/09.%202016/06%20JUNIO/Ctas%20por%20pagar%20Junio%202016.pdf',
              },
              {
                id: 22,
                tipo: 'pdf',
                nombre: 'Gastos Junio 2016.pdf',
                url: 'assets/files/presupuesto/09.%202016/06%20JUNIO/Gastos%20Junio%202016.pdf',
              },
              {
                id: 23,
                tipo: 'pdf',
                nombre: 'Ingresos Junio 2016.pdf',
                url: 'assets/files/presupuesto/09.%202016/06%20JUNIO/Ingresos%20Junio%202016.pdf',
              },
              {
                id: 24,
                tipo: 'pdf',
                nombre: 'Reservas Junio 2016.pdf',
                url: 'assets/files/presupuesto/09.%202016/06%20JUNIO/Reservas%20Junio%202016.pdf',
              },
            ],
          },
          {
            id: 7,
            nombre: 'JULIO',
            files: [
              {
                id: 25,
                tipo: 'pdf',
                nombre: 'Ctas por pagar Julio 2016.pdf',
                url: 'assets/files/presupuesto/09.%202016/07%20JULIO/Ctas%20por%20pagar%20Julio%202016.pdf',
              },
              {
                id: 26,
                tipo: 'pdf',
                nombre: 'Gastos Julio 2016.pdf',
                url: 'assets/files/presupuesto/09.%202016/07%20JULIO/Gastos%20Julio%202016.pdf',
              },
              {
                id: 27,
                tipo: 'pdf',
                nombre: 'Ingresos Julio 2016.pdf',
                url: 'assets/files/presupuesto/09.%202016/07%20JULIO/Ingresos%20Julio%202016.pdf',
              },
              {
                id: 28,
                tipo: 'pdf',
                nombre: 'Reservas Julio 2016.pdf',
                url: 'assets/files/presupuesto/09.%202016/07%20JULIO/Reservas%20Julio%202016.pdf',
              },
            ],
          },
          {
            id: 8,
            nombre: 'AGOSTO',
            files: [
              {
                id: 29,
                tipo: 'pdf',
                nombre: 'Ctas por pagar Agosto 2016.pdf',
                url: 'assets/files/presupuesto/09.%202016/08%20AGOSTO/Ctas%20por%20pagar%20Agosto%202016.pdf',
              },
              {
                id: 30,
                tipo: 'pdf',
                nombre: 'Gastos Agosto 2016.pdf',
                url: 'assets/files/presupuesto/09.%202016/08%20AGOSTO/Gastos%20Agosto%202016.pdf',
              },
              {
                id: 31,
                tipo: 'pdf',
                nombre: 'Ingresos Agosto 2016.pdf',
                url: 'assets/files/presupuesto/09.%202016/08%20AGOSTO/Ingresos%20Agosto%202016.pdf',
              },
              {
                id: 32,
                tipo: 'pdf',
                nombre: 'Reservas Agosto 2016.pdf',
                url: 'assets/files/presupuesto/09.%202016/08%20AGOSTO/Reservas%20Agosto%202016.pdf',
              },
            ],
          },
          {
            id: 9,
            nombre: 'SEPTIEMBRE',
            files: [
              {
                id: 33,
                tipo: 'pdf',
                nombre: 'Ctas por pagar Septiembre 2016.pdf',
                url: 'assets/files/presupuesto/09.%202016/09%20SEPTIEMBRE/Ctas%20por%20pagar%20Septiembre%202016.pdf',
              },
              {
                id: 34,
                tipo: 'pdf',
                nombre: 'Gastos Septiembre 2016.pdf',
                url: 'assets/files/presupuesto/09.%202016/09%20SEPTIEMBRE/Gastos%20Septiembre%202016.pdf',
              },
              {
                id: 35,
                tipo: 'pdf',
                nombre: 'Ingresos Septiembre 2016.pdf',
                url: 'assets/files/presupuesto/09.%202016/09%20SEPTIEMBRE/Ingresos%20Septiembre%202016.pdf',
              },
              {
                id: 36,
                tipo: 'pdf',
                nombre: 'Reservas Septiembre 2016.pdf',
                url: 'assets/files/presupuesto/09.%202016/09%20SEPTIEMBRE/Reservas%20Septiembre%202016.pdf',
              },
            ],
          },
          {
            id: 10,
            nombre: 'OCTUBRE',
            files: [
              {
                id: 37,
                tipo: 'pdf',
                nombre: 'Ctas por pagar Octubre 2016.pdf',
                url: 'assets/files/presupuesto/09.%202016/10%20OCTUBRE/Ctas%20por%20pagar%20Octubre%202016.pdf',
              },
              {
                id: 38,
                tipo: 'pdf',
                nombre: 'Gastos Octubre 2016.pdf',
                url: 'assets/files/presupuesto/09.%202016/10%20OCTUBRE/Gastos%20Octubre%202016.pdf',
              },
              {
                id: 39,
                tipo: 'pdf',
                nombre: 'Ingresos Octubre 2016.pdf',
                url: 'assets/files/presupuesto/09.%202016/10%20OCTUBRE/Ingresos%20Octubre%202016.pdf',
              },
              {
                id: 40,
                tipo: 'pdf',
                nombre: 'Reservas Octubre 2016.pdf',
                url: 'assets/files/presupuesto/09.%202016/10%20OCTUBRE/Reservas%20Octubre%202016.pdf',
              },
            ],
          },
          {
            id: 11,
            nombre: 'NOVIEMBRE',
            files: [
              {
                id: 41,
                tipo: 'pdf',
                nombre: 'Ctas por pagar Noviembre 2016.pdf',
                url: 'assets/files/presupuesto/09.%202016/11%20NOVIEMBRE/Ctas%20por%20pagar%20Noviembre%202016.pdf',
              },
              {
                id: 42,
                tipo: 'pdf',
                nombre: 'Gastos Noviembre 2016.pdf',
                url: 'assets/files/presupuesto/09.%202016/11%20NOVIEMBRE/Gastos%20Noviembre%202016.pdf',
              },
              {
                id: 43,
                tipo: 'pdf',
                nombre: 'Ingresos Noviembre 2016.pdf',
                url: 'assets/files/presupuesto/09.%202016/11%20NOVIEMBRE/Ingresos%20Noviembre%202016.pdf',
              },
              {
                id: 44,
                tipo: 'pdf',
                nombre: 'Reservas Noviembre 2016.pdf',
                url: 'assets/files/presupuesto/09.%202016/11%20NOVIEMBRE/Reservas%20Noviembre%202016.pdf',
              },
            ],
          },
          {
            id: 12,
            nombre: 'DICIEMBRE',
            files: [
              {
                id: 45,
                tipo: 'pdf',
                nombre: 'Ctas por pagar Diciembre 2016.pdf',
                url: 'assets/files/presupuesto/09.%202016/12%20DICIEMBRE/Ctas%20por%20pagar%20Diciembre%202016.pdf',
              },
              {
                id: 46,
                tipo: 'pdf',
                nombre: 'Gastos Diciembre 2016.pdf',
                url: 'assets/files/presupuesto/09.%202016/12%20DICIEMBRE/Gastos%20Diciembre%202016.pdf',
              },
              {
                id: 47,
                tipo: 'pdf',
                nombre: 'Ingresos Diciembre 2016.pdf',
                url: 'assets/files/presupuesto/09.%202016/12%20DICIEMBRE/Ingresos%20Diciembre%202016.pdf',
              },
              {
                id: 48,
                tipo: 'pdf',
                nombre: 'Reservas Diciembre 2016.pdf',
                url: 'assets/files/presupuesto/09.%202016/12%20DICIEMBRE/Reservas%20Diciembre%202016.pdf',
              },
            ],
          },
        ],
      },

      {
        id: 1,
        nombre: '2015',
        acordion: [
          {
            id: 1,
            nombre: 'ENERO',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'Ctas por pagar Enero 2015.pdf',
                url: 'assets/files/presupuesto/10.%202015/01%20ENERO/Ctas%20por%20pagar%20Enero%202015.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre: 'Gastos Enero 2015.pdf',
                url: 'assets/files/presupuesto/10.%202015/01%20ENERO/Gastos%20Enero%202015.pdf',
              },
              {
                id: 3,
                tipo: 'pdf',
                nombre: 'Ingresos Enero 2015.pdf',
                url: 'assets/files/presupuesto/10.%202015/01%20ENERO/Ingresos%20Enero%202015.pdf',
              },
              {
                id: 4,
                tipo: 'pdf',
                nombre: 'Reservas Enero 2015.pdf',
                url: 'assets/files/presupuesto/10.%202015/01%20ENERO/Reservas%20Enero%202015.pdf',
              },
            ],
          },
          {
            id: 2,
            nombre: 'FEBRERO',
            files: [
              {
                id: 5,
                tipo: 'pdf',
                nombre: 'Ctas por pagar Febrero 2015.pdf',
                url: 'assets/files/presupuesto/10.%202015/02%20FEBRERO/Ctas%20por%20pagar%20Febrero%202015.pdf',
              },
              {
                id: 6,
                tipo: 'pdf',
                nombre: 'Gastos Febrero 2015.pdf',
                url: 'assets/files/presupuesto/10.%202015/02%20FEBRERO/Gastos%20Febrero%202015.pdf',
              },
              {
                id: 7,
                tipo: 'pdf',
                nombre: 'Ingresos Febrero 2015.pdf',
                url: 'assets/files/presupuesto/10.%202015/02%20FEBRERO/Ingresos%20Febrero%202015.pdf',
              },
              {
                id: 8,
                tipo: 'pdf',
                nombre: 'Reservas Febrero 2015.pdf',
                url: 'assets/files/presupuesto/10.%202015/02%20FEBRERO/Reservas%20Febrero%202015.pdf',
              },
            ],
          },
          {
            id: 3,
            nombre: 'MARZO',
            files: [
              {
                id: 9,
                tipo: 'pdf',
                nombre: 'Ctas por pagar Marzo 2015.pdf',
                url: 'assets/files/presupuesto/10.%202015/03%20MARZO/Ctas%20por%20pagar%20Marzo%202015.pdf',
              },
              {
                id: 10,
                tipo: 'pdf',
                nombre: 'Gastos Marzo 2015.pdf',
                url: 'assets/files/presupuesto/10.%202015/03%20MARZO/Gastos%20Marzo%202015.pdf',
              },
              {
                id: 11,
                tipo: 'pdf',
                nombre: 'Ingresos Marzo 2015.pdf',
                url: 'assets/files/presupuesto/10.%202015/03%20MARZO/Ingresos%20Marzo%202015.pdf',
              },
              {
                id: 12,
                tipo: 'pdf',
                nombre: 'Reservas Marzo 2015.pdf',
                url: 'assets/files/presupuesto/10.%202015/03%20MARZO/Reservas%20Marzo%202015.pdf',
              },
            ],
          },
          {
            id: 4,
            nombre: 'ABRIL',
            files: [
              {
                id: 13,
                tipo: 'pdf',
                nombre: 'Ctas por pagar Abril 2015.pdf',
                url: 'assets/files/presupuesto/10.%202015/04%20ABRIL/Ctas%20por%20pagar%20Abril%202015.pdf',
              },
              {
                id: 14,
                tipo: 'pdf',
                nombre: 'Gastos Abril 2015.pdf',
                url: 'assets/files/presupuesto/10.%202015/04%20ABRIL/Gastos%20Abril%202015.pdf',
              },
              {
                id: 15,
                tipo: 'pdf',
                nombre: 'Ingresos Abril 2015.pdf',
                url: 'assets/files/presupuesto/10.%202015/04%20ABRIL/Ingresos%20Abril%202015.pdf',
              },
              {
                id: 16,
                tipo: 'pdf',
                nombre: 'Reservas Abril 2015.pdf',
                url: 'assets/files/presupuesto/10.%202015/04%20ABRIL/Reservas%20Abril%202015.pdf',
              },
            ],
          },
          {
            id: 5,
            nombre: 'MAYO',
            files: [
              {
                id: 17,
                tipo: 'pdf',
                nombre: 'Ctas por pagar Mayo 2015.pdf',
                url: 'assets/files/presupuesto/10.%202015/05%20MAYO/Ctas%20por%20pagar%20Mayo%202015.pdf',
              },
              {
                id: 18,
                tipo: 'pdf',
                nombre: 'Gastos Mayo 2015.pdf',
                url: 'assets/files/presupuesto/10.%202015/05%20MAYO/Gastos%20Mayo%202015.pdf',
              },
              {
                id: 19,
                tipo: 'pdf',
                nombre: 'Ingresos Mayo 2015.pdf',
                url: 'assets/files/presupuesto/10.%202015/05%20MAYO/Ingresos%20Mayo%202015.pdf',
              },
              {
                id: 20,
                tipo: 'pdf',
                nombre: 'Reservas Mayo 2015.pdf',
                url: 'assets/files/presupuesto/10.%202015/05%20MAYO/Reservas%20Mayo%202015.pdf',
              },
            ],
          },
          {
            id: 6,
            nombre: 'JUNIO',
            files: [
              {
                id: 21,
                tipo: 'pdf',
                nombre: 'Ctas por pagar Junio 2015.pdf',
                url: 'assets/files/presupuesto/10.%202015/06%20JUNIO/Ctas%20por%20pagar%20Junio%202015.pdf',
              },
              {
                id: 22,
                tipo: 'pdf',
                nombre: 'Gastos Junio 2015.pdf',
                url: 'assets/files/presupuesto/10.%202015/06%20JUNIO/Gastos%20Junio%202015.pdf',
              },
              {
                id: 23,
                tipo: 'pdf',
                nombre: 'Ingresos Junio 2015.pdf',
                url: 'assets/files/presupuesto/10.%202015/06%20JUNIO/Ingresos%20Junio%202015.pdf',
              },
              {
                id: 24,
                tipo: 'pdf',
                nombre: 'Reservas Junio 2015.pdf',
                url: 'assets/files/presupuesto/10.%202015/06%20JUNIO/Reservas%20Junio%202015.pdf',
              },
            ],
          },
          {
            id: 7,
            nombre: 'JULIO',
            files: [
              {
                id: 25,
                tipo: 'pdf',
                nombre: 'Ctas por pagar Julio 2015.pdf',
                url: 'assets/files/presupuesto/10.%202015/07%20JULIO/Ctas%20por%20pagar%20Julio%202015.pdf',
              },
              {
                id: 26,
                tipo: 'pdf',
                nombre: 'Gastos Julio 2015.pdf',
                url: 'assets/files/presupuesto/10.%202015/07%20JULIO/Gastos%20Julio%202015.pdf',
              },
              {
                id: 27,
                tipo: 'pdf',
                nombre: 'Ingresos Julio 2015.pdf',
                url: 'assets/files/presupuesto/10.%202015/07%20JULIO/Ingresos%20Julio%202015.pdf',
              },
              {
                id: 28,
                tipo: 'pdf',
                nombre: 'Reservas Julio 2015.pdf',
                url: 'assets/files/presupuesto/10.%202015/07%20JULIO/Reservas%20Julio%202015.pdf',
              },
            ],
          },
          {
            id: 8,
            nombre: 'AGOSTO',
            files: [
              {
                id: 29,
                tipo: 'pdf',
                nombre: 'Ctas por pagar Agosto 2015.pdf',
                url: 'assets/files/presupuesto/10.%202015/08%20AGOSTO/Ctas%20por%20pagar%20Agosto%202015.pdf',
              },
              {
                id: 30,
                tipo: 'pdf',
                nombre: 'Gastos Agosto 2015.pdf',
                url: 'assets/files/presupuesto/10.%202015/08%20AGOSTO/Gastos%20Agosto%202015.pdf',
              },
              {
                id: 31,
                tipo: 'pdf',
                nombre: 'Ingresos Agosto 2015.pdf',
                url: 'assets/files/presupuesto/10.%202015/08%20AGOSTO/Ingresos%20Agosto%202015.pdf',
              },
              {
                id: 32,
                tipo: 'pdf',
                nombre: 'Reservas Agosto 2015.pdf',
                url: 'assets/files/presupuesto/10.%202015/08%20AGOSTO/Reservas%20Agosto%202015.pdf',
              },
            ],
          },
          {
            id: 9,
            nombre: 'SEPTIEMBRE',
            files: [
              {
                id: 33,
                tipo: 'pdf',
                nombre: 'Ctas por pagar Septiembre 2015.pdf',
                url: 'assets/files/presupuesto/10.%202015/09%20SEPTIEMBRE/Ctas%20por%20pagar%20Septiembre%202015.pdf',
              },
              {
                id: 34,
                tipo: 'pdf',
                nombre: 'Gastos Septiembre 2015.pdf',
                url: 'assets/files/presupuesto/10.%202015/09%20SEPTIEMBRE/Gastos%20Septiembre%202015.pdf',
              },
              {
                id: 35,
                tipo: 'pdf',
                nombre: 'Ingresos Septiembre 2015.pdf',
                url: 'assets/files/presupuesto/10.%202015/09%20SEPTIEMBRE/Ingresos%20Septiembre%202015.pdf',
              },
              {
                id: 36,
                tipo: 'pdf',
                nombre: 'Reservas Septiembre 2015.pdf',
                url: 'assets/files/presupuesto/10.%202015/09%20SEPTIEMBRE/Reservas%20Septiembre%202015.pdf',
              },
            ],
          },
          {
            id: 10,
            nombre: 'OCTUBRE',
            files: [
              {
                id: 37,
                tipo: 'pdf',
                nombre: 'Ctas por pagar Octubre 2015.pdf',
                url: 'assets/files/presupuesto/10.%202015/10%20OCTUBRE/Ctas%20por%20pagar%20Octubre%202015.pdf',
              },
              {
                id: 38,
                tipo: 'pdf',
                nombre: 'Gastos Octubre 2015.pdf',
                url: 'assets/files/presupuesto/10.%202015/10%20OCTUBRE/Gastos%20Octubre%202015.pdf',
              },
              {
                id: 39,
                tipo: 'pdf',
                nombre: 'Ingresos Octubre 2015.pdf',
                url: 'assets/files/presupuesto/10.%202015/10%20OCTUBRE/Ingresos%20Octubre%202015.pdf',
              },
              {
                id: 40,
                tipo: 'pdf',
                nombre: 'Reservas Octubre 2015.pdf',
                url: 'assets/files/presupuesto/10.%202015/10%20OCTUBRE/Reservas%20Octubre%202015.pdf',
              },
            ],
          },
          {
            id: 11,
            nombre: 'NOVIEMBRE',
            files: [
              {
                id: 41,
                tipo: 'pdf',
                nombre: 'Ctas por pagar Noviembre 2015.pdf',
                url: 'assets/files/presupuesto/10.%202015/11%20NOVIEMBRE/Ctas%20por%20pagar%20Noviembre%202015.pdf',
              },
              {
                id: 42,
                tipo: 'pdf',
                nombre: 'Gastos Noviembre 2015.pdf',
                url: 'assets/files/presupuesto/10.%202015/11%20NOVIEMBRE/Gastos%20Noviembre%202015.pdf',
              },
              {
                id: 43,
                tipo: 'pdf',
                nombre: 'Ingresos Noviembre 2015.pdf',
                url: 'assets/files/presupuesto/10.%202015/11%20NOVIEMBRE/Ingresos%20Noviembre%202015.pdf',
              },
              {
                id: 44,
                tipo: 'pdf',
                nombre: 'Reservas Noviembre 2015.pdf',
                url: 'assets/files/presupuesto/10.%202015/11%20NOVIEMBRE/Reservas%20Noviembre%202015.pdf',
              },
            ],
          },
          {
            id: 12,
            nombre: 'DICIEMBRE',
            files: [
              {
                id: 45,
                tipo: 'pdf',
                nombre: 'Ctas por pagar Diciembre 2015.pdf',
                url: 'assets/files/presupuesto/10.%202015/12%20DICIEMBRE/Ctas%20por%20pagar%20Diciembre%202015.pdf',
              },
              {
                id: 46,
                tipo: 'pdf',
                nombre: 'Gastos Diciembre 2015.pdf',
                url: 'assets/files/presupuesto/10.%202015/12%20DICIEMBRE/Gastos%20Diciembre%202015.pdf',
              },
              {
                id: 47,
                tipo: 'pdf',
                nombre: 'Ingresos Diciembre 2015.pdf',
                url: 'assets/files/presupuesto/10.%202015/12%20DICIEMBRE/Ingresos%20Diciembre%202015.pdf',
              },
              {
                id: 48,
                tipo: 'pdf',
                nombre: 'Reservas Diciembre 2015.pdf',
                url: 'assets/files/presupuesto/10.%202015/12%20DICIEMBRE/Reservas%20Diciembre%202015.pdf',
              },
            ],
          },
        ],
      },
    ];
  }
}
