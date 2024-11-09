import { Component, inject, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Videos } from '../../interfaces';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video-modal',
  standalone: true,
  imports: [],
  templateUrl: './video-modal.component.html',
  styleUrl: './video-modal.component.css',
})
export class VideoModalComponent implements OnInit {
  modal = inject(NgbActiveModal);
  @Input() video!: Videos;
  urlYoutube?: SafeResourceUrl;
  constructor(private sanitizer: DomSanitizer) {}
  ngOnInit(): void {
    this.urlYoutube = this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://www.youtube.com/embed/' +
        this.video.idVideo +
        '?si=U1KCEYh3Hcg9qyww'
    );
  }
}
