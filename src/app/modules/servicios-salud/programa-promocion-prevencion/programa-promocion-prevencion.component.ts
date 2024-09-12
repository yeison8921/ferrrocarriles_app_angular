import { NgFor } from '@angular/common';
import { AcordionFiles } from './../../../interfaces/acordion';
import { Component } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-programa-promocion-prevencion',
  standalone: true,
  imports: [NgFor, NgbAccordionModule],
  templateUrl: './programa-promocion-prevencion.component.html',
  styleUrl: './programa-promocion-prevencion.component.css'
})
export class ProgramaPromocionPrevencionComponent {
  items: AcordionFiles[]=[];
 constructor(){

  this.items=[
    {
      id:1,
      nombre:"Actividades físicas a pacientes con compromiso neurológico",
      files:
      [
        {
          id:1,
          tipo:"pdf",
          url:"/assets/files/salud/programa_promocion_prevecion/Actividades%20f%c3%adsicas%20a%20pacientes%20con%20compromiso%20neurol%c3%b3gico/Actividades%20f%c3%adsicas%20a%20pacientes%20con%20compromiso%20neurol%c3%b3gico.pdf",
          nombre:"Actividades físicas a pacientes con compromiso neurológico.pdf"
        }
      ]
    },
    {
      id:2,
      nombre:"Consejos para prevenir caídas",
      files:
      [
        {
          id:1,
          tipo:"pdf",
          url:"/assets/files/salud/programa_promocion_prevecion/Consejos%20para%20prevenir%20ca%c3%addas/Consejos%20para%20prevenir%20ca%c3%addas%20y%20fracturas.pdf",
          nombre:"Consejos para prevenir caídas y fracturas.pdf"
        }
      ]
    },
    {
      id:3,
      nombre:"Cuidados de la piel en pacientes con movilidad reducida",
      files:
      [
        {
          id:1,
          tipo:"pdf",
          url:"/assets/files/salud/programa_promocion_prevecion/Cuidados%20de%20la%20piel%20en%20pacientes%20con%20movilidad%20reducida/CUIDADO%20DE%20LA%20PIEL%20EN%20PACIENTES%20CON%20MOVILIDAD%20REDUCIDA.pdf",
          nombre:"CUIDADO DE LA PIEL EN PACIENTES CON MOVILIDAD REDUCIDA.pdf"
        }
      ]
    },
    {
      id:4,
      nombre:"Cuidados para prevenir enfermedades transmitidas por VECTORES, DENGUE, CHICUNGUÑA, MALARIA, CHAGAS, ZIKA",
      files:
      [
        {
          id:1,
          tipo:"pdf",
          url:"/assets/files/salud/programa_promocion_prevecion/Cuidados%20para%20prevenir%20enfermedades%20transmitida/CUIDADOS%20PARA%20PREVENIR%20ENFERMEDADES%20TRANSMITIDAS%20POR%20VECTORES%2c%20DENGUE%2c%20CHICUNGU%c3%9A%2c%20MALARIA%2c%20CH",
          nombre:"CUIDADOS PARA PREVENIR ENFERMEDADES TRANSMITIDAS POR VECTORES, DENGUE, CHICUNGUÑA, MALARIA, CHAGAS, ZIKA.pdf"
        }
      ]
    },
    {
      id:5,
      nombre:"Instrucciones para consumir un medicamento",
      files:
      [
        {
          id:1,
          tipo:"pdf",
          url:"/assets/files/salud/programa_promocion_prevecion/Instrucciones%20para%20consumir%20un%20medicamento/INSTRUCCIONES%20PARA%20CONSUMIR%20UN%20MEDICAMENTO.pdf",
          nombre:"INSTRUCCIONES PARA CONSUMIR UN MEDICAMENTO.pdf"
        }
      ]
    },
    {
      id:6,
      nombre:"Personas con adecuado estado de salud oral",
      files:
      [
        {
          id:1,
          tipo:"pdf",
          url:"/assets/files/salud/programa_promocion_prevecion/Personas%20con%20adecuado%20estado%20de%20salud%20oral/Personas%20con%20adecuado%20estado%20de%20salud%20oral.pdf",
          nombre:"Personas con adecuado estado de salud oral.pdf"
        }
      ]
    },
    {
      id:7,
      nombre:"Previene la Viruela del Mono",
      files:
      [
        {
          id:1,
          tipo:"pdf",
          url:"/assets/files/salud/programa_promocion_prevecion/Previene%20la%20Viruela%20del%20Mono/VIRUELA%20DEL%20MONO.pdf",
          nombre:"VIRUELA DEL MONO.pdf"
        }
      ]
    },
    {
      id:8,
      nombre:"Recomendaciones para almacenar un medicamento",
      files:
      [
        {
          id:1,
          tipo:"pdf",
          url:"/assets/files/salud/programa_promocion_prevecion/Recomendaciones%20para%20almacenar%20un%20medicamento/RECOMENDACIONES%20PARA%20ALMACENAR%20MEDICAMENTOS.pdf",
          nombre:"RECOMENDACIONES PARA ALMACENAR MEDICAMENTOS.pdf"
        }
      ]
    },
    {
      id:9,
      nombre:"Recomendaciones para el uso de medicamentos",
      files:
      [
        {
          id:1,
          tipo:"pdf",
          url:"/assets/files/salud/programa_promocion_prevecion/Recomendaciones%20para%20el%20uso%20de%20medicamentos/RECOMENDACIONES%20PARA%20EL%20USO%20DE%20MEDICAMENTOS.pdf",
          nombre:"RECOMENDACIONES PARA EL USO DE MEDICAMENTOS.pdf"
        }
      ]
    },
    {
      id:10,
      nombre:"Riesgo de automedicación",
      files:
      [
        {
          id:1,
          tipo:"pdf",
          url:"/assets/files/salud/programa_promocion_prevecion/Riesgo%20de%20automedicaci%c3%b3n/RIESGO%20DE%20AUTOMEDICACI%c3%93N.pdf",
          nombre:"RIESGO DE AUTOMEDICACIÓN.pdf"
        }
      ]
    }
  ]
 }
}
