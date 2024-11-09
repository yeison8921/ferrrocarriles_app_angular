import { Component } from '@angular/core';
import arrayCirculares from './circulares.json';
import { NgFor } from '@angular/common';
import { Circular } from './circulares';

@Component({
  selector: 'app-circulares',
  standalone: true,
  imports: [NgFor],
  templateUrl: './circulares.component.html',
  styleUrl: './circulares.component.css'
})
export class CircularesComponent {
    circulares: Circular[] = arrayCirculares;
}