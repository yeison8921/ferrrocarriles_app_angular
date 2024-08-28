export interface Glosario {
  letter: string;
  words: Words[];
}

interface Words {
  word: string;
  definition: string;
}