import { NgFor } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-kids',
  standalone: true,
  imports: [NgbCarouselModule, NgFor],
  templateUrl: './kids.component.html',
  styleUrl: './kids.component.css',
})
export class KidsComponent {
  @ViewChild('slider') slider?: ElementRef<HTMLElement>;
  sliderDiv?: any;
  scrollLeft?: number;
  widthImg?: number;
  leftOrig?: number;
  id: any;

  isDown: boolean = false;
  startX?: number;

  dibujos: any = [
    {
      imagen: '1.jpg',
      url: '1.pdf',
    },
    {
      imagen: '2.jpg',
      url: '2.pdf',
    },
    {
      imagen: '3.jpg',
      url: '3.pdf',
    },
    {
      imagen: '4.jpg',
      url: '4.pdf',
    },
    {
      imagen: '5.jpg',
      url: '5.pdf',
    },
    {
      imagen: '6.jpg',
      url: '6.pdf',
    },
    {
      imagen: '7.jpg',
      url: '7.pdf',
    },
  ];

  end(e: any) {
    if (!this.isDown) return;
    this.scrollLeft = this.slider!.nativeElement!.scrollLeft;
    let direccion = this.scrollLeft! - this.leftOrig!;
    if (direccion > 0) this.mover(0);
    if (direccion < 0) this.mover(1);
    this.isDown = false;
  }

  start(e: any) {
    this.isDown = true;
    this.startX =
      e.pageX || e.touches[0].pageX - this.slider!.nativeElement!.offsetLeft;
    this.leftOrig = this.slider!.nativeElement!.scrollLeft;
  }

  move = (e: any) => {
    if (!this.isDown) return;
    const x =
      e?.pageX || e.touches[0]?.pageX - this.slider!.nativeElement!.offsetLeft;
    const dist = x - this.startX!;
    this.slider!.nativeElement!.scrollLeft = this.leftOrig! - dist;
  };

  mover(est: number) {
    this.sliderDiv = this.slider!.nativeElement!;
    this.scrollLeft = this.sliderDiv.scrollLeft;
    this.widthImg = this.sliderDiv.children[1]!.clientWidth;
    this.leftOrig =
      Math.round(this.scrollLeft! / this.widthImg!) * this.widthImg!;

    var t = this;
    if (est == 0) {
      console.log(this.scrollLeft!);
      if (
        this.scrollLeft! <
        this.sliderDiv.children[1].getBoundingClientRect().width *
          (this.sliderDiv.children.length - 2)
      ) {
        console.log(this.scrollLeft!);
        this.id = setInterval(() => {
          this.siguiente(t);
        });
      }
    } else {
      if (this.scrollLeft! > 0) {
        this.id = setInterval(() => {
          this.anterior(t);
        });
      }
    }
  }

  siguiente(t: any) {
    t.scrollLeft = t.scrollLeft! + 10;
    t.sliderDiv.scrollLeft = t.scrollLeft;
    if (t.scrollLeft >= t.leftOrig! + t.widthImg!) {
      t.sliderDiv.scrollLeft = t.leftOrig! + t.widthImg!;
      clearInterval(this.id);
    }
  }

  anterior(t: any) {
    t.scrollLeft = t.scrollLeft! - 10;
    t.sliderDiv.scrollLeft = t.scrollLeft;
    if (t.scrollLeft <= t.leftOrig! - t.widthImg!) {
      t.sliderDiv.scrollLeft = t.leftOrig! - t.widthImg!;
      clearInterval(this.id);
    }
  }
}
