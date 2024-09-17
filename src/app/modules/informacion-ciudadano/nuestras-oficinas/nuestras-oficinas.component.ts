import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import arrayCanales from './canales.json';
import { Canal } from './canal';

@Component({
  selector: 'app-nuestras-oficinas',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './nuestras-oficinas.component.html',
  styleUrl: './nuestras-oficinas.component.css',
})
export class NuestrasOficinasComponent {
   canales: Canal[] = arrayCanales;
}
