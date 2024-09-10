import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import arrayPages from './pages.json';
import { Page } from './page';

@Component({
  selector: 'app-canal-interaccion',
  standalone: true,
  imports: [NgbAccordionModule, NgFor],
  templateUrl: './canal-interaccion.component.html',
  styleUrl: './canal-interaccion.component.css'
})
export class CanalInteraccionComponent {
    pages: Page[] = arrayPages;
}