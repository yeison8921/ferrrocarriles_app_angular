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

  // Usuario y clave quemados
  private usuario = 'safixFPasivoTest';
  private clave = 'C0n3ctfP4S1V0T3st';

  // Endpoints
  private urlLogin = 'https://apix.fps.gov.co/Certificados/api/login/authenticate';
  private urlCertificado = 'https://apix.fps.gov.co/Certificados/api/Certificados/ConsultaCertificadoPensionados';

  constructor(private http: HttpClient) {}

  buscar() {
    if (!this.documento) return;

    this.cargando = true;
    this.error = '';
    this.resultado = null;

    // 1️⃣ Login para obtener token
    const bodyLogin = { username: this.usuario, password: this.clave };

    this.http.post<{ token: string }>(this.urlLogin, bodyLogin)
      .pipe(
        // 2️⃣ Usar token para consultar certificado
        switchMap((resp: { token: any; }) => {
          const headers = new HttpHeaders({
            'Authorization': `Bearer ${resp.token}`
          });

          const url = `${this.urlCertificado}?Identificacion=${this.documento}&AnoPago=2025`;

          return this.http.get(url, { headers });
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

