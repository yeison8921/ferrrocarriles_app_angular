import { Component } from '@angular/core';
import { Videos } from '../../modules/sala-prensa/interfaces';
import arrayVideos from '../../modules/sala-prensa/json/videos.json';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-multimedia',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './multimedia.component.html',
  styleUrl: './multimedia.component.css',
})
export class MultimediaComponent {
  videos: Videos[] = arrayVideos;
  constructor(private sanitizer: DomSanitizer) {}
  getIdVideo(url: string) {
    var results = url.match('[\\?&]v=([^&#]*)');
    if (results == null) {
      results = url.match(/(?<=https:\/\/youtu\.be\/)[\w-]+/);
    }
    var idVideo = results === null ? url : results![results!.length - 1];

    var urlVideo: SafeResourceUrl =
      this.sanitizer.bypassSecurityTrustResourceUrl(
        'https://www.youtube.com/embed/' + idVideo + '?si=U1KCEYh3Hcg9qyww'
      );

    return urlVideo;
  }
}
