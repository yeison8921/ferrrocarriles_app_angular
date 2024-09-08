import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { TopbarComponent } from './topbar/topbar.component';
import { SearchComponent } from './search/search.component';
import { debounceTime, fromEvent, throttleTime } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TopbarComponent, MenuComponent, SearchComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements AfterViewInit {
  @Input() minHeight?: number;
  @Input('app-root') topOffset?: number;

  private domElement: HTMLElement;

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {
    this.domElement = this.elementRef.nativeElement as HTMLElement;
    fromEvent(window, 'resize')
      .pipe(throttleTime(1000), debounceTime(500))
      .subscribe(() => this.setHeight());
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.setHeight();
    }, 10);
  }

  private setHeight() {
    let height = document.getElementById('header')?.offsetHeight;
    this.renderer.setStyle(this.domElement, 'display', 'block');
    this.renderer.setStyle(this.domElement, 'margin-top', `${height}px`);
  }

  @HostListener('document:scroll', ['$event'])
  moveHeader(event: any) {
    let scroll = event.target.scrollingElement.scrollTop;
    let heightTopbar = document.getElementById('topbar')?.offsetHeight;
    let heightLogos = document.getElementById('logos')?.offsetHeight;
    if (scroll >= heightTopbar! + heightLogos!) {
      this.renderer.setStyle(
        document.getElementById('menu'),
        'position',
        'fixed'
      );
    }
    if (scroll < heightTopbar! + heightLogos!) {
      this.renderer.setStyle(
        document.getElementById('menu'),
        'position',
        'relative'
      );
    }
  }
}
