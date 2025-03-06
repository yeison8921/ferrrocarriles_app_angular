import { Component } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { AcordionFiles } from '../../../interfaces/acordion';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-consulta-ciudadana',
  standalone: true,
  imports: [NgbAccordionModule, NgFor],
  templateUrl: './consulta-ciudadana.component.html',
  styleUrl: './consulta-ciudadana.component.css',
})
export class ConsultaCiudadanaComponent {
  items: AcordionFiles[] = [];
  constructor() {
    this.items = [
      {
        id: 1,
        nombre:
          'Tema de consulta (normas, políticas, programas o proyectos) y resumen del mismo',
        files: [
          {
            id: 1,
            tipo: 'pdf',
            url: 'assets/files/contenidos-sobre-consulta-ciudadana/01 Tema de consulta/01. 2022/ANEXO 3 - FIRMAS ACTA DE SENSIBILIZACION.pdf',
            nombre: 'ANEXO 3 - FIRMAS ACTA DE SENSIBILIZACIÓN.pdf',
          },
          {
            id: 1,
            tipo: 'pdf',
            url: 'assets/files/contenidos-sobre-consulta-ciudadana/01 Tema de consulta/01. 2022/MODELO DE ATENCION INTEGRAL EN SALUD PARA FERROCARRILES NACIONALES (MAISFEN).pdf',
            nombre:
              'MODELO DE ATENCIÓN INTEGRAL EN SALUD PARA FERROCARRILES NACIONALES (MAISFEN).pdf',
          },
        ],
      },
      {
        id: 2,
        nombre: 'Habilitar canales de consulta y caja de herramientas',
        files: [
          {
            id: 1,
            tipo: '',
            url: '',
            nombre: '',
          },
        ],
      },
      {
        id: 3,
        nombre:
          'Publicar observaciones y comentarios y las respuestas de proyectos normativos',
        files: [
          {
            id: 1,
            tipo: '',
            url: '',
            nombre: '',
          },
        ],
      },
      {
        id: 4,
        nombre: 'Crear un enlace que redireccione a la Sección Normativa',
        files: [
          {
            id: 1,
            tipo: '',
            url: '',
            nombre: '',
          },
        ],
      },
      {
        id: 5,
        nombre: 'Facilitar herramienta de evaluación',
        files: [
          {
            id: 1,
            tipo: '',
            url: '',
            nombre: '',
          },
        ],
      },
      {
        id: 6,
        nombre: 'Planeación estratégica y Planes Institucionales',
        files: [
          {
            id: 1,
            tipo: 'excel',
            url: 'assets/files/contenidos-sobre-consulta-ciudadana/06 Planeación estratégica y Planes Institucionales/PROYECTO PLAN DE ACCIÓN 2025.xlsx',
            nombre: 'PROYECTO PLAN DE ACCIÓN 2025.xlsx',
          },
          {
            id: 2,
            tipo: 'excel',
            url: 'assets/files/contenidos-sobre-consulta-ciudadana/06 Planeación estratégica y Planes Institucionales/PROYECTO PLAN ESTRATÉGICO 2025.xlsx',
            nombre: 'PROYECTO PLAN ESTRATÉGICO 2025.xlsx',
          },
        ],
      },
    ];
  }
}
