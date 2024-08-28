import { Component } from '@angular/core'; 
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { AcordionFiles } from '../../../interfaces/acordion';
import { NgFor } from '@angular/common'; 

@Component({
  selector: 'app-consulta-ciudadana',
  standalone: true,
  imports: [NgbAccordionModule, NgFor],
  templateUrl: './consulta-ciudadana.component.html',
  styleUrl: './consulta-ciudadana.component.css'
})
export class ConsultaCiudadanaComponent {

  items: AcordionFiles[] = [];
  constructor() {
    this.items = [
        {
          id: 1,
        nombre: "Tema de consulta (normas, políticas, programas o proyectos) y resumen del mismo",
        files: [
          
            {
              id: 1,
              tipo: "pdf",
              url: "../../aym_document/contenidos-sobre-consulta-ciudadana/01%20Tema%20de%20consulta%20(normas%2c%20pol%c3%adticas%2c%20programas%20o%20proyectos)%20y%20resumen%20del%20mismo/01.%202022/ANEXO%203%20-%20FIRMAS%20ACTA%20DE%20SENSIBILIZACI%c3%93N.pdf",
              nombre: "ANEXO 3 - FIRMAS ACTA DE SENSIBILIZACIÓN.pdf"
            },
            {
              id: 1,
              tipo: "pdf",
              url: "../../aym_document/contenidos-sobre-consulta-ciudadana/01%20Tema%20de%20consulta%20(normas%2c%20pol%c3%adticas%2c%20program/01.%202022/MODELO%20DE%20ATENCI%c3%93N%20INTEGRAL%20EN%20SALUD%20PARA%20FERROCARRILES%20NACIONALES%20(MAISFEN).a4f.d",
              nombre: "MODELO DE ATENCIÓN INTEGRAL EN SALUD PARA FERROCARRILES NACIONALES (MAISFEN).pdf"
            }
          ],
        },
        {
          id: 2,
        nombre: "Habilitar canales de consulta y caja de herramientas",
        files: [
            {
              id: 1,
              tipo: "",
              url: "",
              nombre: ""
            }
          ],
        },
          {
          id: 3,
        nombre: "Publicar observaciones y comentarios y las respuestas de proyectos normativos",
        files: [
            {
              id: 1,
              tipo: "",
              url: "",
              nombre: ""
            }
          ],
      },
      {
        id: 4,
      nombre: "Crear un enlace que redireccione a la Sección Normativa",
      files: [
          {
            id: 1,
            tipo: "",
            url: "",
            nombre: ""
          }
        ],
      },
      {
        id: 5,
      nombre: "Facilitar herramienta de evaluación",
      files: [
          {
            id: 1,
            tipo: "",
            url: "",
            nombre: ""
          }
        ],
      },
      {
        id: 6,
      nombre: "Planeación estratégica y Planes Institucionales",
      files: [
          {
            id: 1,
            tipo: "excel",
            url: "../../aym_document/contenidos-sobre-consulta-ciudadana/06%20Planeaci%c3%b3n%20estrat%c3%a9gica%20y%20Planes%20Institucionales/Plan%20Anticorrupci%c3%b3n%20y%20Atenci%c3%b3n%20al%20Ciudadano%20-%20Preeliminar.xlsx",
            nombre: "Plan Anticorrupción y Atención al Ciudadano - Preeliminar.xlsx"
          },
          {
            id: 2,
            tipo: "excel",
            url: "../../aym_document/contenidos-sobre-consulta-ciudadana/06%20Planeaci%c3%b3n%20estrat%c3%a9gica%20y%20Planes%20Institucionales/Plan%20de%20Acci%c3%b3n%202024%20%e2%80%93%20Preliminar.xlsx",
            nombre: "Plan de Acción 2024 – Preliminar.xlsx"
          },
          {
            id: 3,
            tipo: "excel",
            url: "../../aym_document/contenidos-sobre-consulta-ciudadana/06%20Planeaci%c3%b3n%20estrat%c3%a9gica%20y%20Planes%20Institucionales/Planes%20Estrat%c3%a9gico%20Institucional%202024%e2%80%932026%20%e2%80%93%20Preliminar.xlsx",
            nombre: "Planes Estratégico Institucional 2024–2026 – Preliminar.xlsx"
          }
        ],
      },
    ];
  }

}
