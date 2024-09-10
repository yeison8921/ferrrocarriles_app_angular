import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import arrayCertificaciones from './certificaciones.json';
import arrayDocumentos from './documentos.json';
import { Certificacion } from './certificacion';
import { Documento } from './documento';

@Component({
  selector: 'app-buzon-notificaciones-judiciales',
  standalone: true,
  imports: [NgbAccordionModule, NgFor, NgIf],
  templateUrl: './buzon-notificaciones-judiciales.component.html',
  styleUrl: './buzon-notificaciones-judiciales.component.css'
})
export class BuzonNotificacionesJudicialesComponent {
  certificaciones: Certificacion[] = arrayCertificaciones;
  documentos: Documento[] = arrayDocumentos;
}