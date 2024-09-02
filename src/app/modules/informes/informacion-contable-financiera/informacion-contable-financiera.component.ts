import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { AcordionAnidadoFiles } from '../../../interfaces/acordion';

@Component({
  selector: 'app-informacion-contable-financiera',
  standalone: true,
  imports: [NgbAccordionModule, NgFor],
  templateUrl: './informacion-contable-financiera.component.html',
  styleUrl: './informacion-contable-financiera.component.css',
})
export class InformacionContableFinancieraComponent {
  presupuesto: AcordionAnidadoFiles[] = [];
  constructor() {
    this.presupuesto = [
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
                nombre: 'Ejecucion Presupuestal GASTO.pdf',
                url: '/assets/files/presupuesto/01. 2024/01 Enero/Ejecucion Presupuestal GASTO.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre: 'EjecucionPresupuestalAgregada Reservas.pdf',
                url: '/assets/files/presupuesto/01. 2024/01 Enero/EjecucionPresupuestalAgregada Reservas.pdf',
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
                nombre: 'EjecucionPresupuestal Reserva.pdf',
                url: '/assets/files/presupuesto/01. 2024/02 Febrero/EjecucionPresupuestal Reserva.pdf',
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
                nombre: '_EjecucionPresupuestal CXP.pdf',
                url: '/assets/files/presupuesto/01. 2024/02 Febrero/_EjecucionPresupuestal CXP.pdf',
              },
              {
                id: 7,
                tipo: 'pdf',
                nombre: '_EjecucionPresupuestal Gasto.pdf',
                url: '/assets/files/presupuesto/01. 2024/02 Febrero/_EjecucionPresupuestal Gasto.pdf',
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
                nombre: '_EjecucionPresupuestal CXP (1).pdf',
                url: '/assets/files/presupuesto/01. 2024/03 Marzo/_EjecucionPresupuestal CXP (1).pdf',
              },
              {
                id: 10,
                tipo: 'pdf',
                nombre: '_EjecucionPresupuestal Reserva (1).pdf',
                url: '/assets/files/presupuesto/01. 2024/03 Marzo/_EjecucionPresupuestal Reserva (1).pdf',
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
                tipo: 'xlsx',
                nombre: '_EjecucionPresupuestalAgregada Cuentas por Pagar.xlsx',
                url: '/assets/files/presupuesto/01. 2024/04 Abril/_EjecucionPresupuestalAgregada Cuentas por Pagar.xlsx',
              },
              {
                id: 13,
                tipo: 'xlsx',
                nombre: '_EjecucionPresupuestalAgregada Reserva.xlsx',
                url: '/assets/files/presupuesto/01. 2024/04 Abril/_EjecucionPresupuestalAgregada Reserva.xlsx',
              },
              {
                id: 14,
                tipo: 'xlsx',
                nombre: '_EjecucionPresupuestalAgregada Gasto.xlsx',
                url: '/assets/files/presupuesto/01. 2024/04 Abril/_EjecucionPresupuestalAgregada Gasto.xlsx',
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
                  'REP_ING031_InformeEjecucionPresupuestal ffnn ingresos decreto liquidacion a junio 2024 (1).pdf',
                url: '/assets/files/presupuesto/01. 2024/06 Junio/REP_ING031_InformeEjecucionPresupuestal ffnn ingresos decreto liquidacion a junio 2024 (1).pdf',
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
                nombre: 'EJECUCION CUENTAS X PAGAR A JULIO.pdf',
                url: '/assets/files/presupuesto/01. 2024/07 Julio/EJECUCION CUENTAS X PAGAR A JULIO.pdf',
              },
              {
                id: 24,
                tipo: 'pdf',
                nombre: 'EJECUCION RESERVAS A JULIO.pdf',
                url: '/assets/files/presupuesto/01. 2024/07 Julio/EJECUCION RESERVAS A JULIO.pdf',
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
                nombre: 'EJECUCION DE GASTO ABRIL.pdf',
                url: '/assets/files/presupuesto/02. 2023/04 ABRIL/EJECUCION DE GASTO ABRIL.pdf',
              },
              {
                id: 14,
                tipo: 'pdf',
                nombre: 'EJECUCION DE RESERVAS ABRIL.pdf',
                url: '/assets/files/presupuesto/02. 2023/04 ABRIL/EJECUCION DE RESERVAS ABRIL.pdf',
              },
              {
                id: 15,
                tipo: 'pdf',
                nombre: 'EJECUCION CUENTAS POR PAGAR ABRIL.pdf',
                url: '/assets/files/presupuesto/02. 2023/04 ABRIL/EJECUCION CUENTAS POR PAGAR ABRIL.pdf',
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
                nombre: 'EjecucionPresupuestal CUENTAS POR PAGAR MAYO.pdf',
                url: '/assets/files/presupuesto/02. 2023/05 MAYO/EjecucionPresupuestal CUENTAS POR PAGAR MAYO.pdf',
              },
              {
                id: 19,
                tipo: 'pdf',
                nombre: 'EjecucionPresupuestalAgregada GASTO MAYO .pdf',
                url: '/assets/files/presupuesto/02. 2023/05 MAYO/EjecucionPresupuestalAgregada GASTO MAYO .pdf',
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
                nombre: 'EjecucionPresupuestalAgregadA RESERVA JUNIO.pdf',
                url: '/assets/files/presupuesto/02. 2023/06 JUNIO/EjecucionPresupuestalAgregadA RESERVA JUNIO.pdf',
              },
              {
                id: 22,
                tipo: 'pdf',
                nombre: 'EjecucionPresupuestalAgregada CUENTAS POR PAGAR.pdf',
                url: '/assets/files/presupuesto/02. 2023/06 JUNIO/EjecucionPresupuestalAgregada CUENTAS POR PAGAR.pdf',
              },
              {
                id: 23,
                tipo: 'pdf',
                nombre: 'EjecucionPresupuestalAgregada DEL GASTO JUNIO.pdf',
                url: '/assets/files/presupuesto/02. 2023/06 JUNIO/EjecucionPresupuestalAgregada DEL GASTO JUNIO.pdf',
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
    ];
  }
}
