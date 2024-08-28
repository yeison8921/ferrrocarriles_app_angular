import { Component } from '@angular/core';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-encuesta-satisfaccion',
  standalone: true,
  imports: [NgFor],
  templateUrl: './encuesta-satisfaccion.component.html',
  styleUrl: './encuesta-satisfaccion.component.css'
})
export class EncuestaSatisfaccionComponent {
}