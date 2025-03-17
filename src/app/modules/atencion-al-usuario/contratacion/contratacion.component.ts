import { Component } from '@angular/core';
import { AcordionAnidadoFiles } from '../../../interfaces/acordion';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-contratacion',
  standalone: true,
  imports: [NgbAccordionModule, NgFor],
  templateUrl: './contratacion.component.html',
  styleUrl: './contratacion.component.css',
})
export class ContratacionComponent {
  items: AcordionAnidadoFiles[] = [];
  constructor() {
    this.items = [
      {
        id: 1,
        nombre: 'CONCURSO DE MERITO ABIERTO',
        acordion: [
          {
            id: 1,
            nombre: '2023',
            files: [
              {
                id: 1,
                tipo: 'excel',
                nombre:
                  'BASE DE DATOS FPS 2023 - CONCURSO DE MERITOS - DICIEMBRE 2023.xlsm',
                url: 'assets/files/contract/CONCURSO DE MERITO ABIERTO/01. 2023/BASE DE DATOS FPS 2023 - CONCURSO DE MERITOS - DICIEMBRE 2023.xlsm',
              },
              {
                id: 2,
                tipo: 'excel',
                nombre:
                  'BASE DE DATOS FPS 2023 - CONCURSO DE MERITOS - NOVIEMBRE 2023.xlsm',
                url: 'assets/files/contract/CONCURSO DE MERITO ABIERTO/01. 2023/BASE DE DATOS FPS 2023 - CONCURSO DE MERITOS - NOVIEMBRE 2023.xlsm',
              },
              {
                id: 3,
                tipo: 'excel',
                nombre:
                  'BASE DE DATOS FPS 2023 - CONCURSO DE MERITOS - OCTUBRE 2023.xlsm',
                url: 'assets/files/contract/CONCURSO DE MERITO ABIERTO/01. 2023/BASE DE DATOS FPS 2023 - CONCURSO DE MERITOS - OCTUBRE 2023.xlsm',
              },
              {
                id: 4,
                tipo: 'excel',
                nombre: 'BASE DE DATOS FPS 2023 CONCURSO DE MERITOS.xlsm',
                url: 'assets/files/contract/CONCURSO DE MERITO ABIERTO/01. 2023/BASE DE DATOS FPS 2023 CONCURSO DE MERITOS.xlsm',
              },
            ],
          },
          {
            id: 2,
            nombre: '2021',
            files: [
              {
                id: 5,
                tipo: 'excel',
                nombre: 'CONCURSO DE MERITOS.xlsx',
                url: 'assets/files/contract/CONCURSO DE MERITO ABIERTO/02. 2021/CONCURSO DE MERITOS.xlsx',
              },
            ],
          },
          {
            id: 3,
            nombre: '2020',
            files: [
              {
                id: 6,
                tipo: 'excel',
                nombre:
                  'CONTRATACION MODALIDAD CONCURSO DE MERITO ABIERTO.xlsx',
                url: 'assets/files/contract/CONCURSO DE MERITO ABIERTO/03. 2020/CONTRATACION MODALIDAD CONCURSO DE MERITO ABIERTO.xlsx',
              },
            ],
          },
        ],
      },
      {
        id: 2,
        nombre: 'CONTRATACIÓN DIRECTA',
        acordion: [
          {
            id: 1,
            nombre: '2025',
            files: [
              {
                id: 1,
                tipo: 'excel',
                nombre: 'CONTRATOS A 31 DE ENERO 2025.xlsx',
                url: 'assets/files/contract/CONTRATACIÓN DIRECTA/01. 2025/CONTRATOS A 31 DE ENERO 2025.xlsx',
              },
              {
                id: 1,
                tipo: 'excel',
                nombre: 'CONTRATOS FEBRERO DE 2025.xlsx',
                url: 'assets/files/contract/CONTRATACIÓN DIRECTA/01. 2025/CONTRATOS FEBRERO DE 2025.xlsx',
              },
            ],
          },
          {
            id: 2,
            nombre: '2024',
            files: [
              {
                id: 2,
                tipo: 'excel',
                nombre: '01 BASE DE DATOS FPS 2024.xlsm',
                url: 'assets/files/contract/CONTRATACIÓN DIRECTA/02. 2024/01 BASE DE DATOS FPS 2024.xlsm',
              },
              {
                id: 3,
                tipo: 'excel',
                nombre: '02 BASE DE DATOS FPS 2024.xlsm',
                url: 'assets/files/contract/CONTRATACIÓN DIRECTA/02. 2024/02 BASE DE DATOS FPS 2024.xlsm',
              },
              {
                id: 4,
                tipo: 'excel',
                nombre: '03 BASE DE DATOS FPS 2024.xlsx',
                url: 'assets/files/contract/CONTRATACIÓN DIRECTA/02. 2024/03 BASE DE DATOS FPS 2024.xlsx',
              },
              {
                id: 5,
                tipo: 'excel',
                nombre: '04 BASE DE DATOS FPS 2024.xlsx',
                url: 'assets/files/contract/CONTRATACIÓN DIRECTA/02. 2024/04 BASE DE DATOS FPS 2024.xlsx',
              },
              /*{
                id: 6,
                tipo: 'excel',
                nombre: '05 BASE DE DATOS FPS 2024.xlsm',
                url: 'assets/files/contract/CONTRATACIÓN DIRECTA/02. 2024/05 BASE DE DATOS FPS 2024.xlsm',
              },
              {
                id: 7,
                tipo: 'excel',
                nombre: '06 BASE DE DATOS FPS 2024.xlsx',
                url: 'assets/files/contract/CONTRATACIÓN DIRECTA/02. 2024/06 BASE DE DATOS FPS 2024.xlsx',
              },
              {
                id: 8,
                tipo: 'excel',
                nombre: '07 BASE DE DATOS FPS 2024.xlsx',
                url: 'assets/files/contract/CONTRATACIÓN DIRECTA/02. 2024/07 BASE DE DATOS FPS 2024.xlsx',
              },
              {
                id: 9,
                tipo: 'excel',
                nombre: '08 BASE DE DATOS FPS 2024.xlsx',
                url: 'assets/files/contract/CONTRATACIÓN DIRECTA/02. 2024/08 BASE DE DATOS FPS 2024.xlsx',
              },*/
              {
                id: 10,
                tipo: 'excel',
                nombre: 'BASE DE DATOS CONTRATOS OCTUBRE  2024.xlsx',
                url: 'assets/files/contract/CONTRATACIÓN DIRECTA/02. 2024/BASE DE DATOS CONTRATOS OCTUBRE  2024.xlsx',
              },
              {
                id: 11,
                tipo: 'excel',
                nombre: 'CONTRATOS  DICIEMBRE 2024.xlsx',
                url: 'assets/files/contract/CONTRATACIÓN DIRECTA/02. 2024/CONTRATOS  DICIEMBRE 2024.xlsx',
              },
            ],
          },
          {
            id: 3,
            nombre: '2023',
            files: [
              {
                id: 12,
                tipo: 'excel',
                nombre:
                  'BASE DE DATOS FPS 2023 - CONTRATACION DIRECTA - NOVIEMBRE 2023.xlsm',
                url: 'assets/files/contract/CONTRATACIÓN DIRECTA/03. 2023/BASE DE DATOS FPS 2023 - CONTRATACION DIRECTA - NOVIEMBRE 2023.xlsm',
              },
              {
                id: 13,
                tipo: 'excel',
                nombre:
                  'BASE DE DATOS FPS 2023 - CONTRATACION DIRECTA - OCTUBRE 2023.xlsm',
                url: 'assets/files/contract/CONTRATACIÓN DIRECTA/03. 2023/BASE DE DATOS FPS 2023 - CONTRATACION DIRECTA - OCTUBRE 2023.xlsm',
              },
              {
                id: 14,
                tipo: 'excel',
                nombre:
                  'BASE DE DATOS FPS 2023 - CONTRATACIÓN DIRECTA - DICIEMBRE 2023.xlsm',
                url: 'assets/files/contract/CONTRATACIÓN DIRECTA/03. 2023/BASE DE DATOS FPS 2023 - CONTRATACIÓN DIRECTA - DICIEMBRE 2023.xlsm',
              },
              {
                id: 15,
                tipo: 'excel',
                nombre: 'BASE DE DATOS FPS 2023 CONTRATACION DIRECTA.xlsm',
                url: 'assets/files/contract/CONTRATACIÓN DIRECTA/03. 2023/BASE DE DATOS FPS 2023 CONTRATACION DIRECTA.xlsm',
              },
            ],
          },
          {
            id: 4,
            nombre: '2022',
            files: [
              {
                id: 16,
                tipo: 'excel',
                nombre: 'CONTRATACION DIRECTA.xlsx',
                url: 'assets/files/contract/CONTRATACIÓN DIRECTA/04. 2022/CONTRATACION DIRECTA.xlsx',
              },
            ],
          },
          {
            id: 5,
            nombre: '2021',
            files: [
              {
                id: 17,
                tipo: 'excel',
                nombre: 'CONTRATACION DIRECTA.xlsx',
                url: 'assets/files/contract/CONTRATACIÓN DIRECTA/05. 2021/CONTRATACION DIRECTA.xlsx',
              },
            ],
          },
          {
            id: 6,
            nombre: '2020',
            files: [
              {
                id: 18,
                tipo: 'pdf',
                nombre: 'BASE DE DATOS CONTRATACIÓN DIRECTA V2.pdf',
                url: 'assets/files/contract/CONTRATACIÓN DIRECTA/06. 2020/BASE DE DATOS CONTRATACIÓN DIRECTA V2.pdf',
              },
              {
                id: 19,
                tipo: 'excel',
                nombre: 'CONTRATACION DIRECTA NOVIEMBRE.xlsx',
                url: 'assets/files/contract/CONTRATACIÓN DIRECTA/06. 2020/CONTRATACION DIRECTA NOVIEMBRE.xlsx',
              },
              {
                id: 20,
                tipo: 'pdf',
                nombre: 'CONTRATACION DIRECTA.pdf',
                url: 'assets/files/contract/CONTRATACIÓN DIRECTA/06. 2020/CONTRATACION DIRECTA.pdf',
              },
              {
                id: 21,
                tipo: 'excel',
                nombre: 'CONTRATACION DIRECTA.xlsx',
                url: 'assets/files/contract/CONTRATACIÓN DIRECTA/06. 2020/CONTRATACION DIRECTA.xlsx',
              },
            ],
          },
        ],
      },
      {
        id: 3,
        nombre: 'LICITACION PUBLICA',
        acordion: [
          {
            id: 1,
            nombre: '2022',
            files: [
              {
                id: 1,
                tipo: 'excel',
                nombre: 'LICITACION PUBLICA.xlsx',
                url: 'assets/files/contract/LICITACION PUBLICA/01. 2022/LICITACION PUBLICA.xlsx',
              },
            ],
          },
          {
            id: 2,
            nombre: '2021',
            files: [
              {
                id: 2,
                tipo: 'excel',
                nombre: 'LICITACION PUBLICA.xlsx',
                url: 'assets/files/contract/LICITACION PUBLICA/02. 2021/LICITACION PUBLICA.xlsx',
              },
            ],
          },
          {
            id: 3,
            nombre: '2020',
            files: [
              {
                id: 3,
                tipo: 'pdf',
                nombre: 'BASE DE DATOS CONTRATACIÓN LICITACION PUBLICA V2.pdf',
                url: 'assets/files/contract/LICITACION PUBLICA/03. 2020/BASE DE DATOS CONTRATACIÓN LICITACION PUBLICA V2.pdf',
              },
              {
                id: 4,
                tipo: 'excel',
                nombre: 'CONTRATACION MODALIDAD LICITACION PUBLICA.xlsx',
                url: 'assets/files/contract/LICITACION PUBLICA/03. 2020/CONTRATACION MODALIDAD LICITACION PUBLICA.xlsx',
              },
              {
                id: 5,
                tipo: 'pdf',
                nombre: 'LICITACION PUBLICA.pdf',
                url: 'assets/files/contract/LICITACION PUBLICA/03. 2020/LICITACION PUBLICA.pdf',
              },
            ],
          },
        ],
      },
      {
        id: 1,
        nombre: 'MINIMA CUANTIA',
        acordion: [
          {
            id: 1,
            nombre: '2023',
            files: [
              {
                id: 1,
                tipo: 'excel',
                nombre:
                  'BASE DE DATOS FPS 2023 - MINIMA CUANTIA - DICIEMBRE 2023',
                url: 'assets/files/contract/MINIMA CUANTIA/01. 2023/BASE DE DATOS FPS 2023 - MINIMA CUANTIA - DICIEMBRE 2023.xlsm',
              },
              {
                id: 2,
                tipo: 'excel',
                nombre:
                  'BASE DE DATOS FPS 2023 - MINIMA CUANTIA - NOVIEMBRE 2023',
                url: 'assets/files/contract/MINIMA CUANTIA/01. 2023/BASE DE DATOS FPS 2023 - MINIMA CUANTIA - NOVIEMBRE 2023.xlsm',
              },
              {
                id: 3,
                tipo: 'excel',
                nombre:
                  'BASE DE DATOS FPS 2023 - MINIMA CUANTIA - OCTUBRE 2023',
                url: 'assets/files/contract/MINIMA CUANTIA/01. 2023/BASE DE DATOS FPS 2023 - MINIMA CUANTIA - OCTUBRE 2023.xlsm',
              },
              {
                id: 4,
                tipo: 'excel',
                nombre: 'BASE DE DATOS FPS 2023 MINIMA CUANTIA',
                url: 'assets/files/contract/MINIMA CUANTIA/01. 2023/BASE DE DATOS FPS 2023 MINIMA CUANTIA.xlsm',
              },
            ],
          },
          {
            id: 2,
            nombre: '2022',
            files: [
              {
                id: 5,
                tipo: 'excel',
                nombre: 'MÍNIMA CUANTÍA',
                url: 'assets/files/contract/MINIMA CUANTIA/02. 2022/MÍNIMA CUANTÍA.xlsx',
              },
            ],
          },
          {
            id: 3,
            nombre: '2021',
            files: [
              {
                id: 6,
                tipo: 'excel',
                nombre: 'MINIMA CUANTIA',
                url: 'assets/files/contract/MINIMA CUANTIA/03. 2021/MINIMA CUANTIA.xlsx',
              },
            ],
          },
          {
            id: 4,
            nombre: '2020',
            files: [
              {
                id: 7,
                tipo: 'pdf',
                nombre: 'BASE DE DATOS CONTRATACIÓN MINIMA CUANTIA V2',
                url: 'assets/files/contract/MINIMA CUANTIA/04. 2020/BASE DE DATOS CONTRATACIÓN MINIMA CUANTIA V2.pdf',
              },
              {
                id: 8,
                tipo: 'excel',
                nombre: 'CONTRATACION MODALIDAD MINIMA CUANTIA',
                url: 'assets/files/contract/MINIMA CUANTIA/04. 2020/CONTRATACION MODALIDAD MINIMA CUANTIA.xlsx',
              },
              {
                id: 9,
                tipo: 'pdf',
                nombre: 'MINIMA CUANTIA',
                url: 'assets/files/contract/MINIMA CUANTIA/04. 2020/MINIMA CUANTIA.pdf',
              },
            ],
          },
        ],
      },
      {
        id: 2,
        nombre: 'SELECCIÓN ABREVIADA',
        acordion: [
          {
            id: 1,
            nombre: '2023',
            files: [
              {
                id: 1,
                tipo: 'excel',
                nombre:
                  'BASE DE DATOS FPS 2023 - SELECCION ABREVIADA - DICIEMBRE 2023',
                url: 'assets/files/contract/SELECCIÓN ABREVIADA/01. 2023/BASE DE DATOS FPS 2023 - SELECCION ABREVIADA - DICIEMBRE 2023.xlsm',
              },
              {
                id: 2,
                tipo: 'excel',
                nombre:
                  'BASE DE DATOS FPS 2023 - SELECCION ABREVIADA - NOVIEMBRE 2023',
                url: 'assets/files/contract/SELECCIÓN ABREVIADA/01. 2023/BASE DE DATOS FPS 2023 - SELECCION ABREVIADA - NOVIEMBRE 2023.xlsm',
              },
              {
                id: 3,
                tipo: 'excel',
                nombre:
                  'BASE DE DATOS FPS 2023 - SELECCION ABREVIADA - OCTUBRE 2023',
                url: 'assets/files/contract/SELECCIÓN ABREVIADA/01. 2023/BASE DE DATOS FPS 2023 - SELECCION ABREVIADA - OCTUBRE 2023.xlsm',
              },
              {
                id: 4,
                tipo: 'excel',
                nombre: 'BASE DE DATOS FPS 2023 SELECCION ABREVIADA',
                url: 'assets/files/contract/SELECCIÓN ABREVIADA/01. 2023/BASE DE DATOS FPS 2023 SELECCION ABREVIADA.xlsm',
              },
            ],
          },
          {
            id: 2,
            nombre: '2021',
            files: [
              {
                id: 5,
                tipo: 'excel',
                nombre: 'SELECCION ABREVIADA MENOR CUANTIA',
                url: 'assets/files/contract/SELECCIÓN ABREVIADA/02. 2021/SELECCION ABREVIADA MENOR CUANTIA.xlsx',
              },
              {
                id: 6,
                tipo: 'excel',
                nombre: 'SELECCION ABREVIADA',
                url: 'assets/files/contract/SELECCIÓN ABREVIADA/02. 2021/SELECCION ABREVIADA.xlsx',
              },
            ],
          },
          {
            id: 3,
            nombre: '2020',
            files: [
              {
                id: 7,
                tipo: 'pdf',
                nombre: 'BASE DE DATOS CONTRATACIÓN SELECCION ABREVIADA V2',
                url: 'assets/files/contract/SELECCIÓN ABREVIADA/03. 2020/BASE DE DATOS CONTRATACIÓN SELECCION ABREVIADA V2.pdf',
              },
              {
                id: 8,
                tipo: 'excel',
                nombre: 'CONTRATACION MODALIDAD SELECCION ABREVIADA',
                url: 'assets/files/contract/SELECCIÓN ABREVIADA/03. 2020/CONTRATACION MODALIDAD SELECCION ABREVIADA.xlsx',
              },
              {
                id: 9,
                tipo: 'pdf',
                nombre: 'SELECCION ABREVIADA',
                url: 'assets/files/contract/SELECCIÓN ABREVIADA/03. 2020/SELECCION ABREVIADA.pdf',
              },
            ],
          },
        ],
      },
      {
        id: 3,
        nombre: 'ÓRDENES DE COMPRA',
        acordion: [
          {
            id: 1,
            nombre: '2024',
            files: [
              {
                id: 1,
                tipo: 'excel',
                nombre: 'BASE DE DATOS FPS 2024 - ORDENES DE COMPRA',
                url: 'assets/files/contract/ÓRDENES DE COMPRA/01. 2024/BASE DE DATOS FPS 2024 - ORDENES DE COMPRA.xlsm',
              },
            ],
          },
          {
            id: 2,
            nombre: '2023',
            files: [
              {
                id: 2,
                tipo: 'excel',
                nombre:
                  'BASE DE DATOS FPS 2023 - ORDEN DE COMPRA - DICIEMBRE 2023',
                url: 'assets/files/contract/ÓRDENES DE COMPRA/02. 2023/BASE DE DATOS FPS 2023 - ORDEN DE COMPRA - DICIEMBRE 2023.xlsm',
              },
              {
                id: 3,
                tipo: 'excel',
                nombre:
                  'BASE DE DATOS FPS 2023 - ORDEN DE COMPRA - NOVIEMBRE 2023',
                url: 'assets/files/contract/ÓRDENES DE COMPRA/02. 2023/BASE DE DATOS FPS 2023 - ORDEN DE COMPRA - NOVIEMBRE 2023.xlsm',
              },
              {
                id: 4,
                tipo: 'excel',
                nombre:
                  'BASE DE DATOS FPS 2023 - ORDEN DE COMPRA - OCTUBRE 2023',
                url: 'assets/files/contract/ÓRDENES DE COMPRA/02. 2023/BASE DE DATOS FPS 2023 - ORDEN DE COMPRA - OCTUBRE 2023.xlsm',
              },
              {
                id: 5,
                tipo: 'excel',
                nombre: 'BASE DE DATOS FPS 2023 ORDENES DE COMPRA',
                url: 'assets/files/contract/ÓRDENES DE COMPRA/02. 2023/BASE DE DATOS FPS 2023 ORDENES DE COMPRA.xlsm',
              },
            ],
          },
          {
            id: 3,
            nombre: '2021',
            files: [
              {
                id: 6,
                tipo: 'excel',
                nombre: 'ORDENES DE COMPRA',
                url: 'assets/files/contract/ÓRDENES DE COMPRA/03. 2021/ORDENES DE COMPRA.xlsx',
              },
            ],
          },
          {
            id: 4,
            nombre: '2020',
            files: [
              {
                id: 7,
                tipo: 'excel',
                nombre: 'CONTRATACION MODALIDAD ORDENES DE COMPRA',
                url: 'assets/files/contract/ÓRDENES DE COMPRA/04. 2020/CONTRATACION MODALIDAD ORDENES DE COMPRA.xlsx',
              },
            ],
          },
        ],
      },
    ];
  }
}
