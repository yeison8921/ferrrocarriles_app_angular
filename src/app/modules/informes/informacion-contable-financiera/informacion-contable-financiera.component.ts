import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import {
  AcordionAnidado,
  AcordionAnidadoFiles,
  AcordionFiles,
} from '../../../interfaces/acordion';

@Component({
  selector: 'app-informacion-contable-financiera',
  standalone: true,
  imports: [NgbAccordionModule, NgFor, NgIf],
  templateUrl: './informacion-contable-financiera.component.html',
  styleUrl: './informacion-contable-financiera.component.css',
})
export class InformacionContableFinancieraComponent {
  regex = /^[0-9]*$/;
  presupuesto: AcordionAnidadoFiles[] = [];
  estadosFinancieros: AcordionAnidado[] = [];
  informacionContaduria: AcordionFiles[] = [];
  informacionSalud: AcordionFiles[] = [];
  constructor() {
    this.presupuesto = [
      {
        id: 20,
        nombre: '2025',
        acordion: [
          {
            id: 1,
            nombre: 'Enero',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'REP_EPG034_EjecucionPresupuestal VIGENCIA INGRESOS DECRETO LIQUIDACION A ENERO 31 2025- 2025-02-03-.pdf',
                url: '/assets/files/presupuesto/2025/ENERO/REP_EPG034_EjecucionPresupuestal VIGENCIA INGRESOS DECRETO LIQUIDACION A ENERO 31 2025- 2025-02-03-.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre: 'REP_EPG034_EjecucionPresupuestal RESERVA DECRETO LIQUIDACION A ENERO 31 2025- 2025-02-03-.pdf',
                url: '/assets/files/presupuesto/2025/ENERO/REP_EPG034_EjecucionPresupuestal RESERVA DECRETO LIQUIDACION A ENERO 31 2025- 2025-02-03-.pdf',
              },
              {
                id: 3,
                tipo: 'pdf',
                nombre: 'REP_EPG034_EjecucionPresupuestal CUENTAS POR PAGAR DECRETO LIQUIDACION A ENERO 31 2025- 2025-02-03-.pdf',
                url: '/assets/files/presupuesto/2025/ENERO/REP_EPG034_EjecucionPresupuestal CUENTAS POR PAGAR DECRETO LIQUIDACION A ENERO 31 2025- 2025-02-03-.pdf',
              },
              {
                id: 4,
                tipo: 'pdf',
                nombre: 'REP_EPG034_EjecucionPresupuestal DECRETO LIQUIDACION A 31 ENERO 2025 - 2025-02-03-.pdf',
                url: '/assets/files/presupuesto/2025/ENERO/REP_EPG034_EjecucionPresupuestal DECRETO LIQUIDACION A 31 ENERO 2025 - 2025-02-03-.pdf',
              },
            ],
          }
          
        ]
      },
      {
        id: 1,
        nombre: '2024',
        acordion: [
          {
            id: 1,
            nombre: 'Enero',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'Ejecucion Presupuestal  GASTO.pdf',
                url: '/assets/files/presupuesto/01. 2024/01 Enero/Ejecucion Presupuestal  GASTO.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre: 'EjecucionPresupuestalAgregada  Reservas.pdf',
                url: '/assets/files/presupuesto/01. 2024/01 Enero/EjecucionPresupuestalAgregada  Reservas.pdf',
              },
              {
                id: 3,
                tipo: 'pdf',
                nombre: 'EjecucionPresupuestalAgregada Cuentas x Pagar.pdf',
                url: '/assets/files/presupuesto/01. 2024/01 Enero/EjecucionPresupuestalAgregada Cuentas x Pagar.pdf',
              },
            ],
          },
          {
            id: 2,
            nombre: 'Febrero',
            files: [
              {
                id: 4,
                tipo: 'pdf',
                nombre: 'EjecucionPresupuestal    Reserva.pdf',
                url: '/assets/files/presupuesto/01. 2024/02 Febrero/EjecucionPresupuestal    Reserva.pdf',
              },
              {
                id: 5,
                tipo: 'pdf',
                nombre:
                  'InformeEjecucionPresupuestal -PENSION INGRESOS FEBRERO (1).pdf',
                url: '/assets/files/presupuesto/01. 2024/02 Febrero/InformeEjecucionPresupuestal -PENSION INGRESOS FEBRERO (1).pdf',
              },
              {
                id: 6,
                tipo: 'pdf',
                nombre: '_EjecucionPresupuestal    CXP.pdf',
                url: '/assets/files/presupuesto/01. 2024/02 Febrero/_EjecucionPresupuestal    CXP.pdf',
              },
              {
                id: 7,
                tipo: 'pdf',
                nombre: '_EjecucionPresupuestal  Gasto.pdf',
                url: '/assets/files/presupuesto/01. 2024/02 Febrero/_EjecucionPresupuestal  Gasto.pdf',
              },
            ],
          },
          {
            id: 3,
            nombre: 'Marzo',
            files: [
              {
                id: 8,
                tipo: 'pdf',
                nombre: 'INGRESOS (1).pdf',
                url: '/assets/files/presupuesto/01. 2024/03 Marzo/INGRESOS (1).pdf',
              },
              {
                id: 9,
                tipo: 'pdf',
                nombre: '_EjecucionPresupuestal  CXP (1).pdf',
                url: '/assets/files/presupuesto/01. 2024/03 Marzo/_EjecucionPresupuestal  CXP (1).pdf',
              },
              {
                id: 10,
                tipo: 'pdf',
                nombre: '_EjecucionPresupuestal  Reserva (1).pdf',
                url: '/assets/files/presupuesto/01. 2024/03 Marzo/_EjecucionPresupuestal  Reserva (1).pdf',
              },
              {
                id: 11,
                tipo: 'pdf',
                nombre: '_EjecucionPresupuestal Gasto (1).pdf',
                url: '/assets/files/presupuesto/01. 2024/03 Marzo/_EjecucionPresupuestal Gasto (1).pdf',
              },
            ],
          },
          {
            id: 4,
            nombre: 'Abril',
            files: [
              {
                id: 12,
                tipo: 'excel',
                nombre:
                  '_EjecucionPresupuestalAgregada   Cuentas  por  Pagar.xlsx',
                url: '/assets/files/presupuesto/01. 2024/04 Abril/_EjecucionPresupuestalAgregada   Cuentas  por  Pagar.xlsx',
              },
              {
                id: 13,
                tipo: 'excel',
                nombre: '_EjecucionPresupuestalAgregada   Reserva.xlsx',
                url: '/assets/files/presupuesto/01. 2024/04 Abril/_EjecucionPresupuestalAgregada   Reserva.xlsx',
              },
              {
                id: 14,
                tipo: 'excel',
                nombre: '_EjecucionPresupuestalAgregada  Gasto.xlsx',
                url: '/assets/files/presupuesto/01. 2024/04 Abril/_EjecucionPresupuestalAgregada  Gasto.xlsx',
              },
            ],
          },
          {
            id: 5,
            nombre: 'Mayo',
            files: [
              {
                id: 15,
                tipo: 'pdf',
                nombre:
                  'REP_EPG034_EjecucionPresupuestal CUENTAS POR PAGAR 2023 A MAYO DECRETO LIQUIDACION - REPORTE DEL 2024-07-24 (1).pdf',
                url: '/assets/files/presupuesto/01. 2024/05 Mayo/REP_EPG034_EjecucionPresupuestal CUENTAS POR PAGAR 2023 A MAYO DECRETO LIQUIDACION - REPORTE DEL 2024-07-24 (1).pdf',
              },
              {
                id: 16,
                tipo: 'pdf',
                nombre:
                  'REP_EPG034_EjecucionPresupuestal RESERVAS 2023 A MAYO DECRETO LIQUIDACION - REPORTE DEL 2024-07-24 (1).pdf',
                url: '/assets/files/presupuesto/01. 2024/05 Mayo/REP_EPG034_EjecucionPresupuestal RESERVAS 2023 A MAYO DECRETO LIQUIDACION - REPORTE DEL 2024-07-24 (1).pdf',
              },
              {
                id: 17,
                tipo: 'pdf',
                nombre:
                  'REP_EPG034_EjecucionPresupuestalDECRETO LIQUIDACION A MAYO 31 - CONSULTA 2024-07-24 (1).pdf',
                url: '/assets/files/presupuesto/01. 2024/05 Mayo/REP_EPG034_EjecucionPresupuestalDECRETO LIQUIDACION A MAYO 31 - CONSULTA 2024-07-24 (1).pdf',
              },
              {
                id: 18,
                tipo: 'pdf',
                nombre:
                  'REP_ING031_InformeEjecucionPresupuestal ffnn ingresos decreto liquidacion a mayo 2024 (1).pdf',
                url: '/assets/files/presupuesto/01. 2024/05 Mayo/REP_ING031_InformeEjecucionPresupuestal ffnn ingresos decreto liquidacion a mayo 2024 (1).pdf',
              },
            ],
          },
          {
            id: 6,
            nombre: 'Junio',
            files: [
              {
                id: 19,
                tipo: 'pdf',
                nombre:
                  'REP_EPG034_EjecucionPresupuestalDECRETO LIQUIDACION A JUNIO 30 - CONSULTA 2024-07-24--- (1).pdf',
                url: '/assets/files/presupuesto/01. 2024/06 Junio/REP_EPG034_EjecucionPresupuestalDECRETO LIQUIDACION A JUNIO 30 - CONSULTA 2024-07-24--- (1).pdf',
              },
              {
                id: 20,
                tipo: 'pdf',
                nombre:
                  'REP_EPG034_EjecucionPresupuestalDECRETO LIQUIDACION CUENTAS POR PAGAR A JUNIO 30 REPORTE DEL - 2024-07-24 (1).pdf',
                url: '/assets/files/presupuesto/01. 2024/06 Junio/REP_EPG034_EjecucionPresupuestalDECRETO LIQUIDACION CUENTAS POR PAGAR A JUNIO 30 REPORTE DEL - 2024-07-24 (1).pdf',
              },
              {
                id: 21,
                tipo: 'pdf',
                nombre:
                  'REP_EPG034_EjecucionPresupuestalDECRETO LIQUIDACION RESERVAS A JUNIO 30 REPORTE DEL - 2024-07-24 (1).pdf',
                url: '/assets/files/presupuesto/01. 2024/06 Junio/REP_EPG034_EjecucionPresupuestalDECRETO LIQUIDACION RESERVAS A JUNIO 30 REPORTE DEL - 2024-07-24 (1).pdf',
              },
              {
                id: 22,
                tipo: 'pdf',
                nombre:
                  'REP_ING031_InformeEjecucionPresupuestal FFNN INGRESOS DECRETO LIQUIDACION A JUNIO 2024 (1).pdf',
                url: '/assets/files/presupuesto/01. 2024/06 Junio/REP_ING031_InformeEjecucionPresupuestal FFNN INGRESOS DECRETO LIQUIDACION A JUNIO 2024 (1).pdf',
              },
            ],
          },
          {
            id: 7,
            nombre: 'Julio',
            files: [
              {
                id: 23,
                tipo: 'pdf',
                nombre: 'EJECUCION   CUENTAS X PAGAR A JULIO.pdf',
                url: '/assets/files/presupuesto/01. 2024/07 Julio/EJECUCION   CUENTAS X PAGAR A JULIO.pdf',
              },
              {
                id: 24,
                tipo: 'pdf',
                nombre: 'EJECUCION  RESERVAS A JULIO.pdf',
                url: '/assets/files/presupuesto/01. 2024/07 Julio/EJECUCION  RESERVAS A JULIO.pdf',
              },
              {
                id: 25,
                tipo: 'pdf',
                nombre: 'EJECUCION DE INGRESOS JULIO.pdf',
                url: '/assets/files/presupuesto/01. 2024/07 Julio/EJECUCION DE INGRESOS JULIO.pdf',
              },
              {
                id: 26,
                tipo: 'pdf',
                nombre: 'EJECUCION GASTO MES DE JULIO.pdf',
                url: '/assets/files/presupuesto/01. 2024/07 Julio/EJECUCION GASTO MES DE JULIO.pdf',
              },
            ],
          },
          {
            id: 8,
            nombre: 'Agosto',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'EJECUCION DE CUENTAS XPAGAR A AGOSTO 31 2024.pdf',
                url: '/assets/files/presupuesto/01. 2024/08 Agosto/EJECUCION DE  CUENTAS XPAGAR  A AGOSTO 31 2024.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre: 'EJECUCION DE GASTO MES DE AGOSTO 31 2024.pdf',
                url: '/assets/files/presupuesto/01. 2024/08 Agosto/EJECUCION DE GASTO MES DE AGOSTO 31 2024.pdf',
              },
              {
                id: 3,
                tipo: 'pdf',
                nombre: 'EJECUCION DE INGRESOS AGOSTO 31 (1).pdf',
                url: '/assets/files/presupuesto/01. 2024/08 Agosto/EJECUCION DE INGRESOS  AGOSTO 31 (1).pdf',
              },
              {
                id: 4,
                tipo: 'pdf',
                nombre: 'EJECUCION DE RESERVAS A AGOSTO 31 2024.pdf',
                url: '/assets/files/presupuesto/01. 2024/08 Agosto/EJECUCION DE RESERVAS  A AGOSTO 31 2024.pdf',
              },
            ],
          },
          {
            id: 9,
            nombre: 'Septiembre',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre:
                  'EJECUCION VIGENCIA DECRETO LIQUIDACION FFNN A SEPT 30 2024- (1).pdf',
                url: '/assets/files/presupuesto/01. 2024/09 Septiembre/EJECUCION VIGENCIA DECRETO LIQUIDACION FFNN A SEPT 30 2024- (1).pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre:
                  'InformeEjecucionPresupuestal INGRESOSFFNN DECRETO LIQUIDACION A SEPT 30 2024)-.pdf',
                url: '/assets/files/presupuesto/01. 2024/09 Septiembre/InformeEjecucionPresupuestal INGRESOSFFNN DECRETO LIQUIDACION A SEPT 30 2024)-.pdf',
              },
              {
                id: 3,
                tipo: 'pdf',
                nombre:
                  'REP_EPG034_EjecucionPresupuestalAgregada CUENTAS POR PAGAR DECRETO LIQUIDACION A SEPT 30-.pdf',
                url: '/assets/files/presupuesto/01. 2024/09 Septiembre/REP_EPG034_EjecucionPresupuestalAgregada CUENTAS POR PAGAR DECRETO LIQUIDACION A SEPT 30-.pdf',
              },
              {
                id: 4,
                tipo: 'pdf',
                nombre:
                  'REP_EPG034_EjecucionPresupuestalAgregada RESERVAS DECRETO LIQUIDACION A SEPT 30-.pdf',
                url: '/assets/files/presupuesto/01. 2024/09 Septiembre/REP_EPG034_EjecucionPresupuestalAgregada RESERVAS DECRETO LIQUIDACION A SEPT 30-.pdf',
              },
            ],
          },
          {
            id: 10,
            nombre: 'Octubre',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre:
                  'EjecucionPresupuestal FFNN CXP DECRETO LIQUIDACION A OCT 31  WEB- (1).pdf',
                url: '/assets/files/presupuesto/01. 2024/10 Octubre/EjecucionPresupuestal FFNN CXP DECRETO LIQUIDACION A OCT 31  WEB- (1).pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre:
                  'EjecucionPresupuestal RESERVAS DECRETO LIQUIDACION A OCT 31  WEB- (1).pdf',
                url: '/assets/files/presupuesto/01. 2024/10 Octubre/EjecucionPresupuestal RESERVAS DECRETO LIQUIDACION A OCT 31  WEB- (1).pdf',
              },
              {
                id: 3,
                tipo: 'pdf',
                nombre:
                  'EjecucionPresupuestal VIGENCIA DECRETO LIQUIDACION  A OCT 31  - 2024-11-01 WEB- (1).pdf',
                url: '/assets/files/presupuesto/01. 2024/10 Octubre/EjecucionPresupuestal VIGENCIA DECRETO LIQUIDACION  A OCT 31  - 2024-11-01 WEB- (1).pdf',
              },
              {
                id: 4,
                tipo: 'pdf',
                nombre:
                  'InformeEjecucion INGRESOS FFNN  A OCTUBRE 31 DECRETO LIQUIDACION WEB- (1).pdf',
                url: '/assets/files/presupuesto/01. 2024/10 Octubre/InformeEjecucion INGRESOS FFNN  A OCTUBRE 31 DECRETO LIQUIDACION WEB- (1).pdf',
              },
            ],
          },
          {
            id: 11,
            nombre: 'Noviembre',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre:
                  'REP_EPG034_EjecucionPresupuestal CXP DECRETO LIQUIDACION  - 2024-12-02 A NOV 30-.pdf',
                url: '/assets/files/presupuesto/01. 2024/11 Noviembre/REP_EPG034_EjecucionPresupuestal CXP DECRETO LIQUIDACION  - 2024-12-02 A NOV 30-.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre:
                  'REP_EPG034_EjecucionPresupuestal RESERVAS DECRETO LIQUIDACION - 2024-12-02 A NOV 30-.pdf',
                url: '/assets/files/presupuesto/01. 2024/11 Noviembre/REP_EPG034_EjecucionPresupuestal RESERVAS DECRETO LIQUIDACION - 2024-12-02 A NOV 30-.pdf',
              },
              {
                id: 3,
                tipo: 'pdf',
                nombre:
                  'REP_EPG034_EjecucionPresupuestal VIGENCIA A NOV 30 FFNN DECRETO LIQUIDACION - 2024-12-02-.pdf',
                url: '/assets/files/presupuesto/01. 2024/11 Noviembre/REP_EPG034_EjecucionPresupuestal VIGENCIA A NOV 30 FFNN DECRETO LIQUIDACION - 2024-12-02-.pdf',
              },
              {
                id: 4,
                tipo: 'pdf',
                nombre:
                  'REP_ING031_InformeEjecucionINGRESOS A NOV 30 2024 DECRETO LIQUIDACION-.pdf',
                url: '/assets/files/presupuesto/01. 2024/11 Noviembre/REP_ING031_InformeEjecucionINGRESOS A NOV 30 2024 DECRETO LIQUIDACION-.pdf',
              },
            ],
          },
          {
            id: 12,
            nombre: 'Diciembre',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre:
                  'EJECUCION PRESUPUESTAL VIGENCIA DECRETO DE LIQUIDACION A DIC 31 2024 EXTR ENERO 18 25-.pdf',
                url: '/assets/files/presupuesto/01. 2024/12 Diciembre/EJECUCION PRESUPUESTAL VIGENCIA DECRETO DE LIQUIDACION A DIC 31 2024 EXTR ENERO 18 25-.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre:
                  'REP_EPG034_EjecucionPresupuestal CXP DECRETO LIQUIDACION  - 2025-01-02 A DICIEMBRE 31-.pdf',
                url: '/assets/files/presupuesto/01. 2024/12 Diciembre/REP_EPG034_EjecucionPresupuestal CXP DECRETO LIQUIDACION  - 2025-01-02 A DICIEMBRE 31-.pdf',
              },
              {
                id: 3,
                tipo: 'pdf',
                nombre:
                  'REP_EPG034_EjecucionPresupuestal RESERVAS DECRETO DE LIQUIDACION - A 31 DIC 2024 EXTRAIDA ENERO 28 2025-.pdf',
                url: '/assets/files/presupuesto/01. 2024/12 Diciembre/REP_EPG034_EjecucionPresupuestal RESERVAS DECRETO DE LIQUIDACION - A 31 DIC 2024 EXTRAIDA ENERO 28 2025-.pdf',
              },
              {
                id: 4,
                tipo: 'pdf',
                nombre:
                  'REP_ING031_InformeEjecucion INGRESOS VIGENCIA DECRETO LIQUIDACION DIC 31 2024 EXTRAIDA EN ENERO 27 2025-.pdf',
                url: '/assets/files/presupuesto/01. 2024/12 Diciembre/REP_ING031_InformeEjecucion INGRESOS VIGENCIA DECRETO LIQUIDACION DIC 31 2024 EXTRAIDA EN ENERO 27 2025-.pdf',
              },
            ],
          },
        ],
      },
      {
        id: 2,
        nombre: '2023',
        acordion: [
          {
            id: 1,
            nombre: 'Enero',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'Ejecución Cuentas por Pagar Enero_2023.pdf',
                url: '/assets/files/presupuesto/02. 2023/01 ENERO/Ejecución Cuentas por Pagar Enero_2023.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre: 'Ejecución Gastos Enero_2023 x.pdf',
                url: '/assets/files/presupuesto/02. 2023/01 ENERO/Ejecución Gastos Enero_2023 x.pdf',
              },
              {
                id: 3,
                tipo: 'pdf',
                nombre: 'Ejecución Ingresos Enero_2023.pdf',
                url: '/assets/files/presupuesto/02. 2023/01 ENERO/Ejecución Ingresos Enero_2023.pdf',
              },
              {
                id: 4,
                tipo: 'pdf',
                nombre: 'Ejecución Reservas Enero_2023.pdf',
                url: '/assets/files/presupuesto/02. 2023/01 ENERO/Ejecución Reservas Enero_2023.pdf',
              },
            ],
          },
          {
            id: 2,
            nombre: 'Febrero',
            files: [
              {
                id: 5,
                tipo: 'pdf',
                nombre: 'Ejecución Cuentas por Pagar Febrero_2023.pdf',
                url: '/assets/files/presupuesto/02. 2023/02 FEBRERO/Ejecución Cuentas por Pagar Febrero_2023.pdf',
              },
              {
                id: 6,
                tipo: 'pdf',
                nombre: 'Ejecución Gastos Febrero_2023.pdf',
                url: '/assets/files/presupuesto/02. 2023/02 FEBRERO/Ejecución Gastos Febrero_2023.pdf',
              },
              {
                id: 7,
                tipo: 'pdf',
                nombre: 'Ejecución Ingresos Febrero_2023.pdf',
                url: '/assets/files/presupuesto/02. 2023/02 FEBRERO/Ejecución Ingresos Febrero_2023.pdf',
              },
              {
                id: 8,
                tipo: 'pdf',
                nombre: 'Ejecución Reservas Febrero_2023.pdf',
                url: '/assets/files/presupuesto/02. 2023/02 FEBRERO/Ejecución Reservas Febrero_2023.pdf',
              },
            ],
          },
          {
            id: 3,
            nombre: 'Marzo',
            files: [
              {
                id: 9,
                tipo: 'pdf',
                nombre: 'EJECUCION DE INGRESOS MARZO.pdf',
                url: '/assets/files/presupuesto/02. 2023/03 MARZO/EJECUCION  DE  INGRESOS MARZO.pdf',
              },
              {
                id: 10,
                tipo: 'pdf',
                nombre: 'Ejecución Cuentas por Pagar Marzo_2023 (2).pdf',
                url: '/assets/files/presupuesto/02. 2023/03 MARZO/Ejecución Cuentas por Pagar Marzo_2023 (2).pdf',
              },
              {
                id: 11,
                tipo: 'pdf',
                nombre: 'Ejecución Gastos Marzo_2023.pdf',
                url: '/assets/files/presupuesto/02. 2023/03 MARZO/Ejecución Gastos Marzo_2023.pdf',
              },
              {
                id: 12,
                tipo: 'pdf',
                nombre: 'Ejecución Reservas Marzo_2023.pdf',
                url: '/assets/files/presupuesto/02. 2023/03 MARZO/Ejecución Reservas Marzo_2023.pdf',
              },
            ],
          },
          {
            id: 4,
            nombre: 'Abril',
            files: [
              {
                id: 13,
                tipo: 'pdf',
                nombre: 'EJECUCION   DE  GASTO  ABRIL.pdf',
                url: '/assets/files/presupuesto/02. 2023/04 ABRIL/EJECUCION   DE  GASTO  ABRIL.pdf',
              },
              {
                id: 14,
                tipo: 'pdf',
                nombre: 'EJECUCION  DE  RESERVAS  ABRIL.pdf',
                url: '/assets/files/presupuesto/02. 2023/04 ABRIL/EJECUCION  DE  RESERVAS  ABRIL.pdf',
              },
              {
                id: 15,
                tipo: 'pdf',
                nombre: 'EJECUCION CUENTAS POR PAGAR  ABRIL.pdf',
                url: '/assets/files/presupuesto/02. 2023/04 ABRIL/EJECUCION CUENTAS POR PAGAR  ABRIL.pdf',
              },
              {
                id: 16,
                tipo: 'pdf',
                nombre: 'EJECUCION INGRESOS ABRIL.pdf',
                url: '/assets/files/presupuesto/02. 2023/04 ABRIL/EJECUCION INGRESOS ABRIL.pdf',
              },
            ],
          },
          {
            id: 5,
            nombre: 'Mayo',
            files: [
              {
                id: 17,
                tipo: 'pdf',
                nombre: 'EJECUCION INGRESOS MAYO.pdf',
                url: '/assets/files/presupuesto/02. 2023/05 MAYO/EJECUCION INGRESOS MAYO.pdf',
              },
              {
                id: 18,
                tipo: 'pdf',
                nombre: 'EjecucionPresupuestal  CUENTAS POR  PAGAR    MAYO.pdf',
                url: '/assets/files/presupuesto/02. 2023/05 MAYO/EjecucionPresupuestal  CUENTAS POR  PAGAR    MAYO.pdf',
              },
              {
                id: 19,
                tipo: 'pdf',
                nombre: 'EjecucionPresupuestalAgregada  GASTO  MAYO  .pdf',
                url: '/assets/files/presupuesto/02. 2023/05 MAYO/EjecucionPresupuestalAgregada  GASTO  MAYO  .pdf',
              },
            ],
          },
          {
            id: 6,
            nombre: 'Junio',
            files: [
              {
                id: 20,
                tipo: 'pdf',
                nombre: 'EJECUCION INGRESOS JUNIO.pdf',
                url: '/assets/files/presupuesto/02. 2023/06 JUNIO/EJECUCION INGRESOS JUNIO.pdf',
              },
              {
                id: 21,
                tipo: 'pdf',
                nombre: 'EjecucionPresupuestalAgregadA  RESERVA  JUNIO.pdf',
                url: '/assets/files/presupuesto/02. 2023/06 JUNIO/EjecucionPresupuestalAgregadA  RESERVA  JUNIO.pdf',
              },
              {
                id: 22,
                tipo: 'pdf',
                nombre:
                  'EjecucionPresupuestalAgregada   CUENTAS  POR  PAGAR.pdf',
                url: '/assets/files/presupuesto/02. 2023/06 JUNIO/EjecucionPresupuestalAgregada   CUENTAS  POR  PAGAR.pdf',
              },
              {
                id: 23,
                tipo: 'pdf',
                nombre:
                  'EjecucionPresupuestalAgregada   DEL  GASTO   JUNIO.pdf',
                url: '/assets/files/presupuesto/02. 2023/06 JUNIO/EjecucionPresupuestalAgregada   DEL  GASTO   JUNIO.pdf',
              },
            ],
          },
          {
            id: 7,
            nombre: 'Julio',
            files: [
              {
                id: 24,
                tipo: 'pdf',
                nombre: 'CUENTAS POR PAGAR JULIO AÑO FISCAL 2023.pdf',
                url: '/assets/files/presupuesto/02. 2023/07 JULIO/CUENTAS  POR    PAGAR  JULIO  AÑO  FISCAL  2023.pdf',
              },
              {
                id: 25,
                tipo: 'pdf',
                nombre: 'GASTO JULIO AÑO FISCAL 2023.pdf',
                url: '/assets/files/presupuesto/02. 2023/07 JULIO/GASTO JULIO AÑO  FISCAL  2023.pdf',
              },
              {
                id: 26,
                tipo: 'pdf',
                nombre: 'RESERVAS JULIO AÑO FISCAL 2023.pdf',
                url: '/assets/files/presupuesto/02. 2023/07 JULIO/RESERVAS  JULIO  AÑO  FISCAL  2023.pdf',
              },
              {
                id: 27,
                tipo: 'pdf',
                nombre: 'ejecuccion de ingresos.pdf',
                url: '/assets/files/presupuesto/02. 2023/07 JULIO/ejecuccion de ingresos.pdf',
              },
            ],
          },
          {
            id: 8,
            nombre: 'Agosto',
            files: [
              {
                id: 28,
                tipo: 'pdf',
                nombre:
                  'EJECUCION DE INGRESOS AGOSTO 2023 DECRETO LIQUIDACION.pdf',
                url: '/assets/files/presupuesto/02. 2023/08 AGOSTO/EJECUCION DE INGRESOS AGOSTO 2023 DECRETO LIQUIDACION.pdf',
              },
              {
                id: 29,
                tipo: 'pdf',
                nombre: 'EjecucionPresupuestal CUENTAS X PAGAR.pdf',
                url: '/assets/files/presupuesto/02. 2023/08 AGOSTO/EjecucionPresupuestal  CUENTAS  X  PAGAR.pdf',
              },
              {
                id: 30,
                tipo: 'pdf',
                nombre: 'EjecucionPresupuestal GASTO.pdf',
                url: '/assets/files/presupuesto/02. 2023/08 AGOSTO/EjecucionPresupuestal  GASTO.pdf',
              },
              {
                id: 31,
                tipo: 'pdf',
                nombre: 'EjecucionPresupuestal RESERVAS.pdf',
                url: '/assets/files/presupuesto/02. 2023/08 AGOSTO/EjecucionPresupuestal  RESERVAS.pdf',
              },
            ],
          },
          {
            id: 9,
            nombre: 'Septiembre',
            files: [
              {
                id: 32,
                tipo: 'pdf',
                nombre: 'CUENTAS X PAGAR MODIFICADA.pdf',
                url: '/assets/files/presupuesto/02. 2023/09 SEPTIEMBRE/CUENTAS X PAGAR MODIFICADA.pdf',
              },
              {
                id: 33,
                tipo: 'pdf',
                nombre:
                  'EJECUCION DE INGRESOS SEPTIEMBRE 2023 DECRETO DE LIQUIDACION.pdf',
                url: '/assets/files/presupuesto/02. 2023/09 SEPTIEMBRE/EJECUCION DE INGRESOS SEPTIEMBRE 2023 DECRETO DE LIQUIDACION.pdf',
              },
              {
                id: 34,
                tipo: 'pdf',
                nombre: 'RESERVAS PRESUPUESTALES MODIFICADA.pdf',
                url: '/assets/files/presupuesto/02. 2023/09 SEPTIEMBRE/RESERVAS PRESUPUESTALES MODIFICADA.pdf',
              },
              {
                id: 35,
                tipo: 'pdf',
                nombre: 'VIEGENCIA ACTUAL MODIFICADA.pdf',
                url: '/assets/files/presupuesto/02. 2023/09 SEPTIEMBRE/VIEGENCIA ACTUAL MODIFICADA.pdf',
              },
            ],
          },
          {
            id: 10,
            nombre: 'Octubre',
            files: [
              {
                id: 36,
                tipo: 'pdf',
                nombre:
                  'EJECUCION INGRESOS OCTUBRE 2023 DECRETO DE LIQUIDACION.pdf',
                url: '/assets/files/presupuesto/02. 2023/10 OCTUBRE/EJECUCION INGRESOS OCTUBRE 2023 DECRETO DE LIQUIDACION.pdf',
              },
              {
                id: 37,
                tipo: 'pdf',
                nombre:
                  'EjecucionPresupuestalAgregada OCTUBRE VIGENCIA ACTUAL.pdf',
                url: '/assets/files/presupuesto/02. 2023/10 OCTUBRE/EjecucionPresupuestalAgregada  OCTUBRE VIGENCIA ACTUAL.pdf',
              },
              {
                id: 38,
                tipo: 'pdf',
                nombre:
                  'EjecucionPresupuestalAgregada Reservas Presupuestales OCTUBRE 2023.pdf',
                url: '/assets/files/presupuesto/02. 2023/10 OCTUBRE/EjecucionPresupuestalAgregada  Reservas Presupuestales OCTUBRE 2023.pdf',
              },
              {
                id: 39,
                tipo: 'pdf',
                nombre:
                  'EjecucionPresupuestalAgregada Cuentas x Pagar OCTUBRE 2023.pdf',
                url: '/assets/files/presupuesto/02. 2023/10 OCTUBRE/EjecucionPresupuestalAgregada Cuentas x Pagar OCTUBRE 2023.pdf',
              },
            ],
          },
          {
            id: 11,
            nombre: 'Noviembre',
            files: [
              {
                id: 40,
                tipo: 'pdf',
                nombre:
                  'EJECUCION INGRESOS NOVIEMBRE DECRETO DE LIQUIDACION 2023 (1).pdf',
                url: '/assets/files/presupuesto/02. 2023/11 NOVIEMBRE/EJECUCION INGRESOS NOVIEMBRE DECRETO DE LIQUIDACION 2023 (1).pdf',
              },
              {
                id: 41,
                tipo: 'pdf',
                nombre:
                  'EjecucionPresupuestalAgregada CUENTAS X PAGAR NOVIEMBRE (1).pdf',
                url: '/assets/files/presupuesto/02. 2023/11 NOVIEMBRE/EjecucionPresupuestalAgregada CUENTAS X PAGAR NOVIEMBRE (1).pdf',
              },
              {
                id: 42,
                tipo: 'pdf',
                nombre:
                  'EjecucionPresupuestalAgregada RESERVAS NOVIEMBRE (1).pdf',
                url: '/assets/files/presupuesto/02. 2023/11 NOVIEMBRE/EjecucionPresupuestalAgregada RESERVAS NOVIEMBRE (1).pdf',
              },
              {
                id: 43,
                tipo: 'pdf',
                nombre:
                  'EjecucionPresupuestalAgregada VIG ACTUAL NOVIEMBRE (1).pdf',
                url: '/assets/files/presupuesto/02. 2023/11 NOVIEMBRE/EjecucionPresupuestalAgregada VIG ACTUAL NOVIEMBRE (1).pdf',
              },
            ],
          },
          {
            id: 12,
            nombre: 'Diciembre',
            files: [
              {
                id: 44,
                tipo: 'pdf',
                nombre: 'GASTO DICIEMBRE AÑO FISCAL 2023.pdf',
                url: '/assets/files/presupuesto/02. 2023/12 DICIEMBRE/GASTO    DICIEMBRE   AÑO  FISCAL   2023.pdf',
              },
              {
                id: 45,
                tipo: 'pdf',
                nombre: 'REP_EPG034_EjecucionPresupuestalAgregada (15).pdf',
                url: '/assets/files/presupuesto/02. 2023/12 DICIEMBRE/REP_EPG034_EjecucionPresupuestalAgregada (15).pdf',
              },
              {
                id: 46,
                tipo: 'pdf',
                nombre: 'RESERVA DICIEMBRE AÑO FISCAL 2023.pdf',
                url: '/assets/files/presupuesto/02. 2023/12 DICIEMBRE/RESERVA   DICIEMBRE   AÑO  FISCAL   2023.pdf',
              },
            ],
          },
        ],
      },
      {
        id: 3,
        nombre: '2022',
        acordion: [
          {
            id: 1,
            nombre: 'Enero',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'Ejecución Cuentas por Pagar Enero_2022.pdf',
                url: '/assets/files/presupuesto/03. 2022/01 ENERO/Ejecución Cuentas por Pagar Enero_2022.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre: 'Ejecución Gastos Enero_2022.pdf',
                url: '/assets/files/presupuesto/03. 2022/01 ENERO/Ejecución Gastos Enero_2022.pdf',
              },
              {
                id: 3,
                tipo: 'pdf',
                nombre: 'Ejecución Ingresos Enero_2022.pdf',
                url: '/assets/files/presupuesto/03. 2022/01 ENERO/Ejecución Ingresos Enero_2022.pdf',
              },
              {
                id: 4,
                tipo: 'pdf',
                nombre: 'Ejecución Reserva Enero_2022.pdf',
                url: '/assets/files/presupuesto/03. 2022/01 ENERO/Ejecución Reserva Enero_2022.pdf',
              },
            ],
          },
          {
            id: 2,
            nombre: 'Febrero',
            files: [
              {
                id: 5,
                tipo: 'pdf',
                nombre: 'Ejecución Cuentas por Pagar Febrero_2022.pdf',
                url: '/assets/files/presupuesto/03. 2022/02 FEBRERO/Ejecución Cuentas por Pagar Febrero_2022.pdf',
              },
              {
                id: 6,
                tipo: 'pdf',
                nombre: 'Ejecución Gastos Febrero_2022.pdf',
                url: '/assets/files/presupuesto/03. 2022/02 FEBRERO/Ejecución Gastos Febrero_2022.pdf',
              },
              {
                id: 7,
                tipo: 'pdf',
                nombre: 'Ejecución Ingresos Febrero_2022.pdf',
                url: '/assets/files/presupuesto/03. 2022/02 FEBRERO/Ejecución Ingresos Febrero_2022.pdf',
              },
              {
                id: 8,
                tipo: 'pdf',
                nombre: 'Ejecución Reserva Febrero_2022.pdf',
                url: '/assets/files/presupuesto/03. 2022/02 FEBRERO/Ejecución Reserva Febrero_2022.pdf',
              },
            ],
          },
          {
            id: 3,
            nombre: 'Marzo',
            files: [
              {
                id: 9,
                tipo: 'pdf',
                nombre: 'Ejecución Cuentas por Pagar Marzo_2022.pdf',
                url: '/assets/files/presupuesto/03. 2022/03 MARZO/Ejecución Cuentas por Pagar Marzo_2022.pdf',
              },
              {
                id: 10,
                tipo: 'pdf',
                nombre: 'Ejecución Gastos Marzo_2022.pdf',
                url: '/assets/files/presupuesto/03. 2022/03 MARZO/Ejecución Gastos Marzo_2022.pdf',
              },
              {
                id: 11,
                tipo: 'pdf',
                nombre: 'Ejecución Reserva Marzo_2022.pdf',
                url: '/assets/files/presupuesto/03. 2022/03 MARZO/Ejecución Reserva Marzo_2022.pdf',
              },
              {
                id: 12,
                tipo: 'pdf',
                nombre: 'Ejecución ingresos Marzo_2022.pdf',
                url: '/assets/files/presupuesto/03. 2022/03 MARZO/Ejecución ingresos Marzo_2022.pdf',
              },
            ],
          },
          {
            id: 4,
            nombre: 'Abril',
            files: [
              {
                id: 13,
                tipo: 'pdf',
                nombre: 'Ejecución Cuentas por Pagar Abril_2022.pdf',
                url: '/assets/files/presupuesto/03. 2022/04 ABRIL/Ejecución Cuentas por Pagar Abril_2022.pdf',
              },
              {
                id: 14,
                tipo: 'pdf',
                nombre: 'Ejecución Gastos Abril_2022.pdf',
                url: '/assets/files/presupuesto/03. 2022/04 ABRIL/Ejecución Gastos Abril_2022.pdf',
              },
              {
                id: 15,
                tipo: 'pdf',
                nombre: 'Ejecución Ingresos Abril_2022.pdf',
                url: '/assets/files/presupuesto/03. 2022/04 ABRIL/Ejecución Ingresos Abril_2022.pdf',
              },
              {
                id: 16,
                tipo: 'pdf',
                nombre: 'Ejecución Reserva Abril_2022.pdf',
                url: '/assets/files/presupuesto/03. 2022/04 ABRIL/Ejecución Reserva Abril_2022.pdf',
              },
            ],
          },
          {
            id: 5,
            nombre: 'Mayo',
            files: [
              {
                id: 17,
                tipo: 'pdf',
                nombre: 'Ejecución Cuentas por Pagar Mayo_2022.pdf',
                url: '/assets/files/presupuesto/03. 2022/05 MAYO/Ejecución Cuentas por Pagar  Mayo_2022.pdf',
              },
              {
                id: 18,
                tipo: 'pdf',
                nombre: 'Ejecución Gastos Mayo_2022.pdf',
                url: '/assets/files/presupuesto/03. 2022/05 MAYO/Ejecución Gastos Mayo_2022.pdf',
              },
              {
                id: 19,
                tipo: 'pdf',
                nombre: 'Ejecución Ingresos Mayo_2022.pdf',
                url: '/assets/files/presupuesto/03. 2022/05 MAYO/Ejecución Ingresos Mayo_2022.pdf',
              },
              {
                id: 20,
                tipo: 'pdf',
                nombre: 'Ejecución Reserva Mayo_2022.pdf',
                url: '/assets/files/presupuesto/03. 2022/05 MAYO/Ejecución Reserva Mayo_2022.pdf',
              },
            ],
          },
          {
            id: 6,
            nombre: 'Junio',
            files: [
              {
                id: 21,
                tipo: 'pdf',
                nombre: 'Ejecución Cuentas por Pagar Junio_2022.pdf',
                url: '/assets/files/presupuesto/03. 2022/06 JUNIO/Ejecución Cuentas por Pagar  Junio_2022.pdf',
              },
              {
                id: 22,
                tipo: 'pdf',
                nombre: 'Ejecución Gastos Junio_2022.pdf',
                url: '/assets/files/presupuesto/03. 2022/06 JUNIO/Ejecución Gastos Junio_2022.pdf',
              },
              {
                id: 23,
                tipo: 'pdf',
                nombre: 'Ejecución Ingresos Junio_2022.pdf',
                url: '/assets/files/presupuesto/03. 2022/06 JUNIO/Ejecución Ingresos Junio_2022.pdf',
              },
              {
                id: 24,
                tipo: 'pdf',
                nombre: 'Ejecución Reserva Junio_2022.pdf',
                url: '/assets/files/presupuesto/03. 2022/06 JUNIO/Ejecución Reserva Junio_2022.pdf',
              },
            ],
          },
          {
            id: 7,
            nombre: 'Julio',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'Ejecución Cuentas por Pagar Julio_2022.pdf',
                url: '/assets/files/presupuesto/03. 2022/07 JULIO/Ejecución Cuentas por Pagar  Julio_2022.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre: 'Ejecución Gastos Julio_2022.pdf',
                url: '/assets/files/presupuesto/03. 2022/07 JULIO/Ejecución Gastos Julio_2022.pdf',
              },
              {
                id: 3,
                tipo: 'pdf',
                nombre: 'Ejecución Ingresos Julio_2022 1.pdf',
                url: '/assets/files/presupuesto/03. 2022/07 JULIO/Ejecución Ingresos  Julio_2022 1.pdf',
              },
              {
                id: 4,
                tipo: 'pdf',
                nombre: 'Ejecución Reserva Julio_2022.pdf',
                url: '/assets/files/presupuesto/03. 2022/07 JULIO/Ejecución Reserva Julio_2022.pdf',
              },
            ],
          },
          {
            id: 8,
            nombre: 'Agosto',
            files: [
              {
                id: 5,
                tipo: 'pdf',
                nombre: 'Ejecución Cuentas por Pagar Agosto_2022 1.pdf',
                url: '/assets/files/presupuesto/03. 2022/08 AGOSTO/Ejecución Cuentas por Pagar Agosto_2022 1.pdf',
              },
              {
                id: 6,
                tipo: 'pdf',
                nombre: 'Ejecución Gastos Agosto_2022 1.pdf',
                url: '/assets/files/presupuesto/03. 2022/08 AGOSTO/Ejecución Gastos Agosto_2022 1.pdf',
              },
              {
                id: 7,
                tipo: 'pdf',
                nombre: 'Ejecución Ingresos Agosto_2022 1.pdf',
                url: '/assets/files/presupuesto/03. 2022/08 AGOSTO/Ejecución Ingresos  Agosto_2022  1.pdf',
              },
              {
                id: 8,
                tipo: 'pdf',
                nombre: 'Ejecución Reservas Agosto_2022 1.pdf',
                url: '/assets/files/presupuesto/03. 2022/08 AGOSTO/Ejecución Reservas Agosto_2022 1.pdf',
              },
            ],
          },
          {
            id: 9,
            nombre: 'Septiembre',
            files: [
              {
                id: 9,
                tipo: 'pdf',
                nombre: 'Ejecución Cuentas por Pagar Septiembre_2022 1.pdf',
                url: '/assets/files/presupuesto/03. 2022/09 SEPTIEMBRE/Ejecución Cuentas por Pagar Septiembre_2022 1.pdf',
              },
              {
                id: 10,
                tipo: 'pdf',
                nombre: 'Ejecución Gastos Septiembre_2022 1.pdf',
                url: '/assets/files/presupuesto/03. 2022/09 SEPTIEMBRE/Ejecución Gastos Septiembre_2022 1.pdf',
              },
              {
                id: 11,
                tipo: 'pdf',
                nombre: 'Ejecución Ingresos Septiembre_2022 1.pdf',
                url: '/assets/files/presupuesto/03. 2022/09 SEPTIEMBRE/Ejecución Ingresos Septiembre_2022 1.pdf',
              },
            ],
          },
          {
            id: 10,
            nombre: 'Octubre',
            files: [
              {
                id: 12,
                tipo: 'pdf',
                nombre: 'Ejecución Cuentas por Pagar Octubre_2022 a.pdf',
                url: '/assets/files/presupuesto/03. 2022/10 OCTUBRE/Ejecución Cuentas por Pagar Octubre_2022  a.pdf',
              },
              {
                id: 13,
                tipo: 'pdf',
                nombre: 'Ejecución Gastos Octubre_2022 a.pdf',
                url: '/assets/files/presupuesto/03. 2022/10 OCTUBRE/Ejecución Gastos Octubre_2022  a.pdf',
              },
              {
                id: 14,
                tipo: 'pdf',
                nombre: 'Ejecución Ingresos Octubre_2022 a.pdf',
                url: '/assets/files/presupuesto/03. 2022/10 OCTUBRE/Ejecución Ingresos Octubre_2022  a.pdf',
              },
              {
                id: 15,
                tipo: 'pdf',
                nombre: 'Ejecución Reservas octubre_2022.pdf',
                url: '/assets/files/presupuesto/03. 2022/10 OCTUBRE/Ejecución Reservas octubre_2022.pdf',
              },
            ],
          },
          {
            id: 11,
            nombre: 'Noviembre',
            files: [
              {
                id: 16,
                tipo: 'pdf',
                nombre: 'Ejecución Cuentas por Pagar Noviembre_2022 a.pdf',
                url: '/assets/files/presupuesto/03. 2022/11 NOVIEMBRE/Ejecución Cuentas por Pagar Noviembre_2022   a.pdf',
              },
              {
                id: 17,
                tipo: 'pdf',
                nombre: 'Ejecución Gastos noviembre_2022 a.pdf',
                url: '/assets/files/presupuesto/03. 2022/11 NOVIEMBRE/Ejecución Gastos noviembre_2022   a.pdf',
              },
              {
                id: 18,
                tipo: 'pdf',
                nombre: 'Ejecución Reservas noviembre_2022 (1) a.pdf',
                url: '/assets/files/presupuesto/03. 2022/11 NOVIEMBRE/Ejecución Reservas noviembre_2022 (1)    a.pdf',
              },
            ],
          },
          {
            id: 12,
            nombre: 'Diciembre',
            files: [
              {
                id: 19,
                tipo: 'pdf',
                nombre: 'Ejecución Cuentas por Pagar Diciembre_2022 x.pdf',
                url: '/assets/files/presupuesto/03. 2022/12 DICIEMBRE/Ejecución Cuentas por Pagar Diciembre_2022 x.pdf',
              },
              {
                id: 20,
                tipo: 'pdf',
                nombre: 'Ejecución Gastos diciembre_2022.pdf',
                url: '/assets/files/presupuesto/03. 2022/12 DICIEMBRE/Ejecución Gastos diciembre_2022.pdf',
              },
              {
                id: 21,
                tipo: 'pdf',
                nombre: 'Ejecución Ingresos Diciembre_2022.pdf',
                url: '/assets/files/presupuesto/03. 2022/12 DICIEMBRE/Ejecución Ingresos Diciembre_2022.pdf',
              },
              {
                id: 22,
                tipo: 'pdf',
                nombre: 'Ejecución Reservas diciembre_2022.pdf',
                url: '/assets/files/presupuesto/03. 2022/12 DICIEMBRE/Ejecución Reservas diciembre_2022.pdf',
              },
            ],
          },
        ],
      },
      {
        id: 4,
        nombre: '2021',
        acordion: [
          {
            id: 1,
            nombre: 'Enero',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: '01 Ejecución Cuentas por Pagar Enero 2021.pdf',
                url: '/assets/files/presupuesto/04. 2021/01 ENERO/01 Ejecución Cuentas por Pagar Enero 2021.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre: '01 Ejecución Gastos Enero 2021.pdf',
                url: '/assets/files/presupuesto/04. 2021/01 ENERO/01 Ejecución Gastos Enero 2021.pdf',
              },
              {
                id: 3,
                tipo: 'pdf',
                nombre: '01 Ejecución Ingresos Enero 2021.pdf',
                url: '/assets/files/presupuesto/04. 2021/01 ENERO/01 Ejecución Ingresos Enero 2021.pdf',
              },
              {
                id: 4,
                tipo: 'pdf',
                nombre: '01 Ejecución Reserva Enero 2021.pdf',
                url: '/assets/files/presupuesto/04. 2021/01 ENERO/01 Ejecución Reserva Enero 2021.pdf',
              },
            ],
          },
          {
            id: 2,
            nombre: 'Febrero',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: '02 Ejecución Cuentas por Pagar Febrero 2021.pdf',
                url: '/assets/files/presupuesto/04. 2021/02 FEBRERO/02 Ejecución Cuentas por Pagar Febrero 2021.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre: '02 Ejecución Gastos Febrero 2021.pdf',
                url: '/assets/files/presupuesto/04. 2021/02 FEBRERO/02 Ejecución Gastos Febrero 2021.pdf',
              },
              {
                id: 3,
                tipo: 'pdf',
                nombre: '02 Ejecución Ingresos Febrero 2021.pdf',
                url: '/assets/files/presupuesto/04. 2021/02 FEBRERO/02 Ejecución Ingresos Febrero 2021.pdf',
              },
              {
                id: 4,
                tipo: 'pdf',
                nombre: '02 Ejecución Reserva Febrero 2021.pdf',
                url: '/assets/files/presupuesto/04. 2021/02 FEBRERO/02 Ejecución Reserva Febrero 2021.pdf',
              },
            ],
          },
          {
            id: 3,
            nombre: 'Marzo',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: '03 Ejecución Cuentas por Pagar Marzo_2021.pdf',
                url: '/assets/files/presupuesto/04. 2021/03 MARZO/03 Ejecución Cuentas por Pagar Marzo_2021.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre: '03 Ejecución Gastos Marzo_2021.pdf',
                url: '/assets/files/presupuesto/04. 2021/03 MARZO/03 Ejecución Gastos Marzo_2021.pdf',
              },
              {
                id: 3,
                tipo: 'pdf',
                nombre: '03 Ejecución Ingresos Marzo_2021.pdf',
                url: '/assets/files/presupuesto/04. 2021/03 MARZO/03 Ejecución Ingresos Marzo_2021.pdf',
              },
              {
                id: 4,
                tipo: 'pdf',
                nombre: '03 Ejecución Reserva Marzo_2021.pdf',
                url: '/assets/files/presupuesto/04. 2021/03 MARZO/03 Ejecución Reserva Marzo_2021.pdf',
              },
            ],
          },
          {
            id: 4,
            nombre: 'Abril',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: '04 Ejecución Cuentas por Pagar Abril_2021.pdf',
                url: '/assets/files/presupuesto/04. 2021/04 ABRIL/04 Ejecución Cuentas por Pagar Abril_2021.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre: '04 Ejecución Gastos Abril_2021.pdf',
                url: '/assets/files/presupuesto/04. 2021/04 ABRIL/04 Ejecución Gastos Abril_2021.pdf',
              },
              {
                id: 3,
                tipo: 'pdf',
                nombre: '04 Ejecución Ingresos Abril_2021.pdf',
                url: '/assets/files/presupuesto/04. 2021/04 ABRIL/04 Ejecución Ingresos Abril_2021.pdf',
              },
              {
                id: 4,
                tipo: 'pdf',
                nombre: '04 Ejecución Reserva Abril_2021.pdf',
                url: '/assets/files/presupuesto/04. 2021/04 ABRIL/04 Ejecución Reserva Abril_2021.pdf',
              },
            ],
          },
          {
            id: 5,
            nombre: 'Mayo',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: '05 Ejecución Cuentas por Pagar Mayo_2021.pdf',
                url: '/assets/files/presupuesto/04. 2021/05 MAYO/05 Ejecución Cuentas por Pagar Mayo_2021.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre: '05 Ejecución Gastos Mayo_2021.pdf',
                url: '/assets/files/presupuesto/04. 2021/05 MAYO/05 Ejecución Gastos Mayo_2021.pdf',
              },
              {
                id: 3,
                tipo: 'pdf',
                nombre: '05 Ejecución Ingresos Mayo_2021.pdf',
                url: '/assets/files/presupuesto/04. 2021/05 MAYO/05 Ejecución Ingresos Mayo_2021.pdf',
              },
              {
                id: 4,
                tipo: 'pdf',
                nombre: '05 Ejecución Reserva Mayo_2021.pdf',
                url: '/assets/files/presupuesto/04. 2021/05 MAYO/05 Ejecución Reserva Mayo_2021.pdf',
              },
            ],
          },
          {
            id: 6,
            nombre: 'Junio',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: '06 Ejecución Cuentas por Pagar Junio_2021.pdf',
                url: '/assets/files/presupuesto/04. 2021/06 JUNIO/06 Ejecución Cuentas por Pagar Junio_2021.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre: '06 Ejecución Gastos Junio_2021.pdf',
                url: '/assets/files/presupuesto/04. 2021/06 JUNIO/06 Ejecución Gastos Junio_2021.pdf',
              },
              {
                id: 3,
                tipo: 'pdf',
                nombre: '06 Ejecución Ingresos Junio_2021.pdf',
                url: '/assets/files/presupuesto/04. 2021/06 JUNIO/06 Ejecución Ingresos Junio_2021.pdf',
              },
              {
                id: 4,
                tipo: 'pdf',
                nombre: '06 Ejecución Reserva Junio_2021.pdf',
                url: '/assets/files/presupuesto/04. 2021/06 JUNIO/06 Ejecución Reserva Junio_2021.pdf',
              },
            ],
          },
          {
            id: 7,
            nombre: 'Julio',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: '07 Ejecución Cuentas por Pagar Julio_2021.pdf',
                url: '/assets/files/presupuesto/04. 2021/07 JULIO/07 Ejecución Cuentas por Pagar Julio_2021.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre: '07 Ejecución Ingresos Julio_2021.pdf',
                url: '/assets/files/presupuesto/04. 2021/07 JULIO/07 Ejecución Ingresos Julio_2021.pdf',
              },
              {
                id: 3,
                tipo: 'pdf',
                nombre: '07 Ejecución gastos Julio_2021.pdf',
                url: '/assets/files/presupuesto/04. 2021/07 JULIO/07 Ejecución gastos Julio_2021.pdf',
              },
              {
                id: 4,
                tipo: 'pdf',
                nombre: '07 Ejecución reservas Julio_2021.pdf',
                url: '/assets/files/presupuesto/04. 2021/07 JULIO/07 Ejecución reservas Julio_2021.pdf',
              },
            ],
          },
          {
            id: 8,
            nombre: 'Agosto',
            files: [
              {
                id: 5,
                tipo: 'pdf',
                nombre: '08 Ejecución Cuentas por Pagar Agosto_2021.pdf',
                url: '/assets/files/presupuesto/04. 2021/08 AGOSTO/08 Ejecución Cuentas por Pagar Agosto_2021.pdf',
              },
              {
                id: 6,
                tipo: 'pdf',
                nombre: '08 Ejecución Gastos Agosto_2021.pdf',
                url: '/assets/files/presupuesto/04. 2021/08 AGOSTO/08 Ejecución Gastos Agosto_2021.pdf',
              },
              {
                id: 7,
                tipo: 'pdf',
                nombre: '08 Ejecución Ingresos Agosto_2021.pdf',
                url: '/assets/files/presupuesto/04. 2021/08 AGOSTO/08 Ejecución Ingresos Agosto_2021.pdf',
              },
              {
                id: 8,
                tipo: 'pdf',
                nombre: '08 Ejecución Reservas Agosto_2021.pdf',
                url: '/assets/files/presupuesto/04. 2021/08 AGOSTO/08 Ejecución Reservas Agosto_2021.pdf',
              },
            ],
          },
          {
            id: 9,
            nombre: 'Septiembre',
            files: [
              {
                id: 9,
                tipo: 'pdf',
                nombre: 'Ejecución Cuentas por Pagar Septiembre_2021.pdf',
                url: '/assets/files/presupuesto/04. 2021/09 SEPTIEMBRE/Ejecución Cuentas por Pagar Septiembre_2021.pdf',
              },
              {
                id: 10,
                tipo: 'pdf',
                nombre: 'Ejecución Gastos Septiembre_2021.pdf',
                url: '/assets/files/presupuesto/04. 2021/09 SEPTIEMBRE/Ejecución Gastos Septiembre_2021.pdf',
              },
              {
                id: 11,
                tipo: 'pdf',
                nombre: 'Ejecución Reserva Septiembre_2021.pdf',
                url: '/assets/files/presupuesto/04. 2021/09 SEPTIEMBRE/Ejecución Reserva Septiembre_2021.pdf',
              },
            ],
          },
          {
            id: 10,
            nombre: 'Octubre',
            files: [
              {
                id: 12,
                tipo: 'pdf',
                nombre: 'Ejecución Cuentas por Pagar Octubre_2021.pdf',
                url: '/assets/files/presupuesto/04. 2021/10 OCTUBRE/Ejecución Cuentas por Pagar Octubre_2021.pdf',
              },
              {
                id: 13,
                tipo: 'pdf',
                nombre: 'Ejecución Gastos Oct_21.pdf',
                url: '/assets/files/presupuesto/04. 2021/10 OCTUBRE/Ejecución Gastos Oct_21.pdf',
              },
              {
                id: 14,
                tipo: 'pdf',
                nombre: 'Ejecución Reservas Oct_21.pdf',
                url: '/assets/files/presupuesto/04. 2021/10 OCTUBRE/Ejecución Reservas Oct_21.pdf',
              },
            ],
          },
          {
            id: 11,
            nombre: 'Noviembre',
            files: [
              {
                id: 15,
                tipo: 'pdf',
                nombre: 'Ejecución Cuentas por Pagar Noviembre_2021.pdf',
                url: '/assets/files/presupuesto/04. 2021/11 NOVIEMBRE/Ejecución Cuentas por Pagar Noviembre_2021.pdf',
              },
              {
                id: 16,
                tipo: 'pdf',
                nombre: 'Ejecución Gastos Noviembre_2021.pdf',
                url: '/assets/files/presupuesto/04. 2021/11 NOVIEMBRE/Ejecución Gastos Noviembre_2021.pdf',
              },
              {
                id: 17,
                tipo: 'pdf',
                nombre: 'Ejecución Ingresos Noviembre_2021.pdf',
                url: '/assets/files/presupuesto/04. 2021/11 NOVIEMBRE/Ejecución Ingresos Noviembre_2021.pdf',
              },
              {
                id: 18,
                tipo: 'pdf',
                nombre: 'Ejecución Reserva Noviembre_2021.pdf',
                url: '/assets/files/presupuesto/04. 2021/11 NOVIEMBRE/Ejecución Reserva Noviembre_2021.pdf',
              },
            ],
          },
          {
            id: 12,
            nombre: 'Diciembre',
            files: [
              {
                id: 19,
                tipo: 'pdf',
                nombre: 'Ejecución Cuentas por Pagar Diciembre 2021.pdf',
                url: '/assets/files/presupuesto/04. 2021/12 DICIEMBRE/Ejecución Cuentas por Pagar Diciembre 2021.pdf',
              },
              {
                id: 20,
                tipo: 'pdf',
                nombre: 'Ejecución Gastos Diciembre 2021.pdf',
                url: '/assets/files/presupuesto/04. 2021/12 DICIEMBRE/Ejecución Gastos Diciembre 2021.pdf',
              },
              {
                id: 21,
                tipo: 'pdf',
                nombre: 'Ejecución Ingresos Diciembre 2021.pdf',
                url: '/assets/files/presupuesto/04. 2021/12 DICIEMBRE/Ejecución Ingresos Diciembre 2021.pdf',
              },
              {
                id: 22,
                tipo: 'pdf',
                nombre: 'Ejecución Reservas Diciembre 2021.pdf',
                url: '/assets/files/presupuesto/04. 2021/12 DICIEMBRE/Ejecución Reservas Diciembre 2021.pdf',
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
            nombre: 'Enero',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'Ejecución Cuentas por Pagar Enero_2020.pdf',
                url: '/assets/files/presupuesto/05. 2020/01 ENERO/Ejecución Cuentas por Pagar Enero_2020.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre: 'Ejecución Gastos Enero_2020.pdf',
                url: '/assets/files/presupuesto/05. 2020/01 ENERO/Ejecución Gastos Enero_2020.pdf',
              },
              {
                id: 3,
                tipo: 'pdf',
                nombre: 'Ejecución Ingresos Enero_2020.pdf',
                url: '/assets/files/presupuesto/05. 2020/01 ENERO/Ejecución Ingresos Enero_2020.pdf',
              },
              {
                id: 4,
                tipo: 'pdf',
                nombre: 'Ejecución Reservas Enero_2020.pdf',
                url: '/assets/files/presupuesto/05. 2020/01 ENERO/Ejecución Reservas Enero_2020.pdf',
              },
            ],
          },
          {
            id: 2,
            nombre: 'Febrero',
            files: [
              {
                id: 5,
                tipo: 'pdf',
                nombre: 'Ejecución Cuentas por Pagar Febrero_2020.pdf',
                url: '/assets/files/presupuesto/05. 2020/02 FEBRERO/Ejecución Cuentas por Pagar Febrero_2020.pdf',
              },
              {
                id: 6,
                tipo: 'pdf',
                nombre: 'Ejecución Gastos Febrero_2020.pdf',
                url: '/assets/files/presupuesto/05. 2020/02 FEBRERO/Ejecución Gastos Febrero_2020.pdf',
              },
              {
                id: 7,
                tipo: 'pdf',
                nombre: 'Ejecución Ingresos Febrero_2020.pdf',
                url: '/assets/files/presupuesto/05. 2020/02 FEBRERO/Ejecución Ingresos Febrero_2020.pdf',
              },
              {
                id: 8,
                tipo: 'pdf',
                nombre: 'Ejecución Reservas Febrero_2020.pdf',
                url: '/assets/files/presupuesto/05. 2020/02 FEBRERO/Ejecución Reservas Febrero_2020.pdf',
              },
            ],
          },
          {
            id: 3,
            nombre: 'Marzo',
            files: [
              {
                id: 9,
                tipo: 'pdf',
                nombre: 'Ejecución Cuentas por Pagar Marzo_2020.pdf',
                url: '/assets/files/presupuesto/05. 2020/03 MARZO/Ejecución Cuentas por Pagar Marzo_2020.pdf',
              },
              {
                id: 10,
                tipo: 'pdf',
                nombre: 'Ejecución Gastos Marzo_2020.pdf',
                url: '/assets/files/presupuesto/05. 2020/03 MARZO/Ejecución Gastos Marzo_2020.pdf',
              },
              {
                id: 11,
                tipo: 'pdf',
                nombre: 'Ejecución Ingresos Marzo_2020.pdf',
                url: '/assets/files/presupuesto/05. 2020/03 MARZO/Ejecución Ingresos Marzo_2020.pdf',
              },
              {
                id: 12,
                tipo: 'pdf',
                nombre: 'Ejecución Reservas Marzo_2020.pdf',
                url: '/assets/files/presupuesto/05. 2020/03 MARZO/Ejecución Reservas Marzo_2020.pdf',
              },
            ],
          },
          {
            id: 4,
            nombre: 'Abril',
            files: [
              {
                id: 13,
                tipo: 'pdf',
                nombre: 'Ejecución Cuentas por Pagar Abril_2020.pdf',
                url: '/assets/files/presupuesto/05. 2020/04 ABRIL/Ejecución Cuentas por Pagar Abril_2020.pdf',
              },
              {
                id: 14,
                tipo: 'pdf',
                nombre: 'Ejecución Gastos Abril_2020.pdf',
                url: '/assets/files/presupuesto/05. 2020/04 ABRIL/Ejecución Gastos Abril_2020.pdf',
              },
              {
                id: 15,
                tipo: 'pdf',
                nombre: 'Ejecución Ingresos Abril_2020.pdf',
                url: '/assets/files/presupuesto/05. 2020/04 ABRIL/Ejecución Ingresos Abril_2020.pdf',
              },
              {
                id: 16,
                tipo: 'pdf',
                nombre: 'Ejecución Reservas Abril_2020.pdf',
                url: '/assets/files/presupuesto/05. 2020/04 ABRIL/Ejecución Reservas Abril_2020.pdf',
              },
            ],
          },
          {
            id: 5,
            nombre: 'Mayo',
            files: [
              {
                id: 17,
                tipo: 'pdf',
                nombre: 'Ejecución Cuentas por Pagar Mayo_2020.pdf',
                url: '/assets/files/presupuesto/05. 2020/05 MAYO/Ejecución Cuentas por Pagar Mayo_2020.pdf',
              },
              {
                id: 18,
                tipo: 'pdf',
                nombre: 'Ejecución Gastos Mayo_2020.pdf',
                url: '/assets/files/presupuesto/05. 2020/05 MAYO/Ejecución Gastos Mayo_2020.pdf',
              },
              {
                id: 19,
                tipo: 'pdf',
                nombre: 'Ejecución Ingresos Mayo_2020.pdf',
                url: '/assets/files/presupuesto/05. 2020/05 MAYO/Ejecución Ingresos Mayo_2020.pdf',
              },
              {
                id: 20,
                tipo: 'pdf',
                nombre: 'Ejecución Reservas Mayo_2020.pdf',
                url: '/assets/files/presupuesto/05. 2020/05 MAYO/Ejecución Reservas Mayo_2020.pdf',
              },
            ],
          },
          {
            id: 6,
            nombre: 'Junio',
            files: [
              {
                id: 21,
                tipo: 'pdf',
                nombre: 'Ejecución Cuentas por Pagar Junio_2020.pdf',
                url: '/assets/files/presupuesto/05. 2020/06 JUNIO/Ejecución Cuentas por Pagar Junio_2020.pdf',
              },
              {
                id: 22,
                tipo: 'pdf',
                nombre: 'Ejecución Gastos Junio_2020.pdf',
                url: '/assets/files/presupuesto/05. 2020/06 JUNIO/Ejecución Gastos Junio_2020.pdf',
              },
              {
                id: 23,
                tipo: 'pdf',
                nombre: 'Ejecución Ingresos Junio_2020.pdf',
                url: '/assets/files/presupuesto/05. 2020/06 JUNIO/Ejecución Ingresos Junio_2020.pdf',
              },
              {
                id: 24,
                tipo: 'pdf',
                nombre: 'Ejecución Reservas Junio_2020.pdf',
                url: '/assets/files/presupuesto/05. 2020/06 JUNIO/Ejecución Reservas Junio_2020.pdf',
              },
            ],
          },
          {
            id: 7,
            nombre: 'Julio',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'Ejecución Cuentas por Pagar Julio_2020.pdf',
                url: '/assets/files/presupuesto/05. 2020/07 JULIO/Ejecución Cuentas por Pagar Julio_2020.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre: 'Ejecución Gastos Julio_2020.pdf',
                url: '/assets/files/presupuesto/05. 2020/07 JULIO/Ejecución Gastos Julio_2020.pdf',
              },
              {
                id: 3,
                tipo: 'pdf',
                nombre: 'Ejecución Ingresos Julio_2020.pdf',
                url: '/assets/files/presupuesto/05. 2020/07 JULIO/Ejecución Ingresos Julio_2020.pdf',
              },
              {
                id: 4,
                tipo: 'pdf',
                nombre: 'Ejecución Reservas Julio_2020.pdf',
                url: '/assets/files/presupuesto/05. 2020/07 JULIO/Ejecución Reservas Julio_2020.pdf',
              },
            ],
          },
          {
            id: 8,
            nombre: 'Agosto',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'Ejecución Cuentas por Pagar Agosto_2020.pdf',
                url: '/assets/files/presupuesto/05. 2020/08 AGOSTO/Ejecución Cuentas por Pagar Agosto_2020.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre: 'Ejecución Gastos Agosto_2020.pdf',
                url: '/assets/files/presupuesto/05. 2020/08 AGOSTO/Ejecución Gastos Agosto_2020.pdf',
              },
              {
                id: 3,
                tipo: 'pdf',
                nombre: 'Ejecución Ingresos Agosto_2020.pdf',
                url: '/assets/files/presupuesto/05. 2020/08 AGOSTO/Ejecución Ingresos Agosto_2020.pdf',
              },
              {
                id: 4,
                tipo: 'pdf',
                nombre: 'Ejecución Reservas Agosto_2020.pdf',
                url: '/assets/files/presupuesto/05. 2020/08 AGOSTO/Ejecución Reservas Agosto_2020.pdf',
              },
            ],
          },
          {
            id: 9,
            nombre: 'Septiembre',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'Ejecución Cuentas por Pagar Septiembre_2020.pdf',
                url: '/assets/files/presupuesto/05. 2020/09 SEPTIEMBRE/Ejecución Cuentas por Pagar Septiembre_2020.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre: 'Ejecución Gastos Septiembre_2020.pdf',
                url: '/assets/files/presupuesto/05. 2020/09 SEPTIEMBRE/Ejecución Gastos Septiembre_2020.pdf',
              },
              {
                id: 3,
                tipo: 'pdf',
                nombre: 'Ejecución Ingresos Septiembre_2020.pdf',
                url: '/assets/files/presupuesto/05. 2020/09 SEPTIEMBRE/Ejecución Ingresos Septiembre_2020.pdf',
              },
              {
                id: 4,
                tipo: 'pdf',
                nombre: 'Ejecución Reservas Septiembre_2020.pdf',
                url: '/assets/files/presupuesto/05. 2020/09 SEPTIEMBRE/Ejecución Reservas Septiembre_2020.pdf',
              },
            ],
          },
          {
            id: 10,
            nombre: 'Octubre',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'Ejecución C x P Octubre_20.pdf',
                url: '/assets/files/presupuesto/05. 2020/10 OCTUBRE/Ejecución C x P Octubre_20.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre: 'Ejecución Gastos Octubre_20.pdf',
                url: '/assets/files/presupuesto/05. 2020/10 OCTUBRE/Ejecución Gastos Octubre_20.pdf',
              },
              {
                id: 3,
                tipo: 'pdf',
                nombre: 'Ejecución Ingresos Octubre_20.pdf',
                url: '/assets/files/presupuesto/05. 2020/10 OCTUBRE/Ejecución Ingresos Octubre_20.pdf',
              },
              {
                id: 4,
                tipo: 'pdf',
                nombre: 'Ejecución Reservas Octubre_20.pdf',
                url: '/assets/files/presupuesto/05. 2020/10 OCTUBRE/Ejecución Reservas Octubre_20.pdf',
              },
            ],
          },
          {
            id: 11,
            nombre: 'Noviembre',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'Ejecución C x P Noviembre_20.pdf',
                url: '/assets/files/presupuesto/05. 2020/11 NOVIEMBRE/Ejecución C x P Noviembre_20.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre: 'Ejecución Gastos Noviembre_20.pdf',
                url: '/assets/files/presupuesto/05. 2020/11 NOVIEMBRE/Ejecución Gastos Noviembre_20.pdf',
              },
              {
                id: 3,
                tipo: 'pdf',
                nombre: 'Ejecución Ingresos Noviembre_20.pdf',
                url: '/assets/files/presupuesto/05. 2020/11 NOVIEMBRE/Ejecución Ingresos Noviembre_20.pdf',
              },
              {
                id: 4,
                tipo: 'pdf',
                nombre: 'Ejecución Reservas Noviembre_20.pdf',
                url: '/assets/files/presupuesto/05. 2020/11 NOVIEMBRE/Ejecución Reservas Noviembre_20.pdf',
              },
            ],
          },
          {
            id: 12,
            nombre: 'Diciembre',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'Ejecución C x P Diciembre_20.pdf',
                url: '/assets/files/presupuesto/05. 2020/12 DICIEMBRE/Ejecución C x P Diciembre_20.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre: 'Ejecución Gastos Diciembre_20.pdf',
                url: '/assets/files/presupuesto/05. 2020/12 DICIEMBRE/Ejecución Gastos Diciembre_20.pdf',
              },
              {
                id: 3,
                tipo: 'pdf',
                nombre: 'Ejecución Ingresos Diciembre_20.pdf',
                url: '/assets/files/presupuesto/05. 2020/12 DICIEMBRE/Ejecución Ingresos Diciembre_20.pdf',
              },
              {
                id: 4,
                tipo: 'pdf',
                nombre: 'Ejecución Reservas Diciembre_20.pdf',
                url: '/assets/files/presupuesto/05. 2020/12 DICIEMBRE/Ejecución Reservas Diciembre_20.pdf',
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
            nombre: 'Enero',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'Cuentas por Pagar Enero_2019.pdf',
                url: '/assets/files/presupuesto/06. 2019/01 ENERO/Cuentas por Pagar Enero_2019.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre: 'Gastos Enero_2019.pdf',
                url: '/assets/files/presupuesto/06. 2019/01 ENERO/Gastos Enero_2019.pdf',
              },
              {
                id: 3,
                tipo: 'pdf',
                nombre: 'Ingresos Enero_2019.pdf',
                url: '/assets/files/presupuesto/06. 2019/01 ENERO/Ingresos Enero_2019.pdf',
              },
            ],
          },
          {
            id: 2,
            nombre: 'Febrero',
            files: [
              {
                id: 4,
                tipo: 'pdf',
                nombre: 'Cuentas por Pagar Febrero_2019.pdf',
                url: '/assets/files/presupuesto/06. 2019/02 FEBRERO/Cuentas por Pagar Febrero_2019.pdf',
              },
              {
                id: 5,
                tipo: 'pdf',
                nombre: 'Gastos Febrero_2019.pdf',
                url: '/assets/files/presupuesto/06. 2019/02 FEBRERO/Gastos Febrero_2019.pdf',
              },
              {
                id: 6,
                tipo: 'pdf',
                nombre: 'Ingresos Feberero_2019.pdf',
                url: '/assets/files/presupuesto/06. 2019/02 FEBRERO/Ingresos Feberero_2019.pdf',
              },
              {
                id: 7,
                tipo: 'pdf',
                nombre: 'Reservas Febrero_2019.pdf',
                url: '/assets/files/presupuesto/06. 2019/02 FEBRERO/Reservas Febrero_2019.pdf',
              },
            ],
          },
          {
            id: 3,
            nombre: 'Marzo',
            files: [
              {
                id: 8,
                tipo: 'pdf',
                nombre: 'Cuentas por Pagar Marzo_2019.pdf',
                url: '/assets/files/presupuesto/06. 2019/03 MARZO/Cuentas por Pagar Marzo_2019.pdf',
              },
              {
                id: 9,
                tipo: 'pdf',
                nombre: 'Gastos Marzo_2019.pdf',
                url: '/assets/files/presupuesto/06. 2019/03 MARZO/Gastos Marzo_2019.pdf',
              },
              {
                id: 10,
                tipo: 'pdf',
                nombre: 'Ingresos Marzo_2019.pdf',
                url: '/assets/files/presupuesto/06. 2019/03 MARZO/Ingresos Marzo_2019.pdf',
              },
              {
                id: 11,
                tipo: 'pdf',
                nombre: 'Reservas Marzo_2019.pdf',
                url: '/assets/files/presupuesto/06. 2019/03 MARZO/Reservas Marzo_2019.pdf',
              },
            ],
          },
          {
            id: 4,
            nombre: 'Abril',
            files: [
              {
                id: 12,
                tipo: 'pdf',
                nombre: 'Cuentas por Pagar Abril_2019.pdf',
                url: '/assets/files/presupuesto/06. 2019/04 ABRIL/Cuentas por Pagar Abril_2019.pdf',
              },
              {
                id: 13,
                tipo: 'pdf',
                nombre: 'Gastos Abril_2019.pdf',
                url: '/assets/files/presupuesto/06. 2019/04 ABRIL/Gastos Abril_2019.pdf',
              },
              {
                id: 14,
                tipo: 'pdf',
                nombre: 'Ingresos Abril_2019.pdf',
                url: '/assets/files/presupuesto/06. 2019/04 ABRIL/Ingresos Abril_2019.pdf',
              },
              {
                id: 15,
                tipo: 'pdf',
                nombre: 'Reservas Abril_2019.pdf',
                url: '/assets/files/presupuesto/06. 2019/04 ABRIL/Reservas Abril_2019.pdf',
              },
            ],
          },
          {
            id: 5,
            nombre: 'Mayo',
            files: [
              {
                id: 16,
                tipo: 'pdf',
                nombre: 'Cuentas por Pagar Mayo_2019.pdf',
                url: '/assets/files/presupuesto/06. 2019/05 MAYO/Cuentas por Pagar Mayo_2019.pdf',
              },
              {
                id: 17,
                tipo: 'pdf',
                nombre: 'Gastos Mayo_2019.pdf',
                url: '/assets/files/presupuesto/06. 2019/05 MAYO/Gastos Mayo_2019.pdf',
              },
              {
                id: 18,
                tipo: 'pdf',
                nombre: 'Ingresos Mayo_2019.pdf',
                url: '/assets/files/presupuesto/06. 2019/05 MAYO/Ingresos Mayo_2019.pdf',
              },
              {
                id: 19,
                tipo: 'pdf',
                nombre: 'Reservas Mayo_2019.pdf',
                url: '/assets/files/presupuesto/06. 2019/05 MAYO/Reservas Mayo_2019.pdf',
              },
            ],
          },
          {
            id: 6,
            nombre: 'Junio',
            files: [
              {
                id: 20,
                tipo: 'pdf',
                nombre: 'Cuentas por Pagar Junio_2019.pdf',
                url: '/assets/files/presupuesto/06. 2019/06 JUNIO/Cuentas por Pagar Junio_2019.pdf',
              },
              {
                id: 21,
                tipo: 'pdf',
                nombre: 'Gastos Junio_2019.pdf',
                url: '/assets/files/presupuesto/06. 2019/06 JUNIO/Gastos Junio_2019.pdf',
              },
              {
                id: 22,
                tipo: 'pdf',
                nombre: 'Ingresos Junio_2019.pdf',
                url: '/assets/files/presupuesto/06. 2019/06 JUNIO/Ingresos Junio_2019.pdf',
              },
              {
                id: 23,
                tipo: 'pdf',
                nombre: 'Reservas Junio_2019.pdf',
                url: '/assets/files/presupuesto/06. 2019/06 JUNIO/Reservas Junio_2019.pdf',
              },
            ],
          },
          {
            id: 7,
            nombre: 'Julio',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'Cuentas por Pagar Julio_2019.pdf',
                url: '/assets/files/presupuesto/06. 2019/07 JULIO/Cuentas por Pagar Julio_2019.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre: 'Gastos Julio_2019.pdf',
                url: '/assets/files/presupuesto/06. 2019/07 JULIO/Gastos Julio_2019.pdf',
              },
              {
                id: 3,
                tipo: 'pdf',
                nombre: 'Ingresos Julio_2019.pdf',
                url: '/assets/files/presupuesto/06. 2019/07 JULIO/Ingresos Julio_2019.pdf',
              },
              {
                id: 4,
                tipo: 'pdf',
                nombre: 'Reservas Julio_2019.pdf',
                url: '/assets/files/presupuesto/06. 2019/07 JULIO/Reservas Julio_2019.pdf',
              },
            ],
          },
          {
            id: 8,
            nombre: 'Agosto',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'Cuentas por Pagar Agosto_2019.pdf',
                url: '/assets/files/presupuesto/06. 2019/08 AGOSTO/Cuentas por Pagar Agosto_2019.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre: 'Gastos Agosto_2019.pdf',
                url: '/assets/files/presupuesto/06. 2019/08 AGOSTO/Gastos Agosto_2019.pdf',
              },
              {
                id: 3,
                tipo: 'pdf',
                nombre: 'Ingresos Agosto_2019.pdf',
                url: '/assets/files/presupuesto/06. 2019/08 AGOSTO/Ingresos Agosto_2019.pdf',
              },
              {
                id: 4,
                tipo: 'pdf',
                nombre: 'Reservas Agosto_2019.pdf',
                url: '/assets/files/presupuesto/06. 2019/08 AGOSTO/Reservas Agosto_2019.pdf',
              },
            ],
          },
          {
            id: 9,
            nombre: 'Septiembre',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'Cuentas por Pagar Septiembre_2019.pdf',
                url: '/assets/files/presupuesto/06. 2019/09 SEPTIEMBRE/Cuentas por Pagar Septiembre_2019.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre: 'Gastos Septiembre_2019.pdf',
                url: '/assets/files/presupuesto/06. 2019/09 SEPTIEMBRE/Gastos Septiembre_2019.pdf',
              },
              {
                id: 3,
                tipo: 'pdf',
                nombre: 'Ingresos Septiembre_2019.pdf',
                url: '/assets/files/presupuesto/06. 2019/09 SEPTIEMBRE/Ingresos Septiembre_2019.pdf',
              },
              {
                id: 4,
                tipo: 'pdf',
                nombre: 'Reservas Septiembre_2019.pdf',
                url: '/assets/files/presupuesto/06. 2019/09 SEPTIEMBRE/Reservas Septiembre_2019.pdf',
              },
            ],
          },
          {
            id: 10,
            nombre: 'Octubre',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'Cuentas por Pagar Octubre_2019.pdf',
                url: '/assets/files/presupuesto/06. 2019/10 OCTUBRE/Cuentas por Pagar Octubre_2019.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre: 'Gastos Octubre_2019.pdf',
                url: '/assets/files/presupuesto/06. 2019/10 OCTUBRE/Gastos Octubre_2019.pdf',
              },
              {
                id: 3,
                tipo: 'pdf',
                nombre: 'Ingresos Octubre_2019.pdf',
                url: '/assets/files/presupuesto/06. 2019/10 OCTUBRE/Ingresos Octubre_2019.pdf',
              },
              {
                id: 4,
                tipo: 'pdf',
                nombre: 'Reservas Octubre_2019.pdf',
                url: '/assets/files/presupuesto/06. 2019/10 OCTUBRE/Reservas Octubre_2019.pdf',
              },
            ],
          },
          {
            id: 11,
            nombre: 'Noviembre',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'Cuentas por Pagar Noviembre_2019.pdf',
                url: '/assets/files/presupuesto/06. 2019/11 NOVIEMBRE/Cuentas por Pagar Noviembre_2019.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre: 'Gastos Noviembre_2019.pdf',
                url: '/assets/files/presupuesto/06. 2019/11 NOVIEMBRE/Gastos Noviembre_2019.pdf',
              },
              {
                id: 3,
                tipo: 'pdf',
                nombre: 'Ingresos Noviembre_2019.pdf',
                url: '/assets/files/presupuesto/06. 2019/11 NOVIEMBRE/Ingresos Noviembre_2019.pdf',
              },
              {
                id: 4,
                tipo: 'pdf',
                nombre: 'Reservas Noviembre_2019.pdf',
                url: '/assets/files/presupuesto/06. 2019/11 NOVIEMBRE/Reservas Noviembre_2019.pdf',
              },
            ],
          },
          {
            id: 12,
            nombre: 'Diciembre',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'Ejecucion Cuentas por Pagar Diciembre_19.pdf',
                url: '/assets/files/presupuesto/06. 2019/12 DICIEMBRE/Ejecucion Cuentas por Pagar Diciembre_19.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre: 'Ejecucion Gastos Diciembre_19.pdf',
                url: '/assets/files/presupuesto/06. 2019/12 DICIEMBRE/Ejecucion Gastos Diciembre_19.pdf',
              },
              {
                id: 3,
                tipo: 'pdf',
                nombre: 'Ejecucion Ingresos Diciembre_19.pdf',
                url: '/assets/files/presupuesto/06. 2019/12 DICIEMBRE/Ejecucion Ingresos Diciembre_19.pdf',
              },
              {
                id: 4,
                tipo: 'pdf',
                nombre: 'Ejecucion Reservas Diciembre_19.pdf',
                url: '/assets/files/presupuesto/06. 2019/12 DICIEMBRE/Ejecucion Reservas Diciembre_19.pdf',
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
            nombre: 'Enero',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'Ctas por pagar Enero 2018.pdf',
                url: '/assets/files/presupuesto/07. 2018/01 ENERO/Ctas por pagar Enero 2018.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre: 'Gastos Enero 2018.pdf',
                url: '/assets/files/presupuesto/07. 2018/01 ENERO/Gastos Enero 2018.pdf',
              },
              {
                id: 3,
                tipo: 'pdf',
                nombre: 'Ingresos Enero 2018.pdf',
                url: '/assets/files/presupuesto/07. 2018/01 ENERO/Ingresos Enero 2018.pdf',
              },
              {
                id: 4,
                tipo: 'pdf',
                nombre: 'Reservas Enero 2018.pdf',
                url: '/assets/files/presupuesto/07. 2018/01 ENERO/Reservas Enero 2018.pdf',
              },
            ],
          },
          {
            id: 2,
            nombre: 'Febrero',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'Ctas por pagar Febrero 2018.pdf',
                url: '/assets/files/presupuesto/07. 2018/02 FEBRERO/Ctas por pagar Febrero 2018.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre: 'Gastos Febrero 2018.pdf',
                url: '/assets/files/presupuesto/07. 2018/02 FEBRERO/Gastos Febrero 2018.pdf',
              },
              {
                id: 3,
                tipo: 'pdf',
                nombre: 'Ingresos Febrero 2018.pdf',
                url: '/assets/files/presupuesto/07. 2018/02 FEBRERO/Ingresos Febrero 2018.pdf',
              },
              {
                id: 4,
                tipo: 'pdf',
                nombre: 'Reservas Febrero 2018.pdf',
                url: '/assets/files/presupuesto/07. 2018/02 FEBRERO/Reservas Febrero 2018.pdf',
              },
            ],
          },
          {
            id: 3,
            nombre: 'Marzo',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'Ctas por pagar Marzo 2018.pdf',
                url: '/assets/files/presupuesto/07. 2018/03 MARZO/Ctas por pagar Marzo 2018.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre: 'Gastos Marzo 2018.pdf',
                url: '/assets/files/presupuesto/07. 2018/03 MARZO/Gastos Marzo 2018.pdf',
              },
              {
                id: 3,
                tipo: 'pdf',
                nombre: 'Ingresos Marzo 2018.pdf',
                url: '/assets/files/presupuesto/07. 2018/03 MARZO/Ingresos Marzo 2018.pdf',
              },
              {
                id: 4,
                tipo: 'pdf',
                nombre: 'Reservas Marzo 2018.pdf',
                url: '/assets/files/presupuesto/07. 2018/03 MARZO/Reservas Marzo 2018.pdf',
              },
            ],
          },
          {
            id: 4,
            nombre: 'Abril',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'Ctas por pagar Abril 2018.pdf',
                url: '/assets/files/presupuesto/07. 2018/04 ABRIL/Ctas por pagar Abril 2018.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre: 'Gastos Abril 2018.pdf',
                url: '/assets/files/presupuesto/07. 2018/04 ABRIL/Gastos Abril 2018.pdf',
              },
              {
                id: 3,
                tipo: 'pdf',
                nombre: 'Ingresos Abril 2018.pdf',
                url: '/assets/files/presupuesto/07. 2018/04 ABRIL/Ingresos Abril 2018.pdf',
              },
              {
                id: 4,
                tipo: 'pdf',
                nombre: 'Reservas Abril 2018.pdf',
                url: '/assets/files/presupuesto/07. 2018/04 ABRIL/Reservas Abril 2018.pdf',
              },
            ],
          },
          {
            id: 5,
            nombre: 'Mayo',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'Ctas por pagar Mayo 2018.pdf',
                url: '/assets/files/presupuesto/07. 2018/05 MAYO/Ctas por pagar Mayo 2018.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre: 'Gastos Mayo 2018.pdf',
                url: '/assets/files/presupuesto/07. 2018/05 MAYO/Gastos Mayo 2018.pdf',
              },
              {
                id: 3,
                tipo: 'pdf',
                nombre: 'Ingresos Mayo 2018.pdf',
                url: '/assets/files/presupuesto/07. 2018/05 MAYO/Ingresos Mayo 2018.pdf',
              },
              {
                id: 4,
                tipo: 'pdf',
                nombre: 'Reservas Mayo 2018.pdf',
                url: '/assets/files/presupuesto/07. 2018/05 MAYO/Reservas Mayo 2018.pdf',
              },
            ],
          },
          {
            id: 6,
            nombre: 'Junio',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'Ctas por pagar Junio 2018.pdf',
                url: '/assets/files/presupuesto/07. 2018/06 JUNIO/Ctas por pagar Junio 2018.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre: 'Gastos Junio 2018.pdf',
                url: '/assets/files/presupuesto/07. 2018/06 JUNIO/Gastos Junio 2018.pdf',
              },
              {
                id: 3,
                tipo: 'pdf',
                nombre: 'Ingresos Junio 2018.pdf',
                url: '/assets/files/presupuesto/07. 2018/06 JUNIO/Ingresos Junio 2018.pdf',
              },
              {
                id: 4,
                tipo: 'pdf',
                nombre: 'Reservas Junio 2018.pdf',
                url: '/assets/files/presupuesto/07. 2018/06 JUNIO/Reservas Junio 2018.pdf',
              },
            ],
          },
          {
            id: 7,
            nombre: 'Julio',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'Ctas por pagar Julio 2018.pdf',
                url: '/assets/files/presupuesto/07. 2018/07 JULIO/Ctas por pagar Julio 2018.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre: 'Gastos Julio 2018.pdf',
                url: '/assets/files/presupuesto/07. 2018/07 JULIO/Gastos Julio 2018.pdf',
              },
              {
                id: 3,
                tipo: 'pdf',
                nombre: 'Ingresos Julio 2018.pdf',
                url: '/assets/files/presupuesto/07. 2018/07 JULIO/Ingresos Julio 2018.pdf',
              },
              {
                id: 4,
                tipo: 'pdf',
                nombre: 'Reservas Julio 2018.pdf',
                url: '/assets/files/presupuesto/07. 2018/07 JULIO/Reservas Julio 2018.pdf',
              },
            ],
          },
          {
            id: 8,
            nombre: 'Agosto',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'Ctas por pagar Agosto 2018.pdf',
                url: '/assets/files/presupuesto/07. 2018/08 AGOSTO/Ctas por pagar Agosto 2018.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre: 'Gastos Agosto 2018.pdf',
                url: '/assets/files/presupuesto/07. 2018/08 AGOSTO/Gastos Agosto 2018.pdf',
              },
              {
                id: 3,
                tipo: 'pdf',
                nombre: 'Ingresos Agosto 2018.pdf',
                url: '/assets/files/presupuesto/07. 2018/08 AGOSTO/Ingresos Agosto 2018.pdf',
              },
              {
                id: 4,
                tipo: 'pdf',
                nombre: 'Reservas Agosto 2018.pdf',
                url: '/assets/files/presupuesto/07. 2018/08 AGOSTO/Reservas Agosto 2018.pdf',
              },
            ],
          },
          {
            id: 9,
            nombre: 'Septiembre',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'Gastos Septiembre 2018.pdf',
                url: '/assets/files/presupuesto/07. 2018/09 SEPTIEMBRE/Gastos Septiembre 2018.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre: 'Ingresos Septiembre 2018.pdf',
                url: '/assets/files/presupuesto/07. 2018/09 SEPTIEMBRE/Ingresos Septiembre 2018.pdf',
              },
            ],
          },
          {
            id: 10,
            nombre: 'Octubre',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'Gastos Octubre 2018.pdf',
                url: '/assets/files/presupuesto/07. 2018/10 OCTUBRE/Gastos Octubre 2018.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre: 'Ingresos Octubre 2018.pdf',
                url: '/assets/files/presupuesto/07. 2018/10 OCTUBRE/Ingresos Octubre 2018.pdf',
              },
            ],
          },
          {
            id: 11,
            nombre: 'Noviembre',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'Gastos Noviembre 2018.pdf',
                url: '/assets/files/presupuesto/07. 2018/11 NOVIEMBRE/Gastos Noviembre 2018.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre: 'Ingresos Noviembre 2018.pdf',
                url: '/assets/files/presupuesto/07. 2018/11 NOVIEMBRE/Ingresos Noviembre 2018.pdf',
              },
            ],
          },
          {
            id: 12,
            nombre: 'Diciembre',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'Cuentas por Pagar  Diciembre_18.pdf',
                url: '/assets/files/presupuesto/07. 2018/12 DICIEMBRE/Cuentas por Pagar  Diciembre_18.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre: 'Gastos  Diciembre_18.pdf',
                url: '/assets/files/presupuesto/07. 2018/12 DICIEMBRE/Gastos  Diciembre_18.pdf',
              },
              {
                id: 3,
                tipo: 'pdf',
                nombre: 'Ingresos  Diciembre_18.pdf',
                url: '/assets/files/presupuesto/07. 2018/12 DICIEMBRE/Ingresos  Diciembre_18.pdf',
              },
              {
                id: 4,
                tipo: 'pdf',
                nombre: 'Reservas  Diciembre_18.pdf',
                url: '/assets/files/presupuesto/07. 2018/12 DICIEMBRE/Reservas  Diciembre_18.pdf',
              },
            ],
          },
        ],
      },
      {
        id: 8,
        nombre: '2017',
        acordion: [
          {
            id: 8,
            nombre: 'Enero',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'Ctas por pagar Enero 2017.pdf',
                url: '/assets/files/presupuesto/08. 2017/01 ENERO/Ctas por pagar Enero 2017.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre: 'Gastos Enero 2017.pdf',
                url: '/assets/files/presupuesto/08. 2017/01 ENERO/Gastos Enero 2017.pdf',
              },
              {
                id: 3,
                tipo: 'pdf',
                nombre: 'Ingresos Enero 2017.pdf',
                url: '/assets/files/presupuesto/08. 2017/01 ENERO/Ingresos Enero 2017.pdf',
              },
              {
                id: 4,
                tipo: 'pdf',
                nombre: 'Reservas Enero 2017.pdf',
                url: '/assets/files/presupuesto/08. 2017/01 ENERO/Reservas Enero 2017.pdf',
              },
            ],
          },
          {
            id: 9,
            nombre: 'Febrero',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'Ctas por pagar Febrero 2017.pdf',
                url: '/assets/files/presupuesto/08. 2017/02 FEBRERO/Ctas por pagar Febrero 2017.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre: 'Gastos Febrero 2017.pdf',
                url: '/assets/files/presupuesto/08. 2017/02 FEBRERO/Gastos Febrero 2017.pdf',
              },
              {
                id: 3,
                tipo: 'pdf',
                nombre: 'Ingresos Febrero 2017.pdf',
                url: '/assets/files/presupuesto/08. 2017/02 FEBRERO/Ingresos Febrero 2017.pdf',
              },
              {
                id: 4,
                tipo: 'pdf',
                nombre: 'Reservas Febrero 2017.pdf',
                url: '/assets/files/presupuesto/08. 2017/02 FEBRERO/Reservas Febrero 2017.pdf',
              },
            ],
          },
          {
            id: 10,
            nombre: 'Marzo',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'Ctas por pagar Marzo 2017.pdf',
                url: '/assets/files/presupuesto/08. 2017/03 MARZO/Ctas por pagar Marzo 2017.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre: 'Gastos Marzo 2017.pdf',
                url: '/assets/files/presupuesto/08. 2017/03 MARZO/Gastos Marzo 2017.pdf',
              },
              {
                id: 3,
                tipo: 'pdf',
                nombre: 'Ingresos Marzo 2017.pdf',
                url: '/assets/files/presupuesto/08. 2017/03 MARZO/Ingresos Marzo 2017.pdf',
              },
              {
                id: 4,
                tipo: 'pdf',
                nombre: 'Reservas Marzo 2017.pdf',
                url: '/assets/files/presupuesto/08. 2017/03 MARZO/Reservas Marzo 2017.pdf',
              },
            ],
          },
          {
            id: 11,
            nombre: 'Abril',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'Ctas por pagar Abril 2017.pdf',
                url: '/assets/files/presupuesto/08. 2017/04 ABRIL/Ctas por pagar Abril 2017.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre: 'Gastos Abril 2017.pdf',
                url: '/assets/files/presupuesto/08. 2017/04 ABRIL/Gastos Abril 2017.pdf',
              },
              {
                id: 3,
                tipo: 'pdf',
                nombre: 'Ingresos Abril 2017.pdf',
                url: '/assets/files/presupuesto/08. 2017/04 ABRIL/Ingresos Abril 2017.pdf',
              },
              {
                id: 4,
                tipo: 'pdf',
                nombre: 'Reservas Abril 2017.pdf',
                url: '/assets/files/presupuesto/08. 2017/04 ABRIL/Reservas Abril 2017.pdf',
              },
            ],
          },
          {
            id: 12,
            nombre: 'Mayo',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'Ctas por pagar Mayo 2017.pdf',
                url: '/assets/files/presupuesto/08. 2017/05 MAYO/Ctas por pagar Mayo 2017.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre: 'Gastos Mayo 2017.pdf',
                url: '/assets/files/presupuesto/08. 2017/05 MAYO/Gastos Mayo 2017.pdf',
              },
              {
                id: 3,
                tipo: 'pdf',
                nombre: 'Ingresos Mayo 2017.pdf',
                url: '/assets/files/presupuesto/08. 2017/05 MAYO/Ingresos Mayo 2017.pdf',
              },
              {
                id: 4,
                tipo: 'pdf',
                nombre: 'Reservas Mayo 2017.pdf',
                url: '/assets/files/presupuesto/08. 2017/05 MAYO/Reservas Mayo 2017.pdf',
              },
            ],
          },
          {
            id: 13,
            nombre: 'Junio',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'Ctas por pagar Junio 2017.pdf',
                url: '/assets/files/presupuesto/08. 2017/06 JUNIO/Ctas por pagar Junio 2017.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre: 'Gastos Junio 2017.pdf',
                url: '/assets/files/presupuesto/08. 2017/06 JUNIO/Gastos Junio 2017.pdf',
              },
              {
                id: 3,
                tipo: 'pdf',
                nombre: 'Ingresos Junio 2017.pdf',
                url: '/assets/files/presupuesto/08. 2017/06 JUNIO/Ingresos Junio 2017.pdf',
              },
              {
                id: 4,
                tipo: 'pdf',
                nombre: 'Reservas Junio 2017.pdf',
                url: '/assets/files/presupuesto/08. 2017/06 JUNIO/Reservas Junio 2017.pdf',
              },
            ],
          },
          {
            id: 7,
            nombre: 'Julio',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'Ctas por pagar Julio 2017.pdf',
                url: '/assets/files/presupuesto/08. 2017/07 JULIO/Ctas por pagar Julio 2017.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre: 'Gastos Julio 2017.pdf',
                url: '/assets/files/presupuesto/08. 2017/07 JULIO/Gastos Julio 2017.pdf',
              },
              {
                id: 3,
                tipo: 'pdf',
                nombre: 'Ingresos Julio 2017.pdf',
                url: '/assets/files/presupuesto/08. 2017/07 JULIO/Ingresos Julio 2017.pdf',
              },
              {
                id: 4,
                tipo: 'pdf',
                nombre: 'Reservas Julio 2017.pdf',
                url: '/assets/files/presupuesto/08. 2017/07 JULIO/Reservas Julio 2017.pdf',
              },
            ],
          },
          {
            id: 8,
            nombre: 'Agosto',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'Ctas por pagar Agosto 2017.pdf',
                url: '/assets/files/presupuesto/08. 2017/08 AGOSTO/Ctas por pagar Agosto 2017.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre: 'Gastos Agosto 2017.pdf',
                url: '/assets/files/presupuesto/08. 2017/08 AGOSTO/Gastos Agosto 2017.pdf',
              },
              {
                id: 3,
                tipo: 'pdf',
                nombre: 'Ingresos Agosto 2017.pdf',
                url: '/assets/files/presupuesto/08. 2017/08 AGOSTO/Ingresos Agosto 2017.pdf',
              },
              {
                id: 4,
                tipo: 'pdf',
                nombre: 'Reservas Agosto 2017.pdf',
                url: '/assets/files/presupuesto/08. 2017/08 AGOSTO/Reservas Agosto 2017.pdf',
              },
            ],
          },
          {
            id: 9,
            nombre: 'Septiembre',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'Ctas por pagar Septiembre 2017.pdf',
                url: '/assets/files/presupuesto/08. 2017/09 SEPTIEMBRE/Ctas por pagar Septiembre 2017.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre: 'Gastos Septiembre 2017.pdf',
                url: '/assets/files/presupuesto/08. 2017/09 SEPTIEMBRE/Gastos Septiembre 2017.pdf',
              },
              {
                id: 3,
                tipo: 'pdf',
                nombre: 'Ingresos Septiembre 2017.pdf',
                url: '/assets/files/presupuesto/08. 2017/09 SEPTIEMBRE/Ingresos Septiembre 2017.pdf',
              },
              {
                id: 4,
                tipo: 'pdf',
                nombre: 'Reservas Septiembre 2017.pdf',
                url: '/assets/files/presupuesto/08. 2017/09 SEPTIEMBRE/Reservas Septiembre 2017.pdf',
              },
            ],
          },
          {
            id: 10,
            nombre: 'Octubre',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'Ctas por pagar Octubre 2017.pdf',
                url: '/assets/files/presupuesto/08. 2017/10 OCTUBRE/Ctas por pagar Octubre 2017.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre: 'Gastos Octubre 2017.pdf',
                url: '/assets/files/presupuesto/08. 2017/10 OCTUBRE/Gastos Octubre 2017.pdf',
              },
              {
                id: 3,
                tipo: 'pdf',
                nombre: 'Ingresos Octubre 2017.pdf',
                url: '/assets/files/presupuesto/08. 2017/10 OCTUBRE/Ingresos Octubre 2017.pdf',
              },
              {
                id: 4,
                tipo: 'pdf',
                nombre: 'Reservas Octubre 2017.pdf',
                url: '/assets/files/presupuesto/08. 2017/10 OCTUBRE/Reservas Octubre 2017.pdf',
              },
            ],
          },
          {
            id: 11,
            nombre: 'Noviembre',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'Ctas por pagar Noviembre 2017.pdf',
                url: '/assets/files/presupuesto/08. 2017/11 NOVIEMBRE/Ctas por pagar Noviembre 2017.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre: 'Gastos Noviembre 2017.pdf',
                url: '/assets/files/presupuesto/08. 2017/11 NOVIEMBRE/Gastos Noviembre 2017.pdf',
              },
              {
                id: 3,
                tipo: 'pdf',
                nombre: 'Ingresos Noviembre 2017.pdf',
                url: '/assets/files/presupuesto/08. 2017/11 NOVIEMBRE/Ingresos Noviembre 2017.pdf',
              },
              {
                id: 4,
                tipo: 'pdf',
                nombre: 'Reservas Noviembre 2017.pdf',
                url: '/assets/files/presupuesto/08. 2017/11 NOVIEMBRE/Reservas Noviembre 2017.pdf',
              },
            ],
          },
          {
            id: 12,
            nombre: 'Diciembre',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'Ctas por pagar Diciembre 2017.pdf',
                url: '/assets/files/presupuesto/08. 2017/12 DICIEMBRE/Ctas por pagar Diciembre 2017.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre: 'Gastos Diciembre 2017.pdf',
                url: '/assets/files/presupuesto/08. 2017/12 DICIEMBRE/Gastos Diciembre 2017.pdf',
              },
              {
                id: 3,
                tipo: 'pdf',
                nombre: 'Ingresos Diciembre 2017.pdf',
                url: '/assets/files/presupuesto/08. 2017/12 DICIEMBRE/Ingresos Diciembre 2017.pdf',
              },
              {
                id: 4,
                tipo: 'pdf',
                nombre: 'Reservas Diciembre 2017.pdf',
                url: '/assets/files/presupuesto/08. 2017/12 DICIEMBRE/Reservas Diciembre 2017.pdf',
              },
            ],
          },
        ],
      },
      {
        id: 9,
        nombre: '2016',
        acordion: [
          {
            id: 1,
            nombre: 'Enero',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'Ctas por pagar Enero 2016.pdf',
                url: '/assets/files/presupuesto/09. 2016/01 ENERO/Ctas por pagar Enero 2016.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre: 'Gastos Enero 2016.pdf',
                url: '/assets/files/presupuesto/09. 2016/01 ENERO/Gastos Enero 2016.pdf',
              },
              {
                id: 3,
                tipo: 'pdf',
                nombre: 'Ingresos Enero 2016.pdf',
                url: '/assets/files/presupuesto/09. 2016/01 ENERO/Ingresos Enero 2016.pdf',
              },
              {
                id: 4,
                tipo: 'pdf',
                nombre: 'Reservas Enero 2016.pdf',
                url: '/assets/files/presupuesto/09. 2016/01 ENERO/Reservas Enero 2016.pdf',
              },
            ],
          },
          {
            id: 2,
            nombre: 'Febrero',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'Ctas por pagar Febrero 2016.pdf',
                url: '/assets/files/presupuesto/09. 2016/02 FEBRERO/Ctas por pagar Febrero 2016.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre: 'Gastos Febrero 2016.pdf',
                url: '/assets/files/presupuesto/09. 2016/02 FEBRERO/Gastos Febrero 2016.pdf',
              },
              {
                id: 3,
                tipo: 'pdf',
                nombre: 'Ingresos Febrero 2016.pdf',
                url: '/assets/files/presupuesto/09. 2016/02 FEBRERO/Ingresos Febrero 2016.pdf',
              },
              {
                id: 4,
                tipo: 'pdf',
                nombre: 'Reservas Febrero 2016.pdf',
                url: '/assets/files/presupuesto/09. 2016/02 FEBRERO/Reservas Febrero 2016.pdf',
              },
            ],
          },
          {
            id: 3,
            nombre: 'Marzo',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'Ctas por pagar Marzo 2016.pdf',
                url: '/assets/files/presupuesto/09. 2016/03 MARZO/Ctas por pagar Marzo 2016.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre: 'Gastos Marzo 2016.pdf',
                url: '/assets/files/presupuesto/09. 2016/03 MARZO/Gastos Marzo 2016.pdf',
              },
              {
                id: 3,
                tipo: 'pdf',
                nombre: 'Ingresos Marzo 2016.pdf',
                url: '/assets/files/presupuesto/09. 2016/03 MARZO/Ingresos Marzo 2016.pdf',
              },
              {
                id: 4,
                tipo: 'pdf',
                nombre: 'Reservas Marzo 2016.pdf',
                url: '/assets/files/presupuesto/09. 2016/03 MARZO/Reservas Marzo 2016.pdf',
              },
            ],
          },
          {
            id: 4,
            nombre: 'Abril',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'Ctas por pagar Abril 2016.pdf',
                url: '/assets/files/presupuesto/09. 2016/04 ABRIL/Ctas por pagar Abril 2016.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre: 'Gastos Abril 2016.pdf',
                url: '/assets/files/presupuesto/09. 2016/04 ABRIL/Gastos Abril 2016.pdf',
              },
              {
                id: 3,
                tipo: 'pdf',
                nombre: 'Ingresos Abril 2016.pdf',
                url: '/assets/files/presupuesto/09. 2016/04 ABRIL/Ingresos Abril 2016.pdf',
              },
              {
                id: 4,
                tipo: 'pdf',
                nombre: 'Reservas Abril 2016.pdf',
                url: '/assets/files/presupuesto/09. 2016/04 ABRIL/Reservas Abril 2016.pdf',
              },
            ],
          },
          {
            id: 5,
            nombre: 'Mayo',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'Ctas por pagar Mayo 2016.pdf',
                url: '/assets/files/presupuesto/09. 2016/05 MAYO/Ctas por pagar Mayo 2016.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre: 'Gastos Mayo 2016.pdf',
                url: '/assets/files/presupuesto/09. 2016/05 MAYO/Gastos Mayo 2016.pdf',
              },
              {
                id: 3,
                tipo: 'pdf',
                nombre: 'Ingresos Mayo 2016.pdf',
                url: '/assets/files/presupuesto/09. 2016/05 MAYO/Ingresos Mayo 2016.pdf',
              },
              {
                id: 4,
                tipo: 'pdf',
                nombre: 'Reservas Mayo 2016.pdf',
                url: '/assets/files/presupuesto/09. 2016/05 MAYO/Reservas Mayo 2016.pdf',
              },
            ],
          },
          {
            id: 6,
            nombre: 'Junio',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'Ctas por pagar Junio 2016.pdf',
                url: '/assets/files/presupuesto/09. 2016/06 JUNIO/Ctas por pagar Junio 2016.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre: 'Gastos Junio 2016.pdf',
                url: '/assets/files/presupuesto/09. 2016/06 JUNIO/Gastos Junio 2016.pdf',
              },
              {
                id: 3,
                tipo: 'pdf',
                nombre: 'Ingresos Junio 2016.pdf',
                url: '/assets/files/presupuesto/09. 2016/06 JUNIO/Ingresos Junio 2016.pdf',
              },
              {
                id: 4,
                tipo: 'pdf',
                nombre: 'Reservas Junio 2016.pdf',
                url: '/assets/files/presupuesto/09. 2016/06 JUNIO/Reservas Junio 2016.pdf',
              },
            ],
          },
          {
            id: 7,
            nombre: 'Julio',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'Ctas por pagar Julio 2016.pdf',
                url: '/assets/files/presupuesto/09. 2016/07 JULIO/Ctas por pagar Julio 2016.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre: 'Gastos Julio 2016.pdf',
                url: '/assets/files/presupuesto/09. 2016/07 JULIO/Gastos Julio 2016.pdf',
              },
              {
                id: 3,
                tipo: 'pdf',
                nombre: 'Ingresos Julio 2016.pdf',
                url: '/assets/files/presupuesto/09. 2016/07 JULIO/Ingresos Julio 2016.pdf',
              },
              {
                id: 4,
                tipo: 'pdf',
                nombre: 'Reservas Julio 2016.pdf',
                url: '/assets/files/presupuesto/09. 2016/07 JULIO/Reservas Julio 2016.pdf',
              },
            ],
          },
          {
            id: 8,
            nombre: 'Agosto',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'Ctas por pagar Agosto 2016.pdf',
                url: '/assets/files/presupuesto/09. 2016/08 AGOSTO/Ctas por pagar Agosto 2016.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre: 'Gastos Agosto 2016.pdf',
                url: '/assets/files/presupuesto/09. 2016/08 AGOSTO/Gastos Agosto 2016.pdf',
              },
              {
                id: 3,
                tipo: 'pdf',
                nombre: 'Ingresos Agosto 2016.pdf',
                url: '/assets/files/presupuesto/09. 2016/08 AGOSTO/Ingresos Agosto 2016.pdf',
              },
              {
                id: 4,
                tipo: 'pdf',
                nombre: 'Reservas Agosto 2016.pdf',
                url: '/assets/files/presupuesto/09. 2016/08 AGOSTO/Reservas Agosto 2016.pdf',
              },
            ],
          },
          {
            id: 9,
            nombre: 'Septiembre',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'Ctas por pagar Septiembre 2016.pdf',
                url: '/assets/files/presupuesto/09. 2016/09 SEPTIEMBRE/Ctas por pagar Septiembre 2016.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre: 'Gastos Septiembre 2016.pdf',
                url: '/assets/files/presupuesto/09. 2016/09 SEPTIEMBRE/Gastos Septiembre 2016.pdf',
              },
              {
                id: 3,
                tipo: 'pdf',
                nombre: 'Ingresos Septiembre 2016.pdf',
                url: '/assets/files/presupuesto/09. 2016/09 SEPTIEMBRE/Ingresos Septiembre 2016.pdf',
              },
              {
                id: 4,
                tipo: 'pdf',
                nombre: 'Reservas Septiembre 2016.pdf',
                url: '/assets/files/presupuesto/09. 2016/09 SEPTIEMBRE/Reservas Septiembre 2016.pdf',
              },
            ],
          },
          {
            id: 10,
            nombre: 'Octubre',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'Ctas por pagar Octubre 2016.pdf',
                url: '/assets/files/presupuesto/09. 2016/10 OCTUBRE/Ctas por pagar Octubre 2016.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre: 'Gastos Octubre 2016.pdf',
                url: '/assets/files/presupuesto/09. 2016/10 OCTUBRE/Gastos Octubre 2016.pdf',
              },
              {
                id: 3,
                tipo: 'pdf',
                nombre: 'Ingresos Octubre 2016.pdf',
                url: '/assets/files/presupuesto/09. 2016/10 OCTUBRE/Ingresos Octubre 2016.pdf',
              },
              {
                id: 4,
                tipo: 'pdf',
                nombre: 'Reservas Octubre 2016.pdf',
                url: '/assets/files/presupuesto/09. 2016/10 OCTUBRE/Reservas Octubre 2016.pdf',
              },
            ],
          },
          {
            id: 11,
            nombre: 'Noviembre',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'Ctas por pagar Noviembre 2016.pdf',
                url: '/assets/files/presupuesto/09. 2016/11 NOVIEMBRE/Ctas por pagar Noviembre 2016.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre: 'Gastos Noviembre 2016.pdf',
                url: '/assets/files/presupuesto/09. 2016/11 NOVIEMBRE/Gastos Noviembre 2016.pdf',
              },
              {
                id: 3,
                tipo: 'pdf',
                nombre: 'Ingresos Noviembre 2016.pdf',
                url: '/assets/files/presupuesto/09. 2016/11 NOVIEMBRE/Ingresos Noviembre 2016.pdf',
              },
              {
                id: 4,
                tipo: 'pdf',
                nombre: 'Reservas Noviembre 2016.pdf',
                url: '/assets/files/presupuesto/09. 2016/11 NOVIEMBRE/Reservas Noviembre 2016.pdf',
              },
            ],
          },
          {
            id: 12,
            nombre: 'Diciembre',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'Ctas por pagar Diciembre 2016.pdf',
                url: '/assets/files/presupuesto/09. 2016/12 DICIEMBRE/Ctas por pagar Diciembre 2016.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre: 'Gastos Diciembre 2016.pdf',
                url: '/assets/files/presupuesto/09. 2016/12 DICIEMBRE/Gastos Diciembre 2016.pdf',
              },
              {
                id: 3,
                tipo: 'pdf',
                nombre: 'Ingresos Diciembre 2016.pdf',
                url: '/assets/files/presupuesto/09. 2016/12 DICIEMBRE/Ingresos Diciembre 2016.pdf',
              },
              {
                id: 4,
                tipo: 'pdf',
                nombre: 'Reservas Diciembre 2016.pdf',
                url: '/assets/files/presupuesto/09. 2016/12 DICIEMBRE/Reservas Diciembre 2016.pdf',
              },
            ],
          },
        ],
      },
      {
        id: 10,
        nombre: '2015',
        acordion: [
          {
            id: 1,
            nombre: 'Enero',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'Ctas por pagar Enero 2015.pdf',
                url: '/assets/files/presupuesto/10. 2015/01 ENERO/Ctas por pagar Enero 2015.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre: 'Gastos Enero 2015.pdf',
                url: '/assets/files/presupuesto/10. 2015/01 ENERO/Gastos Enero 2015.pdf',
              },
              {
                id: 3,
                tipo: 'pdf',
                nombre: 'Ingresos Enero 2015.pdf',
                url: '/assets/files/presupuesto/10. 2015/01 ENERO/Ingresos Enero 2015.pdf',
              },
              {
                id: 4,
                tipo: 'pdf',
                nombre: 'Reservas Enero 2015.pdf',
                url: '/assets/files/presupuesto/10. 2015/01 ENERO/Reservas Enero 2015.pdf',
              },
            ],
          },
          {
            id: 2,
            nombre: 'Febrero',
            files: [
              {
                id: 5,
                tipo: 'pdf',
                nombre: 'Ctas por pagar Febrero 2015.pdf',
                url: '/assets/files/presupuesto/10. 2015/02 FEBRERO/Ctas por pagar Febrero 2015.pdf',
              },
              {
                id: 6,
                tipo: 'pdf',
                nombre: 'Gastos Febrero 2015.pdf',
                url: '/assets/files/presupuesto/10. 2015/02 FEBRERO/Gastos Febrero 2015.pdf',
              },
              {
                id: 7,
                tipo: 'pdf',
                nombre: 'Ingresos Febrero 2015.pdf',
                url: '/assets/files/presupuesto/10. 2015/02 FEBRERO/Ingresos Febrero 2015.pdf',
              },
              {
                id: 8,
                tipo: 'pdf',
                nombre: 'Reservas Febrero 2015.pdf',
                url: '/assets/files/presupuesto/10. 2015/02 FEBRERO/Reservas Febrero 2015.pdf',
              },
            ],
          },
          {
            id: 3,
            nombre: 'Marzo',
            files: [
              {
                id: 9,
                tipo: 'pdf',
                nombre: 'Ctas por pagar Marzo 2015.pdf',
                url: '/assets/files/presupuesto/10. 2015/03 MARZO/Ctas por pagar Marzo 2015.pdf',
              },
              {
                id: 10,
                tipo: 'pdf',
                nombre: 'Gastos Marzo 2015.pdf',
                url: '/assets/files/presupuesto/10. 2015/03 MARZO/Gastos Marzo 2015.pdf',
              },
              {
                id: 11,
                tipo: 'pdf',
                nombre: 'Ingresos Marzo 2015.pdf',
                url: '/assets/files/presupuesto/10. 2015/03 MARZO/Ingresos Marzo 2015.pdf',
              },
              {
                id: 12,
                tipo: 'pdf',
                nombre: 'Reservas Marzo 2015.pdf',
                url: '/assets/files/presupuesto/10. 2015/03 MARZO/Reservas Marzo 2015.pdf',
              },
            ],
          },
          {
            id: 4,
            nombre: 'Abril',
            files: [
              {
                id: 13,
                tipo: 'pdf',
                nombre: 'Ctas por pagar Abril 2015.pdf',
                url: '/assets/files/presupuesto/10. 2015/04 ABRIL/Ctas por pagar Abril 2015.pdf',
              },
              {
                id: 14,
                tipo: 'pdf',
                nombre: 'Gastos Abril 2015.pdf',
                url: '/assets/files/presupuesto/10. 2015/04 ABRIL/Gastos Abril 2015.pdf',
              },
              {
                id: 15,
                tipo: 'pdf',
                nombre: 'Ingresos Abril 2015.pdf',
                url: '/assets/files/presupuesto/10. 2015/04 ABRIL/Ingresos Abril 2015.pdf',
              },
              {
                id: 16,
                tipo: 'pdf',
                nombre: 'Reservas Abril 2015.pdf',
                url: '/assets/files/presupuesto/10. 2015/04 ABRIL/Reservas Abril 2015.pdf',
              },
            ],
          },
          {
            id: 5,
            nombre: 'Mayo',
            files: [
              {
                id: 17,
                tipo: 'pdf',
                nombre: 'Ctas por pagar Mayo 2015.pdf',
                url: '/assets/files/presupuesto/10. 2015/05 MAYO/Ctas por pagar Mayo 2015.pdf',
              },
              {
                id: 18,
                tipo: 'pdf',
                nombre: 'Gastos Mayo 2015.pdf',
                url: '/assets/files/presupuesto/10. 2015/05 MAYO/Gastos Mayo 2015.pdf',
              },
              {
                id: 19,
                tipo: 'pdf',
                nombre: 'Ingresos Mayo 2015.pdf',
                url: '/assets/files/presupuesto/10. 2015/05 MAYO/Ingresos Mayo 2015.pdf',
              },
              {
                id: 20,
                tipo: 'pdf',
                nombre: 'Reservas Mayo 2015.pdf',
                url: '/assets/files/presupuesto/10. 2015/05 MAYO/Reservas Mayo 2015.pdf',
              },
            ],
          },
          {
            id: 6,
            nombre: 'Junio',
            files: [
              {
                id: 21,
                tipo: 'pdf',
                nombre: 'Ctas por pagar Junio 2015.pdf',
                url: '/assets/files/presupuesto/10. 2015/06 JUNIO/Ctas por pagar Junio 2015.pdf',
              },
              {
                id: 22,
                tipo: 'pdf',
                nombre: 'Gastos Junio 2015.pdf',
                url: '/assets/files/presupuesto/10. 2015/06 JUNIO/Gastos Junio 2015.pdf',
              },
              {
                id: 23,
                tipo: 'pdf',
                nombre: 'Ingresos Junio 2015.pdf',
                url: '/assets/files/presupuesto/10. 2015/06 JUNIO/Ingresos Junio 2015.pdf',
              },
              {
                id: 24,
                tipo: 'pdf',
                nombre: 'Reservas Junio 2015.pdf',
                url: '/assets/files/presupuesto/10. 2015/06 JUNIO/Reservas Junio 2015.pdf',
              },
            ],
          },
          {
            id: 7,
            nombre: 'Julio',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'Ctas por pagar Julio 2015.pdf',
                url: '/assets/files/presupuesto/10. 2015/07 JULIO/Ctas por pagar Julio 2015.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre: 'Gastos Julio 2015.pdf',
                url: '/assets/files/presupuesto/10. 2015/07 JULIO/Gastos Julio 2015.pdf',
              },
              {
                id: 3,
                tipo: 'pdf',
                nombre: 'Ingresos Julio 2015.pdf',
                url: '/assets/files/presupuesto/10. 2015/07 JULIO/Ingresos Julio 2015.pdf',
              },
              {
                id: 4,
                tipo: 'pdf',
                nombre: 'Reservas Julio 2015.pdf',
                url: '/assets/files/presupuesto/10. 2015/07 JULIO/Reservas Julio 2015.pdf',
              },
            ],
          },
          {
            id: 8,
            nombre: 'Agosto',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'Ctas por pagar Agosto 2015.pdf',
                url: '/assets/files/presupuesto/10. 2015/08 AGOSTO/Ctas por pagar Agosto 2015.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre: 'Gastos Agosto 2015.pdf',
                url: '/assets/files/presupuesto/10. 2015/08 AGOSTO/Gastos Agosto 2015.pdf',
              },
              {
                id: 3,
                tipo: 'pdf',
                nombre: 'Ingresos Agosto 2015.pdf',
                url: '/assets/files/presupuesto/10. 2015/08 AGOSTO/Ingresos Agosto 2015.pdf',
              },
              {
                id: 4,
                tipo: 'pdf',
                nombre: 'Reservas Agosto 2015.pdf',
                url: '/assets/files/presupuesto/10. 2015/08 AGOSTO/Reservas Agosto 2015.pdf',
              },
            ],
          },
          {
            id: 9,
            nombre: 'Septiembre',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'Ctas por pagar Septiembre 2015.pdf',
                url: '/assets/files/presupuesto/10. 2015/09 SEPTIEMBRE/Ctas por pagar Septiembre 2015.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre: 'Gastos Septiembre 2015.pdf',
                url: '/assets/files/presupuesto/10. 2015/09 SEPTIEMBRE/Gastos Septiembre 2015.pdf',
              },
              {
                id: 3,
                tipo: 'pdf',
                nombre: 'Ingresos Septiembre 2015.pdf',
                url: '/assets/files/presupuesto/10. 2015/09 SEPTIEMBRE/Ingresos Septiembre 2015.pdf',
              },
              {
                id: 4,
                tipo: 'pdf',
                nombre: 'Reservas Septiembre 2015.pdf',
                url: '/assets/files/presupuesto/10. 2015/09 SEPTIEMBRE/Reservas Septiembre 2015.pdf',
              },
            ],
          },
          {
            id: 10,
            nombre: 'Octubre',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'Ctas por pagar Octubre 2015.pdf',
                url: '/assets/files/presupuesto/10. 2015/10 OCTUBRE/Ctas por pagar Octubre 2015.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre: 'Gastos Octubre 2015.pdf',
                url: '/assets/files/presupuesto/10. 2015/10 OCTUBRE/Gastos Octubre 2015.pdf',
              },
              {
                id: 3,
                tipo: 'pdf',
                nombre: 'Ingresos Octubre 2015.pdf',
                url: '/assets/files/presupuesto/10. 2015/10 OCTUBRE/Ingresos Octubre 2015.pdf',
              },
              {
                id: 4,
                tipo: 'pdf',
                nombre: 'Reservas Octubre 2015.pdf',
                url: '/assets/files/presupuesto/10. 2015/10 OCTUBRE/Reservas Octubre 2015.pdf',
              },
            ],
          },
          {
            id: 11,
            nombre: 'Noviembre',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'Ctas por pagar Noviembre 2015.pdf',
                url: '/assets/files/presupuesto/10. 2015/11 NOVIEMBRE/Ctas por pagar Noviembre 2015.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre: 'Gastos Noviembre 2015.pdf',
                url: '/assets/files/presupuesto/10. 2015/11 NOVIEMBRE/Gastos Noviembre 2015.pdf',
              },
              {
                id: 3,
                tipo: 'pdf',
                nombre: 'Ingresos Noviembre 2015.pdf',
                url: '/assets/files/presupuesto/10. 2015/11 NOVIEMBRE/Ingresos Noviembre 2015.pdf',
              },
              {
                id: 4,
                tipo: 'pdf',
                nombre: 'Reservas Noviembre 2015.pdf',
                url: '/assets/files/presupuesto/10. 2015/11 NOVIEMBRE/Reservas Noviembre 2015.pdf',
              },
            ],
          },
          {
            id: 12,
            nombre: 'Diciembre',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'Ctas por pagar Diciembre 2015.pdf',
                url: '/assets/files/presupuesto/10. 2015/12 DICIEMBRE/Ctas por pagar Diciembre 2015.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre: 'Gastos Diciembre 2015.pdf',
                url: '/assets/files/presupuesto/10. 2015/12 DICIEMBRE/Gastos Diciembre 2015.pdf',
              },
              {
                id: 3,
                tipo: 'pdf',
                nombre: 'Ingresos Diciembre 2015.pdf',
                url: '/assets/files/presupuesto/10. 2015/12 DICIEMBRE/Ingresos Diciembre 2015.pdf',
              },
              {
                id: 4,
                tipo: 'pdf',
                nombre: 'Reservas Diciembre 2015.pdf',
                url: '/assets/files/presupuesto/10. 2015/12 DICIEMBRE/Reservas Diciembre 2015.pdf',
              },
            ],
          },
        ],
      },
    ];

    this.estadosFinancieros = [
      {
        id: 1,
        nombre: '2024',
        acordion: [
          {
            id: 1,
            nombre: 'Enero',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre:
                  '1. ESTADO DE SITUACION FINANCIERA COMPARATIVO  ENERO 2024-2023.pdf',
                url: '/assets/files/estados_financieros/01. 2024/01 Enero/1. ESTADO DE SITUACION FINANCIERA COMPARATIVO  ENERO 2024-2023.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre:
                  '2. ESTADO DE SITUACION FINANCIERA  COMPARATIVO ENERO 2024-2023.pdf',
                url: '/assets/files/estados_financieros/01. 2024/01 Enero/2. ESTADO DE SITUACION FINANCIERA  COMPARATIVO ENERO 2024-2023.pdf',
              },
              {
                id: 3,
                tipo: 'pdf',
                nombre:
                  '3. ESTADO DE RESULTADOS COMPARATIVO ENERO 2024-2023.pdf',
                url: '/assets/files/estados_financieros/01. 2024/01 Enero/3. ESTADO DE RESULTADOS COMPARATIVO ENERO 2024-2023.pdf',
              },
              {
                id: 4,
                tipo: 'pdf',
                nombre:
                  '4. ESTADO DE RESULTADOS  COMPARATIVO ENERO 2023-2022.pdf',
                url: '/assets/files/estados_financieros/01. 2024/01 Enero/4. ESTADO DE RESULTADOS  COMPARATIVO ENERO 2023-2022.pdf',
              },
            ],
          },
          {
            id: 2,
            nombre: 'Febrero',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre:
                  '1. ESTADO DE SITUACION FINANCIERA COMPARATIVA  FEBRERO 2024-2023.pdf',
                url: '/assets/files/estados_financieros/01. 2024/02 Febrero/1. ESTADO DE SITUACION FINANCIERA COMPARATIVA  FEBRERO 2024-2023.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre:
                  '2. ESTADO DE SITUACION FINANCIERA COMPARATIVA FEBRERO 2024-2023.pdf',
                url: '/assets/files/estados_financieros/01. 2024/02 Febrero/2. ESTADO DE SITUACION FINANCIERA COMPARATIVA FEBRERO 2024-2023.pdf',
              },
              {
                id: 3,
                tipo: 'pdf',
                nombre:
                  '3.  ESATADO DE RESULTADOS  COMPARATIVO FEBRERO 2024-2023.pdf',
                url: '/assets/files/estados_financieros/01. 2024/02 Febrero/3.  ESATADO DE RESULTADOS  COMPARATIVO FEBRERO 2024-2023.pdf',
              },
              {
                id: 4,
                tipo: 'pdf',
                nombre:
                  '4.  ESTADO DE RESULTADOS  COMPARATIVO FEBRERO 2024-2023.pdf',
                url: '/assets/files/estados_financieros/01. 2024/02 Febrero/4.  ESTADO DE RESULTADOS  COMPARATIVO FEBRERO 2024-2023.pdf',
              },
            ],
          },
          {
            id: 3,
            nombre: 'Marzo',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre:
                  '1. ESTADO DE SITUACION FINANCIERA COMPARATIVO  MARZO 2024-2023.pdf',
                url: '/assets/files/estados_financieros/01. 2024/03 Marzo/1. ESTADO DE SITUACION FINANCIERA COMPARATIVO  MARZO 2024-2023.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre:
                  '2.  ESTADO DE SITUACION FINANCIERA COMPARATIVO MARZO 2024-2023.pdf',
                url: '/assets/files/estados_financieros/01. 2024/03 Marzo/2.  ESTADO DE SITUACION FINANCIERA COMPARATIVO MARZO 2024-2023.pdf',
              },
              {
                id: 3,
                tipo: 'pdf',
                nombre:
                  '3. ESTADO  DE RESULTADOS COMPARATIVO  MARZO 2024-2023.pdf',
                url: '/assets/files/estados_financieros/01. 2024/03 Marzo/3. ESTADO  DE RESULTADOS COMPARATIVO  MARZO 2024-2023.pdf',
              },
              {
                id: 4,
                tipo: 'pdf',
                nombre:
                  '4. ESTADO DE RESULTADOS COMPARATIVO MARZO 2024-2023.pdf',
                url: '/assets/files/estados_financieros/01. 2024/03 Marzo/4. ESTADO DE RESULTADOS COMPARATIVO MARZO 2024-2023.pdf',
              },
            ],
          },
          {
            id: 4,
            nombre: 'Abril',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: '1. ESTADO DE SITUACION FINANCIERA ABRIL 2024-2023.pdf',
                url: '/assets/files/estados_financieros/01. 2024/04 Abril/1. ESTADO DE SITUACION FINANCIERA ABRIL 2024-2023.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre: '2. ESTADO DE SITUACION FINANCIERA ABRIL 2024-2023.pdf',
                url: '/assets/files/estados_financieros/01. 2024/04 Abril/2. ESTADO DE SITUACION FINANCIERA ABRIL 2024-2023.pdf',
              },
              {
                id: 3,
                tipo: 'pdf',
                nombre: '3. ESTADO DE RESULTADOS ABRIL 2024-2023.pdf',
                url: '/assets/files/estados_financieros/01. 2024/04 Abril/3. ESTADO DE RESULTADOS ABRIL 2024-2023.pdf',
              },
              {
                id: 4,
                tipo: 'pdf',
                nombre: '4. ESTADO DE RESULTADOS ABRIL 2024-2023.pdf',
                url: '/assets/files/estados_financieros/01. 2024/04 Abril/4. ESTADO DE RESULTADOS ABRIL 2024-2023.pdf',
              },
            ],
          },
          {
            id: 5,
            nombre: 'Mayo',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: '1.  ESTADO DE SITUACION FINANCIERA MAYO 2024-2023.pdf',
                url: '/assets/files/estados_financieros/01. 2024/05 Mayo/1.  ESTADO DE SITUACION FINANCIERA MAYO 2024-2023.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre: '2.  ESTADO DE SITUACION FINANCIERA MAYO 2024-2023.pdf',
                url: '/assets/files/estados_financieros/01. 2024/05 Mayo/2.  ESTADO DE SITUACION FINANCIERA MAYO 2024-2023.pdf',
              },
              {
                id: 3,
                tipo: 'pdf',
                nombre: '3 . ESATADO DE RESULTADOS MAYO 2024-2023.pdf',
                url: '/assets/files/estados_financieros/01. 2024/05 Mayo/3 . ESATADO DE RESULTADOS MAYO 2024-2023.pdf',
              },
              {
                id: 4,
                tipo: 'pdf',
                nombre: '4.  ESTADO DE RESULTADOS MAYO 2024-2023.pdf',
                url: '/assets/files/estados_financieros/01. 2024/05 Mayo/4.  ESTADO DE RESULTADOS MAYO 2024-2023.pdf',
              },
            ],
          },
          {
            id: 6,
            nombre: 'Junio',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: '1. ESTADO DE SITUACION FINANCIERA JUNIO 2024-2023.pdf',
                url: '/assets/files/estados_financieros/01. 2024/06 Junio/1. ESTADO DE SITUACION FINANCIERA JUNIO 2024-2023.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre: '2. ESTADO DE SITUACION FINANCIERA JUNIO 2024-2023.pdf',
                url: '/assets/files/estados_financieros/01. 2024/06 Junio/2. ESTADO DE SITUACION FINANCIERA JUNIO 2024-2023.pdf',
              },
              {
                id: 3,
                tipo: 'pdf',
                nombre: '3. ESATADO DE RESULTADOS JUNIO 2024-2023.pdf',
                url: '/assets/files/estados_financieros/01. 2024/06 Junio/3. ESATADO DE RESULTADOS JUNIO 2024-2023.pdf',
              },
              {
                id: 4,
                tipo: 'pdf',
                nombre: '4.  ESTADO DE RESULTADOS JUNIO 2024-2023.pdf',
                url: '/assets/files/estados_financieros/01. 2024/06 Junio/4.  ESTADO DE RESULTADOS JUNIO 2024-2023.pdf',
              },
            ],
          },
          {
            id: 7,
            nombre: 'Julio',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'ESTADO DE SITUACION FINANCIERA JULIO 2024-2023',
                url: '/assets/files/estados_financieros/01. 2024/07 Julio/1. ESTADO DE SITUACION FINANCIERA JULIO 2024-2023-.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre: 'ESTADO DE SITUACION FINANCIERA JULIO 2024-2023',
                url: '/assets/files/estados_financieros/01. 2024/07 Julio/2. ESTADO DE SITUACION FINANCIERA JULIO 2024-2023-.pdf',
              },
              {
                id: 3,
                tipo: 'pdf',
                nombre: 'ESTADO DE RESULTADOS JULIO 2024-2023',
                url: '/assets/files/estados_financieros/01. 2024/07 Julio/3. ESATADO DE RESULTADOS JULIO 2024-2023-.pdf',
              },
              {
                id: 4,
                tipo: 'pdf',
                nombre: 'ESTADO DE RESULTADOS JULIO 2024-2023',
                url: '/assets/files/estados_financieros/01. 2024/07 Julio/4. ESTADO DE RESULTADOS JULIO 2024-2023-.pdf',
              },
            ],
          },
          {
            id: 8,
            nombre: 'Agosto',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'ESTADO DE SITUACION FINANCIERA AGOSTO 2024-2023',
                url: '/assets/files/estados_financieros/01. 2024/08 Agosto/1. ESTADO DE SITUACION FINANCIERA AGOSTO 2024-2023-.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre: 'ESTADO DE SITUACION FINANCIERA AGOSTO 2024-2023',
                url: '/assets/files/estados_financieros/01. 2024/08 Agosto/2. ESTADO DE SITUACION FINANCIERA AGOSTO 2024-2023-.pdf',
              },
              {
                id: 3,
                tipo: 'pdf',
                nombre: 'ESTADO DE RESULTADOS AGOSTO 2024-2023',
                url: '/assets/files/estados_financieros/01. 2024/08 Agosto/3. ESATADO DE RESULTADOS AGOSTO 2024-2023-.pdf',
              },
              {
                id: 4,
                tipo: 'pdf',
                nombre: 'ESTADO DE RESULTADOS AGOSTO 2024-2023',
                url: '/assets/files/estados_financieros/01. 2024/08 Agosto/4. ESTADO DE RESULTADOS AGOSTO 2024-2023-.pdf',
              },
            ],
          },
          {
            id: 9,
            nombre: 'Septiembre',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'ESTADO DE SITUACION FINANCIERA SEPTIEMBRE 2024-2023',
                url: '/assets/files/estados_financieros/01. 2024/09 Septiembre/1. ESTADO DE SITUACION FINANCIERA SEPTIEMBRE 2024-2023-.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre: 'ESTADO DE SITUACION FINANCIERA SEPTIEMBRE 2024-2023',
                url: '/assets/files/estados_financieros/01. 2024/09 Septiembre/2. ESTADO DE SITUACION FINANCIERA SEPTIEMBRE 2024-2023-.pdf',
              },
              {
                id: 3,
                tipo: 'pdf',
                nombre: 'ESTADO DE RESULTADOS SEPTIEMBRE 2024-2023',
                url: '/assets/files/estados_financieros/01. 2024/09 Septiembre/3. ESTADO DE RESULTADOS SEPTIEMBRE 2024-2023-.pdf',
              },
              {
                id: 4,
                tipo: 'pdf',
                nombre: 'ESTADO DE RESULTADOS SEPTIEMBRE 2024-2023',
                url: '/assets/files/estados_financieros/01. 2024/09 Septiembre/4. ESTADO DE RESULTADOS SEPTIEMBRE 2024-2023-.pdf',
              },
            ],
          },
          {
            id: 10,
            nombre: 'Octubre',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'ESTADO DE SITUACION FINANCIERA OCTUBRE 2024-2023',
                url: '/assets/files/estados_financieros/01. 2024/10 Octubre/1. ESTADO DE SITUACION FINANCIERA OCTUBRE 2024-2023-.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre: 'ESTADO DE SITUACION FINANCIERA OCTUBRE 2024-2023',
                url: '/assets/files/estados_financieros/01. 2024/10 Octubre/2. ESTADO DE SITUACION FINANCIERA OCTUBRE 2024-2023-.pdf',
              },
              {
                id: 3,
                tipo: 'pdf',
                nombre: 'ESTADO DE RESULTADOS OCTUBRE 2024-2023',
                url: '/assets/files/estados_financieros/01. 2024/10 Octubre/3. ESATADO DE RESULTADOS OCTUBRE 2024-2023-.pdf',
              },
              {
                id: 4,
                tipo: 'pdf',
                nombre: 'ESTADO DE RESULTADOS OCTUBRE 2024-2023',
                url: '/assets/files/estados_financieros/01. 2024/10 Octubre/4. ESTADO DE RESULTADOS OCTUBRE 2024-2023-.pdf',
              },
            ],
          },
          {
            id: 11,
            nombre: 'Noviembre',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'ESTADO DE SITUACION FINANCIERA NOVIEMBRE 2024-2023',
                url: '/assets/files/estados_financieros/01. 2024/11 Noviembre/1. ESTADO DE SITUACION FINANCIERA NOVIEMBRE 2024-2023-.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre: 'ESTADO DE SITUACION FINANCIERA NOVIEMBRE 2024-2023',
                url: '/assets/files/estados_financieros/01. 2024/11 Noviembre/2. ESTADO DE SITUACION FINANCIERA NOVIEMBRE 2024-2023-.pdf',
              },
              {
                id: 3,
                tipo: 'pdf',
                nombre: 'ESTADO DE RESULTADOS NOVIEMBRE 2024-2023',
                url: '/assets/files/estados_financieros/01. 2024/11 Noviembre/3. ESATADO DE RESULTADOS NOVIEMBRE 2024-2023-.pdf',
              },
              {
                id: 4,
                tipo: 'pdf',
                nombre: 'ESTADO DE RESULTADOS NOVIEMBRE 2024-2023',
                url: '/assets/files/estados_financieros/01. 2024/11 Noviembre/4. ESTADO DE RESULTADOS NOVIEMBRE 2024-2023-.pdf',
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
            nombre: 'Enero',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'ESATDO DE RESULTADOS COMPARATIVOS ENERO 2023-2022.pdf',
                url: '/assets/files/estados_financieros/02. 2023/01. Enero/ESATDO DE RESULTADOS COMPARATIVOS ENERO 2023-2022.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre:
                  'ESTADO DE SITUACION FINANCIERA COMPARATIVO ENERO 2023-2022.pdf',
                url: '/assets/files/estados_financieros/02. 2023/01. Enero/ESTADO DE SITUACION FINANCIERA COMPARATIVO ENERO 2023-2022.pdf',
              },
            ],
          },
          {
            id: 2,
            nombre: 'Febrero',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre:
                  'ESTADO DE RESULTADOS COMPARATIVOS FEBRERO 2023-2022.pdf',
                url: '/assets/files/estados_financieros/02. 2023/02. Febrero/ESTADO DE RESULTADOS COMPARATIVOS FEBRERO 2023-2022.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre:
                  'ESTADO DE SITUACION FINANCIERA COMPARATIVO FEBRERO 2023-2022.pdf',
                url: '/assets/files/estados_financieros/02. 2023/02. Febrero/ESTADO DE SITUACION FINANCIERA COMPARATIVO FEBRERO 2023-2022.pdf',
              },
            ],
          },
          {
            id: 3,
            nombre: 'Marzo',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'ESTADO DE RESULTADOS MARZO  2023-2022 .pdf',
                url: '/assets/files/estados_financieros/02. 2023/03. Marzo/ESTADO DE RESULTADOS MARZO  2023-2022 .pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre: 'ESTADO DE SITUACION FINANCIERA  MARZO 2023  2022.pdf',
                url: '/assets/files/estados_financieros/02. 2023/03. Marzo/ESTADO DE SITUACION FINANCIERA  MARZO 2023  2022.pdf',
              },
            ],
          },
          {
            id: 4,
            nombre: 'Abril',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre:
                  'ESTADO DE RESULTADOS COMPARATIVOS  ABRIL   2023-2022.pdf',
                url: '/assets/files/estados_financieros/02. 2023/04. Abril/ESTADO DE RESULTADOS COMPARATIVOS  ABRIL   2023-2022.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre:
                  'ESTADO DE SITUACION FINANCIERA  COMPARATIVA ABRIL  2023-2022.pdf',
                url: '/assets/files/estados_financieros/02. 2023/04. Abril/ESTADO DE SITUACION FINANCIERA  COMPARATIVA ABRIL  2023-2022.pdf',
              },
            ],
          },
          {
            id: 5,
            nombre: 'Mayo',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre:
                  'ESTADO DE RESULTADOS COMPARATIVOS  MAYO  2023-2022 .pdf',
                url: '/assets/files/estados_financieros/02. 2023/05. Mayo/ESTADO DE RESULTADOS COMPARATIVOS  MAYO  2023-2022 .pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre:
                  'ESTADO DE SITUACION FINANCIERA COMPARATIVA  MAYO 2023-2022.pdf',
                url: '/assets/files/estados_financieros/02. 2023/05. Mayo/ESTADO DE SITUACION FINANCIERA COMPARATIVA  MAYO 2023-2022.pdf',
              },
            ],
          },
          {
            id: 6,
            nombre: 'Junio',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'ESTADO DE RESULTADOS JUNIO 2023-2022.pdf',
                url: '/assets/files/estados_financieros/02. 2023/06. Junio/ESTADO DE RESULTADOS JUNIO 2023-2022.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre: 'ESTADO DE SITUACION FINANCIERA JUNIO 2023-2022 .pdf',
                url: '/assets/files/estados_financieros/02. 2023/06. Junio/ESTADO DE SITUACION FINANCIERA JUNIO 2023-2022 .pdf',
              },
            ],
          },
          {
            id: 7,
            nombre: 'Julio',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'ESTADO DE RESULTADOS JULIO 2023-2022.pdf',
                url: '/assets/files/estados_financieros/02. 2023/07. Julio/ESTADO DE RESULTADOS JULIO 2023-2022.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre: 'ESTADO DE SITUACION FINANCIERA JULIO 2023-2022.pdf',
                url: '/assets/files/estados_financieros/02. 2023/07. Julio/ESTADO DE SITUACION FINANCIERA JULIO 2023-2022.pdf',
              },
            ],
          },
          {
            id: 8,
            nombre: 'Agosto',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre:
                  'ESATADO DE RESULTADOS COMPARATIVOS AGOSTO 2023-2022.pdf',
                url: '/assets/files/estados_financieros/02. 2023/08. Agosto/ESATADO DE RESULTADOS COMPARATIVOS AGOSTO 2023-2022.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre:
                  'ESTADO DE SITUACION FINANCIERA COMPARATIVO AGOSTO 2023-2022.pdf',
                url: '/assets/files/estados_financieros/02. 2023/08. Agosto/ESTADO DE SITUACION FINANCIERA COMPARATIVO AGOSTO 2023-2022.pdf',
              },
            ],
          },
          {
            id: 9,
            nombre: 'Septiembre',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre:
                  'ESTADO DE RESULTADOS COMPARATIVOS SEPTIEMBRE 2023-2022.pdf',
                url: '/assets/files/estados_financieros/02. 2023/09. Septiembre/ESTADO DE RESULTADOS COMPARATIVOS SEPTIEMBRE 2023-2022.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre:
                  'ESTADO DE SITUACION FINANCIERA COMPARATIVO SEPTIEMBRE 2023-2022.pdf',
                url: '/assets/files/estados_financieros/02. 2023/09. Septiembre/ESTADO DE SITUACION FINANCIERA COMPARATIVO SEPTIEMBRE 2023-2022.pdf',
              },
            ],
          },
          {
            id: 10,
            nombre: 'Octubre',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre:
                  'ESTADO DE RESULTADOS COMPARATIVOS OCTUBRE 2023-2022.pdf',
                url: '/assets/files/estados_financieros/02. 2023/10. Octubre/ESTADO DE RESULTADOS COMPARATIVOS OCTUBRE 2023-2022.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre:
                  'ESTADO DE SITUACION FINANCIERA COMPARATIVO OCTUBRE 2023-2022 (1).pdf',
                url: '/assets/files/estados_financieros/02. 2023/10. Octubre/ESTADO DE SITUACION FINANCIERA COMPARATIVO OCTUBRE 2023-2022 (1).pdf',
              },
            ],
          },
          {
            id: 11,
            nombre: 'Noviembre',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre:
                  'ESTADO DE RESULTADOS COMPARATIVOS NOVIEMBRE 2023-2022 .pdf',
                url: '/assets/files/estados_financieros/02. 2023/11. Noviembre/ESTADO DE RESULTADOS COMPARATIVOS NOVIEMBRE 2023-2022 .pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre:
                  'ESTADO DE SITUACION FINANCIERA COMPARATIVO NOVIEMBRE 2023-2022 .pdf',
                url: '/assets/files/estados_financieros/02. 2023/11. Noviembre/ESTADO DE SITUACION FINANCIERA COMPARATIVO NOVIEMBRE 2023-2022 .pdf',
              },
            ],
          },
          {
            id: 12,
            nombre: 'Diciembre',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre:
                  'ESTADO DE RESULTADOS COMPARATIVOS DICIEMBRE 2023-2022.pdf',
                url: '/assets/files/estados_financieros/02. 2023/12. Diciembre/ESTADO DE RESULTADOS COMPARATIVOS DICIEMBRE 2023-2022.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre:
                  'ESTADO DE SITUACION FINANCIERA COMPARATIVO DICIEMBRE 2023-2022.pdf',
                url: '/assets/files/estados_financieros/02. 2023/12. Diciembre/ESTADO DE SITUACION FINANCIERA COMPARATIVO DICIEMBRE 2023-2022.pdf',
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
            nombre: 'Enero',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre:
                  '01. ESTADO DE INFORMACION FINANCIERA COMPARATIVA ENERO 2022-2021.pdf',
                url: '/assets/files/estados_financieros/03. 2022/01. ENERO/01. ESTADO DE INFORMACION FINANCIERA COMPARATIVA  ENERO 2022-2021.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre:
                  '02. ESTADO DE RESULTADOS COMPARATIVO ENERO 2022-2021.pdf',
                url: '/assets/files/estados_financieros/03. 2022/01. ENERO/02. ESTADO DE RESULTADOS COMPARATIVO ENERO 2022-2021.pdf',
              },
            ],
          },
          {
            id: 2,
            nombre: 'Febrero',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre:
                  '01. ESTADO DE INFORMACION FINANCIERA COMPARATIVA FEBRERO 2022-2021.pdf',
                url: '/assets/files/estados_financieros/03. 2022/02. FEBRERO/01. ESTADO DE INFORMACION FINANCIERA COMPARATIVA  FEBRERO 2022-2021.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre:
                  '02. ESTADO DE RESULTADOS COMPARATIVO FEBRERO 2022-2021.pdf',
                url: '/assets/files/estados_financieros/03. 2022/02. FEBRERO/02. ESTADO DE RESULTADOS COMPARATIVO FEBRERO 2022-2021.pdf',
              },
            ],
          },
          {
            id: 3,
            nombre: 'Marzo',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre:
                  '01. ESTADO DE INFORMACION FINANCIERA COMPARATIVA MARZO 2022-2021.pdf',
                url: '/assets/files/estados_financieros/03. 2022/03. MARZO/01. ESTADO DE INFORMACION FINANCIERA COMPARATIVA  MARZO 2022-2021.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre:
                  '02. ESTADO DE RESULTADOS COMPARATIVO MARZO 2022-2021.pdf',
                url: '/assets/files/estados_financieros/03. 2022/03. MARZO/02. ESTADO DE RESULTADOS COMPARATIVO MARZO 2022-2021.pdf',
              },
            ],
          },
          {
            id: 4,
            nombre: 'Abril',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre:
                  '01. ESTADO DE INFORMACION FINANCIERA COMPARATIVA ABRIL 2022-2021.pdf',
                url: '/assets/files/estados_financieros/03. 2022/04. ABRIL/01. ESTADO DE INFORMACION FINANCIERA COMPARATIVA ABRIL 2022-2021.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre:
                  '02. ESTADO DE RESULTADOS COMPARATIVO ABRIL 2022-2021.pdf',
                url: '/assets/files/estados_financieros/03. 2022/04. ABRIL/02. ESTADO DE RESULTADOS COMPARATIVO  ABRIL 2022-2021.pdf',
              },
            ],
          },
          {
            id: 5,
            nombre: 'Mayo',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre:
                  '01. ESTADO DE INFORMACION FINANCIERA COMPARATIVA MAYO 2022-2021.pdf',
                url: '/assets/files/estados_financieros/03. 2022/05. MAYO/01. ESTADO DE INFORMACION FINANCIERA COMPARATIVA MAYO 2022-2021.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre:
                  '02. ESTADO DE RESULTADOS COMPARATIVO MAYO 2022-2021.pdf',
                url: '/assets/files/estados_financieros/03. 2022/05. MAYO/02. ESTADO DE RESULTADOS COMPARATIVO  MAYO 2022-2021.pdf',
              },
            ],
          },
          {
            id: 6,
            nombre: 'Junio',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre:
                  '01. ESTADO DE INFORMACION FINANCIERA COMPARATIVO JUNIO 2022-2021.pdf',
                url: '/assets/files/estados_financieros/03. 2022/06. JUNIO/01. ESTADO DE INFORMACION FINANCIERA  COMPARATIVO JUNIO 2022-2021.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre:
                  '02. ESTADO DE RESULTADOS COMPARATIVO JUNIO 2022-2021.pdf',
                url: '/assets/files/estados_financieros/03. 2022/06. JUNIO/02. ESTADO DE RESULTADOS COMPARATIVO  JUNIO 2022-2021.pdf',
              },
            ],
          },
          {
            id: 7,
            nombre: 'Julio',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre:
                  '01. ESTADO DE INFORMACION FINANCIERA COMPARATIVO JULIO 2022-2021.pdf',
                url: '/assets/files/estados_financieros/03. 2022/07. JULIO/01. ESTADO  DE INFORMACION FINANCIERA COMPARATIVO JULIO 2022-2021.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre:
                  '02. ESTADO DE RESULTADOS COMPARATIVO JULIO 2022-2021.pdf',
                url: '/assets/files/estados_financieros/03. 2022/07. JULIO/02. ESTADO DE RESULTADOS COMPARATIVO JULIO 2022-2021.pdf',
              },
            ],
          },
          {
            id: 8,
            nombre: 'Agosto',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre:
                  '01. ESTADO DE SITUACION FINANCIERA COMPARATIVA AGOSTO 2022-2021.pdf',
                url: '/assets/files/estados_financieros/03. 2022/08. AGOSTO/01. ESTADO DE SITUACION FINANCIERA COMPARATIVA AGOSTO 2022-2021.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre:
                  '02. ESTADO DE RESULTADOS COMPARATIVO AGOSTO 2022-2021.pdf',
                url: '/assets/files/estados_financieros/03. 2022/08. AGOSTO/02. ESTADO DE RESULTADOS COMPARATIVO AGOSTO 2022-2021.pdf',
              },
            ],
          },
          {
            id: 9,
            nombre: 'Septiembre',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre:
                  '01. ESTADO DE SITUACION FINANCIERA COMPARATIVA SEPTIEMBRE 2022-2021.pdf',
                url: '/assets/files/estados_financieros/03. 2022/09. SEPTIEMBRE/01. ESTADO DE SITUACION FINANCIERA COMPARATIVA  SEPTIEMBRE 2022-2021.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre:
                  '02. ESTADO DE RESULTADOS COMPARATIVO SEPTIEMBRE 2022-2021.pdf',
                url: '/assets/files/estados_financieros/03. 2022/09. SEPTIEMBRE/02. ESTADO DE RESULTADOS COMPARATIVO  SEPTIEMBRE 2022-2021.pdf',
              },
            ],
          },
          {
            id: 10,
            nombre: 'Octubre',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre:
                  'ESTADO DE RESULTADOS COMPARATIVO OCTUBRE 2022-2021.pdf',
                url: '/assets/files/estados_financieros/03. 2022/10. OCTUBRE/ESTADO DE RESULTADOS COMPARATIVO OCTUBRE 2022-2021.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre:
                  'ESTADO DE SITUACION FINANCIERA COMPARATIVA OCTUBRE 2022-2021.pdf',
                url: '/assets/files/estados_financieros/03. 2022/10. OCTUBRE/ESTADO DE SITUACION FINANCIERA COMPARATIVA OCTUBRE 2022-2021.pdf',
              },
            ],
          },
          {
            id: 11,
            nombre: 'Noviembre',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre:
                  'ESTADO DE RESULTADOS COMPARATIVO NOVIEMBRE 2022-2021.pdf',
                url: '/assets/files/estados_financieros/03. 2022/11. NOVIEMBRE/ESTADO DE RESULTADOS COMPARATIVO NOVIEMBRE 2022-2021.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre:
                  'ESTADO DE SITUACION FINANCIERA COMPARATIVA NOVIEMBRE 2022-2021.pdf',
                url: '/assets/files/estados_financieros/03. 2022/11. NOVIEMBRE/ESTADO DE SITUACION FINANCIERA  COMPARATIVA NOVIEMBRE 2022-2021.pdf',
              },
            ],
          },
        ],
      },
      {
        id: 4,
        nombre: '2021',
        files: [
          {
            id: 1,
            nombre: '01 INFORMACION FINANCIERA COMPARATIVA ENERO 2020-2021.pdf',
            url: '/assets/files/estados_financieros/04. 2021/01 INFORMACION FINANCIERA COMPARATIVA ENERO 2020-2021.pdf',
            tipo: 'pdf',
          },
          {
            id: 2,
            nombre:
              '02 INFROMACION FINANCIERA COMPARATIVA FEBRERO 2020-2021.pdf',
            url: '/assets/files/estados_financieros/04. 2021/02 INFROMACION FINANCIERA COMPARATIVA FEBRERO 2020-2021.pdf',
            tipo: 'pdf',
          },
          {
            id: 3,
            nombre:
              '03 INFORMACION FINANCIERA COMPARATIVA  MARZO 2020-2021.pdf',
            url: '/assets/files/estados_financieros/04. 2021/03 INFORMACION FINANCIERA COMPARATIVA  MARZO 2020-2021.pdf',
            tipo: 'pdf',
          },
          {
            id: 4,
            nombre:
              '04 ESTADO DE INFORMACION FINANCIERA RESULTADOS ABRIL 2021.pdf',
            url: '/assets/files/estados_financieros/04. 2021/04 ESTADO DE INFORMACION FINANCIERA RESULTADOS ABRIL 2021.pdf',
            tipo: 'pdf',
          },
          {
            id: 5,
            nombre: '04 INFORMACION FINANCIERA COMPARATIVA ABRIL 2020-2021.pdf',
            url: '/assets/files/estados_financieros/04. 2021/04 INFORMACION FINANCIERA COMPARATIVA ABRIL 2020-2021.pdf',
            tipo: 'pdf',
          },
          {
            id: 6,
            nombre:
              '05 INFORMACION FINANCIERA COMPARATIVA MAYO DE 2020-2021.pdf',
            url: '/assets/files/estados_financieros/04. 2021/05 INFORMACION FINANCIERA COMPARATIVA MAYO DE 2020 - 2021.pdf',
            tipo: 'pdf',
          },
          {
            id: 7,
            nombre:
              '06 INFORMACION FINANCIERA COMPARATIVA JUNIO DE 2020-2021.pdf',
            url: '/assets/files/estados_financieros/04. 2021/06 INFORMACION FINANCIERA COMPARATIVA JUNIO DE 2020- 2021.pdf',
            tipo: 'pdf',
          },
          {
            id: 8,
            nombre:
              '07 INFORMACION FINANCIERA COMPARATIVA JULIO DE 2020-2021.pdf',
            url: '/assets/files/estados_financieros/04. 2021/07 INFORMACION FINANCIERA  COMPARATIVA JULIO  DE 2020-2021.pdf',
            tipo: 'pdf',
          },
          {
            id: 9,
            nombre:
              '08 INFORMACIÓN FINANCIERA COMPARATIVA AGOSTO 2020-2021.pdf',
            url: '/assets/files/estados_financieros/04. 2021/08 INFORMACIÓN FINANCIERA COMPARATIVA AGOSTO 2020-2021.pdf',
            tipo: 'pdf',
          },
          {
            id: 10,
            nombre:
              '09 INFORMACIÓN FINANCIERA COMPETITIVA SEPTIEMBRE 2020-2021.pdf',
            url: '/assets/files/estados_financieros/04. 2021/09 INFORMACIÓN FINANCIERA COMPETITIVA SEPTIEMBRE 2020-2021.pdf',
            tipo: 'pdf',
          },
          {
            id: 11,
            nombre: '10 ESTADO DE SITUACION FINANCIERA OCTUBRE 2021.pdf',
            url: '/assets/files/estados_financieros/04. 2021/10 ESTADO DE SITUACION FINANCIERA OCTUBRE 2021.pdf',
            tipo: 'pdf',
          },
          {
            id: 12,
            nombre: '11 ESTADO DE RESULTADOS OCTUBRE 2021.pdf',
            url: '/assets/files/estados_financieros/04. 2021/11 ESTADO DE RESULTADOS OCTUBRE 2021.pdf',
            tipo: 'pdf',
          },
          {
            id: 13,
            nombre: '12 ESTADO DE SITUACION FINANCIERA NOVIEMBRE 2021.pdf',
            url: '/assets/files/estados_financieros/04. 2021/12 ESTADO DE SITUACION FINANCIERA NOVIEMBRE 2021.pdf',
            tipo: 'pdf',
          },
          {
            id: 14,
            nombre: '13 ESTADO DE RESULTADOS NOVIEMBRE 2021.pdf',
            url: '/assets/files/estados_financieros/04. 2021/13 ESTADO DE RESULTADOS NOVIEMBRE 2021.pdf',
            tipo: 'pdf',
          },
          {
            id: 15,
            nombre: '14 ESTADO DE SITUACION FINANCIERA DICIEMBRE 2020-2021.pdf',
            url: '/assets/files/estados_financieros/04. 2021/14 ESTADO DE SITUACION FINANCIERA DICIEMBRE 2020-  2021.pdf',
            tipo: 'pdf',
          },
          {
            id: 16,
            nombre: '15 ESTADO DE RESULTADOS DICIEMBRE 2020-2021.pdf',
            url: '/assets/files/estados_financieros/04. 2021/15 ESTADO DE RESULTADOS DICIEMBRE 2020-2021 .pdf',
            tipo: 'pdf',
          },
        ],
      },
      {
        id: 5,
        nombre: '2020',
        acordion: [
          {
            id: 1,
            nombre: 'Enero',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'ANALISIS FINANCIERO ENERO 2019-2020.pdf',
                url: '/assets/files/estados_financieros/05. 2020/1. ENERO/ANALISIS FINANCIERO ENERO 2019-2020 .pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre: 'ESTADO DE RESULTADOS ENERO 2019-2020 1.pdf',
                url: '/assets/files/estados_financieros/05. 2020/1. ENERO/ESTADO DE RESULTADOS  ENERO 2019-2020 1.pdf',
              },
              {
                id: 3,
                tipo: 'pdf',
                nombre: 'ESTADO DE RESULTADOS ENERO 2019-2020 2 .pdf',
                url: '/assets/files/estados_financieros/05. 2020/1. ENERO/ESTADO DE RESULTADOS ENERO 2019-2020 2 .pdf',
              },
              {
                id: 4,
                tipo: 'pdf',
                nombre: 'ESTADO DE SITUACION FINANCIERA ENERO 2019-2020 2.pdf',
                url: '/assets/files/estados_financieros/05. 2020/1. ENERO/ESTADO DE SITUACION FINANCIERA  ENERO 2019-2020 2.pdf',
              },
              {
                id: 5,
                tipo: 'pdf',
                nombre: 'ESTADO DE SITUACION FINANCIERA ENERO 2019-2020 1.pdf',
                url: '/assets/files/estados_financieros/05. 2020/1. ENERO/ESTADO DE SITUACION FINANCIERA ENERO 2019-2020 1.pdf',
              },
            ],
          },
          {
            id: 10,
            nombre: 'Octubre',
            files: [
              {
                id: 6,
                tipo: 'pdf',
                nombre: 'ANALISIS FINANCIERO OCTUBRE 2019-2020 .pdf',
                url: '/assets/files/estados_financieros/05. 2020/10. OCTUBRE/ANALISIS FINANCIERO OCTUBRE 2019-2020 .pdf',
              },
              {
                id: 7,
                tipo: 'pdf',
                nombre: 'ESTADO DE RESULTADOS 1 OCTUBRE 2020 .pdf',
                url: '/assets/files/estados_financieros/05. 2020/10. OCTUBRE/ESTADO DE RESULTADOS 1 OCTUBRE 2020 .pdf',
              },
              {
                id: 8,
                tipo: 'pdf',
                nombre: 'ESTADO DE RESULTADOS 2 OCTUBRE 2020 .pdf',
                url: '/assets/files/estados_financieros/05. 2020/10. OCTUBRE/ESTADO DE RESULTADOS 2 OCTUBRE 2020 .pdf',
              },
              {
                id: 9,
                tipo: 'pdf',
                nombre: 'ESTADO DE SITUACION FINANCIERA 1 OCTUBRE 2020 .pdf',
                url: '/assets/files/estados_financieros/05. 2020/10. OCTUBRE/ESTADO DE SITUACION FINANCIERA 1 OCTUBRE 2020 .pdf',
              },
              {
                id: 10,
                tipo: 'pdf',
                nombre: 'ESTADO DE SITUACION FINANCIERA 2 OCTUBRE 2020 .pdf',
                url: '/assets/files/estados_financieros/05. 2020/10. OCTUBRE/ESTADO DE SITUACION FINANCIERA 2 OCTUBRE 2020 .pdf',
              },
            ],
          },
          {
            id: 11,
            nombre: 'Noviembre',
            files: [
              {
                id: 11,
                tipo: 'pdf',
                nombre: 'ESTADOS FINANCIEROS NOVIEMBRE 2020.pdf',
                url: '/assets/files/estados_financieros/05. 2020/11. NOVIEMBRE/ESTADOS FINANCIEROS NOVIEMBRE 2020.pdf',
              },
            ],
          },
          {
            id: 12,
            nombre: 'Diciembre',
            acordion: [
              {
                id: 12,
                nombre: 'Estados Financieros',
                files: [
                  {
                    id: 13,
                    tipo: 'pdf',
                    nombre: 'ESTADOS FINANCIEROS DICIEMBRE 2020.pdf',
                    url: '/assets/files/estados_financieros/05. 2020/12. DICIEMBRE/ESTADOS FINANCIEROS/ESTADOS FINANCIEROS DICIEMBRE 2020.pdf',
                  },
                ],
              },
              {
                id: 14,
                nombre: 'Revelaciones Estados Financieros',
                files: [
                  {
                    id: 15,
                    tipo: 'pdf',
                    nombre:
                      'REVELACIONES ESTADOS FINANCIEROS DICIEMBRE 2020.pdf',
                    url: '/assets/files/estados_financieros/05. 2020/12. DICIEMBRE/REVELACIONES ESTADOS FINANCIEROS/REVELACIONES ESTADOS FINANCIEROS DICIEMBRE 2020.pdf',
                  },
                ],
              },
            ],
          },
          {
            id: 2,
            nombre: 'Febrero',
            files: [
              {
                id: 16,
                tipo: 'pdf',
                nombre: 'ANALISIS FINANCIERO FEBRERO 2019-2020.pdf',
                url: '/assets/files/estados_financieros/05. 2020/2. FEBRERO/ANALISIS FINANCIERO FEBRERO 2019-2020.pdf',
              },
              {
                id: 17,
                tipo: 'pdf',
                nombre: 'ESTADO DE RESULTADOS 2 FEBRERO 2019 vs 2020.pdf',
                url: '/assets/files/estados_financieros/05. 2020/2. FEBRERO/ESTADO DE RESULTADOS  2 FEBRERO 2019 vs 2020.pdf',
              },
              {
                id: 18,
                tipo: 'pdf',
                nombre: 'ESTADO DE RESULTADOS 1 FEBRERO 2019 VS 2020.pdf',
                url: '/assets/files/estados_financieros/05. 2020/2. FEBRERO/ESTADO DE RESULTADOS 1 FEBRERO 2019 VS 2020.pdf',
              },
              {
                id: 19,
                tipo: 'pdf',
                nombre:
                  'ESTADO DE SITUACION FINANCIERA 1 FEBRERO 2019 VS 2020.pdf',
                url: '/assets/files/estados_financieros/05. 2020/2. FEBRERO/ESTADO DE SITUACION FINANCIERA 1 FEBRERO 2019 VS 2020.pdf',
              },
              {
                id: 20,
                tipo: 'pdf',
                nombre:
                  'ESTADO DE SITUACION FINANCIERA 2 FEBRERO 2019 VS 2020.pdf',
                url: '/assets/files/estados_financieros/05. 2020/2. FEBRERO/ESTADO DE SITUACION FINANCIERA 2 FEBRERO 2019 VS 2020.pdf',
              },
            ],
          },
          {
            id: 3,
            nombre: 'Marzo',
            files: [
              {
                id: 21,
                tipo: 'pdf',
                nombre: 'ANALISIS FINANCIERO MARZO 2019-2020.pdf',
                url: '/assets/files/estados_financieros/05. 2020/3. MARZO/ANALISIS FINANCIERO MARZO 2019-2020.pdf',
              },
              {
                id: 22,
                tipo: 'pdf',
                nombre: 'ESTADO DE RESULTADOS 1 MARZO 2019 2020.pdf',
                url: '/assets/files/estados_financieros/05. 2020/3. MARZO/ESTADO DE RESULTADOS 1 MARZO 2019 2020.pdf',
              },
              {
                id: 23,
                tipo: 'pdf',
                nombre: 'ESTADO DE RESULTADOS 2 MARZO 2019 2019.pdf',
                url: '/assets/files/estados_financieros/05. 2020/3. MARZO/ESTADO DE RESULTADOS 2 MARZO 2019 2019.pdf',
              },
              {
                id: 24,
                tipo: 'pdf',
                nombre: 'ESTADO DE SITUACION FINANCIERA 1 MARZO 2019 2018.pdf',
                url: '/assets/files/estados_financieros/05. 2020/3. MARZO/ESTADO DE SITUACION FINANCIERA 1  MARZO 2019 2018.pdf',
              },
              {
                id: 25,
                tipo: 'pdf',
                nombre: 'ESTADO DE SITUACION FINANCIERA 2 MARZO 2019 2020.pdf',
                url: '/assets/files/estados_financieros/05. 2020/3. MARZO/ESTADO DE SITUACION FINANCIERA 2 MARZO 2019 2020.pdf',
              },
            ],
          },
          {
            id: 4,
            nombre: 'Abril',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'ANALISIS FINANCIERO ABRIL 2019-2020.pdf',
                url: '/assets/files/estados_financieros/05. 2020/4. ABRIL/ANALISIS FINANCIERO ABRIL 2019-2020.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre: 'ESTADO DE  RESULTADOS 2 ABRIL 2019 2020.pdf',
                url: '/assets/files/estados_financieros/05. 2020/4. ABRIL/ESTADO DE  RESULTADOS 2 ABRIL 2019 2020.pdf',
              },
              {
                id: 3,
                tipo: 'pdf',
                nombre: 'ESTADO DE RESULTADOS 1 ABRIL 2020 2019 2020.pdf',
                url: '/assets/files/estados_financieros/05. 2020/4. ABRIL/ESTADO DE RESULTADOS 1 ABRIL 2020 2019 2020.pdf',
              },
              {
                id: 4,
                tipo: 'pdf',
                nombre: 'ESTADO DE SITUACION FINANCIERA 1 ABRIL 2019 2020.pdf',
                url: '/assets/files/estados_financieros/05. 2020/4. ABRIL/ESTADO DE SITUACION FINANCIERA 1 ABRIL 2019 2020.pdf',
              },
              {
                id: 5,
                tipo: 'pdf',
                nombre: 'ESTADO DE  RESULTADOS 2 ABRIL 2019 2020.pdf',
                url: '/assets/files/estados_financieros/05. 2020/4. ABRIL/ESTADO DE  RESULTADOS 2 ABRIL 2019 2020.pdf',
              },
            ],
          },
          {
            id: 5,
            nombre: 'Mayo',
            files: [
              {
                id: 6,
                tipo: 'pdf',
                nombre: 'ANALISIS FINANCIERO MAYO 2019-2020.pdf',
                url: '/assets/files/estados_financieros/05. 2020/5. MAYO/ANALISIS FINANCIERO MAYO 2019-2020.pdf',
              },
              {
                id: 7,
                tipo: 'pdf',
                nombre: 'ESTADO DE RESULTADOS 1 MAYO 2019 2020.pdf',
                url: '/assets/files/estados_financieros/05. 2020/5. MAYO/ESTADO DE RESULTADOS 1 MAYO 2019 2020.pdf',
              },
              {
                id: 8,
                tipo: 'pdf',
                nombre: 'ESTADO DE RESULTADOS 2 MAYO 2019 2020.pdf',
                url: '/assets/files/estados_financieros/05. 2020/5. MAYO/ESTADO DE RESULTADOS 2 MAYO 2019 2020.pdf',
              },
              {
                id: 9,
                tipo: 'pdf',
                nombre: 'ESTADO DE SITUACION FINANCIERA 1 MAYO 2019 2020.pdf',
                url: '/assets/files/estados_financieros/05. 2020/5. MAYO/ESTADO DE SITUACION FINANCIERA 1 MAYO 2019 2020.pdf',
              },
              {
                id: 10,
                tipo: 'pdf',
                nombre: 'ESTADO DE SITUACION FINANCIERA 2 MAYO 2019 2020.pdf',
                url: '/assets/files/estados_financieros/05. 2020/5. MAYO/ESTADO DE SITUACION FINANCIERA 2 MAYO 2019 2020.pdf',
              },
            ],
          },
          {
            id: 6,
            nombre: 'Junio',
            files: [
              {
                id: 11,
                tipo: 'pdf',
                nombre: 'ANALISIS FINANCIERO JUNIO 2019-2020.pdf',
                url: '/assets/files/estados_financieros/05. 2020/6. JUNIO/ANALISIS FINANCIERO JUNIO 2019-2020.pdf',
              },
              {
                id: 12,
                tipo: 'pdf',
                nombre: 'ESTADO DE RESULTADOS 1 JUNIO 2020.pdf',
                url: '/assets/files/estados_financieros/05. 2020/6. JUNIO/ESTADO DE RESULTADOS 1 JUNIO 2020.pdf',
              },
              {
                id: 13,
                tipo: 'pdf',
                nombre: 'ESTADO DE RESULTADOS 2 JUNIO 2020.pdf',
                url: '/assets/files/estados_financieros/05. 2020/6. JUNIO/ESTADO DE RESULTADOS 2 JUNIO 2020.pdf',
              },
              {
                id: 14,
                tipo: 'pdf',
                nombre: 'ESTADO DE SITUACION FINANCIERA 1 JUNIO 2020.pdf',
                url: '/assets/files/estados_financieros/05. 2020/6. JUNIO/ESTADO DE SITUACION FINANCIERA 1 JUNIO 2020.pdf',
              },
              {
                id: 15,
                tipo: 'pdf',
                nombre: 'ESTADO DE SITUACION FINANCIERA 2 JUNIO 2020.pdf',
                url: '/assets/files/estados_financieros/05. 2020/6. JUNIO/ESTADO DE SITUACION FINANCIERA 2 JUNIO 2020.pdf',
              },
            ],
          },
          {
            id: 7,
            nombre: 'Julio',
            files: [
              {
                id: 16,
                tipo: 'pdf',
                nombre: 'ESTADO DE RESULTADOS 1 JULIO 2020 .pdf',
                url: '/assets/files/estados_financieros/05. 2020/7. JULIO/ESTADO DE RESULTADOS 1 JULIO 2020 .pdf',
              },
              {
                id: 17,
                tipo: 'pdf',
                nombre: 'ESTADO DE RESULTADOS 2 JULIO DE 2020.pdf',
                url: '/assets/files/estados_financieros/05. 2020/7. JULIO/ESTADO DE RESULTADOS 2 JULIO DE 2020.pdf',
              },
              {
                id: 18,
                tipo: 'pdf',
                nombre: 'ESTADO DE SITUACION FINANCIERA 1 JULIO 2020.pdf',
                url: '/assets/files/estados_financieros/05. 2020/7. JULIO/ESTADO DE SITUACION FINANCIERA 1 JULIO 2020.pdf',
              },
              {
                id: 19,
                tipo: 'pdf',
                nombre: 'ESTADO DE SITUACION FIRNANCIERA 2 JULIO 2020.pdf',
                url: '/assets/files/estados_financieros/05. 2020/7. JULIO/ESTADO DE SITUACION FIRNANCIERA 2 JULIO 2020.pdf',
              },
            ],
          },
          {
            id: 8,
            nombre: 'Agosto',
            files: [
              {
                id: 20,
                tipo: 'pdf',
                nombre: 'ESTADO DE RESULTADOS 1 AGOSTO 2020 .pdf',
                url: '/assets/files/estados_financieros/05. 2020/8. AGOSTO/ESTADO DE RESULTADOS 1 AGOSTO 2020 .pdf',
              },
              {
                id: 21,
                tipo: 'pdf',
                nombre: 'ESTADO DE RESULTADOS 2 AGOSTO DE 2020 .pdf',
                url: '/assets/files/estados_financieros/05. 2020/8. AGOSTO/ESTADO DE RESULTADOS 2 AGOSTO DE 2020 .pdf',
              },
              {
                id: 22,
                tipo: 'pdf',
                nombre: 'ESTADO DE SITUACION FINANCIERA 1 AGOSTO 2020 .pdf',
                url: '/assets/files/estados_financieros/05. 2020/8. AGOSTO/ESTADO DE SITUACION FINANCIERA 1 AGOSTO 2020 .pdf',
              },
              {
                id: 23,
                tipo: 'pdf',
                nombre: 'ESTADO DE SITUACION FIRNANCIERA 2 AGOSTO 2020 .pdf',
                url: '/assets/files/estados_financieros/05. 2020/8. AGOSTO/ESTADO DE SITUACION FIRNANCIERA 2 AGOSTO 2020 .pdf',
              },
            ],
          },
          {
            id: 9,
            nombre: 'Septiembre',
            files: [
              {
                id: 24,
                tipo: 'pdf',
                nombre: 'ANALISIS FINANCIERO SEPTIEMBRE 2019-2020.pdf',
                url: '/assets/files/estados_financieros/05. 2020/9. SEPTIEMBRE/ANALISIS FINANCIERO SEPTIEMBRE 2019-2020.pdf',
              },
              {
                id: 25,
                tipo: 'pdf',
                nombre: 'ESTADO DE RESULTADOS 1 SEPTIEMBRE. 2020 .pdf',
                url: '/assets/files/estados_financieros/05. 2020/9. SEPTIEMBRE/ESTADO DE RESULTADOS 1 SEPTIEMBRE. 2020 .pdf',
              },
              {
                id: 26,
                tipo: 'pdf',
                nombre: 'ESTADO DE RESULTADOS 2 SEPTIEMBRE. 2020 .pdf',
                url: '/assets/files/estados_financieros/05. 2020/9. SEPTIEMBRE/ESTADO DE RESULTADOS 2 SEPTIEMBRE. 2020 .pdf',
              },
              {
                id: 27,
                tipo: 'pdf',
                nombre: 'ESTADO DE SITUACION FINANCIERA 1 SEPTIEMBRE 2020 .pdf',
                url: '/assets/files/estados_financieros/05. 2020/9. SEPTIEMBRE/ESTADO DE SITUACION FINANCIERA 1 SEPTIEMBRE 2020 .pdf',
              },
              {
                id: 28,
                tipo: 'pdf',
                nombre: 'ESTADO DE SITUACION FINANCIERA 2 SEPTIEMBRE 2020 .pdf',
                url: '/assets/files/estados_financieros/05. 2020/9. SEPTIEMBRE/ESTADO DE SITUACION FINANCIERA 2 SEPTIEMBRE 2020 .pdf',
              },
            ],
          },
        ],
      },
      {
        id: 10,
        nombre: '2019',
        files: [
          {
            id: 1,
            tipo: 'pdf',
            nombre: 'BALANCEABRIL2019.pdf',
            url: '/assets/files/estados_financieros/06. 2019/BALANCEABRIL2019.pdf',
          },
          {
            id: 2,
            tipo: 'pdf',
            nombre: 'BALANCEAGOSTO2019.pdf',
            url: '/assets/files/estados_financieros/06. 2019/BALANCEAGOSTO2019.pdf',
          },
          {
            id: 3,
            tipo: 'pdf',
            nombre: 'BALANCEENERO2019.pdf',
            url: '/assets/files/estados_financieros/06. 2019/BALANCEENERO2019.pdf',
          },
          {
            id: 4,
            tipo: 'pdf',
            nombre: 'BALANCEFEBRERO2019.pdf',
            url: '/assets/files/estados_financieros/06. 2019/BALANCEFEBRERO2019.pdf',
          },
          {
            id: 5,
            tipo: 'pdf',
            nombre: 'BALANCEJULIO2019(1).pdf',
            url: '/assets/files/estados_financieros/06. 2019/BALANCEJULIO2019(1).pdf',
          },
          {
            id: 6,
            tipo: 'pdf',
            nombre: 'BALANCEJULIO2019.pdf',
            url: '/assets/files/estados_financieros/06. 2019/BALANCEJULIO2019.pdf',
          },
          {
            id: 7,
            tipo: 'pdf',
            nombre: 'BALANCEJUNIO2019.pdf',
            url: '/assets/files/estados_financieros/06. 2019/BALANCEJUNIO2019.pdf',
          },
          {
            id: 8,
            tipo: 'pdf',
            nombre: 'BALANCEMARZO2019.pdf',
            url: '/assets/files/estados_financieros/06. 2019/BALANCEMARZO2019.pdf',
          },
          {
            id: 9,
            tipo: 'pdf',
            nombre: 'BALANCEMAYO2019.pdf',
            url: '/assets/files/estados_financieros/06. 2019/BALANCEMAYO2019.pdf',
          },
          {
            id: 10,
            tipo: 'pdf',
            nombre: 'BALANCENOVIEMBRE2019.pdf',
            url: '/assets/files/estados_financieros/06. 2019/BALANCENOVIEMBRE2019.pdf',
          },
          {
            id: 11,
            tipo: 'pdf',
            nombre: 'BALANCEOCTUBRE2019.pdf',
            url: '/assets/files/estados_financieros/06. 2019/BALANCEOCTUBRE2019.pdf',
          },
          {
            id: 12,
            tipo: 'pdf',
            nombre: 'BALANCESEPTIEMBRE2019.pdf',
            url: '/assets/files/estados_financieros/06. 2019/BALANCESEPTIEMBRE2019.pdf',
          },
          {
            id: 13,
            tipo: 'pdf',
            nombre: 'publicacion1trimestre2019.pdf',
            url: '/assets/files/estados_financieros/06. 2019/publicacion1trimestre2019.pdf',
          },
        ],
      },
      {
        id: 11,
        nombre: '2018',
        files: [
          {
            id: 1,
            tipo: 'pdf',
            nombre: 'BalanceGeneralABR2018.pdf',
            url: '/assets/files/estados_financieros/07. 2018/BalanceGeneralABR2018.pdf',
          },
          {
            id: 2,
            tipo: 'pdf',
            nombre: 'BalanceGeneralAGO2018.pdf',
            url: '/assets/files/estados_financieros/07. 2018/BalanceGeneralAGO2018.pdf',
          },
          {
            id: 3,
            tipo: 'pdf',
            nombre: 'BalanceGeneralDIC2018.pdf',
            url: '/assets/files/estados_financieros/07. 2018/BalanceGeneralDIC2018.pdf',
          },
          {
            id: 4,
            tipo: 'pdf',
            nombre: 'BalanceGeneralENE2018.pdf',
            url: '/assets/files/estados_financieros/07. 2018/BalanceGeneralENE2018.pdf',
          },
          {
            id: 5,
            tipo: 'pdf',
            nombre: 'BalanceGeneralFEB2018.pdf',
            url: '/assets/files/estados_financieros/07. 2018/BalanceGeneralFEB2018.pdf',
          },
          {
            id: 6,
            tipo: 'pdf',
            nombre: 'BalanceGeneralJUL2018.pdf',
            url: '/assets/files/estados_financieros/07. 2018/BalanceGeneralJUL2018.pdf',
          },
          {
            id: 7,
            tipo: 'pdf',
            nombre: 'BalanceGeneralJUN2018.pdf',
            url: '/assets/files/estados_financieros/07. 2018/BalanceGeneralJUN2018.pdf',
          },
          {
            id: 8,
            tipo: 'pdf',
            nombre: 'BalanceGeneralMAR2018.pdf',
            url: '/assets/files/estados_financieros/07. 2018/BalanceGeneralMAR2018.pdf',
          },
          {
            id: 9,
            tipo: 'pdf',
            nombre: 'BalanceGeneralMAY2018.pdf',
            url: '/assets/files/estados_financieros/07. 2018/BalanceGeneralMAY2018.pdf',
          },
          {
            id: 10,
            tipo: 'pdf',
            nombre: 'BalanceGeneralNOV2018.pdf',
            url: '/assets/files/estados_financieros/07. 2018/BalanceGeneralNOV2018.pdf',
          },
          {
            id: 11,
            tipo: 'pdf',
            nombre: 'BalanceGeneralOCT2018.pdf',
            url: '/assets/files/estados_financieros/07. 2018/BalanceGeneralOCT2018.pdf',
          },
          {
            id: 12,
            tipo: 'pdf',
            nombre: 'BalanceGeneralSEP2018.pdf',
            url: '/assets/files/estados_financieros/07. 2018/BalanceGeneralSEP2018.pdf',
          },
          {
            id: 13,
            tipo: 'pdf',
            nombre: 'BalanceGeneralSuperSaludDIC2018.pdf',
            url: '/assets/files/estados_financieros/07. 2018/BalanceGeneralSuperSaludDIC2018.pdf',
          },
          {
            id: 14,
            tipo: 'pdf',
            nombre: 'CertificacionesEstadosFinancierosENE-JUL2018.pdf',
            url: '/assets/files/estados_financieros/07. 2018/CertificacionesEstadosFinancierosENE-JUL2018.pdf',
          },
        ],
      },
      {
        id: 12,
        nombre: '2017',
        files: [
          {
            id: 1,
            tipo: 'pdf',
            nombre: 'Balance General 2017.pdf',
            url: '/assets/files/estados_financieros/08. 2017/Balance General 2017.pdf',
          },
          {
            id: 2,
            tipo: 'pdf',
            nombre: 'BalanceComparativo2016-2017.pdf',
            url: '/assets/files/estados_financieros/08. 2017/BalanceComparativo2016-2017.pdf',
          },
        ],
      },
      {
        id: 13,
        nombre: '2016',
        files: [
          {
            id: 1,
            tipo: 'pdf',
            nombre: 'Balance General 2016.pdf',
            url: '/assets/files/estados_financieros/09. 2016/Balance General 2016.pdf',
          },
          {
            id: 2,
            tipo: 'pdf',
            nombre: 'BalanceComparativo2016-2015.pdf',
            url: '/assets/files/estados_financieros/09. 2016/BalanceComparativo2016-2015.pdf',
          },
        ],
      },
      {
        id: 14,
        nombre: '2015',
        files: [
          {
            id: 1,
            tipo: 'pdf',
            nombre: 'Anexo1_2015.pdf',
            url: '/assets/files/estados_financieros/10. 2015/Anexo1_2015.pdf',
          },
          {
            id: 2,
            tipo: 'pdf',
            nombre: 'Anexo2_2015.pdf',
            url: '/assets/files/estados_financieros/10. 2015/Anexo2_2015.pdf',
          },
          {
            id: 3,
            tipo: 'pdf',
            nombre: 'Anexo3_2015.pdf',
            url: '/assets/files/estados_financieros/10. 2015/Anexo3_2015.pdf',
          },
          {
            id: 4,
            tipo: 'pdf',
            nombre: 'Anexo4_2015.pdf',
            url: '/assets/files/estados_financieros/10. 2015/Anexo4_2015.pdf',
          },
          {
            id: 5,
            tipo: 'pdf',
            nombre: 'Anexo5_2015.pdf',
            url: '/assets/files/estados_financieros/10. 2015/Anexo5_2015.pdf',
          },
          {
            id: 6,
            tipo: 'pdf',
            nombre: 'Anexo6_2015.pdf',
            url: '/assets/files/estados_financieros/10. 2015/Anexo6_2015.pdf',
          },
          {
            id: 7,
            tipo: 'pdf',
            nombre: 'Balance General 2015.pdf',
            url: '/assets/files/estados_financieros/10. 2015/Balance General 2015.pdf',
          },
          {
            id: 8,
            tipo: 'pdf',
            nombre: 'Balance Supersalud 2015.pdf',
            url: '/assets/files/estados_financieros/10. 2015/Balance Supersalud 2015.pdf',
          },
        ],
      },
      {
        id: 15,
        nombre: '2014',
        files: [
          {
            id: 1,
            tipo: 'pdf',
            nombre: 'Balance General 2014.pdf',
            url: '/assets/files/estados_financieros/11. 2014/Balance General 2014.pdf',
          },
        ],
      },
      {
        id: 16,
        nombre: '2013',
        files: [
          {
            id: 1,
            tipo: 'pdf',
            nombre: 'Balance General 2013.pdf',
            url: '/assets/files/estados_financieros/12. 2013/Balance General 2013.pdf',
          },
          {
            id: 2,
            tipo: 'pdf',
            nombre: 'Balance Supersalud 2013.pdf',
            url: '/assets/files/estados_financieros/12. 2013/Balance Supersalud 2013.pdf',
          },
        ],
      },
      {
        id: 17,
        nombre: '2012',
        files: [
          {
            id: 1,
            tipo: 'pdf',
            nombre: 'Balance General 2012.pdf',
            url: '/assets/files/estados_financieros/13. 2012/Balance General 2012.pdf',
          },
        ],
      },
      {
        id: 18,
        nombre: '2011',
        files: [
          {
            id: 1,
            tipo: 'pdf',
            nombre: 'Balance General 2011.pdf',
            url: '/assets/files/estados_financieros/14. 2011/Balance General 2011.pdf',
          },
        ],
      },
      {
        id: 19,
        nombre: '2010',
        files: [
          {
            id: 1,
            tipo: 'pdf',
            nombre: 'Balance General 2010.pdf',
            url: '/assets/files/estados_financieros/15. 2010/Balance General 2010.pdf',
          },
        ],
      },
    ];

    this.informacionContaduria = [
      {
        id: 1,
        nombre: '2022-2023',
        files: [
          {
            id: 1,
            tipo: 'pdf',
            nombre: 'ESTADOS FINANCIEROS VIGENCIA  2022- 2023 (1).pdf',
            url: '/assets/files/informe_contaduria/01. 2022-2023/ESTADOS FINANCIEROS VIGENCIA  2022- 2023 (1).pdf',
          },
        ],
      },
      {
        id: 2,
        nombre: '2021-2022',
        files: [
          {
            id: 1,
            tipo: 'pdf',
            nombre: 'ESTADOS FINANCIEROS FPS 2021-2022.pdf',
            url: '/assets/files/informe_contaduria/02. 2021-2022/ESTADOS FINANCIEROS FPS 2021-2022.pdf',
          },
        ],
      },
      {
        id: 3,
        nombre: '2020-2021',
        files: [
          {
            id: 1,
            tipo: 'pdf',
            nombre: '2020-2021.pdf',
            url: '/assets/files/informe_contaduria/03. 2020-2021/2020-2021.pdf',
          },
        ],
      },
      {
        id: 4,
        nombre: '2019-2020',
        files: [
          {
            id: 1,
            tipo: 'pdf',
            nombre: 'Información Financiera 2019-2020.pdf',
            url: '/assets/files/informe_contaduria/04. 2019-2020/Información Financiera 2019-2020.pdf',
          },
        ],
      },
      {
        id: 5,
        nombre: '2018-2019',
        files: [
          {
            id: 1,
            tipo: 'pdf',
            nombre:
              'Infromacion Financiera Comparativa 2018 2019 CONTADURIA.pdf',
            url: '/assets/files/informe_contaduria/05. 2018-2019/Infromacion Financiera Comparativa 2018 2019 CONTADURIA.pdf',
          },
          {
            id: 2,
            tipo: 'pdf',
            nombre: 'REVELACIONES VIGENCIA 2019.pdf',
            url: '/assets/files/informe_contaduria/05. 2018-2019/REVELACIONES VIGENCIA 2019.pdf',
          },
        ],
      },
    ];

    this.informacionSalud = [
      {
        id: 1,
        nombre: '2023 - 2024',
        files: [
          {
            id: 1,
            tipo: 'pdf',
            nombre: 'ESTADOS FINANCIEROS 2024-2023 SUPERSALUD.pdf',
            url: '/assets/files/informe_contaduria/2023-2024/ESTADOS FINANCIEROS 2024-2023 SUPERSALUD.pdf',
          },
        ],
      },
      {
        id: 1,
        nombre: '2022 - 2023',
        files: [
          {
            id: 1,
            tipo: 'pdf',
            nombre: 'ESTADOS FINANCEROS 2022-2023 SUPERSALUD P.pdf',
            url: '/assets/files/informe_supersalud/01. 2022 - 2023/ESTADOS FINANCEROS 2022-2023 SUPERSALUD P.pdf',
          },
        ],
      },
      {
        id: 2,
        nombre: '2021 - 2022',
        files: [
          {
            id: 1,
            tipo: 'pdf',
            nombre:
              'INFORMACION FINANCIERA COMPARATIVA 2021-2022 SUPERSALUD.pdf',
            url: '/assets/files/informe_supersalud/02. 2021 - 2022/INFORMACION FINANCIERA COMPARATIVA 2021-2022 SUPERSALUD.pdf',
          },
        ],
      },
      {
        id: 3,
        nombre: '2020 - 2021',
        files: [
          {
            id: 1,
            tipo: 'pdf',
            nombre:
              'INFORMACION  FINANCIERA   COMPARATVOS 2020-2021 SUPERSALUD.pdf',
            url: '/assets/files/informe_supersalud/03. 2020 - 2021/INFORMACION  FINANCIERA   COMPARATVOS 2020-2021 SUPERSALUD.pdf',
          },
        ],
      },
      {
        id: 4,
        nombre: '2019 - 2020',
        files: [
          {
            id: 1,
            tipo: 'pdf',
            nombre:
              'Informacion Financiera Compartiva 2019-2020 SUPERSALUD.pdf',
            url: '/assets/files/informe_supersalud/04. 2019 - 2020/Informacion Financiera Compartiva 2019-2020 SUPERSALUD.pdf',
          },
        ],
      },
      {
        id: 5,
        nombre: '2018 - 2019',
        files: [
          {
            id: 1,
            tipo: 'pdf',
            nombre:
              'Infromacion Financiera comparativa 2018 2019 SUPERSALUD.pdf',
            url: '/assets/files/informe_supersalud/05. 2018 - 2019/Infromacion Financiera comparativa 2018 2019 SUPERSALUD.pdf',
          },
        ],
      },
    ];
  }
}
