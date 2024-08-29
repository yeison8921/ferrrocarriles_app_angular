import { Component } from '@angular/core';
import { InternasComponent } from '../../general/internas/internas.component';

@Component({
  selector: 'app-informacion-financiera',
  standalone: true,
  imports: [InternasComponent],
  templateUrl: './informacion-financiera.component.html',
  styleUrl: './informacion-financiera.component.css',
})
export class InformacionFinancieraComponent {}
