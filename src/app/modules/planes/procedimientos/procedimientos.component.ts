import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-procedimientos',
  standalone: true,
  imports: [ NgFor],
  templateUrl: './procedimientos.component.html',
  styleUrl: './procedimientos.component.css'
})
export class ProcedimientosComponent {
  items: { id: number; tipo: string; url: string; nombre: string }[] = [];
  constructor() {
    this.items = [
      {
        id: 1,
        tipo:"pdf",
        url:"/assets/files/planes/Procedimientos_lineamientos/plan_compras/01.%20EMISION%20BONO%20PENSIONAL.pdf",
        nombre: "01. EMISION BONO PENSIONAL.pdf"
      },
      {
        id: 2,
        tipo:"pdf",
        url:"/assets/files/planes/Procedimientos_lineamientos/plan_compras/02.%20RECONOCIMIENTO%20AUXILIO%20FUNERARIO.pdf",
        nombre: "02. RECONOCIMIENTO AUXILIO FUNERARIO.pdf"
    },
    {
      id: 3,
      tipo:"pdf",
      url:"/assets/files/planes/Procedimientos_lineamientos/plan_compras/03.%20SUSTITUCI%c3%93N%20PENSIONAL%20A%20BENEFICIARIOS.pdf",
      nombre: "03. SUSTITUCIÓN PENSIONAL A BENEFICIARIOS.pdf"
    },
    {
        id: 4,
        tipo:"pdf",
        url:"/assets/files/planes/Procedimientos_lineamientos/plan_compras/04.%20RECONOCIMIENTO%20PENSION%20DE%20JUBILACION%20Y%20PENSION%20SANCION.pdf",
        nombre: "04. RECONOCIMIENTO PENSION DE JUBILACION Y PENSION SANCION.pdf"
      },
      {
        id: 5,
        tipo:"pdf",
        url:"/assets/files/planes/Procedimientos_lineamientos/plan_compras/05.%20RELIQUIDACION%20O%20INDEXACION%20DE%20PENSIONES.pdf",
        nombre: "05. RELIQUIDACION O INDEXACION DE PENSIONES.pdf"
        },
        {
          id: 6,
        tipo:"pdf",
        url:"/assets/files/planes/Procedimientos_lineamientos/plan_compras/06.%20RECONOCIMIENTO%20MESADAS%20PENSIONALES%20A%20HEREDEROS.pdf",
        nombre: "06. RECONOCIMIENTO MESADAS PENSIONALES A HEREDEROS.pdf"
      },
      {
        id: 7,
        tipo:"pdf",
        url:"/assets/files/planes/Procedimientos_lineamientos/plan_compras/MANUAL%20DE%20CONTRATACION%20FONDO%20DE%20PASIVO%20SOCIAL%20DE%20FERROCARRILES%20NACIONALES%20DE%20COLOMBIA.pdf",
        nombre: "MANUAL DE CONTRATACION FONDO DE PASIVO SOCIAL DE FERROCARRILES NACIONALES DE COLOMBIA.pdf"
      }
    ]
  }
}
