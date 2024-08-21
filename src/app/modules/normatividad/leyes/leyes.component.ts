import { Component } from '@angular/core';
import arrayLeyes from './leyes.json';
import { NgFor } from '@angular/common';
import { Ley } from './leyes';

@Component({
  selector: 'app-leyes',
  standalone: true,
  imports: [NgFor],
  templateUrl: './leyes.component.html',
  styleUrl: './leyes.component.css'
})
export class LeyesComponent {
    leyes: Ley[] = arrayLeyes;
}