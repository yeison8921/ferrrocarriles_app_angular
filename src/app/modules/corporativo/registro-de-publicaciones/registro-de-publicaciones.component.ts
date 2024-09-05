import { Component } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { AcordionFiles } from '../../../interfaces/acordion';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-registro-de-publicaciones',
  standalone: true,
  imports: [NgbAccordionModule, NgFor],
  templateUrl: './registro-de-publicaciones.component.html',
  styleUrl: './registro-de-publicaciones.component.css'
})
export class RegistroDePublicacionesComponent {
  items: AcordionFiles[] = [];
  constructor() {
    this.items = [
       {
        id: 1,
        nombre: "2022",
        files: [
            {
              id: 1,
              tipo: "pdf",
              url: "/assets/files/corporativo/registro_de_publicaciones/01. 2022/CONTROL Y REGISTRO DE PUBLICACIONES PAGINA WEB 2022.pdf",
              nombre: "CONTROL Y REGISTRO DE PUBLICACIONES PAGINA WEB 2022.pdf"
            }
          ],
        },
        {
          id: 2,
        nombre: "2021",
        files: [
            {
              id: 1,
              tipo: "pdf",
              url: "/assets/files/corporativo/registro_de_publicaciones/02. 2021/01 CONTROL DE PUBLICACIONES EN PÁGINA WEB I SEMESTRE 2021.pdf",
              nombre: "CONTROL Y REGISTRO DE PUBLICACIONES PAGINA WEB I SEMESTRE 2021.pdf"
            },
            {
              id: 1,
              tipo: "pdf",
              url: "/assets/files/corporativo/registro_de_publicaciones/02. 2021/02 CONTROL DE PUBLICACIONES EN PÁGINA WEB II SEMESTRE 2021.pdf",
              nombre: "CONTROL Y REGISTRO DE PUBLICACIONES PAGINA WEB II SEMESTRE 2021.pdf"
            }
          ],
        },
        {
          id: 3,
        nombre: "2020",
        files: [
          {
            id: 1,
            tipo: "pdf",
            url: "/assets/files/corporativo/registro_de_publicaciones/03. 2020/REGISTRO DE PUBLICACIONES WEB 2020.pdf",
            nombre: "CONTROL Y REGISTRO DE PUBLICACIONES PAGINA WEB 2020.pdf"
          }
          ],
        },
    ];
  }

} 
