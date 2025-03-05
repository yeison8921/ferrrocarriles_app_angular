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
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  kids: boolean = false;
  constructor(private location: Location) {
    var url = this.location.path().split('/');
    if (url.length > 0 && url[1] == 'kids') {
      this.kids = true;
    }
  }
  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.loadTawkTo();
  }
  loadTawkTo() {
    var Tawk_API: any = Tawk_API || {},
      Tawk_LoadStart = new Date();
    var script = document.createElement('script');
    script.async = true;
    script.src =
      'https://embed.tawk.to/05a20243a5baddc6545dcf3bde75f28e95dfaa10/default';
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');
    document.body.appendChild(script);
  }
}
