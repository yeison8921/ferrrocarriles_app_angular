import { Component } from '@angular/core';
import arrayFuncionarios from './funcionarios.json';
import { NgFor } from '@angular/common';
import { Funcionario } from './funcionario';

@Component({
  selector: 'app-directorio-funcionarios-principales',
  standalone: true,
  imports: [NgFor],
  templateUrl: './directorio-funcionarios-principales.html',
  styleUrl: './directorio-funcionarios-principales.component.css'
})
export class DirectorioFuncionariosPrincipalesComponent {
  funcionarios: Funcionario[] = arrayFuncionarios;
}

