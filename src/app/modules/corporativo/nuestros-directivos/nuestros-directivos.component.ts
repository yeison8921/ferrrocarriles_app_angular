import { Component, OnInit } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { NgFor, NgIf, NgClass } from '@angular/common';
import { Modal } from 'bootstrap';
import arrayDirectivos from './directivos.json';
import { Directivo } from './directivo';


@Component({
  selector: 'app-nuestros-directivos',
  standalone: true,
  imports: [NgbAccordionModule, NgFor, NgIf, NgClass],
  templateUrl: './nuestros-directivos.component.html',
  styleUrl: './nuestros-directivos.component.css',
})
export class NuestrosDirectivosComponent implements OnInit {
  directivos: Directivo[] = arrayDirectivos;
  id: number = 0;

  ngOnInit(): void {  
  }
  
  openModal(): void {
    const modalElement = document.getElementById('exampleModal');
    const modal = new Modal(modalElement!);
    modal.show();
  }

  closeModal(): void {
    const modalElement = document.getElementById('exampleModal');
    const modal = Modal.getInstance(modalElement!);
    modal?.hide();
  }
}
