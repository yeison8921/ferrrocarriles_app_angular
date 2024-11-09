interface Item {
  value: string;
  label: string;
}

export interface Option {
  [key: string]: Item[];
}