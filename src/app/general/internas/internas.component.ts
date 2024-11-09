import { Component } from '@angular/core';
import { SubmenuComponent } from '../submenu/submenu.component';
import { BreadcrumbsComponent } from '../breadcrumbs/breadcrumbs.component';
import { RouterOutlet } from '@angular/router';
import { BannerComponent } from '../banner/banner.component';

@Component({
  selector: 'app-internas',
  standalone: true,
  imports: [
    SubmenuComponent,
    BreadcrumbsComponent,
    RouterOutlet,
    BannerComponent,
  ],
  templateUrl: './internas.component.html',
  styleUrl: './internas.component.css',
})
export class InternasComponent {}
