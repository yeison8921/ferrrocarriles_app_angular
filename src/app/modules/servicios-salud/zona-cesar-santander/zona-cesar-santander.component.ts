import { Component } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { NgFor, NgIf } from '@angular/common';
import arrayDepartments from './departments.json';
import { Department } from './department';

@Component({
  selector: 'app-zona-cesar-santander',
  standalone: true,
  imports: [NgbAccordionModule, NgFor, NgIf],
  templateUrl: './zona-cesar-santander.component.html',
  styleUrl: './zona-cesar-santander.component.css'
})
export class ZonaCesarSantanderComponent {
  departments: Department[] = arrayDepartments;
}
