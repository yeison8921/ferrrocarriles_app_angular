import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import arrayNoticias from '../../json/noticias.json';
import { Noticias } from '../../interfaces';

@Component({
  selector: 'app-noticia-interna',
  standalone: true,
  imports: [],
  templateUrl: './noticia-interna.component.html',
  styleUrl: './noticia-interna.component.css',
})
export class NoticiaInternaComponent implements OnInit {
  noticia?: Noticias[];
  constructor(private location: Location) {}
  ngOnInit() {
    var palabra = '/noticias/';
    var url = this.location
      .path()
      .substring(this.location.path().lastIndexOf(palabra) + palabra.length);

    this.noticia = arrayNoticias.filter((noticia: any) => {
      return noticia.url == url;
    });

    var contenido = document.createElement('div');
    contenido.innerHTML = this.noticia[0].contenido!;
    contenido.querySelectorAll('a').forEach((link) => {
      link.removeAttribute('class');
      var href = link.getAttribute('href');
      var ext = href!.split('.');
      var texto = link.text;
      if (ext.length > 1) {
        if (ext[ext.length - 1] == 'xlsx' || ext[ext.length - 1] == 'xls') {
          ext[ext.length - 1] = 'excel';
        }
        if (ext[ext.length - 1] == 'docx' || ext[ext.length - 1] == 'doc') {
          ext[ext.length - 1] = 'word';
        }
        link.innerHTML =
          '<a class="link-file" href="' +
          href +
          '" target="_blank" > <i class="bi bi-file-earmark-' +
          ext[ext.length - 1] +
          '-fill"></i> ' +
          texto +
          '</a>';
      } else {
        link.classList.add('btn-comun mb-4');
      }
    });

    this.noticia[0].contenido = contenido.innerHTML;
  }
}
