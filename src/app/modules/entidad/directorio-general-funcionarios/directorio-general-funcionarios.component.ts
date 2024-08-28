import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import arrayFuncionarios from './funcionarios.json';
import { Funcionario } from './funcionario';

@Component({
  selector: 'app-directorio-general-funcionarios',
  standalone: true,
  imports: [NgbAccordionModule, NgFor, NgIf],
  templateUrl: './directorio-general-funcionarios.component.html',
  styleUrl: './directorio-general-funcionarios.component.css'
})
export class DirectorioGeneralFuncionariosComponent {
  funcionarios: Funcionario[] = arrayFuncionarios;
}