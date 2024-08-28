import { Component } from '@angular/core';
import arrayDecretos from './decretos.json';
import { NgFor } from '@angular/common';
import { Decreto } from './decreto';

@Component({
  selector: 'app-decretos',
  standalone: true,
  imports: [NgFor],
  templateUrl: './decretos.component.html',
  styleUrl: './decretos.component.css'
})
export class DecretosComponent {
    decretos: Decreto[] = arrayDecretos;
}