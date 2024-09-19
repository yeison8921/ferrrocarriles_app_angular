import { File } from '../../interfaces/acordion';

export interface Noticias {
  imagen: string;
  titulo: string;
  fecha: string;
  estracto: string;
  contenido?: string;
  url: string;
}

export interface Comunicados {
  imagen: string;
  titulo: string;
  fecha: string;
  texto: string;
  file?: File;
}

export interface Videos {
  titulo: string;
  fecha: string;
  descripcion: string;
  url: string;
  idVideo?: string;
}
