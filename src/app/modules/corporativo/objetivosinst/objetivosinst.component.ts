import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-objetivosinst',
  standalone: true,
  imports: [NgFor],
  templateUrl: './objetivosinst.component.html',
  styleUrl: './objetivosinst.component.css'
})
export class ObjetivosinstComponent {
  items: { id: number; text: string}[] = [];

  constructor (){
    this.items =[
      {
        id:1,
        text:"Garantizar la efectiva organización y administración de los servicios de salud para asegurar una prestación óptima a nuestros usuarios, a través de asistencias técnicas a los prestadores de servicios de salud, y del seguimiento a los indicadores de resultado seleccionados en las rutas de atención integral en salud (RIAS) y los grupos de riesgo priorizados desde la vigencia 2023 hasta la vigencia 2026."
      },
      {
        id:2,
        text:"Garantizar la administración, reconocimiento y pago eficiente de prestaciones económicas mediante una gestión oportuna y ordenada, a través de la atención del 100% de las solicitudes de reconocimientos que cumplen los requisitos establecidos en la normatividad, y de la implementación de los trámites en línea."
      },
      {
        id:3,
        text:"Fortalecer y mantener el SIG -FPS en el marco del MIPG, para mejorar los resultados de Medición del Desempeño Institucional a 95 puntos; a través del cumplimiento de las políticas de desarrollo administrativo."
      },
      {
        id:4,
        text:"Fortalecer y modernizar los sistemas de información del FPS FNC, para asegurar la operación efectiva y una retroalimentación constante con sus usuarios y ciudadanos desde la vigencia 2023 hasta la vigencia 2026."
      },
      {
        id:5,
        text:"Fortalecer la administración de los bienes de la entidad y la óptima gestión de los recursos financieros durante el cuatrienio 2023-2026."
      },
      {
        id:6,
        text:"Fomentar la mejora de la calidad de los servicios de salud ofrecidos por el FPS FNC, a través de la implementación del Programa de auditoría para el mejoramiento de la calidad PAMEC."
      },
      {
        id:7,
        text:"Reducir los impactos ambientales significativos derivados de los aspectos ambientales de la operación del FPS FNC, mediante prácticas sostenibles, garantizando el cumplimiento de la normativa vigente para los periodos 2023 y 2026, mediante la gestión de residuos, consumo de agua y energía."
      },
      {
        id:8,
        text:"Reducir la tasa de incidentes y accidentes laborales mediante la implementación efectiva del Subsistema de Gestión de la Seguridad y Salud en el Trabajo, promoviendo la prevención de lesiones y enfermedades laborales, y fomentando la participación activa de los trabajadores del FPS FNC."
      },
    ]
  }
}
