import { Component } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { NgFor, NgIf, CommonModule } from '@angular/common';
import { asociacion } from '../../../interfaces/corporativo';
import {
  AcordionAnidadoFiles,
  AcordionFiles,
} from '../../../interfaces/acordion';

@Component({
  selector: 'app-asociaciones-ferrocarriles',
  standalone: true,
  imports: [NgFor, NgbAccordionModule, NgIf, CommonModule],
  templateUrl: './asociaciones-ferrocarriles.component.html',
  styleUrl: './asociaciones-ferrocarriles.component.css',
})
export class AsociacionesFerrocarrilesComponent {
  infor: asociacion[] = [];
  items: AcordionAnidadoFiles[] = [];

  constructor() {
    this.infor = [
      {
        id: 1,
        title:
          'Asociación de jubilados, pensionados y sustitutas del terminal maritimo de tumaco (AJUTERMARIT)',
        direccion: 'Calle Páez. Cra. 8 No. 78-22',
        horario: '9:00AM A 2:30PM (Según citación)',
        datos: 'Carlos Jesus Angulo (Presidente AJUTERMARIT)',
        telefono: '+57 311 488 98 19',
      },
      {
        id: 2,
        title: 'Unión de pensionados portuarios de Santa Marta (LA UNIÒN)',
        direccion:
          'Santa Marta Calle 17 No. 7 - 111 (Reuniones celebradas mensualmente)',
        telefono: '+57 605 442 19 71',
        correo: 'launiondesantamarta@hotmail.com',
      },
      {
        id: 3,
        title:
          'Asociación de ferriviarios pensionados división Antioquia (AFEPENDA)',
        direccion: 'Carrera 51 No. 49-20 (Bello - Antioquia)',
        telefono: '+57 599 18 82 - +57 311 723 43 04',
        correo: 'afependa_antioquia@yahoo.es, afependaasociacion@gmail.com',
      },
      {
        id: 4,
        title: 'Unión de pensionados ferroviarios UNIPENFERSANDER',
        direccion:
          'Calle 35 No. 14-64 Oficina 203 Edificio Gómez Figueroa Barrio Centro Bucaramanga',
        horario: '8:00AM a 12:00M de Lunes a Viernes',
        telefono: '+57 305 310 56 96',
      },
      {
        id: 5,
        title:
          'Asociación de pensionados de la desaparecida empresa Puertos de Colombia Luz del mundo',
        direccion:
          'Carrera 36 No. 7 - 29 Barrio Eucarìstico (Templete) Santiago de Cali - Valle del Cauca',
        telefono: '+57 315 790 03 47',
        correo: 'luzdelmundo2011@hotmail.com',
      },
    ];

    this.items = [
      {
        id: 1,
        nombre:
          'ASOC. DE FERROVIARIOS PENSIONADOS DIVISIÓN ANTIOQUIA (AFEPENDA)',
        files: [
          {
            id: 1,
            tipo: 'pdf',
            url: '',
            nombre:
              'ACTA ASAMBLEA ASOCIACIÓN DE FERROVIARIOS PENSIONADOS DIVISIÓN ANTIOQUIA AFEPENDA.pdf',
          },
          {
            id: 2,
            tipo: 'pdf',
            url: '',
            nombre:
              'CERTIFICADO ASOCIACIÓN DE FERROVIARIOS PENSIONADOS DIVISIÓN ANTIOQUIA AFEPENDA.pdf',
          },
          {
            id: 3,
            tipo: 'pdf',
            url: '',
            nombre:
              'ESTATUTOS APROBADOS ASOCIACIÓN DE FERROVIARIOS PENSIONADOS DIVISIÓN ANTIOQUIA AFEPENDA.pdf',
          },
        ],
      },
      {
        id: 1,
        nombre:
          'ASOC. DE JUBILADOS, PENSIONADOS Y SUSTITUTAS DEL TERMINAL MARITIMO DE TUMACO (AJUTERMARIT)',
        files: [
          {
            id: 1,
            tipo: 'pdf',
            url: '',
            nombre:
              'ASAMBLEA GENERAL JUNTA DIRECTIVA ASOCIACIÓN DE JUBILADOS, PENSIONADOS Y SUSTITUTAS DEL TERMINAL MARITIMO DE TUMACO AJUTERMARIT.pdf',
          },
          {
            id: 2,
            tipo: 'pdf',
            url: '',
            nombre:
              'INFORMACIÓN GENERAL ASOCIACIÓN DE JUBILADOS, PENSIONADOS Y SUSTITUTAS DEL TERMINAL MARITIMO DE TUMACO AJUTERMARIT.pdf',
          },
          {
            id: 3,
            tipo: 'pdf',
            url: '',
            nombre:
              'RESOLUCIÓN MIN. TRABAJO POR MEDIO DE LA CUAL ORDENA INSCRIPCIÓN ASOCIACIÓN DE JUBILADOS, PENSIONADOS Y SUSTITUTAS DEL TERMINAL MARITIMO DE TUMACO AJUTERMARIT.pdf',
          },
        ],
      },
      {
        id: 1,
        nombre:
          'ASOC. DE PENSIONADOS DE LA DESAPARECIDA EMPRESA PUERTOS DE COLOMBIA LUZ DEL MUNDO',
        files: [
          {
            id: 1,
            tipo: 'pdf',
            url: '/assets/files/corporativo/asociaciones_ferrocarriles/ASOC.%20DE%20PENSIONADOS%20DE%20LA%20DESAPARECIDA%20EMPRESA/ACTA%20NOMBRAMIENTO%20ASOCIACION%20DE%20PENSIONADOS%20DE%20LA%20DESAPARECIDA%20EMPRESA%20PUERTOS%20DE%20COLOMBIA%20LUZ%20D.pdf',
            nombre:
              'ACTA NOMBRAMIENTO ASOCIACION DE PENSIONADOS DE LA DESAPARECIDA EMPRESA PUERTOS DE COLOMBIA LUZ DEL MUNDO.pdf',
          },
          {
            id: 2,
            tipo: 'pdf',
            url: '/assets/files/corporativo/asociaciones_ferrocarriles/ASOC.%20DE%20PENSIONADOS%20DE%20LA%20DESAPARECIDA%20EMPRESA/ASOCIACION%20DE%20PENSIONADOS%20DE%20LA%20DESAPARECIDA%20EMPRESA%20PUERTOS%20DE%20COLOMBIA%20LUZ%20DEL%20MUNDO.pdf',
            nombre:
              'ASOCIACION DE PENSIONADOS DE LA DESAPARECIDA EMPRESA PUERTOS DE COLOMBIA LUZ DEL MUNDO.pdf',
          },
          {
            id: 3,
            tipo: 'pdf',
            url: '/assets/files/corporativo/asociaciones_ferrocarriles/ASOC.%20DE%20PENSIONADOS%20DE%20LA%20DESAPARECIDA%20EMPRESA/NOMINA%20DE%20SOCIOS%20ASOCIACION%20DE%20PENSIONADOS%20DE%20LA%20DESAPARECIDA%20EMPRESA%20PUERTOS%20DE%20COLOMBIA%20LUZ%20DEL%20MUNDO.pdf',
            nombre:
              'NOMINA DE SOCIOS ASOCIACION DE PENSIONADOS DE LA DESAPARECIDA EMPRESA PUERTOS DE COLOMBIA LUZ DEL MUNDO.pdf',
          },
          {
            id: 4,
            tipo: 'pdf',
            url: '/assets/files/corporativo/asociaciones_ferrocarriles/ASOC.%20DE%20PENSIONADOS%20DE%20LA%20DESAPARECIDA%20EMPRESA/REP.%20LEGAL%20ASOCIACION%20DE%20PENSIONADOS%20DE%20LA%20DESAPARECIDA%20EMPRESA%20PUERTOS%20DE%20COLOMBIA%20LUZ%20DEL%20MUND.pdf',
            nombre:
              'REP. LEGAL ASOCIACION DE PENSIONADOS DE LA DESAPARECIDA EMPRESA PUERTOS DE COLOMBIA LUZ DEL MUNDO.pdf',
          },
        ],
      },
      {
        id: 1,
        nombre:
          'ASOCIACIÓN DE JUBILADOS Y PENSIONADOS DE EMPRESA PUERTOS DE COLOMBIA',
        files: [
          {
            id: 1,
            tipo: 'pdf',
            url: '/assets/files/corporativo/asociaciones_ferrocarriles/ASOCIACION DE JUBILADOS Y PENSIONADOS DE EMPRESA PUERTOS DE COLOMBIA/JUNTA DIRECTIVA  AJUPECOL.pdf',
            nombre: 'JUNTA DIRECTIVA  AJUPECOL.pdf',
          },
        ],
      },
      {
        id: 1,
        nombre: 'CÓMITES LOCALES',
        acordion: [
          {
            id: 1,
            nombre: '2025',
            files: [
              {
                id: 1,
                tipo: 'pdf',
                url: '/assets/files/corporativo/asociaciones_ferrocarriles/COMITES LOCALES/2025/COMITES LOCALES.pdf',
                nombre: 'COMITES LOCALES.pdf',
              },
            ],
          },
        ],
      },
      {
        id: 1,
        nombre: 'DIRECTORIO DE ASOCIACIONES DE PENSIONADOS DE FERROCARRILES',
        files: [
          {
            id: 1,
            tipo: 'pdf',
            url: '/assets/files/corporativo/asociaciones_ferrocarriles/DIRECTORIO DE ASOCIACIONES DE PENSIONADOS DE FERROCARRILES/DIRECTORIO ASOCIACIONES DE USUARIOS FCN  20251.pdf',
            nombre: 'DIRECTORIO ASOCIACIONES DE USUARIOS FCN.pdf',
          },
          {
            id: 2,
            tipo: 'pdf',
            url: '/assets/files/corporativo/asociaciones_ferrocarriles/DIRECTORIO DE ASOCIACIONES DE PENSIONADOS DE FERROCARRILES/DIRECTORIO ASOCIACIONES DE USUARIOS PNC  20251.pdf',
            nombre: 'DIRECTORIO ASOCIACIONES DE USUARIOS PNC.pdf',
          },
        ],
      },
       {
        id: 1,
        nombre: 'VEEDURIA CIUDADANA VIDA SALUD Y BIENESTAR CALI',
        files: [
          {
            id: 1,
            tipo: 'pdf',
            url: '/assets/files/corporativo/asociaciones_ferrocarriles/DIRECTORIO DE ASOCIACIONES DE PENSIONADOS DE FERROCARRILES/DIRECTORIO ASOCIACIONES DE USUARIOS FCN  20251.pdf',
            nombre: 'DIRECTORIO ASOCIACIONES DE USUARIOS FCN.pdf',
          },
          {
            id: 2,
            tipo: 'pdf',
            url: '/assets/files/corporativo/asociaciones_ferrocarriles/DIRECTORIO DE ASOCIACIONES DE PENSIONADOS DE FERROCARRILES/DIRECTORIO ASOCIACIONES DE USUARIOS PNC  20251.pdf',
            nombre: 'DIRECTORIO ASOCIACIONES DE USUARIOS PNC.pdf',
          },
        ],
      },
      {
        id: 1,
        nombre:
          'ONG VEEDURIA CIUDADANA NACIONAL PARA LA DEFENSA DE LOS PENSIONADOS',
        files: [
          {
            id: 1,
            tipo: 'pdf',
            url: '/assets/files/corporativo/asociaciones_ferrocarriles/ONG VEEDURIA CIUDADANA NACIONAL PARA LA DEFENSA DE LOS PENSIONADOS/OFICIO VEEDORES BARRANQUILLA.pdf',
            nombre: 'OFICIO VEEDORES BARRANQUILLA.pdf',
          },
          {
            id: 1,
            tipo: 'pdf',
            url: '/assets/files/corporativo/asociaciones_ferrocarriles/ONG VEEDURIA CIUDADANA NACIONAL PARA LA DEFENSA DE LOS PENSIONADOS/VEEDORES BARANQUILLA.pdf',
            nombre: 'VEEDORES BARANQUILLA.pdf',
          },
        ],
      },
      {
        id: 1,
        nombre: 'UNIÓN DE PENSIONADOS FERROVIARIOS UNIPENFERSANDER',
        files: [
          {
            id: 1,
            tipo: 'pdf',
            url: '/assets/files/corporativo/asociaciones_ferrocarriles/UNI%c3%93N%20DE%20PENSIONADOS%20FERROVIARIOS%20UNIPENFERSANDER/INFORMACI%c3%93N%20GENERAL%20UNI%c3%93N%20DE%20PENSIONADOS%20FERROVIARIOS%20UNIPENFERSANDER.pdf',
            nombre:
              'INFORMACIÓN GENERAL UNIÓN DE PENSIONADOS FERROVIARIOS UNIPENFERSANDER.pdf',
          },
        ],
      },
      {
        id: 1,
        nombre: 'UNIÓN DE PENSIONADOS PORTUARIOS DE SANTA MARTA (LA UNIÒN)',
        files: [
          {
            id: 1,
            tipo: 'pdf',
            url: '',
            nombre:
              'ACTA REEMPLAZO POR FALLECIMIENTO UNIÓN DE PENSIONADOS PORTUARIOS DE SANTA MARTA LA UNIÒN.pdf',
          },
          {
            id: 2,
            tipo: 'pdf',
            url: '',
            nombre:
              'ESTATUTOS UNIÓN DE PENSIONADOS PORTUARIOS DE SANTA MARTA LA UNIÒN.pdf',
          },
          {
            id: 3,
            tipo: 'pdf',
            url: '',
            nombre:
              'INFORMACIÓN GENERAL UNIÓN DE PENSIONADOS PORTUARIOS DE SANTA MARTA LA UNIÒN.pdf',
          },
          {
            id: 4,
            tipo: 'pdf',
            url: '',
            nombre:
              'PRESIDENTE JUNTA DIRECTIVA UNIÓN DE PENSIONADOS PORTUARIOS DE SANTA MARTA LA UNIÒN.pdf',
          },
        ],
      },
    ];
  }
}
