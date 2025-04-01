import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { AcordionAnidadoFiles } from '../../../interfaces/acordion';

@Component({
  selector: 'app-rendicion-cuentas',
  standalone: true,
  imports: [NgbAccordionModule, NgFor],
  templateUrl: './rendicion-cuentas.component.html',
  styleUrl: './rendicion-cuentas.component.css',
})
export class RendicionCuentasComponent {
  items: AcordionAnidadoFiles[] = [];
  constructor() {
    this.items = [
    
      {
        id: 1,
        nombre: '2024',
        files: [
          {
            id: 1,
            tipo: 'pdf',
            nombre: '01. INFORME DE GESTION ANUAL 2024',
            url: '/assets/files/rendicion_cuentas/01. 2024/INFORME DE GESTION ANUAL 2024.pdf',
          },
        ]
      },

      {
        id: 1,
        nombre: '2023',
        files: [
          {
            id: 1,
            tipo: 'pdf',
            nombre: '01. CRONOGRAMA AUDIENCIA V 2.0 - 2024.pdf',
            url: '/assets/files/rendicion_cuentas/01. 2023/01. CRONOGRAMA AUDIENCIA V 2.0 - 2024.pdf',
          },
          {
            id: 2,
            tipo: 'pdf',
            nombre: '02. INFORME DE GESTION ANUAL 2023.pdf',
            url: '/assets/files/rendicion_cuentas/01. 2023/02. INFORME DE GESTION ANUAL 2023.pdf',
          },
          {
            id: 3,
            tipo: 'pdf',
            nombre:
              '03. REGLAMENTO AUDIENCIA PÚBLICA DE RENDICIÓN CUENTAS  2023.pdf',
            url: '/assets/files/rendicion_cuentas/01. 2023/03. REGLAMENTO AUDIENCIA PÚBLICA DE RENDICIÓN CUENTAS  2023.pdf',
          },
          {
            id: 4,
            tipo: 'pdf',
            nombre: '04. PRESENTACION AUDIENCIA PUBLICA GESTION 2023.pdf',
            url: '/assets/files/rendicion_cuentas/01. 2023/04. PRESENTACION AUDIENCIA PUBLICA GESTION 2023.pdf',
          },
          {
            id: 5,
            tipo: 'pdf',
            nombre:
              '05. PREGUNTAS CIUDADANÍA RENDICIÓN DE CUENTAS VIGENCIA 2023 OPS.pdf',
            url: '/assets/files/rendicion_cuentas/01. 2023/05. PREGUNTAS CIUDADANÍA RENDICIÓN DE CUENTAS VIGENCIA 2023 OPS.pdf',
          },
          {
            id: 6,
            tipo: 'pdf',
            nombre: '06. ACTA RENDICIÓN DE CUENTAS GESTIÓN 2023 .pdf',
            url: '/assets/files/rendicion_cuentas/01. 2023/06. ACTA RENDICIÓN DE CUENTAS GESTIÓN 2023 .pdf',
          },
          {
            id: 7,
            tipo: 'pdf',
            nombre:
              '07. INFORME - EVALUACIÓN AUDIENCIA PÚBLICA GESTIÓN 2023.pdf',
            url: '/assets/files/rendicion_cuentas/01. 2023/07. INFORME - EVALUACIÓN AUDIENCIA PÚBLICA GESTIÓN 2023.pdf',
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
            nombre: '01. CRONOGRAMA  AUDIENCIA PUBLICA GESTIÓN 2022.pdf',
            url: '/assets/files/rendicion_cuentas/02. 2022/01. CRONOGRAMA  AUDIENCIA PUBLICA GESTIÓN 2022.pdf',
          },
          {
            id: 2,
            tipo: 'pdf',
            nombre: '02. INFORME DE GESTION ANUAL FPS 2022.pdf',
            url: '/assets/files/rendicion_cuentas/02. 2022/02. INFORME DE GESTION ANUAL FPS 2022.pdf',
          },
          {
            id: 3,
            tipo: 'pdf',
            nombre: '03. REGLAMENTO AUDIENCIA PUBLICA.pdf',
            url: '/assets/files/rendicion_cuentas/02. 2022/03. REGLAMENTO AUDIENCIA PUBLICA.pdf',
          },
          {
            id: 4,
            tipo: 'pdf',
            nombre: '04. Presentación Audiencia Pública Gestión 2022.pdf',
            url: '/assets/files/rendicion_cuentas/02. 2022/04. Presentación Audiencia Pública Gestión 2022.pdf',
          },
          {
            id: 5,
            tipo: 'pdf',
            nombre: '05. Acta Audiencia Pública Gestión 2022.pdf',
            url: '/assets/files/rendicion_cuentas/02. 2022/05. Acta Audiencia Pública Gestión 2022.pdf',
          },
          {
            id: 6,
            tipo: 'pdf',
            nombre:
              '06. Participación Ciudadana  Preguntas y Respuestas Audiencia Pública Gestión 2022.pdf',
            url: '/assets/files/rendicion_cuentas/02. 2022/06. Participación Ciudadana  Preguntas y Respuestas Audiencia Pública Gestión 2022.pdf',
          },
          {
            id: 7,
            tipo: 'pdf',
            nombre:
              '07. Informe - Evaluación Audiencia Pública Gestión 2022.pdf',
            url: '/assets/files/rendicion_cuentas/02. 2022/07. Informe - Evaluación Audiencia Pública Gestión 2022.pdf',
          },
          {
            id: 8,
            tipo: 'play',
            nombre:
              '08. Video desarrolló Transmisión Audiencia Pública Gestión 2022.mp4',
            url: '/assets/files/rendicion_cuentas/02. 2022/08. Video desarrolló Transmisión Audiencia Pública Gestión 2022.mp4',
          },
        ],
      },
      {
        id: 3,
        nombre: '2021',
        acordion: [
          {
            id: 1,
            nombre: 'Intervenciones y Respuestas Evento Audiencia Pública',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre:
                  '01 INTERVENCIONES Y REPUESTAS EVENTO RENDICION CUENTAS 2021.pdf',
                url: '/assets/files/rendicion_cuentas/03. 2021/Intervenciones y Respuestas Evento Audiencia Pública/01 INTERVENCIONES Y REPUESTAS EVENTO RENDICION CUENTAS 2021.pdf',
              },
              {
                id: 2,
                tipo: 'pdf',
                nombre:
                  '02 Gestion de Prestaciones Economicas 2 - 1202203100211271_00001.pdf',
                url: '/assets/files/rendicion_cuentas/03. 2021/Intervenciones y Respuestas Evento Audiencia Pública/02 Gestion de Prestaciones Economicas 2 - 1202203100211271_00001.pdf',
              },
              {
                id: 3,
                tipo: 'pdf',
                nombre:
                  '03 Oficina Juridica-Radicado Oficio Respuesta Rendicion de Cuentas..pdf',
                url: '/assets/files/rendicion_cuentas/03. 2021/Intervenciones y Respuestas Evento Audiencia Pública/03 Oficina Juridica-Radicado Oficio Respuesta Rendicion de Cuentas..pdf',
              },
              {
                id: 4,
                tipo: 'pdf',
                nombre: '04 OPS 1 - 202201200206911.pdf',
                url: '/assets/files/rendicion_cuentas/03. 2021/Intervenciones y Respuestas Evento Audiencia Pública/04 OPS 1 - 202201200206911.pdf',
              },
              {
                id: 5,
                tipo: 'pdf',
                nombre:
                  '05 Prestacion Servicios de Salud 1 - 202203200213661 CONSULTA MANUEL RUBIANO.pdf',
                url: '/assets/files/rendicion_cuentas/03. 2021/Intervenciones y Respuestas Evento Audiencia Pública/05 Prestacion Servicios de Salud 1 - 202203200213661 CONSULTA MANUEL RUBIANO.pdf',
              },
              {
                id: 6,
                tipo: 'pdf',
                nombre:
                  '06 Prestacion Servicios de Salud 2-202203200213651 CONSULTA JESUS MENDOZA.pdf',
                url: '/assets/files/rendicion_cuentas/03. 2021/Intervenciones y Respuestas Evento Audiencia Pública/06 Prestacion Servicios de Salud 2-202203200213651 CONSULTA JESUS MENDOZA.pdf',
              },
              {
                id: 7,
                tipo: 'pdf',
                nombre:
                  '07 Prestaciones Sociales- oficio Funalpenfer respuesta rendicion de cuentas 2021 202203000221691.pdf',
                url: '/assets/files/rendicion_cuentas/03. 2021/Intervenciones y Respuestas Evento Audiencia Pública/07 Prestaciones Sociales- oficio Funalpenfer respuesta rendicion de cuentas 2021 202203000221691.pdf',
              },
            ],
          },
        ],
        files: [
          {
            id: 1,
            tipo: 'pdf',
            nombre: '01. Informe de Gestión Anual FPS 2021.pdf',
            url: '/assets/files/rendicion_cuentas/03. 2021/01. Informe de Gestión Anual FPS 2021.pdf',
          },
          {
            id: 2,
            tipo: 'pdf',
            nombre: '02. Cronograma Audiencia Pública Gestión 2021.pdf',
            url: '/assets/files/rendicion_cuentas/03. 2021/02. Cronograma Audiencia Pública Gestión 2021.pdf',
          },
          {
            id: 3,
            tipo: 'pdf',
            nombre:
              '03. Reglamento Audiencia Pública de Rendición de Cuentas 2021.pdf',
            url: '/assets/files/rendicion_cuentas/03. 2021/03. Reglamento Audiencia Pública de Rendición de Cuentas 2021.pdf',
          },
          {
            id: 4,
            tipo: 'ppt',
            nombre: '04. Presentacion Rendicion de Cuentas 2021.pptx',
            url: '/assets/files/rendicion_cuentas/03. 2021/04. Presentacion Rendicion de Cuentas 2021.pptx',
          },
          {
            id: 5,
            tipo: 'pdf',
            nombre: '05. Acta Rendicion de Cuentas Vigencia 2021.pdf',
            url: '/assets/files/rendicion_cuentas/03. 2021/05. Acta Rendicion de Cuentas Vigencia 2021.pdf',
          },
          {
            id: 6,
            tipo: 'pdf',
            nombre:
              '06. Informe - Evaluación Foro Virtual Rendición de Cuentas 2021.pdf',
            url: '/assets/files/rendicion_cuentas/03. 2021/06. Informe - Evaluación Foro Virtual Rendición de Cuentas 2021.pdf',
          },
          {
            id: 7,
            tipo: 'pdf',
            nombre:
              '07. Preguntas Ciudadanía Rendición de Cuentas Vigencia 2021.pdf',
            url: '/assets/files/rendicion_cuentas/03. 2021/07. Preguntas Ciudadanía Rendición de Cuentas Vigencia 2021.pdf',
          },
          {
            id: 8,
            tipo: 'mp4',
            nombre:
              '08. Transmisión Audiencia Pública de Rendición de Cuentas FPSFNC 2021.mp4',
            url: '/assets/files/rendicion_cuentas/03. 2021/08. Transmisión Audiencia Pública de Rendición de Cuentas FPSFNC 2021.mp4',
          },
          {
            id: 9,
            tipo: 'pdf',
            nombre:
              '09. Informe de redes e interacciones Audiencia Pública 2021.pdf',
            url: '/assets/files/rendicion_cuentas/03. 2021/09. Informe de redes e interacciones Audiencia Pública 2021.pdf',
          },
        ],
      },
      {
        id: 2,
        nombre: '2020',
        files: [
          {
            id: 1,
            tipo: 'pdf',
            nombre: '01 INFORME  DE GESTION ANUAL 2020.pdf',
            url: '/assets/files/rendicion_cuentas/04. 2020/01 INFORME  DE GESTION ANUAL 2020.pdf',
          },
          {
            id: 2,
            tipo: 'pdf',
            nombre: '02 CRONOGRAMA  AUDIENCIA PUBLICA GESTIÓN 2020.pdf',
            url: '/assets/files/rendicion_cuentas/04. 2020/02 CRONOGRAMA  AUDIENCIA PUBLICA GESTIÓN 2020.pdf',
          },
          {
            id: 3,
            tipo: 'pdf',
            nombre:
              '03 REGLAMENTO AUDIENCIA PÚBLICA DE RENDICIÓN CUENTAS  2020.pdf',
            url: '/assets/files/rendicion_cuentas/04. 2020/03 REGLAMENTO AUDIENCIA PÚBLICA DE RENDICIÓN CUENTAS  2020.pdf',
          },
          {
            id: 4,
            tipo: 'pdf',
            nombre:
              '04 PRESENTACION AUDIENCIA PÚBLICA DE RENDICION DE CUENTAS FPS-FNC 2020.pdf',
            url: '/assets/files/rendicion_cuentas/04. 2020/04 PRESENTACION AUDIENCIA PÚBLICA DE RENDICION DE CUENTAS FPS-FNC 2020.pdf',
          },
          {
            id: 5,
            tipo: 'play',
            nombre: '11 VIDEO APERTURA RENDICION DE CUENTAS 2020 FPSFNC.mp4',
            url: '/assets/files/rendicion_cuentas/04. 2020/11 VIDEO APERTURA RENDICION DE CUENTAS 2020 FPSFNC.mp4',
          },
          {
            id: 6,
            tipo: 'play',
            nombre: '12 VIDEO CIERRE RENDICION DE CUENTAS 2020 FPSFNC.mp4',
            url: '/assets/files/rendicion_cuentas/04. 2020/12 VIDEO CIERRE RENDICION DE CUENTAS 2020 FPSFNC.mp4',
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
            nombre: '1. INFORME DE GESTIÓN ANUAL CONSOLIDADO 2019.pdf',
            url: '/assets/files/rendicion_cuentas/05. 2019/1. INFORME DE GESTIÓN ANUAL CONSOLIDADO 2019.pdf',
          },
          {
            id: 2,
            tipo: 'pdf',
            nombre:
              '2. PRESENTACION_RENDICION_DE_CUENTAS_FPS-FNC_2019_FINAL.pdf',
            url: '/assets/files/rendicion_cuentas/05. 2019/2. PRESENTACION_RENDICION_DE_CUENTAS_FPS-FNC_2019_FINAL.pdf',
          },
          {
            id: 3,
            tipo: 'pdf',
            nombre: '3. CRONOGRAMA  AUDIENCIA PUBLICA GESTIÓN 2019.pdf',
            url: '/assets/files/rendicion_cuentas/05. 2019/3. CRONOGRAMA  AUDIENCIA PUBLICA GESTIÓN 2019.pdf',
          },
          {
            id: 4,
            tipo: 'pdf',
            nombre:
              '4. REGLAMENTO AUDIENCIA PÚBLICA DE RENDICIÓN CUENTAS -2019- 07092020.pdf',
            url: '/assets/files/rendicion_cuentas/05. 2019/4. REGLAMENTO AUDIENCIA PÚBLICA DE RENDICIÓN CUENTAS -2019- 07092020.pdf',
          },
          {
            id: 5,
            tipo: 'youtube',
            nombre: '5. Vídeo institucional Audiencia Pública OPS',
            url: 'https://www.youtube.com/watch?v=e0JEjtZa3TU&feature=youtu.be',
          },
          {
            id: 6,
            tipo: 'youtube',
            nombre: '6. Vídeo institucional Audiencia Pública GTH',
            url: 'https://www.youtube.com/watch?v=2k7xZcB6wmo&feature=youtu.be',
          },
          {
            id: 7,
            tipo: 'youtube',
            nombre: '7. Apertura Audiencia Pública',
            url: 'https://www.youtube.com/watch?v=-g-Fae8eSWo',
          },
          {
            id: 8,
            tipo: 'youtube',
            nombre: '8. Cierre Audiencia Pública',
            url: 'https://www.youtube.com/watch?v=vcfPwz0tfrg',
          },
          {
            id: 5,
            tipo: 'pdf',
            nombre: '9. ACTA RENDICIÓN DE CUENTAS VIGENCIA 2019-FPSFNC.pdf',
            url: '/assets/files/rendicion_cuentas/05. 2019/9. ACTA RENDICIÓN DE CUENTAS VIGENCIA 2019-FPSFNC.pdf',
          },
          {
            id: 6,
            tipo: 'pdf',
            nombre:
              '10.INFORME-EVALUACIÓN FORO VIRTUAL  RENDICIÓN DE CUENTAS 2019.pdf',
            url: '/assets/files/rendicion_cuentas/05. 2019/10.INFORME-EVALUACIÓN FORO VIRTUAL  RENDICIÓN DE CUENTAS 2019.pdf',
          },
          {
            id: 7,
            tipo: 'pdf',
            nombre:
              '11.PROPUESTA, RECOMENDACIÓN U OBSERVACIÓN, DUDA O INQUIETUDES SOLICITUDES DE INTERVENCIÓN DE LOS USUARIOS Y DEMÁS PARTES .pdf',
            url: '/assets/files/rendicion_cuentas/05. 2019/11.PROPUESTA, RECOMENDACIÓN U OBSERVACIÓN, DUDA O INQUIETUDES SOLICITUDES DE INTERVENCIÓN DE LOS USUARIOS Y DEMÁS PARTES .pdf',
          },
          {
            id: 8,
            tipo: 'pdf',
            nombre:
              '12.INFORME DE REDES AUDIENCIA PÚBLICA DE RENDICION DE CUENTAS.pdf',
            url: '/assets/files/rendicion_cuentas/05. 2019/12.INFORME DE REDES AUDIENCIA PÚBLICA DE RENDICION DE CUENTAS.pdf',
          },
        ],
      },
      {
        id: 1,
        nombre: '2018',
        files: [
          {
            id: 1,
            tipo: 'pdf',
            nombre:
              'ACTA 01 AUDIENCIA PUBLICA DE RENDICION DE CUENTAS FPS-FCN 2018.pdf',
            url: '/assets/files/rendicion_cuentas/06. 2018/ACTA 01 AUDIENCIA PUBLICA DE RENDICION DE CUENTAS FPS-FCN 2018.pdf',
          },
          {
            id: 2,
            tipo: 'pdf',
            nombre: 'ANEXO- COMENTARIOS Y PREGUNTAS.pdf',
            url: '/assets/files/rendicion_cuentas/06. 2018/ANEXO- COMENTARIOS Y PREGUNTAS.pdf',
          },
          {
            id: 3,
            tipo: 'pdf',
            nombre: 'ANEXO- EVALUACION FORO.pdf',
            url: '/assets/files/rendicion_cuentas/06. 2018/ANEXO- EVALUACION FORO.pdf',
          },
          {
            id: 4,
            tipo: 'pdf',
            nombre: 'ANEXO- INFORME REDES SOCIALES .pdf',
            url: '/assets/files/rendicion_cuentas/06. 2018/ANEXO- INFORME REDES SOCIALES .pdf',
          },
          {
            id: 5,
            tipo: 'pdf',
            nombre: 'ConvocatoriaAudiencia2018.pdf',
            url: '/assets/files/rendicion_cuentas/06. 2018/ConvocatoriaAudiencia2018.pdf',
          },
          {
            id: 6,
            tipo: 'word',
            nombre: 'FORMTOINSCRIPCIONPROPUESTAS.doc',
            url: '/assets/files/rendicion_cuentas/06. 2018/FORMTOINSCRIPCIONPROPUESTAS.doc',
          },
          {
            id: 7,
            tipo: 'pdf',
            nombre: 'INFORMEDEGESTION2018.pdf',
            url: '/assets/files/rendicion_cuentas/06. 2018/INFORMEDEGESTION2018.pdf',
          },
          {
            id: 8,
            tipo: 'pdf',
            nombre: 'INFORME EVALUACION FORO VIRTUAL FPS 2018.pdf',
            url: '/assets/files/rendicion_cuentas/06. 2018/INFORME EVALUACION FORO VIRTUAL FPS 2018.pdf',
          },
          {
            id: 9,
            tipo: 'pdf',
            nombre: 'INFORME RENDICIÓN DE CUENTAS FPS 2018.pdf',
            url: '/assets/files/rendicion_cuentas/06. 2018/INFORME RENDICIÓN DE CUENTAS FPS 2018.pdf',
          },
        ],
      },
      {
        id: 2,
        nombre: '2017',
        files: [
          {
            id: 1,
            tipo: 'pdf',
            nombre: 'ANEXO- COMENTARIOS Y PREGUNTAS.pdf',
            url: '/assets/files/rendicion_cuentas/07. 2017/ANEXO- COMENTARIOS Y PREGUNTAS.pdf',
          },
          {
            id: 2,
            tipo: 'pdf',
            nombre: 'ANEXO- EVALUACION FORO.pdf',
            url: '/assets/files/rendicion_cuentas/07. 2017/ANEXO- EVALUACION FORO.pdf',
          },
          {
            id: 3,
            tipo: 'pdf',
            nombre: 'ANEXO-INFORME DE REDES SOCIALES.pdf',
            url: '/assets/files/rendicion_cuentas/07. 2017/ANEXO-INFORME DE REDES SOCIALES.pdf',
          },
          {
            id: 4,
            tipo: 'pdf',
            nombre: 'CONVOCATORIA AUDIENCIA 2017.pdf',
            url: '/assets/files/rendicion_cuentas/07. 2017/CONVOCATORIA AUDIENCIA 2017.pdf',
          },
          {
            id: 5,
            tipo: 'word',
            nombre: 'FORMTOINSCRIPCIONPROPUESTAS.doc',
            url: '/assets/files/rendicion_cuentas/07. 2017/FORMTOINSCRIPCIONPROPUESTAS.doc',
          },
          {
            id: 6,
            tipo: 'pdf',
            nombre: 'INFORMEDEGESTION2017.pdf',
            url: '/assets/files/rendicion_cuentas/07. 2017/INFORMEDEGESTION2017.pdf',
          },
          {
            id: 7,
            tipo: 'pdf',
            nombre: 'PRESENTACION INFORME FORO VIRTUAL2017.pdf',
            url: '/assets/files/rendicion_cuentas/07. 2017/PRESENTACION INFORME FORO VIRTUAL2017.pdf',
          },
          {
            id: 8,
            tipo: 'pdf',
            nombre: 'PRESENTACION_RENDICION_DE_CUENTAS_FPS-FNC_2018-11-14.pdf',
            url: '/assets/files/rendicion_cuentas/07. 2017/PRESENTACION_RENDICION_DE_CUENTAS_FPS-FNC_2018-11-14.pdf',
          },
        ],
      },
      {
        id: 1,
        nombre: '2016',
        files: [
          {
            id: 1,
            tipo: 'pdf',
            nombre: 'CONVOCATORIA AUDIENCIA 2016.pdf',
            url: '/assets/files/rendicion_cuentas/08. 2016/CONVOCATORIA AUDIENCIA 2016.pdf',
          },
          {
            id: 2,
            tipo: 'word',
            nombre: 'FORMTOINSCRIPCIONPROPUESTAS.doc',
            url: '/assets/files/rendicion_cuentas/08. 2016/FORMTOINSCRIPCIONPROPUESTAS.doc',
          },
          {
            id: 3,
            tipo: 'pdf',
            nombre: 'INFORME GESTION 2016.pdf',
            url: '/assets/files/rendicion_cuentas/08. 2016/INFORME GESTION 2016.pdf',
          },
          {
            id: 4,
            tipo: 'pdf',
            nombre: 'MEMORIAS 2017 GESTION 2016.pdf',
            url: '/assets/files/rendicion_cuentas/08. 2016/MEMORIAS 2017 GESTION 2016.pdf',
          },
          {
            id: 5,
            tipo: 'pdf',
            nombre: 'PRESENTARENDICUENTAS2016.pdf',
            url: '/assets/files/rendicion_cuentas/08. 2016/PRESENTARENDICUENTAS2016.pdf',
          },
          {
            id: 6,
            tipo: 'pdf',
            nombre: 'REGLAMENTO AUDIENCIA 2016.pdf',
            url: '/assets/files/rendicion_cuentas/08. 2016/REGLAMENTO AUDIENCIA 2016.pdf',
          },
        ],
      },
      {
        id: 2,
        nombre: '2015',
        files: [
          {
            id: 1,
            tipo: 'pdf',
            nombre: 'CONVOCATORIA AUDIENCIA 2015.pdf',
            url: '/assets/files/rendicion_cuentas/09. 2015/CONVOCATORIA AUDIENCIA 2015.pdf',
          },
          {
            id: 2,
            tipo: 'pdf',
            nombre: 'INFORME GESTION 2015.pdf',
            url: '/assets/files/rendicion_cuentas/09. 2015/INFORME GESTION 2015.pdf',
          },
          {
            id: 3,
            tipo: 'pdf',
            nombre: 'MEMORIAS 2016 GESTION 2015.pdf',
            url: '/assets/files/rendicion_cuentas/09. 2015/MEMORIAS 2016 GESTION 2015.pdf',
          },
          {
            id: 4,
            tipo: 'pdf',
            nombre: 'PRESENTARENDICUENTAS2015.pdf',
            url: '/assets/files/rendicion_cuentas/09. 2015/PRESENTARENDICUENTAS2015.pdf',
          },
          {
            id: 5,
            tipo: 'pdf',
            nombre: 'REGLAMENTO AUDIENCIA 2015.pdf',
            url: '/assets/files/rendicion_cuentas/09. 2015/REGLAMENTO AUDIENCIA 2015.pdf',
          },
        ],
      },
      {
        id: 3,
        nombre: '2014',
        files: [
          {
            id: 1,
            tipo: 'pdf',
            nombre: 'CONVOCATORIA AUDIENCIA 2014.pdf',
            url: '/assets/files/rendicion_cuentas/10. 2014/CONVOCATORIA AUDIENCIA 2014.pdf',
          },
          {
            id: 2,
            tipo: 'pdf',
            nombre: 'INFORME GESTION 2014.pdf',
            url: '/assets/files/rendicion_cuentas/10. 2014/INFORME GESTION 2014.pdf',
          },
          {
            id: 3,
            tipo: 'pdf',
            nombre: 'MEMORIAS 2015 GESTION 2014.pdf',
            url: '/assets/files/rendicion_cuentas/10. 2014/MEMORIAS 2015 GESTION 2014.pdf',
          },
          {
            id: 4,
            tipo: 'pdf',
            nombre: 'PRESENTARENDICUENTAS2014.pdf',
            url: '/assets/files/rendicion_cuentas/10. 2014/PRESENTARENDICUENTAS2014.pdf',
          },
          {
            id: 5,
            tipo: 'pdf',
            nombre: 'REGLAMENTO AUDIENCIA 2014.pdf',
            url: '/assets/files/rendicion_cuentas/10. 2014/REGLAMENTO AUDIENCIA 2014.pdf',
          },
        ],
      },
      {
        id: 4,
        nombre: '2013',
        files: [
          {
            id: 1,
            tipo: 'pdf',
            nombre: 'CONVOCATORIA AUDIENCIA 2013.pdf',
            url: '/assets/files/rendicion_cuentas/11. 2013/CONVOCATORIA AUDIENCIA 2013.pdf',
          },
          {
            id: 2,
            tipo: 'pdf',
            nombre: 'INFORME GESTION 2013.pdf',
            url: '/assets/files/rendicion_cuentas/11. 2013/INFORME GESTION 2013.pdf',
          },
          {
            id: 3,
            tipo: 'pdf',
            nombre: 'MEMORIAS 2014 GESTION 2013.pdf',
            url: '/assets/files/rendicion_cuentas/11. 2013/MEMORIAS 2014 GESTION 2013.pdf',
          },
          {
            id: 4,
            tipo: 'pdf',
            nombre: 'PRESENTARENDICUENTAS2013.pdf',
            url: '/assets/files/rendicion_cuentas/11. 2013/PRESENTARENDICUENTAS2013.pdf',
          },
          {
            id: 5,
            tipo: 'pdf',
            nombre: 'REGLAMENTO AUDIENCIA 2013.pdf',
            url: '/assets/files/rendicion_cuentas/11. 2013/REGLAMENTO AUDIENCIA 2013.pdf',
          },
        ],
      },
    ];
  }
}
