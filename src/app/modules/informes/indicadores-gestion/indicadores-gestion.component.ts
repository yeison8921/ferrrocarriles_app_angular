import { Component } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { AcordionAnidadoFiles } from '../../../interfaces/acordion';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-indicadores-gestion',
  standalone: true,
  imports: [NgbAccordionModule, NgFor],
  templateUrl: './indicadores-gestion.component.html',
  styleUrl: './indicadores-gestion.component.css',
})
export class IndicadoresGestionComponent {
  items: AcordionAnidadoFiles[] = [];

  constructor() {
    this.items = [
      {
        id: 1,
        nombre: 'Indicadores Estrategicos',
        acordion: [
          {
            id: 1,
            nombre: '2024',
            files: [
              {
                id: 1,
                url: 'assets/files/indicador/Indicadores Estrategicos/01. 2024/RESPORTE INDICADORES SEMESTRE 1-2024.pdf',
                tipo: 'pdf',
                nombre: 'RESPORTE INDICADORES SEMESTRE 1-2024',
              },

              {
                id: 1,
                url: 'assets/files/indicador/Indicadores Estrategicos/01. 2024/RESPORTE INDICADORES SEMESTRE 2-2024.pdf',
                tipo: 'pdf',
                nombre: 'RESPORTE INDICADORES SEMESTRE 2-2024',
              },
            ],
          },
          {
            id: 1,
            nombre: '2023',
            files: [
              {
                id: 1,
                url: 'assets/files/indicador/Indicadores Estrategicos/01. 2023/INDICADORES ESTRATEGICOS 2023.pdf',
                tipo: 'pdf',
                nombre: 'INDICADORES ESTRATEGICOS 2023.pdf',
              },
            ],
          },
          {
            id: 1,
            nombre: '2020',
            files: [
              {
                id: 1,
                url: 'assets/files/indicador/Indicadores Estrategicos/02. 2020/FORMULACION DE INDICADORES_ESTRATEGICOS.pdf',
                tipo: 'pdf',
                nombre: 'FORMULACION DE INDICADORES_ESTRATEGICOS.pdf',
              },
              {
                id: 1,
                url: 'assets/files/indicador/Indicadores Estrategicos/02. 2020/INDICADORES_ESTRATEGICOS_I2020.pdf',
                tipo: 'pdf',
                nombre: 'INDICADORES_ESTRATEGICOS_I2020.pdf',
              },
              {
                id: 1,
                url: 'assets/files/indicador/Indicadores Estrategicos/02. 2020/INDICADORES_ESTRATEGICOS_II2020.pdf',
                tipo: 'pdf',
                nombre: 'INDICADORES_ESTRATEGICOS_II2020.pdf',
              },
            ],
          },
          {
            id: 1,
            nombre: '2019',
            files: [
              {
                id: 1,
                url: 'assets/files/indicador/Indicadores Estrategicos/03. 2019/INDICADORES_ESTRATEGICOS_I2019.pdf',
                tipo: 'pdf',
                nombre: 'INDICADORES_ESTRATEGICOS_I2019.pdf',
              },
              {
                id: 1,
                url: 'assets/files/indicador/Indicadores Estrategicos/03. 2019/INDICADORES_ESTRATEGICOS_II2019.pdf',
                tipo: 'pdf',
                nombre: 'INDICADORES_ESTRATEGICOS_II2019.pdf',
              },
            ],
          },
        ],
      },
      {
        id: 1,
        nombre: 'Indicadores de Gestión',
        acordion: [
          {
            id: 1,
            nombre: '2023',
            files: [
              {
                id: 1,
                url: 'assets/files/indicador/Indicadores de Gestión/01. 2023/INDICADORES DE GESTIÓN FPS FNC 2023 (1).pdf',
                tipo: 'pdf',
                nombre: 'INDICADORES DE GESTIÓN FPS FNC 2023 (1).pdf',
              },
            ],
          },
          {
            id: 1,
            nombre: '2022',
            files: [
              {
                id: 1,
                url: 'assets/files/indicador/Indicadores de Gestión/02. 2022/01 MATRIZ DE INDICADORES  DE GESTIÓN 2022.xlsx',
                tipo: 'excel',
                nombre: 'ATRIZ DE INDICADORES DE GESTIÓN 2022.xlsx',
              },
              {
                id: 1,
                url: 'assets/files/indicador/Indicadores de Gestión/02. 2022/02 MATRIZ DE INDICADORES  DE GESTION II SEMESTRE 2022.xlsx',
                tipo: 'excel',
                nombre:
                  '02 MATRIZ DE INDICADORES DE GESTION II SEMESTRE 2022.xlsx',
              },
            ],
          },
          {
            id: 1,
            nombre: '2021',
            files: [
              {
                id: 1,
                url: 'assets/files/indicador/Indicadores de Gestión/03. 2021/CONSOLIDADO INDICADORES DE GESTIÓN FPS SEMESTRE I Y II 2021.xlsx',
                tipo: 'excel',
                nombre:
                  'CONSOLIDADO INDICADORES DE GESTIÓN FPS SEMESTRE I Y II 2021.xlsx',
              },
            ],
          },
        ],
      },
      {
        id: 1,
        nombre: 'Indicadores de procesos',
        acordion: [
          {
            id: 1,
            nombre: '2020',
            files: [
              {
                id: 1,
                url: 'assets/files/indicador/Indicadores de procesos/01. 2020/FORMULACION DE INDICADORES_PROCESO.pdf',
                tipo: 'pdf',
                nombre: 'FORMULACION DE INDICADORES_PROCESO.pdf',
              },
              {
                id: 1,
                url: 'assets/files/indicador/Indicadores de procesos/01. 2020/INDICADORES_POR_PROCESO_I2020.pdf',
                tipo: 'pdf',
                nombre: 'INDICADORES_POR_PROCESO_I2020.pdf',
              },
              {
                id: 1,
                url: 'assets/files/indicador/Indicadores de procesos/01. 2020/INDICADORES_POR_PROCESO_II2020.pdf',
                tipo: 'pdf',
                nombre: 'INDICADORES_POR_PROCESO_II2020.pdf',
              },
            ],
          },
          {
            id: 1,
            nombre: '2019',
            files: [
              {
                id: 1,
                url: 'assets/files/indicador/Indicadores de procesos/02. 2019/INDICADORES_PROCESO_I2019.pdf',
                tipo: 'pdf',
                nombre: 'INDICADORES_PROCESO_I2019.pdf',
              },
              {
                id: 1,
                url: 'assets/files/indicador/Indicadores de procesos/02. 2019/INDICADORES_PROCESO_II2019.pdf',
                tipo: 'pdf',
                nombre: 'INDICADORES_PROCESO_II2019.pdf',
              },
            ],
          },
        ],
      },
    ];
  }
}
