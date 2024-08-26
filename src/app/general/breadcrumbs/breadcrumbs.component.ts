import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-breadcrumbs',
  standalone: true,
  imports: [NgIf],
  templateUrl: './breadcrumbs.component.html',
  styleUrl: './breadcrumbs.component.css',
})
export class BreadcrumbsComponent implements OnInit {
  padre?: any;
  titulo?: string;
  constructor(private readonly title: Title, private readonly router: Router) {
    this.padre = {
      nombre:
        this.router.routerState.root.firstChild!.snapshot.routeConfig!.title,
      url: this.router.routerState.root.firstChild!.snapshot.routeConfig!.path,
      page: this.router.routerState.root.firstChild!.snapshot.routeConfig!
        .data!['page'],
    };
  }
  ngOnInit() {
    this.titulo = this.title.getTitle();
  }
}
