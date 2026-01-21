import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AccessibilityComponent } from './general/accessibility/accessibility.component';
import { FooterComponent } from './general/footer/footer.component';
import { HeaderComponent } from './general/header/header.component';
import { Location, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    AccessibilityComponent,
    NgIf,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  kids: boolean = false;
  secureApp: boolean = false; 

  constructor(private location: Location) {
    const url = this.location.path().split('/');
    if (url.length > 0 && url[1] === 'kids') {
      this.kids = true;
    }
  }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    const month = new Date().getMonth(); 
    if (month > 2 && month < 11) {
      this.secureApp = true;
    }
  }
}



