import { Component } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { AcordionAnidadoFiles } from '../../../interfaces/acordion';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-estados-financieros',
  standalone: true,
  imports: [NgbAccordionModule, NgFor],
  templateUrl: './estados-financieros.component.html',
  styleUrl: './estados-financieros.component.css',
})
export class EstadosFinancierosComponent {
  files: AcordionAnidadoFiles[];

  constructor() {
    this.files = [
     
        {
        id: 1,
        nombre: '2025',
        acordion: [
          {
            id: 1,
            nombre: 'ENERO',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre:
                  '1. ESTADO DE SITUACION FINANCIERA COMPARATIVO ENERO 2025-2024-.pdf',
                url: 'assets/files/estados_financieros/2025/ENERO/1. ESTADO DE SITUACION FINANCIERA COMPARATIVO ENERO 2025-2024-.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre:'2. ESTADO DE SITUACION FINANCIERA  COMPARATIVO ENERO 2025-2024-.pdf',
                url: 'assets/files/estados_financieros/2025/ENERO/2. ESTADO DE SITUACION FINANCIERA  COMPARATIVO ENERO 2025-2024-.pdf',
              },
              {
                id: 3,
                tipo: 'pdf',
                nombre:'3.  ESTADO DE RESULTADOS  COMPARATIVO ENERO 2025-2024-.pdf',
                url: 'assets/files/estados_financieros/2025/ENERO/3.  ESTADO DE RESULTADOS  COMPARATIVO ENERO 2025-2024-.pdf',
              },
              {
                id: 4,
                tipo: 'pdf',
                nombre:'4. ESTADO DE RESULTADOS COMPARATIVO ENERO 2023-2022.pdf',
                url: 'assets/files/estados_financieros/2025/ENERO/4.  ESTADO DE RESULTADOS COMPARATIVO  ENERO 2025-2024-.pdf',
              },
            ],
          },
          {
            id: 2,
            nombre: 'FEBRERO',
            files: [
              {
                id: 5,
                tipo: 'pdf',
                nombre:
                  '1. ESTADO DE SITUACION FINANCIERA COMPARATIVO  FEBRERO 2025-2024-.pdf',
                url: 'assets/files/estados_financieros/2025/FEBRERO/1. ESTADO DE SITUACION FINANCIERA COMPARATIVO  FEBRERO 2025-2024-.pdf',
              },
              {
                id: 6,
                tipo: 'pdf',
                nombre:
                  '2. ESTADO DE SITUACION FINANCIERA COMPARATIVO FEBRERO 2025-2024-.pdf',
                url: 'assets/files/estados_financieros/2025/FEBRERO/2. ESTADO DE SITUACION FINANCIERA COMPARATIVO FEBRERO 2025-2024-.pdf',
              },
              {
                id: 7,
                tipo: 'pdf',
                nombre:
                  '3. ESATADO DE RESULTADOS COMPARATIVO FEBRERO 2024-2023.pdf',
                url: 'assets/files/estados_financieros/2025/FEBRERO/3.  ESTADO DE RESULTADOS COMPARATIVO  FEBRERO 2025-2024- (1).pdf',
              },
              {
                id: 8,
                tipo: 'pdf',
                nombre:
                  '4. ESTADO DE RESULTADOS COMPARATIVO FEBRERO 2025-2024-.pdf',
                url: 'assets/files/estados_financieros/2025/FEBRERO/4. ESTADO DE RESULTADOS COMPARATIVO FEBRERO 2025-2024-.pdf',
              },
            ],
          },

          {
            id: 3,
            nombre: 'MARZO',
            files: [
              {
                id: 5,
                tipo: 'pdf',
                nombre:
                  '1. ESTADO DE SITUACION FINANCIERA COMPARATIVO  MARZO 2025-2024-.pdf',
                url: 'assets/files/estados_financieros/2025/MARZO/1. ESTADO DE SITUACION FINANCIERA COMPARATIVO  MARZO 2025-2024-.pdf',
              },
              {
                id: 6,
                tipo: 'pdf',
                nombre:
                  '2. ESTADO DE SITUACION FINANCIERA COMPARATIVO MARZO 2025-2024-.pdf',
                url: 'assets/files/estados_financieros/2025/MARZO/2. ESTADO DE SITUACION FINANCIERA COMPARATIVO MARZO 2025-2024-.pdf',
              },
              {
                id: 7,
                tipo: 'pdf',
                nombre:
                  '3. ESTADO DE RESULTADOS COMPARATIVO MARZO 2025-2024-.pdf',
                url: 'assets/files/estados_financieros/2025/MARZO/3. ESTADO DE RESULTADOS COMPARATIVO MARZO 2025-2024-.pdf',
              },
              {
                id: 8,
                tipo: 'pdf',
                nombre:
                  '4. ESTADO DE RESULTADOS COMPARATIVO  MARZO 2025-2024-.pdf',
                url: 'assets/files/estados_financieros/2025/MARZO/4. ESTADO DE RESULTADOS COMPARATIVO  MARZO 2025-2024-.pdf',
              },
            ],
          },


           {
            id: 4,
            nombre: 'ABRIL',
            files: [
              {
                id: 5,
                tipo: 'pdf',
                nombre: '3. ESTADO DE RESULTADOS ABRIL 2025-2024.pdf',
                url: 'assets/files/estados_financieros/2025/ABRIL/3. ESTADO DE RESULTADOS ABRIL 2025-2024.pdf',
              },
             
            ],
          },
          
          
        ],
      },
      
      {
        id: 1,
        nombre: '2024',
        acordion: [
          {
            id: 1,
            nombre: 'ENERO',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre:
                  '1. ESTADO DE SITUACION FINANCIERA COMPARATIVO ENERO 2024-2023.pdf',
                url: 'assets/files/estados_financieros/01. 2024/01 Enero/1. ESTADO DE SITUACION FINANCIERA COMPARATIVO  ENERO 2024-2023.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre:
                  '2. ESTADO DE SITUACION FINANCIERA COMPARATIVO ENERO 2024-2023.pdf',
                url: 'assets/files/estados_financieros/01. 2024/01 Enero/2. ESTADO DE SITUACION FINANCIERA  COMPARATIVO ENERO 2024-2023.pdf',
              },
              {
                id: 3,
                tipo: 'pdf',
                nombre:
                  '3. ESTADO DE RESULTADOS COMPARATIVO ENERO 2024-2023.pdf',
                url: 'assets/files/estados_financieros/01. 2024/01 Enero/3. ESTADO DE RESULTADOS COMPARATIVO ENERO 2024-2023.pdf',
              },
              {
                id: 4,
                tipo: 'pdf',
                nombre:
                  '4. ESTADO DE RESULTADOS COMPARATIVO ENERO 2023-2022.pdf',
                url: 'assets/files/estados_financieros/01. 2024/01 Enero/4. ESTADO DE RESULTADOS  COMPARATIVO ENERO 2023-2022.pdf',
              },
            ],
          },
          {
            id: 2,
            nombre: 'FEBRERO',
            files: [
              {
                id: 5,
                tipo: 'pdf',
                nombre:
                  '1. ESTADO DE SITUACION FINANCIERA COMPARATIVA FEBRERO 2024-2023.pdf',
                url: 'assets/files/estados_financieros/01. 2024/02 Febrero/1. ESTADO DE SITUACION FINANCIERA COMPARATIVA  FEBRERO 2024-2023.pdf',
              },
              {
                id: 6,
                tipo: 'pdf',
                nombre:
                  '2. ESTADO DE SITUACION FINANCIERA COMPARATIVA FEBRERO 2024-2023.pdf',
                url: 'assets/files/estados_financieros/01. 2024/02 Febrero/2. ESTADO DE SITUACION FINANCIERA COMPARATIVA FEBRERO 2024-2023.pdf',
              },
              {
                id: 7,
                tipo: 'pdf',
                nombre:
                  '3. ESATADO DE RESULTADOS COMPARATIVO FEBRERO 2024-2023.pdf',
                url: 'assets/files/estados_financieros/01. 2024/02 Febrero/3.  ESATADO DE RESULTADOS  COMPARATIVO FEBRERO 2024-2023.pdf',
              },
              {
                id: 8,
                tipo: 'pdf',
                nombre:
                  '4. ESTADO DE RESULTADOS COMPARATIVO FEBRERO 2024-2023.pdf',
                url: 'assets/files/estados_financieros/01. 2024/02 Febrero/4.  ESTADO DE RESULTADOS  COMPARATIVO FEBRERO 2024-2023.pdf',
              },
            ],
          },
          {
            id: 3,
            nombre: 'MARZO',
            files: [
              {
                id: 9,
                tipo: 'pdf',
                nombre:
                  '1. ESTADO DE SITUACION FINANCIERA COMPARATIVO MARZO 2024-2023.pdf',
                url: 'assets/files/estados_financieros/01. 2024/03 Marzo/1. ESTADO DE SITUACION FINANCIERA COMPARATIVO  MARZO 2024-2023.pdf',
              },
              {
                id: 10,
                tipo: 'pdf',
                nombre:
                  '2. ESTADO DE SITUACION FINANCIERA COMPARATIVO MARZO 2024-2023.pdf',
                url: 'assets/files/estados_financieros/01. 2024/03 Marzo/2.  ESTADO DE SITUACION FINANCIERA COMPARATIVO MARZO 2024-2023.pdf',
              },
              {
                id: 11,
                tipo: 'pdf',
                nombre:
                  '3. ESTADO DE RESULTADOS COMPARATIVO MARZO 2024-2023.pdf',
                url: 'assets/files/estados_financieros/01. 2024/03 Marzo/3. ESTADO  DE RESULTADOS COMPARATIVO  MARZO 2024-2023.pdf',
              },
              {
                id: 12,
                tipo: 'pdf',
                nombre:
                  '4. ESTADO DE RESULTADOS COMPARATIVO MARZO 2024-2023.pdf',
                url: 'assets/files/estados_financieros/01. 2024/03 Marzo/4. ESTADO DE RESULTADOS COMPARATIVO MARZO 2024-2023.pdf',
              },
            ],
          },
          {
            id: 4,
            nombre: 'ABRIL',
            files: [
              {
                id: 13,
                tipo: 'pdf',
                nombre: '1. ESTADO DE SITUACION FINANCIERA ABRIL 2024-2023.pdf',
                url: 'assets/files/estados_financieros/01. 2024/04 Abril/1. ESTADO DE SITUACION FINANCIERA ABRIL 2024-2023.pdf',
              },
              {
                id: 14,
                tipo: 'pdf',
                nombre: '2. ESTADO DE SITUACION FINANCIERA ABRIL 2024-2023.pdf',
                url: 'assets/files/estados_financieros/01. 2024/04 Abril/2. ESTADO DE SITUACION FINANCIERA ABRIL 2024-2023.pdf',
              },
              {
                id: 15,
                tipo: 'pdf',
                nombre: '3. ESTADO DE RESULTADOS ABRIL 2024-2023.pdf',
                url: 'assets/files/estados_financieros/01. 2024/04 Abril/3. ESTADO DE RESULTADOS ABRIL 2024-2023.pdf',
              },
              {
                id: 16,
                tipo: 'pdf',
                nombre: '4. ESTADO DE RESULTADOS ABRIL 2024-2023.pdf',
                url: 'assets/files/estados_financieros/01. 2024/04 Abril/4. ESTADO DE RESULTADOS ABRIL 2024-2023.pdf',
              },
            ],
          },
          {
            id: 1,
            nombre: 'MAYO',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: '1.  ESTADO DE SITUACION FINANCIERA MAYO 2024-2023.pdf',
                url: 'assets/files/estados_financieros/01. 2024/05 Mayo/1.  ESTADO DE SITUACION FINANCIERA MAYO 2024-2023.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre: '2. ESTADO DE SITUACION FINANCIERA MAYO 2024-2023.pdf',
                url: 'assets/files/estados_financieros/01. 2024/05 Mayo/2.  ESTADO DE SITUACION FINANCIERA MAYO 2024-2023.pdf',
              },
              {
                id: 3,
                tipo: 'pdf',
                nombre: '3. ESTADO DE RESULTADOS MAYO 2024-2023.pdf',
                url: 'assets/files/estados_financieros/01. 2024/05 Mayo/3 . ESATADO DE RESULTADOS MAYO 2024-2023.pdf',
              },
              {
                id: 4,
                tipo: 'pdf',
                nombre: '4. ESTADO DE RESULTADOS MAYO 2024-2023.pdf',
                url: 'assets/files/estados_financieros/01. 2024/05 Mayo/4.  ESTADO DE RESULTADOS MAYO 2024-2023.pdf',
              },
            ],
          },
          {
            id: 2,
            nombre: 'JUNIO',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: '1. ESTADO DE SITUACION FINANCIERA JUNIO 2024-2023.pdf',
                url: 'assets/files/estados_financieros/01. 2024/06 Junio/1. ESTADO DE SITUACION FINANCIERA JUNIO 2024-2023.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre: '2. ESTADO DE SITUACION FINANCIERA JUNIO 2024-2023.pdf',
                url: 'assets/files/estados_financieros/01. 2024/06 Junio/2. ESTADO DE SITUACION FINANCIERA JUNIO 2024-2023.pdf',
              },
              {
                id: 3,
                tipo: 'pdf',
                nombre: '3. ESTADO DE RESULTADOS JUNIO 2024-2023.pdf',
                url: 'assets/files/estados_financieros/01. 2024/06 Junio/3. ESATADO DE RESULTADOS JUNIO 2024-2023.pdf',
              },
              {
                id: 4,
                tipo: 'pdf',
                nombre: '4. ESTADO DE RESULTADOS JUNIO 2024-2023.pdf',
                url: 'assets/files/estados_financieros/01. 2024/06 Junio/4.  ESTADO DE RESULTADOS JUNIO 2024-2023.pdf',
              },
            ],
          },
          {
            id: 3,
            nombre: 'JULIO',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre:
                  '1. ESTADO DE SITUACION FINANCIERA JULIO 2024-2023-.pdf',
                url: 'assets/files/estados_financieros/01. 2024/07 Julio/1. ESTADO DE SITUACION FINANCIERA JULIO 2024-2023-.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre:
                  '2. ESTADO DE SITUACION FINANCIERA JULIO 2024-2023-.pdf',
                url: 'assets/files/estados_financieros/01. 2024/07 Julio/2. ESTADO DE SITUACION FINANCIERA JULIO 2024-2023-.pdf',
              },
              {
                id: 3,
                tipo: 'pdf',
                nombre: '3. ESTADO DE RESULTADOS JULIO 2024-2023-.pdf',
                url: 'assets/files/estados_financieros/01. 2024/07 Julio/3. ESATADO DE RESULTADOS JULIO 2024-2023-.pdf',
              },
              {
                id: 4,
                tipo: 'pdf',
                nombre: '4. ESTADO DE RESULTADOS JULIO 2024-2023-.pdf',
                url: 'assets/files/estados_financieros/01. 2024/07 Julio/4. ESTADO DE RESULTADOS JULIO 2024-2023-.pdf',
              },
            ],
          },
          {
            id: 4,
            nombre: 'AGOSTO',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre:
                  '1. ESTADO DE SITUACION FINANCIERA AGOSTO 2024-2023-.pdf',
                url: 'assets/files/estados_financieros/01. 2024/08 Agosto/1. ESTADO DE SITUACION FINANCIERA AGOSTO 2024-2023-.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre:
                  '2. ESTADO DE SITUACION FINANCIERA AGOSTO 2024-2023-.pdf',
                url: 'assets/files/estados_financieros/01. 2024/08 Agosto/2. ESTADO DE SITUACION FINANCIERA AGOSTO 2024-2023-.pdf',
              },
              {
                id: 3,
                tipo: 'pdf',
                nombre: '3. ESTADO DE RESULTADOS AGOSTO 2024-2023-.pdf',
                url: 'assets/files/estados_financieros/01. 2024/08 Agosto/3. ESATADO DE RESULTADOS AGOSTO 2024-2023-.pdf',
              },
              {
                id: 4,
                tipo: 'pdf',
                nombre: '4. ESTADO DE RESULTADOS AGOSTO 2024-2023-.pdf',
                url: 'assets/files/estados_financieros/01. 2024/08 Agosto/4. ESTADO DE RESULTADOS AGOSTO 2024-2023-.pdf',
              },
            ],
          },
          {
            id: 5,
            nombre: 'SEPTIEMBRE',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre:
                  '1. ESTADO DE SITUACION FINANCIERA SEPTIEMBRE 2024-2023-.pdf',
                url: 'assets/files/estados_financieros/01. 2024/09 Septiembre/1. ESTADO DE SITUACION FINANCIERA SEPTIEMBRE 2024-2023-.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre:
                  '2. ESTADO DE SITUACION FINANCIERA SEPTIEMBRE 2024-2023-.pdf',
                url: 'assets/files/estados_financieros/01. 2024/09 Septiembre/2. ESTADO DE SITUACION FINANCIERA SEPTIEMBRE 2024-2023-.pdf',
              },
              {
                id: 3,
                tipo: 'pdf',
                nombre: '3. ESTADO DE RESULTADOS SEPTIEMBRE 2024-2023-.pdf',
                url: 'assets/files/estados_financieros/01. 2024/09 Septiembre/3. ESTADO DE RESULTADOS SEPTIEMBRE 2024-2023-.pdf',
              },
              {
                id: 4,
                tipo: 'pdf',
                nombre: '4. ESTADO DE RESULTADOS SEPTIEMBRE 2024-2023-.pdf',
                url: 'assets/files/estados_financieros/01. 2024/09 Septiembre/4. ESTADO DE RESULTADOS SEPTIEMBRE 2024-2023-.pdf',
              },
            ],
          },
          {
            id: 6,
            nombre: 'OCTUBRE',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre:
                  '1. ESTADO DE SITUACION FINANCIERA OCTUBRE 2024-2023-.pdf',
                url: 'assets/files/estados_financieros/01. 2024/10 Octubre/1. ESTADO DE SITUACION FINANCIERA OCTUBRE 2024-2023-.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre:
                  '2. ESTADO DE SITUACION FINANCIERA OCTUBRE 2024-2023-.pdf',
                url: 'assets/files/estados_financieros/01. 2024/10 Octubre/2. ESTADO DE SITUACION FINANCIERA OCTUBRE 2024-2023-.pdf',
              },
              {
                id: 3,
                tipo: 'pdf',
                nombre: '3. ESTADO DE RESULTADOS OCTUBRE 2024-2023-.pdf',
                url: 'assets/files/estados_financieros/01. 2024/10 Octubre/3. ESATADO DE RESULTADOS OCTUBRE 2024-2023-.pdf',
              },
              {
                id: 4,
                tipo: 'pdf',
                nombre: '4. ESTADO DE RESULTADOS OCTUBRE 2024-2023-.pdf',
                url: 'assets/files/estados_financieros/01. 2024/10 Octubre/4. ESTADO DE RESULTADOS OCTUBRE 2024-2023-.pdf',
              },
            ],
          },
          {
            id: 7,
            nombre: 'NOVIEMBRE',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre:
                  '1. ESTADO DE SITUACION FINANCIERA NOVIEMBRE 2024-2023-.pdf',
                url: 'assets/files/estados_financieros/01. 2024/11 Noviembre/1. ESTADO DE SITUACION FINANCIERA NOVIEMBRE 2024-2023-.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre:
                  '2. ESTADO DE SITUACION FINANCIERA NOVIEMBRE 2024-2023-.pdf',
                url: 'assets/files/estados_financieros/01. 2024/11 Noviembre/2. ESTADO DE SITUACION FINANCIERA NOVIEMBRE 2024-2023-.pdf',
              },
              {
                id: 3,
                tipo: 'pdf',
                nombre: '3. ESTADO DE RESULTADOS NOVIEMBRE 2024-2023-.pdf',
                url: 'assets/files/estados_financieros/01. 2024/11 Noviembre/3. ESATADO DE RESULTADOS NOVIEMBRE 2024-2023-.pdf',
              },
              {
                id: 4,
                tipo: 'pdf',
                nombre: '4. ESTADO DE RESULTADOS NOVIEMBRE 2024-2023-.pdf',
                url: 'assets/files/estados_financieros/01. 2024/11 Noviembre/4. ESTADO DE RESULTADOS NOVIEMBRE 2024-2023-.pdf',
              },
            ],
          },

          {
            id: 7,
            nombre: 'DICIEMBRE',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre:
                  '1 ESTADO DE SITUACION FINANCIERA DICIEMBRE 2024-2023 -.pdf',
                url: 'assets/files/estados_financieros/01. 2024/12 Diciembre/1 ESTADO DE SITUACION FINANCIERA DICIEMBRE 2024-2023 -.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre:
                  '2 ESTADO DE SITUACION FINANCIERA DICIEMBRE 2024-2023 -.pdf',
                url: 'assets/files/estados_financieros/01. 2024/12 Diciembre/2 ESTADO DE SITUACION FINANCIERA DICIEMBRE 2024-2023 -.pdf',
              },
              {
                id: 3,
                tipo: 'pdf',
                nombre: '3 ESTADO DE RESULTADOS DICIEMBRE  2024-2023.pdf',
                url: 'assets/files/estados_financieros/01. 2024/12 Diciembre/3 ESTADO DE RESULTADOS DICIEMBRE  2024-2023.pdf',
              },
              {
                id: 4,
                tipo: 'pdf',
                nombre: '4 ESTADO DE RESULTADOS DICIEMBRE  2024-2023.pdf',
                url: 'assets/files/estados_financieros/01. 2024/12 Diciembre/4 ESTADO DE RESULTADOS DICIEMBRE  2024-2023.pdf',
              },
               {
                id: 5,
                tipo: 'pdf',
                nombre: '5 ESTADO DE CAMBIO EN EL PATRIMONIO 2024 -2023.pdf',
                url: 'assets/files/estados_financieros/01. 2024/12 Diciembre/5 ESTADO DE CAMBIO EN EL PATRIMONIO 2024 -2023.pdf',
              },
            ],
          },
        ],
      },

      {
        id: 1,
        nombre: '2023',
        acordion: [
          {
            id: 1,
            nombre: 'ENERO',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'ESATDO DE RESULTADOS COMPARATIVOS ENERO 2023-2022.pdf',
                url: 'assets/files/estados_financieros/02. 2023/01. Enero/ESATDO DE RESULTADOS COMPARATIVOS ENERO 2023-2022.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre:
                  'ESTADO DE SITUACION FINANCIERA COMPARATIVO ENERO 2023-2022.pdf',
                url: 'assets/files/estados_financieros/02. 2023/01. Enero/ESTADO DE SITUACION FINANCIERA COMPARATIVO ENERO 2023-2022.pdf',
              },
            ],
          },
          {
            id: 2,
            nombre: 'FEBRERO',
            files: [
              {
                id: 3,
                tipo: 'pdf',
                nombre:
                  'ESTADO DE RESULTADOS COMPARATIVOS FEBRERO 2023-2022.pdf',
                url: 'assets/files/estados_financieros/02. 2023/02. Febrero/ESTADO DE RESULTADOS COMPARATIVOS FEBRERO 2023-2022.pdf',
              },
              {
                id: 4,
                tipo: 'pdf',
                nombre:
                  'ESTADO DE SITUACION FINANCIERA COMPARATIVO FEBRERO 2023-2022.pdf',
                url: 'assets/files/estados_financieros/02. 2023/02. Febrero/ESTADO DE SITUACION FINANCIERA COMPARATIVO FEBRERO 2023-2022.pdf',
              },
            ],
          },
          {
            id: 3,
            nombre: 'MARZO',
            files: [
              {
                id: 5,
                tipo: 'pdf',
                nombre: 'ESTADO DE RESULTADOS MARZO 2023-2022 .pdf',
                url: 'assets/files/estados_financieros/02. 2023/03. Marzo/ESTADO DE RESULTADOS MARZO  2023-2022 .pdf',
              },
              {
                id: 6,
                tipo: 'pdf',
                nombre: 'ESTADO DE SITUACION FINANCIERA MARZO 2023 2022.pdf',
                url: 'assets/files/estados_financieros/02. 2023/03. Marzo/ESTADO DE SITUACION FINANCIERA  MARZO 2023  2022.pdf',
              },
            ],
          },
          {
            id: 4,
            nombre: 'ABRIL',
            files: [
              {
                id: 7,
                tipo: 'pdf',
                nombre: 'ESTADO DE RESULTADOS COMPARATIVOS ABRIL 2023-2022.pdf',
                url: 'assets/files/estados_financieros/02. 2023/04. Abril/ESTADO DE RESULTADOS COMPARATIVOS  ABRIL   2023-2022.pdf',
              },
              {
                id: 8,
                tipo: 'pdf',
                nombre:
                  'ESTADO DE SITUACION FINANCIERA COMPARATIVA ABRIL 2023-2022.pdf',
                url: 'assets/files/estados_financieros/02. 2023/04. Abril/ESTADO DE SITUACION FINANCIERA  COMPARATIVA ABRIL  2023-2022.pdf',
              },
            ],
          },
          {
            id: 5,
            nombre: 'MAYO',
            files: [
              {
                id: 9,
                tipo: 'pdf',
                nombre: 'ESTADO DE RESULTADOS COMPARATIVOS MAYO 2023-2022 .pdf',
                url: 'assets/files/estados_financieros/02. 2023/05. Mayo/ESTADO DE RESULTADOS COMPARATIVOS  MAYO  2023-2022 .pdf',
              },
              {
                id: 10,
                tipo: 'pdf',
                nombre:
                  'ESTADO DE SITUACION FINANCIERA COMPARATIVA MAYO 2023-2022.pdf',
                url: 'assets/files/estados_financieros/02. 2023/05. Mayo/ESTADO DE SITUACION FINANCIERA COMPARATIVA  MAYO 2023-2022.pdf',
              },
            ],
          },
          {
            id: 6,
            nombre: 'JUNIO',
            files: [
              {
                id: 11,
                tipo: 'pdf',
                nombre: 'ESTADO DE RESULTADOS JUNIO 2023-2022.pdf',
                url: 'assets/files/estados_financieros/02. 2023/06. Junio/ESTADO DE RESULTADOS JUNIO 2023-2022.pdf',
              },
              {
                id: 12,
                tipo: 'pdf',
                nombre: 'ESTADO DE SITUACION FINANCIERA JUNIO 2023-2022 .pdf',
                url: 'assets/files/estados_financieros/02. 2023/06. Junio/ESTADO DE SITUACION FINANCIERA JUNIO 2023-2022 .pdf',
              },
            ],
          },
          {
            id: 7,
            nombre: 'JULIO',
            files: [
              {
                id: 13,
                tipo: 'pdf',
                nombre: 'ESTADO DE RESULTADOS JULIO 2023-2022.pdf',
                url: 'assets/files/estados_financieros/02. 2023/07. Julio/ESTADO DE RESULTADOS JULIO 2023-2022.pdf',
              },
              {
                id: 14,
                tipo: 'pdf',
                nombre: 'ESTADO DE SITUACION FINANCIERA JULIO 2023-2022.pdf',
                url: 'assets/files/estados_financieros/02. 2023/07. Julio/ESTADO DE SITUACION FINANCIERA JULIO 2023-2022.pdf',
              },
            ],
          },
          {
            id: 8,
            nombre: 'AGOSTO',
            files: [
              {
                id: 15,
                tipo: 'pdf',
                nombre:
                  'ESATADO DE RESULTADOS COMPARATIVOS AGOSTO 2023-2022.pdf',
                url: 'assets/files/estados_financieros/02. 2023/08. Agosto/ESATADO DE RESULTADOS COMPARATIVOS AGOSTO 2023-2022.pdf',
              },
              {
                id: 16,
                tipo: 'pdf',
                nombre:
                  'ESTADO DE SITUACION FINANCIERA COMPARATIVO AGOSTO 2023-2022.pdf',
                url: 'assets/files/estados_financieros/02. 2023/08. Agosto/ESTADO DE SITUACION FINANCIERA COMPARATIVO AGOSTO 2023-2022.pdf',
              },
            ],
          },
          {
            id: 9,
            nombre: 'SEPTIEMBRE',
            files: [
              {
                id: 17,
                tipo: 'pdf',
                nombre:
                  'ESTADO DE RESULTADOS COMPARATIVOS SEPTIEMBRE 2023-2022.pdf',
                url: 'assets/files/estados_financieros/02. 2023/09. Septiembre/ESTADO DE RESULTADOS COMPARATIVOS SEPTIEMBRE 2023-2022.pdf',
              },
              {
                id: 18,
                tipo: 'pdf',
                nombre:
                  'ESTADO DE SITUACION FINANCIERA COMPARATIVO SEPTIEMBRE 2023-2022.pdf',
                url: 'assets/files/estados_financieros/02. 2023/09. Septiembre/ESTADO DE SITUACION FINANCIERA COMPARATIVO SEPTIEMBRE 2023-2022.pdf',
              },
            ],
          },
          {
            id: 10,
            nombre: 'OCTUBRE',
            files: [
              {
                id: 19,
                tipo: 'pdf',
                nombre:
                  'ESTADO DE RESULTADOS COMPARATIVOS OCTUBRE 2023-2022.pdf',
                url: 'assets/files/estados_financieros/02. 2023/10. Octubre/ESTADO DE RESULTADOS COMPARATIVOS OCTUBRE 2023-2022.pdf',
              },
              {
                id: 20,
                tipo: 'pdf',
                nombre:
                  'ESTADO DE SITUACION FINANCIERA COMPARATIVO OCTUBRE 2023-2022 (1).pdf',
                url: 'assets/files/estados_financieros/02. 2023/10. Octubre/ESTADO DE SITUACION FINANCIERA COMPARATIVO OCTUBRE 2023-2022 (1).pdf',
              },
            ],
          },
          {
            id: 11,
            nombre: 'NOVIEMBRE',
            files: [
              {
                id: 21,
                tipo: 'pdf',
                nombre:
                  'ESTADO DE RESULTADOS COMPARATIVOS NOVIEMBRE 2023-2022 .pdf',
                url: 'assets/files/estados_financieros/02. 2023/11. Noviembre/ESTADO DE RESULTADOS COMPARATIVOS NOVIEMBRE 2023-2022 .pdf',
              },
              {
                id: 22,
                tipo: 'pdf',
                nombre:
                  'ESTADO DE SITUACION FINANCIERA COMPARATIVO NOVIEMBRE 2023-2022 .pdf',
                url: 'assets/files/estados_financieros/02. 2023/11. Noviembre/ESTADO DE SITUACION FINANCIERA COMPARATIVO NOVIEMBRE 2023-2022 .pdf',
              },
            ],
          },
          {
            id: 12,
            nombre: 'DICIEMBRE',
            files: [
              {
                id: 23,
                tipo: 'pdf',
                nombre:
                  'ESTADO DE RESULTADOS COMPARATIVOS DICIEMBRE 2023-2022.pdf',
                url: 'assets/files/estados_financieros/02. 2023/12. Diciembre/ESTADO DE RESULTADOS COMPARATIVOS DICIEMBRE 2023-2022.pdf',
              },
              {
                id: 24,
                tipo: 'pdf',
                nombre:
                  'ESTADO DE SITUACION FINANCIERA COMPARATIVO DICIEMBRE 2023-2022.pdf',
                url: 'assets/files/estados_financieros/02. 2023/12. Diciembre/ESTADO DE SITUACION FINANCIERA COMPARATIVO DICIEMBRE 2023-2022.pdf',
              },
            ],
          },
        ],
      },

      {
        id: 1,
        nombre: '2022',
        acordion: [
          {
            id: 1,
            nombre: 'ENERO',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre:
                  'ESTADO DE INFORMACION FINANCIERA COMPARATIVA ENERO 2022-2021',
                url: 'assets/files/estados_financieros/03. 2022/01. ENERO/01. ESTADO DE INFORMACION FINANCIERA COMPARATIVA  ENERO 2022-2021.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre: 'ESTADO DE RESULTADOS COMPARATIVO ENERO 2022-2021',
                url: 'assets/files/estados_financieros/03. 2022/01. ENERO/02. ESTADO DE RESULTADOS COMPARATIVO ENERO 2022-2021.pdf',
              },
            ],
          },
          {
            id: 2,
            nombre: 'FEBRERO',
            files: [
              {
                id: 3,
                tipo: 'pdf',
                nombre:
                  'ESTADO DE INFORMACION FINANCIERA COMPARATIVA FEBRERO 2022-2021',
                url: 'assets/files/estados_financieros/03. 2022/02. FEBRERO/01. ESTADO DE INFORMACION FINANCIERA COMPARATIVA  FEBRERO 2022-2021.pdf',
              },
              {
                id: 4,
                tipo: 'pdf',
                nombre: 'ESTADO DE RESULTADOS COMPARATIVO FEBRERO 2022-2021',
                url: 'assets/files/estados_financieros/03. 2022/02. FEBRERO/02. ESTADO DE RESULTADOS COMPARATIVO FEBRERO 2022-2021.pdf',
              },
            ],
          },
          {
            id: 3,
            nombre: 'MARZO',
            files: [
              {
                id: 5,
                tipo: 'pdf',
                nombre:
                  'ESTADO DE INFORMACION FINANCIERA COMPARATIVA MARZO 2022-2021',
                url: 'assets/files/estados_financieros/03. 2022/03. MARZO/01. ESTADO DE INFORMACION FINANCIERA COMPARATIVA  MARZO 2022-2021.pdf',
              },
              {
                id: 6,
                tipo: 'pdf',
                nombre: 'ESTADO DE RESULTADOS COMPARATIVO MARZO 2022-2021',
                url: 'assets/files/estados_financieros/03. 2022/03. MARZO/02. ESTADO DE RESULTADOS COMPARATIVO MARZO 2022-2021.pdf',
              },
            ],
          },
          {
            id: 4,
            nombre: 'ABRIL',
            files: [
              {
                id: 7,
                tipo: 'pdf',
                nombre:
                  'ESTADO DE INFORMACION FINANCIERA COMPARATIVA ABRIL 2022-2021',
                url: 'assets/files/estados_financieros/03. 2022/04. ABRIL/01. ESTADO DE INFORMACION FINANCIERA COMPARATIVA ABRIL 2022-2021.pdf',
              },
              {
                id: 8,
                tipo: 'pdf',
                nombre: 'ESTADO DE RESULTADOS COMPARATIVO ABRIL 2022-2021',
                url: 'assets/files/estados_financieros/03. 2022/04. ABRIL/02. ESTADO DE RESULTADOS COMPARATIVO  ABRIL 2022-2021.pdf',
              },
            ],
          },
          {
            id: 5,
            nombre: 'MAYO',
            files: [
              {
                id: 9,
                tipo: 'pdf',
                nombre:
                  'ESTADO DE INFORMACION FINANCIERA COMPARATIVA MAYO 2022-2021',
                url: 'assets/files/estados_financieros/03. 2022/05. MAYO/01. ESTADO DE INFORMACION FINANCIERA COMPARATIVA MAYO 2022-2021.pdf',
              },
              {
                id: 10,
                tipo: 'pdf',
                nombre: 'ESTADO DE RESULTADOS COMPARATIVO MAYO 2022-2021',
                url: 'assets/files/estados_financieros/03. 2022/05. MAYO/02. ESTADO DE RESULTADOS COMPARATIVO  MAYO 2022-2021.pdf',
              },
            ],
          },
          {
            id: 6,
            nombre: 'JUNIO',
            files: [
              {
                id: 11,
                tipo: 'pdf',
                nombre:
                  'ESTADO DE INFORMACION FINANCIERA COMPARATIVO JUNIO 2022-2021',
                url: 'assets/files/estados_financieros/03. 2022/06. JUNIO/01. ESTADO DE INFORMACION FINANCIERA  COMPARATIVO JUNIO 2022-2021.pdf',
              },
              {
                id: 12,
                tipo: 'pdf',
                nombre: 'ESTADO DE RESULTADOS COMPARATIVO JUNIO 2022-2021',
                url: 'assets/files/estados_financieros/03. 2022/06. JUNIO/02. ESTADO DE RESULTADOS COMPARATIVO  JUNIO 2022-2021.pdf',
              },
            ],
          },
          {
            id: 7,
            nombre: 'JULIO',
            files: [
              {
                id: 13,
                tipo: 'pdf',
                nombre:
                  'ESTADO DE INFORMACION FINANCIERA COMPARATIVO JULIO 2022-2021',
                url: 'assets/files/estados_financieros/03. 2022/07. JULIO/01. ESTADO  DE INFORMACION FINANCIERA COMPARATIVO JULIO 2022-2021.pdf',
              },
              {
                id: 14,
                tipo: 'pdf',
                nombre: 'ESTADO DE RESULTADOS COMPARATIVO JULIO 2022-2021',
                url: 'assets/files/estados_financieros/03. 2022/07. JULIO/02. ESTADO DE RESULTADOS COMPARATIVO JULIO 2022-2021.pdf',
              },
            ],
          },
          {
            id: 8,
            nombre: 'AGOSTO',
            files: [
              {
                id: 15,
                tipo: 'pdf',
                nombre:
                  'ESTADO DE SITUACION FINANCIERA COMPARATIVA AGOSTO 2022-2021',
                url: 'assets/files/estados_financieros/03. 2022/08. AGOSTO/01. ESTADO DE SITUACION FINANCIERA COMPARATIVA AGOSTO 2022-2021.pdf',
              },
              {
                id: 16,
                tipo: 'pdf',
                nombre: 'ESTADO DE RESULTADOS COMPARATIVO AGOSTO 2022-2021',
                url: 'assets/files/estados_financieros/03. 2022/08. AGOSTO/02. ESTADO DE RESULTADOS COMPARATIVO AGOSTO 2022-2021.pdf',
              },
            ],
          },
          {
            id: 9,
            nombre: 'SEPTIEMBRE',
            files: [
              {
                id: 17,
                tipo: 'pdf',
                nombre:
                  'ESTADO DE SITUACION FINANCIERA COMPARATIVA SEPTIEMBRE 2022-2021',
                url: 'assets/files/estados_financieros/03. 2022/09. SEPTIEMBRE/01. ESTADO DE SITUACION FINANCIERA COMPARATIVA  SEPTIEMBRE 2022-2021.pdf',
              },
              {
                id: 18,
                tipo: 'pdf',
                nombre: 'ESTADO DE RESULTADOS COMPARATIVO SEPTIEMBRE 2022-2021',
                url: 'assets/files/estados_financieros/03. 2022/09. SEPTIEMBRE/02. ESTADO DE RESULTADOS COMPARATIVO  SEPTIEMBRE 2022-2021.pdf',
              },
            ],
          },
          {
            id: 10,
            nombre: 'OCTUBRE',
            files: [
              {
                id: 19,
                tipo: 'pdf',
                nombre: 'ESTADO DE RESULTADOS COMPARATIVO OCTUBRE 2022-2021',
                url: 'assets/files/estados_financieros/03. 2022/10. OCTUBRE/ESTADO DE RESULTADOS COMPARATIVO OCTUBRE 2022-2021.pdf',
              },
              {
                id: 20,
                tipo: 'pdf',
                nombre:
                  'ESTADO DE SITUACION FINANCIERA COMPARATIVA OCTUBRE 2022-2021',
                url: 'assets/files/estados_financieros/03. 2022/10. OCTUBRE/ESTADO DE SITUACION FINANCIERA COMPARATIVA OCTUBRE 2022-2021.pdf',
              },
            ],
          },
          {
            id: 11,
            nombre: 'NOVIEMBRE',
            files: [
              {
                id: 21,
                tipo: 'pdf',
                nombre: 'ESTADO DE RESULTADOS COMPARATIVO NOVIEMBRE 2022-2021',
                url: 'assets/files/estados_financieros/03. 2022/11. NOVIEMBRE/ESTADO DE RESULTADOS COMPARATIVO NOVIEMBRE 2022-2021.pdf',
              },
              {
                id: 22,
                tipo: 'pdf',
                nombre:
                  'ESTADO DE SITUACION FINANCIERA COMPARATIVA NOVIEMBRE 2022-2021',
                url: 'assets/files/estados_financieros/03. 2022/11. NOVIEMBRE/ESTADO DE SITUACION FINANCIERA  COMPARATIVA NOVIEMBRE 2022-2021.pdf',
              },
            ],
          },
        ],
      },

      {
        id: 1,
        nombre: '2021',
        acordion: [
          {
            id: 1,
            nombre: 'DOCUMENTOS',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre:
                  '01 INFORMACION FINANCIERA COMPARATIVA ENERO 2020-2021.pdf',
                url: 'assets/files/estados_financieros/04. 2021/01 INFORMACION FINANCIERA COMPARATIVA ENERO 2020-2021.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre:
                  '02 INFROMACION FINANCIERA COMPARATIVA FEBRERO 2020-2021.pdf',
                url: 'assets/files/estados_financieros/04. 2021/02 INFROMACION FINANCIERA COMPARATIVA FEBRERO 2020-2021.pdf',
              },
              {
                id: 3,
                tipo: 'pdf',
                nombre:
                  '03 INFORMACION FINANCIERA COMPARATIVA MARZO 2020-2021.pdf',
                url: 'assets/files/estados_financieros/04. 2021/03 INFORMACION FINANCIERA COMPARATIVA  MARZO 2020-2021.pdf',
              },
              {
                id: 4,
                tipo: 'pdf',
                nombre:
                  '04 ESTADO DE INFORMACION FINANCIERA RESULTADOS ABRIL 2021.pdf',
                url: 'assets/files/estados_financieros/04. 2021/04 ESTADO DE INFORMACION FINANCIERA RESULTADOS ABRIL 2021.pdf',
              },
              {
                id: 5,
                tipo: 'pdf',
                nombre:
                  '04 INFORMACION FINANCIERA COMPARATIVA ABRIL 2020-2021.pdf',
                url: 'assets/files/estados_financieros/04. 2021/04 INFORMACION FINANCIERA COMPARATIVA ABRIL 2020-2021.pdf',
              },
              {
                id: 6,
                tipo: 'pdf',
                nombre:
                  '05 INFORMACION FINANCIERA COMPARATIVA MAYO DE 2020 - 2021.pdf',
                url: 'assets/files/estados_financieros/04. 2021/05 INFORMACION FINANCIERA COMPARATIVA MAYO DE 2020 - 2021.pdf',
              },
              {
                id: 7,
                tipo: 'pdf',
                nombre:
                  '06 INFORMACION FINANCIERA COMPARATIVA JUNIO DE 2020- 2021.pdf',
                url: 'assets/files/estados_financieros/04. 2021/06 INFORMACION FINANCIERA COMPARATIVA JUNIO DE 2020- 2021.pdf',
              },
              {
                id: 8,
                tipo: 'pdf',
                nombre:
                  '07 INFORMACION FINANCIERA COMPARATIVA JULIO DE 2020-2021.pdf',
                url: 'assets/files/estados_financieros/04. 2021/07 INFORMACION FINANCIERA  COMPARATIVA JULIO  DE 2020-2021.pdf',
              },
              {
                id: 9,
                tipo: 'pdf',
                nombre:
                  '08 INFORMACIÓN FINANCIERA COMPARATIVA AGOSTO 2020-2021.pdf',
                url: 'assets/files/estados_financieros/04. 2021/08 INFORMACI%c3%93N FINANCIERA COMPARATIVA AGOSTO 2020-2021.pdf',
              },
              {
                id: 10,
                tipo: 'pdf',
                nombre:
                  '09 INFORMACIÓN FINANCIERA COMPETITIVA SEPTIEMBRE 2020-2021.pdf',
                url: 'assets/files/estados_financieros/04. 2021/09 INFORMACI%c3%93N FINANCIERA COMPETITIVA SEPTIEMBRE 2020-2021.pdf',
              },
              {
                id: 11,
                tipo: 'pdf',
                nombre: '10 ESTADO DE SITUACION FINANCIERA OCTUBRE 2021.pdf',
                url: 'assets/files/estados_financieros/04. 2021/10 ESTADO DE SITUACION FINANCIERA OCTUBRE 2021.pdf',
              },
              {
                id: 12,
                tipo: 'pdf',
                nombre: '11 ESTADO DE RESULTADOS OCTUBRE 2021.pdf',
                url: 'assets/files/estados_financieros/04. 2021/11 ESTADO DE RESULTADOS OCTUBRE 2021.pdf',
              },
              {
                id: 13,
                tipo: 'pdf',
                nombre: '12 ESTADO DE SITUACION FINANCIERA NOVIEMBRE 2021.pdf',
                url: 'assets/files/estados_financieros/04. 2021/12 ESTADO DE SITUACION FINANCIERA NOVIEMBRE 2021.pdf',
              },
              {
                id: 14,
                tipo: 'pdf',
                nombre: '13 ESTADO DE RESULTADOS NOVIEMBRE 2021.pdf',
                url: 'assets/files/estados_financieros/04. 2021/13 ESTADO DE RESULTADOS NOVIEMBRE 2021.pdf',
              },
              {
                id: 15,
                tipo: 'pdf',
                nombre:
                  '14 ESTADO DE SITUACION FINANCIERA DICIEMBRE 2020- 2021.pdf',
                url: 'assets/files/estados_financieros/04. 2021/14 ESTADO DE SITUACION FINANCIERA DICIEMBRE 2020-  2021.pdf',
              },
              {
                id: 16,
                tipo: 'pdf',
                nombre: '15 ESTADO DE RESULTADOS DICIEMBRE 2020-2021 .pdf',
                url: 'assets/files/estados_financieros/04. 2021/15 ESTADO DE RESULTADOS DICIEMBRE 2020-2021 .pdf',
              },
            ],
          },
        ],
      },

      {
        id: 1,
        nombre: '2020',
        acordion: [
          {
            id: 2,
            nombre: 'ENERO',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'ANALISIS FINANCIERO ENERO 2019-2020 .pdf',
                url: 'assets/files/estados_financieros/05. 2020/1. ENERO/ANALISIS FINANCIERO ENERO 2019-2020 .pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre: 'ESTADO DE RESULTADOS ENERO 2019-2020 1.pdf',
                url: 'assets/files/estados_financieros/05. 2020/1. ENERO/ESTADO DE RESULTADOS  ENERO 2019-2020 1.pdf',
              },
              {
                id: 3,
                tipo: 'pdf',
                nombre: 'ESTADO DE RESULTADOS ENERO 2019-2020 2 .pdf',
                url: 'assets/files/estados_financieros/05. 2020/1. ENERO/ESTADO DE RESULTADOS ENERO 2019-2020 2 .pdf',
              },
              {
                id: 4,
                tipo: 'pdf',
                nombre: 'ESTADO DE SITUACION FINANCIERA ENERO 2019-2020 2.pdf',
                url: 'assets/files/estados_financieros/05. 2020/1. ENERO/ESTADO DE SITUACION FINANCIERA  ENERO 2019-2020 2.pdf',
              },
              {
                id: 5,
                tipo: 'pdf',
                nombre: 'ESTADO DE SITUACION FINANCIERA ENERO 2019-2020 1.pdf',
                url: 'assets/files/estados_financieros/05. 2020/1. ENERO/ESTADO DE SITUACION FINANCIERA ENERO 2019-2020 1.pdf',
              },
            ],
          },
          {
            id: 6,
            nombre: 'FEBRERO',
            files: [
              {
                id: 6,
                tipo: 'pdf',
                nombre: 'ANALISIS FINANCIERO FEBRERO 2019-2020.pdf',
                url: 'assets/files/estados_financieros/05. 2020/2. FEBRERO/ANALISIS FINANCIERO FEBRERO 2019-2020.pdf',
              },
              {
                id: 7,
                tipo: 'pdf',
                nombre: 'ESTADO DE RESULTADOS 2 FEBRERO 2019 vs 2020.pdf',
                url: 'assets/files/estados_financieros/05. 2020/2. FEBRERO/ESTADO DE RESULTADOS  2 FEBRERO 2019 vs 2020.pdf',
              },
              {
                id: 8,
                tipo: 'pdf',
                nombre: 'ESTADO DE RESULTADOS 1 FEBRERO 2019 VS 2020.pdf',
                url: 'assets/files/estados_financieros/05. 2020/2. FEBRERO/ESTADO DE RESULTADOS 1 FEBRERO 2019 VS 2020.pdf',
              },
              {
                id: 9,
                tipo: 'pdf',
                nombre:
                  'ESTADO DE SITUACION FINANCIERA 1 FEBRERO 2019 VS 2020.pdf',
                url: 'assets/files/estados_financieros/05. 2020/2. FEBRERO/ESTADO DE SITUACION FINANCIERA 1 FEBRERO 2019 VS 2020.pdf',
              },
              {
                id: 10,
                tipo: 'pdf',
                nombre:
                  'ESTADO DE SITUACION FINANCIERA 2 FEBRERO 2019 VS 2020.pdf',
                url: 'assets/files/estados_financieros/05. 2020/2. FEBRERO/ESTADO DE SITUACION FINANCIERA 2 FEBRERO 2019 VS 2020.pdf',
              },
            ],
          },
          {
            id: 11,
            nombre: 'MARZO',
            files: [
              {
                id: 11,
                tipo: 'pdf',
                nombre: 'ANALISIS FINANCIERO MARZO 2019-2020.pdf',
                url: 'assets/files/estados_financieros/05. 2020/3. MARZO/ANALISIS FINANCIERO MARZO 2019-2020.pdf',
              },
              {
                id: 12,
                tipo: 'pdf',
                nombre: 'ESTADO DE RESULTADOS 1 MARZO 2019 2020.pdf',
                url: 'assets/files/estados_financieros/05. 2020/3. MARZO/ESTADO DE RESULTADOS 1 MARZO 2019 2020.pdf',
              },
              {
                id: 13,
                tipo: 'pdf',
                nombre: 'ESTADO DE RESULTADOS 2 MARZO 2019 2019.pdf',
                url: 'assets/files/estados_financieros/05. 2020/3. MARZO/ESTADO DE RESULTADOS 2 MARZO 2019 2019.pdf',
              },
              {
                id: 14,
                tipo: 'pdf',
                nombre: 'ESTADO DE SITUACION FINANCIERA 1 MARZO 2019 2018.pdf',
                url: 'assets/files/estados_financieros/05. 2020/3. MARZO/ESTADO DE SITUACION FINANCIERA 1  MARZO 2019 2018.pdf',
              },
              {
                id: 15,
                tipo: 'pdf',
                nombre: 'ESTADO DE SITUACION FINANCIERA 2 MARZO 2019 2020.pdf',
                url: 'assets/files/estados_financieros/05. 2020/3. MARZO/ESTADO DE SITUACION FINANCIERA 2 MARZO 2019 2020.pdf',
              },
            ],
          },
          {
            id: 16,
            nombre: 'ABRIL',
            files: [
              {
                id: 16,
                tipo: 'pdf',
                nombre: 'ANALISIS FINANCIERO ABRIL 2019-2020.pdf',
                url: 'assets/files/estados_financieros/05. 2020/4. ABRIL/ANALISIS FINANCIERO ABRIL 2019-2020.pdf',
              },
              {
                id: 17,
                tipo: 'pdf',
                nombre: 'ESTADO DE RESULTADOS 2 ABRIL 2019 2020.pdf',
                url: 'assets/files/estados_financieros/05. 2020/4. ABRIL/ESTADO DE  RESULTADOS 2 ABRIL 2019 2020.pdf',
              },
              {
                id: 18,
                tipo: 'pdf',
                nombre: 'ESTADO DE RESULTADOS 1 ABRIL 2020 2019 2020.pdf',
                url: 'assets/files/estados_financieros/05. 2020/4. ABRIL/ESTADO DE RESULTADOS 1 ABRIL 2020 2019 2020.pdf',
              },
              {
                id: 19,
                tipo: 'pdf',
                nombre: 'ESTADO DE SITUACION FINANCIERA 1 ABRIL 2019 2020.pdf',
                url: 'assets/files/estados_financieros/05. 2020/4. ABRIL/ESTADO DE SITUACION FINANCIERA 1 ABRIL 2019 2020.pdf',
              },
              {
                id: 20,
                tipo: 'pdf',
                nombre: 'ESTADO DE SITUACION FINANCIERA 2 ABRIL 2019 2020.pdf',
                url: 'assets/files/estados_financieros/05. 2020/4. ABRIL/ESTADO DE SITUACION FINANCIERA 2 ABRIL 2019 2020.pdf',
              },
            ],
          },
          {
            id: 21,
            nombre: 'MAYO',
            files: [
              {
                id: 21,
                tipo: 'pdf',
                nombre: 'ANALISIS FINANCIERO MAYO 2019-2020.pdf',
                url: 'assets/files/estados_financieros/05. 2020/5. MAYO/ANALISIS FINANCIERO MAYO 2019-2020.pdf',
              },
              {
                id: 22,
                tipo: 'pdf',
                nombre: 'ESTADO DE RESULTADOS 1 MAYO 2019-2020.pdf',
                url: 'assets/files/estados_financieros/05. 2020/5. MAYO/ESTADO DE RESULTADOS 1 MAYO 2019-2020.pdf',
              },
              {
                id: 23,
                tipo: 'pdf',
                nombre: 'ESTADO DE RESULTADOS 2 MAYO 2019-2020.pdf',
                url: 'assets/files/estados_financieros/05. 2020/5. MAYO/ESTADO DE RESULTADOS 2 MAYO 2019-2020.pdf',
              },
              {
                id: 24,
                tipo: 'pdf',
                nombre: 'ESTADO DE SITUACION FINANCIERA 1 MAYO 2019-2020.pdf',
                url: 'assets/files/estados_financieros/05. 2020/5. MAYO/ESTADO DE SITUACION FINANCIERA 1 MAYO 2019-2020.pdf',
              },
              {
                id: 25,
                tipo: 'pdf',
                nombre: 'ESTADO DE SITUACION FINANCIERA 2 MAYO 2019-2020.pdf',
                url: 'assets/files/estados_financieros/05. 2020/5. MAYO/ESTADO DE SITUACION FINANCIERA 2 MAYO 2019-2020.pdf',
              },
            ],
          },
          {
            id: 26,
            nombre: 'JUNIO',
            files: [
              {
                id: 26,
                tipo: 'pdf',
                nombre: 'ANALISIS FINANCIERO JUNIO 2019-2020.pdf',
                url: 'assets/files/estados_financieros/05. 2020/6. JUNIO/ANALISIS FINANCIERO JUNIO 2019-2020.pdf',
              },
              {
                id: 27,
                tipo: 'pdf',
                nombre: 'ESTADO DE RESULTADOS 1 JUNIO 2019-2020.pdf',
                url: 'assets/files/estados_financieros/05. 2020/6. JUNIO/ESTADO DE RESULTADOS 1 JUNIO 2019-2020.pdf',
              },
              {
                id: 28,
                tipo: 'pdf',
                nombre: 'ESTADO DE RESULTADOS 2 JUNIO 2019-2020.pdf',
                url: 'assets/files/estados_financieros/05. 2020/6. JUNIO/ESTADO DE RESULTADOS 2 JUNIO 2019-2020.pdf',
              },
              {
                id: 29,
                tipo: 'pdf',
                nombre: 'ESTADO DE SITUACION FINANCIERA 1 JUNIO 2019-2020.pdf',
                url: 'assets/files/estados_financieros/05. 2020/6. JUNIO/ESTADO DE SITUACION FINANCIERA 1 JUNIO 2019-2020.pdf',
              },
              {
                id: 30,
                tipo: 'pdf',
                nombre: 'ESTADO DE SITUACION FINANCIERA 2 JUNIO 2019-2020.pdf',
                url: 'assets/files/estados_financieros/05. 2020/6. JUNIO/ESTADO DE SITUACION FINANCIERA 2 JUNIO 2019-2020.pdf',
              },
            ],
          },
          {
            id: 31,
            nombre: 'JULIO',
            files: [
              {
                id: 31,
                tipo: 'pdf',
                nombre: 'ANALISIS FINANCIERO JULIO 2019-2020.pdf',
                url: 'assets/files/estados_financieros/05. 2020/7. JULIO/ANALISIS FINANCIERO JULIO 2019-2020.pdf',
              },
              {
                id: 32,
                tipo: 'pdf',
                nombre: 'ESTADO DE RESULTADOS 1 JULIO 2019-2020.pdf',
                url: 'assets/files/estados_financieros/05. 2020/7. JULIO/ESTADO DE RESULTADOS 1 JULIO 2019-2020.pdf',
              },
              {
                id: 33,
                tipo: 'pdf',
                nombre: 'ESTADO DE RESULTADOS 2 JULIO 2019-2020.pdf',
                url: 'assets/files/estados_financieros/05. 2020/7. JULIO/ESTADO DE RESULTADOS 2 JULIO 2019-2020.pdf',
              },
              {
                id: 34,
                tipo: 'pdf',
                nombre: 'ESTADO DE SITUACION FINANCIERA 1 JULIO 2019-2020.pdf',
                url: 'assets/files/estados_financieros/05. 2020/7. JULIO/ESTADO DE SITUACION FINANCIERA 1 JULIO 2019-2020.pdf',
              },
              {
                id: 35,
                tipo: 'pdf',
                nombre: 'ESTADO DE SITUACION FINANCIERA 2 JULIO 2019-2020.pdf',
                url: 'assets/files/estados_financieros/05. 2020/7. JULIO/ESTADO DE SITUACION FINANCIERA 2 JULIO 2019-2020.pdf',
              },
            ],
          },
          {
            id: 36,
            nombre: 'AGOSTO',
            files: [
              {
                id: 36,
                tipo: 'pdf',
                nombre: 'ANALISIS FINANCIERO AGOSTO 2019-2020.pdf',
                url: 'assets/files/estados_financieros/05. 2020/8. AGOSTO/ANALISIS FINANCIERO AGOSTO 2019-2020.pdf',
              },
              {
                id: 37,
                tipo: 'pdf',
                nombre: 'ESTADO DE RESULTADOS 1 AGOSTO 2019-2020.pdf',
                url: 'assets/files/estados_financieros/05. 2020/8. AGOSTO/ESTADO DE RESULTADOS 1 AGOSTO 2019-2020.pdf',
              },
              {
                id: 38,
                tipo: 'pdf',
                nombre: 'ESTADO DE RESULTADOS 2 AGOSTO 2019-2020.pdf',
                url: 'assets/files/estados_financieros/05. 2020/8. AGOSTO/ESTADO DE RESULTADOS 2 AGOSTO 2019-2020.pdf',
              },
              {
                id: 39,
                tipo: 'pdf',
                nombre: 'ESTADO DE SITUACION FINANCIERA 1 AGOSTO 2019-2020.pdf',
                url: 'assets/files/estados_financieros/05. 2020/8. AGOSTO/ESTADO DE SITUACION FINANCIERA 1 AGOSTO 2019-2020.pdf',
              },
              {
                id: 40,
                tipo: 'pdf',
                nombre: 'ESTADO DE SITUACION FINANCIERA 2 AGOSTO 2019-2020.pdf',
                url: 'assets/files/estados_financieros/05. 2020/8. AGOSTO/ESTADO DE SITUACION FINANCIERA 2 AGOSTO 2019-2020.pdf',
              },
            ],
          },
          {
            id: 41,
            nombre: 'SEPTIEMBRE',
            files: [
              {
                id: 41,
                tipo: 'pdf',
                nombre: 'ANALISIS FINANCIERO SEPTIEMBRE 2019-2020.pdf',
                url: 'assets/files/estados_financieros/05. 2020/9. SEPTIEMBRE/ANALISIS FINANCIERO SEPTIEMBRE 2019-2020.pdf',
              },
              {
                id: 42,
                tipo: 'pdf',
                nombre: 'ESTADO DE RESULTADOS 1 SEPTIEMBRE 2019-2020.pdf',
                url: 'assets/files/estados_financieros/05. 2020/9. SEPTIEMBRE/ESTADO DE RESULTADOS 1 SEPTIEMBRE 2019-2020.pdf',
              },
              {
                id: 43,
                tipo: 'pdf',
                nombre: 'ESTADO DE RESULTADOS 2 SEPTIEMBRE 2019-2020.pdf',
                url: 'assets/files/estados_financieros/05. 2020/9. SEPTIEMBRE/ESTADO DE RESULTADOS 2 SEPTIEMBRE 2019-2020.pdf',
              },
              {
                id: 44,
                tipo: 'pdf',
                nombre:
                  'ESTADO DE SITUACION FINANCIERA 1 SEPTIEMBRE 2019-2020.pdf',
                url: 'assets/files/estados_financieros/05. 2020/9. SEPTIEMBRE/ESTADO DE SITUACION FINANCIERA 1 SEPTIEMBRE 2019-2020.pdf',
              },
              {
                id: 45,
                tipo: 'pdf',
                nombre:
                  'ESTADO DE SITUACION FINANCIERA 2 SEPTIEMBRE 2019-2020.pdf',
                url: 'assets/files/estados_financieros/05. 2020/9. SEPTIEMBRE/ESTADO DE SITUACION FINANCIERA 2 SEPTIEMBRE 2019-2020.pdf',
              },
            ],
          },
          {
            id: 46,
            nombre: 'OCTUBRE',
            files: [
              {
                id: 46,
                tipo: 'pdf',
                nombre: 'ANALISIS FINANCIERO OCTUBRE 2019-2020.pdf',
                url: 'assets/files/estados_financieros/05. 2020/10. OCTUBRE/ANALISIS FINANCIERO OCTUBRE 2019-2020.pdf',
              },
              {
                id: 47,
                tipo: 'pdf',
                nombre: 'ESTADO DE RESULTADOS 1 OCTUBRE 2019-2020.pdf',
                url: 'assets/files/estados_financieros/05. 2020/10. OCTUBRE/ESTADO DE RESULTADOS 1 OCTUBRE 2019-2020.pdf',
              },
              {
                id: 48,
                tipo: 'pdf',
                nombre: 'ESTADO DE RESULTADOS 2 OCTUBRE 2019-2020.pdf',
                url: 'assets/files/estados_financieros/05. 2020/10. OCTUBRE/ESTADO DE RESULTADOS 2 OCTUBRE 2019-2020.pdf',
              },
              {
                id: 49,
                tipo: 'pdf',
                nombre:
                  'ESTADO DE SITUACION FINANCIERA 1 OCTUBRE 2019-2020.pdf',
                url: 'assets/files/estados_financieros/05. 2020/10. OCTUBRE/ESTADO DE SITUACION FINANCIERA 1 OCTUBRE 2019-2020.pdf',
              },
              {
                id: 50,
                tipo: 'pdf',
                nombre:
                  'ESTADO DE SITUACION FINANCIERA 2 OCTUBRE 2019-2020.pdf',
                url: 'assets/files/estados_financieros/05. 2020/10. OCTUBRE/ESTADO DE SITUACION FINANCIERA 2 OCTUBRE 2019-2020.pdf',
              },
            ],
          },
          {
            id: 51,
            nombre: 'NOVIEMBRE',
            files: [
              {
                id: 51,
                tipo: 'pdf',
                nombre: 'ANALISIS FINANCIERO NOVIEMBRE 2019-2020.pdf',
                url: 'assets/files/estados_financieros/05. 2020/11. NOVIEMBRE/ANALISIS FINANCIERO NOVIEMBRE 2019-2020.pdf',
              },
              {
                id: 52,
                tipo: 'pdf',
                nombre: 'ESTADO DE RESULTADOS 1 NOVIEMBRE 2019-2020.pdf',
                url: 'assets/files/estados_financieros/05. 2020/11. NOVIEMBRE/ESTADO DE RESULTADOS 1 NOVIEMBRE 2019-2020.pdf',
              },
              {
                id: 53,
                tipo: 'pdf',
                nombre: 'ESTADO DE RESULTADOS 2 NOVIEMBRE 2019-2020.pdf',
                url: 'assets/files/estados_financieros/05. 2020/11. NOVIEMBRE/ESTADO DE RESULTADOS 2 NOVIEMBRE 2019-2020.pdf',
              },
              {
                id: 54,
                tipo: 'pdf',
                nombre:
                  'ESTADO DE SITUACION FINANCIERA 1 NOVIEMBRE 2019-2020.pdf',
                url: 'assets/files/estados_financieros/05. 2020/11. NOVIEMBRE/ESTADO DE SITUACION FINANCIERA 1 NOVIEMBRE 2019-2020.pdf',
              },
              {
                id: 55,
                tipo: 'pdf',
                nombre:
                  'ESTADO DE SITUACION FINANCIERA 2 NOVIEMBRE 2019-2020.pdf',
                url: 'assets/files/estados_financieros/05. 2020/11. NOVIEMBRE/ESTADO DE SITUACION FINANCIERA 2 NOVIEMBRE 2019-2020.pdf',
              },
            ],
          },
          {
            id: 56,
            nombre: 'DICIEMBRE',
            files: [
              {
                id: 56,
                tipo: 'pdf',
                nombre: 'ANALISIS FINANCIERO DICIEMBRE 2019-2020.pdf',
                url: 'assets/files/estados_financieros/05. 2020/12. DICIEMBRE/ANALISIS FINANCIERO DICIEMBRE 2019-2020.pdf',
              },
              {
                id: 57,
                tipo: 'pdf',
                nombre: 'ESTADO DE RESULTADOS 1 DICIEMBRE 2019-2020.pdf',
                url: 'assets/files/estados_financieros/05. 2020/12. DICIEMBRE/ESTADO DE RESULTADOS 1 DICIEMBRE 2019-2020.pdf',
              },
              {
                id: 58,
                tipo: 'pdf',
                nombre: 'ESTADO DE RESULTADOS 2 DICIEMBRE 2019-2020.pdf',
                url: 'assets/files/estados_financieros/05. 2020/12. DICIEMBRE/ESTADO DE RESULTADOS 2 DICIEMBRE 2019-2020.pdf',
              },
              {
                id: 59,
                tipo: 'pdf',
                nombre:
                  'ESTADO DE SITUACION FINANCIERA 1 DICIEMBRE 2019-2020.pdf',
                url: 'assets/files/estados_financieros/05. 2020/12. DICIEMBRE/ESTADO DE SITUACION FINANCIERA 1 DICIEMBRE 2019-2020.pdf',
              },
              {
                id: 60,
                tipo: 'pdf',
                nombre:
                  'ESTADO DE SITUACION FINANCIERA 2 DICIEMBRE 2019-2020.pdf',
                url: 'assets/files/estados_financieros/05. 2020/12. DICIEMBRE/ESTADO DE SITUACION FINANCIERA 2 DICIEMBRE 2019-2020.pdf',
              },
            ],
          },
        ],
      },

      {
        id: 1,
        nombre: '2019',
        acordion: [
          {
            id: 2,
            nombre: 'DOCUMENTOS',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'BALANCEABRIL2019.pdf',
                url: 'assets/files/estados_financieros/06. 2019/BALANCEABRIL2019.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre: 'BALANCEAGOSTO2019.pdf',
                url: 'assets/files/estados_financieros/06. 2019/BALANCEAGOSTO2019.pdf',
              },
              {
                id: 3,
                tipo: 'pdf',
                nombre: 'BALANCEENERO2019.pdf',
                url: 'assets/files/estados_financieros/06. 2019/BALANCEENERO2019.pdf',
              },
              {
                id: 4,
                tipo: 'pdf',
                nombre: 'BALANCEFEBRERO2019.pdf',
                url: 'assets/files/estados_financieros/06. 2019/BALANCEFEBRERO2019.pdf',
              },
              {
                id: 5,
                tipo: 'pdf',
                nombre: 'BALANCEJULIO2019(1).pdf',
                url: 'assets/files/estados_financieros/06. 2019/BALANCEJULIO2019(1).pdf',
              },
              {
                id: 6,
                tipo: 'pdf',
                nombre: 'BALANCEJULIO2019.pdf',
                url: 'assets/files/estados_financieros/06. 2019/BALANCEJULIO2019.pdf',
              },
              {
                id: 7,
                tipo: 'pdf',
                nombre: 'BALANCEJUNIO2019.pdf',
                url: 'assets/files/estados_financieros/06. 2019/BALANCEJUNIO2019.pdf',
              },
              {
                id: 8,
                tipo: 'pdf',
                nombre: 'BALANCEMARZO2019.pdf',
                url: 'assets/files/estados_financieros/06. 2019/BALANCEMARZO2019.pdf',
              },
              {
                id: 9,
                tipo: 'pdf',
                nombre: 'BALANCEMAYO2019.pdf',
                url: 'assets/files/estados_financieros/06. 2019/BALANCEMAYO2019.pdf',
              },
              {
                id: 10,
                tipo: 'pdf',
                nombre: 'BALANCENOVIEMBRE2019.pdf',
                url: 'assets/files/estados_financieros/06. 2019/BALANCENOVIEMBRE2019.pdf',
              },
              {
                id: 11,
                tipo: 'pdf',
                nombre: 'BALANCEOCTUBRE2019.pdf',
                url: 'assets/files/estados_financieros/06. 2019/BALANCEOCTUBRE2019.pdf',
              },
              {
                id: 12,
                tipo: 'pdf',
                nombre: 'BALANCESEPTIEMBRE2019.pdf',
                url: 'assets/files/estados_financieros/06. 2019/BALANCESEPTIEMBRE2019.pdf',
              },
              {
                id: 13,
                tipo: 'pdf',
                nombre: 'publicacion1trimestre2019.pdf',
                url: 'assets/files/estados_financieros/06. 2019/publicacion1trimestre2019.pdf',
              },
            ],
          },
        ],
      },

      {
        id: 1,
        nombre: '2018',
        acordion: [
          {
            id: 2,
            nombre: 'DOCUMENTOS',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'BalanceGeneralABR2018.pdf',
                url: 'assets/files/estados_financieros/07. 2018/BalanceGeneralABR2018.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre: 'BalanceGeneralAGO2018.pdf',
                url: 'assets/files/estados_financieros/07. 2018/BalanceGeneralAGO2018.pdf',
              },
              {
                id: 3,
                tipo: 'pdf',
                nombre: 'BalanceGeneralDIC2018.pdf',
                url: 'assets/files/estados_financieros/07. 2018/BalanceGeneralDIC2018.pdf',
              },
              {
                id: 4,
                tipo: 'pdf',
                nombre: 'BalanceGeneralENE2018.pdf',
                url: 'assets/files/estados_financieros/07. 2018/BalanceGeneralENE2018.pdf',
              },
              {
                id: 5,
                tipo: 'pdf',
                nombre: 'BalanceGeneralFEB2018.pdf',
                url: 'assets/files/estados_financieros/07. 2018/BalanceGeneralFEB2018.pdf',
              },
              {
                id: 6,
                tipo: 'pdf',
                nombre: 'BalanceGeneralJUL2018.pdf',
                url: 'assets/files/estados_financieros/07. 2018/BalanceGeneralJUL2018.pdf',
              },
              {
                id: 7,
                tipo: 'pdf',
                nombre: 'BalanceGeneralJUN2018.pdf',
                url: 'assets/files/estados_financieros/07. 2018/BalanceGeneralJUN2018.pdf',
              },
              {
                id: 8,
                tipo: 'pdf',
                nombre: 'BalanceGeneralMAR2018.pdf',
                url: 'assets/files/estados_financieros/07. 2018/BalanceGeneralMAR2018.pdf',
              },
              {
                id: 9,
                tipo: 'pdf',
                nombre: 'BalanceGeneralMAY2018.pdf',
                url: 'assets/files/estados_financieros/07. 2018/BalanceGeneralMAY2018.pdf',
              },
              {
                id: 10,
                tipo: 'pdf',
                nombre: 'BalanceGeneralNOV2018.pdf',
                url: 'assets/files/estados_financieros/07. 2018/BalanceGeneralNOV2018.pdf',
              },
              {
                id: 11,
                tipo: 'pdf',
                nombre: 'BalanceGeneralOCT2018.pdf',
                url: 'assets/files/estados_financieros/07. 2018/BalanceGeneralOCT2018.pdf',
              },
              {
                id: 12,
                tipo: 'pdf',
                nombre: 'BalanceGeneralSEP2018.pdf',
                url: 'assets/files/estados_financieros/07. 2018/BalanceGeneralSEP2018.pdf',
              },
              {
                id: 13,
                tipo: 'pdf',
                nombre: 'BalanceGeneralSuperSaludDIC2018.pdf',
                url: 'assets/files/estados_financieros/07. 2018/BalanceGeneralSuperSaludDIC2018.pdf',
              },
              {
                id: 14,
                tipo: 'pdf',
                nombre: 'CertificacionesEstadosFinancierosENE-JUL2018.pdf',
                url: 'assets/files/estados_financieros/07. 2018/CertificacionesEstadosFinancierosENE-JUL2018.pdf',
              },
            ],
          },
        ],
      },

      {
        id: 1,
        nombre: '2017',
        acordion: [
          {
            id: 2,
            nombre: 'DOCUMENTOS',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'Balance General 2017.pdf',
                url: 'assets/files/estados_financieros/08. 2017/Balance General 2017.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre: 'BalanceComparativo2016-2017.pdf',
                url: 'assets/files/estados_financieros/08. 2017/BalanceComparativo2016-2017.pdf',
              },
            ],
          },
        ],
      },

      {
        id: 1,
        nombre: '2016',
        acordion: [
          {
            id: 2,
            nombre: 'DOCUMENTOS',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'Balance General 2016.pdf',
                url: 'assets/files/estados_financieros/09. 2016/Balance General 2016.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre: 'BalanceComparativo2016-2015.pdf',
                url: 'assets/files/estados_financieros/09. 2016/BalanceComparativo2016-2015.pdf',
              },
            ],
          },
        ],
      },

      {
        id: 1,
        nombre: '2015',
        acordion: [
          {
            id: 2,
            nombre: 'DOCUMENTOS',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'Anexo1_2015.pdf',
                url: 'assets/files/estados_financieros/10. 2015/Anexo1_2015.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre: 'Anexo2_2015.pdf',
                url: 'assets/files/estados_financieros/10. 2015/Anexo2_2015.pdf',
              },
              {
                id: 3,
                tipo: 'pdf',
                nombre: 'Anexo3_2015.pdf',
                url: 'assets/files/estados_financieros/10. 2015/Anexo3_2015.pdf',
              },
              {
                id: 4,
                tipo: 'pdf',
                nombre: 'Anexo4_2015.pdf',
                url: 'assets/files/estados_financieros/10. 2015/Anexo4_2015.pdf',
              },
              {
                id: 5,
                tipo: 'pdf',
                nombre: 'Anexo5_2015.pdf',
                url: 'assets/files/estados_financieros/10. 2015/Anexo5_2015.pdf',
              },
              {
                id: 6,
                tipo: 'pdf',
                nombre: 'Anexo6_2015.pdf',
                url: 'assets/files/estados_financieros/10. 2015/Anexo6_2015.pdf',
              },
              {
                id: 7,
                tipo: 'pdf',
                nombre: 'Balance General 2015.pdf',
                url: 'assets/files/estados_financieros/10. 2015/Balance General 2015.pdf',
              },
              {
                id: 8,
                tipo: 'pdf',
                nombre: 'Balance Supersalud 2015.pdf',
                url: 'assets/files/estados_financieros/10. 2015/Balance Supersalud 2015.pdf',
              },
            ],
          },
        ],
      },

      {
        id: 1,
        nombre: '2014',
        acordion: [
          {
            id: 2,
            nombre: 'DOCUMENTOS',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'Balance General 2014.pdf',
                url: 'assets/files/estados_financieros/11. 2014/Balance General 2014.pdf',
              },
            ],
          },
        ],
      },

      {
        id: 1,
        nombre: '2013',
        acordion: [
          {
            id: 2,
            nombre: 'DOCUMENTOS',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'Balance General 2013.pdf',
                url: 'assets/files/estados_financieros/12. 2013/Balance General 2013.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre: 'Balance Supersalud 2013.pdf',
                url: 'assets/files/estados_financieros/12. 2013/Balance Supersalud 2013.pdf',
              },
            ],
          },
        ],
      },

      {
        id: 1,
        nombre: '2012',
        acordion: [
          {
            id: 2,
            nombre: 'DOCUMENTOS',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'Balance General 2012.pdf',
                url: 'assets/files/estados_financieros/13. 2012/Balance General 2012.pdf',
              },
            ],
          },
        ],
      },

      {
        id: 1,
        nombre: '2011',
        acordion: [
          {
            id: 2,
            nombre: 'DOCUMENTOS',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'Balance General 2011.pdf',
                url: 'assets/files/estados_financieros/14. 2011/Balance General 2011.pdf',
              },
            ],
          },
        ],
      },

      {
        id: 1,
        nombre: '2010',
        acordion: [
          {
            id: 2,
            nombre: 'DOCUMENTOS',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'Balance General 2010.pdf',
                url: 'assets/files/estados_financieros/15. 2010/Balance General 2010.pdf',
              },
            ],
          },
        ],
      },
    ];
  }
}
