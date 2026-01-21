import { NgFor } from '@angular/common';
import { File } from './../../../interfaces/acordion';
import {cardButtons} from './../../../interfaces/salud';
import { Component } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-caracterizacion-poblacional',
  standalone: true,
  imports: [NgbAccordionModule, NgFor],
  templateUrl: './caracterizacion-poblacional.html',
  styleUrl: './caracterizacion-poblacional.css',
})
export class CaracterizacionPoblacional {
  items: File[]=[];
  cards : cardButtons[]=[];

  constructor(){

    this.cards =[
      // Agrega tarjetas específicas para Caracterización Poblacional aquí
    ];
    this.items = [
      // Agrega archivos específicos para Caracterización Poblacional aquí
    ];
  }

}
