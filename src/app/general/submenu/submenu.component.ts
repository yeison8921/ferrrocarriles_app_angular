import { NgClass, NgFor, NgIf, Location } from '@angular/common';
import { Component } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { Menu } from '../../interfaces/header';

@Component({
  selector: 'app-submenu',
  standalone: true,
  imports: [NgbAccordionModule, NgFor, NgIf, NgClass],
  templateUrl: './submenu.component.html',
  styleUrl: './submenu.component.css',
})
export class SubmenuComponent {
  submenu: Menu[];
  constructor(private location: Location) {
    this.submenu = [
      {
        id: 1,
        nombre: 'Inicio',
        url: '/',
        urlactive: true,
        active: false,
        icono: 'home',
        submenu: [],
      },
      {
        id: 2,
        nombre: 'Transparencia y acceso a la información pública',
        url: '/corporativo/transparencia-y-acceso-a-la-informacion-publica/163',
        urlactive: true,
        active: false,
        icono: 'entidad',
        submenu: [
          {
            id: 1,
            nombre: 'La Entidad',
            url: '/corporativo/la-entidad/15',
            active: false,
          },
          {
            id: 2,
            nombre: 'Mapa del Sitio',
            url: '/corporativo/mapa-del-sitio/238',
            active: false,
          },
          {
            id: 3,
            nombre: 'Misión y Visión',
            url: '/corporativo/mision-y-vision/37',
            active: false,
          },
          {
            id: 4,
            nombre: 'Funciones',
            url: '/corporativo/funciones/38',
            active: false,
          },
          {
            id: 6,
            nombre: 'Política del Sistema Integrado de Gestión',
            url: '/corporativo/politica-del-sistema-integrado-de-gestion/40',
            active: false,
          },
          {
            id: 7,
            nombre: 'Objetivos Institucionales',
            url: '/corporativo/objetivos-institucionales/41',
            active: false,
          },
          {
            id: 8,
            nombre: 'Información General',
            url: '/corporativo/informacion-general/42',
            active: false,
          },
          {
            id: 9,
            nombre: 'Entidades que nos regulan',
            url: '/corporativo/entidades-que-nos-regulan/45',
            active: false,
          },
          {
            id: 10,
            nombre: 'Asociaciones Ferrocarriles',
            url: '/corporativo/asociaciones-ferrocarriles/249',
            active: false,
          },
          {
            id: 11,
            nombre: 'Talento Humano',
            url: '/corporativo/talento-humano/46',
            active: false,
          },
          {
            id: 12,
            nombre: 'Nuestros Directivos',
            url: '/corporativo/nuestros-directivos/191',
            active: false,
          },
          {
            id: 13,
            nombre: 'Directorio General Funcionarios FPS',
            url: '/corporativo/directorio-general-funcionarios-fps/192',
            active: false,
          },
          {
            id: 14,
            nombre: 'Directorio Funcionarios Principales',
            url: '/corporativo/directorio-funcionarios-principales/193',
            active: false,
          },
          {
            id: 15,
            nombre: 'Organigrama',
            url: '/corporativo/organigrama/48',
            active: false,
          },
          {
            id: 16,
            nombre: 'Gestión Documental',
            url: '/corporativo/gestion-documental/51',
            active: false,
          },
          {
            id: 17,
            nombre: 'Directorio de Entidades',
            url: '/corporativo/directorio-de-entidades/209',
            active: false,
          },
          {
            id: 18,
            nombre: 'Directorio de Contratistas',
            url: '/corporativo/directorio-de-contratistas-fps/221',
            active: false,
          },
          {
            id: 19,
            nombre: 'Registro de Publicaciones',
            url: '/corporativo/registro-de-publicaciones/216',
            active: false,
          },
          {
            id: 20,
            nombre: 'Intranet',
            url: 'https://intranet.aymsoft.net/',
            active: false,
          },
        ],
      },
      {
        id: 3,
        nombre: 'Atención al usuario',
        url: '/',
        urlactive: false,
        active: false,
        icono: 'usuarios',
        submenu: [
          {
            id: 7,
            nombre: 'Peticiones',
            //url: '/atencion-al-usuario/peticiones/6',
            url: '',
            active: false,
          },
          {
            id: 8,
            nombre: 'Quejas',
            //url: '/atencion-al-usuario/quejas/7',
            url: '',
            active: false,
          },
          {
            id: 9,
            nombre: 'Reclamos',
            //url: '/atencion-al-usuario/reclamos/8',
            url: '',
            active: false,
          },
          {
            id: 10,
            nombre: 'Sugerencias',
            //url: '/atencion-al-usuario/sugerencias/4',
            url: '',
            active: false,
          },
          {
            id: 11,
            nombre: 'Denuncias',
            //url: '/atencion-al-usuario/denuncias/5',
            url: '',
            active: false,
          },
          {
            id: 12,
            nombre: 'Felicitaciones',
            //url: '/atencion-al-usuario/felicitaciones/3',
            url: '',
            active: false,
          },
          {
            id: 13,
            nombre: 'Solicitud de Información Pública',
            //url: '/atencion-al-usuario/solicitud-de-informacion-publica/9',
            url: '',
            active: false,
          },
          {
            id: 14,
            nombre: 'Consulta de Solicitudes',
            //url: '/atencion-al-usuario/consulta-de-solicitudes/10',
            url: '',
            active: false,
          },
          {
            id: 15,
            nombre: 'Actualización de datos',
            //url: '/atencion-al-usuario/actualizacion-de-datos/213',
            url: '',
            active: false,
          },
          {
            id: 17,
            nombre: 'Buzón Notificaciones Judiciales',
            url: '/atencion-al-usuario/buzon-notificaciones-judiciales/43',
            active: false,
          },
          {
            id: 17,
            nombre: 'Contratación',
            url: '/atencion-al-usuario/contratacion/97',
            active: false,
          },
          {
            id: 18,
            nombre: 'Preguntas Frecuentes',
            //url: '/atencion-al-usuario/preguntas-frecuentes/121',
            url: '',
            active: false,
          },
          {
            id: 19,
            nombre: 'Ofertas Laborales',
            url: '/atencion-al-usuario/ofertas-laborales/153',
            active: false,
          },
          {
            id: 6,
            nombre: 'Sondeo de Opinión',
            //url: '/atencion-al-usuario/sondeo-de-opinion/119',
            url: '',
            active: false,
          },
          {
            id: 20,
            nombre: 'Foro',
            url: '/atencion-al-usuario/foro/126',
            active: false,
          },
          {
            id: 21,
            nombre: 'Glosario',
            url: '/atencion-al-usuario/glosario/117',
            active: false,
          },
          {
            id: 2,
            nombre: 'Encuesta de satisfacción',
            url: '/atencion-al-usuario/encuesta-de-satisfaccion/214',
            active: false,
          },
          {
            id: 4,
            nombre: 'Encuesta de Usabilidad FPSFNC',
            //url: '/atencion-al-usuario/encuesta-de-usabilidad-fpsfnc/232',
            url: '',
            active: false,
          },
          {
            id: 3,
            nombre:
              'Encuesta de Evaluación del Evento de Audiencia Pública Vigencia 2021',
            url: '/atencion-al-usuario/encuesta-de-evaluacion-del-evento-de-audiencia-publica-vigencia-2021/236',
            active: false,
          },
          {
            id: 3,
            nombre: 'Contacto',
            //url: '/atencion-al-usuario/contacto/2',
            url: '',
            active: false,
          },
          {
            id: 1,
            nombre:
              'Canal de interacción de liberatoria para la participación ciudadana',
            url: '/atencion-al-usuario/canal-de-interaccion-de-liberatoria-para-la-participacion-ciudadana/240',
            active: false,
          },
        ],
      },
      {
        id: 3,
        nombre: 'Participa',
        url: '/',
        urlactive: false,
        active: false,
        icono: 'mano',
        submenu: [
          {
            id: 1,
            nombre:
              'Participación para el diagnóstico de necesidades e identificación de problemas',
            url: '/participa/pqrs/222',
            active: false,
          },
          {
            id: 2,
            nombre: 'Planeación y/o presupuesto participativo',
            url: '/participa/participacion-y-presupuesto-participativo/226',
            active: false,
          },
          {
            id: 3,
            nombre: 'Contenidos sobre consulta ciudadana',
            url: '/participa/consulta-ciudadana/227',
            active: false,
          },
          {
            id: 4,
            nombre:
              'Colaboración e innovación abierta con la participación ciudadana',
            url: '/participa/colaboracion-e-innovacion/228',
            active: false,
          },
          {
            id: 5,
            nombre: 'Rendición de Cuentas',
            url: '/participa/redicion-de-cuentas/229',
            active: false,
          },
          {
            id: 6,
            nombre: 'Control Social',
            url: '/participa/control-social/230',
            active: false,
          },
        ],
      },
      {
        id: 4,
        nombre: 'Sala de prensa',
        url: '/',
        urlactive: false,
        active: false,
        icono: 'prensa',
        submenu: [
          {
            id: 1,
            nombre: 'Noticias',
            url: '/sala-de-prensa/noticias/57',
            active: false,
          },
          {
            id: 2,
            nombre: 'Comunicados',
            url: '/sala-de-prensa/comunicados/124',
            active: false,
          },
          {
            id: 3,
            nombre: 'Videos',
            url: '/sala-de-prensa/videos/123',
            active: false,
          },
          {
            id: 4,
            nombre: 'Eventos',
            url: '/sala-de-prensa/eventos/120',
            active: false,
          },
          {
            id: 6,
            nombre: 'Calendario de Actividades',
            url: '/atencion-al-usuario/calendario/114',
            active: false,
          },
        ],
      },
      {
        id: 5,
        nombre: 'Servicios de salud',
        url: '/',
        urlactive: false,
        active: false,
        icono: 'salud',
        submenu: [
          {
            id: 1,
            nombre: 'Canal de Atención Servicios de Salud',
            url: '/servicios-de-salud/canal-de-atencion-red-de-prestadores/244',
            active: false,
          },
          {
            id: 3,
            nombre: 'Cobertura de Operación y Red de Prestadores de Salud',
            url: '/servicios-de-salud/red-de-prestadores/44',
            active: false,
          },
          {
            id: 4,
            nombre: 'Sistema de Afiliación Transaccional (SAT)',
            url: '/servicios-de-salud/sistema-de-afiliacion-transaccional-(SAT)/223',
            active: false,
          },
          {
            id: 5,
            nombre: 'Ruta de Promoción y Mantenimiento de la Salud',
            url: '/servicios-de-salud/programa-de-promocion-y-prevencion/132',
            active: false,
          },
          {
            id: 6,
            nombre: 'Indicadores de Salud',
            url: '/servicios-de-salud/indicadores-de-salud/190',
            active: false,
          },
          {
            id: 2,
            nombre: 'Afiliados',
            url: '/servicios-de-salud/afiliados/242',
            active: false,
          },
          {
            id: 7,
            nombre: 'Gestión del Riesgo',
            url: '/servicios-de-salud/gestion-del-riesgo/259',
            active: false,
          },
        ],
      },
      {
        id: 6,
        nombre: 'Planeación, gestión y control',
        url: '/planeacion-gestion-y-control/53',
        urlactive: true,
        active: false,
        icono: 'informes',
        submenu: [
          {
            id: 1,
            nombre: 'Informes',
            url: '',
            active: false,
            submenu: [
              {
                id: 1,
                nombre: 'Informes de Empalme',
                url: '/informes/informes-de-empalme/71',
                active: false,
              },
              {
                id: 2,
                nombre: 'Informes Anuales',
                url: '/informes/informes-anuales/59',
                active: false,
              },
              {
                id: 3,
                nombre: 'Indicadores de Gestión',
                url: '/informes/indicadores-de-gestion/62',
                active: false,
              },
              {
                id: 4,
                nombre: 'Informe Cámara de Representantes',
                url: '/informes/informe-camara-de-representantes/187',
                active: false,
              },
              {
                id: 5,
                nombre: 'Información contable y financiera',
                url: '/informes/informes-contaduria-general-de-la-nacion/65',
                active: false,
              },
              {
                id: 6,
                nombre: 'Informes fiscales Contraloría General de la República',
                url: '/informes/informes-fiscales/61',
                active: false,
              },
              {
                id: 7,
                nombre: 'Memorias al Congreso de la República',
                url: '/informes/memorias-al-congreso-de-la-republica/66',
                active: false,
              },
              {
                id: 8,
                nombre: 'Informes PQRS',
                url: '/informes/informes-PQRS/180',
                active: false,
              },
              {
                id: 9,
                nombre: 'Informe de Medición de la Satisfacción al Ciudadano',
                url: '/informes/informes-de-medicion-de-la-satistfaccion-al-ciudadano/188',
                active: false,
              },
              {
                id: 10,
                nombre:
                  'Informe de Percepción de Satisfacción al Usuario Post Trámite',
                url: '/informes/informes-de-percepcion-de-la-satistfaccion-al-usuario-post-tramite/189',
                active: false,
              },
              {
                id: 11,
                nombre: 'Informes del Estado del Control Interno',
                url: '/informes/informes-del-estado-del-control-interno/68',
                active: false,
              },
              {
                id: 12,
                nombre: 'Informes de la Defensa Judicial',
                url: '/informes/informes-de-la-defensa-judicial/70',
                active: false,
              },
              {
                id: 13,
                nombre: 'Informe Consolidado Gestión Prestaciones Económicas',
                url: '/informes/informes-consolidado-gestion-prestaciones-economicas/72',
                active: false,
              },
              {
                id: 14,
                nombre: 'Informes Oficina de Control Interno',
                url: '/informes/informes-oficina-de-control-interno/186',
                active: false,
              },
              {
                id: 15,
                nombre: 'Informe de auditoría oficina de control interno',
                url: '/informes/informe-de-auditoria-oficina-de-control-interno/168',
                active: false,
              },
              {
                id: 16,
                nombre: 'Rendición de Cuentas',
                url: '/informes/rendicion-de-cuentas/67',
                active: false,
              },
              {
                id: 17,
                nombre: 'Código de Buen Gobierno',
                url: '/informes/codigo-de-buen-gobierno/39',
                active: false,
              },
              {
                id: 17,
                nombre: 'Código de Integridad',
                url: '/informes/codigo-de-integridad/206',
                active: false,
              },
            ],
          },
          {
            id: 2,
            nombre: 'Planes y programas',
            url: '/',
            active: false,
            submenu: [
              {
                id: 1,
                nombre:
                  'Plan estratégico de tecnologías de la información y las comunicaciones',
                url: '/planeacion-gestion-y-control/plan-estrategico-de-tecnologias-de-la-informacion-y-las-comunicaciones/201',
                active: false,
              },
              {
                id: 2,
                nombre: 'Plan de Acción',
                url: '/planeacion-gestion-y-control/plan-de-accion/64',
                active: false,
              },
              {
                id: 3,
                nombre: 'Plan Estratégico',
                url: '/planeacion-gestion-y-control/plan-estrategico/63',
                active: false,
              },
              {
                id: 4,
                nombre: 'Plan de Anticorrupción y Atención al Ciudadano',
                url: '/planeacion-gestion-y-control/plan-de-anticorrupcion-y-atencion-al-ciudadano/74',
                active: false,
              },
              {
                id: 5,
                nombre: 'Plan de Riesgos',
                url: '/planeacion-gestion-y-control/plan-de-riesgos/79',
                active: false,
              },
              {
                id: 6,
                nombre: 'Planes de Mejoramiento',
                url: '/planeacion-gestion-y-control/planes-de-mejoramiento/60',
                active: false,
              },
              {
                id: 7,
                nombre: 'Plan de Fortalecimiento',
                url: '/planeacion-gestion-y-control/plan-de-fortalecimiento/78',
                active: false,
              },
              {
                id: 8,
                nombre: 'Plan Gestión Humana',
                url: '/planeacion-gestion-y-control/plan-gestion-humana/197',
                active: false,
              },
              {
                id: 9,
                nombre:
                  'Procedimientos, Lineamientos y Políticas de Adquisición y Compras',
                url: '/planeacion-gestion-y-control/procedimientos-lineamientos-y-politicas-de-adquisicion-y-compras/84',
                active: false,
              },
              {
                id: 10,
                nombre: 'Plan anual de adquisiciones',
                url: '/planeacion-gestion-y-control/plan-anual-de-adquisiciones/198',
                active: false,
              },
              {
                id: 11,
                nombre:
                  'Plan de Política Sectorial de Transparencia e Integridad',
                url: '/planeacion-gestion-y-control/plan-de-politica-sectorial-de-transparencia-e-integridad/231',
                active: false,
              },
              {
                id: 12,
                nombre: 'Plan de Participación Ciudadana',
                url: '/planeacion-gestion-y-control/plan-de-participacion-ciudadana/73',
                active: false,
              },
              {
                id: 13,
                nombre: 'Plan seguridad y privacidad de la información',
                url: '/planeacion-gestion-y-control/plan-seguridad-y-privacidad-de-la-informacion/200',
                active: false,
              },
              {
                id: 14,
                nombre: 'Programas y proyectos de inversión',
                url: '/planeacion-gestion-y-control/programas-y-proyectos-de-inversion/202',
                active: false,
              },
              {
                id: 15,
                nombre: 'Gestión documental',
                url: '/planeacion-gestion-y-control/gestion-documental/203',
                active: false,
              },
              {
                id: 16,
                nombre: 'Plan de Fortalecimiento del MIPG',
                url: '/planeacion-gestion-y-control/gestion-documental/317',
                active: false,
              },
            ],
          },
        ],
      },
      {
        id: 7,
        nombre: 'Información Financiera',
        url: '/',
        urlactive: false,
        active: false,
        icono: 'financiera',
        submenu: [
          {
            id: 2,
            nombre: 'Información Presupuestal y Financiera',
            url: '/informacion-contable-y-financiera/informacion-financiera/89',
            active: false,
          },
          {
            id: 3,
            nombre: 'Estados financieros',
            url: '/informacion-contable-y-financiera/estados-financieros/156',
            active: false,
          },
          {
            id: 4,
            nombre: 'Información Financiera Contaduría General de la Nación',
            url: '/informacion-contable-y-financiera/informacion-financiera-contaduria-general-de-la-nacion/208',
            active: false,
          },
          {
            id: 1,
            nombre: 'Información Financiera Superintendencia Nacional de Salud',
            url: '/informacion-contable-y-financiera/informacion-financiera-superintendencia-nacional-de-salud/207',
            active: false,
          },
          {
            id: 5,
            nombre: 'Conciliación de Cartera para IPS',
            url: '/informacion-contable-y-financiera/conciliacion-de-cartera-para-ips/239',
            active: false,
          },
        ],
      },
      {
        id: 7,
        nombre: 'Normatividad',
        url: '/',
        urlactive: false,
        active: false,
        icono: 'normativa',
        submenu: [
          {
            id: 2,
            nombre: 'Resoluciones',
            url: '/normatividad/49',
            active: false,
          },
          {
            id: 3,
            nombre: 'Decretos',
            url: '/normatividad/234',
            active: false,
          },
          {
            id: 4,
            nombre: 'Leyes',
            url: '/normatividad/233',
            active: false,
          },
          {
            id: 5,
            nombre: 'Circulares',
            url: '/normatividad/235',
            active: false,
          },
        ],
      },
      {
        id: 7,
        nombre: 'Tramites y servicios',
        url: '/',
        urlactive: false,
        active: false,
        icono: 'tramites',
        submenu: [
          {
            id: 2,
            nombre: 'Trámites',
            url: '/tramites-y-servicios/tramites/54',
            active: false,
          },
          {
            id: 4,
            nombre: 'Ventanilla Virtual',
            url: '/tramites-y-servicios/ventanilla-virtual/55',
            active: false,
          },
        ],
      },
      {
        id: 7,
        nombre: 'Información al ciudadano',
        url: '/informacion-al-ciudadano/boletin-virtual/17',
        urlactive: false,
        active: false,
        icono: 'informacion',
        submenu: [
          {
            id: 4,
            nombre: 'Atención y servicios a la Ciudadanía',
            url: '/informacion-al-ciudadano/nuestras-oficinas/115',
            active: false,
          },
          {
            id: 2,
            nombre: 'Guías',
            url: '/informacion-al-ciudadano/guias/195',
            active: false,
          },
          {
            id: 3,
            nombre: 'Manuales',
            url: '/informacion-al-ciudadano/manuales/196',
            active: false,
          },
          {
            id: 4,
            nombre: 'Correspondencia devuelta',
            url: '/informacion-al-ciudadano/correspondencia-devuelta/194',
            active: false,
          },
        ],
      },
    ];
    let path = this.location.path().split('/');
    if (this.location.path().indexOf('/noticias/') >= 0) {
      this.activarMenu('57');
    } else {
      this.activarMenu(path[path.length - 1]);
    }
  }

  activarMenu(numberPath: string) {
    this.submenu.forEach((item) => {
      item.active = false;
      let numberUrl = item.url.split('/')[item.url.split('/').length - 1];
      if (item.submenu!.length > 0) {
        item.submenu!.forEach((submenu) => {
          submenu.active = false;
          let numberSurl =
            submenu.url.split('/')[submenu.url.split('/').length - 1];
          if (numberSurl == numberPath) {
            submenu.active = true;
            item.active = true;
          }
          if (submenu.submenu != undefined) {
            submenu.submenu!.forEach((subsubmenu) => {
              subsubmenu.active = false;
              let numberSurl =
                subsubmenu.url.split('/')[subsubmenu.url.split('/').length - 1];
              if (numberSurl == numberPath) {
                subsubmenu.active = true;
                submenu.active = true;
                item.active = true;
              }
            });
          }
        });
      }
      if (item.urlactive) {
        if (numberUrl == numberPath) {
          item.active = true;
        }
      }
    });
  }

  cambio(index: number, active: boolean) {
    this.submenu.forEach((item) => {
      item.active = false;
    });
    this.submenu[index].active = !active;
  }
}
