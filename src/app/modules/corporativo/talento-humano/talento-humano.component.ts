import { Component } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { NgFor } from '@angular/common';
import {
  AcordionFiles,
  AcordionAnidadoFiles,
  AcordionAnidado,
} from '../../../interfaces/acordion';

@Component({
  selector: 'app-talento-humano',
  standalone: true,
  imports: [NgFor, NgbAccordionModule],
  templateUrl: './talento-humano.component.html',
  styleUrl: './talento-humano.component.css',
})
export class TalentoHumanoComponent {
  items: AcordionAnidado[] = [];
  items2: AcordionAnidadoFiles[] = [];
  items3: AcordionFiles[] = [];
  constructor() {
    this.items = [
      {
        id: 1,
        nombre: 'ACUERDOS DE GESTION',
        acordion: [
          {
            id: 1,
            nombre: 'CONCERTACION ACUERDOS DE GESTION',
            acordion: [
              {
                id: 1,
                nombre: '2025 ',
                files: [
                  {
                    id: 1,
                    tipo: 'pdf',
                    nombre:
                      'CONCERTACIÓN ACUERDOS DE GESTIÓN SECRETARIO GENERAL 2025.pdf',
                    url: '/assets/files/corporativo/talento-humano/ACUERDOS%20DE%20GESTION/CONCERTACION%20ACUERDOS%20DE%20GESTION/2025/CONCERTACIÓN ACUERDOS DE GESTIÓN SECRETARIO GENERAL 2025.pdf',
                  },
                  {
                    id: 2,
                    tipo: 'pdf',
                    nombre: 'CONCERTACIÓN ACUERDOS DE GESTIÓN SUBDIRECTOR FINANCIERO 2025.pdf',
                    url: '/assets/files/corporativo/talento-humano/ACUERDOS%20DE%20GESTION/CONCERTACION%20ACUERDOS%20DE%20GESTION/2025/CONCERTACIÓN ACUERDOS DE GESTIÓN SUBDIRECTOR FINANCIERO 2025.pdf',
                  },
                  {
                    id: 3,
                    tipo: 'pdf',
                    nombre: 'CONCERTACIÓN ACUERDOS DE GESTIÓN SUBDIRECTORA DE PRESTACIONES SOCIALES 2025.pdf ',

                    url: '/assets/files/corporativo/talento-humano/ACUERDOS%20DE%20GESTION/CONCERTACION%20ACUERDOS%20DE%20GESTION/2025/CONCERTACIÓN ACUERDOS DE GESTIÓN SUBDIRECTORA DE PRESTACIONES SOCIALES 2025.pdf',
                  },
                ],
              },
              {
                id: 1,
                nombre: '2024 ',
                files: [
                  {
                    id: 1,
                    tipo: 'pdf',
                    nombre:
                      'EVALUACIÓN ACUERDOS DE GESTIÓN SECRETARIO GENERAL 2024.pdf',
                    url: '/assets/files/corporativo/talento-humano/ACUERDOS%20DE%20GESTION/CONCERTACION%20ACUERDOS%20DE%20GESTION/2024/EVALUACIÓN ACUERDOS DE GESTIÓN SECRETARIO GENERAL 2024.pdf',
                  },
                  {
                    id: 2,
                    tipo: 'pdf',
                    nombre:
                      'EVALUACIÓN ACUERDOS DE GESTIÓN SUBDIRECTOR FINANCIERO 2024.pdf',
                    url: '/assets/files/corporativo/talento-humano/ACUERDOS%20DE%20GESTION/CONCERTACION%20ACUERDOS%20DE%20GESTION/2024/EVALUACIÓN ACUERDOS DE GESTIÓN SUBDIRECTOR FINANCIERO 2024.pdf',
                  },
                  {
                    id: 3,
                    tipo: 'pdf',
                    nombre:
                      'EVALUACIÓN ACUERDOS DE GESTIÓN SUBDIRECTORA PRESTACIONES SOCIALES 2024.pdf ',

                    url: '/assets/files/corporativo/talento-humano/ACUERDOS%20DE%20GESTION/CONCERTACION%20ACUERDOS%20DE%20GESTION/2024/EVALUACIÓN ACUERDOS DE GESTIÓN SUBDIRECTORA PRESTACIONES SOCIALES 2024.pdf',
                  },
                ],
              },
              {
                id: 1,
                nombre: '2023 ',
                files: [
                  {
                    id: 1,
                    tipo: 'pdf',
                    nombre:
                      'CONCERTACION OBJETIVOS GERENCIALES 2023 SUBDIRECTOR DE PRESTACIONES SOCIALES.pdf ',
                    url: '/assets/files/corporativo/talento-humano/ACUERDOS%20DE%20GESTION/CONCERTACION%20ACUERDOS%20DE%20GESTION/01.%202023/CONCERTACION OBJETIVOS GERENCIALES 2023 SUBDIRECTOR DE PRESTACIONES SOCIALES.pdf',
                  },
                  {
                    id: 2,
                    tipo: 'pdf',
                    nombre:
                      ' CONCERTACION OBJETIVOS GERENCIALES 2023 SUBDIRECTORA FINANCIERA.pdf ',

                    url: '/assets/files/corporativo/talento-humano/ACUERDOS%20DE%20GESTION/CONCERTACION%20ACUERDOS%20DE%20GESTION/01.%202023/CONCERTACION%20OBJETIVOS%20GERENCIALES%202023%20SUBDIRECTORA%20FINANCIERA.pdf',
                  },
                  {
                    id: 3,
                    tipo: 'pdf',
                    nombre:
                      ' CONCERTACIÓN OBJETIVOS GERENCIALES 2023 SECRETARIO GENERAL .pdf ',

                    url: '/assets/files/corporativo/talento-humano/ACUERDOS%20DE%20GESTION/CONCERTACION%20ACUERDOS%20DE%20GESTION/01.%202023/CONCERTACIO%cc%81N%20OBJETIVOS%20GERENCIALES%202023%20SECRETARIO%20GENERAL%20.pdf',
                  },
                  {
                    id: 4,
                    tipo: 'pdf',
                    nombre: ' acuerdos de gestión dr carlos tovar.pdf ',

                    url: '/assets/files/corporativo/talento-humano/ACUERDOS%20DE%20GESTION/CONCERTACION%20ACUERDOS%20DE%20GESTION/01.%202023/acuerdos%20de%20gestio%cc%81n%20dr%20carlos%20tovar.pdf',
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
                    nombre:
                      ' CONCERTACION DE COMPROMISOS VIGENCIA 2022 SUBDIRECTORA FINANCIERA.pdf ',
                    url: '/assets/files/corporativo/talento-humano/ACUERDOS%20DE%20GESTION/CONCERTACION%20ACUERDOS%20DE%20GESTION/02.%202022/CONCERTACION%20DE%20COMPROMISOS%20VIGENCIA%202022%20SUBDIRECTORA%20FINANCIERA.pdf',
                  },
                  {
                    id: 2,
                    tipo: 'pdf',
                    nombre:
                      ' CONCERTACION OBJETIVOS GERENCIALES 2022 SECRETARIO GENERAL.pdf ',
                    url: '/assets/files/corporativo/talento-humano/ACUERDOS%20DE%20GESTION/CONCERTACION%20ACUERDOS%20DE%20GESTION/02.%202022/CONCERTACION%20OBJETIVOS%20GERENCIALES%202022%20SECRETARIO%20GENERAL.pdf',
                  },
                  {
                    id: 3,
                    tipo: 'pdf',
                    nombre:
                      ' CONCERTACION OBJETIVOS GERENCIALES 2022 SUBDIRECTOR PRESTACIONES SOCIALES (1).pdf ',
                    url: '/assets/files/corporativo/talento-humano/ACUERDOS%20DE%20GESTION/CONCERTACION%20ACUERDOS%20DE%20GESTION/02.%202022/CONCERTACION%20OBJETIVOS%20GERENCIALES%202022%20SUBDIRECTOR%20PRESTACIONES%20SOCIALES%20(1).aac.dela',
                  },
                ],
              },
              {
                id: 3,
                nombre: '2021',
                files: [
                  {
                    id: 1,
                    tipo: 'pdf',
                    nombre:
                      ' CONCERTACION DE COMPROMISOS GERENCIALES SECRETARIO GENERAL.pdf ',
                    url: '/assets/files/corporativo/talento-humano/ACUERDOS%20DE%20GESTION/CONCERTACION%20ACUERDOS%20DE%20GESTION/03.%202021/CONCERTACION%20DE%20COMPROMISOS%20GERENCIALES%20SECRETARIO%20GENERAL.pdf',
                  },
                  {
                    id: 2,
                    tipo: 'pdf',
                    nombre:
                      ' CONCERTACION DE COMPROMISOS GERENCIALES SUBDIRECTOR DE PRESTACIONES SOCIALES.pdf ',
                    url: '/assets/files/corporativo/talento-humano/ACUERDOS%20DE%20GESTION/CONCERTACION%20ACUERDOS%20DE%20GESTION/03.%202021/CONCERTACION%20DE%20COMPROMISOS%20GERENCIALES%20SUBDIRECTOR%20DE%20PRESTACIONES%20SOCIALES.aae.delay',
                  },
                  {
                    id: 3,
                    tipo: 'pdf',
                    nombre:
                      ' CONCERTACIÓN DE COMPROMISOS GERENCIALES SUBDIRECTORA FINANCIERA.pdf ',
                    url: '/assets/files/corporativo/talento-humano/ACUERDOS%20DE%20GESTION/CONCERTACION%20ACUERDOS%20DE%20GESTION/03.%202021/CONCERTACI%c3%93N%20DE%20COMPROMISOS%20GERENCIALES%20SUBDIRECTORA%20FINANCIERA.pdf',
                  },
                ],
              },
              {
                id: 4,
                nombre: '2020',
                files: [
                  {
                    id: 1,
                    tipo: 'pdf',
                    nombre:
                      ' CONCERTACIÓN DE COMPROMISOS 2020 SECRETARIO GENERAL vf.pdf ',
                    url: '/assets/files/corporativo/talento-humano/ACUERDOS%20DE%20GESTION/CONCERTACION%20ACUERDOS%20DE%20GESTION/04.%202020/CONCERTACIO%cc%81N%20DE%20COMPROMISOS%202020%20SECRETARIO%20GENERAL%20vf.pdf',
                  },
                  {
                    id: 2,
                    tipo: 'pdf',
                    nombre:
                      ' CONCERTACIÓN DE COMPROMISOS 2020 SUBDIRECTOR DE PRESTACIONES SOCIALES vf.pdf ',
                    url: '/assets/files/corporativo/talento-humano/ACUERDOS%20DE%20GESTION/CONCERTACION%20ACUERDOS%20DE%20GESTION/04.%202020/CONCERTACIO%cc%81N%20DE%20COMPROMISOS%202020%20SUBDIRECTOR%20DE%20PRESTACIONES%20SOCIALES%20vf.pdf',
                  },
                  {
                    id: 3,
                    tipo: 'pdf',
                    nombre:
                      ' CONCERTACIÓN DE COMPROMISOS 2020 SUBDIRECTORA FINANCIERA vf.pdf ',
                    url: '/assets/files/corporativo/talento-humano/ACUERDOS%20DE%20GESTION/CONCERTACION%20ACUERDOS%20DE%20GESTION/04.%202020/CONCERTACI%c3%93N%20DE%20COMPROMISOS%202020%20SUBDIRECTORA%20FINANCIERA%20vf.pdf',
                  },
                ],
              },
              {
                id: 5,
                nombre: '2019 ',
                files: [
                  {
                    id: 1,
                    tipo: 'pdf',
                    nombre:
                      ' ConcertacionAcuerdosGestionLuisGabrielMarin2019.pdf ',
                    url: '/assets/files/corporativo/talento-humano/ACUERDOS%20DE%20GESTION/CONCERTACION%20ACUERDOS%20DE%20GESTION/05.%202019/ConcertacionAcuerdosGestionLuisGabrielMarin2019.pdf',
                  },
                  {
                    id: 2,
                    tipo: 'pdf',
                    nombre:
                      ' ConcertacionAcuerdosGestionRubenAlonsoMendez2019.pdf ',
                    url: '/assets/files/corporativo/talento-humano/ACUERDOS%20DE%20GESTION/CONCERTACION%20ACUERDOS%20DE%20GESTION/05.%202019/ConcertacionAcuerdosGestionRubenAlonsoMendez2019.pdf',
                  },
                  {
                    id: 3,
                    tipo: 'pdf',
                    nombre:
                      ' ConcertacionAcuerdosGestionRuthStellaLujan2019.pdf ',
                    url: '/assets/files/corporativo/talento-humano/ACUERDOS%20DE%20GESTION/CONCERTACION%20ACUERDOS%20DE%20GESTION/05.%202019/ConcertacionAcuerdosGestionRuthStellaLujan2019.pdf',
                  },
                ],
              },
              {
                id: 6,
                nombre: '2018 ',
                files: [
                  {
                    id: 2,
                    tipo: 'pdf',
                    nombre:
                      ' Concertacion Acuerdos Gestion Jaime Azar SP2018.pdf ',
                    url: '/assets/files/corporativo/talento-humano/ACUERDOS%20DE%20GESTION/CONCERTACION%20ACUERDOS%20DE%20GESTION/06.%202018/Concertacion%20Acuerdos%20Gestion%20Jaime%20Azar%20SP2018.pdf',
                  },
                  {
                    id: 3,
                    tipo: 'pdf',
                    nombre:
                      ' Concertacion Acuerdos Gestion Luis Gabriel Marin 2018.pdf ',
                    url: '/assets/files/corporativo/talento-humano/ACUERDOS%20DE%20GESTION/CONCERTACION%20ACUERDOS%20DE%20GESTION/06.%202018/Concertacion%20Acuerdos%20Gestion%20Luis%20Gabriel%20Marin%202018.pdf',
                  },
                  {
                    id: 4,
                    tipo: 'pdf',
                    nombre:
                      ' Concertacion Acuerdos Gestion Luz Fany Vaca 2018.pdf ',
                    url: '/assets/files/corporativo/talento-humano/ACUERDOS%20DE%20GESTION/CONCERTACION%20ACUERDOS%20DE%20GESTION/06.%202018/Concertacion%20Acuerdos%20Gestion%20Luz%20Fany%20Vaca%202018.pdf',
                  },
                  {
                    id: 5,
                    tipo: 'pdf',
                    nombre:
                      ' Concertacion Acuerdos Gestion Ruben Alonso Mendez 2018.pdf ',
                    url: '/assets/files/corporativo/talento-humano/ACUERDOS%20DE%20GESTION/CONCERTACION%20ACUERDOS%20DE%20GESTION/06.%202018/Concertacion%20Acuerdos%20Gestion%20Ruben%20Alonso%20Mendez%202018.pdf',
                  },
                  {
                    id: 6,
                    tipo: 'pdf',
                    nombre:
                      ' Concertacion Acuerdos Gestion Ruth Stella Lujan 2018.pdf ',
                    url: '/assets/files/corporativo/talento-humano/ACUERDOS%20DE%20GESTION/CONCERTACION%20ACUERDOS%20DE%20GESTION/06.%202018/Concertacion%20Acuerdos%20Gestion%20Ruth%20Stella%20Lujan%202018.pdf',
                  },
                ],
              },
              {
                id: 7,
                nombre: '2017',
                files: [
                  {
                    id: 1,
                    tipo: 'pdf',
                    nombre:
                      ' Concertacion Acuerdos Gestion Humberto Malaver 2017.pdf ',
                    url: '/assets/files/corporativo/talento-humano/ACUERDOS%20DE%20GESTION/CONCERTACION%20ACUERDOS%20DE%20GESTION/07.%202017/Concertacion%20Acuerdos%20Gestion%20Humberto%20Malaver%202017.pdf',
                  },
                  {
                    id: 2,
                    tipo: 'pdf',
                    nombre:
                      ' Concertacion Acuerdos Gestion Luis Alfredo Escobar SG2017.pdf ',
                    url: '/assets/files/corporativo/talento-humano/ACUERDOS%20DE%20GESTION/CONCERTACION%20ACUERDOS%20DE%20GESTION/07.%202017/Concertacion%20Acuerdos%20Gestion%20Luis%20Alfredo%20Escobar%20SG2017.pdf',
                  },
                  {
                    id: 3,
                    tipo: 'pdf',
                    nombre:
                      ' Concertacion Acuerdos Gestion Luz Fany Vaca 2017.pdf ',
                    url: '/assets/files/corporativo/talento-humano/ACUERDOS%20DE%20GESTION/CONCERTACION%20ACUERDOS%20DE%20GESTION/07.%202017/Concertacion%20Acuerdos%20Gestion%20Luz%20Fany%20Vaca%202017.pdf',
                  },
                ],
              },
              {
                id: 8,
                nombre: '2016',
                files: [
                  {
                    id: 1,
                    tipo: 'pdf',
                    nombre:
                      ' Concertacion Acuerdos Gestion Jaime Azar SPS2016.pdf ',
                    url: '/assets/files/corporativo/talento-humano/ACUERDOS%20DE%20GESTION/CONCERTACION%20ACUERDOS%20DE%20GESTION/08.%202016/Concertacion%20Acuerdos%20Gestion%20Jaime%20Azar%20SPS2016.pdf',
                  },
                  {
                    id: 2,
                    tipo: 'pdf',
                    nombre:
                      ' Concertacion Acuerdos Gestion Luis Alfredo Escobar SG2016.pdf ',
                    url: '/assets/files/corporativo/talento-humano/ACUERDOS%20DE%20GESTION/CONCERTACION%20ACUERDOS%20DE%20GESTION/08.%202016/Concertacion%20Acuerdos%20Gestion%20Luis%20Alfredo%20Escobar%20SG2016.pdf',
                  },
                  {
                    id: 3,
                    tipo: 'pdf',
                    nombre:
                      ' Concertacion Acuerdos Gestion Luz Fany Vaca 2016.pdf ',
                    url: '/assets/files/corporativo/talento-humano/ACUERDOS%20DE%20GESTION/CONCERTACION%20ACUERDOS%20DE%20GESTION/08.%202016/Concertacion%20Acuerdos%20Gestion%20Luz%20Fany%20Vaca%202016.pdf',
                  },
                ],
              },
              {
                id: 9,
                nombre: '2015',
                files: [
                  {
                    id: 1,
                    tipo: 'pdf',
                    nombre:
                      ' Concertacion Acuerdos Gestion Jaime Azar SPS2015.pdf ',
                    url: '/assets/files/corporativo/talento-humano/ACUERDOS%20DE%20GESTION/CONCERTACION%20ACUERDOS%20DE%20GESTION/09.%202015/Concertacion%20Acuerdos%20Gestion%20Jaime%20Azar%20SPS2015.pdf',
                  },
                  {
                    id: 2,
                    tipo: 'pdf',
                    nombre:
                      ' Concertacion Acuerdos Gestion Luis Alfredo Escobar SG2015.pdf ',
                    url: '/assets/files/corporativo/talento-humano/ACUERDOS%20DE%20GESTION/CONCERTACION%20ACUERDOS%20DE%20GESTION/09.%202015/Concertacion%20Acuerdos%20Gestion%20Luis%20Alfredo%20Escobar%20SG2015.pdf',
                  },
                ],
              },
            ],
          },
          {
            id: 2,
            nombre: 'EVALUACION ACUERDOS DE GESTION ',
            acordion: [
              {
                id: 1,
                nombre: '2024 ',
                files: [
                  {
                    id: 1,
                    tipo: 'pdf',
                    nombre:
                      'EVALUACIÓN ACUERDOS DE GESTIÓN SECRETARIO GENERAL 2024.pdf',
                    url: '/assets/files/corporativo/talento-humano/ACUERDOS%20DE%20GESTION/EVALUACION ACUERDOS DE GESTION/2024/EVALUACIÓN ACUERDOS DE GESTIÓN SECRETARIO GENERAL 2024.pdf',
                  },
                  {
                    id: 2,
                    tipo: 'pdf',
                    nombre:
                      'EVALUACIÓN ACUERDOS DE GESTIÓN SUBDIRECTOR FINANCIERO 2024.pdf',
                    url: '/assets/files/corporativo/talento-humano/ACUERDOS%20DE%20GESTION/EVALUACION ACUERDOS DE GESTION/2024/EVALUACIÓN ACUERDOS DE GESTIÓN SUBDIRECTOR FINANCIERO 2024.pdf',
                  },
                  {
                    id: 3,
                    tipo: 'pdf',
                    nombre:
                      'EVALUACIÓN ACUERDOS DE GESTIÓN SUBDIRECTORA PRESTACIONES SOCIALES 2024.pdf ',

                    url: '/assets/files/corporativo/talento-humano/ACUERDOS%20DE%20GESTION/EVALUACION ACUERDOS DE GESTION/2024/EVALUACIÓN ACUERDOS DE GESTIÓN SUBDIRECTORA PRESTACIONES SOCIALES 2024.pdf',
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
                    nombre:
                      ' EVALUACION ACUERDOS DE GESTION SECRETARIO GENERAL 2022.pdf ',
                    url: '/assets/files/corporativo/talento-humano/ACUERDOS%20DE%20GESTION/EVALUACION%20ACUERDOS%20DE%20GESTION/01.%202023/EVALUACION%20ACUERDOS%20DE%20GESTION%20SECRETARIO%20GENERAL%202022.pdf',
                  },
                  {
                    id: 2,
                    tipo: 'pdf',
                    nombre:
                      ' EVALUACION ACUERDOS DE GESTION SUBDIRECTOR DE PRESTACIONES SOCIALES 2022.pdf ',
                    url: '/assets/files/corporativo/talento-humano/ACUERDOS%20DE%20GESTION/EVALUACION%20ACUERDOS%20DE%20GESTION/01.%202023/EVALUACION%20ACUERDOS%20DE%20GESTION%20SUBDIRECTOR%20DE%20PRESTACIONES%20SOCIALES%202022.pdf',
                  },
                  {
                    id: 3,
                    tipo: 'pdf',
                    nombre:
                      ' EVALUACION ACUERDOS DE GESTION SUBDIRECTORA FINANCIERA 2022.pdf ',
                    url: '/assets/files/corporativo/talento-humano/ACUERDOS%20DE%20GESTION/EVALUACION%20ACUERDOS%20DE%20GESTION/01.%202023/EVALUACION%20ACUERDOS%20DE%20GESTION%20SUBDIRECTORA%20FINANCIERA%202022.pdf',
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
                    nombre:
                      ' Evaluacion acuerdos de gestion Secretario General 2021.pdf ',
                    url: '/assets/files/corporativo/talento-humano/ACUERDOS%20DE%20GESTION/EVALUACION%20ACUERDOS%20DE%20GESTION/02.%202022/Evaluacion%20acuerdos%20de%20gestion%20Secretario%20General%202021.pdf',
                  },
                  {
                    id: 2,
                    tipo: 'pdf',
                    nombre:
                      ' Evaluacion acuerdos de gestion Subdirectoor de Prestaciones Sociales 2021.pdf ',
                    url: '/assets/files/corporativo/talento-humano/ACUERDOS%20DE%20GESTION/EVALUACION%20ACUERDOS%20DE%20GESTION/02.%202022/Evaluacion%20acuerdos%20de%20gestion%20Subdirectoor%20de%20Prestaciones%20Sociales%202021.pdf',
                  },
                  {
                    id: 3,
                    tipo: 'pdf',
                    nombre:
                      ' Evaluacion acuerdos de gestion Subdirectora Financiera 2021.pdf ',
                    url: '/assets/files/corporativo/talento-humano/ACUERDOS%20DE%20GESTION/EVALUACION%20ACUERDOS%20DE%20GESTION/02.%202022/Evaluacion%20acuerdos%20de%20gestion%20Subdirectora%20Financiera%202021.pdf',
                  },
                ],
              },
              {
                id: 3,
                nombre: '2021',
                files: [
                  {
                    id: 1,
                    tipo: 'pdf',
                    nombre:
                      ' EVALUACION GERENCIAL VIGENCIA 2020 SECRETARIO GENERAL.pdf ',
                    url: '/assets/files/corporativo/talento-humano/ACUERDOS%20DE%20GESTION/EVALUACION%20ACUERDOS%20DE%20GESTION/03.%202021/EVALUACION%20GERENCIAL%20VIGENCIA%202020%20SECRETARIO%20GENERAL.pdf',
                  },
                  {
                    id: 2,
                    tipo: 'pdf',
                    nombre:
                      ' EVALUACION GERENCIAL VIGENCIA 2020 SUBDIRECTOR DE PRESTACIONES SOCIALES.pdf ',
                    url: '/assets/files/corporativo/talento-humano/ACUERDOS%20DE%20GESTION/EVALUACION%20ACUERDOS%20DE%20GESTION/03.%202021/EVALUACION%20GERENCIAL%20VIGENCIA%202020%20SUBDIRECTOR%20DE%20PRESTACIONES%20SOCIALES.pdf',
                  },
                ],
              },
              {
                id: 4,
                nombre: '2020',
                files: [
                  {
                    id: 1,
                    tipo: 'pdf',
                    nombre:
                      ' EVALUACIÓN ACUERDOS DE GESTIÓN 2019 SECRETARIO GENERAL vf.pdf ',
                    url: '/assets/files/corporativo/talento-humano/ACUERDOS%20DE%20GESTION/EVALUACION%20ACUERDOS%20DE%20GESTION/04.%202020/EVALUACI%c3%93N%20ACUERDOS%20DE%20GESTI%c3%93N%202019%20SECRETARIO%20GENERAL%20vf.pdf',
                  },
                  {
                    id: 2,
                    tipo: 'pdf',
                    nombre:
                      ' EVALUACIÓN ACUERDOS DE GESTIÓN 2019 SUBDIRECTOR PRESTACIONES SOCIALES vf.pdf ',
                    url: '/assets/files/corporativo/talento-humano/ACUERDOS%20DE%20GESTION/EVALUACION%20ACUERDOS%20DE%20GESTION/04.%202020/EVALUACI%c3%93N%20ACUERDOS%20DE%20GESTI%c3%93N%202019%20SUBDIRECTOR%20PRESTACIONES%20SOCIALES%20vf.pdf',
                  },
                  {
                    id: 3,
                    tipo: 'pdf',
                    nombre:
                      ' EVALUACIÓN ACUERDOS DE GESTIÓN 2019 SUBDIRECTORA FINANCIERA vf.pdf ',
                    url: '/assets/files/corporativo/talento-humano/ACUERDOS%20DE%20GESTION/EVALUACION%20ACUERDOS%20DE%20GESTION/04.%202020/EVALUACI%c3%93N%20ACUERDOS%20DE%20GESTI%c3%93N%202019%20SUBDIRECTORA%20FINANCIERA%20vf.pdf',
                  },
                ],
              },
              {
                id: 5,
                nombre: '2019',
                files: [
                  {
                    id: 1,
                    tipo: 'pdf',
                    nombre: ' SecretarioGeneralRubenAlonsoMendezPineda.pdf ',
                    url: '/assets/files/corporativo/talento-humano/ACUERDOS%20DE%20GESTION/EVALUACION%20ACUERDOS%20DE%20GESTION/05.%202019/SecretarioGeneralRubenAlonsoMendezPineda.pdf',
                  },
                  {
                    id: 2,
                    tipo: 'pdf',
                    nombre: ' SubdirectorFinancieroRuthStellaLujanSanchez.pdf ',
                    url: '/assets/files/corporativo/talento-humano/ACUERDOS%20DE%20GESTION/EVALUACION%20ACUERDOS%20DE%20GESTION/05.%202019/SubdirectorFinancieroRuthStellaLujanSanchez.pdf',
                  },
                  {
                    id: 3,
                    tipo: 'pdf',
                    nombre:
                      ' SubdirectorPrestacionesSocialesLuisGabrielGarciaMarin.pdf ',
                    url: '/assets/files/corporativo/talento-humano/ACUERDOS%20DE%20GESTION/EVALUACION%20ACUERDOS%20DE%20GESTION/05.%202019/SubdirectorPrestacionesSocialesLuisGabrielGarciaMarin.pdf',
                  },
                ],
              },
              {
                id: 6,
                nombre: '2017',
                files: [
                  {
                    id: 1,
                    tipo: 'pdf',
                    nombre:
                      ' EvaluacionAcuerdosGestionHumbertoMalaverSPS2017.pdf ',
                    url: '/assets/files/corporativo/talento-humano/ACUERDOS%20DE%20GESTION/EVALUACION%20ACUERDOS%20DE%20GESTION/06.%202017/EvaluacionAcuerdosGestionHumbertoMalaverSPS2017.pdf',
                  },
                  {
                    id: 2,
                    tipo: 'pdf',
                    nombre:
                      ' EvaluacionAcuerdosGestionLuisAlfredoEscobarSG2017.pdf ',
                    url: '/assets/files/corporativo/talento-humano/ACUERDOS%20DE%20GESTION/EVALUACION%20ACUERDOS%20DE%20GESTION/06.%202017/EvaluacionAcuerdosGestionLuisAlfredoEscobarSG2017.pdf',
                  },
                  {
                    id: 3,
                    tipo: 'pdf',
                    nombre: ' EvaluacionAcuerdosGestionLuzFanyVacaSF2017.pdf ',
                    url: '/assets/files/corporativo/talento-humano/ACUERDOS%20DE%20GESTION/EVALUACION%20ACUERDOS%20DE%20GESTION/06.%202017/EvaluacionAcuerdosGestionLuzFanyVacaSF2017.pdf',
                  },
                ],
              },
              {
                id: 7,
                nombre: '2016',
                files: [
                  {
                    id: 1,
                    tipo: 'pdf',
                    nombre: ' EvaluacionAcuerdosGestionJaimeAzarSPS2016.pdf ',
                    url: '/assets/files/corporativo/talento-humano/ACUERDOS%20DE%20GESTION/EVALUACION%20ACUERDOS%20DE%20GESTION/07.%202016/EvaluacionAcuerdosGestionJaimeAzarSPS2016.pdf',
                  },
                  {
                    id: 2,
                    tipo: 'pdf',
                    nombre:
                      ' EvaluacionAcuerdosGestionLuisAlfredoEscobarSG2016.pdf ',
                    url: '/assets/files/corporativo/talento-humano/ACUERDOS%20DE%20GESTION/EVALUACION%20ACUERDOS%20DE%20GESTION/07.%202016/EvaluacionAcuerdosGestionLuisAlfredoEscobarSG2016.pdf',
                  },
                  {
                    id: 3,
                    tipo: 'pdf',
                    nombre: ' EvaluacionAcuerdosGestionLuzFanyVacaSF2016.pdf ',
                    url: '/assets/files/corporativo/talento-humano/ACUERDOS%20DE%20GESTION/EVALUACION%20ACUERDOS%20DE%20GESTION/07.%202016/EvaluacionAcuerdosGestionLuzFanyVacaSF2016.pdf',
                  },
                ],
              },
              {
                id: 8,
                nombre: '2015',
                files: [
                  {
                    id: 1,
                    tipo: 'pdf',
                    nombre:
                      ' EvaluacionAcuerdosGestionErnestoCarvajalSF2015.pdf ',
                    url: '/assets/files/corporativo/talento-humano/ACUERDOS%20DE%20GESTION/EVALUACION%20ACUERDOS%20DE%20GESTION/08.%202015/EvaluacionAcuerdosGestionErnestoCarvajalSF2015.pdf',
                  },
                  {
                    id: 2,
                    tipo: 'pdf',
                    nombre: ' EvaluacionAcuerdosGestionJaimeAzarSPS2015.pdf ',
                    url: '/assets/files/corporativo/talento-humano/ACUERDOS%20DE%20GESTION/EVALUACION%20ACUERDOS%20DE%20GESTION/08.%202015/EvaluacionAcuerdosGestionJaimeAzarSPS2015.pdf',
                  },
                  {
                    id: 3,
                    tipo: 'pdf',
                    nombre:
                      ' EvaluacionAcuerdosGestionLuisAlfredoEscobarSG12015.pdf ',
                    url: '/assets/files/corporativo/talento-humano/ACUERDOS%20DE%20GESTION/EVALUACION%20ACUERDOS%20DE%20GESTION/08.%202015/EvaluacionAcuerdosGestionLuisAlfredoEscobarSG12015.pdf',
                  },
                  {
                    id: 4,
                    tipo: 'pdf',
                    nombre:
                      ' EvaluacionAcuerdosGestionLuisAlfredoEscobarSG22015.pdf ',
                    url: '/assets/files/corporativo/talento-humano/ACUERDOS%20DE%20GESTION/EVALUACION%20ACUERDOS%20DE%20GESTION/08.%202015/EvaluacionAcuerdosGestionLuisAlfredoEscobarSG22015.pdf',
                  },
                ],
              },
              {
                id: 9,
                nombre: '2014',
                files: [
                  {
                    id: 1,
                    tipo: 'pdf',
                    nombre: ' EvaluacionAcuerdosGestionJaimeAzarSPS2014.pdf ',
                    url: '/assets/files/corporativo/talento-humano/ACUERDOS%20DE%20GESTION/EVALUACION%20ACUERDOS%20DE%20GESTION/09.%202014/EvaluacionAcuerdosGestionJaimeAzarSPS2014.pdf',
                  },
                ],
              },
            ],
          },
          {
            id: 3,
            nombre: 'SEGUIMIENTO ACUERDOS DE GESTION ',
            acordion: [
              {
                id: 1,
                nombre: '2022',
                files: [
                  {
                    id: 1,
                    tipo: 'pdf',
                    nombre:
                      ' SEGUIMIENTO ACUERDOS DE GESTIÓN  SUBDIRECTORA FINANCIERA 2022.pdf ',
                    url: '/assets/files/corporativo/talento-humano/ACUERDOS%20DE%20GESTION/SEGUIMIENTO%20ACUERDOS%20DE%20GESTION/01.%202022/SEGUIMIENTO%20ACUERDOS%20DE%20GESTI%c3%93N%20%20SUBDIRECTORA%20FINANCIERA%202022.pdf',
                  },
                  {
                    id: 2,
                    tipo: 'pdf',
                    nombre:
                      ' SEGUIMIENTO ACUERDOS DE GESTIÓN SECRETARIO GENERAL OBJETIVOS GERENCIALES 2022.pdf ',
                    url: '/assets/files/corporativo/talento-humano/ACUERDOS%20DE%20GESTION/SEGUIMIENTO%20ACUERDOS%20DE%20GESTION/01.%202022/SEGUIMIENTO%20ACUERDOS%20DE%20GESTI%c3%93N%20SECRETARIO%20GENERAL%20OBJETIVOS%20GERENCIALES%202022.add.delay',
                  },
                ],
              },
              {
                id: 2,
                nombre: '2021',
                files: [
                  {
                    id: 1,
                    tipo: 'pdf',
                    nombre:
                      ' SEGUIMIENTO ACUERDOS DE GESTION  SUBDIRECTORA FINANCIERA.pdf ',
                    url: '/assets/files/corporativo/talento-humano/ACUERDOS%20DE%20GESTION/SEGUIMIENTO%20ACUERDOS%20DE%20GESTION/02.%202021/SEGUIMIENTO%20ACUERDOS%20DE%20GESTION%20%20SUBDIRECTORA%20FINANCIERA.pdf',
                  },
                  {
                    id: 2,
                    tipo: 'pdf',
                    nombre:
                      ' SEGUIMIENTO COMPROMISOS GERENCIALES LUIS GABRIEL MARIN.pdf ',
                    url: '/assets/files/corporativo/talento-humano/ACUERDOS%20DE%20GESTION/SEGUIMIENTO%20ACUERDOS%20DE%20GESTION/02.%202021/SEGUIMIENTO%20COMPROMISOS%20GERENCIALES%20LUIS%20GABRIEL%20MARIN.pdf',
                  },
                  {
                    id: 3,
                    tipo: 'pdf',
                    nombre:
                      ' SEGUIMIENTO COMPROMISOS GERENCIALES SECRETARIO GENERAL.pdf',
                    url: '/assets/files/corporativo/talento-humano/ACUERDOS%20DE%20GESTION/SEGUIMIENTO%20ACUERDOS%20DE%20GESTION/02.%202021/SEGUIMIENTO%20COMPROMISOS%20GERENCIALES%20SECRETARIO%20GENERAL.pdf',
                  },
                ],
              },
              {
                id: 3,
                nombre: '2020',
                files: [
                  {
                    id: 1,
                    tipo: 'pdf',
                    nombre:
                      ' SEGUIMIENTO ACUERDOS DE GESTION VIGENCIA 2020 SECRETARIO GENERAL.pdf ',
                    url: '/assets/files/corporativo/talento-humano/ACUERDOS%20DE%20GESTION/SEGUIMIENTO%20ACUERDOS%20DE%20GESTION/03.%202020/SEGUIMIENTO%20ACUERDOS%20DE%20GESTION%20VIGENCIA%202020%20SECRETARIO%20GENERAL.pdf',
                  },
                  {
                    id: 2,
                    tipo: 'pdf',
                    nombre:
                      ' SEGUIMIENTO I SEM 2020 ACUERDOS DE GESTION - FINANCIERA.pdf ',
                    url: '/assets/files/corporativo/talento-humano/ACUERDOS%20DE%20GESTION/SEGUIMIENTO%20ACUERDOS%20DE%20GESTION/03.%202020/SEGUIMIENTO%20I%20SEM%202020%20ACUERDOS%20DE%20GESTION%20-%20FINANCIERA.pdf',
                  },
                  {
                    id: 3,
                    tipo: 'pdf',
                    nombre:
                      ' SEGUIMIENTO I SEM 2020 ACUERDOS DE GESTION - PRESTACIONES SOCIALES.pdf ',
                    url: '/assets/files/corporativo/talento-humano/ACUERDOS%20DE%20GESTION/SEGUIMIENTO%20ACUERDOS%20DE%20GESTION/03.%202020/SEGUIMIENTO%20I%20SEM%202020%20ACUERDOS%20DE%20GESTION%20-%20PRESTACIONES%20SOCIALES.pdf',
                  },
                ],
              },
            ],
          },
        ],
      },
    ];

    this.items2 = [
      {
        id: 1,
        nombre: 'ESCALA SALARIAL ',
        acordion: [
           {
            id: 1,
            nombre: '2025',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: ' DECRETO 0611 DEL 3 DE JUNIO DE 2025.pdf',
                url: '/assets/files/corporativo/talento-humano/ESCALA%20SALARIAL/2025/DECRETO 0611 DEL 3 DE JUNIO DE 2025.pdf',
              },
            ],
          },
          {
            id: 1,
            nombre: '2024',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: ' DECRETO 0301 DE 5 DE MARZO DE 2024.pdf ',
                url: '/assets/files/corporativo/talento-humano/ESCALA%20SALARIAL/01.%202024/DECRETO%200301%20DE%205%20DE%20MARZO%20DE%202024.pdf',
              },
            ],
          },
          {
            id: 2,
            nombre: '2023',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: ' DECRETO_ 0905_2023_ESCALA SALARIAL.pdf ',
                url: '/assets/files/corporativo/talento-humano/ESCALA%20SALARIAL/02.%202023/DECRETO_%200905_2023_ESCALA%20SALARIAL.pdf',
              },
            ],
          },
          {
            id: 3,
            nombre: '2022',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: ' DECRETO_473_2022 ESCALA SALARIAL.pdf ',
                url: '/assets/files/corporativo/talento-humano/ESCALA%20SALARIAL/03.%202022/DECRETO_473_2022%20ESCALA%20SALARIAL.pdf',
              },
            ],
          },
          {
            id: 4,
            nombre: '2021',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: ' Decreto 961 de 2021.pdf ',
                url: '/assets/files/corporativo/talento-humano/ESCALA%20SALARIAL/04.%202021/Decreto%20961%20de%202021.pdf',
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
                nombre: ' DECRETO 304 DEL 27 DE FEBRERO DE 2020.pdf.pdf ',
                url: '/assets/files/corporativo/talento-humano/ESCALA%20SALARIAL/05.%202020/DECRETO%20304%20DEL%2027%20DE%20FEBRERO%20DE%202020.pdf.pdf',
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
                nombre: ' ESCALA_SALARIAL_2019.pdf ',
                url: '/assets/files/corporativo/talento-humano/ESCALA%20SALARIAL/06.%202019/ESCALA_SALARIAL_2019.pdf',
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
                nombre: ' EscalaSalarial2018.pdf ',
                url: '/assets/files/corporativo/talento-humano/ESCALA%20SALARIAL/07.%202018/EscalaSalarial2018.pdf',
              },
            ],
          },
          {
            id: 8,
            nombre: '2017',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: ' EscalaSalarial2017.pdf ',
                url: '/assets/files/corporativo/talento-humano/ESCALA%20SALARIAL/08.%202017/EscalaSalarial2017.pdf',
              },
            ],
          },
          {
            id: 9,
            nombre: '2016',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: ' EscalaSalarial2016.pdf ',
                url: '/assets/files/corporativo/talento-humano/ESCALA%20SALARIAL/09.%202016/EscalaSalarial2016.pdf',
              },
            ],
          },
        ],
      },
      {
        id: 2,
        nombre: 'ESCALA VIATICOS ',
        acordion: [
           {
            id: 1,
            nombre: '2025',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: ' ESCALA DE VIATICOS Decreto 613 DE 2025.pdf ',
                url: '/assets/files/corporativo/talento-humano/ESCALA%20VIATICOS/09. 2025/Decretos_Salariales_613_de_2025_Departamento_Administrativo_de_la_Función_Pública.pdf',
              },
            ],
          },
          {
            id: 1,
            nombre: '2024',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: ' ESCALA DE VIATICOS Decreto 303 DE 2024.pdf ',
                url: '/assets/files/corporativo/talento-humano/ESCALA%20VIATICOS/01.%202024/ESCALA%20DE%20VIATICOS%20Decreto%20303%20DE%202024.pdf',
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
                nombre: ' Decreto_460_de_2022 viaticos.pdf ',
                url: '/assets/files/corporativo/talento-humano/ESCALA%20VIATICOS/02.%202022/Decreto_460_de_2022%20viaticos.pdf',
              },
            ],
          },
          {
            id: 3,
            nombre: '2021',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: ' DECRETO 979 DEL 22 DE AGOSTO DE 2021.pdf ',
                url: '/assets/files/corporativo/talento-humano/ESCALA%20VIATICOS/03.%202021/DECRETO%20979%20DEL%2022%20DE%20AGOSTO%20DE%202021.pdf',
              },
            ],
          },
          {
            id: 4,
            nombre: '2020',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: ' DECRETO 1175 DEL 27 DE AGOSTO DE 2020.pdf ',
                url: '/assets/files/corporativo/talento-humano/ESCALA%20VIATICOS/04.%202020/DECRETO%201175%20DEL%2027%20DE%20AGOSTO%20DE%202020.pdf',
              },
            ],
          },
          {
            id: 5,
            nombre: '2019',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre:
                  ' Escala de Viaticos - DECRETO 1013 DEL 06 DE JUNIO DE 2019.pdf ',
                url: '/assets/files/corporativo/talento-humano/ESCALA%20VIATICOS/05.%202019/Escala%20de%20Viaticos%20-%20DECRETO%201013%20DEL%2006%20DE%20JUNIO%20DE%202019.pdf',
              },
            ],
          },
          {
            id: 6,
            nombre: '2018',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: ' EscalaViaticos2018.pdf ',
                url: '/assets/files/corporativo/talento-humano/ESCALA%20VIATICOS/06.%202018/EscalaViaticos2018.pdf',
              },
            ],
          },
          {
            id: 7,
            nombre: '2017',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: ' EscalaViaticos2017.pdf ',
                url: '/assets/files/corporativo/talento-humano/ESCALA%20VIATICOS/07.%202017/EscalaViaticos2017.pdf',
              },
            ],
          },
          {
            id: 8,
            nombre: '2016',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                nombre: ' EscalaViaticos2016.pdf ',
                url: '/assets/files/corporativo/talento-humano/ESCALA%20VIATICOS/08.%202016/EscalaViaticos2016.pdf',
              },
            ],
          },
        ],
      },
    ];

    this.items3 = [
      {
        id: 1,
        nombre: 'EVALUACION DESEMPEÑO ',
        files: [
          {
            id: 1,
            tipo: 'pdf',
            nombre: ' 01. INFORME DESEMPEÑO LABORAL 2024 - 2025.pdf ',
            url: '/assets/files/corporativo/talento-humano/EVALUACION%20DESEMPEN%cc%83O/INFORME EVALUACIÓN DEL DESEMPENO LABORAL   2024- 2025.pdf',
          },
           {
            id: 1,
            tipo: 'pdf',
            nombre: ' 01. INFORME DESEMPEÑO LABORAL 2023 - 2024.pdf ',
            url: '/assets/files/corporativo/talento-humano/EVALUACION%20DESEMPEN%cc%83O/INFORME EVALUACIÓN DEL DESEMPENO LABORAL  2023- 2024.pdf',
          },
          {
            id: 1,
            tipo: 'pdf',
            nombre: ' 01. INFORME DESEMPEÑO LABORAL 2022 - 2023.pdf ',
            url: '/assets/files/corporativo/talento-humano/EVALUACION%20DESEMPEN%cc%83O/INFORME EVALUACION DEL DESEMPENO LABORAL  2022- 2023.pdf',
          },
          
          {
            id: 1,
            tipo: 'pdf',
            nombre: ' 01. INFORME DESEMPEÑO LABORAL 2021 - 2022.pdf ',
            url: '/assets/files/corporativo/talento-humano/EVALUACION%20DESEMPEN%cc%83O/01.%20INFORME%20DESEMPE%c3%91O%20LABORAL%202021%20-%202022.pdf',
          },
          {
            id: 2,
            tipo: 'pdf',
            nombre: ' 02. INFORME DESEMPEÑO LABORAL 2020 - 2021.pdf ',
            url: '/assets/files/corporativo/talento-humano/EVALUACION%20DESEMPEN%cc%83O/02.%20INFORME%20DESEMPE%c3%91O%20LABORAL%202020%20-%202021.pdf',
          },
          {
            id: 3,
            nombre: ' 03. INFORME DESEMPEÑO LABORAL 2018 - 2019.pdf ',
            tipo: 'pdf',
            url: '/assets/files/corporativo/talento-humano/EVALUACION%20DESEMPEN%cc%83O/03.%20INFORME%20DESEMPEN%cc%83O%20LABORAL%202018%20-%202019.pdf',
          },
          {
            id: 4,
            tipo: 'pdf',
            nombre: ' 04. INFORME_DESEMPEÑO_LABORAL_2017_2018.pdf ',
            url: '/assets/files/corporativo/talento-humano/EVALUACION%20DESEMPEN%cc%83O/04.%20INFORME_DESEMPEN%cc%83O_LABORAL_2017_2018.pdf',
          },
          {
            id: 5,
            tipo: 'pdf',
            nombre: ' 05. INFORME_DESEMPEÑO_LABORAL_2016_2017.pdf ',
            url: '/assets/files/corporativo/talento-humano/EVALUACION%20DESEMPEN%cc%83O/05.%20INFORME_DESEMPEN%cc%83O_LABORAL_2016_2017.pdf',
          },
          {
            id: 6,
            tipo: 'pdf',
            nombre: ' 06. INFORME_DESEMPEÑO_LABORAL_2015_2016.pdf ',
            url: '/assets/files/corporativo/talento-humano/EVALUACION%20DESEMPEN%cc%83O/06.%20INFORME_DESEMPEN%cc%83O_LABORAL_2015_2016.pdf',
          },
          {
            id: 7,
            tipo: 'pdf',
            nombre: ' 07. INFORME_DESEMPEÑO_LABORAL_2014_2015.pdf ',
            url: '/assets/files/corporativo/talento-humano/EVALUACION%20DESEMPEN%cc%83O/07.%20INFORME_DESEMPEN%cc%83O_LABORAL_2014_2015.pdf',
          },
        ],
      },
      {
        id: 2,
        nombre: 'MANUAL DE FUNCIONES ',
        files: [
          {
            id: 1,
            nombre:
              ' 01 RESOLUCIÓN 0774 DEL 27 ABRIL DE 2023 VERSION 22 MANUAL DE FUNCIONES.pdf ',
            tipo: 'pdf',
            url: '/assets/files/corporativo/talento-humano/MANUAL%20DE%20FUNCIONES/01%20RESOLUCI%c3%93N%200774%20DEL%2027%20ABRIL%20DE%202023%20VERSION%2022%20MANUAL%20DE%20FUNCIONES.pdf',
          },
          {
            id: 2,
            nombre: ' 02 MANUAL DE FUNCIONES  VERSION 21 CON ANEXOS.pdf ',
            tipo: 'pdf',
            url: '/assets/files/corporativo/talento-humano/MANUAL%20DE%20FUNCIONES/02%20MANUAL%20DE%20FUNCIONES%20%20VERSION%2021%20CON%20ANEXOS.pdf',
          },
          {
            id: 3,
            nombre:
              ' 03 RES 1636 MANUAL DE FUNCIONES Y COMPETENCIAS LABORALES PARA LOS EMPLEADOS DE PLANTA DEL FPSFNC V19.pdf ',
            tipo: 'pdf',
            url: '/assets/files/corporativo/talento-humano/MANUAL%20DE%20FUNCIONES/03%20RES%201636%20MANUAL%20DE%20FUNCIONES%20Y%20COMPETENCIAS%20LABORALES%20PARA%20LOS%20EMPLEADOS%20DE%20PLANTA%20DEL%20FPSFNC%20V19.pdf',
          },
          {
            id: 4,
            nombre:
              ' 04 RES 0088 MANUAL DE FUNCIONES Y COMPETENCIAS LABORALES PARA LOS EMPLEADOS DE PLANTA DEL FPSFNC V18.pdf ',
            tipo: 'pdf',
            url: '/assets/files/corporativo/talento-humano/MANUAL%20DE%20FUNCIONES/04%20RES%200088%20MANUAL%20DE%20FUNCIONES%20Y%20COMPETENCIAS%20LABORALES%20PARA%20LOS%20EMPLEADOS%20DE%20PLANTA%20DEL%20FPSFNC%20V18.pdf',
          },
        ],
      },
      {
        id: 3,
        nombre: 'VINCULACIÓN A TERCEROS ',
        files: [
          {
            id: 1,
            nombre: 'OFICIO VINCULACIÓN A TERCEROS.pdf',
            tipo: 'pdf',
            url: '/assets/files/corporativo/talento-humano/VINCULACI%c3%93N%20A%20TERCEROS/OFICIO%20VINCULACIO%cc%81N%20A%20TERCEROS.pdf',
          },
        ],
      },

       {
        id: 3,
        nombre: 'RUTAS DE ATENCIÓN Y PREVENCIÓN',
        files: [
          {
            id: 1,
            nombre: 'RUTA DE ATENCIÓN INTEGRAL A MUJERES VÍCTIMAS DE VIOLENCIA.PDF',
            tipo: 'pdf',
            url: '/assets/files/corporativo/talento-humano/ATENCION/Ruta de Atención Integral a Mujeres Víctimas de Violencia.pdf',
          },
           {
            id: 2,
            nombre: 'RUTA DE ATENCIÓN EN CASOS DE VIOLENCIA SEXUAL.PDF',
            tipo: 'pdf',
            url: '/assets/files/corporativo/talento-humano/ATENCION/Ruta de Atención en Casos de Violencia Sexual.pdf',
          },
           {
            id: 3,
            nombre: 'RUTA DE ATENCIÓN ACOSO LABORAL.PDF',
            tipo: 'pdf',
            url: '/assets/files/corporativo/talento-humano/ATENCION/Ruta de atención acoso laboral.pdf',
          },
          
        ],
      },
    ];
  }
}
