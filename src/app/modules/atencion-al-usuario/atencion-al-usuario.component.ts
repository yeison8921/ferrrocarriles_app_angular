import { Component } from '@angular/core';
import { InternasComponent } from '../../general/internas/internas.component';

@Component({
  selector: 'app-atencion-al-usuario',
  standalone: true,
  imports: [InternasComponent],
  templateUrl: './atencion-al-usuario.component.html',
  styleUrl: './atencion-al-usuario.component.css',
})
export class AtencionUsuarioComponent {}
