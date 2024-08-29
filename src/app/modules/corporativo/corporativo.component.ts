import { Component } from '@angular/core';
import { InternasComponent } from '../../general/internas/internas.component';

@Component({
  selector: 'app-corporativo',
  standalone: true,
  imports: [InternasComponent],
  templateUrl: './corporativo.component.html',
  styleUrl: './corporativo.component.css',
})
export class CorporativoComponent {}
