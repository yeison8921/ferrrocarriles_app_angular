import { Component } from '@angular/core';
import arrayCanales from './canales.json';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { NgFor } from '@angular/common';
import { Canal } from './canal';

@Component({
  selector: 'app-canal-atencion-red-de-prestadores',
  standalone: true,
  imports: [NgbAccordionModule, NgFor],
  templateUrl: './canal-atencion-red-de-prestadores.component.html',
  styleUrl: './canal-atencion-red-de-prestadores.component.css'
})
export class CanalAtencionRedDePrestadoresComponent {
  canales: Canal[] = arrayCanales;
}
