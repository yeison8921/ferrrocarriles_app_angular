import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoticiasComponent } from './noticias/noticias.component';
import arrayNoticias from './json/noticias.json';
import { NoticiaInternaComponent } from './noticias/noticia-interna/noticia-interna.component';
import { ComunicadosComponent } from './comunicados/comunicados.component';
import { VideosComponent } from './videos/videos.component';

let routes: Routes = [
  {
    path: 'noticias/57',
    title: 'Noticias',
    component: NoticiasComponent,
  },
  {
    path: 'comunicados/124',
    title: 'Comunicados',
    component: ComunicadosComponent,
  },
  {
    path: 'videos/123',
    title: 'Videos',
    component: VideosComponent,
  },
];

arrayNoticias.forEach((noticia) => {
  routes.push({
    path: 'noticias/' + noticia.url,
    title: noticia.titulo,
    component: NoticiaInternaComponent,
  });
});

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalaPrensaModule {}
