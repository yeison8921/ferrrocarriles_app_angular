interface Place {
  name: string;
  address: string;
  phone: string;
  phone2: string;
  mobile: string;
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