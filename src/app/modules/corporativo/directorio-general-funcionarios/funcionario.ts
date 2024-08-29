interface Informacion {
  name: string;
  position: string;
  email: string;
  location: string;
  city: string;
  phone: string;
}

export interface Funcionario {
  name: string;
  people: Informacion[];
}