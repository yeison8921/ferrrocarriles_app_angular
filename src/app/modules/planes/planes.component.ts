import { Component } from '@angular/core';
import { BannerComponent } from '../../general/banner/banner.component';
import { SubmenuComponent } from '../../general/submenu/submenu.component';
import { RouterOutlet } from '@angular/router';
import { BreadcrumbsComponent } from '../../general/breadcrumbs/breadcrumbs.component';

@Component({
  selector: 'app-planes',
  standalone: true,
  imports: [
    BannerComponent,
    SubmenuComponent,
    RouterOutlet,
    BreadcrumbsComponent,
  ],
  templateUrl: './planes.component.html',
  styleUrl: './planes.component.css',
})
export class PlanesComponent {}
