// src/app/modules/atencion-al-usuario/foro/foro.component.ts
import { Component, OnInit, inject } from '@angular/core';
import { NgFor, NgIf }           from '@angular/common';
import { FormsModule }          from '@angular/forms';
import { ApiService, ForoResponse } from '../../../services/api.service';
import { Comentarios }          from './comentarios';

@Component({
  selector:   'app-foro',
  standalone: true,
  imports:    [NgFor, NgIf, FormsModule],
  templateUrl: './foro.component.html',
  styleUrls:   ['./foro.component.css'],
})
export class ForoComponent implements OnInit {
  private api = inject(ApiService);

  comentarios: Comentarios[] = [];
  currentPage = 1;
  pageSize    = 10;
  total       = 0;

  // Calcula el total de páginas
  get totalPages(): number {
    return Math.ceil(this.total / this.pageSize);
  }

  nuevoComentario = {
    nombre_usu: '',
    email:      '',
    telefono:   '',
    comentario: ''
  };

  ngOnInit(): void {
    this.obtenerComentarios();
  }

  obtenerComentarios(): void {
    this.api.getComentarios(this.currentPage, this.pageSize).subscribe({
      next: (resp: ForoResponse) => {
        this.comentarios = resp.results;
        this.total       = resp.total;
      },
      error: (err: any) => {
        console.error('Error al cargar comentarios', err);
      }
    });
  }

  cambiarPagina(delta: number): void {
    const nueva = this.currentPage + delta;
    if (nueva < 1 || nueva > this.totalPages) return;
    this.currentPage = nueva;
    this.obtenerComentarios();
  }

  enviarComentario(): void {
    if (
      !this.nuevoComentario.nombre_usu ||
      !this.nuevoComentario.email ||
      !this.nuevoComentario.telefono ||
      !this.nuevoComentario.comentario
    ) {
      return;
    }

    this.api.postComentario(this.nuevoComentario).subscribe({
      next: () => {
        this.nuevoComentario = { nombre_usu: '', email: '', telefono: '', comentario: '' };
        this.currentPage = 1;
        this.obtenerComentarios();
      },
      error: (err: any) => console.error('Error al enviar comentario', err)
    });
  }
}
