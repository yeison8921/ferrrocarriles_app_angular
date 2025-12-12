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

  constructor(private http: HttpClient) {}

  buscar() {
    if (!this.documento) return;

    this.cargando = true;
    this.error = '';
    this.resultado = null;

    this.http.post('https://edq.com.co/certificado.php', { documento: this.documento })
      .subscribe({
        next: (resp: any) => {
          this.resultado = resp;
          this.cargando = false;
        },
        error: (err: any) => {
          this.error = 'No se pudo consultar el certificado.';
          this.cargando = false;
          console.error(err);
        }
      });
  }
}


