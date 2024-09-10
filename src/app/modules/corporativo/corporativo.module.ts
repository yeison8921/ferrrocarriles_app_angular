import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MisionVisionComponent } from './mision-vision/mision-vision.component';
import { DirectorioGeneralFuncionariosComponent } from './directorio-general-funcionarios/directorio-general-funcionarios.component';
import { FuncionesComponent } from './funciones/funciones.component';
import { PoliticasigComponent } from './politicasig/politicasig.component';
import { TalentoHumanoComponent } from './talento-humano/talento-humano.component';
import { GestionDocumentalComponent } from './gestion-documental/gestion-documental.component';
import { TransparenciaComponent } from './transparencia/transparencia.component';
import { InformacionGeneralComponent } from './informacion-general/informacion-general.component';
import { OrganigramaComponent } from './organigrama/organigrama.component';
import { DirectorioDeContratistasFpsComponent } from './directorio-de-contratistas-fps/directorio-de-contratistas-fps.component';
import { RegistroDePublicacionesComponent } from './registro-de-publicaciones/registro-de-publicaciones.component';
import { MapaSitioComponent } from './mapa-sitio/mapa-sitio.component';
import { ObjetivosinstComponent } from './objetivosinst/objetivosinst.component';
import { EntidadesRegulanComponent } from './entidades-regulan/entidades-regulan.component';
import { DirectorioEntidadesComponent } from './directorio-entidades/directorio-entidades.component';
import { EntidadComponent } from './entidad/entidad.component';

const routes: Routes = [
  {
    path: 'transparencia-y-acceso-a-la-informacion-publica/163',
    component: TransparenciaComponent,
    title: 'Transparencia y acceso a la información pública',
  },
  {
    path: 'mision-y-vision/37',
    component: MisionVisionComponent,
    title: 'Misión y visión',
  },
  {
    path: 'funciones/38',
    component: FuncionesComponent,
    title: 'Funciones',
  },
  {
    path: 'politica-del-sistema-integrado-de-gestion/40',
    component: PoliticasigComponent,
    title: 'Politica SIG',
  },
  {
    path: 'talento-humano/46',
    component: TalentoHumanoComponent,
    title: 'Talento humano',
  },
  {
    path: 'gestion-documental/51',
    component: GestionDocumentalComponent,
    title: 'Gestión documental',
  },
  {
    path: 'directorio-general-funcionarios-fps/192',
    title: 'Directorio General Funcionarios FPS',
    component: DirectorioGeneralFuncionariosComponent,
  },
  {
    path: 'informacion-general/42',
    title: 'Información General',
    component: InformacionGeneralComponent,
  },
  {
    path: 'organigrama/48',
    title: 'Organigrama',
    component: OrganigramaComponent,
  },
  {
    path: 'directorio-de-contratistas-fps/221',
    title: 'Directorio de contratistas FPS',
    component: DirectorioDeContratistasFpsComponent,
  },
  {
    path: 'registro-de-publicaciones/216',
    title: 'Registro de publicaciones',
    component: RegistroDePublicacionesComponent,
  },
  {
    path: 'mapa-del-sitio/238',
    title: 'Mapa del sitio',
    component: MapaSitioComponent,
  },
  {
    path: 'objetivos-institucionales/41',
    title: 'Objetivos institucionales',
    component: ObjetivosinstComponent,
  },
  {
    path: 'entidades-que-nos-regulan/45',
    title: 'Entidades que nos regulan',
    component: EntidadesRegulanComponent,
  },
  {
    path: 'directorio-de-entidades/209',
    title: 'Directorio de Entidades',
    component: DirectorioEntidadesComponent,
  },
  {
    path: 'la-entidad/15',
    title: 'La Entidad',
    component: EntidadComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CorporativoModule {}
