import { Component } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { NgFor, NgIf } from '@angular/common';
import arrayDepartments from './departments.json';
import { Department } from './department';

@Component({
  selector: 'app-zona-centro',
  standalone: true,
  imports: [NgbAccordionModule, NgFor, NgIf],
  templateUrl: './zona-centro.component.html',
  styleUrl: './zona-centro.component.css'
})
export class ZonaCentroComponent {
  departments: Department[] = arrayDepartments;
}
