import { Component } from '@angular/core';
import { InternasComponent } from '../../general/internas/internas.component';

@Component({
  selector: 'app-informes',
  standalone: true,
  imports: [InternasComponent],
  templateUrl: './informes.component.html',
  styleUrl: './informes.component.css',
})
export class InformesComponent {}
