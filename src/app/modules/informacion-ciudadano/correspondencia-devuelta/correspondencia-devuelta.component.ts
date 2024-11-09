import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { File } from '../../../interfaces/acordion';

@Component({
  selector: 'app-correspondencia-devuelta',
  standalone: true,
  imports: [NgFor],
  templateUrl: './correspondencia-devuelta.component.html',
  styleUrl: './correspondencia-devuelta.component.css',
})
export class CorrespondenciaDevueltaComponent {
  items: File[];
  constructor() {
    this.items = [
      {
        id: 1,
        tipo: 'excel',
        url: 'assets/files/correspondencia/CorreoDevueltoFPS2017.xls',
        nombre: 'Correspondencia devuelta - 2018',
      },
      {
        id: 2,
        tipo: 'excel',
        url: '/assets/files/correspondencia/CorreoDevueltoFPS2018.xls',
        nombre: 'Correspondencia devuelta - 2017',
      },
    ];
  }
}
