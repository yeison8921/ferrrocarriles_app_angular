// src/app/modules/atencion-al-usuario/foro/foro.component.ts
import { Component, OnInit, inject } from '@angular/core';
import { NgFor, NgIf }           from '@angular/common';
import { FormsModule }          from '@angular/forms';
import { ApiService }           from '../../../services/api.service';
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

  // Aquí se guardará el array que viene de resp.results
  comentarios: Comentarios[] = [];

  // Modelo para el formulario
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
    this.api.getComentarios().subscribe({
      next: (lista: Comentarios[]) => {
        this.comentarios = lista;
      },
      error: (err: any) => {
        console.error('Error al cargar comentarios', err);
      }
    });
  }

  enviarComentario(): void {
    // Validación básica
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
        // Limpia el formulario y recarga la lista
        this.nuevoComentario = { nombre_usu: '', email: '', telefono: '', comentario: '' };
        this.obtenerComentarios();
      },
      error: (err: any) => {
        console.error('Error al enviar comentario', err);
      }
    });
  }
}
