import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-guias',
  standalone: true,
  imports: [NgFor],
  templateUrl: './guias.component.html',
  styleUrl: './guias.component.css'
})
export class GuiasComponent {
  items: { id: number; tipo: string; url: string; nombre: string }[] = [];

  constructor() {
    this.items = [
      {
        id:1,
        tipo: "pdf",
        url:"/assets/files/atencion_al_usuario/guias/CARTA DE DERECHOS Y DEBERES DE LA PERSONA AFILIADA Y DEL PACIENTE EN EL SISTEMA GENERAL DE SEGURIDAD SOCIAL EN SALUD Y DE LA CARTA DE DESEMPEÑO DE LAS ENTIDADES PROM.pdf" ,
        nombre: "CARTA DE DERECHOS Y DEBERES DE LA PERSONA AFILIADA Y DEL PACIENTE EN EL SISTEMA GENERAL DE SEGURIDAD SOCIAL EN SALUD Y DE LA CARTA DE DESEMPEÑO DE LAS ENTIDADES PROMOTORAS DE SALUD.pdf"
      },
      {
        id:2,
        tipo: "pdf",
        url:"/assets/files/atencion_al_usuario/guias/GUIA%20ADMIN%20RIESGO%20V4.pdf" ,
        nombre: "GUIA ADMIN RIESGO V4.pdf"
      },
      {
        id:3,
        tipo: "pdf",
        url:"/assets/files/atencion_al_usuario/guias/GUIA%20COMUNICACION.pdf" ,
        nombre: "GUIA COMUNICACION.pdf"
      },
      {
        id:4,
        tipo: "pdf",
        url:"/assets/files/atencion_al_usuario/guias/GUIA%20DE%20ORIENTACION%20AL%20CIUDADANO.pdf" ,
        nombre: "GUIA DE ORIENTACION AL CIUDADANO.PDF"
      },
      {
        id:5,
        tipo: "pdf",
        url:"/assets/files/atencion_al_usuario/guias/GUIA%20ELABORACION%20CODI%20DOCUMENTOS.pdf" ,
        nombre: "GUIA ELABORACION CODI DOCUMENTOS.pdf"
      },
      {
        id:6,
        tipo: "pdf",
        url:"/assets/files/atencion_al_usuario/guias/GUIA%20FORMULACION%20ELEMENTOS%20DE.pdf" ,
        nombre: "GUIA FORMULACION ELEMENTOS DE.pdf"
      },
      {
        id:7,
        tipo: "pdf",
        url:"/assets/files/atencion_al_usuario/guias/GUIA%20GESTION%20ACTIVOS%20DE%20INFORMACION.pdf" ,
        nombre: "GUIA GESTION ACTIVOS DE INFORMACION.pdf"
      },
      {
        id:8,
        tipo: "pdf",
        url:"/assets/files/atencion_al_usuario/guias/GUIA%20PARA%20LA%20PARTICIPACION%20CIUDADANA%20%20V4.pdf" ,
        nombre: "GUIA PARA LA PARTICIPACION CIUDADANA  V4.pdf"
      },
      {
        id:9,
        tipo: "pdf",
        url:"/assets/files/atencion_al_usuario/guias/GUIA%20PLAN%20CONTINGENCIA.pdf" ,
        nombre: "GUIA PLAN CONTINGENCIA.pdf"
      },
      {
        id:10,
        tipo: "pdf",
        url:"/assets/files/atencion_al_usuario/guias/GUIA%20PLAN%20DE%20ACCION.pdf" ,
        nombre: "GUIA PLAN DE ACCION.pdf"
      },
      {
        id:11,
        tipo: "pdf",
        url:"/assets/files/atencion_al_usuario/guias/GUIA%20POLITICA%20ADMINISTRACI%c3%93N%20INDICADORES.pdf" ,
        nombre: "GUIA POLITICA ADMINISTRACIÓN INDICADORES.pdf"
      },
      {
        id:12,
        tipo: "pdf",
        url:"/assets/files/atencion_al_usuario/guias/GUIA%20RESOLUCION%20CONFLICTOS.pdf" ,
        nombre: "GUIA RESOLUCION CONFLICTOS.pdf"
      },
      {
        id:13,
        tipo: "pdf",
        url:"/assets/files/atencion_al_usuario/guias/GU%c3%8dA%20DE%20PROTOCOLO%20PARA%20LA%20ATENCI%c3%93N%20AL%20CIUDADANO%20V3.pdf" ,
        nombre: "GUÍA DE PROTOCOLO PARA LA ATENCIÓN AL CIUDADANO V3.pdf"
      }
    ]
  }

}
