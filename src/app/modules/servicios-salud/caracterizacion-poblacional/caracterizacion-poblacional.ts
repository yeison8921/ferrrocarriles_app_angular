import { NgFor } from '@angular/common';
import { File } from './../../../interfaces/acordion';
import {cardButtons} from './../../../interfaces/salud';
import { Component } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-caracterizacion-poblacional',
  standalone: true,
  imports: [NgbAccordionModule, NgFor],
  templateUrl: './caracterizacion-poblacional.html',
  styleUrl: './caracterizacion-poblacional.css',
})
export class CaracterizacionPoblacional {
  items: File[]=[];
  cards : cardButtons[]=[];

  constructor(){

    this.cards =[
      // Agrega tarjetas específicas para Caracterización Poblacional aquí
    ];
   this.items = [
  {
    id: 1,
    tipo: "pdf",
    url: "/assets/files/salud/gestion_de_riesgo/INFOGRAFIA%20DEPARTAMENTO%20ANTIOQUIA.pdf",
    nombre: "INFOGRAFIA DEPARTAMENTO ANTIOQUIA.pdf",
  },
  {
    id: 2,
    tipo: "pdf",
    url: "/assets/files/salud/gestion_de_riesgo/INFOGRAFIA%20DEPARTAMENTO%20ATLANTICO.pdf",
    nombre: "INFOGRAFIA DEPARTAMENTO ATLANTICO.pdf",
  },
  {
    id: 3,
    tipo: "pdf",
    url: "/assets/files/salud/gestion_de_riesgo/INFOGRAFIA%20DEPARTAMENTO%20BOLIVAR.pdf",
    nombre: "INFOGRAFIA DEPARTAMENTO BOLIVAR.pdf",
  },
  {
    id: 4,
    tipo: "pdf",
    url: "/assets/files/salud/gestion_de_riesgo/INFOGRAFIA%20DEPARTAMENTO%20BOYACA.pdf",
    nombre: "INFOGRAFIA DEPARTAMENTO BOYACA.pdf",
  },
  {
    id: 5,
    tipo: "pdf",
    url: "/assets/files/salud/gestion_de_riesgo/INFOGRAFIA%20DEPARTAMENTO%20CALDAS.pdf",
    nombre: "INFOGRAFIA DEPARTAMENTO CALDAS.pdf",
  },
  {
    id: 6,
    tipo: "pdf",
    url: "/assets/files/salud/gestion_de_riesgo/INFOGRAFIA%20DEPARTAMENTO%20CAUCA.pdf",
    nombre: "INFOGRAFIA DEPARTAMENTO CAUCA.pdf",
  },
  {
    id: 7,
    tipo: "pdf",
    url: "/assets/files/salud/gestion_de_riesgo/INFOGRAFIA%20DEPARTAMENTO%20CESAR.pdf",
    nombre: "INFOGRAFIA DEPARTAMENTO CESAR.pdf",
  },
  {
    id: 8,
    tipo: "pdf",
    url: "/assets/files/salud/gestion_de_riesgo/INFOGRAFIA%20DEPARTAMENTO%20CUNDINAMARCA.pdf",
    nombre: "INFOGRAFIA DEPARTAMENTO CUNDINAMARCA.pdf",
  },
  {
    id: 9,
    tipo: "pdf",
    url: "/assets/files/salud/gestion_de_riesgo/INFOGRAFIA%20DEPARTAMENTO%20HUILA.pdf",
    nombre: "INFOGRAFIA DEPARTAMENTO HUILA.pdf",
  },
  {
    id: 10,
    tipo: "pdf",
    url: "/assets/files/salud/gestion_de_riesgo/INFOGRAFIA%20DEPARTAMENTO%20MAGDALENA.pdf",
    nombre: "INFOGRAFIA DEPARTAMENTO MAGDALENA.pdf",
  },
  {
    id: 11,
    tipo: "pdf",
    url: "/assets/files/salud/gestion_de_riesgo/INFOGRAFIA%20DEPARTAMENTO%20META.pdf",
    nombre: "INFOGRAFIA DEPARTAMENTO META.pdf",
  },
  {
    id: 12,
    tipo: "pdf",
    url: "/assets/files/salud/gestion_de_riesgo/INFOGRAFIA%20DEPARTAMENTO%20NARI%C3%91O.pdf",
    nombre: "INFOGRAFIA DEPARTAMENTO NARIÑO.pdf",
  },
  {
    id: 13,
    tipo: "pdf",
    url: "/assets/files/salud/gestion_de_riesgo/INFOGRAFIA%20DEPARTAMENTO%20NORTE%20DE%20SANTANDER.pdf",
    nombre: "INFOGRAFIA DEPARTAMENTO NORTE DE SANTANDER.pdf",
  },
  {
    id: 14,
    tipo: "pdf",
    url: "/assets/files/salud/gestion_de_riesgo/INFOGRAFIA%20DEPARTAMENTO%20QUINDIO.pdf",
    nombre: "INFOGRAFIA DEPARTAMENTO QUINDIO.pdf",
  },
  {
    id: 15,
    tipo: "pdf",
    url: "/assets/files/salud/gestion_de_riesgo/INFOGRAFIA%20DEPARTAMENTO%20RISARALDA.pdf",
    nombre: "INFOGRAFIA DEPARTAMENTO RISARALDA.pdf",
  },
  {
    id: 16,
    tipo: "pdf",
    url: "/assets/files/salud/gestion_de_riesgo/INFOGRAFIA%20DEPARTAMENTO%20SANTANDER.pdf",
    nombre: "INFOGRAFIA DEPARTAMENTO SANTANDER.pdf",
  },
  {
    id: 17,
    tipo: "pdf",
    url: "/assets/files/salud/gestion_de_riesgo/INFOGRAFIA%20DEPARTAMENTO%20TOLIMA.pdf",
    nombre: "INFOGRAFIA DEPARTAMENTO TOLIMA.pdf",
  },
  {
    id: 18,
    tipo: "pdf",
    url: "/assets/files/salud/gestion_de_riesgo/INFOGRAFIA%20DEPARTAMENTO%20VALLE%20DEL%20CAUCA.pdf",
    nombre: "INFOGRAFIA DEPARTAMENTO VALLE DEL CAUCA.pdf",
  },
  {
    id: 19,
    tipo: "pdf",
    url: "/assets/files/salud/gestion_de_riesgo/INFOGRAFIA%20DISTRITO%20BARRANCABERMEJA.pdf",
    nombre: "INFOGRAFIA DISTRITO BARRANCABERMEJA.pdf",
  },
  {
    id: 20,
    tipo: "pdf",
    url: "/assets/files/salud/gestion_de_riesgo/INFOGRAFIA%20DISTRITO%20BARRANQUILLA.pdf",
    nombre: "INFOGRAFIA DISTRITO BARRANQUILLA.pdf",
  },
  {
    id: 21,
    tipo: "pdf",
    url: "/assets/files/salud/gestion_de_riesgo/INFOGRAFIA%20DISTRITO%20BOGOTA.pdf",
    nombre: "INFOGRAFIA DISTRITO BOGOTA.pdf",
  },
  {
    id: 22,
    tipo: "pdf",
    url: "/assets/files/salud/gestion_de_riesgo/INFOGRAFIA%20DISTRITO%20BUENAVENTURA.pdf",
    nombre: "INFOGRAFIA DISTRITO BUENAVENTURA.pdf",
  },
  {
    id: 23,
    tipo: "pdf",
    url: "/assets/files/salud/gestion_de_riesgo/INFOGRAFIA%20DISTRITO%20CALI.pdf",
    nombre: "INFOGRAFIA DISTRITO CALI.pdf",
  },
  {
    id: 24,
    tipo: "pdf",
    url: "/assets/files/salud/gestion_de_riesgo/INFOGRAFIA%20DISTRITO%20CARTAGENA%20DE%20INDIAS.pdf",
    nombre: "INFOGRAFIA DISTRITO CARTAGENA DE INDIAS.pdf",
  },
  {
    id: 25,
    tipo: "pdf",
    url: "/assets/files/salud/gestion_de_riesgo/INFOGRAFIA%20DISTRITO%20MEDELLIN.pdf",
    nombre: "INFOGRAFIA DISTRITO MEDELLIN.pdf",
  },
  {
    id: 26,
    tipo: "pdf",
    url: "/assets/files/salud/gestion_de_riesgo/INFOGRAFIA%20DISTRITO%20SANTA%20MARTA.pdf",
    nombre: "INFOGRAFIA DISTRITO SANTA MARTA.pdf",
  },
  {
    id: 27,
    tipo: "pdf",
    url: "/assets/files/salud/gestion_de_riesgo/INFOGRAFIA%20DISTRITO%20TUMACO.pdf",
    nombre: "INFOGRAFIA DISTRITO TUMACO.pdf",
  },
  {
    id: 28,
    tipo: "pdf",
    url: "/assets/files/salud/gestion_de_riesgo/INFOGRAFIA%20FONDO.pdf",
    nombre: "INFOGRAFIA FONDO.pdf",
  }
];
  }

}
