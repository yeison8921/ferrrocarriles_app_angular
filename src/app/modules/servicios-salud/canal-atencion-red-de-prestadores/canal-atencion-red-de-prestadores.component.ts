import { Component } from '@angular/core';
import arrayCanales from './canales.json';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { NgFor, NgIf } from '@angular/common';
import { Canal } from './canal';
import { Option } from './option';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-canal-atencion-red-de-prestadores',
  standalone: true,
  imports: [NgbAccordionModule, NgFor, NgIf, FormsModule],
  templateUrl: './canal-atencion-red-de-prestadores.component.html',
  styleUrl: './canal-atencion-red-de-prestadores.component.css'
})
export class CanalAtencionRedDePrestadoresComponent {
  canales: Canal[] = arrayCanales;
  optionsDepartments: Option[] = [];
  selectedDepartment: string[] = ["", "",""];

  ngOnInit(): void {
    this.optionsDepartments = this.canales.map(section => {
      const departmentOptions = section.departments.map(department => ({
        value: department.name,
        label: department.name
      }));
      
      return {
        [section.id]: departmentOptions
      };
    });
  }
}
