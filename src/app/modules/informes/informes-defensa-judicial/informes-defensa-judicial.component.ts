import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { AcordionAnidadoFiles } from '../../../interfaces/acordion';

@Component({
  selector: 'app-informes-defensa-judicial',
  standalone: true,
  imports: [NgbAccordionModule, NgFor],
  templateUrl: './informes-defensa-judicial.component.html',
  styleUrl: './informes-defensa-judicial.component.css',
})
export class InformesDefensaJudicialComponent {
  items: AcordionAnidadoFiles[] = [];
  constructor() {
    this.items = [
      {
        id: 1,
        nombre: 'CONTROL CITACIONES',
        files: [
          {
            id: 1,
            tipo: 'excel',
            nombre: '01 CONTROL CITACIONES AUDIENCIAS CTE DEFENSA 2024.xls',
            url: '/assets/files/informes_defensa_judicial/CONTROL CITACIONES/01 CONTROL CITACIONES AUDIENCIAS CTE DEFENSA 2024.xls',
          },
          {
            id: 2,
            tipo: 'excel',
            nombre: '02 CONTROL CITACIONES AUDIENCIAS CTE DEFENSA 2023.xls',
            url: '/assets/files/informes_defensa_judicial/CONTROL CITACIONES/02 CONTROL CITACIONES AUDIENCIAS CTE DEFENSA 2023.xls',
          },
          {
            id: 3,
            tipo: 'excel',
            nombre: '03 CONTROL CITACIONES AUDIENCIAS CTE DEFENSA 2022.xls',
            url: '/assets/files/informes_defensa_judicial/CONTROL CITACIONES/03 CONTROL CITACIONES AUDIENCIAS CTE DEFENSA 2022.xls',
          },
          {
            id: 4,
            tipo: 'excel',
            nombre: '04 CONTROL CITACIONES AUDIENCIAS CTE DEFENSA 2021.xls',
            url: '/assets/files/informes_defensa_judicial/CONTROL CITACIONES/04 CONTROL CITACIONES AUDIENCIAS CTE DEFENSA 2021.xls',
          },
          {
            id: 5,
            tipo: 'excel',
            nombre: '05 CONTROL CITACIONES AUDIENCIAS CTE DEFENSA 2020.xls',
            url: '/assets/files/informes_defensa_judicial/CONTROL CITACIONES/05 CONTROL CITACIONES AUDIENCIAS CTE DEFENSA 2020.xls',
          },
          {
            id: 6,
            tipo: 'excel',
            nombre: '06 CONTROL CITACIONES AUDIENCIAS CTE DEFENSA 2019.xls',
            url: '/assets/files/informes_defensa_judicial/CONTROL CITACIONES/06 CONTROL CITACIONES AUDIENCIAS CTE DEFENSA 2019.xls',
          },
          {
            id: 7,
            tipo: 'excel',
            nombre: '07 CONTROL CITACIONES AUDIENCIAS CTE DEFENSA 2018.xls',
            url: '/assets/files/informes_defensa_judicial/CONTROL CITACIONES/07 CONTROL CITACIONES AUDIENCIAS CTE DEFENSA 2018.xls',
          },
          {
            id: 8,
            tipo: 'excel',
            nombre: '08 CONTROL CITACIONES AUDIENCIAS CTE DEFENSA 2017.xls',
            url: '/assets/files/informes_defensa_judicial/CONTROL CITACIONES/08 CONTROL CITACIONES AUDIENCIAS CTE DEFENSA 2017.xls',
          },
          {
            id: 9,
            tipo: 'excel',
            nombre: '09 CONTROL CITACIONES AUDIENCIAS CTE DEFENSA 2016.xls',
            url: '/assets/files/informes_defensa_judicial/CONTROL CITACIONES/09 CONTROL CITACIONES AUDIENCIAS CTE DEFENSA 2016.xls',
          },
          {
            id: 10,
            tipo: 'excel',
            nombre: '10 CONTROL CITACIONES AUDIENCIAS CTE DEFENSA 2015.xls',
            url: '/assets/files/informes_defensa_judicial/CONTROL CITACIONES/10 CONTROL CITACIONES AUDIENCIAS CTE DEFENSA 2015.xls',
          },
          {
            id: 11,
            tipo: 'excel',
            nombre: '11 CONTROL CITACIONES AUDIENCIAS CTE DEFENSA 2014.xls',
            url: '/assets/files/informes_defensa_judicial/CONTROL CITACIONES/11 CONTROL CITACIONES AUDIENCIAS CTE DEFENSA 2014.xls',
          },
          {
            id: 12,
            tipo: 'excel',
            nombre: '12 CONTROL CITACIONES AUDIENCIAS CTE DEFENSA 2013.xls',
            url: '/assets/files/informes_defensa_judicial/CONTROL CITACIONES/12 CONTROL CITACIONES AUDIENCIAS CTE DEFENSA 2013.xls',
          },
        ],
      },
      {
        id: 2,
        nombre: 'POLITICA DE PREVENCION DEL DAÑO ANTIJURIDICO',
        acordion: [
          {
            id: 1,
            nombre: '2023',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre:
                  'Política de Prevención del Daño Antijurídico. Vigencia 2024-2025.pdf',
                url: '/assets/files/informes_defensa_judicial/POLITICA DE PREVENCION DEL DAÑO ANTIJURIDICO/01. 2023/Política de Prevención del Daño Antijurídico. Vigencia 2024-2025.pdf',
              },
            ],
          },
          {
            id: 2,
            nombre: '2022',
            files: [
              {
                id: 2,
                tipo: 'pdf',
                nombre:
                  'POLITICA DE PREVENCIÓN DEL DAÑO ANTIJURIDIO FPS-FNC 2022-2023.pdf',
                url: '/assets/files/informes_defensa_judicial/POLITICA DE PREVENCION DEL DAÑO ANTIJURIDICO/02. 2022/POLITICA DE PREVENCIÓN DEL DAÑO ANTIJURIDIO FPS-FNC 2022-2023.pdf',
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
                nombre:
                  'POLITICA DE PREVENCION DEL DAÑO ANTIJURIDICO 2020 - 2021.pdf',
                url: '/assets/files/informes_defensa_judicial/POLITICA DE PREVENCION DEL DAÑO ANTIJURIDICO/03. 2020/POLITICA DE PREVENCION DEL DAÑO ANTIJURIDICO 2020 - 2021.pdf',
              },
            ],
          },
          {
            id: 4,
            nombre: '2019',
            files: [
              {
                id: 4,
                tipo: 'pdf',
                nombre: 'POLITICA DE PREVENCION DEL DAÑO ANTIJURIDICO 2019.pdf',
                url: '/assets/files/informes_defensa_judicial/POLITICA DE PREVENCION DEL DAÑO ANTIJURIDICO/04. 2019/POLITICA DE PREVENCION DEL DAÑO ANTIJURIDICO 2019.pdf',
              },
            ],
          },
          {
            id: 5,
            nombre: '2018',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'ACTANo0052018.pdf',
                url: '/assets/files/informes_defensa_judicial/POLITICA DE PREVENCION DEL DAÑO ANTIJURIDICO/05. 2018/ACTANo0052018.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre: 'ACTANo0202018.pdf',
                url: '/assets/files/informes_defensa_judicial/POLITICA DE PREVENCION DEL DAÑO ANTIJURIDICO/05. 2018/ACTANo0202018.pdf',
              },
              {
                id: 3,
                tipo: 'pdf',
                nombre: 'ACTANo132018.pdf',
                url: '/assets/files/informes_defensa_judicial/POLITICA DE PREVENCION DEL DAÑO ANTIJURIDICO/05. 2018/ACTANo132018.pdf',
              },
            ],
          },
          {
            id: 6,
            nombre: '2012',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'ACTANo0152012.pdf',
                url: '/assets/files/informes_defensa_judicial/POLITICA DE PREVENCION DEL DAÑO ANTIJURIDICO/06. 2012/ACTANo0152012.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre: 'ACTANo0432012.pdf',
                url: '/assets/files/informes_defensa_judicial/POLITICA DE PREVENCION DEL DAÑO ANTIJURIDICO/06. 2012/ACTANo0432012.pdf',
              },
            ],
          },
        ],
        files: [
          {
            id: 7,
            tipo: 'pdf',
            nombre: 'res15272013.pdf',
            url: '/assets/files/informes_defensa_judicial/POLITICA DE PREVENCION DEL DAÑO ANTIJURIDICO/res15272013.pdf',
          },
        ],
      },
      {
        id: 3,
        nombre: 'PROGRAMACION AUDIENCIAS',
        acordion: [
          {
            id: 2,
            nombre: '2024',
            files: [
              {
                id: 1,
                tipo: 'excel',
                nombre: '01. AUDIENCIAS ENERO DE 2024 CONCILIACIÓN.xls',
                url: '/assets/files/informes_defensa_judicial/PROGRAMACION AUDIENCIAS/01. 2024/01. AUDIENCIAS ENERO DE 2024 CONCILIACIÓN.xls',
              },
              {
                id: 2,
                tipo: 'excel',
                nombre: '02. AUDIENCIAS FEBRERO DE 2024 CONCILIACIÓN.xls',
                url: '/assets/files/informes_defensa_judicial/PROGRAMACION AUDIENCIAS/01. 2024/02. AUDIENCIAS FEBRERO DE 2024 CONCILIACIÓN.xls',
              },
              {
                id: 3,
                tipo: 'excel',
                nombre: '03. AUDIENCIAS MARZO DE 2024 CONCILIACIÓN.xls',
                url: '/assets/files/informes_defensa_judicial/PROGRAMACION AUDIENCIAS/01. 2024/03. AUDIENCIAS MARZO DE 2024 CONCILIACIÓN.xls',
              },
              {
                id: 4,
                tipo: 'excel',
                nombre: '04. AUDIENCIAS ABRIL DE 2024 CONCILIACIÓN.xls',
                url: '/assets/files/informes_defensa_judicial/PROGRAMACION AUDIENCIAS/01. 2024/04. AUDIENCIAS ABRIL DE 2024 CONCILIACIÓN.xls',
              },
              {
                id: 5,
                tipo: 'excel',
                nombre: '05. AUDIENCIAS MAYO DE 2024 CONCILIACIÓN.xls',
                url: '/assets/files/informes_defensa_judicial/PROGRAMACION AUDIENCIAS/01. 2024/05. AUDIENCIAS MAYO DE 2024 CONCILIACIÓN.xls',
              },
              {
                id: 6,
                tipo: 'excel',
                nombre: '06. AUDIENCIAS JUNIO DE 2024 CONCILIACIÓN.xls',
                url: '/assets/files/informes_defensa_judicial/PROGRAMACION AUDIENCIAS/01. 2024/06. AUDIENCIAS JUNIO DE 2024 CONCILIACIÓN.xls',
              },
              {
                id: 7,
                tipo: 'excel',
                nombre: '07. AUDIENCIAS JULIO DE 2024 CONCILIACIÓN.xls',
                url: '/assets/files/informes_defensa_judicial/PROGRAMACION AUDIENCIAS/01. 2024/07. AUDIENCIAS JULIO DE 2024 CONCILIACIÓN.xls',
              },
            ],
          },
          {
            id: 3,
            nombre: '2023',
            files: [
              {
                id: 8,
                tipo: 'excel',
                nombre: '01. AUDIENCIAS ENERO DE 2023 CONCILIACIÓN.xls',
                url: '/assets/files/informes_defensa_judicial/PROGRAMACION AUDIENCIAS/02. 2023/01. AUDIENCIAS ENERO DE 2023 CONCILIACIÓN.xls',
              },
              {
                id: 9,
                tipo: 'excel',
                nombre: '02. AUDIENCIAS FEBRERO DE 2023 CONCILIACIÓN.xls',
                url: '/assets/files/informes_defensa_judicial/PROGRAMACION AUDIENCIAS/02. 2023/02. AUDIENCIAS FEBRERO DE 2023 CONCILIACIÓN.xls',
              },
              {
                id: 10,
                tipo: 'excel',
                nombre: '03. AUDIENCIAS MARZO DE 2023 CONCILIACIÓN.xls',
                url: '/assets/files/informes_defensa_judicial/PROGRAMACION AUDIENCIAS/02. 2023/03. AUDIENCIAS MARZO DE 2023 CONCILIACIÓN.xls',
              },
              {
                id: 11,
                tipo: 'excel',
                nombre: '04. AUDIENCIAS ABRIL DE 2023 CONCILIACIÓN.xls',
                url: '/assets/files/informes_defensa_judicial/PROGRAMACION AUDIENCIAS/02. 2023/04. AUDIENCIAS ABRIL DE 2023 CONCILIACIÓN.xls',
              },
              {
                id: 12,
                tipo: 'excel',
                nombre: '05. AUDIENCIAS MAYO DE 2023 CONCILIACIÓN.xls',
                url: '/assets/files/informes_defensa_judicial/PROGRAMACION AUDIENCIAS/02. 2023/05. AUDIENCIAS MAYO DE 2023 CONCILIACIÓN.xls',
              },
              {
                id: 13,
                tipo: 'excel',
                nombre: '06. AUDIENCIAS JUNIO DE 2023 CONCILIACIÓN.xls',
                url: '/assets/files/informes_defensa_judicial/PROGRAMACION AUDIENCIAS/02. 2023/06. AUDIENCIAS JUNIO DE 2023 CONCILIACIÓN.xls',
              },
              {
                id: 14,
                tipo: 'excel',
                nombre: '07. AUDIENCIAS JULIO DE 2023 CONCILIACIÓN.xls',
                url: '/assets/files/informes_defensa_judicial/PROGRAMACION AUDIENCIAS/02. 2023/07. AUDIENCIAS JULIO DE 2023 CONCILIACIÓN.xls',
              },
              {
                id: 15,
                tipo: 'excel',
                nombre: '08. AUDIENCIAS AGOSTO DE 2023 CONCILIACIÓN.xls',
                url: '/assets/files/informes_defensa_judicial/PROGRAMACION AUDIENCIAS/02. 2023/08. AUDIENCIAS AGOSTO DE 2023 CONCILIACIÓN.xls',
              },
              {
                id: 16,
                tipo: 'excel',
                nombre: '09. AUDIENCIAS SEPTIEMBRE DE 2023 CONCILIACIÓN.xls',
                url: '/assets/files/informes_defensa_judicial/PROGRAMACION AUDIENCIAS/02. 2023/09. AUDIENCIAS SEPTIEMBRE DE 2023 CONCILIACIÓN.xls',
              },
              {
                id: 17,
                tipo: 'excel',
                nombre: '10. AUDIENCIAS OCTUBRE DE 2023 CONCILIACIÓN.xls',
                url: '/assets/files/informes_defensa_judicial/PROGRAMACION AUDIENCIAS/02. 2023/10. AUDIENCIAS OCTUBRE DE 2023 CONCILIACIÓN.xls',
              },
              {
                id: 18,
                tipo: 'excel',
                nombre: '11. AUDIENCIAS NOVIEMBRE DE 2023 CONCILIACIÓN.xls',
                url: '/assets/files/informes_defensa_judicial/PROGRAMACION AUDIENCIAS/02. 2023/11. AUDIENCIAS NOVIEMBRE DE 2023 CONCILIACIÓN.xls',
              },
              {
                id: 19,
                tipo: 'excel',
                nombre: '12. AUDIENCIAS DICIEMBRE DE 2023 CONCILIACIÓN.xls',
                url: '/assets/files/informes_defensa_judicial/PROGRAMACION AUDIENCIAS/02. 2023/12. AUDIENCIAS DICIEMBRE DE 2023 CONCILIACIÓN.xls',
              },
            ],
          },
          {
            id: 4,
            nombre: '2022',
            files: [
              {
                id: 20,
                tipo: 'excel',
                nombre: '01. AUDIENCIAS ENERO DE 2022 CONCILIACIÓN.xls',
                url: '/assets/files/informes_defensa_judicial/PROGRAMACION AUDIENCIAS/03. 2022/01. AUDIENCIAS ENERO DE 2022 CONCILIACIÓN.xls',
              },
              {
                id: 21,
                tipo: 'excel',
                nombre: '02. AUDIENCIAS FEBRERO DE 2022 CONCILIACIÓN.xls',
                url: '/assets/files/informes_defensa_judicial/PROGRAMACION AUDIENCIAS/03. 2022/02. AUDIENCIAS FEBRERO DE 2022 CONCILIACIÓN.xls',
              },
              {
                id: 22,
                tipo: 'excel',
                nombre: '03. AUDIENCIAS MARZO DE 2022 CONCILIACIÓN.xls',
                url: '/assets/files/informes_defensa_judicial/PROGRAMACION AUDIENCIAS/03. 2022/03. AUDIENCIAS MARZO DE 2022 CONCILIACIÓN.xls',
              },
              {
                id: 23,
                tipo: 'excel',
                nombre: '04. AUDIENCIAS ABRIL DE 2022 CONCILIACIÓN.xls',
                url: '/assets/files/informes_defensa_judicial/PROGRAMACION AUDIENCIAS/03. 2022/04. AUDIENCIAS ABRIL DE 2022 CONCILIACIÓN.xls',
              },
              {
                id: 24,
                tipo: 'excel',
                nombre: '05. AUDIENCIAS MAYO DE 2022 CONCILIACIÓN.xls',
                url: '/assets/files/informes_defensa_judicial/PROGRAMACION AUDIENCIAS/03. 2022/05. AUDIENCIAS MAYO DE 2022 CONCILIACIÓN.xls',
              },
              {
                id: 25,
                tipo: 'excel',
                nombre: '06. AUDIENCIAS JUNIO DE 2022 CONCILIACIÓN.xls',
                url: '/assets/files/informes_defensa_judicial/PROGRAMACION AUDIENCIAS/03. 2022/06. AUDIENCIAS JUNIO DE 2022 CONCILIACIÓN.xls',
              },
              {
                id: 26,
                tipo: 'excel',
                nombre: '07. AUDIENCIAS JULIO DE 2022 CONCILIACIÓN.xls',
                url: '/assets/files/informes_defensa_judicial/PROGRAMACION AUDIENCIAS/03. 2022/07. AUDIENCIAS JULIO DE 2022 CONCILIACIÓN.xls',
              },
              {
                id: 27,
                tipo: 'excel',
                nombre: '08. AUDIENCIAS AGOSTO DE 2022 CONCILIACIÓN.xls',
                url: '/assets/files/informes_defensa_judicial/PROGRAMACION AUDIENCIAS/03. 2022/08. AUDIENCIAS AGOSTO DE 2022 CONCILIACIÓN.xls',
              },
              {
                id: 28,
                tipo: 'excel',
                nombre: '09. AUDIENCIAS SEPTIEMBRE DE 2022 CONCILIACIÓN.xls',
                url: '/assets/files/informes_defensa_judicial/PROGRAMACION AUDIENCIAS/03. 2022/09. AUDIENCIAS SEPTIEMBRE DE 2022 CONCILIACIÓN.xls',
              },
              {
                id: 29,
                tipo: 'excel',
                nombre: '10. AUDIENCIAS OCTUBRE DE 2022 CONCILIACIÓN.xls',
                url: '/assets/files/informes_defensa_judicial/PROGRAMACION AUDIENCIAS/03. 2022/10. AUDIENCIAS OCTUBRE DE 2022 CONCILIACIÓN.xls',
              },
              {
                id: 30,
                tipo: 'excel',
                nombre: '11. AUDIENCIAS NOVIEMBRE DE 2022 CONCILIACIÓN.xls',
                url: '/assets/files/informes_defensa_judicial/PROGRAMACION AUDIENCIAS/03. 2022/11. AUDIENCIAS NOVIEMBRE DE 2022 CONCILIACIÓN.xls',
              },
              {
                id: 31,
                tipo: 'excel',
                nombre: '12. AUDIENCIAS DICIEMBRE DE 2022 CONCILIACIÓN.xls',
                url: '/assets/files/informes_defensa_judicial/PROGRAMACION AUDIENCIAS/03. 2022/12. AUDIENCIAS DICIEMBRE DE 2022 CONCILIACIÓN.xls',
              },
            ],
          },
          {
            id: 5,
            nombre: '2021',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: '01 AUDIENCIAS ENERO 2021 CONCILIACIÓN.pdf',
                url: '/assets/files/informes_defensa_judicial/PROGRAMACION AUDIENCIAS/04. 2021/01 AUDIENCIAS ENERO 2021 CONCILIACIÓN.pdf',
              },
              {
                id: 2,
                tipo: 'excel',
                nombre: '01 CONTROL CITACIONES AUDIENCIAS CTE DEFENSA 2020.xls',
                url: '/assets/files/informes_defensa_judicial/PROGRAMACION AUDIENCIAS/04. 2021/01 CONTROL CITACIONES AUDIENCIAS CTE DEFENSA 2020.xls',
              },
              {
                id: 3,
                tipo: 'pdf',
                nombre: '03 AUDIENCIAS MARZO 2021 CONCILIACIÓN.pdf',
                url: '/assets/files/informes_defensa_judicial/PROGRAMACION AUDIENCIAS/04. 2021/03 AUDIENCIAS MARZO 2021 CONCILIACIÓN..pdf',
              },
              {
                id: 4,
                tipo: 'pdf',
                nombre: '04 AUDIENCIAS ABRIL 2021 CONCILIACIÓN.pdf',
                url: '/assets/files/informes_defensa_judicial/PROGRAMACION AUDIENCIAS/04. 2021/04 AUDIENCIAS ABRIL 2021 CONCILIACIÓN..pdf',
              },
              {
                id: 5,
                tipo: 'pdf',
                nombre: '05 AUDIENCIAS MAYO 2021 CONCILIACIÓN.pdf',
                url: '/assets/files/informes_defensa_judicial/PROGRAMACION AUDIENCIAS/04. 2021/05 AUDIENCIAS MAYO 2021 CONCILIACIÓN.pdf',
              },
              {
                id: 6,
                tipo: 'pdf',
                nombre: '06 AUDIENCIAS JUNIO 2021 CONCILIACIÓN.pdf',
                url: '/assets/files/informes_defensa_judicial/PROGRAMACION AUDIENCIAS/04. 2021/06 AUDIENCIAS JUNIO 2021 CONCILIACIÓN.pdf',
              },
              {
                id: 7,
                tipo: 'pdf',
                nombre: '07 AUDIENCIAS JULIO 2021 CONCILIACIÓN.pdf',
                url: '/assets/files/informes_defensa_judicial/PROGRAMACION AUDIENCIAS/04. 2021/07 AUDIENCIAS JULIO 2021 CONCILIACIÓN.pdf',
              },
              {
                id: 8,
                tipo: 'pdf',
                nombre: '08 AUDIENCIAS AGOSTO 2021 CONCILIACIÓN.pdf',
                url: '/assets/files/informes_defensa_judicial/PROGRAMACION AUDIENCIAS/04. 2021/08 AUDIENCIAS AGOSTO 2021 CONCILIACIÓN.pdf',
              },
              {
                id: 9,
                tipo: 'pdf',
                nombre: '09 AUDIENCIAS SEPTIEMBRE 2021 CONCILIACIÓN.pdf',
                url: '/assets/files/informes_defensa_judicial/PROGRAMACION AUDIENCIAS/04. 2021/09 AUDIENCIAS SEPTIEMBRE 2021 CONCILIACIÓN.pdf',
              },
              {
                id: 10,
                tipo: 'pdf',
                nombre: '10 AUDIENCIAS OCTUBRE 2021 CONCILIACIÓN.pdf',
                url: '/assets/files/informes_defensa_judicial/PROGRAMACION AUDIENCIAS/04. 2021/10 AUDIENCIAS OCTUBRE 2021 CONCILIACIÓN.pdf',
              },
              {
                id: 11,
                tipo: 'excel',
                nombre: '11 AUDIENCIAS NOVIEMBRE 2021 CONCILIACIÓN.xls',
                url: '/assets/files/informes_defensa_judicial/PROGRAMACION AUDIENCIAS/04. 2021/11 AUDIENCIAS NOVIEMBRE 2021 CONCILIACIÓN.xls',
              },
            ],
          },
          {
            id: 6,
            nombre: '2020',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: '1. AUDIENCIAS ENERO 2020 CONCILIACIÓN.pdf',
                url: '/assets/files/informes_defensa_judicial/PROGRAMACION AUDIENCIAS/05. 2020/1. AUDIENCIAS ENERO 2020 CONCILIACIÓN.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre: '1. AUDIENCIAS ENERO A JUNIO TRAMITE.pdf',
                url: '/assets/files/informes_defensa_judicial/PROGRAMACION AUDIENCIAS/05. 2020/1. AUDIENCIAS ENERO A JUNIO TRAMITE.pdf',
              },
              {
                id: 3,
                tipo: 'pdf',
                nombre: '1. AUDIENCIAS ENERO A JUNIO TRÁMITE.pdf',
                url: '/assets/files/informes_defensa_judicial/PROGRAMACION AUDIENCIAS/05. 2020/1. AUDIENCIAS ENERO A JUNIO TRÁMITE.pdf',
              },
              {
                id: 4,
                tipo: 'excel',
                nombre: '1. AUDIENCIAS ENERO A JUNIO TRÁMITE.xls',
                url: '/assets/files/informes_defensa_judicial/PROGRAMACION AUDIENCIAS/05. 2020/1. AUDIENCIAS ENERO A JUNIO TRÁMITE.xls',
              },
              {
                id: 5,
                tipo: 'pdf',
                nombre: '10. AUDIENCIAS OCTUBRE 2020 CONCILIACIÓN.pdf',
                url: '/assets/files/informes_defensa_judicial/PROGRAMACION AUDIENCIAS/05. 2020/10. AUDIENCIAS OCTUBRE 2020 CONCILIACIÓN.pdf',
              },
              {
                id: 6,
                tipo: 'pdf',
                nombre: '11. AUDIENCIAS NOVIEMBRE 2020 CONCILIACIÓN.pdf',
                url: '/assets/files/informes_defensa_judicial/PROGRAMACION AUDIENCIAS/05. 2020/11. AUDIENCIAS NOVIEMBRE 2020 CONCILIACIÓN.pdf',
              },
              {
                id: 7,
                tipo: 'pdf',
                nombre: '12. AUDIENCIAS DICIEMBRE 2020 CONCILIACIÓN.pdf',
                url: '/assets/files/informes_defensa_judicial/PROGRAMACION AUDIENCIAS/05. 2020/12. AUDIENCIAS DICIEMBRE 2020 CONCILIACIÓN.pdf',
              },
              {
                id: 8,
                tipo: 'pdf',
                nombre: '2. AUDIENCIAS FEBRERO 2020 CONCILIACIÓN.pdf',
                url: '/assets/files/informes_defensa_judicial/PROGRAMACION AUDIENCIAS/05. 2020/2. AUDIENCIAS FEBRERO 2020 CONCILIACIÓN.pdf',
              },
              {
                id: 9,
                tipo: 'pdf',
                nombre: '3. AUDIENCIAS MARZO 2020 CONCILIACIÓN.pdf',
                url: '/assets/files/informes_defensa_judicial/PROGRAMACION AUDIENCIAS/05. 2020/3. AUDIENCIAS MARZO 2020 CONCILIACIÓN.pdf',
              },
              {
                id: 10,
                tipo: 'pdf',
                nombre: '4. AUDIENCIAS ABRIL 2020 CONCILIACIÓN.pdf',
                url: '/assets/files/informes_defensa_judicial/PROGRAMACION AUDIENCIAS/05. 2020/4. AUDIENCIAS ABRIL 2020 CONCILIACIÓN.pdf',
              },
              {
                id: 11,
                tipo: 'pdf',
                nombre: '5. AUDIENCIAS MAYO 2020 CONCILIACIÓN.pdf',
                url: '/assets/files/informes_defensa_judicial/PROGRAMACION AUDIENCIAS/05. 2020/5. AUDIENCIAS MAYO 2020 CONCILIACIÓN.pdf',
              },
              {
                id: 12,
                tipo: 'pdf',
                nombre: '6. AUDIENCIAS JUNIO 2020 CONCILIACIÓN.pdf',
                url: '/assets/files/informes_defensa_judicial/PROGRAMACION AUDIENCIAS/05. 2020/6. AUDIENCIAS JUNIO 2020 CONCILIACIÓN.pdf',
              },
              {
                id: 13,
                tipo: 'pdf',
                nombre: '7. AUDIENCIAS JULIO 2020 CONCILIACIÓN.pdf',
                url: '/assets/files/informes_defensa_judicial/PROGRAMACION AUDIENCIAS/05. 2020/7. AUDIENCIAS JULIO 2020 CONCILIACIÓN.pdf',
              },
              {
                id: 14,
                tipo: 'pdf',
                nombre: '8. AUDIENCIAS AGOSTO 2020 CONCILIACIÓN.pdf',
                url: '/assets/files/informes_defensa_judicial/PROGRAMACION AUDIENCIAS/05. 2020/8. AUDIENCIAS AGOSTO 2020 CONCILIACIÓN.pdf',
              },
              {
                id: 15,
                tipo: 'pdf',
                nombre: '9. AUDIENCIAS SEPTIEMBRE 2020 CONCILIACIÓN.pdf',
                url: '/assets/files/informes_defensa_judicial/PROGRAMACION AUDIENCIAS/05. 2020/9. AUDIENCIAS SEPTIEMBRE 2020 CONCILIACIÓN.pdf',
              },
            ],
          },
          {
            id: 7,
            nombre: '2019',
            files: [
              {
                id: 16,
                tipo: 'pdf',
                nombre: 'CONSOLIDADO DE AUDIENCIAS 2019.pdf',
                url: '/assets/files/informes_defensa_judicial/PROGRAMACION AUDIENCIAS/06. 2019/CONSOLIDADO DE AUDIENCIAS 2019.pdf',
              },
            ],
          },
          {
            id: 8,
            nombre: '2018',
            files: [
              {
                id: 17,
                tipo: 'excel',
                nombre: 'audiencias2018.xls',
                url: '/assets/files/informes_defensa_judicial/PROGRAMACION AUDIENCIAS/07. 2018/audiencias2018.xls',
              },
            ],
          },
          {
            id: 9,
            nombre: '2017',
            files: [
              {
                id: 17,
                tipo: 'excel',
                nombre: 'audiencias2017.xls',
                url: '/assets/files/informes_defensa_judicial/PROGRAMACION AUDIENCIAS/08. 2017/audiencias2017.xls',
              },
            ],
          },
          {
            id: 10,
            nombre: '2016',
            files: [
              {
                id: 17,
                tipo: 'excel',
                nombre: 'audiencias2016.xls',
                url: '/assets/files/informes_defensa_judicial/PROGRAMACION AUDIENCIAS/09. 2016/audiencias2016.xls',
              },
            ],
          },
          {
            id: 11,
            nombre: '2015',
            files: [
              {
                id: 18,
                tipo: 'excel',
                nombre: 'audiencias2015.xls',
                url: '/assets/files/informes_defensa_judicial/PROGRAMACION AUDIENCIAS/10. 2015/audiencias2015.xls',
              },
            ],
          },
          {
            id: 12,
            nombre: '2014',
            files: [
              {
                id: 19,
                tipo: 'excel',
                nombre: 'audiencias2014.xls',
                url: '/assets/files/informes_defensa_judicial/PROGRAMACION AUDIENCIAS/11. 2014/audiencias2014.xls',
              },
            ],
          },
        ],
      },
      {
        id: 4,
        nombre: 'RELACIÓN DE DEMANDAS',
        files: [
          {
            id: 1,
            tipo: 'excel',
            nombre: 'DEMANDAS FPS 2016.xls',
            url: '/assets/files/informes_defensa_judicial/RELACIÓN DE DEMANDAS/DEMANDAS FPS 2016.xls',
          },
          {
            id: 2,
            tipo: 'excel',
            nombre: 'DEMANDAS FPS 2017.xls',
            url: '/assets/files/informes_defensa_judicial/RELACIÓN DE DEMANDAS/DEMANDAS FPS 2017.xls',
          },
          {
            id: 3,
            tipo: 'excel',
            nombre: 'DEMANDAS FPS 2018.xls',
            url: '/assets/files/informes_defensa_judicial/RELACIÓN DE DEMANDAS/DEMANDAS FPS 2018.xls',
          },
          {
            id: 4,
            tipo: 'excel',
            nombre: 'DEMANDAS FPS 2019.xlsx',
            url: '/assets/files/informes_defensa_judicial/RELACIÓN DE DEMANDAS/DEMANDAS FPS 2019.xlsx',
          },
          {
            id: 5,
            tipo: 'pdf',
            nombre: 'INFORME TRIMESTRAL 001.pdf',
            url: '/assets/files/informes_defensa_judicial/RELACIÓN DE DEMANDAS/INFORME TRIMESTRAL 001.pdf',
          },
          {
            id: 6,
            tipo: 'pdf',
            nombre: 'INFORME TRIMESTRAL 002.pdf',
            url: '/assets/files/informes_defensa_judicial/RELACIÓN DE DEMANDAS/INFORME TRIMESTRAL 002.pdf',
          },
          {
            id: 7,
            tipo: 'pdf',
            nombre: 'INFORME TRIMESTRAL 003.pdf',
            url: '/assets/files/informes_defensa_judicial/RELACIÓN DE DEMANDAS/INFORME TRIMESTRAL 003.pdf',
          },
          {
            id: 8,
            tipo: 'pdf',
            nombre: 'INFORME TRIMESTRAL 004 .pdf',
            url: '/assets/files/informes_defensa_judicial/RELACIÓN DE DEMANDAS/INFORME TRIMESTRAL 004 .pdf',
          },
        ],
      },
    ];
  }
}
