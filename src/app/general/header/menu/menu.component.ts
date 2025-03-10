import { Component } from '@angular/core';
import {
  NgbCollapseModule,
  NgbDropdownModule,
} from '@ng-bootstrap/ng-bootstrap';
import { NgClass, NgFor, NgIf, Location } from '@angular/common';
import { Menu } from '../../../interfaces/header';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    NgbCollapseModule,
    NgbDropdownModule,
    NgClass,
    NgFor,
    NgIf,
    SearchComponent,
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent {
  isCollapsed = true;
  menu: Menu[];

  constructor(private location: Location) {
    this.menu = [
      {
        id: 1,
        nombre: 'INICIO',
        url: '/',
        active: false,
        submenu: [],
      },
      {
        id: 2,
        nombre: 'TRANSPARENCIA Y ACCESO A LA INFORMACIÓN PÚBLICA',
        url: '/corporativo/transparencia-y-acceso-a-la-informacion-publica/163',
        active: false,
        submenu: [],
      },
      {
        id: 3,
        nombre: 'ATENCIÓN Y SERVICIOS DE LA CIUDADANÍA',
        url: '/#',
        active: false,
        submenu: [
          {
            id: 10,
            nombre: 'Trámites y Servicios',
            url: '/tramites-y-servicios/tramites/54',
            active: false,
            submenu: [],
          },
          {
            id: 20,
            nombre: 'PQRSDF',
            url: 'https://sedevirtual.fps.gov.co',
            active: false,
            submenu: [],
          },
          {
            id: 20,
            nombre: 'Prestaciones Economicas',
            url: 'https://sedevirtual.fps.gov.co/prestini',
            active: false,
            submenu: [],
          },
          {
            id: 11,
            nombre: 'Canales de Atención',
            url: '/informacion-al-ciudadano/nuestras-oficinas/115',
            active: false,
            submenu: [],
          },
        ],
      },
      {
        id: 4,
        nombre: 'PARTICIPA',
        url: '/participa/pqrs/222',
        active: false,
        submenu: [],
      },
      {
        id: 5,
        nombre: 'LA ENTIDAD',
        url: '/corporativo/la-entidad/15',
        active: false,
        submenu: [],
      },
      {
        id: 6,
        nombre: 'SALA DE PRENSA',
        url: '/sala-de-prensa/noticias/57',
        active: false,
        submenu: [],
      },
      {
        id: 7,
        nombre: 'SERVICIOS DE SALUD',
        url: '/#',
        active: false,
        submenu: [
          {
            id: 13,
            nombre: 'Canal de Atención Servicios de Salud',
            url: '/servicios-de-salud/canal-de-atencion-red-de-prestadores/244',
            active: false,
            submenu: [],
          },
          {
            id: 14,
            nombre: 'Cobertura de Operación y Red de Prestadores de Salud',
            url: '/servicios-de-salud/red-de-prestadores/44',
            active: false,
            submenu: [],
          },
          {
            id: 15,
            nombre: 'Sistema de Afiliación Transaccional (SAT)',
            url: '/servicios-de-salud/sistema-de-afiliacion-transaccional-sat/223',
            active: false,
            submenu: [],
          },
          {
            id: 16,
            nombre: 'Ruta de promoción y mantenimiento de la salud',
            url: '/servicios-de-salud/programa-de-promocion-y-prevencion/132',
            active: false,
            submenu: [],
          },
          {
            id: 17,
            nombre: 'Indicadores de salud',
            url: '/servicios-de-salud/indicadores-de-salud/190',
            active: false,
            submenu: [],
          },
          {
            id: 18,
            nombre: 'Afiliados',
            url: '/servicios-de-salud/afiliados/242',
            active: false,
            submenu: [],
          },
          {
            id: 19,
            nombre: 'Gestión del Riesgo',
            url: '/servicios-de-salud/gestion-del-riesgo/259',
            active: false,
            submenu: [],
          },
        ],
      },
      {
        id: 8,
        nombre: 'PLANEACIÓN, GESTIÓN Y CONTROL',
        url: '/planeacion-gestion-y-control/53',
        active: false,
        submenu: [],
      },
      {
        id: 9,
        nombre: 'INFORMACIÓN PRESUPUESTAL Y FINANCIERA',
        url: '/informacion-contable-y-financiera/informacion-financiera/89',
        active: false,
        submenu: [],
      },
    ];
    let path = this.location.path().split('/');
    this.activarMenu(path[path.length - 1]);
  }
  activarMenu(numberPath: string) {
    this.menu.forEach((item) => {
      item.active = false;
      let numberUrl = item.url.split('/')[item.url.split('/').length - 1];
      if (item.submenu!.length > 0) {
        item.submenu!.forEach((submenu) => {
          submenu.active = false;
          let numberSurl =
            submenu.url.split('/')[submenu.url.split('/').length - 1];
          if (numberSurl == numberPath) {
            submenu.active = true;
          }
        });
      } else {
        if (numberUrl == numberPath) {
          item.active = true;
        }
      }
    });
  }
}
