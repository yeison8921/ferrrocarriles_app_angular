export interface Comentarios {
  id: number;
  fechaHora: string;
  nombreUsuario: string;
  comentario: string;
  respuestas?: Comentarios[];
}
