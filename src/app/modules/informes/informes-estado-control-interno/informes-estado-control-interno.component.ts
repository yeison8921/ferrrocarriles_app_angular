import { Component } from '@angular/core';
import { AcordionAnidado } from '../../../interfaces/acordion';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-informes-estado-control-interno',
  standalone: true,
  imports: [NgbAccordionModule, NgFor, NgIf],
  templateUrl: './informes-estado-control-interno.component.html',
  styleUrl: './informes-estado-control-interno.component.css',
})
export class InformesEstadoControlInternoComponent {
  regex = /^[0-9]*$/;
  items: AcordionAnidado[] = [];
  constructor() {
    this.items = [
      {
        id: 1,
        nombre: 'Certificaciones Bureau Veritas',
        files: [
          {
            id: 1,
            tipo: 'pdf',
            nombre: 'CERTIFICACIONISO9001.pdf',
            url: '/assets/files/estado_sistema_oci/Certificaciones Bureau Veritas/CERTIFICACIONISO9001.pdf',
          },
          {
            id: 2,
            tipo: 'pdf',
            nombre: 'CERTIFICACIONNTCGP1000.pdf',
            url: '/assets/files/estado_sistema_oci/Certificaciones Bureau Veritas/CERTIFICACIONNTCGP1000.pdf',
          },
        ],
      },
      {
        id: 2,
        nombre: 'Derechos de autor de software',
        acordion: [

          {
            id: 3,
            nombre: '2024',
            files: [
              {
                id: 4,
                tipo: 'pdf',
                nombre:
                  'INFORME DE DERECHOS DE AUTOR DE SOFTWARE  VIGENCIA 2024',
                url: '/assets/files/estado_sistema_oci/Derechos de autor de software/2024/INFORME DE DERECHOS DE AUTOR DE SOFTWARE  VIGENCIA 2024.pdf',
              },
            ],
          },
          {
            id: 3,
            nombre: '2023',
            files: [
              {
                id: 4,
                tipo: 'pdf',
                nombre:
                  'INFORME DE DERECHOS DE AUTOR DE SOFTWARE VIGENCIA 2023 (1) (1).pdf',
                url: '/assets/files/estado_sistema_oci/Derechos de autor de software/2023/INFORME DE DERECHOS DE AUTOR DE SOFTWARE  VIGENCIA 2023 (1) (1).pdf',
              },
            ],
          },
        ],
      },
      {
        id: 3,
        nombre: 'Evaluación Rendición de Cuentas',
        acordion: [
          {
            id: 5,
            nombre: '2017',
            files: [
              {
                id: 6,
                tipo: 'pdf',
                nombre: 'EvaluacionRendicionCuentas2017.pdf',
                url: '/assets/files/estado_sistema_oci/Evaluación Rendición de Cuentas/01. 2017/EvaluacionRendicionCuentas2017.pdf',
              },
            ],
          },
          {
            id: 8,
            nombre: '2014',
            files: [
              {
                id: 9,
                tipo: 'pdf',
                nombre: 'EvaluacionRendicionCuentas2014.pdf',
                url: '/assets/files/estado_sistema_oci/Evaluación Rendición de Cuentas/03. 2014/EvaluacionRendicionCuentas2014.pdf',
              },
            ],
          },
        ],
      },
      {
        id: 4,
        nombre: 'Informe Certificación de Sistemas de Gestión Bureau Beritas',
        acordion: [
          {
            id: 10,
            nombre: '2016',
            files: [
              {
                id: 11,
                tipo: 'pdf',
                nombre: 'InformeBVC2016.pdf',
                url: '/assets/files/estado_sistema_oci/Informe Certificación de Sistemas de Gestión Bureau Beritas/01. 2016/InformeBVC2016.pdf',
              },
            ],
          },
          {
            id: 12,
            nombre: '2015',
            files: [
              {
                id: 13,
                tipo: 'pdf',
                nombre: 'InformeBVC2015.pdf',
                url: '/assets/files/estado_sistema_oci/Informe Certificación de Sistemas de Gestión Bureau Beritas/02. 2015/InformeBVC2015.pdf',
              },
            ],
          },
          {
            id: 14,
            nombre: '2014',
            files: [
              {
                id: 15,
                tipo: 'pdf',
                nombre: 'InformeBVC2014.pdf',
                url: '/assets/files/estado_sistema_oci/Informe Certificación de Sistemas de Gestión Bureau Beritas/03. 2014/InformeBVC2014.pdf',
              },
            ],
          },
          {
            id: 16,
            nombre: '2013',
            files: [
              {
                id: 17,
                tipo: 'pdf',
                nombre: 'InformeBVC2013.pdf',
                url: '/assets/files/estado_sistema_oci/Informe Certificación de Sistemas de Gestión Bureau Beritas/04. 2013/InformeBVC2013.pdf',
              },
            ],
          },
          {
            id: 18,
            nombre: '2012',
            files: [
              {
                id: 19,
                tipo: 'pdf',
                nombre: 'InformeBVC2012.pdf',
                url: '/assets/files/estado_sistema_oci/Informe Certificación de Sistemas de Gestión Bureau Beritas/05. 2012/InformeBVC2012.pdf',
              },
            ],
          },
        ],
      },
      {
        id: 1,
        nombre: 'Informe Cumplimiento Ley 1815-2016',
        acordion: [
          {
            id: 2,
            nombre: '2018',
            acordion: [
              {
                id: 3,
                nombre: 'Abril',
                files: [
                  {
                    id: 1,
                    tipo: 'pdf',
                    nombre: 'InfoLey1815ABR2018.pdf',
                    url: '/assets/files/estado_sistema_oci/Informe Cumplimiento Ley 1815-2016/01. 2018/abril/InfoLey1815ABR2018.pdf',
                  },
                ],
              },
              {
                id: 4,
                nombre: 'Agosto',
                files: [
                  {
                    id: 2,
                    tipo: 'pdf',
                    nombre: 'InfoLey1815AGO2018.pdf',
                    url: '/assets/files/estado_sistema_oci/Informe Cumplimiento Ley 1815-2016/01. 2018/agosto/InfoLey1815AGO2018.pdf',
                  },
                ],
              },
              {
                id: 5,
                nombre: 'Diciembre',
                files: [
                  {
                    id: 3,
                    tipo: 'pdf',
                    nombre: 'InfoLey1815DIC2018.pdf',
                    url: '/assets/files/estado_sistema_oci/Informe Cumplimiento Ley 1815-2016/01. 2018/diciembre/InfoLey1815DIC2018.pdf',
                  },
                ],
              },
              {
                id: 6,
                nombre: 'Enero',
                files: [
                  {
                    id: 4,
                    tipo: 'pdf',
                    nombre: 'InfoLey1815ENE2018.pdf',
                    url: '/assets/files/estado_sistema_oci/Informe Cumplimiento Ley 1815-2016/01. 2018/enero/InfoLey1815ENE2018.pdf',
                  },
                ],
              },
              {
                id: 7,
                nombre: 'Febrero',
                files: [
                  {
                    id: 5,
                    tipo: 'pdf',
                    nombre: 'InfoLey1815FEB2018.pdf',
                    url: '/assets/files/estado_sistema_oci/Informe Cumplimiento Ley 1815-2016/01. 2018/febrero/InfoLey1815FEB2018.pdf',
                  },
                ],
              },
              {
                id: 8,
                nombre: 'Julio',
                files: [
                  {
                    id: 6,
                    tipo: 'pdf',
                    nombre: 'InfoLey1815JUL2018.pdf',
                    url: '/assets/files/estado_sistema_oci/Informe Cumplimiento Ley 1815-2016/01. 2018/julio/InfoLey1815JUL2018.pdf',
                  },
                ],
              },
              {
                id: 9,
                nombre: 'Junio',
                files: [
                  {
                    id: 7,
                    tipo: 'pdf',
                    nombre: 'InfoLey1815JUN2018.pdf',
                    url: '/assets/files/estado_sistema_oci/Informe Cumplimiento Ley 1815-2016/01. 2018/junio/InfoLey1815JUN2018.pdf',
                  },
                ],
              },
              {
                id: 10,
                nombre: 'Marzo',
                files: [
                  {
                    id: 8,
                    tipo: 'pdf',
                    nombre: 'InfoLey1815MAR2018.pdf',
                    url: '/assets/files/estado_sistema_oci/Informe Cumplimiento Ley 1815-2016/01. 2018/marzo/InfoLey1815MAR2018.pdf',
                  },
                ],
              },
              {
                id: 11,
                nombre: 'Mayo',
                files: [
                  {
                    id: 9,
                    tipo: 'pdf',
                    nombre: 'InfoLey1815MAY2018.pdf',
                    url: '/assets/files/estado_sistema_oci/Informe Cumplimiento Ley 1815-2016/01. 2018/mayo/InfoLey1815MAY2018.pdf',
                  },
                ],
              },
              {
                id: 12,
                nombre: 'Noviembre',
                files: [
                  {
                    id: 10,
                    tipo: 'pdf',
                    nombre: 'InfoLey1815NOV2018.pdf',
                    url: '/assets/files/estado_sistema_oci/Informe Cumplimiento Ley 1815-2016/01. 2018/noviembre/InfoLey1815NOV2018.pdf',
                  },
                ],
              },
              {
                id: 13,
                nombre: 'Octubre',
                files: [
                  {
                    id: 11,
                    tipo: 'pdf',
                    nombre: 'InfoLey1815OCT2018.pdf',
                    url: '/assets/files/estado_sistema_oci/Informe Cumplimiento Ley 1815-2016/01. 2018/octubre/InfoLey1815OCT2018.pdf',
                  },
                ],
              },
              {
                id: 14,
                nombre: 'Septiembre',
                files: [
                  {
                    id: 12,
                    tipo: 'pdf',
                    nombre: 'InfoLey1815SEP2018.pdf',
                    url: '/assets/files/estado_sistema_oci/Informe Cumplimiento Ley 1815-2016/01. 2018/septiembre/InfoLey1815SEP2018.pdf',
                  },
                ],
              },
            ],
          },
          {
            id: 15,
            nombre: '2017',
            acordion: [
              {
                id: 16,
                nombre: 'Abril',
                files: [
                  {
                    id: 13,
                    tipo: 'pdf',
                    nombre: 'InfoLey1815ABR2017.pdf',
                    url: '/assets/files/estado_sistema_oci/Informe Cumplimiento Ley 1815-2016/02. 2017/abril/InfoLey1815ABR2017.pdf',
                  },
                ],
              },
              {
                id: 17,
                nombre: 'Agosto',
                files: [
                  {
                    id: 14,
                    tipo: 'pdf',
                    nombre: 'InfoLey1815AGO2017.pdf',
                    url: '/assets/files/estado_sistema_oci/Informe Cumplimiento Ley 1815-2016/02. 2017/agosto/InfoLey1815AGO2017.pdf',
                  },
                ],
              },
              {
                id: 18,
                nombre: 'Diciembre',
                files: [
                  {
                    id: 15,
                    tipo: 'pdf',
                    nombre: 'InfoLey1815DIC2017.pdf',
                    url: '/assets/files/estado_sistema_oci/Informe Cumplimiento Ley 1815-2016/02. 2017/diciembre/InfoLey1815DIC2017.pdf',
                  },
                ],
              },
              {
                id: 19,
                nombre: 'Enero',
                files: [
                  {
                    id: 16,
                    tipo: 'pdf',
                    nombre: 'InfoLey1815ENE2017.pdf',
                    url: '/assets/files/estado_sistema_oci/Informe Cumplimiento Ley 1815-2016/02. 2017/enero/InfoLey1815ENE2017.pdf',
                  },
                ],
              },
              {
                id: 20,
                nombre: 'Febrero',
                files: [
                  {
                    id: 17,
                    tipo: 'pdf',
                    nombre: 'InfoLey1815FEB2017.pdf',
                    url: '/assets/files/estado_sistema_oci/Informe Cumplimiento Ley 1815-2016/02. 2017/febrero/InfoLey1815FEB2017.pdf',
                  },
                ],
              },
              {
                id: 21,
                nombre: 'Julio',
                files: [
                  {
                    id: 18,
                    tipo: 'pdf',
                    nombre: 'InfoLey1815JUL2017.pdf',
                    url: '/assets/files/estado_sistema_oci/Informe Cumplimiento Ley 1815-2016/02. 2017/julio/InfoLey1815JUL2017.pdf',
                  },
                ],
              },
              {
                id: 22,
                nombre: 'Junio',
                files: [
                  {
                    id: 19,
                    tipo: 'pdf',
                    nombre: 'InfoLey1815JUN2017.pdf',
                    url: '/assets/files/estado_sistema_oci/Informe Cumplimiento Ley 1815-2016/02. 2017/junio/InfoLey1815JUN2017.pdf',
                  },
                ],
              },
              {
                id: 23,
                nombre: 'Marzo',
                files: [
                  {
                    id: 20,
                    tipo: 'pdf',
                    nombre: 'InfoLey1815MAR2017.pdf',
                    url: '/assets/files/estado_sistema_oci/Informe Cumplimiento Ley 1815-2016/02. 2017/marzo/InfoLey1815MAR2017.pdf',
                  },
                ],
              },
              {
                id: 24,
                nombre: 'Mayo',
                files: [
                  {
                    id: 21,
                    tipo: 'pdf',
                    nombre: 'InfoLey1815MAY2017.pdf',
                    url: '/assets/files/estado_sistema_oci/Informe Cumplimiento Ley 1815-2016/02. 2017/mayo/InfoLey1815MAY2017.pdf',
                  },
                ],
              },
              {
                id: 25,
                nombre: 'Noviembre',
                files: [
                  {
                    id: 22,
                    tipo: 'pdf',
                    nombre: 'InfoLey1815NOV2017.pdf',
                    url: '/assets/files/estado_sistema_oci/Informe Cumplimiento Ley 1815-2016/02. 2017/noviembre/InfoLey1815NOV2017.pdf',
                  },
                ],
              },
              {
                id: 26,
                nombre: 'Octubre',
                files: [
                  {
                    id: 23,
                    tipo: 'pdf',
                    nombre: 'InfoLey1815OCT2017.pdf',
                    url: '/assets/files/estado_sistema_oci/Informe Cumplimiento Ley 1815-2016/02. 2017/octubre/InfoLey1815OCT2017.pdf',
                  },
                ],
              },
              {
                id: 27,
                nombre: 'Septiembre',
                files: [
                  {
                    id: 24,
                    tipo: 'pdf',
                    nombre: 'InfoLey1815SEP2017.pdf',
                    url: '/assets/files/estado_sistema_oci/Informe Cumplimiento Ley 1815-2016/02. 2017/septiembre/InfoLey1815SEP2017.pdf',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 1,
        nombre: 'Informe Derechos de Autor',
        acordion: [
          {
            id: 1,
            nombre: '01. 2017',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'InfoDerechosAutor2017.pdf',
                url: '/assets/files/estado_sistema_oci/Informe Derechos de Autor/01. 2017/InfoDerechosAutor2017.pdf',
              },
            ],
          },
          {
            id: 2,
            nombre: '02. 2016',
            files: [
              {
                id: 2,
                tipo: 'pdf',
                nombre: 'InfoDerechosAutor2016.pdf',
                url: '/assets/files/estado_sistema_oci/Informe Derechos de Autor/02. 2016/InfoDerechosAutor2016.pdf',
              },
            ],
          },
        ],
      },
      {
        id: 2,
        nombre: 'Informe Ejecutivo Contable',
        files: [
          {
            id: 3,
            tipo: 'pdf',
            nombre:
              '01. RESULTADOS EVALUACION SISTEMA DE CONTROL INTERNO CONTABLE 2024.pdf',
            url: '/assets/files/estado_sistema_oci/Informe Ejecutivo Contable/01. RESULTADOS EVALUACION SISTEMA DE CONTROL INTERNO CONTABLE 2024.pdf',
          },
          {
            id: 4,
            tipo: 'pdf',
            nombre:
              '02. INFORME EVALUACION CONTROL INTERNO CONTABLE VIGENCIA 2023.pdf',
            url: '/assets/files/estado_sistema_oci/Informe Ejecutivo Contable/02. INFORME EVALUACION CONTROL INTERNO CONTABLE VIGENCIA 2023.pdf',
          },
          {
            id: 5,
            tipo: 'pdf',
            nombre: '03. InfoEjecutivoContable2022.pdf',
            url: '/assets/files/estado_sistema_oci/Informe Ejecutivo Contable/03. InfoEjecutivoContable2022.pdf',
          },
          {
            id: 6,
            tipo: 'pdf',
            nombre: '04. InfoEjecutivoContable2021.pdf',
            url: '/assets/files/estado_sistema_oci/Informe Ejecutivo Contable/04. InfoEjecutivoContable2021.pdf',
          },
          {
            id: 7,
            tipo: 'pdf',
            nombre: '05. InfoEjecutivoContable2020.pdf',
            url: '/assets/files/estado_sistema_oci/Informe Ejecutivo Contable/05. InfoEjecutivoContable2020.pdf',
          },
          {
            id: 8,
            tipo: 'pdf',
            nombre: '06. InfoEjecutivoContable2019.pdf',
            url: '/assets/files/estado_sistema_oci/Informe Ejecutivo Contable/06. InfoEjecutivoContable2019.pdf',
          },
          {
            id: 9,
            tipo: 'pdf',
            nombre: '07. InfoEjecutivoContable2018.pdf',
            url: '/assets/files/estado_sistema_oci/Informe Ejecutivo Contable/07. InfoEjecutivoContable2018.pdf',
          },
          {
            id: 10,
            tipo: 'pdf',
            nombre: '08. InfoEjecutivoContable2017.pdf',
            url: '/assets/files/estado_sistema_oci/Informe Ejecutivo Contable/08. InfoEjecutivoContable2017.pdf',
          },
          {
            id: 11,
            tipo: 'pdf',
            nombre: '09. InfoEjecutivoContable2016.pdf',
            url: '/assets/files/estado_sistema_oci/Informe Ejecutivo Contable/09. InfoEjecutivoContable2016.pdf',
          },
          {
            id: 12,
            tipo: 'pdf',
            nombre: '10. InfoEjecutivoContable2013.pdf',
            url: '/assets/files/estado_sistema_oci/Informe Ejecutivo Contable/10. InfoEjecutivoContable2013.pdf',
          },
          {
            id: 13,
            tipo: 'pdf',
            nombre: '11. InfoEjecutivoContable2012.pdf',
            url: '/assets/files/estado_sistema_oci/Informe Ejecutivo Contable/11. InfoEjecutivoContable2012.pdf',
          },
          {
            id: 14,
            tipo: 'pdf',
            nombre: '12. InfoEjecutivoContable2011.pdf',
            url: '/assets/files/estado_sistema_oci/Informe Ejecutivo Contable/12. InfoEjecutivoContable2011.pdf',
          },
        ],
      },
      {
        id: 1,
        nombre: 'Informe Ejecutivo MECI',
        acordion: [
          {
            id: 2,
            nombre: '2013',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'InfoEjecutivoMECI2013.pdf',
                url: '/assets/files/estado_sistema_oci/Informe Ejecutivo MECI/01. 2013/InfoEjecutivoMECI2013.pdf',
              },
            ],
          },
          {
            id: 4,
            nombre: '2012',
            files: [
              {
                id: 2,
                tipo: 'pdf',
                nombre: 'InfoEjecutivoMECI2012.pdf',
                url: '/assets/files/estado_sistema_oci/Informe Ejecutivo MECI/02. 2012/InfoEjecutivoMECI2012.pdf',
              },
            ],
          },
          {
            id: 6,
            nombre: '2011',
            files: [
              {
                id: 3,
                tipo: 'pdf',
                nombre: 'InfoEjecutivoMECI2011.pdf',
                url: '/assets/files/estado_sistema_oci/Informe Ejecutivo MECI/03. 2011/InfoEjecutivoMECI2011.pdf',
              },
            ],
          },
        ],
      },
      {
        id: 8,
        nombre: 'Informe Pormenorizado del Estado de Control Interno',
        acordion: [
          {
            id: 9,
            nombre: '2021',
            files: [
              {
                id: 4,
                tipo: 'pdf',
                nombre:
                  'Formato Evaluación Independiente del SCI Semestre I 2021.pdf',
                url: '/assets/files/estado_sistema_oci/Informe Pormenorizado del Estado de Control Interno/01. 2021/Formato Evaluación Independiente del SCI Semestre I 2021.pdf',
              },
            ],
          },
          {
            id: 11,
            nombre: '2020',
            files: [
              {
                id: 5,
                tipo: 'pdf',
                nombre: 'INFORME PORMENORIZADO I SEMESTRE 2020.pdf',
                url: '/assets/files/estado_sistema_oci/Informe Pormenorizado del Estado de Control Interno/02. 2020/INFORME PORMENORIZADO I SEMESTRE 2020.pdf',
              },
              {
                id: 6,
                tipo: 'pdf',
                nombre: 'INFORME PORMENORIZADO II SEMESTRE 2020.pdf',
                url: '/assets/files/estado_sistema_oci/Informe Pormenorizado del Estado de Control Interno/02. 2020/INFORME PORMENORIZADO II SEMESTRE 2020.pdf',
              },
            ],
          },
          {
            id: 14,
            nombre: '2019',
            files: [
              {
                id: 7,
                tipo: 'pdf',
                nombre:
                  'INFORME PORMENORIZADO  01 DE NOVIEMBRE AL 31 DE DICIEMBRE DEL 2019.pdf',
                url: '/assets/files/estado_sistema_oci/Informe Pormenorizado del Estado de Control Interno/03. 2019/INFORME PORMENORIZADO  01 DE NOVIEMBRE AL 31 DE DICIEMBRE DEL 2019.pdf',
              },
              {
                id: 8,
                tipo: 'pdf',
                nombre: 'Informe_1474_II_2019.pdf',
                url: '/assets/files/estado_sistema_oci/Informe Pormenorizado del Estado de Control Interno/03. 2019/Informe_1474_II_2019.pdf',
              },
              {
                id: 9,
                tipo: 'pdf',
                nombre: 'Informe_1474_I_2019.pdf',
                url: '/assets/files/estado_sistema_oci/Informe Pormenorizado del Estado de Control Interno/03. 2019/Informe_1474_I_2019.pdf',
              },
            ],
          },
          {
            id: 18,
            nombre: '2018',
            files: [
              {
                id: 10,
                tipo: 'pdf',
                nombre: 'Informe_1474_III_2018.pdf',
                url: '/assets/files/estado_sistema_oci/Informe Pormenorizado del Estado de Control Interno/04. 2018/Informe_1474_III_2018.pdf',
              },
              {
                id: 11,
                tipo: 'pdf',
                nombre: 'Informe_1474_II_2018.pdf',
                url: '/assets/files/estado_sistema_oci/Informe Pormenorizado del Estado de Control Interno/04. 2018/Informe_1474_II_2018.pdf',
              },
              {
                id: 12,
                tipo: 'pdf',
                nombre: 'Informe_1474_I_2018.pdf',
                url: '/assets/files/estado_sistema_oci/Informe Pormenorizado del Estado de Control Interno/04. 2018/Informe_1474_I_2018.pdf',
              },
            ],
          },
          {
            id: 22,
            nombre: '2017',
            files: [
              {
                id: 13,
                tipo: 'pdf',
                nombre: 'Informe 1474 I 2017.pdf',
                url: '/assets/files/estado_sistema_oci/Informe Pormenorizado del Estado de Control Interno/05. 2017/Informe 1474 I 2017.pdf',
              },
              {
                id: 14,
                tipo: 'pdf',
                nombre: 'Informe_1474_III_2017.pdf',
                url: '/assets/files/estado_sistema_oci/Informe Pormenorizado del Estado de Control Interno/05. 2017/Informe_1474_III_2017.pdf',
              },
              {
                id: 15,
                tipo: 'pdf',
                nombre: 'Informe_1474_II_2017.pdf',
                url: '/assets/files/estado_sistema_oci/Informe Pormenorizado del Estado de Control Interno/05. 2017/Informe_1474_II_2017.pdf',
              },
            ],
          },
          {
            id: 26,
            nombre: '2016',
            files: [
              {
                id: 16,
                tipo: 'pdf',
                nombre: 'Informe 1474 I 2016.pdf',
                url: '/assets/files/estado_sistema_oci/Informe Pormenorizado del Estado de Control Interno/06. 2016/Informe 1474 I 2016.pdf',
              },
              {
                id: 17,
                tipo: 'pdf',
                nombre: 'Informe 1474 II 2016.pdf',
                url: '/assets/files/estado_sistema_oci/Informe Pormenorizado del Estado de Control Interno/06. 2016/Informe 1474 II 2016.pdf',
              },
              {
                id: 18,
                tipo: 'pdf',
                nombre: 'Informe 1474 III 2016.pdf',
                url: '/assets/files/estado_sistema_oci/Informe Pormenorizado del Estado de Control Interno/06. 2016/Informe 1474 III 2016.pdf',
              },
              {
                id: 19,
                tipo: 'pdf',
                nombre: 'Informe 1474 IV 2016.pdf',
                url: '/assets/files/estado_sistema_oci/Informe Pormenorizado del Estado de Control Interno/06. 2016/Informe 1474 IV 2016.pdf',
              },
            ],
          },
          {
            id: 31,
            nombre: '2015',
            files: [
              {
                id: 20,
                tipo: 'pdf',
                nombre: 'Informe 1474 I 2015.pdf',
                url: '/assets/files/estado_sistema_oci/Informe Pormenorizado del Estado de Control Interno/07. 2015/Informe 1474 I 2015.pdf',
              },
              {
                id: 21,
                tipo: 'pdf',
                nombre: 'Informe 1474 II 2015.pdf',
                url: '/assets/files/estado_sistema_oci/Informe Pormenorizado del Estado de Control Interno/07. 2015/Informe 1474 II 2015.pdf',
              },
              {
                id: 22,
                tipo: 'pdf',
                nombre: 'Informe 1474 III 2015.pdf',
                url: '/assets/files/estado_sistema_oci/Informe Pormenorizado del Estado de Control Interno/07. 2015/Informe 1474 III 2015.pdf',
              },
            ],
          },
          {
            id: 35,
            nombre: '2014',
            files: [
              {
                id: 23,
                tipo: 'pdf',
                nombre: 'Informe 1474 I 2014.pdf',
                url: '/assets/files/estado_sistema_oci/Informe Pormenorizado del Estado de Control Interno/08. 2014/Informe 1474 I 2014.pdf',
              },
              {
                id: 24,
                tipo: 'pdf',
                nombre: 'Informe 1474 II 2014.pdf',
                url: '/assets/files/estado_sistema_oci/Informe Pormenorizado del Estado de Control Interno/08. 2014/Informe 1474 II 2014.pdf',
              },
              {
                id: 25,
                tipo: 'pdf',
                nombre: 'Informe 1474 III 2014.pdf',
                url: '/assets/files/estado_sistema_oci/Informe Pormenorizado del Estado de Control Interno/08. 2014/Informe 1474 III 2014.pdf',
              },
            ],
          },
          {
            id: 39,
            nombre: '2012',
            files: [
              {
                id: 26,
                tipo: 'pdf',
                nombre: 'Informe 1474 I 2012.pdf',
                url: '/assets/files/estado_sistema_oci/Informe Pormenorizado del Estado de Control Interno/09. 2012/Informe 1474 I 2012.pdf',
              },
              {
                id: 27,
                tipo: 'pdf',
                nombre: 'Informe 1474 II 2012.pdf',
                url: '/assets/files/estado_sistema_oci/Informe Pormenorizado del Estado de Control Interno/09. 2012/Informe 1474 II 2012.pdf',
              },
              {
                id: 28,
                tipo: 'pdf',
                nombre: 'Informe 1474 III 2012.pdf',
                url: '/assets/files/estado_sistema_oci/Informe Pormenorizado del Estado de Control Interno/09. 2012/Informe 1474 III 2012.pdf',
              },
            ],
          },
          {
            id: 43,
            nombre: '2011',
            files: [
              {
                id: 29,
                tipo: 'pdf',
                nombre: 'Informe 1474 I 2011.pdf',
                url: '/assets/files/estado_sistema_oci/Informe Pormenorizado del Estado de Control Interno/10. 2011/Informe 1474 I 2011.pdf',
              },
            ],
          },
        ],
      },
      {
        id: 1,
        nombre: 'Informe Sistema de Rendición de Cuentas',
        acordion: [
          {
            id: 2,
            nombre: 'Segundo semestre 2018',
            files: [
              {
                id: 3,
                tipo: 'pdf',
                nombre: 'InfoRendicionSireciII2018.pdf',
                url: '/assets/files/estado_sistema_oci/Informe Sistema de Rendición de Cuentas/01. Segundo semestre 2018/InfoRendicionSireciII2018.pdf',
              },
            ],
          },
          {
            id: 4,
            nombre: 'Primer semestre 2018',
            files: [
              {
                id: 5,
                tipo: 'pdf',
                nombre: 'InfoRendicionSireciI2018.pdf',
                url: '/assets/files/estado_sistema_oci/Informe Sistema de Rendición de Cuentas/02. Primer semestre 2018/InfoRendicionSireciI2018.pdf',
              },
            ],
          },
          {
            id: 6,
            nombre: 'Segundo semestre 2017',
            files: [
              {
                id: 7,
                tipo: 'pdf',
                nombre: 'InfoRendicionSireciII2017.pdf',
                url: '/assets/files/estado_sistema_oci/Informe Sistema de Rendición de Cuentas/03. Segundo semestre 2017/InfoRendicionSireciII2017.pdf',
              },
            ],
          },
          {
            id: 8,
            nombre: 'Segundo semestre 2016',
            files: [
              {
                id: 9,
                tipo: 'pdf',
                nombre: 'InfoRendicionSireci2016.pdf',
                url: '/assets/files/estado_sistema_oci/Informe Sistema de Rendición de Cuentas/04 Segundo semestre 2016/InfoRendicionSireci2016.pdf',
              },
            ],
          },
        ],
      },
      {
        id: 10,
        nombre: 'Informe de Auditorias Control Interno',
        acordion: [
          {
            id: 11,
            nombre: '2017',
            files: [
              {
                id: 12,
                tipo: 'pdf',
                nombre: 'InfoAuditoriaRecursosFinancierosISemes2017.pdf',
                url: '/assets/files/estado_sistema_oci/Informe de Auditorias Control Interno/01. 2017/InfoAuditoriaRecursosFinancierosISemes2017.pdf',
              },
            ],
          },
          {
            id: 13,
            nombre: '2016',
            files: [
              {
                id: 14,
                tipo: 'pdf',
                nombre: 'InfoAuditoriaRecursosFinancierosAbril 2016.pdf',
                url: '/assets/files/estado_sistema_oci/Informe de Auditorias Control Interno/02. 2016/InfoAuditoriaRecursosFinancierosAbril 2016.pdf',
              },
            ],
          },
          {
            id: 15,
            nombre: '2015',
            files: [
              {
                id: 16,
                tipo: 'pdf',
                nombre: 'InfoAuditoriaRecursosFinancierosMarzo2015.pdf',
                url: '/assets/files/estado_sistema_oci/Informe de Auditorias Control Interno/03. 2015/InfoAuditoriaRecursosFinancierosMarzo2015.pdf',
              },
            ],
          },
        ],
      },
      {
        id: 17,
        nombre: 'Informe de Austeridad en el Gasto Público',
        acordion: [
          {
            id: 18,
            nombre: '2024',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre:
                  'ESDESDIGFO23 FORMATO PLAN DE ACCION DE AUSTERIDAD EN EL GASTO PUBLICO   2024.xlsx',
                url: '/assets/files/estado_sistema_oci/Informe de Austeridad en el Gasto Publico/2024/ESDESDIGFO23 FORMATO PLAN DE ACCION DE AUSTERIDAD EN EL GASTO PUBLICO   2024.xlsx',
              },
            ],
          },
          {
            id: 18,
            nombre: '2019',
            acordion: [
              {
                id: 19,
                nombre: 'Segundo Trimestre',
                files: [
                  {
                    id: 20,
                    tipo: 'pdf',
                    nombre: 'InfoAusteridadGPtrimestreII2019.pdf',
                    url: '/assets/files/estado_sistema_oci/Informe de Austeridad en el Gasto Publico/01. 2019/segundo trimestre/InfoAusteridadGPtrimestreII2019.pdf',
                  },
                ],
              },
              {
                id: 21,
                nombre: 'Tecer Trimestre',
                files: [
                  {
                    id: 22,
                    tipo: 'pdf',
                    nombre: 'InfoAusteridadGPtrimestreIII2019.pdf',
                    url: '/assets/files/estado_sistema_oci/Informe de Austeridad en el Gasto Publico/01. 2019/tecer trimestre/InfoAusteridadGPtrimestreIII2019.pdf',
                  },
                ],
              },
            ],
          },
          {
            id: 23,
            nombre: '2018',
            acordion: [
              {
                id: 24,
                nombre: 'Cuarto Trimestre',
                files: [
                  {
                    id: 25,
                    tipo: 'pdf',
                    nombre: 'InfoAusteridadGPtrimestreIV2018.pdf',
                    url: '/assets/files/estado_sistema_oci/Informe de Austeridad en el Gasto Publico/02. 2018/cuarto trimestre/InfoAusteridadGPtrimestreIV2018.pdf',
                  },
                ],
              },
              {
                id: 26,
                nombre: 'Primer Trimestre',
                files: [
                  {
                    id: 27,
                    tipo: 'pdf',
                    nombre: 'InfoAusteridadGPtrimestreI2018.pdf',
                    url: '/assets/files/estado_sistema_oci/Informe de Austeridad en el Gasto Publico/02. 2018/primer trimestre/InfoAusteridadGPtrimestreI2018.pdf',
                  },
                ],
              },
              {
                id: 28,
                nombre: 'Segundo Trimestre',
                files: [
                  {
                    id: 29,
                    tipo: 'pdf',
                    nombre: 'InfoAusteridadGPtrimestreII2018.pdf',
                    url: '/assets/files/estado_sistema_oci/Informe de Austeridad en el Gasto Publico/02. 2018/segundo trimestre/InfoAusteridadGPtrimestreII2018.pdf',
                  },
                ],
              },
              {
                id: 30,
                nombre: 'Tercer Trimestre',
                files: [
                  {
                    id: 31,
                    tipo: 'pdf',
                    nombre: 'InfoAusteridadGPtrimestreIII2018.pdf',
                    url: '/assets/files/estado_sistema_oci/Informe de Austeridad en el Gasto Publico/02. 2018/tercer trimestre/InfoAusteridadGPtrimestreIII2018.pdf',
                  },
                ],
              },
            ],
          },
          {
            id: 32,
            nombre: '2017',
            acordion: [
              {
                id: 33,
                nombre: 'Cuarto Trimestre',
                files: [
                  {
                    id: 34,
                    tipo: 'pdf',
                    nombre: 'InfoAusteridadGPtrimestreIV2017.pdf',
                    url: '/assets/files/estado_sistema_oci/Informe de Austeridad en el Gasto Publico/03. 2017/cuarto trimestre/InfoAusteridadGPtrimestreIV2017.pdf',
                  },
                ],
              },
              {
                id: 35,
                nombre: 'Primer Trimestre',
                files: [
                  {
                    id: 36,
                    tipo: 'pdf',
                    nombre: 'InfoAusteridadGPtrimestreI2017.pdf',
                    url: '/assets/files/estado_sistema_oci/Informe de Austeridad en el Gasto Publico/03. 2017/primer trimestre/InfoAusteridadGPtrimestreI2017.pdf',
                  },
                ],
              },
              {
                id: 37,
                nombre: 'Segundo Trimestre',
                files: [
                  {
                    id: 38,
                    tipo: 'pdf',
                    nombre: 'InfoAusteridadGPtrimestreII2017.pdf',
                    url: '/assets/files/estado_sistema_oci/Informe de Austeridad en el Gasto Publico/03. 2017/segundo trimestre/InfoAusteridadGPtrimestreII2017.pdf',
                  },
                ],
              },
              {
                id: 39,
                nombre: 'Tercer Trimestre',
                files: [
                  {
                    id: 40,
                    tipo: 'pdf',
                    nombre: 'InfoAusteridadGPtrimestreIII2017.pdf',
                    url: '/assets/files/estado_sistema_oci/Informe de Austeridad en el Gasto Publico/03. 2017/tercer trimestre/InfoAusteridadGPtrimestreIII2017.pdf',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 1,
        nombre:
          'Informe de Evaluación Independiente del Sistema de Control Interno',
        acordion: [
          {
            id: 2,
            nombre: '2024',
            files: [
              {
                id: 3,
                tipo: 'pdf',
                nombre: 'Evaluación Independiente del SCI I semestre 2024.pdf',
                url: '/assets/files/estado_sistema_oci/Informe de Evaluación Independiente del Sistema de Control Interno/01. 2024/Evaluación Independiente del SCI I semestre 2024.pdf',
              },
              {
                id: 3,
                tipo: 'pdf',
                nombre: 'Evaluación Independiente del SCI II semestre 2024.pdf',
                url: '/assets/files/estado_sistema_oci/Informe de Evaluación Independiente del Sistema de Control Interno/01. 2024/Evaluación Independiente del SCI II semestre 2024.pdf',
              },
            ],
          },
          {
            id: 4,
            nombre: '2023',
            files: [
              {
                id: 5,
                tipo: 'pdf',
                nombre:
                  '01 Evaluación Independiente del Estado del Sistema de Control I semestre 2023.pdf',
                url: '/assets/files/estado_sistema_oci/Informe de Evaluación Independiente del Sistema de Control Interno/02. 2023/01 Evaluación Independiente del Estado del Sistema de Control I semestre 2023.pdf',
              },
              {
                id: 6,
                tipo: 'pdf',
                nombre:
                  '02 EVALUACION INDEPENDIENTE SCI - II SEMESTRE  2023 -.pdf',
                url: '/assets/files/estado_sistema_oci/Informe de Evaluación Independiente del Sistema de Control Interno/02. 2023/02 EVALUACION INDEPENDIENTE SCI - II SEMESTRE  2023 -.pdf',
              },
            ],
          },
          {
            id: 7,
            nombre: '2022',
            files: [
              {
                id: 8,
                tipo: 'pdf',
                nombre:
                  'Consolidado Formato Evaluación Independiente del SCI primer Semestre 2022 30112022 (3).pdf',
                url: '/assets/files/estado_sistema_oci/Informe de Evaluación Independiente del Sistema de Control Interno/03. 2022/Consolidado Formato Evaluación Independiente del SCI primer Semestre 2022 30112022 (3).pdf',
              },
              {
                id: 9,
                tipo: 'pdf',
                nombre:
                  'Evaluación Independiente del SCI II semestre de 2022 - Consolidado 06032023 (1).pdf',
                url: '/assets/files/estado_sistema_oci/Informe de Evaluación Independiente del Sistema de Control Interno/03. 2022/Evaluación Independiente del SCI II semestre de 2022 - Consolidado 06032023 (1).pdf',
              },
            ],
          },
        ],
      },
      {
        id: 10,
        nombre:
          'Informe y certificación de la Información Litigiosa del Estado Ekogui',
        acordion: [
          {
            id: 1,
            nombre: '2024',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: 'Certificacion firmada FPSFNC Control Interno.pdf',
                url: '/assets/files/estado_sistema_oci/Informe y certificación de la Información Litigiosa del Estado Ekogui/01. 2024/Certificacion Ekogui II Semestre 2024 Fondo Pasivo Social FNC (1).pdf',
              },
              {
                id: 2,
                tipo: 'excel',
                nombre:
                  'plantilla_control_interno_22072024 Fondo de Pasivo Social FNC.xlsx',
                url: '/assets/files/estado_sistema_oci/Informe y certificación de la Información Litigiosa del Estado Ekogui/01. 2024/plantilla_control_interno_22072024 Fondo de Pasivo Social FNC.xlsx',
              },
            ],
          },
          {
            id: 1,
            nombre: '2023',
            files: [
              {
                id: 11,
                tipo: 'excel',
                nombre: 'Inf ekogui 2 sem 2023 Fondo Pasivo Social FNC.xlsx',
                url: '/assets/files/estado_sistema_oci/Informe y certificación de la Información Litigiosa del Estado Ekogui/02. 2023/Inf ekogui 2 sem 2023 Fondo Pasivo Social FNC.xlsx',
              },
            ],
          },
        ],
      },
      {
        id: 12,
        nombre: 'Informes SIRECI',
        acordion: [
          {
            id: 13,
            nombre: '2021',
            files: [
              {
                id: 14,
                tipo: 'pdf',
                nombre:
                  'INFORME SEGUIMIENTO AUDITORIA SIRECI I SEMESTRE 2021.pdf',
                url: '/assets/files/estado_sistema_oci/Informes SIRECI/01. 2021/INFORME SEGUIMIENTO AUDITORIA SIRECI I SEMESTRE 2021.pdf',
              },
              {
                id: 15,
                tipo: 'pdf',
                nombre:
                  'INFORME SEGUIMIENTO AUDITORIA SIRECI II SEMESTRE 2021.pdf',
                url: '/assets/files/estado_sistema_oci/Informes SIRECI/01. 2021/INFORME SEGUIMIENTO AUDITORIA SIRECI II SEMESTRE 2021.pdf',
              },
            ],
          },
        ],
      },
      {
        id: 1,
        nombre: 'Informes de Auditorias a las PQRSD',
        acordion: [
          {
            id: 1,
            nombre: '2021',
            files: [
              {
                id: 2,
                tipo: 'pdf',
                nombre:
                  '01 INFORME AUDITORÍA SEGUIMIENTO A LAS PQRS I SEMESTRE 2021.pdf',
                url: '/assets/files/estado_sistema_oci/Informes de Auditorias a las PQRSD/2021/01 INFORME AUDITORÍA SEGUIMIENTO A LAS PQRS I SEMESTRE 2021.pdf',
              },
              {
                id: 3,
                tipo: 'pdf',
                nombre:
                  '02 INFORME DE SEGUIMIENTO A LAS PQRS DEL FPS II SEMESTRE 2021.pdf',
                url: '/assets/files/estado_sistema_oci/Informes de Auditorias a las PQRSD/2021/02 INFORME DE SEGUIMIENTO A LAS PQRS DEL FPS II SEMESTRE 2021.pdf',
              },
            ],
          },
        ],
      },
      {
        id: 4,
        nombre: 'Mecanismos de Control Interno',
        files: [
          {
            id: 5,
            tipo: 'pdf',
            nombre: 'MecanismosDeControlFPS.pdf',
            url: '/assets/files/estado_sistema_oci/Mecanismos de Control Interno/MecanismosDeControlFPS.pdf',
          },
        ],
      },
      {
        id: 1,
        nombre: 'Seguimiento y Evaluación de Planes Institucionales',
        acordion: [
          {
            id: 1,
            nombre: 'Seguimiento indicadores de gestion',
            acordion: [
              {
                id: 2,
                nombre: '2019',
                files: [
                  {
                    id: 3,
                    tipo: 'excel',
                    nombre: 'INDICADORES_ESTRATEGICOS_I2019.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento indicadores de gestion/01. 2019/INDICADORES_ESTRATEGICOS_I2019.xls',
                  },
                  {
                    id: 4,
                    tipo: 'excel',
                    nombre: 'INDICADORES_PROCESO_I2019.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento indicadores de gestion/01. 2019/INDICADORES_PROCESO_I2019.xls',
                  },
                ],
              },
              {
                id: 5,
                nombre: '2018',
                files: [
                  {
                    id: 6,
                    tipo: 'excel',
                    nombre:
                      'INDICADORES ESTRATEGICOS segundo semesre del 2018.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento indicadores de gestion/02. 2018/INDICADORES ESTRATEGICOS segundo semesre del 2018.xls',
                  },
                  {
                    id: 7,
                    tipo: 'excel',
                    nombre: 'INDICADORES POR PROCESO SEGUNDO SEMESTRE 2018.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento indicadores de gestion/02. 2018/INDICADORES POR PROCESO SEGUNDO SEMESTRE 2018.xls',
                  },
                  {
                    id: 8,
                    tipo: 'excel',
                    nombre: 'INDICADORES_ESTRATEGICOS_I2018.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento indicadores de gestion/02. 2018/INDICADORES_ESTRATEGICOS_I2018.xls',
                  },
                  {
                    id: 9,
                    tipo: 'excel',
                    nombre: 'INDICADORES_PROCESO_I2018.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento indicadores de gestion/02. 2018/INDICADORES_PROCESO_I2018.xls',
                  },
                ],
              },
              {
                id: 10,
                nombre: '2017',
                files: [
                  {
                    id: 11,
                    tipo: 'excel',
                    nombre: 'INDICADORES_ESTRATEGICOS_I2017.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento indicadores de gestion/03. 2017/INDICADORES_ESTRATEGICOS_I2017.xls',
                  },
                  {
                    id: 12,
                    tipo: 'excel',
                    nombre: 'INDICADORES_ESTRATEGICOS_II2017.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento indicadores de gestion/03. 2017/INDICADORES_ESTRATEGICOS_II2017.xls',
                  },
                  {
                    id: 13,
                    tipo: 'excel',
                    nombre: 'INDICADORES_PROCESO_I2017.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento indicadores de gestion/03. 2017/INDICADORES_PROCESO_I2017.xls',
                  },
                  {
                    id: 14,
                    tipo: 'excel',
                    nombre: 'INDICADORES_PROCESO_II2017.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento indicadores de gestion/03. 2017/INDICADORES_PROCESO_II2017.xls',
                  },
                ],
              },
              {
                id: 15,
                nombre: '2016',
                files: [
                  {
                    id: 16,
                    tipo: 'excel',
                    nombre: 'INDICADORES_ESTRATEGICOS_I2016.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento indicadores de gestion/04. 2016/INDICADORES_ESTRATEGICOS_I2016.xls',
                  },
                  {
                    id: 17,
                    tipo: 'excel',
                    nombre: 'INDICADORES_ESTRATEGICOS_II2016.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento indicadores de gestion/04. 2016/INDICADORES_ESTRATEGICOS_II2016.xls',
                  },
                  {
                    id: 18,
                    tipo: 'excel',
                    nombre: 'INDICADORES_PROCESO_I2016.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento indicadores de gestion/04. 2016/INDICADORES_PROCESO_I2016.xls',
                  },
                  {
                    id: 19,
                    tipo: 'excel',
                    nombre: 'INDICADORES_PROCESO_II2016.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento indicadores de gestion/04. 2016/INDICADORES_PROCESO_II2016.xls',
                  },
                ],
              },
              {
                id: 20,
                nombre: '2015',
                files: [
                  {
                    id: 21,
                    tipo: 'excel',
                    nombre: 'INDICADORES_ESTRATEGICOS_I2015.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento indicadores de gestion/05. 2015/INDICADORES_ESTRATEGICOS_I2015.xls',
                  },
                  {
                    id: 22,
                    tipo: 'excel',
                    nombre: 'INDICADORES_ESTRATEGICOS_II2015.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento indicadores de gestion/05. 2015/INDICADORES_ESTRATEGICOS_II2015.xls',
                  },
                  {
                    id: 23,
                    tipo: 'excel',
                    nombre: 'INDICADORES_PROCESO_I2015.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento indicadores de gestion/05. 2015/INDICADORES_PROCESO_I2015.xls',
                  },
                  {
                    id: 24,
                    tipo: 'excel',
                    nombre: 'INDICADORES_PROCESO_II2015.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento indicadores de gestion/05. 2015/INDICADORES_PROCESO_II2015.xls',
                  },
                ],
              },
              {
                id: 25,
                nombre: '2014',
                files: [
                  {
                    id: 26,
                    tipo: 'excel',
                    nombre: 'INDICADORES_ESTRATEGICOS_2014I.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento indicadores de gestion/06. 2014/INDICADORES_ESTRATEGICOS_2014I.xls',
                  },
                  {
                    id: 27,
                    tipo: 'excel',
                    nombre: 'INDICADORES_ESTRATEGICOS_2014II.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento indicadores de gestion/06. 2014/INDICADORES_ESTRATEGICOS_2014II.xls',
                  },
                  {
                    id: 28,
                    tipo: 'excel',
                    nombre: 'INDICADORES_PROCESO_2014I.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento indicadores de gestion/06. 2014/INDICADORES_PROCESO_2014I.xls',
                  },
                  {
                    id: 29,
                    tipo: 'excel',
                    nombre: 'INDICADORES_PROCESO_2014II.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento indicadores de gestion/06. 2014/INDICADORES_PROCESO_2014II.xls',
                  },
                ],
              },
              {
                id: 30,
                nombre: '2013',
                files: [
                  {
                    id: 31,
                    tipo: 'excel',
                    nombre: 'INDICADORES_ESTRATEGICOS_2013I.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento indicadores de gestion/07. 2013/INDICADORES_ESTRATEGICOS_2013I.xls',
                  },
                  {
                    id: 32,
                    tipo: 'excel',
                    nombre: 'INDICADORES_ESTRATEGICOS_2013II.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento indicadores de gestion/07. 2013/INDICADORES_ESTRATEGICOS_2013II.xls',
                  },
                  {
                    id: 33,
                    tipo: 'excel',
                    nombre: 'INDICADORES_PROCESO_2013I.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento indicadores de gestion/07. 2013/INDICADORES_PROCESO_2013I.xls',
                  },
                  {
                    id: 34,
                    tipo: 'excel',
                    nombre: 'INDICADORES_PROCESO_2013II.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento indicadores de gestion/07. 2013/INDICADORES_PROCESO_2013II.xls',
                  },
                ],
              },
              {
                id: 35,
                nombre: '2012',
                files: [
                  {
                    id: 36,
                    tipo: 'excel',
                    nombre: 'IndicaEstrategicosI2012.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento indicadores de gestion/08. 2012/IndicaEstrategicosI2012.xls',
                  },
                  {
                    id: 37,
                    tipo: 'excel',
                    nombre: 'IndicaProceso12012.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento indicadores de gestion/08. 2012/IndicaProceso12012.xls',
                  },
                  {
                    id: 38,
                    tipo: 'excel',
                    nombre: 'indicaestraII2012.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento indicadores de gestion/08. 2012/indicaestraII2012.xls',
                  },
                  {
                    id: 39,
                    tipo: 'excel',
                    nombre: 'indicaprocesoII2012.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento indicadores de gestion/08. 2012/indicaprocesoII2012.xls',
                  },
                ],
              },
            ],
          },
          {
            id: 1,
            nombre: 'Seguimiento plan anticorrupcion',
            acordion: [
              {
                id: 2,
                nombre: '2021',
                files: [
                  {
                    id: 3,
                    tipo: 'excel',
                    nombre:
                      '01. SEGUIMIENTO PLAN ANTICORRUPCIÓN Y ATENCIÓN AL CIUDADANO I CUATRIMESTRE 2021.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan anticorrupcion/01. 2021/01. SEGUIMIENTO PLAN ANTICORRUPCIÓN Y ATENCIÓN AL CIUDADANO I CUATRIMESTRE 2021.xls',
                  },
                  {
                    id: 4,
                    tipo: 'excel',
                    nombre:
                      '02. SEGUIMIENTO PLAN ANTICORRUPCIÓN Y ATENCIÓN AL CIUDADANO II CUATRIMESTRE 2021.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan anticorrupcion/01. 2021/02. SEGUIMIENTO PLAN ANTICORRUPCIÓN Y ATENCIÓN AL CIUDADANO II CUATRIMESTRE 2021.xls',
                  },
                  {
                    id: 5,
                    tipo: 'excel',
                    nombre:
                      '03. SEGUIMIENTO PLAN ANTICORRUPCIÓN Y ATENCIÓN AL CIUDADANO III CUATRIMESTRE 2021.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan anticorrupcion/01. 2021/03. SEGUIMIENTO PLAN ANTICORRUPCIÓN Y ATENCIÓN AL CIUDADANO III CUATRIMESTRE 2021.xls',
                  },
                ],
              },
              {
                id: 6,
                nombre: '2020',
                files: [
                  {
                    id: 7,
                    tipo: 'excel',
                    nombre:
                      '01. SEGUIMIENTO PLAN ANTICORRUPCIÓN Y ATENCIÓN AL CIUDADANO I CUATRIMESTRE I 2020.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan anticorrupcion/02. 2020/01. SEGUIMIENTO PLAN ANTICORRUPCIÓN Y ATENCIÓN AL CIUDADANO I CUATRIMESTRE I 2020.xls',
                  },
                  {
                    id: 8,
                    tipo: 'excel',
                    nombre:
                      '02. PLAN ANTICORRUPCION Y ATENCIÓN AL CIUDADANO II CUATRIMESTRE 2020.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan anticorrupcion/02. 2020/02. PLAN ANTICORRUPCION Y ATENCIÓN AL CIUDADANO II CUATRIMESTRE 2020.xls',
                  },
                  {
                    id: 9,
                    tipo: 'excel',
                    nombre:
                      '03. SEGUIMIENTO PLAN ANTICORRUPCION Y ATENCIÓN AL CIUDADANO III CUATRIMESTRE 2020.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan anticorrupcion/02. 2020/03. SEGUIMIENTO PLAN ANTICORRUPCION Y ATENCIÓN AL CIUDADANO III CUATRIMESTRE 2020.xls',
                  },
                ],
              },
              {
                id: 10,
                nombre: '2019',
                files: [
                  {
                    id: 11,
                    tipo: 'excel',
                    nombre: 'PAA2019.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan anticorrupcion/03. 2019/PAA2019.xls',
                  },
                  {
                    id: 12,
                    tipo: 'excel',
                    nombre: 'PAACIICUATRIMESTRE.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan anticorrupcion/03. 2019/PAACIICUATRIMESTRE.xls',
                  },
                  {
                    id: 13,
                    tipo: 'excel',
                    nombre:
                      'Seguimiento Plan Anticorrupción y Atención al Ciudadano Enero del 2019 abril del 2019.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan anticorrupcion/03. 2019/Seguimiento Plan Anticorrupción y Atención al Ciudadano Enero del 2019 abril del 2019.xls',
                  },
                ],
              },
              {
                id: 14,
                nombre: '2018',
                files: [
                  {
                    id: 15,
                    tipo: 'excel',
                    nombre: 'PLAN_ANTIC_SEGUIMI_ENE_ABR_2018.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan anticorrupcion/04. 2018/PLAN_ANTIC_SEGUIMI_ENE_ABR_2018.xls',
                  },
                  {
                    id: 16,
                    tipo: 'excel',
                    nombre: 'PLAN_ANTIC_SEGUIMI_MAY_AGO_2018.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan anticorrupcion/04. 2018/PLAN_ANTIC_SEGUIMI_MAY_AGO_2018.xls',
                  },
                  {
                    id: 17,
                    tipo: 'excel',
                    nombre: 'PLAN_ANTIC_SEGUIMI_SEP_DIC_2018.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan anticorrupcion/04. 2018/PLAN_ANTIC_SEGUIMI_SEP_DIC_2018.xls',
                  },
                ],
              },
              {
                id: 18,
                nombre: '2017',
                files: [
                  {
                    id: 19,
                    tipo: 'excel',
                    nombre: 'PLAN_ANTIC_2017 DICIEMBRE.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan anticorrupcion/05. 2017/PLAN_ANTIC_2017 DICIEMBRE.xls',
                  },
                  {
                    id: 20,
                    tipo: 'excel',
                    nombre: 'PLAN_ANTIC_SEGUIMI_ENE_ABR_2017.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan anticorrupcion/05. 2017/PLAN_ANTIC_SEGUIMI_ENE_ABR_2017.xls',
                  },
                  {
                    id: 21,
                    tipo: 'excel',
                    nombre: 'PLAN_ANTIC_SEGUIMI_MAY_AGO_2017.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan anticorrupcion/05. 2017/PLAN_ANTIC_SEGUIMI_MAY_AGO_2017.xls',
                  },
                ],
              },
              {
                id: 22,
                nombre: '2016',
                files: [
                  {
                    id: 23,
                    tipo: 'excel',
                    nombre: 'PLAN_ANTIC_SEGUIMI_ENE_ABR_2016.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan anticorrupcion/06. 2016/PLAN_ANTIC_SEGUIMI_ENE_ABR_2016.xls',
                  },
                  {
                    id: 24,
                    tipo: 'excel',
                    nombre: 'PLAN_ANTIC_SEGUIMI_MAY_AGO_2016.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan anticorrupcion/06. 2016/PLAN_ANTIC_SEGUIMI_MAY_AGO_2016.xls',
                  },
                  {
                    id: 25,
                    tipo: 'excel',
                    nombre: 'PLAN_ANTIC_SEGUIMI_MAY_AGO_V2_2016.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan anticorrupcion/06. 2016/PLAN_ANTIC_SEGUIMI_MAY_AGO_V2_2016.xls',
                  },
                  {
                    id: 26,
                    tipo: 'excel',
                    nombre: 'PLAN_ANTIC_SEGUIMI_SEP_DIC_2016.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan anticorrupcion/06. 2016/PLAN_ANTIC_SEGUIMI_SEP_DIC_2016.xls',
                  },
                ],
              },
              {
                id: 27,
                nombre: '2015',
                files: [
                  {
                    id: 28,
                    tipo: 'excel',
                    nombre: 'PLAN_ANTIC_SEGUIMI_ABR_JUL_2015.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan anticorrupcion/07. 2015/PLAN_ANTIC_SEGUIMI_ABR_JUL_2015.xls',
                  },
                  {
                    id: 29,
                    tipo: 'excel',
                    nombre: 'PLAN_ANTIC_SEGUIMI_AGO_NOV_2015.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan anticorrupcion/07. 2015/PLAN_ANTIC_SEGUIMI_AGO_NOV_2015.xls',
                  },
                  {
                    id: 30,
                    tipo: 'excel',
                    nombre: 'PLAN_ANTIC_SEGUIMI_DIC_MAR_2015.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan anticorrupcion/07. 2015/PLAN_ANTIC_SEGUIMI_DIC_MAR_2015.xls',
                  },
                ],
              },
              {
                id: 31,
                nombre: '2014',
                files: [
                  {
                    id: 32,
                    tipo: 'excel',
                    nombre: 'PLAN_ANTIC_SEGUIMI_DIC_MAR_2014.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan anticorrupcion/08. 2014/PLAN_ANTIC_SEGUIMI_DIC_MAR_2014.xls',
                  },
                ],
              },
              {
                id: 33,
                nombre: '2013',
                files: [
                  {
                    id: 34,
                    tipo: 'excel',
                    nombre: 'PLAN_ANTICORRUPCION_CON_SEGUIMIENTO.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan anticorrupcion/09. 2013/PLAN_ANTICORRUPCION_CON_SEGUIMIENTO.xls',
                  },
                  {
                    id: 35,
                    tipo: 'excel',
                    nombre: 'PLAN_ANTIC_SEGUIMIENTO_AGO_NOV2013.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan anticorrupcion/09. 2013/PLAN_ANTIC_SEGUIMIENTO_AGO_NOV2013.xls',
                  },
                ],
              },
            ],
          },
          {
            id: 3,
            nombre: 'Seguimiento plan de accion',
            acordion: [
              {
                id: 2,
                nombre: '2019',
                files: [
                  {
                    id: 3,
                    tipo: 'excel',
                    nombre: 'SEGUIMIENTO PLAN DE ACCION I SEMESTRE2019.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan de accion/01. 2019/SEGUIMIENTO PLAN DE ACCION I SEMESTRE2019.xls',
                  },
                  {
                    id: 4,
                    tipo: 'excel',
                    nombre: 'SEGUIMIENTO PLAN DE ACCION II SEMESTRE 2019.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan de accion/01. 2019/SEGUIMIENTO PLAN DE ACCION II SEMESTRE 2019.xls',
                  },
                ],
              },
              {
                id: 5,
                nombre: '2018',
                files: [
                  {
                    id: 6,
                    tipo: 'excel',
                    nombre: 'SEGUIMIENTO PLAN DE ACCION I SEMESTRE2018.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan de accion/02. 2018/SEGUIMIENTO PLAN DE ACCION I SEMESTRE2018.xls',
                  },
                  {
                    id: 7,
                    tipo: 'excel',
                    nombre: 'SEGUIMIENTO PLAN DE ACCION II SEMESTRE2018.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan de accion/02. 2018/SEGUIMIENTO PLAN DE ACCION II SEMESTRE2018.xls',
                  },
                ],
              },
              {
                id: 8,
                nombre: '2017',
                files: [
                  {
                    id: 9,
                    tipo: 'excel',
                    nombre: 'SEGUIMIENTO PLAN DE ACCION I SEMESTRE2017.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan de accion/03. 2017/SEGUIMIENTO PLAN DE ACCION I SEMESTRE2017.xls',
                  },
                  {
                    id: 10,
                    tipo: 'excel',
                    nombre: 'SEGUIMIENTO PLAN DE ACCION II SEMESTRE2017.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan de accion/03. 2017/SEGUIMIENTO PLAN DE ACCION II SEMESTRE2017.xls',
                  },
                ],
              },
              {
                id: 11,
                nombre: '2016',
                files: [
                  {
                    id: 12,
                    tipo: 'excel',
                    nombre: 'SEGUIMIENTO PLAN DE ACCION I SEMESTRE2016.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan de accion/04. 2016/SEGUIMIENTO PLAN DE ACCION I SEMESTRE2016.xls',
                  },
                  {
                    id: 13,
                    tipo: 'excel',
                    nombre: 'SEGUIMIENTO PLAN DE ACCION II SEMESTRE2016.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan de accion/04. 2016/SEGUIMIENTO PLAN DE ACCION II SEMESTRE2016.xls',
                  },
                ],
              },
              {
                id: 14,
                nombre: '2015',
                files: [
                  {
                    id: 15,
                    tipo: 'excel',
                    nombre: 'SEGUIMIENTO PLAN DE ACCION I SEMESTRE2015.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan de accion/05. 2015/SEGUIMIENTO PLAN DE ACCION I SEMESTRE2015.xls',
                  },
                  {
                    id: 16,
                    tipo: 'excel',
                    nombre: 'SEGUIMIENTO PLAN DE ACCION II SEMESTRE2015.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan de accion/05. 2015/SEGUIMIENTO PLAN DE ACCION II SEMESTRE2015.xls',
                  },
                ],
              },
              {
                id: 17,
                nombre: '2014',
                files: [
                  {
                    id: 18,
                    tipo: 'excel',
                    nombre: 'SEGUIMIENTO PLAN DE ACCION I SEMESTRE2014.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan de accion/06. 2014/SEGUIMIENTO PLAN DE ACCION I SEMESTRE2014.xls',
                  },
                  {
                    id: 19,
                    tipo: 'excel',
                    nombre: 'SEGUIMIENTO PLAN DE ACCION II SEMESTRE2014.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan de accion/06. 2014/SEGUIMIENTO PLAN DE ACCION II SEMESTRE2014.xls',
                  },
                ],
              },
            ],
          },
          {
            id: 1,
            nombre: 'Seguimiento plan de riesgos',
            acordion: [
              {
                id: 2,
                nombre: '2019',
                files: [
                  {
                    id: 3,
                    tipo: 'excel',
                    nombre: 'MAPA DE RIESGOS ENTIDAD DEFIN.xlsx',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan de riesgos/01. 2019/MAPA DE RIESGOS ENTIDAD DEFIN.xlsx',
                  },
                  {
                    id: 4,
                    tipo: 'excel',
                    nombre: 'RIESGOS_II_TRIMESTRE_2019.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan de riesgos/01. 2019/RIESGOS_II_TRIMESTRE_2019.xls',
                  },
                ],
              },
              {
                id: 5,
                nombre: '2018',
                files: [
                  {
                    id: 6,
                    tipo: 'excel',
                    nombre:
                      'PLAN DE MANEJO DE RIESGOS IV TRIMESTRE DEL 2018.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan de riesgos/02. 2018/PLAN DE MANEJO DE RIESGOS IV TRIMESTRE DEL 2018.xls',
                  },
                  {
                    id: 7,
                    tipo: 'excel',
                    nombre: 'RIESGOS_III_TRIMESTRE_2018.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan de riesgos/02. 2018/RIESGOS_III_TRIMESTRE_2018.xls',
                  },
                  {
                    id: 8,
                    tipo: 'excel',
                    nombre: 'RIESGOS_II_TRIMESTRE_2018.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan de riesgos/02. 2018/RIESGOS_II_TRIMESTRE_2018.xls',
                  },
                  {
                    id: 9,
                    tipo: 'excel',
                    nombre: 'RIESGOS_I_TRIMESTRE_2018.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan de riesgos/02. 2018/RIESGOS_I_TRIMESTRE_2018.xls',
                  },
                ],
              },
              {
                id: 10,
                nombre: '2017',
                files: [
                  {
                    id: 11,
                    tipo: 'excel',
                    nombre: 'RIESGOS_III_TRIMESTRE_2017.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan de riesgos/03. 2017/RIESGOS_III_TRIMESTRE_2017.xls',
                  },
                  {
                    id: 12,
                    tipo: 'excel',
                    nombre: 'RIESGOS_II_TRIMESTRE_2017.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan de riesgos/03. 2017/RIESGOS_II_TRIMESTRE_2017.xls',
                  },
                  {
                    id: 13,
                    tipo: 'excel',
                    nombre: 'RIESGOS_IV_TRIMESTRE_2017.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan de riesgos/03. 2017/RIESGOS_IV_TRIMESTRE_2017.xls',
                  },
                  {
                    id: 14,
                    tipo: 'excel',
                    nombre: 'RIESGOS_I_TRIMESTRE_2017.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan de riesgos/03. 2017/RIESGOS_I_TRIMESTRE_2017.xls',
                  },
                ],
              },
              {
                id: 15,
                nombre: '2016',
                files: [
                  {
                    id: 16,
                    tipo: 'excel',
                    nombre: 'RIESGOS_III_TRIMESTRE_2016.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan de riesgos/04. 2016/RIESGOS_III_TRIMESTRE_2016.xls',
                  },
                  {
                    id: 17,
                    tipo: 'excel',
                    nombre: 'RIESGOS_II_TRIMESTRE_2016.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan de riesgos/04. 2016/RIESGOS_II_TRIMESTRE_2016.xls',
                  },
                  {
                    id: 18,
                    tipo: 'excel',
                    nombre: 'RIESGOS_IV_TRIMESTRE_2016.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan de riesgos/04. 2016/RIESGOS_IV_TRIMESTRE_2016.xls',
                  },
                  {
                    id: 19,
                    tipo: 'excel',
                    nombre: 'RIESGOS_I_TRIMESTRE_2016.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan de riesgos/04. 2016/RIESGOS_I_TRIMESTRE_2016.xls',
                  },
                ],
              },
              {
                id: 20,
                nombre: '2015',
                files: [
                  {
                    id: 21,
                    tipo: 'excel',
                    nombre: 'RIESGOS_III_TRIMESTRE_2015.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan de riesgos/05. 2015/RIESGOS_III_TRIMESTRE_2015.xls',
                  },
                  {
                    id: 22,
                    tipo: 'excel',
                    nombre: 'RIESGOS_IV_TRIMESTRE_2015.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan de riesgos/05. 2015/RIESGOS_IV_TRIMESTRE_2015.xls',
                  },
                  {
                    id: 23,
                    tipo: 'excel',
                    nombre: 'RIESGOS_I_TRIMESTRE_2015(1).xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan de riesgos/05. 2015/RIESGOS_I_TRIMESTRE_2015(1).xls',
                  },
                  {
                    id: 24,
                    tipo: 'excel',
                    nombre: 'RIESGOS_I_TRIMESTRE_2015.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan de riesgos/05. 2015/RIESGOS_I_TRIMESTRE_2015.xls',
                  },
                ],
              },
              {
                id: 25,
                nombre: '2014',
                files: [
                  {
                    id: 26,
                    tipo: 'excel',
                    nombre: 'RIESGOS_III_TRIMESTRE_2014.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan de riesgos/06. 2014/RIESGOS_III_TRIMESTRE_2014.xls',
                  },
                  {
                    id: 27,
                    tipo: 'excel',
                    nombre: 'RIESGOS_II_TRIMESTRE_2014.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan de riesgos/06. 2014/RIESGOS_II_TRIMESTRE_2014.xls',
                  },
                ],
              },
              {
                id: 28,
                nombre: '2013',
                files: [
                  {
                    id: 29,
                    tipo: 'excel',
                    nombre: 'MATRIZ RIESGO II TRIMESTRE 2013.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan de riesgos/07. 2013/MATRIZ RIESGO II TRIMESTRE 2013.xls',
                  },
                  {
                    id: 30,
                    tipo: 'excel',
                    nombre: 'MATRIZ RIESGO III TRIMESTRE 2013.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan de riesgos/07. 2013/MATRIZ RIESGO III TRIMESTRE 2013.xls',
                  },
                  {
                    id: 31,
                    tipo: 'excel',
                    nombre: 'MATRIZ RIESGO IV TRIMESTRE 2013.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan de riesgos/07. 2013/MATRIZ RIESGO IV TRIMESTRE 2013.xls',
                  },
                  {
                    id: 32,
                    tipo: 'excel',
                    nombre: 'RIESGOS I TRIMESTRE 2013.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan de riesgos/07. 2013/RIESGOS I TRIMESTRE 2013.xls',
                  },
                ],
              },
              {
                id: 33,
                nombre: '2012',
                files: [
                  {
                    id: 34,
                    tipo: 'excel',
                    nombre: 'RIESGOS IV TRIMESTRE 2012 SEGUIMIENTO.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan de riesgos/08. 2012/RIESGOS IV TRIMESTRE 2012 SEGUIMIENTO.xls',
                  },
                  {
                    id: 35,
                    tipo: 'excel',
                    nombre: 'SEGUIPLANMANEJOIIITRI2012.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan de riesgos/08. 2012/SEGUIPLANMANEJOIIITRI2012.xls',
                  },
                  {
                    id: 36,
                    tipo: 'excel',
                    nombre: 'SEGUIPLANMANEJORIESGOI2012.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan de riesgos/08. 2012/SEGUIPLANMANEJORIESGOI2012.xls',
                  },
                ],
              },
            ],
          },
          {
            id: 1,
            nombre: 'Seguimiento plan estrategico',
            acordion: [
              {
                id: 2,
                nombre: '2019',
                files: [
                  {
                    id: 3,
                    tipo: 'excel',
                    nombre:
                      'plan estrategico revision I Trimestre de 2019.xlsx',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan estrategico/01. 2019/plan estrategico revision I Trimestre de 2019.xlsx',
                  },
                  {
                    id: 4,
                    tipo: 'excel',
                    nombre: 'planESTRATEGICOII2019.xlsx',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan estrategico/01. 2019/planESTRATEGICOII2019.xlsx',
                  },
                ],
              },
              {
                id: 5,
                nombre: '2018',
                files: [
                  {
                    id: 6,
                    tipo: 'excel',
                    nombre: 'planESTRATEGICOI2018.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan estrategico/02. 2018/planESTRATEGICOI2018.xls',
                  },
                  {
                    id: 7,
                    tipo: 'excel',
                    nombre: 'planESTRATEGICOII2018.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan estrategico/02. 2018/planESTRATEGICOII2018.xls',
                  },
                  {
                    id: 8,
                    tipo: 'excel',
                    nombre: 'planESTRATEGICOIII2018.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan estrategico/02. 2018/planESTRATEGICOIII2018.xls',
                  },
                  {
                    id: 9,
                    tipo: 'excel',
                    nombre: 'planESTRATEGICOIV2018.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan estrategico/02. 2018/planESTRATEGICOIV2018.xls',
                  },
                ],
              },
              {
                id: 10,
                nombre: '2017',
                files: [
                  {
                    id: 11,
                    tipo: 'excel',
                    nombre: 'planESTRATEGICOI2017.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan estrategico/03. 2017/planESTRATEGICOI2017.xls',
                  },
                  {
                    id: 12,
                    tipo: 'excel',
                    nombre: 'planESTRATEGICOII2017.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan estrategico/03. 2017/planESTRATEGICOII2017.xls',
                  },
                  {
                    id: 13,
                    tipo: 'excel',
                    nombre: 'planESTRATEGICOIII2017.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan estrategico/03. 2017/planESTRATEGICOIII2017.xls',
                  },
                  {
                    id: 14,
                    tipo: 'excel',
                    nombre: 'planESTRATEGICOIV2017.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan estrategico/03. 2017/planESTRATEGICOIV2017.xls',
                  },
                ],
              },
              {
                id: 15,
                nombre: '2016',
                files: [
                  {
                    id: 16,
                    tipo: 'excel',
                    nombre: 'planESTRATEGICOI2016.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan estrategico/04. 2016/planESTRATEGICOI2016.xls',
                  },
                  {
                    id: 17,
                    tipo: 'excel',
                    nombre: 'planESTRATEGICOII2016.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan estrategico/04. 2016/planESTRATEGICOII2016.xls',
                  },
                  {
                    id: 18,
                    tipo: 'excel',
                    nombre: 'planESTRATEGICOIII2016.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan estrategico/04. 2016/planESTRATEGICOIII2016.xls',
                  },
                  {
                    id: 19,
                    tipo: 'excel',
                    nombre: 'planESTRATEGICOIV2016.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan estrategico/04. 2016/planESTRATEGICOIV2016.xls',
                  },
                ],
              },
              {
                id: 20,
                nombre: '2015',
                files: [
                  {
                    id: 21,
                    tipo: 'excel',
                    nombre: 'planESTRATEGICOI2015.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan estrategico/05. 2015/planESTRATEGICOI2015.xls',
                  },
                  {
                    id: 22,
                    tipo: 'excel',
                    nombre: 'planESTRATEGICOIII2015.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan estrategico/05. 2015/planESTRATEGICOIII2015.xls',
                  },
                  {
                    id: 23,
                    tipo: 'excel',
                    nombre: 'planESTRATEGICOIV2015.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan estrategico/05. 2015/planESTRATEGICOIV2015.xls',
                  },
                ],
              },
              {
                id: 24,
                nombre: '2014',
                files: [
                  {
                    id: 25,
                    tipo: 'excel',
                    nombre: 'planESTRATEGICO2014.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan estrategico/06. 2014/planESTRATEGICO2014.xls',
                  },
                  {
                    id: 26,
                    tipo: 'excel',
                    nombre: 'planESTRATEGICOII2014.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan estrategico/06. 2014/planESTRATEGICOII2014.xls',
                  },
                  {
                    id: 27,
                    tipo: 'excel',
                    nombre: 'planESTRATEGICOIII2014.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan estrategico/06. 2014/planESTRATEGICOIII2014.xls',
                  },
                  {
                    id: 28,
                    tipo: 'excel',
                    nombre: 'planESTRATEGICOIV2014.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan estrategico/06. 2014/planESTRATEGICOIV2014.xls',
                  },
                ],
              },
              {
                id: 29,
                nombre: '2013',
                files: [
                  {
                    id: 30,
                    tipo: 'excel',
                    nombre: 'planESTRATEGICO2013.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan estrategico/07. 2013/planESTRATEGICO2013.xls',
                  },
                ],
              },
            ],
          },
          {
            id: 1,
            nombre: 'Seguimiento plan fortalecimiento',
            acordion: [
              {
                id: 6,
                nombre: '2018',
                files: [
                  {
                    id: 1,
                    tipo: 'excel',
                    nombre: 'PLANFORTALECIMIENTOJUL-AGO2018.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan fortalecimiento/01. 2018/PLANFORTALECIMIENTOJUL-AGO2018.xls',
                  },
                  {
                    id: 2,
                    tipo: 'excel',
                    nombre: 'PLANFORTALECIMIENTOMAR-ABR2018.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan fortalecimiento/01. 2018/PLANFORTALECIMIENTOMAR-ABR2018.xls',
                  },
                  {
                    id: 3,
                    tipo: 'excel',
                    nombre: 'PLANFORTALECIMIENTOMAY-JUN2018.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan fortalecimiento/01. 2018/PLANFORTALECIMIENTOMAY-JUN2018.xls',
                  },
                  {
                    id: 4,
                    tipo: 'excel',
                    nombre: 'PLANFORTALECIMIENTOSEP-OCT2018.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan fortalecimiento/01. 2018/PLANFORTALECIMIENTOSEP-OCT2018.xls',
                  },
                  {
                    id: 5,
                    tipo: 'excel',
                    nombre: 'SEGUIPLANFORTALECIMIENTOENE-FEB2018.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan fortalecimiento/01. 2018/SEGUIPLANFORTALECIMIENTOENE-FEB2018.xls',
                  },
                ],
              },
              {
                id: 6,
                nombre: '2017',
                files: [
                  {
                    id: 1,
                    tipo: 'excel',
                    nombre: 'PLANFORTALECIMIENTOENE-FEB2017.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan fortalecimiento/02. 2017/PLANFORTALECIMIENTOENE-FEB2017.xls',
                  },
                  {
                    id: 2,
                    tipo: 'excel',
                    nombre: 'PLANFORTALECIMIENTOJUL-AGO2017.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan fortalecimiento/02. 2017/PLANFORTALECIMIENTOJUL-AGO2017.xls',
                  },
                  {
                    id: 3,
                    tipo: 'excel',
                    nombre: 'PLANFORTALECIMIENTOMAR-ABR2017.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan fortalecimiento/02. 2017/PLANFORTALECIMIENTOMAR-ABR2017.xls',
                  },
                  {
                    id: 4,
                    tipo: 'excel',
                    nombre: 'PLANFORTALECIMIENTOMAY-JUN2017.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan fortalecimiento/02. 2017/PLANFORTALECIMIENTOMAY-JUN2017.xls',
                  },
                  {
                    id: 5,
                    tipo: 'excel',
                    nombre: 'PLANFORTALECIMIENTONOV-DIC2017.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan fortalecimiento/02. 2017/PLANFORTALECIMIENTONOV-DIC2017.xls',
                  },
                  {
                    id: 6,
                    tipo: 'excel',
                    nombre: 'PLANFORTALECIMIENTOSEP-OCT2017.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan fortalecimiento/02. 2017/PLANFORTALECIMIENTOSEP-OCT2017.xls',
                  },
                ],
              },
              {
                id: 7,
                nombre: '2016',
                files: [
                  {
                    id: 1,
                    tipo: 'excel',
                    nombre: 'PLANFORTALECIMIENTOENE-FEB2016.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan fortalecimiento/03. 2016/PLANFORTALECIMIENTOENE-FEB2016.xls',
                  },
                  {
                    id: 2,
                    tipo: 'excel',
                    nombre: 'PLANFORTALECIMIENTOJUL-AGO2016.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan fortalecimiento/03. 2016/PLANFORTALECIMIENTOJUL-AGO2016.xls',
                  },
                  {
                    id: 3,
                    tipo: 'excel',
                    nombre: 'PLANFORTALECIMIENTOMAR-ABR2016.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan fortalecimiento/03. 2016/PLANFORTALECIMIENTOMAR-ABR2016.xls',
                  },
                  {
                    id: 4,
                    tipo: 'excel',
                    nombre: 'PLANFORTALECIMIENTOMAY-JUN2016.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan fortalecimiento/03. 2016/PLANFORTALECIMIENTOMAY-JUN2016.xls',
                  },
                  {
                    id: 5,
                    tipo: 'excel',
                    nombre: 'PLANFORTALECIMIENTONOV-DIC2016.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan fortalecimiento/03. 2016/PLANFORTALECIMIENTONOV-DIC2016.xls',
                  },
                  {
                    id: 6,
                    tipo: 'excel',
                    nombre: 'PLANFORTALECIMIENTOSEP-OCT2016.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan fortalecimiento/03. 2016/PLANFORTALECIMIENTOSEP-OCT2016.xls',
                  },
                ],
              },
              {
                id: 8,
                nombre: '2015',
                files: [
                  {
                    id: 1,
                    tipo: 'excel',
                    nombre: 'PLANFORTALECIMIENTOENE-FEB2015.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan fortalecimiento/04. 2015/PLANFORTALECIMIENTOENE-FEB2015.xls',
                  },
                  {
                    id: 2,
                    tipo: 'excel',
                    nombre: 'PLANFORTALECIMIENTOJUL-AGO2015.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan fortalecimiento/04. 2015/PLANFORTALECIMIENTOJUL-AGO2015.xls',
                  },
                  {
                    id: 3,
                    tipo: 'excel',
                    nombre: 'PLANFORTALECIMIENTOMAR-ABR2015.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan fortalecimiento/04. 2015/PLANFORTALECIMIENTOMAR-ABR2015.xls',
                  },
                  {
                    id: 4,
                    tipo: 'excel',
                    nombre: 'PLANFORTALECIMIENTOMAY-JUN2015.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan fortalecimiento/04. 2015/PLANFORTALECIMIENTOMAY-JUN2015.xls',
                  },
                  {
                    id: 5,
                    tipo: 'excel',
                    nombre: 'PLANFORTALECIMIENTONOV-DIC2015.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan fortalecimiento/04. 2015/PLANFORTALECIMIENTONOV-DIC2015.xls',
                  },
                  {
                    id: 6,
                    tipo: 'excel',
                    nombre: 'PLANFORTALECIMIENTOSEP-OCT2015.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan fortalecimiento/04. 2015/PLANFORTALECIMIENTOSEP-OCT2015.xls',
                  },
                ],
              },
              {
                id: 1,
                nombre: '2014',
                files: [
                  {
                    id: 1,
                    tipo: 'excel',
                    nombre: 'PLANFORTALECIMIENTOENE-FEB2014.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan fortalecimiento/05. 2014/PLANFORTALECIMIENTOENE-FEB2014.xls',
                  },
                  {
                    id: 2,
                    tipo: 'excel',
                    nombre: 'PLANFORTALECIMIENTOJUL-AGO2014.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan fortalecimiento/05. 2014/PLANFORTALECIMIENTOJUL-AGO2014.xls',
                  },
                  {
                    id: 3,
                    tipo: 'excel',
                    nombre: 'PLANFORTALECIMIENTOMAR-ABRIL2014.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan fortalecimiento/05. 2014/PLANFORTALECIMIENTOMAR-ABRIL2014.xls',
                  },
                  {
                    id: 4,
                    tipo: 'excel',
                    nombre: 'PLANFORTALECIMIENTOMAY-JUNIO2014.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan fortalecimiento/05. 2014/PLANFORTALECIMIENTOMAY-JUNIO2014.xls',
                  },
                  {
                    id: 5,
                    tipo: 'excel',
                    nombre: 'PLANFORTALECIMIENTONOV-DIC2014.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan fortalecimiento/05. 2014/PLANFORTALECIMIENTONOV-DIC2014.xls',
                  },
                  {
                    id: 6,
                    tipo: 'excel',
                    nombre: 'PLANFORTALECIMIENTOSEP-OCT2014.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan fortalecimiento/05. 2014/PLANFORTALECIMIENTOSEP-OCT2014.xls',
                  },
                ],
              },
              {
                id: 2,
                nombre: '2013',
                files: [
                  {
                    id: 1,
                    tipo: 'excel',
                    nombre: 'PLANFORTALECIMIENTOENE-FEB2013.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan fortalecimiento/06. 2013/PLANFORTALECIMIENTOENE-FEB2013.xls',
                  },
                  {
                    id: 2,
                    tipo: 'excel',
                    nombre: 'SEGUIMIENTOPLANDEFORTALECIMIENTOSIGJULIO-AGO.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan fortalecimiento/06. 2013/SEGUIMIENTOPLANDEFORTALECIMIENTOSIGJULIO-AGO.xls',
                  },
                  {
                    id: 3,
                    tipo: 'excel',
                    nombre:
                      'SEGUIMIENTOPLANDEFORTALECIMIENTOSIGMARZO-ABRIL.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan fortalecimiento/06. 2013/SEGUIMIENTOPLANDEFORTALECIMIENTOSIGMARZO-ABRIL.xls',
                  },
                  {
                    id: 4,
                    tipo: 'excel',
                    nombre: 'SEGUIMIENTOPLANDEFORTALECIMIENTOSIGMAYO-JUNIO.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan fortalecimiento/06. 2013/SEGUIMIENTOPLANDEFORTALECIMIENTOSIGMAYO-JUNIO.xls',
                  },
                  {
                    id: 5,
                    tipo: 'excel',
                    nombre: 'SEGUIMIENTOPLANDEFORTALECIMIENTOSIGNOV-DICI.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan fortalecimiento/06. 2013/SEGUIMIENTOPLANDEFORTALECIMIENTOSIGNOV-DICI.xls',
                  },
                  {
                    id: 6,
                    tipo: 'excel',
                    nombre: 'SEGUIMIENTOPLANDEFORTALECIMIENTOSIGSEPT-OCTU.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan fortalecimiento/06. 2013/SEGUIMIENTOPLANDEFORTALECIMIENTOSIGSEPT-OCTU.xls',
                  },
                ],
              },
              {
                id: 3,
                nombre: '2012',
                files: [
                  {
                    id: 1,
                    tipo: 'excel',
                    nombre: 'PLAN DE FORTALECIMIENTO NOV - DIC.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan fortalecimiento/07. 2012/PLAN DE FORTALECIMIENTO NOV - DIC.xls',
                  },
                  {
                    id: 2,
                    tipo: 'pdf',
                    nombre: 'PLANFORTALECIMIENTOENEROFEBRERO2012.pdf',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan fortalecimiento/07. 2012/PLANFORTALECIMIENTOENEROFEBRERO2012.pdf',
                  },
                  {
                    id: 3,
                    tipo: 'excel',
                    nombre: 'PLANFORTALECIMIENTOJULIO-AGOSTO2012.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan fortalecimiento/07. 2012/PLANFORTALECIMIENTOJULIO-AGOSTO2012.xls',
                  },
                  {
                    id: 4,
                    tipo: 'excel',
                    nombre: 'PLANFORTALECIMIENTOMAYO-JUNIO2012.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan fortalecimiento/07. 2012/PLANFORTALECIMIENTOMAYO-JUNIO2012.xls',
                  },
                  {
                    id: 5,
                    tipo: 'excel',
                    nombre: 'PLANFORTALECIMIENTOSEPT-OCT2012.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan fortalecimiento/07. 2012/PLANFORTALECIMIENTOSEPT-OCT2012.xls',
                  },
                ],
              },
            ],
          },
          {
            id: 1,
            nombre: 'Seguimiento plan mejoramiento',
            acordion: [
              {
                id: 2,
                nombre: '2020',
                files: [
                  {
                    id: 3,
                    tipo: 'pdf',
                    nombre: 'PMI_I_TRIMESTRE_2020 PARA SEGUIMIENTO CI.pdf',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan mejoramiento/01. 2020/PMI_I_TRIMESTRE_2020 PARA SEGUIMIENTO CI.pdf',
                  },
                ],
              },
              {
                id: 4,
                nombre: '2019',
                files: [
                  {
                    id: 5,
                    tipo: 'excel',
                    nombre:
                      'MONITOREO AL PLAN DE MEJORAMIENTO IV TRIMESTRE DEL 2019.xlsx',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan mejoramiento/02. 2019/MONITOREO AL PLAN DE MEJORAMIENTO IV TRIMESTRE DEL 2019.xlsx',
                  },
                  {
                    id: 6,
                    tipo: 'excel',
                    nombre: 'PMI_III_TRIMESTRE_2019.xlsx',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan mejoramiento/02. 2019/PMI_III_TRIMESTRE_2019.xlsx',
                  },
                  {
                    id: 7,
                    tipo: 'excel',
                    nombre: 'PMI_II_TRIMESTRE_2019.xlsx',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan mejoramiento/02. 2019/PMI_II_TRIMESTRE_2019.xlsx',
                  },
                  {
                    id: 8,
                    tipo: 'excel',
                    nombre: 'PMI_I_TRIMESTRE_2019.xlsx',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan mejoramiento/02. 2019/PMI_I_TRIMESTRE_2019.xlsx',
                  },
                ],
              },
              {
                id: 9,
                nombre: '2018',
                files: [
                  {
                    id: 10,
                    tipo: 'excel',
                    nombre: 'PMI_III_TRIMESTRE_2018.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan mejoramiento/03. 2018/PMI_III_TRIMESTRE_2018.xls',
                  },
                  {
                    id: 11,
                    tipo: 'excel',
                    nombre: 'PMI_II_TRIMESTRE_2018.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan mejoramiento/03. 2018/PMI_II_TRIMESTRE_2018.xls',
                  },
                  {
                    id: 12,
                    tipo: 'excel',
                    nombre: 'PMI_I_TRIMESTRE_2018.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan mejoramiento/03. 2018/PMI_I_TRIMESTRE_2018.xls',
                  },
                ],
              },
              {
                id: 13,
                nombre: '2017',
                files: [
                  {
                    id: 14,
                    tipo: 'excel',
                    nombre: 'PMI_III_TRIMESTRE_2017.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan mejoramiento/04. 2017/PMI_III_TRIMESTRE_2017.xls',
                  },
                  {
                    id: 15,
                    tipo: 'excel',
                    nombre: 'PMI_II_TRIMESTRE_2017.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan mejoramiento/04. 2017/PMI_II_TRIMESTRE_2017.xls',
                  },
                  {
                    id: 16,
                    tipo: 'excel',
                    nombre: 'PMI_IV_TRIMESTRE_2017.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan mejoramiento/04. 2017/PMI_IV_TRIMESTRE_2017.xls',
                  },
                  {
                    id: 17,
                    tipo: 'excel',
                    nombre: 'PMI_I_TRIMESTRE_2017.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan mejoramiento/04. 2017/PMI_I_TRIMESTRE_2017.xls',
                  },
                ],
              },
              {
                id: 18,
                nombre: '2016',
                files: [
                  {
                    id: 19,
                    tipo: 'excel',
                    nombre: 'PMI_III_TRIMESTRE_2016.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan mejoramiento/05. 2016/PMI_III_TRIMESTRE_2016.xls',
                  },
                  {
                    id: 20,
                    tipo: 'excel',
                    nombre: 'PMI_II_TRIMESTRE_2016.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan mejoramiento/05. 2016/PMI_II_TRIMESTRE_2016.xls',
                  },
                  {
                    id: 21,
                    tipo: 'excel',
                    nombre: 'PMI_IV_TRIMESTRE_2016.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan mejoramiento/05. 2016/PMI_IV_TRIMESTRE_2016.xls',
                  },
                  {
                    id: 22,
                    tipo: 'excel',
                    nombre: 'PMI_I_TRIMESTRE_2016.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan mejoramiento/05. 2016/PMI_I_TRIMESTRE_2016.xls',
                  },
                ],
              },
              {
                id: 23,
                nombre: '2015',
                files: [
                  {
                    id: 24,
                    tipo: 'excel',
                    nombre: 'PMI_III_TRIMESTRE_2015.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan mejoramiento/06. 2015/PMI_III_TRIMESTRE_2015.xls',
                  },
                  {
                    id: 25,
                    tipo: 'excel',
                    nombre: 'PMI_II_TRIMESTRE_2015.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan mejoramiento/06. 2015/PMI_II_TRIMESTRE_2015.xls',
                  },
                  {
                    id: 26,
                    tipo: 'excel',
                    nombre: 'PMI_IV_TRIMESTRE_2015.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan mejoramiento/06. 2015/PMI_IV_TRIMESTRE_2015.xls',
                  },
                  {
                    id: 27,
                    tipo: 'excel',
                    nombre: 'PMI_I_TRIMESTRE_2015.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan mejoramiento/06. 2015/PMI_I_TRIMESTRE_2015.xls',
                  },
                ],
              },
              {
                id: 1,
                nombre: '2014',
                files: [
                  {
                    id: 1,
                    tipo: 'excel',
                    nombre: 'PMI_III_TRIMESTRE_2014.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan mejoramiento/07. 2014/PMI_III_TRIMESTRE_2014.xls',
                  },
                  {
                    id: 2,
                    tipo: 'excel',
                    nombre: 'PMI_II_TRIMESTRE_2014.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan mejoramiento/07. 2014/PMI_II_TRIMESTRE_2014.xls',
                  },
                  {
                    id: 3,
                    tipo: 'excel',
                    nombre: 'PMI_IV_TRIMESTRE_2014.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan mejoramiento/07. 2014/PMI_IV_TRIMESTRE_2014.xls',
                  },
                  {
                    id: 4,
                    tipo: 'excel',
                    nombre: 'PMI_I_TRIMESTRE_2014.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan mejoramiento/07. 2014/PMI_I_TRIMESTRE_2014.xls',
                  },
                ],
              },
              {
                id: 2,
                nombre: '2013',
                files: [
                  {
                    id: 1,
                    tipo: 'excel',
                    nombre: 'PMI_III_TRIMESTRE_2013.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan mejoramiento/08. 2013/PMI_III_TRIMESTRE_2013.xls',
                  },
                  {
                    id: 2,
                    tipo: 'excel',
                    nombre: 'PMI_II_TRIMESTRE_2013.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan mejoramiento/08. 2013/PMI_II_TRIMESTRE_2013.xls',
                  },
                  {
                    id: 3,
                    tipo: 'excel',
                    nombre: 'PMI_IV_TRIMESTRE_2013.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan mejoramiento/08. 2013/PMI_IV_TRIMESTRE_2013.xls',
                  },
                  {
                    id: 4,
                    tipo: 'excel',
                    nombre: 'PMI_I_TRIMESTRE_2013.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan mejoramiento/08. 2013/PMI_I_TRIMESTRE_2013.xls',
                  },
                ],
              },
              {
                id: 3,
                nombre: '2012',
                files: [
                  {
                    id: 1,
                    tipo: 'excel',
                    nombre: 'PMI_III_TRIMESTRE_2012.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan mejoramiento/09. 2012/PMI_III_TRIMESTRE_2012.xls',
                  },
                  {
                    id: 2,
                    tipo: 'excel',
                    nombre: 'PMI_IV_TRIMESTRE_2012.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan mejoramiento/09. 2012/PMI_IV_TRIMESTRE_2012.xls',
                  },
                  {
                    id: 3,
                    tipo: 'excel',
                    nombre: 'PMI_I_SEMESTRE_2012.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan mejoramiento/09. 2012/PMI_I_SEMESTRE_2012.xls',
                  },
                ],
              },
              {
                id: 4,
                nombre: '2011',
                files: [
                  {
                    id: 1,
                    tipo: 'pdf',
                    nombre: 'PMI_III_TRIMESTRE_2011.pdf',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan mejoramiento/10. 2011/PMI_III_TRIMESTRE_2011.pdf',
                  },
                  {
                    id: 2,
                    tipo: 'pdf',
                    nombre: 'PMI_II_TRIMESTRE_2011.pdf',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan mejoramiento/10. 2011/PMI_II_TRIMESTRE_2011.pdf',
                  },
                  {
                    id: 3,
                    tipo: 'excel',
                    nombre: 'PMI_IV_TRIMESTRE_2011.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan mejoramiento/10. 2011/PMI_IV_TRIMESTRE_2011.xls',
                  },
                  {
                    id: 4,
                    tipo: 'excel',
                    nombre: 'PMI_I_TRIMESTRE_2011.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento plan mejoramiento/10. 2011/PMI_I_TRIMESTRE_2011.xls',
                  },
                ],
              },
            ],
          },
          {
            id: 1,
            nombre: 'Seguimiento verificacion producto no conforme',
            acordion: [
              {
                id: 1,
                nombre: '2019',
                files: [
                  {
                    id: 1,
                    tipo: 'excel',
                    nombre:
                      'VerificacionProductoNoConformeIIITrimestre2019.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento verificacion producto no conforme/01. 2019/VerificacionProductoNoConformeIIITrimestre2019.xls',
                  },
                  {
                    id: 2,
                    tipo: 'excel',
                    nombre: 'VerificacionProductoNoConformeIITrimestre2019.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento verificacion producto no conforme/01. 2019/VerificacionProductoNoConformeIITrimestre2019.xls',
                  },
                  {
                    id: 3,
                    tipo: 'excel',
                    nombre: 'VerificacionProductoNoConformeITrimestre2019.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento verificacion producto no conforme/01. 2019/VerificacionProductoNoConformeITrimestre2019.xls',
                  },
                ],
              },
              {
                id: 2,
                nombre: '2018',
                files: [
                  {
                    id: 1,
                    tipo: 'excel',
                    nombre:
                      'VerificacionProductoNoConformeIIITrimestre2018.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento verificacion producto no conforme/02. 2018/VerificacionProductoNoConformeIIITrimestre2018.xls',
                  },
                  {
                    id: 2,
                    tipo: 'excel',
                    nombre: 'VerificacionProductoNoConformeIITrimestre2018.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento verificacion producto no conforme/02. 2018/VerificacionProductoNoConformeIITrimestre2018.xls',
                  },
                  {
                    id: 3,
                    tipo: 'excel',
                    nombre: 'VerificacionProductoNoConformeITrimestre2018.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento verificacion producto no conforme/02. 2018/VerificacionProductoNoConformeITrimestre2018.xls',
                  },
                ],
              },
              {
                id: 3,
                nombre: '2017',
                files: [
                  {
                    id: 1,
                    tipo: 'excel',
                    nombre:
                      'VerificacionProductoNoConformeIIITrimestre2017.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento verificacion producto no conforme/03. 2017/VerificacionProductoNoConformeIIITrimestre2017.xls',
                  },
                  {
                    id: 2,
                    tipo: 'excel',
                    nombre: 'VerificacionProductoNoConformeIITrimestre2017.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento verificacion producto no conforme/03. 2017/VerificacionProductoNoConformeIITrimestre2017.xls',
                  },
                  {
                    id: 3,
                    tipo: 'excel',
                    nombre: 'VerificacionProductoNoConformeITrimestre2017.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento verificacion producto no conforme/03. 2017/VerificacionProductoNoConformeITrimestre2017.xls',
                  },
                  {
                    id: 4,
                    tipo: 'excel',
                    nombre: 'VerificacionProductoNoConformeIVTrimestre2017.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento verificacion producto no conforme/03. 2017/VerificacionProductoNoConformeIVTrimestre2017.xls',
                  },
                ],
              },
              {
                id: 4,
                nombre: '2016',
                files: [
                  {
                    id: 1,
                    tipo: 'excel',
                    nombre:
                      'VerificacionProductoNoConformeIIITrimestre2016.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento verificacion producto no conforme/04. 2016/VerificacionProductoNoConformeIIITrimestre2016.xls',
                  },
                  {
                    id: 2,
                    tipo: 'excel',
                    nombre: 'VerificacionProductoNoConformeITrimestre2016.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento verificacion producto no conforme/04. 2016/VerificacionProductoNoConformeITrimestre2016.xls',
                  },
                  {
                    id: 3,
                    tipo: 'excel',
                    nombre: 'VerificacionProductoNoConformeIVTrimestre2016.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento verificacion producto no conforme/04. 2016/VerificacionProductoNoConformeIVTrimestre2016.xls',
                  },
                ],
              },
              {
                id: 5,
                nombre: '2015',
                files: [
                  {
                    id: 1,
                    tipo: 'excel',
                    nombre: 'VerificacionProductoNoConformeIVTrimestre2015.xls',
                    url: '/assets/files/estado_sistema_oci/Seguimiento y Evaluación de Planes Institucionales/Seguimiento verificacion producto no conforme/05. 2015/VerificacionProductoNoConformeIVTrimestre2015.xls',
                  },
                ],
              },
            ],
          },
        ],
      },
    ];
  }
}
