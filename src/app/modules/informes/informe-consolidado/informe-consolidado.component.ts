import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { AcordionFiles } from '../../../interfaces/acordion';

@Component({
  selector: 'app-informe-consolidado',
  standalone: true,
  imports: [NgbAccordionModule, NgFor],
  templateUrl: './informe-consolidado.component.html',
  styleUrl: './informe-consolidado.component.css',
})
export class InformeConsolidadoComponent {
  items: AcordionFiles[] = [];
  constructor() {
    this.items = [
      {
        id: 1,
        nombre: '2024',
        files: [
          {
            id: 1,
            tipo: 'pdf',
            nombre: '01. CONSOLIDADO TRAMITES MES ENERO 2024.pdf',
            url: '/assets/files/consolidado_gestion_prestaciones/01. 2024/01. CONSOLIDADO TRAMITES MES ENERO 2024.pdf',
          },
          {
            id: 2,
            tipo: 'pdf',
            nombre: '02. CONSOLIDADO TRAMITES MES FEBRERO 2024',
            url: '/assets/files/consolidado_gestion_prestaciones/01. 2024/02. CONSOLIDADO TRAMITES MES FEBRERO 2024.pdf',
          },
          {
            id: 3,
            tipo: 'pdf',
            nombre: '03. CONSOLIDADO TRAMITES MES MARZO 2024',
            url: '/assets/files/consolidado_gestion_prestaciones/01. 2024/03. CONSOLIDADO TRAMITES MES MARZO 2024.pdf',
          },
          {
            id: 4,
            tipo: 'pdf',
            nombre: '04. CONSOLIDADO TRAMITES MES ABRIL 2024',
            url: '/assets/files/consolidado_gestion_prestaciones/01. 2024/04. CONSOLIDADO TRAMITES MES ABRIL 2024.pdf',
          },
          {
            id: 5,
            tipo: 'pdf',
            nombre: '05. CONSOLIDADO TRAMITES MES MAYO 2024',
            url: '/assets/files/consolidado_gestion_prestaciones/01. 2024/05. CONSOLIDADO TRAMITES MES MAYO 2024.pdf',
          },
          {
            id: 6,
            tipo: 'pdf',
            nombre: '06. CONSOLIDADO TRAMITES MES JUNIO 2024',
            url: '/assets/files/consolidado_gestion_prestaciones/01. 2024/06. CONSOLIDADO TRAMITES MES JUNIO 2024.pdf',
          },
          {
            id: 7,
            tipo: 'pdf',
            nombre: '07. CONSOLIDADO TRAMITES MES JULIO 2024',
            url: '/assets/files/consolidado_gestion_prestaciones/01. 2024/07. CONSOLIDADO TRAMITES MES JULIO 2024.pdf',
          },
          {
            id: 8,
            tipo: 'pdf',
            nombre: '08. CONSOLIDADO TRAMITES MES AGOSTO 2024',
            url: '/assets/files/consolidado_gestion_prestaciones/01. 2024/08. CONSOLIDADO TRAMITES MES AGOSTO 2024.pdf',
          },
          {
            id: 9,
            tipo: 'pdf',
            nombre: '09. CONSOLIDADO SEPTIEMBRE 2024',
            url: '/assets/files/consolidado_gestion_prestaciones/01. 2024/09. CONSOLIDADO SEPTIEMBRE 2024.pdf',
          },
          {
            id: 10,
            tipo: 'pdf',
            nombre: '10. CONSOLIDADO OCTUBRE 2024',
            url: '/assets/files/consolidado_gestion_prestaciones/01. 2024/10. CONSOLIDADO OCTUBRE 2024.pdf',
          },
          {
            id: 11,
            tipo: 'pdf',
            nombre: '11. CONSOLIDADO NOVIEMBRE 2024',
            url: '/assets/files/consolidado_gestion_prestaciones/01. 2024/11.CONSOLIDADO NOVIEMBRE 2024.pdf',
          },
          {
            id: 12,
            tipo: 'pdf',
            nombre: '12. CONSOLIDADO DICIEMBRE 2024',
            url: '/assets/files/consolidado_gestion_prestaciones/01. 2024/12. CONSOLIDADO DICIEMBRE 2024.pdf',
          },
        ],
      },
      {
        id: 1,
        nombre: '2023',
        files: [
          {
            id: 1,
            tipo: 'pdf',
            nombre: '01 CONSOLIDADO TRAMITES MES DE ENERO DE 2023.pdf',
            url: '/assets/files/consolidado_gestion_prestaciones/02. 2023/01 CONSOLIDADO TRAMITES MES DE ENERO DE 2023.pdf',
          },
          {
            id: 2,
            tipo: 'pdf',
            nombre: '02 CONSOLIDADO TRAMITES MES DE FEBRERO DE 2023.pdf',
            url: '/assets/files/consolidado_gestion_prestaciones/02. 2023/02 CONSOLIDADO TRAMITES MES DE FEBRERO DE 2023.pdf',
          },
          {
            id: 3,
            tipo: 'pdf',
            nombre: '03 CONSOLIDADO TRAMITES MES MARZO DE 2023.pdf',
            url: '/assets/files/consolidado_gestion_prestaciones/02. 2023/03 CONSOLIDADO TRAMITES MES MARZO DE 2023.pdf',
          },
          {
            id: 4,
            tipo: 'pdf',
            nombre: '04 CONSOLIDADO TRAMITES MES ABRIL DE 2023.pdf',
            url: '/assets/files/consolidado_gestion_prestaciones/02. 2023/04 CONSOLIDADO TRAMITES MES ABRIL DE 2023.pdf',
          },
          {
            id: 5,
            tipo: 'pdf',
            nombre: '05 CONSOLIDADO TRAMITES MES MAYO 2023.pdf',
            url: '/assets/files/consolidado_gestion_prestaciones/02. 2023/05 CONSOLIDADO TRAMITES MES MAYO 2023.pdf',
          },
          {
            id: 6,
            tipo: 'pdf',
            nombre: '06 CONSOLIDADO TRAMITES MES JUNIO 2023.pdf',
            url: '/assets/files/consolidado_gestion_prestaciones/02. 2023/06 CONSOLIDADO TRAMITES MES JUNIO 2023.pdf',
          },
          {
            id: 7,
            tipo: 'pdf',
            nombre: '07 CONSOLIDADO TRAMITES MES JULIO 2023.pdf',
            url: '/assets/files/consolidado_gestion_prestaciones/02. 2023/07 CONSOLIDADO TRAMITES MES JULIO 2023.pdf',
          },
          {
            id: 8,
            tipo: 'pdf',
            nombre: '08 CONSOLIDADO TRAMITES MES AGOSTO 2023.pdf',
            url: '/assets/files/consolidado_gestion_prestaciones/02. 2023/08 CONSOLIDADO TRAMITES MES AGOSTO 2023.pdf',
          },
          {
            id: 9,
            tipo: 'pdf',
            nombre: '09 CONSOLIDADO TRAMITES MES SEPTIEMBRE 2023.pdf',
            url: '/assets/files/consolidado_gestion_prestaciones/02. 2023/09 CONSOLIDADO TRAMITES MES SEPTIEMBRE 2023.pdf',
          },
          {
            id: 10,
            tipo: 'pdf',
            nombre: '10 CONSOLIDADO TRAMITES MES OCTUBRE 2023.pdf',
            url: '/assets/files/consolidado_gestion_prestaciones/02. 2023/10 CONSOLIDADO TRAMITES MES OCTUBRE 2023.pdf',
          },
          {
            id: 11,
            tipo: 'pdf',
            nombre: '11 CONSOLIDADO TRAMITES MES NOVIEMBRE 2023.pdf',
            url: '/assets/files/consolidado_gestion_prestaciones/02. 2023/11 CONSOLIDADO TRAMITES MES NOVIEMBRE 2023.pdf',
          },
          {
            id: 12,
            tipo: 'pdf',
            nombre: '12. CONSOLIDADO TRAMITES MES DICIEMBRE 2023.pdf',
            url: '/assets/files/consolidado_gestion_prestaciones/02. 2023/12. CONSOLIDADO TRAMITES MES DICIEMBRE 2023.pdf',
          },
        ],
      },
      {
        id: 2,
        nombre: '2022',
        files: [
          {
            id: 1,
            tipo: 'pdf',
            nombre: '01 CONSOLIDADO TRAMITES MES DE ENERO DE 2022.pdf',
            url: '/assets/files/consolidado_gestion_prestaciones/03. 2022/01 CONSOLIDADO TRAMITES MES DE ENERO DE 2022.pdf',
          },
          {
            id: 2,
            tipo: 'pdf',
            nombre: '02 CONSOLIDADO TRAMITES MES DE FEBRERO DE 2022.pdf',
            url: '/assets/files/consolidado_gestion_prestaciones/03. 2022/02 CONSOLIDADO TRAMITES MES DE FEBRERO DE 2022.pdf',
          },
          {
            id: 3,
            tipo: 'pdf',
            nombre: '03 CONSOLIDADO TRAMITES MES DE MARZO DE 2022.pdf',
            url: '/assets/files/consolidado_gestion_prestaciones/03. 2022/03 CONSOLIDADO TRAMITES MES DE MARZO DE 2022.pdf',
          },
          {
            id: 4,
            tipo: 'pdf',
            nombre: '04 CONSOLIDADO TRAMITES MES DE ABRIL DE 2022.pdf',
            url: '/assets/files/consolidado_gestion_prestaciones/03. 2022/04 CONSOLIDADO TRAMITES MES DE ABRIL DE 2022.pdf',
          },
          {
            id: 5,
            tipo: 'pdf',
            nombre: '05 CONSOLIDADO TRAMITES MES DE MAYO DE 2022.pdf',
            url: '/assets/files/consolidado_gestion_prestaciones/03. 2022/05 CONSOLIDADO TRAMITES MES DE MAYO DE 2022.pdf',
          },
          {
            id: 6,
            tipo: 'pdf',
            nombre: '06 CONSOLIDADO TRAMITES MES DE JUNIO DE 2022.pdf',
            url: '/assets/files/consolidado_gestion_prestaciones/03. 2022/06 CONSOLIDADO TRAMITES MES DE JUNIO DE 2022.pdf',
          },
          {
            id: 7,
            tipo: 'pdf',
            nombre: '07 CONSOLIDADO TRAMITES MES DE JULIO DE 2022.pdf',
            url: '/assets/files/consolidado_gestion_prestaciones/03. 2022/07 CONSOLIDADO TRAMITES MES DE JULIO DE 2022.pdf',
          },
          {
            id: 8,
            tipo: 'pdf',
            nombre: '08 CONSOLIDADO TRAMITES MES DE AGOSTO DE 2022.pdf',
            url: '/assets/files/consolidado_gestion_prestaciones/03. 2022/08 CONSOLIDADO TRAMITES MES DE AGOSTO DE 2022.pdf',
          },
          {
            id: 9,
            tipo: 'pdf',
            nombre: '09 CONSOLIDADO TRAMITES MES DE SEPTIEMBRE DE 2022.pdf',
            url: '/assets/files/consolidado_gestion_prestaciones/03. 2022/09 CONSOLIDADO TRAMITES MES DE SEPTIEMBRE DE 2022.pdf',
          },
          {
            id: 10,
            tipo: 'pdf',
            nombre: '10 CONSOLIDADO TRAMITES MES DE OCTUBRE DE 2022.pdf',
            url: '/assets/files/consolidado_gestion_prestaciones/03. 2022/10 CONSOLIDADO TRAMITES MES DE OCTUBRE DE 2022.pdf',
          },
          {
            id: 11,
            tipo: 'pdf',
            nombre: '11 CONSOLIDADO TRAMITES MES DE NOVIEMBRE DE 2022.pdf',
            url: '/assets/files/consolidado_gestion_prestaciones/03. 2022/11 CONSOLIDADO TRAMITES MES DE NOVIEMBRE DE 2022.pdf',
          },
          {
            id: 12,
            tipo: 'pdf',
            nombre: '12 CONSOLIDADO TRAMITES MES DE DICIEMBRE DE 2022.pdf',
            url: '/assets/files/consolidado_gestion_prestaciones/03. 2022/12 CONSOLIDADO TRAMITES MES DE DICIEMBRE DE 2022.pdf',
          },
        ],
      },
      {
        id: 1,
        nombre: '2021',
        files: [
          {
            id: 1,
            tipo: 'pdf',
            nombre: '01 CONSOLIDADO TRAMITES MES DE ENERO 2021.pdf',
            url: '/assets/files/consolidado_gestion_prestaciones/04. 2021/01 CONSOLIDADO TRAMITES MES DE ENERO 2021.pdf',
          },
          {
            id: 2,
            tipo: 'pdf',
            nombre: '02 CONSOLIDADO TRAMITES MES DE FEBRERO 2021.pdf',
            url: '/assets/files/consolidado_gestion_prestaciones/04. 2021/02 CONSOLIDADO TRAMITES MES DE FEBRERO 2021.pdf',
          },
          {
            id: 3,
            tipo: 'pdf',
            nombre: '03 CONSOLIDADO TRAMITES MES DE MARZO 2021.pdf',
            url: '/assets/files/consolidado_gestion_prestaciones/04. 2021/03 CONSOLIDADO TRAMITES MES DE MARZO 2021.pdf',
          },
          {
            id: 4,
            tipo: 'pdf',
            nombre: '04 CONSOLIDADO TRAMITES MES DE  ABRIL 2021.pdf',
            url: '/assets/files/consolidado_gestion_prestaciones/04. 2021/04 CONSOLIDADO TRAMITES MES DE  ABRIL 2021.pdf',
          },
          {
            id: 5,
            tipo: 'pdf',
            nombre: '05 CONSOLIDADO TRAMITES MES DE MAYO 2021.pdf',
            url: '/assets/files/consolidado_gestion_prestaciones/04. 2021/05 CONSOLIDADO TRAMITES MES DE MAYO 2021.pdf',
          },
          {
            id: 6,
            tipo: 'pdf',
            nombre: '06 CONSOLIDADO TRAMITES MES DE JUNIO 2021.pdf',
            url: '/assets/files/consolidado_gestion_prestaciones/04. 2021/06 CONSOLIDADO TRAMITES MES DE JUNIO 2021.pdf',
          },
          {
            id: 7,
            tipo: 'pdf',
            nombre: '07 CONSOLIDADO TRAMITES MES DE JULIO 2021.pdf',
            url: '/assets/files/consolidado_gestion_prestaciones/04. 2021/07 CONSOLIDADO TRAMITES MES DE JULIO 2021.pdf',
          },
          {
            id: 8,
            tipo: 'pdf',
            nombre: '08 CONSOLIDADO TRAMITES MES DE AGOSTO 2021.pdf',
            url: '/assets/files/consolidado_gestion_prestaciones/04. 2021/08 CONSOLIDADO TRAMITES MES DE AGOSTO 2021.pdf',
          },
          {
            id: 9,
            tipo: 'pdf',
            nombre: '09 CONSOLIDADO TRAMITES MES DE SEPTIEMBRE 2021.pdf',
            url: '/assets/files/consolidado_gestion_prestaciones/04. 2021/09 CONSOLIDADO TRAMITES MES DE SEPTIEMBRE 2021.pdf',
          },
          {
            id: 10,
            tipo: 'pdf',
            nombre: '10 CONSOLIDADO TRAMITES MES DE OCTUBRE 2021.pdf',
            url: '/assets/files/consolidado_gestion_prestaciones/04. 2021/10 CONSOLIDADO TRAMITES MES DE OCTUBRE 2021.pdf',
          },
          {
            id: 11,
            tipo: 'pdf',
            nombre: '11 CONSOLIDADO TRAMITES MES DE NOVIEMBRE 2021.pdf',
            url: '/assets/files/consolidado_gestion_prestaciones/04. 2021/11 CONSOLIDADO TRAMITES MES DE NOVIEMBRE 2021.pdf',
          },
          {
            id: 12,
            tipo: 'pdf',
            nombre: '12 CONSOLIDADO TRAMITES MES DE DICIEMBRE 2021.pdf',
            url: '/assets/files/consolidado_gestion_prestaciones/04. 2021/12 CONSOLIDADO TRAMITES MES DE DICIEMBRE 2021.pdf',
          },
        ],
      },
      {
        id: 5,
        nombre: '2020',
        files: [
          {
            id: 1,
            tipo: 'pdf',
            nombre:
              '01 Información Consolidado Prestaciones Económica Enero 2020.pdf',
            url: '/assets/files/consolidado_gestion_prestaciones/05. 2020/01 Información Consolidado Prestaciones Económica Enero 2020.pdf',
          },
          {
            id: 2,
            tipo: 'pdf',
            nombre:
              '02 Información Consolidado Prestaciones Económica Febrero 2020.pdf',
            url: '/assets/files/consolidado_gestion_prestaciones/05. 2020/02 Información Consolidado Prestaciones Económica Febrero 2020.pdf',
          },
          {
            id: 3,
            tipo: 'pdf',
            nombre:
              '03 Información Consolidado Prestaciones Económica Marzo 2020.pdf',
            url: '/assets/files/consolidado_gestion_prestaciones/05. 2020/03 Información Consolidado Prestaciones Económica Marzo 2020.pdf',
          },
          {
            id: 4,
            tipo: 'pdf',
            nombre:
              '04 Información Consolidado Prestaciones Económica Abril 2020.pdf',
            url: '/assets/files/consolidado_gestion_prestaciones/05. 2020/04 Información Consolidado Prestaciones Económica Abril 2020.pdf',
          },
          {
            id: 5,
            tipo: 'pdf',
            nombre:
              '05 Información Consolidado Prestaciones Económica Mayo 2020.pdf',
            url: '/assets/files/consolidado_gestion_prestaciones/05. 2020/05 Información Consolidado Prestaciones Económica Mayo 2020.pdf',
          },
          {
            id: 6,
            tipo: 'pdf',
            nombre:
              '06 Información Consolidado Prestaciones Económica Junio 2020.pdf',
            url: '/assets/files/consolidado_gestion_prestaciones/05. 2020/06 Información Consolidado Prestaciones Económica Junio 2020.pdf',
          },
          {
            id: 7,
            tipo: 'pdf',
            nombre:
              '07 Información Consolidado Prestaciones Económica Julio 2020.pdf',
            url: '/assets/files/consolidado_gestion_prestaciones/05. 2020/07 Información Consolidado Prestaciones Económica Julio 2020.pdf',
          },
          {
            id: 8,
            tipo: 'pdf',
            nombre:
              '08 Información Consolidado Prestaciones Económica Agosto 2020.pdf',
            url: '/assets/files/consolidado_gestion_prestaciones/05. 2020/08 Información Consolidado Prestaciones Económica Agosto 2020.pdf',
          },
          {
            id: 9,
            tipo: 'pdf',
            nombre:
              '09 Información Consolidado Prestaciones Económica Septiembre 2020.pdf',
            url: '/assets/files/consolidado_gestion_prestaciones/05. 2020/09 Información Consolidado Prestaciones Económica Septiembre 2020.pdf',
          },
          {
            id: 10,
            tipo: 'pdf',
            nombre:
              '10 Información Consolidado Prestaciones Económica Octubre 2020.pdf',
            url: '/assets/files/consolidado_gestion_prestaciones/05. 2020/10 Información Consolidado Prestaciones Económica Octubre 2020.pdf',
          },
          {
            id: 11,
            tipo: 'pdf',
            nombre:
              '11 Información Consolidado Prestaciones Económica Noviembre 2020.pdf',
            url: '/assets/files/consolidado_gestion_prestaciones/05. 2020/11 Información Consolidado Prestaciones Económica Noviembre 2020.pdf',
          },
          {
            id: 12,
            tipo: 'pdf',
            nombre:
              '12 Información Consolidado Prestaciones Económica Diciembre 2020.pdf',
            url: '/assets/files/consolidado_gestion_prestaciones/05. 2020/12 Información Consolidado Prestaciones Económica Diciembre 2020.pdf',
          },
        ],
      },
      {
        id: 6,
        nombre: '2019',
        files: [
          {
            id: 1,
            tipo: 'pdf',
            nombre:
              '01 Información Consolidado Prestaciones Económica Enero 2019.pdf',
            url: '/assets/files/consolidado_gestion_prestaciones/06. 2019/01 Información Consolidado Prestaciones Económica Enero 2019.pdf',
          },
          {
            id: 2,
            tipo: 'pdf',
            nombre:
              '02 Información Consolidado Prestaciones Económica Febrero 2019.pdf',
            url: '/assets/files/consolidado_gestion_prestaciones/06. 2019/02 Información Consolidado Prestaciones Económica Febrero 2019.pdf',
          },
          {
            id: 3,
            tipo: 'pdf',
            nombre:
              '03 Información Consolidado Prestaciones Económica Marzoo 2019.pdf',
            url: '/assets/files/consolidado_gestion_prestaciones/06. 2019/03 Información Consolidado Prestaciones Económica Marzoo 2019.pdf',
          },
          {
            id: 4,
            tipo: 'pdf',
            nombre:
              '04 Información Consolidado Prestaciones Económica Abril 2019.pdf',
            url: '/assets/files/consolidado_gestion_prestaciones/06. 2019/04 Información Consolidado Prestaciones Económica Abril 2019.pdf',
          },
          {
            id: 5,
            tipo: 'pdf',
            nombre:
              '05 Información Consolidado Prestaciones Económica Mayo 2019.pdf',
            url: '/assets/files/consolidado_gestion_prestaciones/06. 2019/05 Información Consolidado Prestaciones Económica Mayo 2019.pdf',
          },
          {
            id: 6,
            tipo: 'pdf',
            nombre:
              '06 Información Consolidado Prestaciones Económica Junio 2019.pdf',
            url: '/assets/files/consolidado_gestion_prestaciones/06. 2019/06 Información Consolidado Prestaciones Económica Junio 2019.pdf',
          },
          {
            id: 7,
            tipo: 'pdf',
            nombre:
              '07 Información Consolidado Prestaciones Económica Julio 2019.pdf',
            url: '/assets/files/consolidado_gestion_prestaciones/06. 2019/07 Información Consolidado Prestaciones Económica Julio 2019.pdf',
          },
          {
            id: 8,
            tipo: 'pdf',
            nombre:
              '08 Información Consolidado Prestaciones Económica Agosto 2019.pdf',
            url: '/assets/files/consolidado_gestion_prestaciones/06. 2019/08 Información Consolidado Prestaciones Económica Agosto 2019.pdf',
          },
          {
            id: 9,
            tipo: 'pdf',
            nombre:
              '09 Información Consolidado Prestaciones Económica Septiembre 2019.pdf',
            url: '/assets/files/consolidado_gestion_prestaciones/06. 2019/09 Información Consolidado Prestaciones Económica Septiembre 2019.pdf',
          },
          {
            id: 10,
            tipo: 'pdf',
            nombre:
              '10 Información Consolidado Prestaciones Económica Octubre 2019.pdf',
            url: '/assets/files/consolidado_gestion_prestaciones/06. 2019/10 Información Consolidado Prestaciones Económica Octubre 2019.pdf',
          },
          {
            id: 11,
            tipo: 'pdf',
            nombre:
              '11 Información Consolidado Prestaciones Económica Noviembre 2019.pdf',
            url: '/assets/files/consolidado_gestion_prestaciones/06. 2019/11 Información Consolidado Prestaciones Económica Noviembre 2019.pdf',
          },
          {
            id: 12,
            tipo: 'pdf',
            nombre:
              '12  Información Consolidado Prestaciones Económica Diciembre 2019.pdf',
            url: '/assets/files/consolidado_gestion_prestaciones/06. 2019/12  Información Consolidado Prestaciones Económica Diciembre 2019.pdf',
          },
        ],
      },
      {
        id: 7,
        nombre: '2018',
        files: [
          {
            id: 1,
            tipo: 'pdf',
            nombre:
              '01 Información Consolidado Prestaciones Económica Enero 2018.pdf',
            url: '/assets/files/consolidado_gestion_prestaciones/07. 2018/01 Información Consolidado Prestaciones Económica Enero 2018.pdf',
          },
          {
            id: 2,
            tipo: 'pdf',
            nombre:
              '02 Información Consolidado Prestaciones Económica Febrero 2018.pdf',
            url: '/assets/files/consolidado_gestion_prestaciones/07. 2018/02 Información Consolidado Prestaciones Económica Febrero 2018.pdf',
          },
          {
            id: 3,
            tipo: 'pdf',
            nombre:
              '03 Información Consolidado Prestaciones Económica Marzo 2018.pdf',
            url: '/assets/files/consolidado_gestion_prestaciones/07. 2018/03 Información Consolidado Prestaciones Económica Marzo 2018.pdf',
          },
          {
            id: 4,
            tipo: 'pdf',
            nombre:
              '04 Información Consolidado Prestaciones Económica Abril 2018.pdf',
            url: '/assets/files/consolidado_gestion_prestaciones/07. 2018/04 Información Consolidado Prestaciones Económica Abril 2018.pdf',
          },
          {
            id: 5,
            tipo: 'pdf',
            nombre:
              '05 Información Consolidado Prestaciones Económica Mayo 2018.pdf',
            url: '/assets/files/consolidado_gestion_prestaciones/07. 2018/05 Información Consolidado Prestaciones Económica Mayo 2018.pdf',
          },
          {
            id: 6,
            tipo: 'pdf',
            nombre:
              '06 Información Consolidado Prestaciones Económica Junio 2018.pdf',
            url: '/assets/files/consolidado_gestion_prestaciones/07. 2018/06 Información Consolidado Prestaciones Económica Junio 2018.pdf',
          },
          {
            id: 7,
            tipo: 'pdf',
            nombre:
              '07 Información Consolidado Prestaciones Económica Julio 2018.pdf',
            url: '/assets/files/consolidado_gestion_prestaciones/07. 2018/07 Información Consolidado Prestaciones Económica Julio 2018.pdf',
          },
          {
            id: 8,
            tipo: 'pdf',
            nombre:
              '08 Información Consolidado Prestaciones Económica Agosto 2018.pdf',
            url: '/assets/files/consolidado_gestion_prestaciones/07. 2018/08 Información Consolidado Prestaciones Económica Agosto 2018.pdf',
          },
          {
            id: 9,
            tipo: 'pdf',
            nombre:
              '09 Información Consolidado Prestaciones Económica Septiembre 2018.pdf',
            url: '/assets/files/consolidado_gestion_prestaciones/07. 2018/09 Información Consolidado Prestaciones Económica Septiembre 2018.pdf',
          },
          {
            id: 10,
            tipo: 'pdf',
            nombre:
              '10 Información Consolidado Prestaciones Económica Octubre 2018.pdf',
            url: '/assets/files/consolidado_gestion_prestaciones/07. 2018/10 Información Consolidado Prestaciones Económica Octubre 2018.pdf',
          },
          {
            id: 11,
            tipo: 'pdf',
            nombre:
              '11 Información Consolidado Prestaciones Económica Noviembre 2018.pdf',
            url: '/assets/files/consolidado_gestion_prestaciones/07. 2018/11 Información Consolidado Prestaciones Económica Noviembre 2018.pdf',
          },
          {
            id: 12,
            tipo: 'pdf',
            nombre:
              '12 Información Consolidado Prestaciones Económica Diciembre 2018.pdf',
            url: '/assets/files/consolidado_gestion_prestaciones/07. 2018/12 Información Consolidado Prestaciones Económica Diciembre 2018.pdf',
          },
        ],
      },
      {
        id: 1,
        nombre: '2017',
        files: [
          {
            id: 1,
            tipo: 'pdf',
            nombre:
              '01 Información Consolidado Prestaciones Económica Enero 2017.pdf',
            url: '/assets/files/consolidado_gestion_prestaciones/08. 2017/01 Información Consolidado Prestaciones Económica Enero 2017.pdf',
          },
          {
            id: 2,
            tipo: 'pdf',
            nombre:
              '02 Información Consolidado Prestaciones Económica Febrero 2017.pdf',
            url: '/assets/files/consolidado_gestion_prestaciones/08. 2017/02 Información Consolidado Prestaciones Económica Febrero 2017.pdf',
          },
          {
            id: 3,
            tipo: 'pdf',
            nombre:
              '03 Información Consolidado Prestaciones Económica Marzo 2017.pdf',
            url: '/assets/files/consolidado_gestion_prestaciones/08. 2017/03 Información Consolidado Prestaciones Económica Marzo 2017.pdf',
          },
          {
            id: 4,
            tipo: 'pdf',
            nombre:
              '04 Información Consolidado Prestaciones Económica Abril 2017.pdf',
            url: '/assets/files/consolidado_gestion_prestaciones/08. 2017/04 Información Consolidado Prestaciones Económica Abril 2017.pdf',
          },
          {
            id: 5,
            tipo: 'pdf',
            nombre:
              '05 Información Consolidado Prestaciones Económica Mayo 2017.pdf',
            url: '/assets/files/consolidado_gestion_prestaciones/08. 2017/05 Información Consolidado Prestaciones Económica Mayo 2017.pdf',
          },
          {
            id: 6,
            tipo: 'pdf',
            nombre:
              '06 Información Consolidado Prestaciones Económica Junio 2017.pdf',
            url: '/assets/files/consolidado_gestion_prestaciones/08. 2017/06 Información Consolidado Prestaciones Económica Junio 2017.pdf',
          },
          {
            id: 7,
            tipo: 'pdf',
            nombre:
              '07 Información Consolidado Prestaciones Económica Julio 2017.pdf',
            url: '/assets/files/consolidado_gestion_prestaciones/08. 2017/07 Información Consolidado Prestaciones Económica Julio 2017.pdf',
          },
          {
            id: 8,
            tipo: 'pdf',
            nombre:
              '08 Información Consolidado Prestaciones Económica Agosto 2017.pdf',
            url: '/assets/files/consolidado_gestion_prestaciones/08. 2017/08 Información Consolidado Prestaciones Económica Agosto 2017.pdf',
          },
          {
            id: 9,
            tipo: 'pdf',
            nombre:
              '09 Información Consolidado Prestaciones Económica Septiembre 2017.pdf',
            url: '/assets/files/consolidado_gestion_prestaciones/08. 2017/09 Información Consolidado Prestaciones Económica Septiembre 2017.pdf',
          },
          {
            id: 10,
            tipo: 'pdf',
            nombre:
              '10 Información Consolidado Prestaciones Económica Octubre 2017.pdf',
            url: '/assets/files/consolidado_gestion_prestaciones/08. 2017/10 Información Consolidado Prestaciones Económica Octubre 2017.pdf',
          },
          {
            id: 11,
            tipo: 'pdf',
            nombre:
              '11 Información Consolidado Prestaciones Económica Noviembre 2017.pdf',
            url: '/assets/files/consolidado_gestion_prestaciones/08. 2017/11 Información Consolidado Prestaciones Económica Noviembre 2017.pdf',
          },
          {
            id: 12,
            tipo: 'pdf',
            nombre:
              '12 Información Consolidado Prestaciones Económica Diciembre 2017.pdf',
            url: '/assets/files/consolidado_gestion_prestaciones/08. 2017/12 Información Consolidado Prestaciones Económica Diciembre 2017.pdf',
          },
        ],
      },
      {
        id: 2,
        nombre: '2016',
        files: [
          {
            id: 1,
            tipo: 'pdf',
            nombre:
              '01 Información Consolidado Prestaciones Económica Enero 2016.pdf',
            url: '/assets/files/consolidado_gestion_prestaciones/09. 2016/01 Información Consolidado Prestaciones Económica Enero 2016.pdf',
          },
          {
            id: 2,
            tipo: 'pdf',
            nombre:
              '02 Información Consolidado Prestaciones Económica Febrero 2016.pdf',
            url: '/assets/files/consolidado_gestion_prestaciones/09. 2016/02 Información Consolidado Prestaciones Económica Febrero 2016.pdf',
          },
          {
            id: 3,
            tipo: 'pdf',
            nombre:
              '03 Información Consolidado Prestaciones Económicas Marzo 2016.pdf',
            url: '/assets/files/consolidado_gestion_prestaciones/09. 2016/03 Información Consolidado Prestaciones Económicas Marzo 2016.pdf',
          },
          {
            id: 4,
            tipo: 'pdf',
            nombre:
              '04 Información Consolidado Prestaciones Económicas Abril 2016.pdf',
            url: '/assets/files/consolidado_gestion_prestaciones/09. 2016/04 Información Consolidado Prestaciones Económicas Abril 2016.pdf',
          },
          {
            id: 5,
            tipo: 'pdf',
            nombre:
              '05 Información Consolidado Prestaciones Económicas Mayo 2016.pdf',
            url: '/assets/files/consolidado_gestion_prestaciones/09. 2016/05 Información Consolidado Prestaciones Económicas Mayo 2016.pdf',
          },
          {
            id: 6,
            tipo: 'pdf',
            nombre:
              '06 Información Consolidado Prestaciones Económicas Junio 2016.pdf',
            url: '/assets/files/consolidado_gestion_prestaciones/09. 2016/06 Información Consolidado Prestaciones Económicas Junio 2016.pdf',
          },
          {
            id: 7,
            tipo: 'pdf',
            nombre:
              '07 Información Consolidado Prestaciones Económicas Julio 2016.pdf',
            url: '/assets/files/consolidado_gestion_prestaciones/09. 2016/07 Información Consolidado Prestaciones Económicas Julio 2016.pdf',
          },
          {
            id: 8,
            tipo: 'pdf',
            nombre:
              '08 Información Consolidado Prestaciones Económicas Agosto 2016.pdf',
            url: '/assets/files/consolidado_gestion_prestaciones/09. 2016/08 Información Consolidado Prestaciones Económicas Agosto 2016.pdf',
          },
          {
            id: 9,
            tipo: 'pdf',
            nombre:
              '09 Información Consolidado Prestaciones Económicas Septiembre 2013.pdf',
            url: '/assets/files/consolidado_gestion_prestaciones/09. 2016/09 Información Consolidado Prestaciones Económicas Septiembre 2013.pdf',
          },
          {
            id: 10,
            tipo: 'pdf',
            nombre:
              '10 Información Consolidado Prestaciones Económicas Octubre 2016.pdf',
            url: '/assets/files/consolidado_gestion_prestaciones/09. 2016/10 Información Consolidado Prestaciones Económicas Octubre 2016.pdf',
          },
          {
            id: 11,
            tipo: 'pdf',
            nombre:
              '11 Información Consolidado Prestaciones Económicas Noviembre 2016.pdf',
            url: '/assets/files/consolidado_gestion_prestaciones/09. 2016/11 Información Consolidado Prestaciones Económicas Noviembre 2016.pdf',
          },
          {
            id: 12,
            tipo: 'pdf',
            nombre:
              '12 Información Consolidado Prestaciones Económicas Diciembre 2016.pdf',
            url: '/assets/files/consolidado_gestion_prestaciones/09. 2016/12 Información Consolidado Prestaciones Económicas Diciembre 2016.pdf',
          },
        ],
      },
      {
        id: 3,
        nombre: '2015',
        files: [
          {
            id: 1,
            tipo: 'pdf',
            nombre:
              '01 Información Consolidado Prestaciones Económicas 2015.pdf',
            url: '/assets/files/consolidado_gestion_prestaciones/10. 2015/01 Información Consolidado Prestaciones Económicas 2015.pdf',
          },
        ],
      },
    ];
  }
}
