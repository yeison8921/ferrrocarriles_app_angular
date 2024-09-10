import { Component } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { NgFor, NgIf } from '@angular/common';
import arrayDepartments from './departments.json';
import { Department } from './department';

@Component({
  selector: 'app-zona-antioquia',
  standalone: true,
  imports: [NgbAccordionModule, NgFor, NgIf],
  templateUrl: './zona-antioquia.component.html',
  styleUrl: './zona-antioquia.component.css'
})
export class ZonaAntioquiaComponent {
  departments: Department[] = arrayDepartments;
}
