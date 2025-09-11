import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-manuales',
  standalone: true,
  imports: [NgFor],
  templateUrl: './manuales.component.html',
  styleUrl: './manuales.component.css'
})
export class ManualesComponent {
  items: { id: number; tipo: string; url: string; nombre: string }[] = [];

  constructor() {
    this.items = [
      {
        id:1,
        tipo: "pdf",
        url:"/assets/files/atencion_al_usuario/manuales/MANUAL_DE_CALIDAD.pdf",
        nombre: "MANUAL_DE_CALIDAD.pdf"
      },
      {
        id:2,
        tipo: "pdf",
        url:"/assets/files/atencion_al_usuario/manuales/APGCSGEMS01 MANUAL DE CONTRATACIÓN Y SUPERVISIÓN V7.pdf",
        nombre: "MANUAL_DE_CONTRATACION.pdf"
      },
      {
        id:3,
        tipo: "pdf",
        url:"/assets/files/atencion_al_usuario/manuales/MANUAL_DE_GESTION_%20DE_COBRO_PERSUASIVO_Y_COACTIVO.pdf",
        nombre: "MANUAL_DE_GESTION_ DE_COBRO_PERSUASIVO_Y_COACTIVO.pdf"
      },
      {
        id:4,
        tipo: "pdf",
        url:"/assets/files/atencion_al_usuario/manuales/MANUAL_SEGURIDAD_FPS.pdf",
        nombre: "MANUAL_SEGURIDAD_FPS.pdf"
      }
    ]
  }

}
