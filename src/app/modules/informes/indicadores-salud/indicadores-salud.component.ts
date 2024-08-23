import { Component } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { NgFor, NgIf } from '@angular/common';
import arrayDocumentos from './documentos.json';
import { Documento } from './documento';

@Component({
  selector: 'app-indicadores-salud',
  standalone: true,
  imports: [NgbAccordionModule, NgFor, NgIf],
  templateUrl: './indicadores-salud.component.html',
  styleUrl: './indicadores-salud.component.css',
})
export class IndicadoresSaludComponent {
  documentos: Documento[] = arrayDocumentos;
  
}
