import { NgFor } from '@angular/common';
import { File } from './../../../interfaces/acordion';
import {cardButtons} from './../../../interfaces/salud';
import { Component } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-gestion-riesgo',
  standalone: true,
  imports: [NgbAccordionModule, NgFor],
  templateUrl: './gestion-riesgo.component.html',
  styleUrl: './gestion-riesgo.component.css'
})
export class GestionRiesgoComponent {
  items: File[]=[];
  cards : cardButtons[]=[];

  constructor(){

    this.cards =[
      {
        id:1,
        texto: "Ruta de atención integral",
        texto2: "Cáncer",
        imagen:"/assets/img/salud/Ruta%20de%20Atenci%c3%b3n%20Integral%20C%c3%a1ncer(1).jpg",
        url:"/servicios-de-salud/gestion-del-riesgo/260"
      },
      {
        id:2,
        texto: "Ruta de atención integral",
        texto2: "Cardio cerebro vascular y metabólico",
        imagen:"./assets/img/salud/Ruta%20de%20Atenci%c3%b3n%20Integral%20Cardio%20Cerebro%20Vascular%20y%20Metab%c3%b3lico(1).jpg",
        url:"/servicios-de-salud/gestion-del-riesgo/261"
      },
      {
        id:3,
        texto: "Ruta de atención integral",
        texto2: "Salud mental y consumo de sustancias psicoactivas",
        imagen:"./assets/img/salud/Ruta%20de%20Atenci%c3%b3n%20Integral%20Salud%20Mental%20y%20Consumo%20de%20Sustancias%20Psicoactivas(1).jpg",
        url:"/servicios-de-salud/gestion-del-riesgo/262"
      },
      {
        id:4,
        texto: "Ruta de atención integral a",
        texto2: "Victimas de violencia, agreciones o traumas",
        imagen:"./assets/img/salud/Ruta%20de%20Atenci%c3%b3n%20integral%20a%20Victimas%20de%20violencia%2c%20Agresiones%20o%20Traumas(1).jpg",
        url:"/servicios-de-salud/gestion-del-riesgo/263"
      },
      {
        id:5,
        texto: "Programa de atención integral a enfermedades respiratorias crónicas",
        texto2: "(Asma y EPOC)",
        imagen:"/assets/img/salud/Programa%20de%20atenci%c3%b3n%20integral%20a%20Enfermedades%20Respiratorias%20Cr%c3%b3nicas%20(%20Asma%20y%20EPOC)(1).jpg",
        url:"/servicios-de-salud/gestion-del-riesgo/266"
      },
      {
        id:6,
        texto: "Programa de atención para la Cesación del tabaco",
        imagen:"./assets/img/salud/Programa%20de%20atenci%c3%b3n%20para%20la%20Cesaci%c3%b3n%20de%20Tabaco(1).jpg",
        url:"/servicios-de-salud/gestion-del-riesgo/264"
      },
      {
        id:7,
        texto: "Programa de atención integral para personas que viven con VIH",
        imagen:"./assets/img/salud/Programa%20de%20atenci%c3%b3n%20integral%20para%20personas%20que%20viven%20con%20VIH(1).jpg",
        url:"/servicios-de-salud/gestion-del-riesgo/265"
      },


    ]
    this.items = [
      {
        id:1,
        tipo:"pdf",
        url:"/assets/files/salud/gestion_de_riesgo/Actividades%20del%20prevenci%c3%b3n%20para%20el%20riesgo%20cardiovascular/Actividades%20de%20prevenci%c3%b3n%20para%20el%20riesgo%20cardiovascular.pdf",
        nombre:"Actividades de prevención para el riesgo cardiovascular.pdf",
      },
      {
        id:2,
        tipo:"pdf",
        url:"/assets/files/salud/gestion_de_riesgo/Alimentaci%c3%b3n%20de%20pacientes%20con%20RCV/Alimentaci%c3%b3n%20de%20pacientes%20con%20RCV.pdf",
        nombre:"Alimentación de pacientes con RCV.pdf",
      },
      {
        id:3,
        tipo:"pdf",
        url:"/assets/files/salud/gestion_de_riesgo/Cuidados%20con%20la%20oxigenoterapia%20domiciliaria/Cuidados%20con%20la%20oxigenoterapia%20domiciliaria.pdf",
        nombre:"Cuidados con la oxigenoterapia domiciliaria.pdf",
      },
      {
        id:4,
        tipo:"pdf",
        url:"/assets/files/salud/gestion_de_riesgo/Demencia%20en%20adultos%20mayores/INFOGRAFIA%20DEMENCIA%20EN%20ADULTOS%20MAYORES.pdf",
        nombre:"INFOGRAFIA DEMENCIA EN ADULTOS MAYORES.pdf",
      },
      {
        id:5,
        tipo:"pdf",
        url:"/assets/files/salud/gestion_de_riesgo/Diabetes%20y%20riesgo%20cardiovascular/Diabetes%20y%20riesgo%20cardiovascular.pdf",
        nombre:"Diabetes y riesgo cardiovascular.pdf",

      },
      {
        id:6,
        tipo:"pdf",
        url:"/assets/files/salud/gestion_de_riesgo/Dislipidemia%20y%20RCV/Dislipidemia%20y%20RCV.pdf",
        nombre:"Dislipidemia y RCV.pdf",
      },
      {
        id:7,
        tipo:"pdf",
        url:"/assets/files/salud/gestion_de_riesgo/Ejercicios%20respiratorio%20en%20pacientes%20en%20cama/Ejercicios%20respiratorios%20en%20pacientes%20en%20cama.pdf",
        nombre:"Ejercicios respiratorios en pacientes en cama.pdf",
      },
      {
        id:8,
        tipo:"pdf",
        url:"/assets/files/salud/gestion_de_riesgo/Epilepsia%20en%20el%20adulto%20mayor/Epilepsia%20en%20el%20Adulto%20Mayor.pdf",
        nombre:"Epilepsia en el Adulto Mayor.pdf",
      },
      {
        id:9,
        tipo:"pdf",
        url:"/assets/files/salud/gestion_de_riesgo/Factores%20protectores%20ante%20posible%20depresi%c3%b3n/Factores%20protectores%20ante%20posible%20depresi%c3%b3n.pdf",
        nombre:"Factores protectores ante posible depresión.pdf",
      },
      {
        id:10,
        tipo:"pdf",
        url:"/assets/files/salud/gestion_de_riesgo/Factores%20protectores%20de%20la%20ansiedad/Factores%20protectores%20de%20la%20ansiedad.pdf",
        nombre:"Factores protectores de la ansiedad.pdf",
      },
      {
        id:11,
        tipo:"pdf",
        url:"/assets/files/salud/gestion_de_riesgo/Higiene%20alimentaria/Higiene%20alimentaria.pdf",
        nombre:"Higiene alimentaria.pdf",
      },
      {
        id:12,
        tipo:"pdf",
        url:"/assets/files/salud/gestion_de_riesgo/Higiene%20de%20vivienda/Higiene%20de%20vivienda.pdf",
        nombre:"Higiene de vivienda.pdf",
      },
      {
        id:13,
        tipo:"pdf",
        url:"/assets/files/salud/gestion_de_riesgo/Higiene%20del%20se%c3%b1o/03-Higiene%20del%20sue%c3%b1o.pdf",
        nombre:"03-Higiene del sueño.pdf",
      },
      {
        id:14,
        tipo:"pdf",
        url:"/assets/files/salud/gestion_de_riesgo/Hipertensi%c3%b3n%20arterial%20y%20RCV/Hipertensi%c3%b3n%20arterial%20y%20RCV.pdf",
        nombre:"Hipertensión arterial y RCV.pdf",
      },
      {
        id:15,
        tipo:"pdf",
        url:"/assets/files/salud/gestion_de_riesgo/H%c3%a1bitos%20de%20higiene%20y%20su%20importancia/H%c3%a1bitos%20de%20higiene%20y%20su%20importancia.pdf",
        nombre:"Hábitos de higiene y su importancia.pdf",
      },
      {
        id:16,
        tipo:"pdf",
        url:"/assets/files/salud/gestion_de_riesgo/Indicaciones%20de%20cuidado%20en%20salud%20mental%20para%20el%20cuidador/Indicaciones%20de%20cuidado%20en%20salud%20mental%20para%20el%20cuidador.pdf",
        nombre:"Indicaciones de cuidado en salud mental para el cuidador.pdf",
      },
      {
        id:17,
        tipo:"pdf",
        url:"/assets/files/salud/gestion_de_riesgo/Infecciones%20neurol%c3%b3gicas/INFECCIONES%20NEUROLOGICAS.pdf",
        nombre:"INFECCIONES NEUROLOGICAS.pdf",
      },
      {
        id:18,
        tipo:"pdf",
        url:"/assets/files/salud/gestion_de_riesgo/Juntos%2c%20recuperando%20tu%20movilidad/Juntos%2c%20recuperando%20tu%20movilidad.pdf",
        nombre:"Juntos, recuperando tu movilidad.pdf",
      },
      {
        id:19,
        tipo:"pdf",
        url:"/assets/files/salud/gestion_de_riesgo/Medici%c3%b3n%20del%20riesgo%20cardiovascular%20conozca%20su%20riesgo/Medici%c3%b3n%20del%20riesgo%20cardiovascular%20conozca%20su%20riesgo.pdf",
        nombre:"Medición del riesgo cardiovascular conozca su riesgo.pdf",
      },
      {
        id:20,
        tipo:"pdf",
        url:"/assets/files/salud/gestion_de_riesgo/Prevenci%c3%b3n%20del%20consumo%20de%20alcohol/Prevenci%c3%b3n%20del%20consumo%20de%20alcohol.pdf",
        nombre:"Prevención del consumo de alcohol.pdf",
      },
      {
        id:22,
        tipo:"pdf",
        url:"/assets/files/salud/gestion_de_riesgo/Prevenci%c3%b3n%20del%20consumo%20de%20sustancias%20psicoactivas/Prevenci%c3%b3n%20del%20consumo%20de%20sustancias%20psicoactivas.pdf",
        nombre:"Prevención del consumo de sustancias psicoactivas.pdf",
      },
      {
        id:23,
        tipo:"pdf",
        url:"/assets/files/salud/gestion_de_riesgo/Pr%c3%a1ctica%20de%20lavado%20de%20manos/Practica%20del%20lavado%20de%20manos.pdf",
        nombre:"Practica del lavado de manos.pdf",
      },
      {
        id:24,
        tipo:"pdf",
        url:"/assets/files/salud/gestion_de_riesgo/Riesgo%20cardiovascular%20y%20factores%20de%20riesgo/Riesgo%20cardiovascular%20y%20factores%20de%20riesgo.pdf",
        nombre:"Riesgo cardiovascular y factores de riesgo.pdf",
      },
      {
        id:25,
        tipo:"pdf",
        url:"/assets/files/salud/gestion_de_riesgo/Rutas%20de%20atenci%c3%b3n%20para%20problemas%20de%20salud%20mental/Rutas%20de%20atenci%c3%b3n%20para%20problemas%20de%20salud%20mental.pdf",
        nombre:"Rutas de atención para problemas de salud mental.pdf",
      },
      {
        id:26,
        tipo:"pdf",
        url:"/assets/files/salud/gestion_de_riesgo/Sindrome%20metab%c3%b3lico%20-%20alimentaci%c3%b3n/SINDROME%20METAB%c3%93LICO-%20ALIMENTACI%c3%93N.pdf",
        nombre:"SINDROME METABÓLICO- ALIMENTACIÓN.pdf",
      },
      {
        id:27,
        tipo:"pdf",
        url:"/assets/files/salud/gestion_de_riesgo/Trastornos%20neurol%c3%b3gicos/Trastornos%20neurol%c3%b3gicos.pdf",
        nombre:"Trastornos neurológicos.pdf",
      },
      {
        id:28,
        tipo:"pdf",
        url:"/assets/files/salud/gestion_de_riesgo/Trastornos%20neurol%c3%b3gicos%20m%c3%a1s%20frecuentes/TRASTORNOS%20NEUROL%c3%93GICOS%20M%c3%81S%20FRECUENTES.pdf",
        nombre:"TRASTORNOS NEUROLÓGICOS MÁS FRECUENTES.pdf",
      }

    ]
  }

}
