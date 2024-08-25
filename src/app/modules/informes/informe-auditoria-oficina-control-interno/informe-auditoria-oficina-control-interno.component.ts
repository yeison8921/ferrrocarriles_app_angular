import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { AcordionFiles } from '../../../interfaces/acordion';

@Component({
  selector: 'app-informe-auditoria-oficina-control-interno',
  standalone: true,
  imports: [NgbAccordionModule, NgFor],
  templateUrl: './informe-auditoria-oficina-control-interno.component.html',
  styleUrl: './informe-auditoria-oficina-control-interno.component.css',
})
export class InformeAuditoriaOficinaControlInternoComponent {
  items: AcordionFiles[] = [];
  constructor() {
    this.items = [
      {
        id: 1,
        nombre: '2022',
        files: [
          {
            id: 1,
            tipo: 'pdf',
            nombre: '01. AUDITORIA INTERNA GIT ATENCION AL CIUDADANO 2022.pdf',
            url: '/assets/files/report_audit_oci/01. 2022/01. AUDITORIA INTERNA GIT ATENCION AL CIUDADANO 2022.pdf',
          },
          {
            id: 2,
            tipo: 'pdf',
            nombre:
              '02. INFORME DE AUDITORIA AL PROCESO DE GESTIÓN DOCUMENTAL VIGENCIA 2022.pdf',
            url: '/assets/files/report_audit_oci/01. 2022/02. INFORME DE AUDITORIA AL PROCESO DE GESTIÓN DOCUMENTAL VIGENCIA 2022.pdf',
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
            nombre: '05 Info_Auditoria JDCA.pdf',
            url: '/assets/files/report_audit_oci/02. 2020/05 Info_Auditoria JDCA.pdf',
          },
          {
            id: 2,
            tipo: 'pdf',
            nombre: '06 - Info_Auditoria asesora talento humano.pdf',
            url: '/assets/files/report_audit_oci/02. 2020/06 - Info_Auditoria asesora talento humano.pdf',
          },
          {
            id: 3,
            tipo: 'pdf',
            nombre: '07 informe Auditoria Historias Laborales 04-11-20200.pdf',
            url: '/assets/files/report_audit_oci/02. 2020/07 informe Auditoria Historias Laborales 04-11-20200.pdf',
          },
          {
            id: 4,
            tipo: 'pdf',
            nombre:
              '08 Informe Auditoria de seguimiento - Caja Menor 04-11-2020.pdf',
            url: '/assets/files/report_audit_oci/02. 2020/08 Informe Auditoria de seguimiento - Caja Menor 04-11-2020.pdf',
          },
          {
            id: 5,
            tipo: 'pdf',
            nombre: '09 - Info_Auditoria direccionamiento estratégico.pdf',
            url: '/assets/files/report_audit_oci/02. 2020/09 - Info_Auditoria direccionamiento estratégico.pdf',
          },
          {
            id: 6,
            tipo: 'pdf',
            nombre: '10 - Info_Auditoria gestion de servicios de salud.pdf',
            url: '/assets/files/report_audit_oci/02. 2020/10 - Info_Auditoria gestion de servicios de salud.pdf',
          },
          {
            id: 7,
            tipo: 'pdf',
            nombre: '11 - Info_Auditoria prestaciones economicas.pdf',
            url: '/assets/files/report_audit_oci/02. 2020/11 - Info_Auditoria prestaciones economicas.pdf',
          },
          {
            id: 8,
            tipo: 'pdf',
            nombre: 'INFORME AUDITORIA PRESTACIONES ECONÓMICAS FINAL.pdf',
            url: '/assets/files/report_audit_oci/02. 2020/INFORME AUDITORIA PRESTACIONES ECONÓMICAS FINAL.pdf',
          },
          {
            id: 9,
            tipo: 'pdf',
            nombre: 'INFORME AUDITORIA atencion al ciudadano 28082020.pdf',
            url: '/assets/files/report_audit_oci/02. 2020/INFORME AUDITORIA atencion al ciudadano 28082020.pdf',
          },
          {
            id: 10,
            tipo: 'pdf',
            nombre: 'INFORME FINAL AUDITORIA GESTION DOCUMENTAL.pdf',
            url: '/assets/files/report_audit_oci/02. 2020/INFORME FINAL AUDITORIA GESTION DOCUMENTAL.pdf',
          },
          {
            id: 11,
            tipo: 'pdf',
            nombre: 'INFORME FINAL AUDITORIA PROCESO ASISTENCIA JURIDICA.pdf',
            url: '/assets/files/report_audit_oci/02. 2020/INFORME FINAL AUDITORIA PROCESO ASISTENCIA JURIDICA.pdf',
          },
          {
            id: 12,
            tipo: 'pdf',
            nombre: 'INFORME FINAL AUDITORIA PROCESO GESTION DE COBRO.pdf',
            url: '/assets/files/report_audit_oci/02. 2020/INFORME FINAL AUDITORIA PROCESO GESTION DE COBRO.pdf',
          },
          {
            id: 13,
            tipo: 'pdf',
            nombre:
              'INFORME FINAL AUDITORIA PROCESO GESTION DE RECURSOS FINANCIEROS - PRESUPUESTO.pdf',
            url: '/assets/files/report_audit_oci/02. 2020/INFORME FINAL AUDITORIA PROCESO GESTION DE RECURSOS FINANCIEROS - PRESUPUESTO.pdf',
          },
          {
            id: 14,
            tipo: 'pdf',
            nombre: 'INFORME FINAL AUDITORIA PROCESO GESTION DE TIC´S.pdf',
            url: '/assets/files/report_audit_oci/02. 2020/INFORME FINAL AUDITORIA PROCESO GESTION DE TIC´S.pdf',
          },
          {
            id: 15,
            tipo: 'pdf',
            nombre:
              'INFORME FINAL AUDITORIA PROCESO GESTIÓN DE RECURSOS FINANCIEROS - CONTABILIDAD.pdf',
            url: '/assets/files/report_audit_oci/02. 2020/INFORME FINAL AUDITORIA PROCESO GESTIÓN DE RECURSOS FINANCIEROS - CONTABILIDAD.pdf',
          },
          {
            id: 16,
            tipo: 'pdf',
            nombre: 'Informe Auditoria Gestion de servicios de salud 04.pdf',
            url: '/assets/files/report_audit_oci/02. 2020/Informe Auditoria Gestion de servicios de salud 04.pdf',
          },
          {
            id: 17,
            tipo: 'pdf',
            nombre: 'plan anual auditorias.pdf',
            url: '/assets/files/report_audit_oci/02. 2020/plan anual auditorias.pdf',
          },
        ],
      },
      {
        id: 3,
        nombre: '2019',
        files: [
          {
            id: 1,
            tipo: 'pdf',
            nombre: 'AUDITORIA INFORME ATENCIÓN AL CIUDADANO 2019.pdf',
            url: '/assets/files/report_audit_oci/03. 2019/AUDITORIA INFORME ATENCIÓN AL CIUDADANO 2019.pdf',
          },
          {
            id: 2,
            tipo: 'pdf',
            nombre: 'AUDITORIA INFORME FINAL CONTROL INTERNO DISCIPLINARIO.pdf',
            url: '/assets/files/report_audit_oci/03. 2019/AUDITORIA INFORME FINAL CONTROL INTERNO DISCIPLINARIO.pdf',
          },
          {
            id: 3,
            tipo: 'pdf',
            nombre: 'AUDITORIA INFORME FINAL GIT JURIDICA 2019.pdf',
            url: '/assets/files/report_audit_oci/03. 2019/AUDITORIA INFORME FINAL GIT JURIDICA 2019.pdf',
          },
          {
            id: 4,
            tipo: 'pdf',
            nombre: 'AUDITORIA INFORME MEDICION Y MEJORA DIC. DE  2019-1.pdf',
            url: '/assets/files/report_audit_oci/03. 2019/AUDITORIA INFORME MEDICION Y MEJORA DIC. DE  2019-1.pdf',
          },
          {
            id: 5,
            tipo: 'pdf',
            nombre:
              'AUDITORIA INFORME PRESTACIONES ECONOMICAS 2019 PRIMER SEMESTRE.pdf',
            url: '/assets/files/report_audit_oci/03. 2019/AUDITORIA INFORME PRESTACIONES ECONOMICAS 2019 PRIMER SEMESTRE.pdf',
          },
          {
            id: 6,
            tipo: 'pdf',
            nombre: 'AUDITORIA TICS  2019 PRIMER SEMESTRE.pdf',
            url: '/assets/files/report_audit_oci/03. 2019/AUDITORIA TICS  2019 PRIMER SEMESTRE.pdf',
          },
        ],
      },
      {
        id: 4,
        nombre: '2017',
        files: [
          {
            id: 1,
            tipo: 'pdf',
            nombre: 'InfoAuditoriaRecursosFinancierosISemes2017.pdf',
            url: '/assets/files/report_audit_oci/04. 2017/InfoAuditoriaRecursosFinancierosISemes2017.pdf',
          },
        ],
      },
      {
        id: 5,
        nombre: '2016',
        files: [
          {
            id: 1,
            tipo: 'pdf',
            nombre: 'InfoAuditoriaRecursosFinancierosAbril 2016.pdf',
            url: '/assets/files/report_audit_oci/05. 2016/InfoAuditoriaRecursosFinancierosAbril 2016.pdf',
          },
        ],
      },
      {
        id: 6,
        nombre: '2015',
        files: [
          {
            id: 1,
            tipo: 'pdf',
            nombre: 'InfoAuditoriaRecursosFinancierosMarzo2015.pdf',
            url: '/assets/files/report_audit_oci/06. 2015/InfoAuditoriaRecursosFinancierosMarzo2015.pdf',
          },
        ],
      },
    ];
  }
}
