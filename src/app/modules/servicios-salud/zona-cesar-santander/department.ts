interface Place {
  name: string;
  address: string;
  phone: string;
  mobile: string;
  email: string;
  hours: string;
  services: string[]
}

interface Area {
  name: string;
  places: Place[];
}

interface City {
  name: string;
  areas: Area[];
}

export interface Department {
  name: string;
  cities: City[];
}