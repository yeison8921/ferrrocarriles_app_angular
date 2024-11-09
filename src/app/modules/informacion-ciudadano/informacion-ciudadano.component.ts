import { Component } from '@angular/core';
import { InternasComponent } from '../../general/internas/internas.component';

@Component({
  selector: 'app-informacion-ciudadano',
  standalone: true,
  imports: [InternasComponent],
  templateUrl: './informacion-ciudadano.component.html',
  styleUrl: './informacion-ciudadano.component.css',
})
export class InformacionCiudadanoComponent {}
