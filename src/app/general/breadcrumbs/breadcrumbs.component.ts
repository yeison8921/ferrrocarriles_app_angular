import { NgIf, Location, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-breadcrumbs',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './breadcrumbs.component.html',
  styleUrl: './breadcrumbs.component.css',
})
export class BreadcrumbsComponent implements OnInit {
  padres?: any[];
  titulo?: string;
  constructor(
    private readonly title: Title,
    private readonly router: Router,
    private location: Location
  ) {
    let path =
      this.router.routerState.root.firstChild!.snapshot.routeConfig!.data![
        'path'
      ];
    this.padres = [
      {
        nombre:
          this.router.routerState.root.firstChild!.snapshot.routeConfig!.title,
        url:
          path == ''
            ? this.router.routerState.root.firstChild!.snapshot.routeConfig!
                .path
            : path,
        page: this.router.routerState.root.firstChild!.snapshot.routeConfig!
          .data!['page'],
      },
    ];
  }
  ngOnInit() {
    this.titulo = this.title.getTitle();

    let path = this.location.path().split('/');
    if (path[path.length - 1] == '53') {
      this.padres![this.padres?.length! - 1].nombre = this.titulo;
    }
    if (this.location.path().indexOf('/noticias/') >= 0) {
      this.padres?.push({
        nombre: 'Noticias',
        url: 'sala-de-prensa/noticias/57',
        page: true,
      });
    }
  }
}
