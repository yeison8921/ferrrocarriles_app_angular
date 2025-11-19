import { Component } from '@angular/core';
import { mapa } from '../../../interfaces/mapa';
import { NgFor , Location} from '@angular/common';

@Component({
  selector: 'app-mapa-sitio',
  standalone: true,
  imports: [NgFor],
  templateUrl: './mapa-sitio.component.html',
  styleUrl: './mapa-sitio.component.css'
})
export class MapaSitioComponent {

  items: mapa[] = [];
  //constructor(private location: Location) {
  constructor(private location: Location) {
      this.items=[
          {
          id: 1,
          name: 'Transparencia y acceso a la información pública',
          url: '/corporativo/transparencia-y-acceso-a-la-informacion-publica/163',
          paginas: [
            {
              id: 1,
              name: 'La Entidad',
              url: '/corporativo/la-entidad/15',

            },
            {
              id: 2,
              name: 'Mapa del Sitio',
              url: '/corporativo/mapa-del-sitio/238'
            },
            {
              id: 3,
              name: 'Misión y Visión',
              url: '/corporativo/mision-y-vision/37'
            },
            {
              id: 4,
              name: 'Funciones',
              url: '/corporativo/funciones/38'
            },
            {
              id: 5,
              name: 'Política del Sistema Integrado de Gestión',
              url: '/corporativo/politica-del-sistema-integrado-de-gestion/40'
            },
            {
              id: 6,
              name: 'Objetivos Institucionales',
              url: '/corporativo/objetivos-institucionales/41',

            },
            {
              id: 7,
              name: 'Información General',
              url: '/corporativo/informacion-general/42',

            },
            {
              id: 8,
              name: 'Entidades que nos regulan',
              url: '/corporativo/entidades-que-nos-regulan/45',

            },
            {
              id: 9,
              name: 'Asociaciones Ferrocarriles',
              url: '/corporativo/asociaciones-ferrocarriles/249',

            },
            {
              id: 10,
              name: 'Talento Humano',
              url: '/corporativo/talento-humano/46'
            },
            {
              id: 11,
              name: 'Nuestros Directivos',
              url: '/corporativo/nuestros-directivos/191',

            },
            {
              id: 12,
              name: 'Directorio General Funcionarios FPS',
              url: '/corporativo/directorio-general-funcionarios-fps/192'
            },
            {
              id: 13,
              name: 'Directorio Funcionarios Principales',
              url: '/corporativo/directorio-funcionarios-principales/193',

            },
            {
              id: 14,
              name: 'Organigrama',
              url: '/corporativo/organigrama/48',

            },
            {
              id: 15,
              name: 'Gestión Documental',
              url: '/corporativo/gestion-documental/51'
            },
            {
              id: 16,
              name: 'Directorio de Entidades',
              url: '/corporativo/directorio-de-entidades/209',

            },
            {
              id: 17,
              name: 'Directorio de Contratistas',
              url: '/corporativo/directorio-de-contratistas-fps/221',

            },
            {
              id: 18,
              name: 'Registro de Publicaciones',
              url: '/corporativo/registro-de-publicaciones/216',

            },
            {
              id: 19,
              name: 'Intranet',
              url: 'https://intranet.aymsoft.net/'
            },
          ],
        },
        {
          id: 2,
          name: 'Atención al usuario',
          url: '/',
          paginas: [
            {
              id: 1,
              name: 'Peticiones',
              url: '/atencion-al-usuario/peticiones/6',

            },
            {
              id: 2,
              name: 'Quejas',
              url: '/atencion-al-usuario/quejas/7',

            },
            {
              id: 3,
              name: 'Reclamos',
              url: '/atencion-al-usuario/reclamos/8',

            },
            {
              id: 4,
              name: 'Sugerencias',
              url: '/atencion-al-usuario/sugerencias/4',

            },
            {
              id: 5,
              name: 'Denuncias',
              url: '/atencion-al-usuario/denuncias/5',

            },
            {
              id: 6,
              name: 'Felicitaciones',
              url: '/atencion-al-usuario/felicitaciones/3',

            },
            {
              id: 7,
              name: 'Solicitud de Información Pública',
              url: '/atencion-al-usuario/solicitud-de-informacion-publica/9',

            },
            {
              id: 8,
              name: 'Consulta de Solicitudes',
              url: '/atencion-al-usuario/consulta-de-solicitudes/10',

            },
            {
              id: 9,
              name: 'Actualización de datos',
              url: '/atencion-al-usuario/actualizacion-de-datos/213',

            },
            {
              id: 10,
              name: 'Buzón Notificaciones Judiciales',
              url: '/atencion-al-usuario/buzon-notificaciones-judiciales/43',

            },
            {
              id: 11,
              name: 'Contratación',
              url: '/atencion-al-usuario/contratacion/97',

            },
            {
              id: 12,
              name: 'Preguntas Frecuentes',
              url: '/atencion-al-usuario/preguntas-frecuentes/121',

            },
            {
              id: 13,
              name: 'Ofertas Laborales',
              url: '/atencion-al-usuario/ofertas-laborales/153'
            },
            {
              id: 14,
              name: 'Sondeo de Opinión',
              url: '/atencion-al-usuario/sondeo-de-opinion/119',

            },
            {
              id: 15,
              name: 'Foro',
              url: '/atencion-al-usuario/foro/126',

            },
            {
              id: 16,
              name: 'Glosario',
              url: '/atencion-al-usuario/glosario/117'
            },
            {
              id: 17,
              name: 'Encuesta de satisfacción',
              url: '/atencion-al-usuario/encuesta-de-satisfaccion/214'
            },
            {
              id: 18,
              name: 'Encuesta de Usabilidad FPSFNC',
              url: '/atencion-al-usuario/encuesta-de-usabilidad-fpsfnc/232',

            },
            {
              id: 19,
              name:
                'Encuesta de Evaluación del Evento de Audiencia Pública Vigencia 2021',
              url: '/atencion-al-usuario/encuesta-de-evaluacion-del-evento-de-audiencia-publica-vigencia-2021/236',

            },
            {
              id: 20,
              name: 'Contacto',
              url: '/atencion-al-usuario/contacto/2',

            },
            {
              id: 21,
              name:
                'Canal de interacción de liberatoria para la participación ciudadana',
              url: '/atencion-al-usuario/canal-de-interaccion-de-liberatoria-para-la-participacion-ciudadana/240',

            },
          ],
        },
        {
          id: 3,
          name: 'Participa',
          url: '/',
          paginas: [
            {
              id: 1,
              name:
                'Participación para el diagnóstico de necesidades e identificación de problemas',
              url: '/participa/pqrs/222'
            },
            {
              id: 2,
              name: 'Planeación y/o presupuesto participativo',
              url: '/participa/participacion-y-presupuesto-participativo/226'
            },
            {
              id: 3,
              name: 'Contenidos sobre consulta ciudadana',
              url: '/participa/consulta-ciudadana/227'
            },
            {
              id: 4,
              name:
                'Colaboración e innovación abierta con la participación ciudadana',
              url: '/participa/colaboracion-e-innovacion/228'
            },
            {
              id: 5,
              name: 'Rendición de Cuentas',
              url: '/participa/redicion-de-cuentas/229'
            },
            {
              id: 6,
              name: 'Control Social',
              url: '/participa/control-social/230'
            },
          ],
        },
        {
          id: 4,
          name: 'Sala de prensa',
          url: '/',
          paginas: [
            {
              id: 1,
              name: 'Noticias',
              url: '/sala-de-prensa/noticias/57'
            },
            {
              id: 2,
              name: 'Comunicados',
              url: '/sala-de-prensa/comunicados/124'
            },
            {
              id: 3,
              name: 'Videos',
              url: '/sala-de-prensa/videos/123'
            },
            {
              id: 4,
              name: 'Eventos',
              url: '/sala-de-prensa/eventos/120'
            },
            {
              id: 5,
              name: 'Audios',
              url: '/sala-de-prensa/audios/122'
            },
            {
              id: 6,
              name: 'Calendario de Actividades',
              url: '/atencion-al-usuario/calendario/114'
            },
          ],
        },
        {
          id: 5,
          name: 'Servicios de salud',
          url: '/',
          paginas: [
            {
              id: 1,
              name: 'Canal de Atención Servicios de Salud',
              url: '/servicios-de-salud/canal-de-atencion-red-de-prestadores/244'
            },
            {
              id: 2,
              name: 'Afiliados',
              url: '/servicios-de-salud/afiliados/242',

            },
            {
              id: 3,
              name: 'Cobertura de Operación y Red de Prestadores de Salud',
              url: '/servicios-de-salud/red-de-prestadores/44',

            },
            {
              id: 4,
              name: 'Sistema de Afiliación Transaccional (SAT)',
              url: '/servicios-de-salud/sistema-de-afiliacion-transaccional-(SAT)/223',

            },
            {
              id: 5,
              name: 'Ruta de Promoción y Mantenimiento de la Salud',
              url: '/servicios-de-salud/programa-de-promocion-y-prevencion/132',

            },
            {
              id: 6,
              name: 'Indicadores de Salud',
              url: '/servicios-de-salud/indicadores-de-salud/190'
            },
            {
              id: 7,
              name: 'Gestión del Riesgo',
              url: '/servicios-de-salud/gestion-del-riesgo/259',

            },
          ],
        },
        {
          id: 6,
          name: 'Planeación, gestión y control',
          url: '/planeacion-gestion-y-control/53',
          paginas: [
            {
              id: 1,
              name: 'Informes',
              url: '',
              pagina: [
                {
                  id: 1,
                  name: 'Informes de Empalme',
                  url: '/informes/informes-de-empalme/71',
                },
                {
                  id: 2,
                  name: 'Informes Anuales',
                  url: '/informes/informes-anuales/59',

                },
                {
                  id: 3,
                  name: 'Indicadores de Gestión',
                  url: '/informes/indicadores-de-gestion/62',

                },
                {
                  id: 4,
                  name: 'Informe Cámara de Representantes',
                  url: '/informes/informe-camara-de-representantes/187',

                },
                {
                  id: 5,
                  name: 'Información contable y financiera',
                  url: '/informes/informes-contaduria-general-de-la-nacion/65',

                },
                {
                  id: 6,
                  name: 'Informes fiscales Contraloría General de la República',
                  url: '/informes/informes-fiscales/61',

                },
                {
                  id: 7,
                  name: 'Memorias al Congreso de la República',
                  url: '/informes/memorias-al-congreso-de-la-republica/66',

                },
                {
                  id: 8,
                  name: 'Informes PQRS',
                  url: '/informes/informes-PQRS/180',

                },
                {
                  id: 9,
                  name: 'Informe de Medición de la Satisfacción al Ciudadano',
                  url: '/informes/informes-de-medicion-de-la-satistfaccion-al-ciudadano/188',

                },
                {
                  id: 10,
                  name:
                    'Informe de Percepción de Satisfacción al Usuario Post Trámite',
                  url: '/informes/informes-de-percepcion-de-la-satistfaccion-al-usuario-post-tramite/189',

                },
                {
                  id: 11,
                  name: 'Informes del Estado del Control Interno',
                  url: '/informes/informes-del-estado-del-control-interno/68',

                },
                {
                  id: 12,
                  name: 'Informes de la Defensa Judicial',
                  url: '/informes/informes-de-la-defensa-judicial/70',

                },
                {
                  id: 13,
                  name: 'Informe Consolidado Gestión Prestaciones Económicas',
                  url: '/informes/informes-consolidado-gestion-prestaciones-economicas/72',

                },
                {
                  id: 14,
                  name: 'Informes Oficina de Control Interno',
                  url: '/informes/informes-oficina-de-control-interno/186',

                },
                {
                  id: 15,
                  name: 'Informe de auditoría oficina de control interno',
                  url: '/informes/informe-de-auditoria-oficina-de-control-interno/168',

                },
                {
                  id: 16,
                  name: 'Rendición de Cuentas',
                  url: '/informes/rendicion-de-cuentas/67',

                },
                {
                  id: 17,
                  name: 'Código de Buen Gobierno',
                  url: '/informes/codigo-de-buen-gobierno/39',

                },
                {
                  id: 18,
                  name: 'Código de Integridad',
                  url: '/informes/codigo-de-integridad/206',

                },
              ],
            },
            {
              id: 2,
              name: 'Planes y programas',
              url: '/',
              pagina: [
                {
                  id: 1,
                  name:
                    'Plan estratégico de tecnologías de la información y las comunicaciones',
                  url: '/planeacion-gestion-y-control/plan-estrategico-de-tecnologias-de-la-informacion-y-las-comunicaciones/201',

                },
                {
                  id: 2,
                  name: 'Plan de Acción',
                  url: '/planeacion-gestion-y-control/plan-de-accion/64',

                },
                {
                  id: 3,
                  name: 'Plan Estratégico',
                  url: '/planeacion-gestion-y-control/plan-estrategico/63',

                },
                {
                  id: 4,
                  name: 'Plan de Anticorrupción y Atención al Ciudadano',
                  url: '/planeacion-gestion-y-control/plan-de-anticorrupcion-y-atencion-al-ciudadano/74',

                },
                {
                  id: 5,
                  name: 'Plan de Riesgos',
                  url: '/planeacion-gestion-y-control/plan-de-riesgos/79',

                },
                {
                  id: 6,
                  name: 'Planes de Mejoramiento',
                  url: '/planeacion-gestion-y-control/planes-de-mejoramiento/60',

                },
                {
                  id: 7,
                  name: 'Plan de Fortalecimiento',
                  url: '/planeacion-gestion-y-control/plan-de-fortalecimiento/78',

                },
                {
                  id: 8,
                  name: 'Plan Gestión Humana',
                  url: '/planeacion-gestion-y-control/plan-gestion-humana/197',

                },
                {
                  id: 9,
                  name:
                    'Procedimientos, Lineamientos y Políticas de Adquisición y Compras',
                  url: '/planeacion-gestion-y-control/procedimientos-lineamientos-y-politicas-de-adquisicion-y-compras/84',

                },
                {
                  id: 10,
                  name: 'Plan anual de adquisiciones',
                  url: '/planeacion-gestion-y-control/plan-anual-de-adquisiciones/198',

                },
                {
                  id: 11,
                  name:
                    'Plan de Política Sectorial de Transparencia e Integridad',
                  url: '/planeacion-gestion-y-control/plan-de-politica-sectorial-de-transparencia-e-integridad/231',

                },
                {
                  id: 12,
                  name: 'Plan de Participación Ciudadana',
                  url: '/planeacion-gestion-y-control/plan-de-participacion-ciudadana/73',

                },
                {
                  id: 13,
                  name: 'Plan seguridad y privacidad de la información',
                  url: '/planeacion-gestion-y-control/plan-seguridad-y-privacidad-de-la-informacion/200',

                },
                {
                  id: 14,
                  name: 'Programas y proyectos de inversión',
                  url: '/planeacion-gestion-y-control/programas-y-proyectos-de-inversion/202',

                },
                {
                  id: 15,
                  name: 'Gestión documental',
                  url: '/planeacion-gestion-y-control/gestion-documental/203',

                },
                {
                  id: 16,
                  name: 'Plan de Fortalecimiento del MIPG',
                  url: '/planeacion-gestion-y-control/gestion-documental/317',
                }
              ],
            },
          ],
        },
        {
          id: 7,
          name: 'Información Financiera',
          url: '/',
          paginas: [
            {
              id: 1,
              name: 'Información Financiera Superintendencia Nacional de Salud',
              url: '/informacion-contable-y-financiera/informacion-financiera-superintendencia-nacional-de-salud/207'
            },
            {
              id: 2,
              name: 'Información Presupuestal y Financiera',
              url: '/informacion-contable-y-financiera/informacion-financiera/89'
            },
            {
              id: 3,
              name: 'Estados financieros',
              url: '/informacion-contable-y-financiera/estados-financieros/156'
            },
            {
              id: 4,
              name: 'Información Financiera Contaduría General de la Nación',
              url: '/informacion-contable-y-financiera/informacion-financiera-contaduria-general-de-la-nacion/208'
            },
            {
              id: 5,
              name: 'Conciliación de Cartera para IPS',
              url: '/informacion-contable-y-financiera/conciliacion-de-cartera-para-ips/239'
            },
          ],
        },
        {
          id: 8,
          name: 'Normatividad',
          url: '/',
          paginas: [
            {
              id: 1,
              name: 'Resoluciones',
              url: '/normatividad/49'
            },
            {
              id: 2,
              name: 'Decretos',
              url: '/normatividad/234'
            },
            {
              id: 3,
              name: 'Leyes',
              url: '/normatividad/233'
            },
            {
              id: 4,
              name: 'Circulares',
              url: '/normatividad/235'
            },
          ],
        },
        {
          id: 9,
          name: 'Tramites y servicios',
          url: '/',
          paginas: [
            {
              id: 1,
              name: 'Trámites',
              url: '/tramites-y-servicios/tramites/54'
            },
            {
              id: 2,
              name: 'Formatos',
              url: '/tramites-y-servicios/formatos/165',

            },
            {
              id: 3,
              name: 'Ventanilla Virtual',
              url: '/tramites-y-servicios/ventanilla-virtual/55',

            },
          ],
        },
        {
          id: 10,
          name: 'Información al ciudadano',
          url: '/informacion-al-ciudadano/boletin-virtual/17',
          paginas: [
            {
              id: 1,
              name: 'Atención y servicios a la Ciudadanía',
              url: '/informacion-al-ciudadano/nuestras-oficinas/115',
            },
            {
              id: 2,
              name: 'Guías',
              url: '/informacion-al-ciudadano/guias/195'
            },
            {
              id: 3,
              name: 'Manuales',
              url: '/informacion-al-ciudadano/manuales/196'
            },
            {
              id: 4,
              name: 'Correspondencia devuelta',
              url: '/informacion-al-ciudadano/correspondencia-devuelta/194'
            },
          ],
        },
      ];
      let path = this.location.path().split('/');
  };
}


