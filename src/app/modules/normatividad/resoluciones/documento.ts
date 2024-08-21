export interface Documento {
  title: string;
  files: { href: string; name: string; tipo: string }[];
  subaccordion: { title: string; files: { href: string; name: string; tipo: string }[] }[];
}