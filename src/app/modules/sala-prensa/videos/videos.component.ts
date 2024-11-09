import { Component, inject } from '@angular/core';
import arrayVideos from '../json/videos.json';
import { Videos } from '../interfaces';
import { CommonModule } from '@angular/common';
import { VideoModalComponent } from './video-modal/video-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-videos',
  standalone: true,
  imports: [CommonModule, VideoModalComponent],
  templateUrl: './videos.component.html',
  styleUrl: './videos.component.css',
})
export class VideosComponent {
  private modalService = inject(NgbModal);
  videos: Videos[] = arrayVideos;

  getThumb(video: Videos) {
    var results = video.url.match('[\\?&]v=([^&#]*)');
    if (results == null) {
      results = video.url.match(/(?<=https:\/\/youtu\.be\/)[\w-]+/);
    }
    video.idVideo =
      results === null ? video.url : results![results!.length - 1];

    return 'http://img.youtube.com/vi/' + video.idVideo + '/hqdefault.jpg';
  }

  open(video: any) {
    const modalRef = this.modalService.open(VideoModalComponent, {
      size: 'lg',
      centered: true,
    });
    modalRef.componentInstance.video = video;
  }
}
