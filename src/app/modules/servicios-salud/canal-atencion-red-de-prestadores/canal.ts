interface Place {
  city: string;
  name: string;
  address: string;
  phone: string;
  hours: string;
}

interface City {
  name: string;
  places: Place[];
}

export interface Canal {
  id: number;
  section: string;
  departments: City[];
}