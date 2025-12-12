import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

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
  pdfURL: SafeResourceUrl | null = null; // <-- usar SafeResourceUrl

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {}

  buscar() {
    if (!this.documento) return;

    this.cargando = true;
    this.error = '';
    this.resultado = null;
    this.pdfURL = null;

    this.http.post('https://ep.fps.gov.co/', { documento: this.documento })
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

  crearPDFURL(base64: string): SafeResourceUrl {
    const byteCharacters = atob(base64);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    return this.sanitizer.bypassSecurityTrustResourceUrl(url); // <-- aquí
  }
}




