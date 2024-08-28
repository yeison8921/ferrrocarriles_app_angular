import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import arrayDocumentos from './documentos.json';
import { Documento } from './documentos';

@Component({
  selector: 'app-ofertas-laborales',
  standalone: true,
  imports: [NgFor],
  templateUrl: './ofertas-laborales.component.html',
  styleUrl: './ofertas-laborales.component.css'
})
export class OfertasLaboralesComponent {
  documentos: Documento[] = arrayDocumentos;
}