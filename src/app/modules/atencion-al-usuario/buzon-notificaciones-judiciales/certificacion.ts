export interface Certificacion {
  name: string;
  files: File[];
  subaccordion?: Subaccordion[];
}

interface File {
  href: string;
  name: string;
  type: string
}

interface Subaccordion {
  name: string;
  files: File[]
}