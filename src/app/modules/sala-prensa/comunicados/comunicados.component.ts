import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { Comunicados } from '../interfaces';
import arrayComunicados from '../json/comunicados.json';

@Component({
  selector: 'app-comunicados',
  standalone: true,
  imports: [NgFor, NgbPaginationModule, NgIf],
  templateUrl: './comunicados.component.html',
  styleUrl: './comunicados.component.css',
})
export class ComunicadosComponent {
  comunicados: Comunicados[] = arrayComunicados;
  page = 1;
}
