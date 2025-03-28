import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServiciosSaludComponent } from './modules/servicios-salud/servicios-salud.component';
import { InformacionFinancieraComponent } from './modules/informacion-financiera/informacion-financiera.component';
import { InformesComponent } from './modules/informes/informes.component';
import { NormatividadComponent } from './modules/normatividad/normatividad.component';
import { ParticipaComponent } from './modules/participa/participa.component';
import { PlanesComponent } from './modules/planes/planes.component';
import { SalaPrensaComponent } from './modules/sala-prensa/sala-prensa.component';
import { AtencionUsuarioComponent } from './modules/atencion-al-usuario/atencion-al-usuario.component';
import { TramitesServiciosComponent } from './modules/tramites-servicios/tramites-servicios.component';
import { InformacionCiudadanoComponent } from './modules/informacion-ciudadano/informacion-ciudadano.component';
import { CorporativoComponent } from './modules/corporativo/corporativo.component';
import { KidsComponent } from './kids/kids.component';

export let routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'corporativo',
    component: CorporativoComponent,
    title: 'Transparencia y acceso a la información pública',
    data: {
      page: true,
      path: 'corporativo/transparencia-y-acceso-a-la-informacion-publica/163',
    },
    loadChildren: () =>
      import('./modules/corporativo/corporativo.module').then(
        (m) => m.CorporativoModule
      ),
  },
  {
    path: 'servicios-de-salud',
    component: ServiciosSaludComponent,
    title: 'Servicios de Salud',
    data: {
      page: false,
    },
    loadChildren: () =>
      import('./modules/servicios-salud/servicios-salud.module').then(
        (m) => m.ServiciosSaludModule
      ),
  },
  {
    path: 'informacion-contable-y-financiera',
    component: InformacionFinancieraComponent,
    title: 'Información Financiera',
    data: {
      page: false,
    },
    loadChildren: () =>
      import(
        './modules/informacion-financiera/informacion-financiera.module'
      ).then((m) => m.InformacionFinancieraModule),
  },
  {
    path: 'informes',
    component: InformesComponent,
    title: 'Informes',
    data: {
      page: false,
    },
    loadChildren: () =>
      import('./modules/informes/informes.module').then(
        (m) => m.InformesModule
      ),
  },
  {
    path: 'normatividad',
    component: NormatividadComponent,
    title: 'Normatividad',
    data: {
      page: false,
    },
    loadChildren: () =>
      import('./modules/normatividad/normatividad.module').then(
        (m) => m.NormatividadModule
      ),
  },
  {
    path: 'participa',
    component: ParticipaComponent,
    title: 'Participa',
    data: {
      page: false,
    },
    loadChildren: () =>
      import('./modules/participa/participa.module').then(
        (m) => m.ParticipaModule
      ),
  },
  {
    path: 'planeacion-gestion-y-control',
    component: PlanesComponent,
    title: 'Planes y Programas',
    data: {
      page: false,
    },
    loadChildren: () =>
      import('./modules/planes/planes.module').then((m) => m.PlanesModule),
  },
  {
    path: 'sala-de-prensa',
    component: SalaPrensaComponent,
    title: 'Sala de Prensa',
    data: {
      page: false,
    },
    loadChildren: () =>
      import('./modules/sala-prensa/sala-prensa.module').then(
        (m) => m.SalaPrensaModule
      ),
  },
  {
    path: 'atencion-al-usuario',
    title: 'Atencion al usuario',
    data: {
      page: false,
    },
    component: AtencionUsuarioComponent,
    loadChildren: () =>
      import('./modules/atencion-al-usuario/atencion-al-usuario.module').then(
        (m) => m.AtencionUsuarioModule
      ),
  },
  {
    path: 'tramites-y-servicios',
    component: TramitesServiciosComponent,
    title: 'Trámites y servicios',
    data: {
      page: false,
    },
    loadChildren: () =>
      import('./modules/tramites-servicios/tramites-servicios.module').then(
        (m) => m.TramitesServiciosModule
      ),
  },
  {
    path: 'informacion-al-ciudadano',
    component: InformacionCiudadanoComponent,
    title: 'Información al ciudadano',
    data: {
      page: true,
      path: 'informacion-al-ciudadano/boletin-virtual/17',
    },
    loadChildren: () =>
      import(
        './modules/informacion-ciudadano/informacion-ciudadano.module'
      ).then((m) => m.InformacionCiudadanoModule),
  },
  {
    path: 'kids',
    component: KidsComponent,
  },
];
export let AppRouterModule = RouterModule.forRoot(routes, {});
