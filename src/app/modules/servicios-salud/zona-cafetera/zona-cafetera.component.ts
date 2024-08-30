import { Component } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { NgFor, NgIf } from '@angular/common';
import arrayDepartments from './departments.json';
import { Department } from './department';

@Component({
  selector: 'app-zona-cafetera',
  standalone: true,
  imports: [NgbAccordionModule, NgFor, NgIf],
  templateUrl: './zona-cafetera.component.html',
  styleUrl: './zona-cafetera.component.css'
})
export class ZonaCafeteraComponent {
  departments: Department[] = arrayDepartments;
}
