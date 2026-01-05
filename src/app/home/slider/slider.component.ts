import { NgFor } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import {
  NgbCarousel,
  NgbCarouselModule,
  NgbSlideEvent,
  NgbSlideEventSource,
} from '@ng-bootstrap/ng-bootstrap';
import { Slider } from '../../interfaces/home';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [NgbCarouselModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css',
})
export class SliderComponent {
  slider: Slider[] | undefined;
  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  pauseOnFocus = true;

  @ViewChild('carousel', { static: true }) carousel: NgbCarousel | undefined;

  constructor() {
    this.slider = [
     {
        id: 6,
        imagen: '/assets/img/Home/sliderHome/plan2026.png',
        url: '',
      },
       {
        id: 6,
        imagen: '/assets/img/Home/sliderHome/CEREBROCARDIOVASCULAR.jpeg',
        url: '',
      },
      {
        id: 6,
        imagen: '/assets/img/Home/sliderHome/PREVENCIONCONSUMOSPA.png',
        url: '',
      },
      {
        id: 6,
        imagen: '/assets/img/Home/sliderHome/Banner.jpeg',
        url: 'https://forms.office.com/Pages/ResponsePage.aspx?id=IcbJrWyj4UKfSu3GELHf0Xj15KuHJVBNuUK0HH81aqpURElVNUlBRlJIUUZBMlo5ODZTUUsxWUlWSi4u',
      },
      
    
       {
        id: 6,
        imagen: '/assets/img/Home/sliderHome/INFORMACION IMPORTANTE CALLE 73.png',
        url: '',
      },
     
     {
        id: 6,
        imagen: '/assets/img/Home/sliderHome/RADICACION MODULOFACTURACIONDEURGENCIAS.jpg',
        url: 'https://fps.horus-health.com/',
      },

      
      {
        id: 7,
        imagen: '/assets/img/Home/sliderHome/4139.png',
        url: 'https://sedevirtual.fps.gov.co/prestini/',
      },
     
      
     
      {
        id: 5,
        imagen: '/assets/img/Home/sliderHome/mivacuna.png',
        url: 'https://mivacuna.sispro.gov.co/MiVacuna?v1',
      },
      {
        id: 4,
        imagen: '/assets/img/Home/sliderHome/EMCO-BANNER.png',
        url: '',
      },
      {
        id: 1,
        imagen: '/assets/img/Home/sliderHome/157.jpg',
        url: '',
      },
      {
        id: 2,
        imagen: '/assets/img/Home/sliderHome/145.jpg',
        url: '/servicios-de-salud/reporte-pensionados-fallecidos/269',
      },
      {
        id: 3,
        imagen: '/assets/img/Home/sliderHome/146.jpg',
        url: '/servicios-de-salud/reporte-pensionados-fallecidos/269',
      },
    ];
  }

  togglePaused() {
    if (this.paused) {
      this.carousel?.cycle();
    } else {
      this.carousel?.pause();
    }
    this.paused = !this.paused;
  }

  onSlide(slideEvent: NgbSlideEvent) {
    if (
      this.unpauseOnArrow &&
      slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT ||
        slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)
    ) {
      this.togglePaused();
    }
    if (
      this.pauseOnIndicator &&
      !slideEvent.paused &&
      slideEvent.source === NgbSlideEventSource.INDICATOR
    ) {
      this.togglePaused();
    }
  }
}
