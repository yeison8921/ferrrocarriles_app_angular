import { Component } from '@angular/core';
import { BannerComponent } from '../../general/banner/banner.component';
import { SubmenuComponent } from '../../general/submenu/submenu.component';
import { BreadcrumbsComponent } from '../../general/breadcrumbs/breadcrumbs.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-tramites-servicios',
  standalone: true,
  imports: [
    BannerComponent,
    SubmenuComponent,
    BreadcrumbsComponent,
    RouterOutlet,
  ],
  templateUrl: './tramites-servicios.component.html',
  styleUrl: './tramites-servicios.component.css',
})
export class TramitesServiciosComponent {}
