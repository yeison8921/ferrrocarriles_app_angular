// src/app/services/api.service.ts
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Comentarios } from '../modules/atencion-al-usuario/foro/comentarios';


export interface ForoResponse {
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
  getComentarios(page = 1, size = 10): Observable<ForoResponse> {
    const params = new URLSearchParams({
      page: page.toString(),
      size: size.toString(),
      ordering: '-created'
    }).toString();
    return this.http.get<ForoResponse>(`${this.baseUrl}/foro/?${params}`);
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
