import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoticiasComponent } from './noticias/noticias.component';
import arrayNoticias from './json/noticias.json';
import { NoticiaInternaComponent } from './noticias/noticia-interna/noticia-interna.component';

import { EventosComponent } from './eventos/eventos.component';

let routes: Routes = [
  {
    path: 'noticias/57',
    title: 'Noticias',
    component: NoticiasComponent,
  },

  {
    path: 'eventos/120',
    title: 'Eventos',
    component: EventosComponent,
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
