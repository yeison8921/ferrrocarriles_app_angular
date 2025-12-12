import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-certificadodepension',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './certificadodepension.html',
  styleUrls: ['./certificadodepension.css']
})
export class Certificadodepension {

  documento: string = '';
  resultado: any = null;
  cargando = false;
  error = '';
  pdfURL: string | null = null; // <-- URL del PDF para mostrar en iframe

  constructor(private http: HttpClient) {}

  buscar() {
    if (!this.documento) return;

    this.cargando = true;
    this.error = '';
    this.resultado = null;
    this.pdfURL = null;

    this.http.post('https://edq.com.co/certificado.php', { documento: this.documento })
      .subscribe({
        next: (resp: any) => {
          this.cargando = false;
          if (resp?.pCodigoCertificado) {
            this.resultado = resp;
            this.pdfURL = this.crearPDFURL(resp.pCodigoCertificado);
          } else {
            this.error = 'No se encontró el certificado';
          }
        },
        error: (err: any) => {
          this.error = 'No se pudo consultar el certificado.';
          this.cargando = false;
          console.error(err);
        }
      });
  }

  crearPDFURL(base64: string): string {
    const byteCharacters = atob(base64);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: 'application/pdf' });
    return URL.createObjectURL(blob);
  }
}



