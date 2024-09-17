import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ventanilla-virtual',
  standalone: true,
  imports: [NgbAccordionModule, NgFor],
  templateUrl: './ventanilla-virtual.component.html',
  styleUrl: './ventanilla-virtual.component.css',
})
export class VentanillaVirtualComponent {
}
