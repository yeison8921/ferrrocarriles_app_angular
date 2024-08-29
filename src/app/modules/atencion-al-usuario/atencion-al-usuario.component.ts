import { Component } from '@angular/core';
import { BannerComponent } from '../../general/banner/banner.component';
import { SubmenuComponent } from '../../general/submenu/submenu.component';
import { RouterOutlet } from '@angular/router';
import { BreadcrumbsComponent } from '../../general/breadcrumbs/breadcrumbs.component';

@Component({
  selector: 'app-atencion-al-usuario',
  standalone: true,
  imports: [
    BannerComponent,
    SubmenuComponent,
    RouterOutlet,
    BreadcrumbsComponent,
  ],
  templateUrl: './atencion-al-usuario.component.html',
  styleUrl: './atencion-al-usuario.component.css',
})
export class AtencionUsuarioComponent {}
