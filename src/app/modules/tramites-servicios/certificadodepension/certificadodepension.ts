import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { switchMap } from 'rxjs/operators';

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

  // Datos quemados para generar token
  private usuario = 'TU_USUARIO';
  private clave = 'TU_CLAVE';
  private urlToken = 'https://tu-api.com/token'; // endpoint para generar token
  private urlCertificado = 'https://tu-api.com/certificado'; // endpoint protegido

  constructor(private http: HttpClient) {}

  buscar() {
    if (!this.documento) return;

    this.cargando = true;
    this.error = '';
    this.resultado = null;

    // 1️⃣ Generar token
    const bodyToken = { username: this.usuario, password: this.clave };
    this.http.post<{ token: string }>(this.urlToken, bodyToken)
      .pipe(
        // 2️⃣ Usar token para llamar al endpoint protegido
        switchMap((resp: { token: any; }) => {
          const headers = new HttpHeaders({
            'Authorization': `Bearer ${resp.token}`
          });
          return this.http.get(`${this.urlCertificado}/${this.documento}`, { headers });
        })
      )
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

