import { Component } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { NgFor, NgIf } from '@angular/common';
import arrayDepartments from './departments.json';
import { Department } from './department';

@Component({
  selector: 'app-zona-pacifico',
  standalone: true,
  imports: [NgbAccordionModule, NgFor, NgIf],
  templateUrl: './zona-pacifico.component.html',
  styleUrl: './zona-pacifico.component.css'
})
export class ZonaPacificoComponent {
  departments: Department[] = arrayDepartments;
}
