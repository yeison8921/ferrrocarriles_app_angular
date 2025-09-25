interface Informacion {
  name: string;
  position: string;
  email: string;
  location: string;
  city: string;
   phone: string;
   hv: string;
}

export interface Funcionario {
  name: string;
  people: Informacion[];
}