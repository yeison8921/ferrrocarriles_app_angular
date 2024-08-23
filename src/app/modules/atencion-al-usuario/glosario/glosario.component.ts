import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import arrayGlosario from './glosario.json';
import { Glosario } from './glosario';




@Component({
  selector: 'app-glosario',
  standalone: true,
  imports: [NgbAccordionModule, NgFor],
  templateUrl: './glosario.component.html',
  styleUrl: './glosario.component.css'
})
export class GlosarioComponent {
  glosario: Glosario[] = arrayGlosario;
}