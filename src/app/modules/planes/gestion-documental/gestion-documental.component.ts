import { Component } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { AcordionFiles, File } from '../../../interfaces/acordion';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-gestion-documental',
  standalone: true,
  imports: [NgbAccordionModule, NgFor],
  templateUrl: './gestion-documental.component.html',
  styleUrl: './gestion-documental.component.css'
})
export class GestionDocumentalComponent {

  items: AcordionFiles[] = [];
  items2: File[] = [];
  constructor() {
    this.items = [
      {
        id:1,
        nombre:" PLAN_INSTITUCIONAL_DE_ARCHIVO_PINAR,",
        files:
        [

          {
            id:1,
            tipo: "excel",
            url:"/assets/files/planes/gestion_documental/PLAN_INSTITUCIONAL_DE_ARCHIVO_PINAR/FORMATO_PLAN_INSTITUCIONAL_DE_ARCHIVO_FPS.xls",
            nombre: "FORMATO_PLAN_INSTITUCIONAL_DE_ARCHIVO_FPS.xls"
          },
          {
            id:2,
            tipo: "pdf",
            url:"/assets/files/planes/gestion_documental/PLAN_INSTITUCIONAL_DE_ARCHIVO_PINAR/PLAN_INSTITUCIONAL_DE_ARCHIVO_FPS.pdf",
            nombre: "PLAN_INSTITUCIONAL_DE_ARCHIVO_FPS.pdf"
          }
        ]
      },

      {
        id:1,
        nombre:" PROGRAMA_GESTION_DOCUMENTAL,",
        files:
        [

          {
            id:1,
            tipo: "pdf",
            url:"/assets/files/planes/gestion_documental/PROGRAMA_GESTION_DOCUMENTAL/PROGRAMA_GESTION_DOCUMENTAL.pdf",
            nombre: "PROGRAMA_GESTION_DOCUMENTAL.pdf"
          }
        ]
      },

      {
        id:1,
        nombre:" TABLAS_DE_RETENCION_DOCUMENTAL,",
        files:
        [

          {
            id:1,
            tipo: "pdf",
            url:"/assets/files/planes/gestion_documental/TABLAS_DE_RETENCION_DOCUMENTAL/Certificado%20Convalidaci%c3%b3n%20TRD%20Ferrocarriles.pdf",
            nombre: "Certificado Convalidación TRD Ferrocarriles.pdf"
          },
          {
            id:2,
            tipo: "pdf",
            url:"/assets/files/planes/gestion_documental/TABLAS_DE_RETENCION_DOCUMENTAL/Resoluci%c3%b3n%200019%20de%202021.pdf",
            nombre: "Resolución 0019 de 2021.pdf"
          },
          {
            id:3,
            tipo: "excel",
            url:"/assets/files/planes/gestion_documental/TABLAS_DE_RETENCION_DOCUMENTAL/Tabla%20Retencion%20Documental%20FPFNC.xlsx",
            nombre: "Tabla Retencion Documental FPFNC.xlsx"
          }
        ]
      }

    ];
    this.items2 =[
      {
        id:1,
        tipo: "pdf",
        url:"/assets/files/planes/gestion_documental/POLITICA_GESTION_DOCUMENTAL.pdf",
        nombre: "POLITICA_GESTION_DOCUMENTAL.pdf"
      },
      {
        id:2,
        tipo: "pdf",
        url:"/assets/files/planes/gestion_documental/RESOLUCION_0736.pdf",
        nombre: "RESOLUCION_0736.pdf"
      },
      {
        id:3,
        tipo: "pdf",
        url:"/assets/files/planes/gestion_documental/RESOLUCION_1124.pdf",
        nombre: "RESOLUCION_1124.pdf"
      }
    ];
  }
}
