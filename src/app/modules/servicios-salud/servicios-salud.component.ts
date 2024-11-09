import { Component } from '@angular/core';
import { InternasComponent } from '../../general/internas/internas.component';

@Component({
  selector: 'app-servicios-salud',
  standalone: true,
  imports: [InternasComponent],
  templateUrl: './servicios-salud.component.html',
  styleUrl: './servicios-salud.component.css',
})
export class ServiciosSaludComponent {}
