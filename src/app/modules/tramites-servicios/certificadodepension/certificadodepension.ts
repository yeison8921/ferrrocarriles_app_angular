import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-certificadodepension',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './certificadodepension.html',
  styleUrls: ['./certificadodepension.css']
})
export class Certificadodepension {

  documento: string = '';
  resultado: any = null;
  cargando = false;
  error = '';

  // Datos quemados para autenticación
  private usuario = 'TU_USUARIO';
  private clave = 'TU_CLAVE';
  private apiUrl = 'https://tu-api.com/certificado';

  constructor(private http: HttpClient) {}

  buscar() {
    if (!this.documento) return;

    this.cargando = true;
    this.error = '';
    this.resultado = null;

    // Generar token Basic Auth
    const token = btoa(`${this.usuario}:${this.clave}`);
    const headers = new HttpHeaders({
      'Authorization': `Basic ${token}`
    });

    this.http.get(`${this.apiUrl}/${this.documento}`, { headers })
      .subscribe({
        next: (resp: any) => {
          this.resultado = resp;
          this.cargando = false;
        },
        error: () => {
          this.error = 'No se pudo consultar el certificado.';
          this.cargando = false;
        }
      });
  }
}

