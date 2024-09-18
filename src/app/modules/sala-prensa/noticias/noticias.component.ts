import { Component } from '@angular/core';
import { Noticias } from '../interfaces';
import { NgFor } from '@angular/common';
import arrayNoticias from '../json/noticias.json';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-noticias',
  standalone: true,
  imports: [NgFor, NgbPaginationModule],
  templateUrl: './noticias.component.html',
  styleUrl: './noticias.component.css',
})
export class NoticiasComponent {
  noticias: Noticias[] = arrayNoticias;
  page = 1;
}
