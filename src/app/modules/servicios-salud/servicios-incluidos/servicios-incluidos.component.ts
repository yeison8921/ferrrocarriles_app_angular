import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-servicios-incluidos',
  standalone: true,
  imports: [NgFor],
  templateUrl: './servicios-incluidos.component.html',
  styleUrl: './servicios-incluidos.component.css'
})
export class ServiciosIncluidosComponent {
  items: { id: number; text: string}[] = [];
  constructor () {
    this.items = [
      {
        id:1,
        text:"Medicina general"
      },
      {
        id:2,
        text:"Odontología"
      },
      {
        id:3,
        text:"Atención de urgencias"
      },
      {
        id:4,
        text:"Servicios de promoción y mantenimiento de la salud"
      },
      {
        id:5,
        text:"Medicina especializada"
      },
      {
        id:6,
        text:"Atención de obstetricia y ginecología"
      },
      {
        id:7,
        text:"Hospitalización médica, quirúrgica y psiquiátrica"
      },
      {
        id:8,
        text:"Procedimientos de cirugía ambulatorios y hospitalarios"
      },
      {
        id:9,
        text:"Servicios de rehabilitación"
      },
      {
        id:10,
        text:"Suministro de medicamentos"
      },
      {
        id:11,
        text:"Exámenes y procedimientos de diagnóstico"
      },
      {
        id:12,
        text:"Procedimientos terapéuticos"
      },
      {
        id:13,
        text:"Servicio de ambulancia"
      },

      {
        id:14,
        text:"Suministro de complemento terapéutico"
      },

      {
        id:15,
        text:"Atención básica de enfermería"
      },

      {
        id:16,
        text:"Atención domiciliaria Vacunación"
      },
    ]
  }
}
