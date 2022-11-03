// Algo que é polimorfo tem a habilidade de assumir diferentes formas.

import { Animal, Cat, Dog } from './heranca';

class AnimalSounds {
  public playSound(animal: Animal): void {
    animal.makeNoise();
  }
}

const dog = new Dog('Bacon Valerio');
const cat = new Cat('José Carlos');
const animalSounds = new AnimalSounds();
animalSounds.playSound(dog);
animalSounds.playSound(cat);
