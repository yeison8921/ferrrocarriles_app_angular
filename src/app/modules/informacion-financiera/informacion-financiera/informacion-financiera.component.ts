import { Component } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { AcordionAnidadoFiles } from '../../../interfaces/acordion';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-informacion-financiera',
  standalone: true,
  imports: [NgbAccordionModule,
    NgFor
  ],
  templateUrl: './informacion-financiera.component.html',
  styleUrl: './informacion-financiera.component.css'
  
})
export class InformacionFinancieraComponent {

  files: AcordionAnidadoFiles[];

  constructor(){
    this.files = [{ 
      id: 1,
      nombre: '2024',
      acordion: [{
        id: 1,
        nombre: 'Enero',
        files: [{
          id: 1,
          extension: 'pdf',
          nombre: 'Ejecucion Presupuestal  GASTO.pdf',
          url: "assets/document/presupuesto/01. 2024/01 Enero/Ejecucion Presupuestal  GASTO.pdf"
        },
        {
          id: 1,
          extension: 'pdf',
          nombre: 'EjecucionPresupuestalAgregada  Reservas.pdf',
          url: "assets/document/presupuesto/01. 2024/01 Enero/EjecucionPresupuestalAgregada  Reservas.pdf"
        }]
      },
      {
        id: 1,
        nombre: 'Febrero',
        files: [{
          id: 1,
          extension: 'pdf',
          nombre: 'EjecucionPresupuestal    Reserva.pdf',
          url: "assets/document/presupuesto/01. 2024/01 Febrero/EjecucionPresupuestal    Reserva.pdf"
        },
        {
          id: 1,
          extension: 'pdf',
          nombre: 'InformeEjecucionPresupuestal -PENSION INGRESOS FEBRERO (1).pdf',
          url: "assets/document/presupuesto/01. 2024/01 Febrero/InformeEjecucionPresupuestal -PENSION INGRESOS FEBRERO (1).pdf"
        }]
      }]
    },
    {
      id: 1,
      nombre: '2023',
      acordion: [{
        id: 1,
        nombre: 'Enero',
        files: [{
          id: 1,
          extension: 'pdf',
          nombre: 'Ejecución Cuentas por Pagar Enero_2023.pdf',
          url: "assets/document/presupuesto/01. 2024/01 Enero/Ejecucion Presupuestal  GASTO.pdf"
        },
        {
          id: 1,
          extension: 'pdf',
          nombre: 'Ejecución Gastos Enero_2023 x.pdf',
          url: "assets/document/presupuesto/01. 2024/01 Enero/EjecucionPresupuestalAgregada  Reservas.pdf"
        }]
      },
      {
        id: 1,
        nombre: 'Febrero',
        files: [{
          id: 1,
          extension: 'pdf',
          nombre: 'Ejecución Cuentas por Pagar Febrero_2023.pdf',
          url: "assets/document/presupuesto/01. 2024/01 Febrero/EjecucionPresupuestal    Reserva.pdf"
        },
        {
          id: 1,
          extension: 'pdf',
          nombre: 'Ejecución Gastos Febrero_2023.pdf',
          url: "assets/document/presupuesto/01. 2024/01 Febrero/InformeEjecucionPresupuestal -PENSION INGRESOS FEBRERO (1).pdf"
        }]
      }]
    }]

  }

}
