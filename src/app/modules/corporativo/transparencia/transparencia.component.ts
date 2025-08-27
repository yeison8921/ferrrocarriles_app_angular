import { Component } from '@angular/core';
import { AcordionFiles } from '../../../interfaces/acordion';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-transparencia',
  standalone: true,
  imports: [NgbAccordionModule, NgFor],
  templateUrl: './transparencia.component.html',
  styleUrl: './transparencia.component.css',
})
export class TransparenciaComponent {
  items: AcordionFiles[] = [];
  constructor() {
    this.items = [
      {
        id: 1,
        nombre: 'Información de la Entidad',
        files: [
          {
            id: 1,
            tipo: 'link',
            nombre: 'Misión y Visión',
            url: '/corporativo/mision-y-vision/37',
          },
          {
            id: 2,
            tipo: 'link',
            nombre: 'Objetivos',
            url: '/corporativo/objetivos-institucionales/41',
          },
          {
            id: 3,
            tipo: 'link',
            nombre: 'Funciones',
            url: '/corporativo/funciones/38',
          },
          {
            id: 5,
            tipo: 'link',
            nombre: 'Organigrama',
            url: '/corporativo/organigrama/48',
          },
          {
            id: 6,
            tipo: 'link',
            nombre: 'Política del SIG',
            url: '/corporativo/politica-del-sistema-integrado-de-gestion/40',
          },
          {
            id: 7,
            tipo: 'link',
            nombre: 'Junta Directiva',
            url: '/corporativo/directorio-funcionarios-principales/193',
          },
          {
            id: 8,
            tipo: 'link',
            nombre: 'Directorio de Funcionarios Principales',
            url: '/corporativo/directorio-funcionarios-principales/193',
          },
          {
            id: 9,
            tipo: 'link',
            nombre: 'Directorio Institucional',
            url: '/corporativo/directorio-general-funcionarios-fps/192',
          },
          {
            id: 10,
            tipo: 'link',
            nombre: 'Directorio de Contratista',
            url: '/corporativo/directorio-de-contratistas-fps/221',
          },
          {
            id: 11,
            tipo: 'link',
            nombre: 'Directorio de Entidades',
            url: '/corporativo/directorio-de-entidades/209',
          },
          {
            id: 12,
            tipo: 'link',
            nombre: 'Preguntas Frecuentes',
            url: '/atencion-al-usuario/preguntas-frecuentes/121',
          },
          {
            id: 13,
            tipo: 'link',
            nombre: 'Glosario',
            url: '/atencion-al-usuario/glosario/117',
          },
          {
            id: 14,
            tipo: 'pdf',
            nombre: 'Carta de Trato Digno',
            url: '/assets/files/transparencia/CartaTratoDignoCiudadano(1).pdf',
          },
          {
            id: 15,
            tipo: 'link',
            nombre: 'PQRSDF',
            url: '/participa/222',
          },
          {
            id: 16,
            tipo: 'link',
            nombre: 'Consulta de Solicitudes',
            url: '/atencion-al-usuario/consulta-de-solicitudes/10',
          },
          {
            id: 17,
            tipo: 'link',
            nombre: 'Encuesta de Satisfacción',
            url: '/atencion-al-usuario/encuesta-de-satisfaccion/214',
          },
          {
            id: 19,
            tipo: 'link',
            nombre: 'Calendario de Actividades',
            url: '/atencion-al-usuario/calendario/114',
          },
          {
            id: 20,
            tipo: 'link',
            nombre: 'Eventos',
            url: '/sala-de-prensa/57',
          },
          {
            id: 21,
            tipo: 'link',
            nombre: 'Entidades que nos regulan',
            url: '/corporativo/entidades-que-nos-regulan/45',
          },
          {
            id: 22,
            tipo: 'link-ext',
            nombre: 'Hojas de Vida',
            url: '/tramites-y-servicios/tramites/54',
          },
        ],
      },
      {
        id: 2,
        nombre: 'Normatividad',
        files: [
          {
            id: 1,
            tipo: 'link',
            nombre: 'Marco Legal',
            url: '/corporativo/marco-legal/47',
          },
          {
            id: 2,
            tipo: 'pdf',
            nombre:
              'Justificación del Sistema Único de Información Normativa SUIN - FPSFNC',
            url: '/assets/files/transparencia/JUSTIFICACIÓN SUIN.pdf',
          },
        ],
      },
      {
        id: 3,
        nombre: 'Contratación',
        files: [
          {
            id: 1,
            tipo: 'link',
            nombre: 'Plan Anual de Adquisiciones',
            url: '/planeacion-gestion-y-control/plan-anual-de-adquisiciones/198',
          },
          {
            id: 2,
            tipo: 'link',
            nombre: 'Gestión de contratación',
            url: '/atencion-al-usuario/contratacion/97',
          },
          {
            id: 4,
            tipo: 'pdf',
            nombre: 'Manual de Contratación y Supervisión',
            url: '/assets/files/transparencia/APAJUOAJMS02 MANUAL DE CONTRATACIÓN Y SUPERVISIÓN V5 (1).pdf',
          },
          {
            id: 5,
            tipo: 'link',
            nombre:
              'Procedimientos, Lineamientos y Politicas de Adquisición y Compra',
            url: '/planeacion-gestion-y-control/procedimientos-lineamientos-y-politicas-de-adquisicion-y-compras/84',
          },
        ],
      },
      {
        id: 4,
        nombre: 'Planeación, presupuesto e informes',
        files: [
          {
            id: 1,
            tipo: 'link',
            nombre: 'Información contable y financiera',
            url: '/informes/informes-contaduria-general-de-la-nacion/65',
          },
          {
            id: 2,
            tipo: 'link',
            nombre: 'Estados Financieros',
            url: '/informacion-contable-y-financiera/informacion-financiera/89',
          },
          {
            id: 3,
            tipo: 'link',
            nombre: 'Informe Anual',
            url: '/informes/informes-anuales/59',
          },
          {
            id: 4,
            tipo: 'link',
            nombre: 'Planes de Acción',
            url: '/planeacion-gestion-y-control/plan-de-accion/64',
          },
          {
            id: 5,
            tipo: 'link',
            nombre: 'Planes Estratégicos',
            url: '/planeacion-gestion-y-control/plan-estrategico/63',
          },
          {
            id: 8,
            tipo: 'excel',
            nombre: 'Plan Anual de Austeriedad en el Gasto Público 2024',
            url: '/assets/files/transparencia/ESDESDIGFO23 FORMATO PLAN DE ACCION DE AUSTERIDAD EN EL GASTO PUBLICO   2024 (1).xlsx',
          },
          {
            id: 8,
            tipo: 'pdf',
            nombre: 'Informe Austeridad del Gasto I Semestre 2024',
            url: '/assets/files/transparencia/INFORME AUSTERIDAD I SEMESTRE SG.docx.pdf',
          },
          
          {
            id: 8,
            tipo: 'pdf',
            nombre: 'Informe Austeridad del Gasto II Semestre 2024',
            url: '/assets/files/transparencia/INFORME II SEMESTRE 2024 AUSTERIDAD EN EL GASTO PUBLICO (2).pdf',
          },

           {
            id: 8,
            tipo: 'xlsx',
            nombre: 'ESDESDIGFO23 FORMATO PLAN DE ACCION DE AUSTERIDAD EN EL GASTO PUBLICO II TRIMESTRE  2025 4.0',
            url: '/assets/files/transparencia/ESDESDIGFO23 FORMATO PLAN DE ACCION DE AUSTERIDAD EN EL GASTO PUBLICO II TRIMESTRE  2025 4.0.xlsx',
          },
          {
            id: 6,
            tipo: 'link',
            nombre: 'Plan de Anticorrupción y Atención al Ciudadano',
            url: '/planeacion-gestion-y-control/plan-de-anticorrupcion-y-atencion-al-ciudadano/74',
          },
          {
            id: 7,
            tipo: 'link',
            nombre: 'Proyecto Plan de Anticorrupción y Atención al Ciudadano',
            url: '/planeacion-gestion-y-control/proyecto-plan-de-anticorrupcion-y-atencion-al-ciudadano/199',
          },
          {
            id: 8,
            tipo: 'pdf',
            nombre: 'Plan Nacional de Desarrollo',
            url: '/assets/files/transparencia/LEY%201753%20DE%202015.pdf',
          },
          {
            id: 9,
            tipo: 'link',
            nombre: 'Programas y Proyectos de Inversión',
            url: '/planeacion-gestion-y-control/programas-y-proyectos-de-inversion/202',
          },
          {
            id: 10,
            tipo: 'link',
            nombre: 'Participación Ciudadana',
            url: '/planeacion-gestion-y-control/plan-de-participacion-ciudadana/73',
          },
          {
            id: 11,
            tipo: 'link',
            nombre: 'Informes de Empalme',
            url: '/informes/informes-de-empalme/71',
          },
          {
            id: 12,
            tipo: 'link',
            nombre: 'Indicadores de Gestión',
            url: '/informes/indicadores-de-gestion/62',
          },
          {
            id: 13,
            tipo: 'link',
            nombre: 'Memorias al Congreso de la República',
            url: '/informes/memorias-al-congreso-de-la-republica/66',
          },
          {
            id: 14,
            tipo: 'link',
            nombre: 'Rendición de Cuentas',
            url: '/informes/rendicion-de-cuentas/67',
          },
          {
            id: 15,
            tipo: 'link',
            nombre: 'Informes Fiscales Contraloría General de la República',
            url: '/informes/informes-fiscales/61',
          },
          {
            id: 16,
            tipo: 'link',
            nombre: 'Planes de Mejoramiento',
            url: '/planeacion-gestion-y-control/planes-de-mejoramiento/60',
          },
          {
            id: 17,
            tipo: 'link',
            nombre: 'Informes de auditoría oficina de control interno',
            url: '/informes/informes-de-auditoria-oficina-de-control-interno/168',
          },
          {
            id: 18,
            tipo: 'link',
            nombre: 'Reporte de Auditoría ITA',
            url: '/corporativo/reporte-de-auditoria-ita/258',
          },
          {
            id: 19,
            tipo: 'link',
            nombre: 'Informes del estado del Control Interno',
            url: '/informes/informes-del-estado-del-control-interno/68',
          },
          {
            id: 20,
            tipo: 'link',
            nombre: 'Informes Oficina de Control Interno',
            url: '/informes/informes-oficina-de-control-interno/186',
          },
          {
            id: 21,
            tipo: 'link',
            nombre: 'Informes de Defensa Judicial',
            url: '/informes/informes-de-la-defensa-judicial/70',
          },
          {
            id: 22,
            tipo: 'link',
            nombre: 'Informes PQRS',
            url: '/informes/informes-pqrs/180',
          },
        ],
      },
      {
        id: 5,
        nombre: 'Trámites y Servicios',
        files: [
          {
            id: 1,
            tipo: 'link',
            nombre: 'Consulta de trámites',
            url: '/servicios/tramites-y-servicios/54',
          },
        ],
      },
      {
        id: 6,
        nombre: 'Participa',
        files: [
          {
            id: 1,
            tipo: 'link',
            nombre:
              'Participación para el diagnóstico de necesidades e identificación de problemas',
            url: '/participa/222',
          },
          {
            id: 2,
            tipo: 'link',
            nombre: 'Planeación y/o presupuesto participativo',
            url: '/participa/participacion-y-presupuesto-participativo/226',
          },
          {
            id: 3,
            tipo: 'link',
            nombre: 'Contenidos sobre consulta ciudadana',
            url: '/participa/consulta-ciudadana/227',
          },
          {
            id: 4,
            tipo: 'link',
            nombre:
              'Colaboración e innovación abierta con la participación ciudadana',
            url: '/participa/colaboracion-e-innovacion/228',
          },
          {
            id: 5,
            tipo: 'link',
            nombre: 'Rendición de Cuentas',
            url: '/participa/redicion-de-cuentas/229',
          },
          {
            id: 6,
            tipo: 'link',
            nombre: 'Control Social',
            url: '/participa/control-social/230',
          },
        ],
      },
      {
        id: 7,
        nombre: 'Datos Abiertos',
        files: [
          {
            id: 1,
            tipo: 'link-ext',
            nombre: 'Instrumentos de gestión de la información',
            url: 'http://www.datos.gov.co/browse?q=fondo%20de%20pasivo%20social&sortBy=relevancewww.datos.gov.co/browse?q=fondo%20de%20pasivo%20social&sortBy=relevance',
          },
          {
            id: 2,
            tipo: 'link-ext',
            nombre: 'Datos Abiertos',
            url: 'https://www.datos.gov.co/browse?q=fondo%20de%20pasivo%20social&sortBy=relevance',
          },
          {
            id: 5,
            tipo: 'link',
            nombre: 'Plan de Gestión Documental',
            url: '/planeacion-gestion-y-control/gestion-documental/203',
          },
          {
            id: 6,
            tipo: 'pdf',
            nombre:
              'Acto administrativo de Costos de reproducción de la información pública',
            url: '/assets/files/transparencia/RES1498SG.pdf',
          },
          {
            id: 7,
            tipo: 'pdf',
            nombre: 'Decreto Unico Reglamentario Sectorial',
            url: 'http://www.mintic.gov.co/portal/604/articles-9528_documento.pdf',
          },
          {
            id: 8,
            tipo: 'link-ext',
            nombre: 'SECOP',
            url: 'https://www.contratos.gov.co/consultas/inicioConsulta.do',
          },
          {
            id: 9,
            tipo: 'pdf',
            nombre: 'Sistema Integral de Conservación (SIC)',
            url: '/assets/files/transparencia/sistema_integral_conservacion_2021.pdf',
          },
        ],
      },
      {
        id: 8,
        nombre: 'Información especifica para grupos de interés',
        files: [
          {
            id: 1,
            tipo: 'link-ext',
            nombre: 'FPS para Niños',
            url: '/kids',
          },
          {
            id: 2,
            tipo: 'link',
            nombre: 'Caracterización de Usuarios y Grupos de Valor',
            url: '/planeacion-gestion-y-control/informes/53',
          },
        ],
      },
      {
        id: 9,
        nombre: 'Obligación de reporte de Información y Políticas',
        files: [
          {
            id: 1,
            tipo: 'link',
            nombre: 'Manuales',
            url: '/informacion-al-ciudadano/manuales/196',
          },
          {
            id: 2,
            tipo: 'link',
            nombre: 'Guías',
            url: '/informacion-al-ciudadano/guias/195',
          },
          {
            id: 3,
            tipo: 'link',
            nombre: 'Código de Integridad',
            url: '/assets/files/transparencia/APGTHGTHCE01  CODIGO DE INTEGRIDAD DEL FPS.pdf',
          },
          {
            id: 4,
            tipo: 'link',
            nombre: 'Código de Buen Gobierno',
            url: '/informes/codigo-de-buen-gobierno/39',
          },
          {
            id: 5,
            tipo: 'pdf',
            nombre: 'Políticas, Condiciones y Términos de uso',
            url: '/assets/files/transparencia/fps_politica_buen_uso.pdf',
          },
          {
            id: 6,
            tipo: 'pdf',
            nombre: 'Habeas Data',
            url: '/assets/files/transparencia/fps_seguridad_informacion.pdf',
          },
          {
            id: 7,
            tipo: 'pdf',
            nombre: 'Políticas de Riesgo',
            url: '/assets/files/transparencia/ESDESDIGPO01 POLITICA PARA LA ADMINISTRACION DEL RIESGO DE GESTION CORRUPCION AMBIENTAL SGSST Y SEGURIDAD DIGITAL V3.pdf',
          },
          {
            id: 8,
            tipo: 'link',
            nombre: 'Política de privacidad para aplicaciones móviles',
            url: '/assets/files/transparencia/fps_app_politicas_privacidad.pdf',
          },
          {
            id: 9,
            tipo: 'pdf',
            nombre: 'Políticas de Tratamiento de Datos Personales',
            url: '/assets/files/transparencia/MANUAL DE POLÍTICAS DE TRATAMIENTO DE DATOS PERSONALES V3.pdf',
          },
          {
            id: 10,
            tipo: 'link',
            nombre:
              'Plan Estratégico de Tecnologías de la Información y las Comunicaciones',
            url: '/planeacion-gestion-y-control/plan-estrategico-de-tecnologias-de-la-informacion-y-las-comunicaciones/201',
          },
          {
            id: 12,
            tipo: 'link',
            nombre:
              'Plan tratamiento de riesgos seguridad y privacidad de la información',
            url: '/planeacion-gestion-y-control/plan-seguridad-y-privacidad-de-la-informacion/200',
          },
          {
            id: 33,
            tipo: 'pdf',
            nombre:
              'Uso y Apropiación de las Tecnologías',
            url: '/assets/files/transparencia/PLAN DE CAPACITACIONES TI 2024.pdf',
          },
          {
            id: 13,
            tipo: 'excel',
            nombre: 'Esquema de Publicación de la Información',
            url: '/assets/files/transparencia/Esquema de publicación de lnformacion FPS 2024.xlsx',
          },
          {
            id: 14,
            tipo: 'excel',
            nombre:
              'Índice de información clasificada y reservada (Formato Excel)',
            url: '/assets/files/transparencia/IndiceInformacionCalsificadaReservada.xls',
          },
          {
            id: 15,
            tipo: 'link-ext',
            nombre: 'Índice de información clasificada y reservada',
            url: 'https://www.datos.gov.co/Salud-y-Protecci-n-Social/-ndice-de-Informaci-n-Clasificada-y-Reservada/8qnk-9yaj',
          },
          {
            id: 16,
            tipo: 'excel',
            nombre:
              'Inventarios de activos de información (Formato Excel - Enero 2024)',
            url: '/assets/files/transparencia/APGTSOPSFO10 - Inventario de Activos de Información_2023.xlsx',
          },
          {
            id: 17,
            tipo: 'link-ext',
            nombre: 'Inventarios de activos de información',
            url: 'https://www.datos.gov.co/Salud-y-Protecci-n-Social/INVENTARIO-DE-ACTIVOS-DE-INFORMACI-N/didz-ds82',
          },
          {
            id: 34,
            tipo: 'excel',
            nombre:
              'Catalogo de Sistemas de Información_2024.xlsx',
            url: '/assets/files/transparencia/Catalogo de Sistemas de Información_2024.xlsx',
          },

          {
            id: 18,
            tipo: 'link',
            nombre: 'Registro de Publicaciones',
            url: '/corporativo/registro-de-publicaciones/216',
          },
          {
            id: 19,
            tipo: 'pdf',
            nombre:
              'Proceso de inscripción de usuarios página web - Ventanilla Virtual',
            url: '/assets/files/transparencia/ProcesoInscripcionWebVentanillaVirtual.pdf',
          },
          {
            id: 20,
            tipo: 'link',
            nombre: 'Menú Participa',
            url: 'participa/pqrs/222',
          },
          {
            id: 21,
            tipo: 'pdf',
            nombre: 'Portafolio de Servicios',
            url: '/assets/files/transparencia/PortafolioServiciosFPS.pdf',
          },
          {
            id: 22,
            tipo: 'pdf',
            nombre: 'Política de tratamiento de datos personales',
            url: '/assets/files/transparencia/fps_politicas_tratamiento_datos.pdf',
          },
          {
            id: 23,
            tipo: 'pdf',
            nombre: 'Repositorio Institucional Regional',
            url: '/assets/files/transparencia/repositorio_institucional_regional.pdf',
          },
          {
            id: 25,
            tipo: 'pdf',
            nombre:
              'Política General de Seguridad y Privacidad de la Información V2',
            url: '/assets/files/transparencia/APGTSOPSPO04 POLÍTICA GENERAL DE SEGURIDAD Y PRIVACIDAD DE LA INFORMACIÓN V2.pdf',
          },
          {
            id: 26,
            tipo: 'link',
            nombre: 'Canal de Atención Servicios de Salud',
            url: '/servicios-de-salud/canal-de-atencion-red-de-prestadores/244',
          },
          {
            id: 27,
            tipo: 'link',
            nombre: 'Cobertura de Operación y Red de Prestadores de Salud',
            url: '/servicios-de-salud/red-de-prestadores/44',
          },
          {
            id: 28,
            tipo: 'link',
            nombre: 'Afiliaciones',
            url: '/servicios-de-salud/sistema-de-afiliacion-transaccional-sat/223',
          },
          {
            id: 29,
            tipo: 'link',
            nombre: 'Ruta de Promoción y Mantenimiento de la Salud',
            url: '/servicios-de-salud/programa-de-promocion-y-prevencion/132',
          },
          {
            id: 30,
            tipo: 'link',
            nombre: 'Indicadores de salud',
            url: '/servicios-de-salud/indicadores-de-salud/190',
          },
          {
            id: 31,
            tipo: 'link',
            nombre: 'Afiliados',
            url: '/servicios-de-salud/afiliados/242',
          },
          {
            id: 32,
            tipo: 'link',
            nombre: 'Gestión del Riesgo',
            url: '/servicios-de-salud/gestion-del-riesgo/259',
          },
        ],
      },
    ];
  }
}
