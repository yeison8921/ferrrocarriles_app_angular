import { Component } from '@angular/core';
import arrayDocumentos from './documentos.json';
import arrayResoluciones from './resoluciones.json';
import { NgFor, NgIf } from '@angular/common';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { Documento } from './documento';
import { Resolucion } from './resolucion';

@Component({
  selector: 'app-resoluciones',
  standalone: true,
  imports: [NgbAccordionModule, NgFor, NgIf],
  templateUrl: './resoluciones.component.html',
  styleUrl: './resoluciones.component.css'
})
export class ResolucionesComponent {
  documentos: Documento[] = arrayDocumentos;
  resoluciones: Resolucion[] = arrayResoluciones;
}
