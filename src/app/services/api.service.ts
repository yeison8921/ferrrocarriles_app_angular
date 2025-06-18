// src/app/services/api.service.ts
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Comentarios } from '../modules/atencion-al-usuario/foro/comentarios';


interface ForoResponse {
  page: number;
  size: number;
  total: number;
  results: Comentarios[];
}

@Injectable({ providedIn: 'root' })
export class ApiService {
  private http = inject(HttpClient);
  private baseUrl = 'https://api3.fps.gov.co';

  /**
   * Obtiene los comentarios y extrae el array de resultados
   */
  getComentarios(): Observable<Comentarios[]> {
    return this.http
      .get<ForoResponse>(`${this.baseUrl}/foro/`)
      .pipe(map(resp => resp.results));
  }

  /**
   * Envía un nuevo comentario al foro
   */
  postComentario(data: {
    nombre_usu: string;
    email: string;
    telefono: string;
    comentario: string;
  }): Observable<Comentarios> {
    return this.http.post<Comentarios>(
      `${this.baseUrl}/foro/`,
      data
    );
  }
}
