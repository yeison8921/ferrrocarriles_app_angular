import { Component } from '@angular/core';
import { Comentarios } from './comentarios';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-foro',
  standalone: true,
  imports: [NgFor],
  templateUrl: './foro.component.html',
  styleUrl: './foro.component.css',
})
export class ForoComponent {
  comentarios: Comentarios[] = [
    {
      id: 7,
      fechaHora: '2024-06-27 11:00:24',
      nombreUsuario: 'Daniel Rubiano Romero',
      comentario:
        'Felicitaciones a toda la mesa Directiva y sus Funcionarios, por la Rendición de cuentas, único comentario al respecto es la problemática que hay con la Entidad D´banka sobre las libranzas y otros.',
    },
    {
      id: 6,
      fechaHora: '2024-06-27 11:00:24',
      nombreUsuario: 'Rafael Gonzalez',
      comentario:
        'Buenos dias, Dra samira y Luz helena que prestador de salud tan malo nos dejo el Dr Marin, que gestion estan haciendo ustedes para cambiar el prestador de salud y que alos pensionados se les preste un mejor servicio.',
    },
    {
      id: 5,
      fechaHora: '2024-06-27 09:36:15',
      nombreUsuario: 'Rosa María Medina',
      comentario: 'Buen dia ...',
      respuestas: [
        {
          id: 1,
          fechaHora: '2024-06-27 10:23:58',
          nombreUsuario: 'Moderador',
          comentario: 'Gracias por acompañarnos en este foro virtual.',
        },
      ],
    },
    {
      id: 4,
      fechaHora: '2024-06-27 09:03:35',
      nombreUsuario: 'Rafael Gonzalez',
      comentario: 'buen dia , saludos a todos..',
      respuestas: [
        {
          id: 1,
          fechaHora: '2024-06-27 10:24:14',
          nombreUsuario: 'Moderador',
          comentario: 'Gracias por acompañarnos en este foro virtual.',
        },
      ],
    },
    {
      id: 3,
      fechaHora: '2024-06-27 09:01:52',
      nombreUsuario: 'Rita Omaira Martínez Avellaneda',
      comentario: 'Buen día',
      respuestas: [
        {
          id: 1,
          fechaHora: '2024-06-27 10:24:32',
          nombreUsuario: 'Moderador',
          comentario: 'Gracias por acompañarnos en este foro virtual.',
        },
      ],
    },
    {
      id: 2,
      fechaHora: '2024-06-27 08:53:10',
      nombreUsuario: 'William fernando OLivares Lopez',
      comentario: 'Buen dia ...',
      respuestas: [
        {
          id: 1,
          fechaHora: '2024-06-27 10:24:40',
          nombreUsuario: 'Moderador',
          comentario: 'Gracias por acompañarnos en este foro virtual.',
        },
      ],
    },
    {
      id: 1,
      fechaHora: '2024-06-27 08:53:10',
      nombreUsuario: 'gonzalo morantes santamaria',
      comentario:
        'para participar en la rendicion de cuentas del fondo de pasivo',
    },
  ];
}
